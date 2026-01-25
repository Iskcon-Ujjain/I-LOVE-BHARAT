(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Zw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Xg={exports:{}},wl={},Jg={exports:{}},J={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uo=Symbol.for("react.element"),eE=Symbol.for("react.portal"),tE=Symbol.for("react.fragment"),nE=Symbol.for("react.strict_mode"),rE=Symbol.for("react.profiler"),iE=Symbol.for("react.provider"),sE=Symbol.for("react.context"),oE=Symbol.for("react.forward_ref"),aE=Symbol.for("react.suspense"),lE=Symbol.for("react.memo"),uE=Symbol.for("react.lazy"),Tp=Symbol.iterator;function cE(t){return t===null||typeof t!="object"?null:(t=Tp&&t[Tp]||t["@@iterator"],typeof t=="function"?t:null)}var Zg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ey=Object.assign,ty={};function bi(t,e,n){this.props=t,this.context=e,this.refs=ty,this.updater=n||Zg}bi.prototype.isReactComponent={};bi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};bi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ny(){}ny.prototype=bi.prototype;function xh(t,e,n){this.props=t,this.context=e,this.refs=ty,this.updater=n||Zg}var Nh=xh.prototype=new ny;Nh.constructor=xh;ey(Nh,bi.prototype);Nh.isPureReactComponent=!0;var Ip=Array.isArray,ry=Object.prototype.hasOwnProperty,Dh={current:null},iy={key:!0,ref:!0,__self:!0,__source:!0};function sy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ry.call(e,r)&&!iy.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:uo,type:t,key:s,ref:o,props:i,_owner:Dh.current}}function hE(t,e){return{$$typeof:uo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Vh(t){return typeof t=="object"&&t!==null&&t.$$typeof===uo}function dE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Sp=/\/+/g;function Iu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?dE(""+t.key):e.toString(36)}function fa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case uo:case eE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Iu(o,0):r,Ip(i)?(n="",t!=null&&(n=t.replace(Sp,"$&/")+"/"),fa(i,e,n,"",function(h){return h})):i!=null&&(Vh(i)&&(i=hE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Sp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Ip(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Iu(s,l);o+=fa(s,e,n,u,i)}else if(u=cE(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Iu(s,l++),o+=fa(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ho(t,e,n){if(t==null)return t;var r=[],i=0;return fa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function fE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ot={current:null},pa={transition:null},pE={ReactCurrentDispatcher:ot,ReactCurrentBatchConfig:pa,ReactCurrentOwner:Dh};function oy(){throw Error("act(...) is not supported in production builds of React.")}J.Children={map:Ho,forEach:function(t,e,n){Ho(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ho(t,function(){e++}),e},toArray:function(t){return Ho(t,function(e){return e})||[]},only:function(t){if(!Vh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};J.Component=bi;J.Fragment=tE;J.Profiler=rE;J.PureComponent=xh;J.StrictMode=nE;J.Suspense=aE;J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pE;J.act=oy;J.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=ey({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Dh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)ry.call(e,u)&&!iy.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:uo,type:t.type,key:i,ref:s,props:r,_owner:o}};J.createContext=function(t){return t={$$typeof:sE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:iE,_context:t},t.Consumer=t};J.createElement=sy;J.createFactory=function(t){var e=sy.bind(null,t);return e.type=t,e};J.createRef=function(){return{current:null}};J.forwardRef=function(t){return{$$typeof:oE,render:t}};J.isValidElement=Vh;J.lazy=function(t){return{$$typeof:uE,_payload:{_status:-1,_result:t},_init:fE}};J.memo=function(t,e){return{$$typeof:lE,type:t,compare:e===void 0?null:e}};J.startTransition=function(t){var e=pa.transition;pa.transition={};try{t()}finally{pa.transition=e}};J.unstable_act=oy;J.useCallback=function(t,e){return ot.current.useCallback(t,e)};J.useContext=function(t){return ot.current.useContext(t)};J.useDebugValue=function(){};J.useDeferredValue=function(t){return ot.current.useDeferredValue(t)};J.useEffect=function(t,e){return ot.current.useEffect(t,e)};J.useId=function(){return ot.current.useId()};J.useImperativeHandle=function(t,e,n){return ot.current.useImperativeHandle(t,e,n)};J.useInsertionEffect=function(t,e){return ot.current.useInsertionEffect(t,e)};J.useLayoutEffect=function(t,e){return ot.current.useLayoutEffect(t,e)};J.useMemo=function(t,e){return ot.current.useMemo(t,e)};J.useReducer=function(t,e,n){return ot.current.useReducer(t,e,n)};J.useRef=function(t){return ot.current.useRef(t)};J.useState=function(t){return ot.current.useState(t)};J.useSyncExternalStore=function(t,e,n){return ot.current.useSyncExternalStore(t,e,n)};J.useTransition=function(){return ot.current.useTransition()};J.version="18.3.1";Jg.exports=J;var Ne=Jg.exports;const mE=Zw(Ne);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gE=Ne,yE=Symbol.for("react.element"),_E=Symbol.for("react.fragment"),vE=Object.prototype.hasOwnProperty,wE=gE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,EE={key:!0,ref:!0,__self:!0,__source:!0};function ay(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)vE.call(e,r)&&!EE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:yE,type:t,key:s,ref:o,props:i,_owner:wE.current}}wl.Fragment=_E;wl.jsx=ay;wl.jsxs=ay;Xg.exports=wl;var R=Xg.exports,lc={},ly={exports:{}},Tt={},uy={exports:{}},cy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,G){var X=z.length;z.push(G);e:for(;0<X;){var me=X-1>>>1,ae=z[me];if(0<i(ae,G))z[me]=G,z[X]=ae,X=me;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var G=z[0],X=z.pop();if(X!==G){z[0]=X;e:for(var me=0,ae=z.length,Te=ae>>>1;me<Te;){var Jt=2*(me+1)-1,Zt=z[Jt],en=Jt+1,tn=z[en];if(0>i(Zt,X))en<ae&&0>i(tn,Zt)?(z[me]=tn,z[en]=X,me=en):(z[me]=Zt,z[Jt]=X,me=Jt);else if(en<ae&&0>i(tn,X))z[me]=tn,z[en]=X,me=en;else break e}}return G}function i(z,G){var X=z.sortIndex-G.sortIndex;return X!==0?X:z.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,m=null,y=3,A=!1,x=!1,D=!1,L=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(z){for(var G=n(h);G!==null;){if(G.callback===null)r(h);else if(G.startTime<=z)r(h),G.sortIndex=G.expirationTime,e(u,G);else break;G=n(h)}}function V(z){if(D=!1,S(z),!x)if(n(u)!==null)x=!0,Hi(F);else{var G=n(h);G!==null&&Xt(V,G.startTime-z)}}function F(z,G){x=!1,D&&(D=!1,E(g),g=-1),A=!0;var X=y;try{for(S(G),m=n(u);m!==null&&(!(m.expirationTime>G)||z&&!k());){var me=m.callback;if(typeof me=="function"){m.callback=null,y=m.priorityLevel;var ae=me(m.expirationTime<=G);G=t.unstable_now(),typeof ae=="function"?m.callback=ae:m===n(u)&&r(u),S(G)}else r(u);m=n(u)}if(m!==null)var Te=!0;else{var Jt=n(h);Jt!==null&&Xt(V,Jt.startTime-G),Te=!1}return Te}finally{m=null,y=X,A=!1}}var j=!1,w=null,g=-1,v=5,T=-1;function k(){return!(t.unstable_now()-T<v)}function P(){if(w!==null){var z=t.unstable_now();T=z;var G=!0;try{G=w(!0,z)}finally{G?I():(j=!1,w=null)}}else j=!1}var I;if(typeof _=="function")I=function(){_(P)};else if(typeof MessageChannel<"u"){var St=new MessageChannel,hr=St.port2;St.port1.onmessage=P,I=function(){hr.postMessage(null)}}else I=function(){L(P,0)};function Hi(z){w=z,j||(j=!0,I())}function Xt(z,G){g=L(function(){z(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){x||A||(x=!0,Hi(F))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(y){case 1:case 2:case 3:var G=3;break;default:G=y}var X=y;y=G;try{return z()}finally{y=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,G){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var X=y;y=z;try{return G()}finally{y=X}},t.unstable_scheduleCallback=function(z,G,X){var me=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?me+X:me):X=me,z){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=X+ae,z={id:f++,callback:G,priorityLevel:z,startTime:X,expirationTime:ae,sortIndex:-1},X>me?(z.sortIndex=X,e(h,z),n(u)===null&&z===n(h)&&(D?(E(g),g=-1):D=!0,Xt(V,X-me))):(z.sortIndex=ae,e(u,z),x||A||(x=!0,Hi(F))),z},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(z){var G=y;return function(){var X=y;y=G;try{return z.apply(this,arguments)}finally{y=X}}}})(cy);uy.exports=cy;var TE=uy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IE=Ne,Et=TE;function M(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hy=new Set,Ms={};function Ur(t,e){wi(t,e),wi(t+"Capture",e)}function wi(t,e){for(Ms[t]=e,t=0;t<e.length;t++)hy.add(e[t])}var fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uc=Object.prototype.hasOwnProperty,SE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ap={},kp={};function AE(t){return uc.call(kp,t)?!0:uc.call(Ap,t)?!1:SE.test(t)?kp[t]=!0:(Ap[t]=!0,!1)}function kE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function RE(t,e,n,r){if(e===null||typeof e>"u"||kE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function at(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ze[t]=new at(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ze[e]=new at(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ze[t]=new at(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ze[t]=new at(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ze[t]=new at(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ze[t]=new at(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ze[t]=new at(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ze[t]=new at(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ze[t]=new at(t,5,!1,t.toLowerCase(),null,!1,!1)});var Oh=/[\-:]([a-z])/g;function Lh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Oh,Lh);ze[e]=new at(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Oh,Lh);ze[e]=new at(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Oh,Lh);ze[e]=new at(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ze[t]=new at(t,1,!1,t.toLowerCase(),null,!1,!1)});ze.xlinkHref=new at("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ze[t]=new at(t,1,!1,t.toLowerCase(),null,!0,!0)});function bh(t,e,n,r){var i=ze.hasOwnProperty(e)?ze[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(RE(e,n,i,r)&&(n=null),r||i===null?AE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Tn=IE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wo=Symbol.for("react.element"),Xr=Symbol.for("react.portal"),Jr=Symbol.for("react.fragment"),Mh=Symbol.for("react.strict_mode"),cc=Symbol.for("react.profiler"),dy=Symbol.for("react.provider"),fy=Symbol.for("react.context"),Fh=Symbol.for("react.forward_ref"),hc=Symbol.for("react.suspense"),dc=Symbol.for("react.suspense_list"),Uh=Symbol.for("react.memo"),xn=Symbol.for("react.lazy"),py=Symbol.for("react.offscreen"),Rp=Symbol.iterator;function ss(t){return t===null||typeof t!="object"?null:(t=Rp&&t[Rp]||t["@@iterator"],typeof t=="function"?t:null)}var _e=Object.assign,Su;function ms(t){if(Su===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Su=e&&e[1]||""}return`
`+Su+t}var Au=!1;function ku(t,e){if(!t||Au)return"";Au=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Au=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ms(t):""}function CE(t){switch(t.tag){case 5:return ms(t.type);case 16:return ms("Lazy");case 13:return ms("Suspense");case 19:return ms("SuspenseList");case 0:case 2:case 15:return t=ku(t.type,!1),t;case 11:return t=ku(t.type.render,!1),t;case 1:return t=ku(t.type,!0),t;default:return""}}function fc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Jr:return"Fragment";case Xr:return"Portal";case cc:return"Profiler";case Mh:return"StrictMode";case hc:return"Suspense";case dc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case fy:return(t.displayName||"Context")+".Consumer";case dy:return(t._context.displayName||"Context")+".Provider";case Fh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Uh:return e=t.displayName||null,e!==null?e:fc(t.type)||"Memo";case xn:e=t._payload,t=t._init;try{return fc(t(e))}catch{}}return null}function PE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fc(e);case 8:return e===Mh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function tr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function my(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function xE(t){var e=my(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ko(t){t._valueTracker||(t._valueTracker=xE(t))}function gy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=my(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Oa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function pc(t,e){var n=e.checked;return _e({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Cp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=tr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function yy(t,e){e=e.checked,e!=null&&bh(t,"checked",e,!1)}function mc(t,e){yy(t,e);var n=tr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?gc(t,e.type,n):e.hasOwnProperty("defaultValue")&&gc(t,e.type,tr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Pp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function gc(t,e,n){(e!=="number"||Oa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var gs=Array.isArray;function ci(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+tr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function yc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(M(91));return _e({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function xp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(M(92));if(gs(n)){if(1<n.length)throw Error(M(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:tr(n)}}function _y(t,e){var n=tr(e.value),r=tr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Np(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function vy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _c(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?vy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Go,wy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Go=Go||document.createElement("div"),Go.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Go.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Fs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Is={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},NE=["Webkit","ms","Moz","O"];Object.keys(Is).forEach(function(t){NE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Is[e]=Is[t]})});function Ey(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Is.hasOwnProperty(t)&&Is[t]?(""+e).trim():e+"px"}function Ty(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ey(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var DE=_e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vc(t,e){if(e){if(DE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(M(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(M(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(M(61))}if(e.style!=null&&typeof e.style!="object")throw Error(M(62))}}function wc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ec=null;function jh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Tc=null,hi=null,di=null;function Dp(t){if(t=fo(t)){if(typeof Tc!="function")throw Error(M(280));var e=t.stateNode;e&&(e=Al(e),Tc(t.stateNode,t.type,e))}}function Iy(t){hi?di?di.push(t):di=[t]:hi=t}function Sy(){if(hi){var t=hi,e=di;if(di=hi=null,Dp(t),e)for(t=0;t<e.length;t++)Dp(e[t])}}function Ay(t,e){return t(e)}function ky(){}var Ru=!1;function Ry(t,e,n){if(Ru)return t(e,n);Ru=!0;try{return Ay(t,e,n)}finally{Ru=!1,(hi!==null||di!==null)&&(ky(),Sy())}}function Us(t,e){var n=t.stateNode;if(n===null)return null;var r=Al(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(M(231,e,typeof n));return n}var Ic=!1;if(fn)try{var os={};Object.defineProperty(os,"passive",{get:function(){Ic=!0}}),window.addEventListener("test",os,os),window.removeEventListener("test",os,os)}catch{Ic=!1}function VE(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Ss=!1,La=null,ba=!1,Sc=null,OE={onError:function(t){Ss=!0,La=t}};function LE(t,e,n,r,i,s,o,l,u){Ss=!1,La=null,VE.apply(OE,arguments)}function bE(t,e,n,r,i,s,o,l,u){if(LE.apply(this,arguments),Ss){if(Ss){var h=La;Ss=!1,La=null}else throw Error(M(198));ba||(ba=!0,Sc=h)}}function jr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Cy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Vp(t){if(jr(t)!==t)throw Error(M(188))}function ME(t){var e=t.alternate;if(!e){if(e=jr(t),e===null)throw Error(M(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Vp(i),t;if(s===r)return Vp(i),e;s=s.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?t:e}function Py(t){return t=ME(t),t!==null?xy(t):null}function xy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=xy(t);if(e!==null)return e;t=t.sibling}return null}var Ny=Et.unstable_scheduleCallback,Op=Et.unstable_cancelCallback,FE=Et.unstable_shouldYield,UE=Et.unstable_requestPaint,Se=Et.unstable_now,jE=Et.unstable_getCurrentPriorityLevel,zh=Et.unstable_ImmediatePriority,Dy=Et.unstable_UserBlockingPriority,Ma=Et.unstable_NormalPriority,zE=Et.unstable_LowPriority,Vy=Et.unstable_IdlePriority,El=null,$t=null;function BE(t){if($t&&typeof $t.onCommitFiberRoot=="function")try{$t.onCommitFiberRoot(El,t,void 0,(t.current.flags&128)===128)}catch{}}var bt=Math.clz32?Math.clz32:HE,$E=Math.log,qE=Math.LN2;function HE(t){return t>>>=0,t===0?32:31-($E(t)/qE|0)|0}var Qo=64,Yo=4194304;function ys(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Fa(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ys(l):(s&=o,s!==0&&(r=ys(s)))}else o=n&~i,o!==0?r=ys(o):s!==0&&(r=ys(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-bt(e),i=1<<n,r|=t[n],e&=~i;return r}function WE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function KE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-bt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=WE(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Ac(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Oy(){var t=Qo;return Qo<<=1,!(Qo&4194240)&&(Qo=64),t}function Cu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function co(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-bt(e),t[e]=n}function GE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-bt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Bh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-bt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var se=0;function Ly(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var by,$h,My,Fy,Uy,kc=!1,Xo=[],Bn=null,$n=null,qn=null,js=new Map,zs=new Map,Dn=[],QE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lp(t,e){switch(t){case"focusin":case"focusout":Bn=null;break;case"dragenter":case"dragleave":$n=null;break;case"mouseover":case"mouseout":qn=null;break;case"pointerover":case"pointerout":js.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":zs.delete(e.pointerId)}}function as(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=fo(e),e!==null&&$h(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function YE(t,e,n,r,i){switch(e){case"focusin":return Bn=as(Bn,t,e,n,r,i),!0;case"dragenter":return $n=as($n,t,e,n,r,i),!0;case"mouseover":return qn=as(qn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return js.set(s,as(js.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,zs.set(s,as(zs.get(s)||null,t,e,n,r,i)),!0}return!1}function jy(t){var e=wr(t.target);if(e!==null){var n=jr(e);if(n!==null){if(e=n.tag,e===13){if(e=Cy(n),e!==null){t.blockedOn=e,Uy(t.priority,function(){My(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ma(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Rc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ec=r,n.target.dispatchEvent(r),Ec=null}else return e=fo(n),e!==null&&$h(e),t.blockedOn=n,!1;e.shift()}return!0}function bp(t,e,n){ma(t)&&n.delete(e)}function XE(){kc=!1,Bn!==null&&ma(Bn)&&(Bn=null),$n!==null&&ma($n)&&($n=null),qn!==null&&ma(qn)&&(qn=null),js.forEach(bp),zs.forEach(bp)}function ls(t,e){t.blockedOn===e&&(t.blockedOn=null,kc||(kc=!0,Et.unstable_scheduleCallback(Et.unstable_NormalPriority,XE)))}function Bs(t){function e(i){return ls(i,t)}if(0<Xo.length){ls(Xo[0],t);for(var n=1;n<Xo.length;n++){var r=Xo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Bn!==null&&ls(Bn,t),$n!==null&&ls($n,t),qn!==null&&ls(qn,t),js.forEach(e),zs.forEach(e),n=0;n<Dn.length;n++)r=Dn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Dn.length&&(n=Dn[0],n.blockedOn===null);)jy(n),n.blockedOn===null&&Dn.shift()}var fi=Tn.ReactCurrentBatchConfig,Ua=!0;function JE(t,e,n,r){var i=se,s=fi.transition;fi.transition=null;try{se=1,qh(t,e,n,r)}finally{se=i,fi.transition=s}}function ZE(t,e,n,r){var i=se,s=fi.transition;fi.transition=null;try{se=4,qh(t,e,n,r)}finally{se=i,fi.transition=s}}function qh(t,e,n,r){if(Ua){var i=Rc(t,e,n,r);if(i===null)Fu(t,e,r,ja,n),Lp(t,r);else if(YE(i,t,e,n,r))r.stopPropagation();else if(Lp(t,r),e&4&&-1<QE.indexOf(t)){for(;i!==null;){var s=fo(i);if(s!==null&&by(s),s=Rc(t,e,n,r),s===null&&Fu(t,e,r,ja,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Fu(t,e,r,null,n)}}var ja=null;function Rc(t,e,n,r){if(ja=null,t=jh(r),t=wr(t),t!==null)if(e=jr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Cy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ja=t,null}function zy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jE()){case zh:return 1;case Dy:return 4;case Ma:case zE:return 16;case Vy:return 536870912;default:return 16}default:return 16}}var Fn=null,Hh=null,ga=null;function By(){if(ga)return ga;var t,e=Hh,n=e.length,r,i="value"in Fn?Fn.value:Fn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ga=i.slice(t,1<r?1-r:void 0)}function ya(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Jo(){return!0}function Mp(){return!1}function It(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Jo:Mp,this.isPropagationStopped=Mp,this}return _e(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Jo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Jo)},persist:function(){},isPersistent:Jo}),e}var Mi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wh=It(Mi),ho=_e({},Mi,{view:0,detail:0}),eT=It(ho),Pu,xu,us,Tl=_e({},ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==us&&(us&&t.type==="mousemove"?(Pu=t.screenX-us.screenX,xu=t.screenY-us.screenY):xu=Pu=0,us=t),Pu)},movementY:function(t){return"movementY"in t?t.movementY:xu}}),Fp=It(Tl),tT=_e({},Tl,{dataTransfer:0}),nT=It(tT),rT=_e({},ho,{relatedTarget:0}),Nu=It(rT),iT=_e({},Mi,{animationName:0,elapsedTime:0,pseudoElement:0}),sT=It(iT),oT=_e({},Mi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),aT=It(oT),lT=_e({},Mi,{data:0}),Up=It(lT),uT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=hT[t])?!!e[t]:!1}function Kh(){return dT}var fT=_e({},ho,{key:function(t){if(t.key){var e=uT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ya(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?cT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kh,charCode:function(t){return t.type==="keypress"?ya(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ya(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),pT=It(fT),mT=_e({},Tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jp=It(mT),gT=_e({},ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kh}),yT=It(gT),_T=_e({},Mi,{propertyName:0,elapsedTime:0,pseudoElement:0}),vT=It(_T),wT=_e({},Tl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ET=It(wT),TT=[9,13,27,32],Gh=fn&&"CompositionEvent"in window,As=null;fn&&"documentMode"in document&&(As=document.documentMode);var IT=fn&&"TextEvent"in window&&!As,$y=fn&&(!Gh||As&&8<As&&11>=As),zp=" ",Bp=!1;function qy(t,e){switch(t){case"keyup":return TT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zr=!1;function ST(t,e){switch(t){case"compositionend":return Hy(e);case"keypress":return e.which!==32?null:(Bp=!0,zp);case"textInput":return t=e.data,t===zp&&Bp?null:t;default:return null}}function AT(t,e){if(Zr)return t==="compositionend"||!Gh&&qy(t,e)?(t=By(),ga=Hh=Fn=null,Zr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return $y&&e.locale!=="ko"?null:e.data;default:return null}}var kT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $p(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!kT[t.type]:e==="textarea"}function Wy(t,e,n,r){Iy(r),e=za(e,"onChange"),0<e.length&&(n=new Wh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ks=null,$s=null;function RT(t){r_(t,0)}function Il(t){var e=ni(t);if(gy(e))return t}function CT(t,e){if(t==="change")return e}var Ky=!1;if(fn){var Du;if(fn){var Vu="oninput"in document;if(!Vu){var qp=document.createElement("div");qp.setAttribute("oninput","return;"),Vu=typeof qp.oninput=="function"}Du=Vu}else Du=!1;Ky=Du&&(!document.documentMode||9<document.documentMode)}function Hp(){ks&&(ks.detachEvent("onpropertychange",Gy),$s=ks=null)}function Gy(t){if(t.propertyName==="value"&&Il($s)){var e=[];Wy(e,$s,t,jh(t)),Ry(RT,e)}}function PT(t,e,n){t==="focusin"?(Hp(),ks=e,$s=n,ks.attachEvent("onpropertychange",Gy)):t==="focusout"&&Hp()}function xT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Il($s)}function NT(t,e){if(t==="click")return Il(e)}function DT(t,e){if(t==="input"||t==="change")return Il(e)}function VT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ft=typeof Object.is=="function"?Object.is:VT;function qs(t,e){if(Ft(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!uc.call(e,i)||!Ft(t[i],e[i]))return!1}return!0}function Wp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Kp(t,e){var n=Wp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Wp(n)}}function Qy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Qy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Yy(){for(var t=window,e=Oa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Oa(t.document)}return e}function Qh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function OT(t){var e=Yy(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Qy(n.ownerDocument.documentElement,n)){if(r!==null&&Qh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Kp(n,s);var o=Kp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var LT=fn&&"documentMode"in document&&11>=document.documentMode,ei=null,Cc=null,Rs=null,Pc=!1;function Gp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pc||ei==null||ei!==Oa(r)||(r=ei,"selectionStart"in r&&Qh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Rs&&qs(Rs,r)||(Rs=r,r=za(Cc,"onSelect"),0<r.length&&(e=new Wh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ei)))}function Zo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ti={animationend:Zo("Animation","AnimationEnd"),animationiteration:Zo("Animation","AnimationIteration"),animationstart:Zo("Animation","AnimationStart"),transitionend:Zo("Transition","TransitionEnd")},Ou={},Xy={};fn&&(Xy=document.createElement("div").style,"AnimationEvent"in window||(delete ti.animationend.animation,delete ti.animationiteration.animation,delete ti.animationstart.animation),"TransitionEvent"in window||delete ti.transitionend.transition);function Sl(t){if(Ou[t])return Ou[t];if(!ti[t])return t;var e=ti[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Xy)return Ou[t]=e[n];return t}var Jy=Sl("animationend"),Zy=Sl("animationiteration"),e_=Sl("animationstart"),t_=Sl("transitionend"),n_=new Map,Qp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function or(t,e){n_.set(t,e),Ur(e,[t])}for(var Lu=0;Lu<Qp.length;Lu++){var bu=Qp[Lu],bT=bu.toLowerCase(),MT=bu[0].toUpperCase()+bu.slice(1);or(bT,"on"+MT)}or(Jy,"onAnimationEnd");or(Zy,"onAnimationIteration");or(e_,"onAnimationStart");or("dblclick","onDoubleClick");or("focusin","onFocus");or("focusout","onBlur");or(t_,"onTransitionEnd");wi("onMouseEnter",["mouseout","mouseover"]);wi("onMouseLeave",["mouseout","mouseover"]);wi("onPointerEnter",["pointerout","pointerover"]);wi("onPointerLeave",["pointerout","pointerover"]);Ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ur("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _s="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),FT=new Set("cancel close invalid load scroll toggle".split(" ").concat(_s));function Yp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,bE(r,e,void 0,t),t.currentTarget=null}function r_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Yp(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Yp(i,l,h),s=u}}}if(ba)throw t=Sc,ba=!1,Sc=null,t}function he(t,e){var n=e[Oc];n===void 0&&(n=e[Oc]=new Set);var r=t+"__bubble";n.has(r)||(i_(e,t,2,!1),n.add(r))}function Mu(t,e,n){var r=0;e&&(r|=4),i_(n,t,r,e)}var ea="_reactListening"+Math.random().toString(36).slice(2);function Hs(t){if(!t[ea]){t[ea]=!0,hy.forEach(function(n){n!=="selectionchange"&&(FT.has(n)||Mu(n,!1,t),Mu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ea]||(e[ea]=!0,Mu("selectionchange",!1,e))}}function i_(t,e,n,r){switch(zy(e)){case 1:var i=JE;break;case 4:i=ZE;break;default:i=qh}n=i.bind(null,e,n,t),i=void 0,!Ic||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Fu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=wr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Ry(function(){var h=s,f=jh(n),m=[];e:{var y=n_.get(t);if(y!==void 0){var A=Wh,x=t;switch(t){case"keypress":if(ya(n)===0)break e;case"keydown":case"keyup":A=pT;break;case"focusin":x="focus",A=Nu;break;case"focusout":x="blur",A=Nu;break;case"beforeblur":case"afterblur":A=Nu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=Fp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=nT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=yT;break;case Jy:case Zy:case e_:A=sT;break;case t_:A=vT;break;case"scroll":A=eT;break;case"wheel":A=ET;break;case"copy":case"cut":case"paste":A=aT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=jp}var D=(e&4)!==0,L=!D&&t==="scroll",E=D?y!==null?y+"Capture":null:y;D=[];for(var _=h,S;_!==null;){S=_;var V=S.stateNode;if(S.tag===5&&V!==null&&(S=V,E!==null&&(V=Us(_,E),V!=null&&D.push(Ws(_,V,S)))),L)break;_=_.return}0<D.length&&(y=new A(y,x,null,n,f),m.push({event:y,listeners:D}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",y&&n!==Ec&&(x=n.relatedTarget||n.fromElement)&&(wr(x)||x[pn]))break e;if((A||y)&&(y=f.window===f?f:(y=f.ownerDocument)?y.defaultView||y.parentWindow:window,A?(x=n.relatedTarget||n.toElement,A=h,x=x?wr(x):null,x!==null&&(L=jr(x),x!==L||x.tag!==5&&x.tag!==6)&&(x=null)):(A=null,x=h),A!==x)){if(D=Fp,V="onMouseLeave",E="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(D=jp,V="onPointerLeave",E="onPointerEnter",_="pointer"),L=A==null?y:ni(A),S=x==null?y:ni(x),y=new D(V,_+"leave",A,n,f),y.target=L,y.relatedTarget=S,V=null,wr(f)===h&&(D=new D(E,_+"enter",x,n,f),D.target=S,D.relatedTarget=L,V=D),L=V,A&&x)t:{for(D=A,E=x,_=0,S=D;S;S=Kr(S))_++;for(S=0,V=E;V;V=Kr(V))S++;for(;0<_-S;)D=Kr(D),_--;for(;0<S-_;)E=Kr(E),S--;for(;_--;){if(D===E||E!==null&&D===E.alternate)break t;D=Kr(D),E=Kr(E)}D=null}else D=null;A!==null&&Xp(m,y,A,D,!1),x!==null&&L!==null&&Xp(m,L,x,D,!0)}}e:{if(y=h?ni(h):window,A=y.nodeName&&y.nodeName.toLowerCase(),A==="select"||A==="input"&&y.type==="file")var F=CT;else if($p(y))if(Ky)F=DT;else{F=xT;var j=PT}else(A=y.nodeName)&&A.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(F=NT);if(F&&(F=F(t,h))){Wy(m,F,n,f);break e}j&&j(t,y,h),t==="focusout"&&(j=y._wrapperState)&&j.controlled&&y.type==="number"&&gc(y,"number",y.value)}switch(j=h?ni(h):window,t){case"focusin":($p(j)||j.contentEditable==="true")&&(ei=j,Cc=h,Rs=null);break;case"focusout":Rs=Cc=ei=null;break;case"mousedown":Pc=!0;break;case"contextmenu":case"mouseup":case"dragend":Pc=!1,Gp(m,n,f);break;case"selectionchange":if(LT)break;case"keydown":case"keyup":Gp(m,n,f)}var w;if(Gh)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else Zr?qy(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&($y&&n.locale!=="ko"&&(Zr||g!=="onCompositionStart"?g==="onCompositionEnd"&&Zr&&(w=By()):(Fn=f,Hh="value"in Fn?Fn.value:Fn.textContent,Zr=!0)),j=za(h,g),0<j.length&&(g=new Up(g,t,null,n,f),m.push({event:g,listeners:j}),w?g.data=w:(w=Hy(n),w!==null&&(g.data=w)))),(w=IT?ST(t,n):AT(t,n))&&(h=za(h,"onBeforeInput"),0<h.length&&(f=new Up("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:h}),f.data=w))}r_(m,e)})}function Ws(t,e,n){return{instance:t,listener:e,currentTarget:n}}function za(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Us(t,n),s!=null&&r.unshift(Ws(t,s,i)),s=Us(t,e),s!=null&&r.push(Ws(t,s,i))),t=t.return}return r}function Kr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Xp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=Us(n,s),u!=null&&o.unshift(Ws(n,u,l))):i||(u=Us(n,s),u!=null&&o.push(Ws(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var UT=/\r\n?/g,jT=/\u0000|\uFFFD/g;function Jp(t){return(typeof t=="string"?t:""+t).replace(UT,`
`).replace(jT,"")}function ta(t,e,n){if(e=Jp(e),Jp(t)!==e&&n)throw Error(M(425))}function Ba(){}var xc=null,Nc=null;function Dc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Vc=typeof setTimeout=="function"?setTimeout:void 0,zT=typeof clearTimeout=="function"?clearTimeout:void 0,Zp=typeof Promise=="function"?Promise:void 0,BT=typeof queueMicrotask=="function"?queueMicrotask:typeof Zp<"u"?function(t){return Zp.resolve(null).then(t).catch($T)}:Vc;function $T(t){setTimeout(function(){throw t})}function Uu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Bs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Bs(e)}function Hn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function em(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Fi=Math.random().toString(36).slice(2),Bt="__reactFiber$"+Fi,Ks="__reactProps$"+Fi,pn="__reactContainer$"+Fi,Oc="__reactEvents$"+Fi,qT="__reactListeners$"+Fi,HT="__reactHandles$"+Fi;function wr(t){var e=t[Bt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[pn]||n[Bt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=em(t);t!==null;){if(n=t[Bt])return n;t=em(t)}return e}t=n,n=t.parentNode}return null}function fo(t){return t=t[Bt]||t[pn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ni(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(M(33))}function Al(t){return t[Ks]||null}var Lc=[],ri=-1;function ar(t){return{current:t}}function fe(t){0>ri||(t.current=Lc[ri],Lc[ri]=null,ri--)}function ue(t,e){ri++,Lc[ri]=t.current,t.current=e}var nr={},et=ar(nr),ht=ar(!1),Cr=nr;function Ei(t,e){var n=t.type.contextTypes;if(!n)return nr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function dt(t){return t=t.childContextTypes,t!=null}function $a(){fe(ht),fe(et)}function tm(t,e,n){if(et.current!==nr)throw Error(M(168));ue(et,e),ue(ht,n)}function s_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(M(108,PE(t)||"Unknown",i));return _e({},n,r)}function qa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||nr,Cr=et.current,ue(et,t),ue(ht,ht.current),!0}function nm(t,e,n){var r=t.stateNode;if(!r)throw Error(M(169));n?(t=s_(t,e,Cr),r.__reactInternalMemoizedMergedChildContext=t,fe(ht),fe(et),ue(et,t)):fe(ht),ue(ht,n)}var on=null,kl=!1,ju=!1;function o_(t){on===null?on=[t]:on.push(t)}function WT(t){kl=!0,o_(t)}function lr(){if(!ju&&on!==null){ju=!0;var t=0,e=se;try{var n=on;for(se=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}on=null,kl=!1}catch(i){throw on!==null&&(on=on.slice(t+1)),Ny(zh,lr),i}finally{se=e,ju=!1}}return null}var ii=[],si=0,Ha=null,Wa=0,At=[],kt=0,Pr=null,an=1,ln="";function yr(t,e){ii[si++]=Wa,ii[si++]=Ha,Ha=t,Wa=e}function a_(t,e,n){At[kt++]=an,At[kt++]=ln,At[kt++]=Pr,Pr=t;var r=an;t=ln;var i=32-bt(r)-1;r&=~(1<<i),n+=1;var s=32-bt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,an=1<<32-bt(e)+i|n<<i|r,ln=s+t}else an=1<<s|n<<i|r,ln=t}function Yh(t){t.return!==null&&(yr(t,1),a_(t,1,0))}function Xh(t){for(;t===Ha;)Ha=ii[--si],ii[si]=null,Wa=ii[--si],ii[si]=null;for(;t===Pr;)Pr=At[--kt],At[kt]=null,ln=At[--kt],At[kt]=null,an=At[--kt],At[kt]=null}var vt=null,yt=null,pe=!1,Lt=null;function l_(t,e){var n=Rt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function rm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,vt=t,yt=Hn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,vt=t,yt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Pr!==null?{id:an,overflow:ln}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Rt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,vt=t,yt=null,!0):!1;default:return!1}}function bc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Mc(t){if(pe){var e=yt;if(e){var n=e;if(!rm(t,e)){if(bc(t))throw Error(M(418));e=Hn(n.nextSibling);var r=vt;e&&rm(t,e)?l_(r,n):(t.flags=t.flags&-4097|2,pe=!1,vt=t)}}else{if(bc(t))throw Error(M(418));t.flags=t.flags&-4097|2,pe=!1,vt=t}}}function im(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;vt=t}function na(t){if(t!==vt)return!1;if(!pe)return im(t),pe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Dc(t.type,t.memoizedProps)),e&&(e=yt)){if(bc(t))throw u_(),Error(M(418));for(;e;)l_(t,e),e=Hn(e.nextSibling)}if(im(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){yt=Hn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}yt=null}}else yt=vt?Hn(t.stateNode.nextSibling):null;return!0}function u_(){for(var t=yt;t;)t=Hn(t.nextSibling)}function Ti(){yt=vt=null,pe=!1}function Jh(t){Lt===null?Lt=[t]:Lt.push(t)}var KT=Tn.ReactCurrentBatchConfig;function cs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,t))}return t}function ra(t,e){throw t=Object.prototype.toString.call(e),Error(M(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function sm(t){var e=t._init;return e(t._payload)}function c_(t){function e(E,_){if(t){var S=E.deletions;S===null?(E.deletions=[_],E.flags|=16):S.push(_)}}function n(E,_){if(!t)return null;for(;_!==null;)e(E,_),_=_.sibling;return null}function r(E,_){for(E=new Map;_!==null;)_.key!==null?E.set(_.key,_):E.set(_.index,_),_=_.sibling;return E}function i(E,_){return E=Qn(E,_),E.index=0,E.sibling=null,E}function s(E,_,S){return E.index=S,t?(S=E.alternate,S!==null?(S=S.index,S<_?(E.flags|=2,_):S):(E.flags|=2,_)):(E.flags|=1048576,_)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function l(E,_,S,V){return _===null||_.tag!==6?(_=Ku(S,E.mode,V),_.return=E,_):(_=i(_,S),_.return=E,_)}function u(E,_,S,V){var F=S.type;return F===Jr?f(E,_,S.props.children,V,S.key):_!==null&&(_.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===xn&&sm(F)===_.type)?(V=i(_,S.props),V.ref=cs(E,_,S),V.return=E,V):(V=Sa(S.type,S.key,S.props,null,E.mode,V),V.ref=cs(E,_,S),V.return=E,V)}function h(E,_,S,V){return _===null||_.tag!==4||_.stateNode.containerInfo!==S.containerInfo||_.stateNode.implementation!==S.implementation?(_=Gu(S,E.mode,V),_.return=E,_):(_=i(_,S.children||[]),_.return=E,_)}function f(E,_,S,V,F){return _===null||_.tag!==7?(_=Ar(S,E.mode,V,F),_.return=E,_):(_=i(_,S),_.return=E,_)}function m(E,_,S){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Ku(""+_,E.mode,S),_.return=E,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Wo:return S=Sa(_.type,_.key,_.props,null,E.mode,S),S.ref=cs(E,null,_),S.return=E,S;case Xr:return _=Gu(_,E.mode,S),_.return=E,_;case xn:var V=_._init;return m(E,V(_._payload),S)}if(gs(_)||ss(_))return _=Ar(_,E.mode,S,null),_.return=E,_;ra(E,_)}return null}function y(E,_,S,V){var F=_!==null?_.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return F!==null?null:l(E,_,""+S,V);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Wo:return S.key===F?u(E,_,S,V):null;case Xr:return S.key===F?h(E,_,S,V):null;case xn:return F=S._init,y(E,_,F(S._payload),V)}if(gs(S)||ss(S))return F!==null?null:f(E,_,S,V,null);ra(E,S)}return null}function A(E,_,S,V,F){if(typeof V=="string"&&V!==""||typeof V=="number")return E=E.get(S)||null,l(_,E,""+V,F);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Wo:return E=E.get(V.key===null?S:V.key)||null,u(_,E,V,F);case Xr:return E=E.get(V.key===null?S:V.key)||null,h(_,E,V,F);case xn:var j=V._init;return A(E,_,S,j(V._payload),F)}if(gs(V)||ss(V))return E=E.get(S)||null,f(_,E,V,F,null);ra(_,V)}return null}function x(E,_,S,V){for(var F=null,j=null,w=_,g=_=0,v=null;w!==null&&g<S.length;g++){w.index>g?(v=w,w=null):v=w.sibling;var T=y(E,w,S[g],V);if(T===null){w===null&&(w=v);break}t&&w&&T.alternate===null&&e(E,w),_=s(T,_,g),j===null?F=T:j.sibling=T,j=T,w=v}if(g===S.length)return n(E,w),pe&&yr(E,g),F;if(w===null){for(;g<S.length;g++)w=m(E,S[g],V),w!==null&&(_=s(w,_,g),j===null?F=w:j.sibling=w,j=w);return pe&&yr(E,g),F}for(w=r(E,w);g<S.length;g++)v=A(w,E,g,S[g],V),v!==null&&(t&&v.alternate!==null&&w.delete(v.key===null?g:v.key),_=s(v,_,g),j===null?F=v:j.sibling=v,j=v);return t&&w.forEach(function(k){return e(E,k)}),pe&&yr(E,g),F}function D(E,_,S,V){var F=ss(S);if(typeof F!="function")throw Error(M(150));if(S=F.call(S),S==null)throw Error(M(151));for(var j=F=null,w=_,g=_=0,v=null,T=S.next();w!==null&&!T.done;g++,T=S.next()){w.index>g?(v=w,w=null):v=w.sibling;var k=y(E,w,T.value,V);if(k===null){w===null&&(w=v);break}t&&w&&k.alternate===null&&e(E,w),_=s(k,_,g),j===null?F=k:j.sibling=k,j=k,w=v}if(T.done)return n(E,w),pe&&yr(E,g),F;if(w===null){for(;!T.done;g++,T=S.next())T=m(E,T.value,V),T!==null&&(_=s(T,_,g),j===null?F=T:j.sibling=T,j=T);return pe&&yr(E,g),F}for(w=r(E,w);!T.done;g++,T=S.next())T=A(w,E,g,T.value,V),T!==null&&(t&&T.alternate!==null&&w.delete(T.key===null?g:T.key),_=s(T,_,g),j===null?F=T:j.sibling=T,j=T);return t&&w.forEach(function(P){return e(E,P)}),pe&&yr(E,g),F}function L(E,_,S,V){if(typeof S=="object"&&S!==null&&S.type===Jr&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Wo:e:{for(var F=S.key,j=_;j!==null;){if(j.key===F){if(F=S.type,F===Jr){if(j.tag===7){n(E,j.sibling),_=i(j,S.props.children),_.return=E,E=_;break e}}else if(j.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===xn&&sm(F)===j.type){n(E,j.sibling),_=i(j,S.props),_.ref=cs(E,j,S),_.return=E,E=_;break e}n(E,j);break}else e(E,j);j=j.sibling}S.type===Jr?(_=Ar(S.props.children,E.mode,V,S.key),_.return=E,E=_):(V=Sa(S.type,S.key,S.props,null,E.mode,V),V.ref=cs(E,_,S),V.return=E,E=V)}return o(E);case Xr:e:{for(j=S.key;_!==null;){if(_.key===j)if(_.tag===4&&_.stateNode.containerInfo===S.containerInfo&&_.stateNode.implementation===S.implementation){n(E,_.sibling),_=i(_,S.children||[]),_.return=E,E=_;break e}else{n(E,_);break}else e(E,_);_=_.sibling}_=Gu(S,E.mode,V),_.return=E,E=_}return o(E);case xn:return j=S._init,L(E,_,j(S._payload),V)}if(gs(S))return x(E,_,S,V);if(ss(S))return D(E,_,S,V);ra(E,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,_!==null&&_.tag===6?(n(E,_.sibling),_=i(_,S),_.return=E,E=_):(n(E,_),_=Ku(S,E.mode,V),_.return=E,E=_),o(E)):n(E,_)}return L}var Ii=c_(!0),h_=c_(!1),Ka=ar(null),Ga=null,oi=null,Zh=null;function ed(){Zh=oi=Ga=null}function td(t){var e=Ka.current;fe(Ka),t._currentValue=e}function Fc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function pi(t,e){Ga=t,Zh=oi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ct=!0),t.firstContext=null)}function Pt(t){var e=t._currentValue;if(Zh!==t)if(t={context:t,memoizedValue:e,next:null},oi===null){if(Ga===null)throw Error(M(308));oi=t,Ga.dependencies={lanes:0,firstContext:t}}else oi=oi.next=t;return e}var Er=null;function nd(t){Er===null?Er=[t]:Er.push(t)}function d_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,nd(e)):(n.next=i.next,i.next=n),e.interleaved=n,mn(t,r)}function mn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Nn=!1;function rd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function f_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function dn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Wn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ne&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,mn(t,n)}return i=r.interleaved,i===null?(e.next=e,nd(r)):(e.next=i.next,i.next=e),r.interleaved=e,mn(t,n)}function _a(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Bh(t,n)}}function om(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Qa(t,e,n,r){var i=t.updateQueue;Nn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,f=h=u=null,l=s;do{var y=l.lane,A=l.eventTime;if((r&y)===y){f!==null&&(f=f.next={eventTime:A,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=t,D=l;switch(y=e,A=n,D.tag){case 1:if(x=D.payload,typeof x=="function"){m=x.call(A,m,y);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=D.payload,y=typeof x=="function"?x.call(A,m,y):x,y==null)break e;m=_e({},m,y);break e;case 2:Nn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else A={eventTime:A,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=A,u=m):f=f.next=A,o|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(f===null&&(u=m),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Nr|=o,t.lanes=o,t.memoizedState=m}}function am(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var po={},qt=ar(po),Gs=ar(po),Qs=ar(po);function Tr(t){if(t===po)throw Error(M(174));return t}function id(t,e){switch(ue(Qs,e),ue(Gs,t),ue(qt,po),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:_c(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=_c(e,t)}fe(qt),ue(qt,e)}function Si(){fe(qt),fe(Gs),fe(Qs)}function p_(t){Tr(Qs.current);var e=Tr(qt.current),n=_c(e,t.type);e!==n&&(ue(Gs,t),ue(qt,n))}function sd(t){Gs.current===t&&(fe(qt),fe(Gs))}var ge=ar(0);function Ya(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var zu=[];function od(){for(var t=0;t<zu.length;t++)zu[t]._workInProgressVersionPrimary=null;zu.length=0}var va=Tn.ReactCurrentDispatcher,Bu=Tn.ReactCurrentBatchConfig,xr=0,ye=null,Ce=null,Ve=null,Xa=!1,Cs=!1,Ys=0,GT=0;function Ge(){throw Error(M(321))}function ad(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ft(t[n],e[n]))return!1;return!0}function ld(t,e,n,r,i,s){if(xr=s,ye=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,va.current=t===null||t.memoizedState===null?JT:ZT,t=n(r,i),Cs){s=0;do{if(Cs=!1,Ys=0,25<=s)throw Error(M(301));s+=1,Ve=Ce=null,e.updateQueue=null,va.current=eI,t=n(r,i)}while(Cs)}if(va.current=Ja,e=Ce!==null&&Ce.next!==null,xr=0,Ve=Ce=ye=null,Xa=!1,e)throw Error(M(300));return t}function ud(){var t=Ys!==0;return Ys=0,t}function zt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?ye.memoizedState=Ve=t:Ve=Ve.next=t,Ve}function xt(){if(Ce===null){var t=ye.alternate;t=t!==null?t.memoizedState:null}else t=Ce.next;var e=Ve===null?ye.memoizedState:Ve.next;if(e!==null)Ve=e,Ce=t;else{if(t===null)throw Error(M(310));Ce=t,t={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Ve===null?ye.memoizedState=Ve=t:Ve=Ve.next=t}return Ve}function Xs(t,e){return typeof e=="function"?e(t):e}function $u(t){var e=xt(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=Ce,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((xr&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var m={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,ye.lanes|=f,Nr|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,Ft(r,e.memoizedState)||(ct=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ye.lanes|=s,Nr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function qu(t){var e=xt(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ft(s,e.memoizedState)||(ct=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function m_(){}function g_(t,e){var n=ye,r=xt(),i=e(),s=!Ft(r.memoizedState,i);if(s&&(r.memoizedState=i,ct=!0),r=r.queue,cd(v_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ve!==null&&Ve.memoizedState.tag&1){if(n.flags|=2048,Js(9,__.bind(null,n,r,i,e),void 0,null),Oe===null)throw Error(M(349));xr&30||y_(n,e,i)}return i}function y_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ye.updateQueue,e===null?(e={lastEffect:null,stores:null},ye.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function __(t,e,n,r){e.value=n,e.getSnapshot=r,w_(e)&&E_(t)}function v_(t,e,n){return n(function(){w_(e)&&E_(t)})}function w_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ft(t,n)}catch{return!0}}function E_(t){var e=mn(t,1);e!==null&&Mt(e,t,1,-1)}function lm(t){var e=zt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xs,lastRenderedState:t},e.queue=t,t=t.dispatch=XT.bind(null,ye,t),[e.memoizedState,t]}function Js(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ye.updateQueue,e===null?(e={lastEffect:null,stores:null},ye.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function T_(){return xt().memoizedState}function wa(t,e,n,r){var i=zt();ye.flags|=t,i.memoizedState=Js(1|e,n,void 0,r===void 0?null:r)}function Rl(t,e,n,r){var i=xt();r=r===void 0?null:r;var s=void 0;if(Ce!==null){var o=Ce.memoizedState;if(s=o.destroy,r!==null&&ad(r,o.deps)){i.memoizedState=Js(e,n,s,r);return}}ye.flags|=t,i.memoizedState=Js(1|e,n,s,r)}function um(t,e){return wa(8390656,8,t,e)}function cd(t,e){return Rl(2048,8,t,e)}function I_(t,e){return Rl(4,2,t,e)}function S_(t,e){return Rl(4,4,t,e)}function A_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function k_(t,e,n){return n=n!=null?n.concat([t]):null,Rl(4,4,A_.bind(null,e,t),n)}function hd(){}function R_(t,e){var n=xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ad(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function C_(t,e){var n=xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ad(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function P_(t,e,n){return xr&21?(Ft(n,e)||(n=Oy(),ye.lanes|=n,Nr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ct=!0),t.memoizedState=n)}function QT(t,e){var n=se;se=n!==0&&4>n?n:4,t(!0);var r=Bu.transition;Bu.transition={};try{t(!1),e()}finally{se=n,Bu.transition=r}}function x_(){return xt().memoizedState}function YT(t,e,n){var r=Gn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},N_(t))D_(e,n);else if(n=d_(t,e,n,r),n!==null){var i=st();Mt(n,t,r,i),V_(n,e,r)}}function XT(t,e,n){var r=Gn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(N_(t))D_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Ft(l,o)){var u=e.interleaved;u===null?(i.next=i,nd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=d_(t,e,i,r),n!==null&&(i=st(),Mt(n,t,r,i),V_(n,e,r))}}function N_(t){var e=t.alternate;return t===ye||e!==null&&e===ye}function D_(t,e){Cs=Xa=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function V_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Bh(t,n)}}var Ja={readContext:Pt,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},JT={readContext:Pt,useCallback:function(t,e){return zt().memoizedState=[t,e===void 0?null:e],t},useContext:Pt,useEffect:um,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,wa(4194308,4,A_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return wa(4194308,4,t,e)},useInsertionEffect:function(t,e){return wa(4,2,t,e)},useMemo:function(t,e){var n=zt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=zt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=YT.bind(null,ye,t),[r.memoizedState,t]},useRef:function(t){var e=zt();return t={current:t},e.memoizedState=t},useState:lm,useDebugValue:hd,useDeferredValue:function(t){return zt().memoizedState=t},useTransition:function(){var t=lm(!1),e=t[0];return t=QT.bind(null,t[1]),zt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ye,i=zt();if(pe){if(n===void 0)throw Error(M(407));n=n()}else{if(n=e(),Oe===null)throw Error(M(349));xr&30||y_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,um(v_.bind(null,r,s,t),[t]),r.flags|=2048,Js(9,__.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=zt(),e=Oe.identifierPrefix;if(pe){var n=ln,r=an;n=(r&~(1<<32-bt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ys++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=GT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ZT={readContext:Pt,useCallback:R_,useContext:Pt,useEffect:cd,useImperativeHandle:k_,useInsertionEffect:I_,useLayoutEffect:S_,useMemo:C_,useReducer:$u,useRef:T_,useState:function(){return $u(Xs)},useDebugValue:hd,useDeferredValue:function(t){var e=xt();return P_(e,Ce.memoizedState,t)},useTransition:function(){var t=$u(Xs)[0],e=xt().memoizedState;return[t,e]},useMutableSource:m_,useSyncExternalStore:g_,useId:x_,unstable_isNewReconciler:!1},eI={readContext:Pt,useCallback:R_,useContext:Pt,useEffect:cd,useImperativeHandle:k_,useInsertionEffect:I_,useLayoutEffect:S_,useMemo:C_,useReducer:qu,useRef:T_,useState:function(){return qu(Xs)},useDebugValue:hd,useDeferredValue:function(t){var e=xt();return Ce===null?e.memoizedState=t:P_(e,Ce.memoizedState,t)},useTransition:function(){var t=qu(Xs)[0],e=xt().memoizedState;return[t,e]},useMutableSource:m_,useSyncExternalStore:g_,useId:x_,unstable_isNewReconciler:!1};function Vt(t,e){if(t&&t.defaultProps){e=_e({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Uc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:_e({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Cl={isMounted:function(t){return(t=t._reactInternals)?jr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=st(),i=Gn(t),s=dn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Wn(t,s,i),e!==null&&(Mt(e,t,i,r),_a(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=st(),i=Gn(t),s=dn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Wn(t,s,i),e!==null&&(Mt(e,t,i,r),_a(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=st(),r=Gn(t),i=dn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Wn(t,i,r),e!==null&&(Mt(e,t,r,n),_a(e,t,r))}};function cm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!qs(n,r)||!qs(i,s):!0}function O_(t,e,n){var r=!1,i=nr,s=e.contextType;return typeof s=="object"&&s!==null?s=Pt(s):(i=dt(e)?Cr:et.current,r=e.contextTypes,s=(r=r!=null)?Ei(t,i):nr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Cl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function hm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Cl.enqueueReplaceState(e,e.state,null)}function jc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},rd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Pt(s):(s=dt(e)?Cr:et.current,i.context=Ei(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Uc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Cl.enqueueReplaceState(i,i.state,null),Qa(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ai(t,e){try{var n="",r=e;do n+=CE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Hu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function zc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var tI=typeof WeakMap=="function"?WeakMap:Map;function L_(t,e,n){n=dn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){el||(el=!0,Xc=r),zc(t,e)},n}function b_(t,e,n){n=dn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){zc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){zc(t,e),typeof r!="function"&&(Kn===null?Kn=new Set([this]):Kn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function dm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new tI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=mI.bind(null,t,e,n),e.then(t,t))}function fm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function pm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=dn(-1,1),e.tag=2,Wn(n,e,1))),n.lanes|=1),t)}var nI=Tn.ReactCurrentOwner,ct=!1;function it(t,e,n,r){e.child=t===null?h_(e,null,n,r):Ii(e,t.child,n,r)}function mm(t,e,n,r,i){n=n.render;var s=e.ref;return pi(e,i),r=ld(t,e,n,r,s,i),n=ud(),t!==null&&!ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,gn(t,e,i)):(pe&&n&&Yh(e),e.flags|=1,it(t,e,r,i),e.child)}function gm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!vd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,M_(t,e,s,r,i)):(t=Sa(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:qs,n(o,r)&&t.ref===e.ref)return gn(t,e,i)}return e.flags|=1,t=Qn(s,r),t.ref=e.ref,t.return=e,e.child=t}function M_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(qs(s,r)&&t.ref===e.ref)if(ct=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ct=!0);else return e.lanes=t.lanes,gn(t,e,i)}return Bc(t,e,n,r,i)}function F_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(li,gt),gt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ue(li,gt),gt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ue(li,gt),gt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ue(li,gt),gt|=r;return it(t,e,i,n),e.child}function U_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Bc(t,e,n,r,i){var s=dt(n)?Cr:et.current;return s=Ei(e,s),pi(e,i),n=ld(t,e,n,r,s,i),r=ud(),t!==null&&!ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,gn(t,e,i)):(pe&&r&&Yh(e),e.flags|=1,it(t,e,n,i),e.child)}function ym(t,e,n,r,i){if(dt(n)){var s=!0;qa(e)}else s=!1;if(pi(e,i),e.stateNode===null)Ea(t,e),O_(e,n,r),jc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Pt(h):(h=dt(n)?Cr:et.current,h=Ei(e,h));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&hm(e,o,r,h),Nn=!1;var y=e.memoizedState;o.state=y,Qa(e,r,o,i),u=e.memoizedState,l!==r||y!==u||ht.current||Nn?(typeof f=="function"&&(Uc(e,n,f,r),u=e.memoizedState),(l=Nn||cm(e,n,l,r,y,u,h))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,f_(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Vt(e.type,l),o.props=h,m=e.pendingProps,y=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Pt(u):(u=dt(n)?Cr:et.current,u=Ei(e,u));var A=n.getDerivedStateFromProps;(f=typeof A=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||y!==u)&&hm(e,o,r,u),Nn=!1,y=e.memoizedState,o.state=y,Qa(e,r,o,i);var x=e.memoizedState;l!==m||y!==x||ht.current||Nn?(typeof A=="function"&&(Uc(e,n,A,r),x=e.memoizedState),(h=Nn||cm(e,n,h,r,y,x,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),o.props=r,o.state=x,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return $c(t,e,n,r,s,i)}function $c(t,e,n,r,i,s){U_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&nm(e,n,!1),gn(t,e,s);r=e.stateNode,nI.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ii(e,t.child,null,s),e.child=Ii(e,null,l,s)):it(t,e,l,s),e.memoizedState=r.state,i&&nm(e,n,!0),e.child}function j_(t){var e=t.stateNode;e.pendingContext?tm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&tm(t,e.context,!1),id(t,e.containerInfo)}function _m(t,e,n,r,i){return Ti(),Jh(i),e.flags|=256,it(t,e,n,r),e.child}var qc={dehydrated:null,treeContext:null,retryLane:0};function Hc(t){return{baseLanes:t,cachePool:null,transitions:null}}function z_(t,e,n){var r=e.pendingProps,i=ge.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ue(ge,i&1),t===null)return Mc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Nl(o,r,0,null),t=Ar(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Hc(n),e.memoizedState=qc,t):dd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return rI(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Qn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Qn(l,s):(s=Ar(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Hc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=qc,r}return s=t.child,t=s.sibling,r=Qn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function dd(t,e){return e=Nl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ia(t,e,n,r){return r!==null&&Jh(r),Ii(e,t.child,null,n),t=dd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function rI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Hu(Error(M(422))),ia(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Nl({mode:"visible",children:r.children},i,0,null),s=Ar(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ii(e,t.child,null,o),e.child.memoizedState=Hc(o),e.memoizedState=qc,s);if(!(e.mode&1))return ia(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(M(419)),r=Hu(s,r,void 0),ia(t,e,o,r)}if(l=(o&t.childLanes)!==0,ct||l){if(r=Oe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,mn(t,i),Mt(r,t,i,-1))}return _d(),r=Hu(Error(M(421))),ia(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=gI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,yt=Hn(i.nextSibling),vt=e,pe=!0,Lt=null,t!==null&&(At[kt++]=an,At[kt++]=ln,At[kt++]=Pr,an=t.id,ln=t.overflow,Pr=e),e=dd(e,r.children),e.flags|=4096,e)}function vm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Fc(t.return,e,n)}function Wu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function B_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(it(t,e,r.children,n),r=ge.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&vm(t,n,e);else if(t.tag===19)vm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ue(ge,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ya(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Wu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ya(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Wu(e,!0,n,null,s);break;case"together":Wu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ea(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function gn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Nr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(M(153));if(e.child!==null){for(t=e.child,n=Qn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Qn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function iI(t,e,n){switch(e.tag){case 3:j_(e),Ti();break;case 5:p_(e);break;case 1:dt(e.type)&&qa(e);break;case 4:id(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ue(Ka,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ue(ge,ge.current&1),e.flags|=128,null):n&e.child.childLanes?z_(t,e,n):(ue(ge,ge.current&1),t=gn(t,e,n),t!==null?t.sibling:null);ue(ge,ge.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return B_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ue(ge,ge.current),r)break;return null;case 22:case 23:return e.lanes=0,F_(t,e,n)}return gn(t,e,n)}var $_,Wc,q_,H_;$_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wc=function(){};q_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Tr(qt.current);var s=null;switch(n){case"input":i=pc(t,i),r=pc(t,r),s=[];break;case"select":i=_e({},i,{value:void 0}),r=_e({},r,{value:void 0}),s=[];break;case"textarea":i=yc(t,i),r=yc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ba)}vc(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Ms.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Ms.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&he("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};H_=function(t,e,n,r){n!==r&&(e.flags|=4)};function hs(t,e){if(!pe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Qe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function sI(t,e,n){var r=e.pendingProps;switch(Xh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(e),null;case 1:return dt(e.type)&&$a(),Qe(e),null;case 3:return r=e.stateNode,Si(),fe(ht),fe(et),od(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(na(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Lt!==null&&(eh(Lt),Lt=null))),Wc(t,e),Qe(e),null;case 5:sd(e);var i=Tr(Qs.current);if(n=e.type,t!==null&&e.stateNode!=null)q_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(M(166));return Qe(e),null}if(t=Tr(qt.current),na(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Bt]=e,r[Ks]=s,t=(e.mode&1)!==0,n){case"dialog":he("cancel",r),he("close",r);break;case"iframe":case"object":case"embed":he("load",r);break;case"video":case"audio":for(i=0;i<_s.length;i++)he(_s[i],r);break;case"source":he("error",r);break;case"img":case"image":case"link":he("error",r),he("load",r);break;case"details":he("toggle",r);break;case"input":Cp(r,s),he("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},he("invalid",r);break;case"textarea":xp(r,s),he("invalid",r)}vc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ta(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ta(r.textContent,l,t),i=["children",""+l]):Ms.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&he("scroll",r)}switch(n){case"input":Ko(r),Pp(r,s,!0);break;case"textarea":Ko(r),Np(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ba)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=vy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Bt]=e,t[Ks]=r,$_(t,e,!1,!1),e.stateNode=t;e:{switch(o=wc(n,r),n){case"dialog":he("cancel",t),he("close",t),i=r;break;case"iframe":case"object":case"embed":he("load",t),i=r;break;case"video":case"audio":for(i=0;i<_s.length;i++)he(_s[i],t);i=r;break;case"source":he("error",t),i=r;break;case"img":case"image":case"link":he("error",t),he("load",t),i=r;break;case"details":he("toggle",t),i=r;break;case"input":Cp(t,r),i=pc(t,r),he("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=_e({},r,{value:void 0}),he("invalid",t);break;case"textarea":xp(t,r),i=yc(t,r),he("invalid",t);break;default:i=r}vc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Ty(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&wy(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Fs(t,u):typeof u=="number"&&Fs(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ms.hasOwnProperty(s)?u!=null&&s==="onScroll"&&he("scroll",t):u!=null&&bh(t,s,u,o))}switch(n){case"input":Ko(t),Pp(t,r,!1);break;case"textarea":Ko(t),Np(t);break;case"option":r.value!=null&&t.setAttribute("value",""+tr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ci(t,!!r.multiple,s,!1):r.defaultValue!=null&&ci(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ba)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Qe(e),null;case 6:if(t&&e.stateNode!=null)H_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(M(166));if(n=Tr(Qs.current),Tr(qt.current),na(e)){if(r=e.stateNode,n=e.memoizedProps,r[Bt]=e,(s=r.nodeValue!==n)&&(t=vt,t!==null))switch(t.tag){case 3:ta(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ta(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Bt]=e,e.stateNode=r}return Qe(e),null;case 13:if(fe(ge),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(pe&&yt!==null&&e.mode&1&&!(e.flags&128))u_(),Ti(),e.flags|=98560,s=!1;else if(s=na(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(M(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(M(317));s[Bt]=e}else Ti(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Qe(e),s=!1}else Lt!==null&&(eh(Lt),Lt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ge.current&1?Pe===0&&(Pe=3):_d())),e.updateQueue!==null&&(e.flags|=4),Qe(e),null);case 4:return Si(),Wc(t,e),t===null&&Hs(e.stateNode.containerInfo),Qe(e),null;case 10:return td(e.type._context),Qe(e),null;case 17:return dt(e.type)&&$a(),Qe(e),null;case 19:if(fe(ge),s=e.memoizedState,s===null)return Qe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)hs(s,!1);else{if(Pe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ya(t),o!==null){for(e.flags|=128,hs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ue(ge,ge.current&1|2),e.child}t=t.sibling}s.tail!==null&&Se()>ki&&(e.flags|=128,r=!0,hs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ya(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),hs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!pe)return Qe(e),null}else 2*Se()-s.renderingStartTime>ki&&n!==1073741824&&(e.flags|=128,r=!0,hs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Se(),e.sibling=null,n=ge.current,ue(ge,r?n&1|2:n&1),e):(Qe(e),null);case 22:case 23:return yd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?gt&1073741824&&(Qe(e),e.subtreeFlags&6&&(e.flags|=8192)):Qe(e),null;case 24:return null;case 25:return null}throw Error(M(156,e.tag))}function oI(t,e){switch(Xh(e),e.tag){case 1:return dt(e.type)&&$a(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Si(),fe(ht),fe(et),od(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return sd(e),null;case 13:if(fe(ge),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(M(340));Ti()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return fe(ge),null;case 4:return Si(),null;case 10:return td(e.type._context),null;case 22:case 23:return yd(),null;case 24:return null;default:return null}}var sa=!1,Je=!1,aI=typeof WeakSet=="function"?WeakSet:Set,$=null;function ai(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ee(t,e,r)}else n.current=null}function Kc(t,e,n){try{n()}catch(r){Ee(t,e,r)}}var wm=!1;function lI(t,e){if(xc=Ua,t=Yy(),Qh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,m=t,y=null;t:for(;;){for(var A;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(A=m.firstChild)!==null;)y=m,m=A;for(;;){if(m===t)break t;if(y===n&&++h===i&&(l=o),y===s&&++f===r&&(u=o),(A=m.nextSibling)!==null)break;m=y,y=m.parentNode}m=A}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nc={focusedElem:t,selectionRange:n},Ua=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var D=x.memoizedProps,L=x.memoizedState,E=e.stateNode,_=E.getSnapshotBeforeUpdate(e.elementType===e.type?D:Vt(e.type,D),L);E.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(V){Ee(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return x=wm,wm=!1,x}function Ps(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Kc(e,n,s)}i=i.next}while(i!==r)}}function Pl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Gc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function W_(t){var e=t.alternate;e!==null&&(t.alternate=null,W_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Bt],delete e[Ks],delete e[Oc],delete e[qT],delete e[HT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function K_(t){return t.tag===5||t.tag===3||t.tag===4}function Em(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||K_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ba));else if(r!==4&&(t=t.child,t!==null))for(Qc(t,e,n),t=t.sibling;t!==null;)Qc(t,e,n),t=t.sibling}function Yc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Yc(t,e,n),t=t.sibling;t!==null;)Yc(t,e,n),t=t.sibling}var be=null,Ot=!1;function Rn(t,e,n){for(n=n.child;n!==null;)G_(t,e,n),n=n.sibling}function G_(t,e,n){if($t&&typeof $t.onCommitFiberUnmount=="function")try{$t.onCommitFiberUnmount(El,n)}catch{}switch(n.tag){case 5:Je||ai(n,e);case 6:var r=be,i=Ot;be=null,Rn(t,e,n),be=r,Ot=i,be!==null&&(Ot?(t=be,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):be.removeChild(n.stateNode));break;case 18:be!==null&&(Ot?(t=be,n=n.stateNode,t.nodeType===8?Uu(t.parentNode,n):t.nodeType===1&&Uu(t,n),Bs(t)):Uu(be,n.stateNode));break;case 4:r=be,i=Ot,be=n.stateNode.containerInfo,Ot=!0,Rn(t,e,n),be=r,Ot=i;break;case 0:case 11:case 14:case 15:if(!Je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Kc(n,e,o),i=i.next}while(i!==r)}Rn(t,e,n);break;case 1:if(!Je&&(ai(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ee(n,e,l)}Rn(t,e,n);break;case 21:Rn(t,e,n);break;case 22:n.mode&1?(Je=(r=Je)||n.memoizedState!==null,Rn(t,e,n),Je=r):Rn(t,e,n);break;default:Rn(t,e,n)}}function Tm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new aI),e.forEach(function(r){var i=yI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Dt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:be=l.stateNode,Ot=!1;break e;case 3:be=l.stateNode.containerInfo,Ot=!0;break e;case 4:be=l.stateNode.containerInfo,Ot=!0;break e}l=l.return}if(be===null)throw Error(M(160));G_(s,o,i),be=null,Ot=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Ee(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Q_(e,t),e=e.sibling}function Q_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dt(e,t),jt(t),r&4){try{Ps(3,t,t.return),Pl(3,t)}catch(D){Ee(t,t.return,D)}try{Ps(5,t,t.return)}catch(D){Ee(t,t.return,D)}}break;case 1:Dt(e,t),jt(t),r&512&&n!==null&&ai(n,n.return);break;case 5:if(Dt(e,t),jt(t),r&512&&n!==null&&ai(n,n.return),t.flags&32){var i=t.stateNode;try{Fs(i,"")}catch(D){Ee(t,t.return,D)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&yy(i,s),wc(l,o);var h=wc(l,s);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?Ty(i,m):f==="dangerouslySetInnerHTML"?wy(i,m):f==="children"?Fs(i,m):bh(i,f,m,h)}switch(l){case"input":mc(i,s);break;case"textarea":_y(i,s);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var A=s.value;A!=null?ci(i,!!s.multiple,A,!1):y!==!!s.multiple&&(s.defaultValue!=null?ci(i,!!s.multiple,s.defaultValue,!0):ci(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ks]=s}catch(D){Ee(t,t.return,D)}}break;case 6:if(Dt(e,t),jt(t),r&4){if(t.stateNode===null)throw Error(M(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(D){Ee(t,t.return,D)}}break;case 3:if(Dt(e,t),jt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Bs(e.containerInfo)}catch(D){Ee(t,t.return,D)}break;case 4:Dt(e,t),jt(t);break;case 13:Dt(e,t),jt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(md=Se())),r&4&&Tm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Je=(h=Je)||f,Dt(e,t),Je=h):Dt(e,t),jt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for($=t,f=t.child;f!==null;){for(m=$=f;$!==null;){switch(y=$,A=y.child,y.tag){case 0:case 11:case 14:case 15:Ps(4,y,y.return);break;case 1:ai(y,y.return);var x=y.stateNode;if(typeof x.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(D){Ee(r,n,D)}}break;case 5:ai(y,y.return);break;case 22:if(y.memoizedState!==null){Sm(m);continue}}A!==null?(A.return=y,$=A):Sm(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Ey("display",o))}catch(D){Ee(t,t.return,D)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(D){Ee(t,t.return,D)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Dt(e,t),jt(t),r&4&&Tm(t);break;case 21:break;default:Dt(e,t),jt(t)}}function jt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(K_(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Fs(i,""),r.flags&=-33);var s=Em(t);Yc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Em(t);Qc(t,l,o);break;default:throw Error(M(161))}}catch(u){Ee(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function uI(t,e,n){$=t,Y_(t)}function Y_(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||sa;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Je;l=sa;var h=Je;if(sa=o,(Je=u)&&!h)for($=i;$!==null;)o=$,u=o.child,o.tag===22&&o.memoizedState!==null?Am(i):u!==null?(u.return=o,$=u):Am(i);for(;s!==null;)$=s,Y_(s),s=s.sibling;$=i,sa=l,Je=h}Im(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):Im(t)}}function Im(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Je||Pl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Je)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Vt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&am(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}am(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Bs(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}Je||e.flags&512&&Gc(e)}catch(y){Ee(e,e.return,y)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function Sm(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function Am(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Pl(4,e)}catch(u){Ee(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ee(e,i,u)}}var s=e.return;try{Gc(e)}catch(u){Ee(e,s,u)}break;case 5:var o=e.return;try{Gc(e)}catch(u){Ee(e,o,u)}}}catch(u){Ee(e,e.return,u)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var cI=Math.ceil,Za=Tn.ReactCurrentDispatcher,fd=Tn.ReactCurrentOwner,Ct=Tn.ReactCurrentBatchConfig,ne=0,Oe=null,ke=null,Ue=0,gt=0,li=ar(0),Pe=0,Zs=null,Nr=0,xl=0,pd=0,xs=null,lt=null,md=0,ki=1/0,sn=null,el=!1,Xc=null,Kn=null,oa=!1,Un=null,tl=0,Ns=0,Jc=null,Ta=-1,Ia=0;function st(){return ne&6?Se():Ta!==-1?Ta:Ta=Se()}function Gn(t){return t.mode&1?ne&2&&Ue!==0?Ue&-Ue:KT.transition!==null?(Ia===0&&(Ia=Oy()),Ia):(t=se,t!==0||(t=window.event,t=t===void 0?16:zy(t.type)),t):1}function Mt(t,e,n,r){if(50<Ns)throw Ns=0,Jc=null,Error(M(185));co(t,n,r),(!(ne&2)||t!==Oe)&&(t===Oe&&(!(ne&2)&&(xl|=n),Pe===4&&Vn(t,Ue)),ft(t,r),n===1&&ne===0&&!(e.mode&1)&&(ki=Se()+500,kl&&lr()))}function ft(t,e){var n=t.callbackNode;KE(t,e);var r=Fa(t,t===Oe?Ue:0);if(r===0)n!==null&&Op(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Op(n),e===1)t.tag===0?WT(km.bind(null,t)):o_(km.bind(null,t)),BT(function(){!(ne&6)&&lr()}),n=null;else{switch(Ly(r)){case 1:n=zh;break;case 4:n=Dy;break;case 16:n=Ma;break;case 536870912:n=Vy;break;default:n=Ma}n=iv(n,X_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function X_(t,e){if(Ta=-1,Ia=0,ne&6)throw Error(M(327));var n=t.callbackNode;if(mi()&&t.callbackNode!==n)return null;var r=Fa(t,t===Oe?Ue:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=nl(t,r);else{e=r;var i=ne;ne|=2;var s=Z_();(Oe!==t||Ue!==e)&&(sn=null,ki=Se()+500,Sr(t,e));do try{fI();break}catch(l){J_(t,l)}while(!0);ed(),Za.current=s,ne=i,ke!==null?e=0:(Oe=null,Ue=0,e=Pe)}if(e!==0){if(e===2&&(i=Ac(t),i!==0&&(r=i,e=Zc(t,i))),e===1)throw n=Zs,Sr(t,0),Vn(t,r),ft(t,Se()),n;if(e===6)Vn(t,r);else{if(i=t.current.alternate,!(r&30)&&!hI(i)&&(e=nl(t,r),e===2&&(s=Ac(t),s!==0&&(r=s,e=Zc(t,s))),e===1))throw n=Zs,Sr(t,0),Vn(t,r),ft(t,Se()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(M(345));case 2:_r(t,lt,sn);break;case 3:if(Vn(t,r),(r&130023424)===r&&(e=md+500-Se(),10<e)){if(Fa(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){st(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Vc(_r.bind(null,t,lt,sn),e);break}_r(t,lt,sn);break;case 4:if(Vn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-bt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*cI(r/1960))-r,10<r){t.timeoutHandle=Vc(_r.bind(null,t,lt,sn),r);break}_r(t,lt,sn);break;case 5:_r(t,lt,sn);break;default:throw Error(M(329))}}}return ft(t,Se()),t.callbackNode===n?X_.bind(null,t):null}function Zc(t,e){var n=xs;return t.current.memoizedState.isDehydrated&&(Sr(t,e).flags|=256),t=nl(t,e),t!==2&&(e=lt,lt=n,e!==null&&eh(e)),t}function eh(t){lt===null?lt=t:lt.push.apply(lt,t)}function hI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ft(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Vn(t,e){for(e&=~pd,e&=~xl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-bt(e),r=1<<n;t[n]=-1,e&=~r}}function km(t){if(ne&6)throw Error(M(327));mi();var e=Fa(t,0);if(!(e&1))return ft(t,Se()),null;var n=nl(t,e);if(t.tag!==0&&n===2){var r=Ac(t);r!==0&&(e=r,n=Zc(t,r))}if(n===1)throw n=Zs,Sr(t,0),Vn(t,e),ft(t,Se()),n;if(n===6)throw Error(M(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,_r(t,lt,sn),ft(t,Se()),null}function gd(t,e){var n=ne;ne|=1;try{return t(e)}finally{ne=n,ne===0&&(ki=Se()+500,kl&&lr())}}function Dr(t){Un!==null&&Un.tag===0&&!(ne&6)&&mi();var e=ne;ne|=1;var n=Ct.transition,r=se;try{if(Ct.transition=null,se=1,t)return t()}finally{se=r,Ct.transition=n,ne=e,!(ne&6)&&lr()}}function yd(){gt=li.current,fe(li)}function Sr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,zT(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(Xh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$a();break;case 3:Si(),fe(ht),fe(et),od();break;case 5:sd(r);break;case 4:Si();break;case 13:fe(ge);break;case 19:fe(ge);break;case 10:td(r.type._context);break;case 22:case 23:yd()}n=n.return}if(Oe=t,ke=t=Qn(t.current,null),Ue=gt=e,Pe=0,Zs=null,pd=xl=Nr=0,lt=xs=null,Er!==null){for(e=0;e<Er.length;e++)if(n=Er[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Er=null}return t}function J_(t,e){do{var n=ke;try{if(ed(),va.current=Ja,Xa){for(var r=ye.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Xa=!1}if(xr=0,Ve=Ce=ye=null,Cs=!1,Ys=0,fd.current=null,n===null||n.return===null){Pe=1,Zs=e,ke=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Ue,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var y=f.alternate;y?(f.updateQueue=y.updateQueue,f.memoizedState=y.memoizedState,f.lanes=y.lanes):(f.updateQueue=null,f.memoizedState=null)}var A=fm(o);if(A!==null){A.flags&=-257,pm(A,o,l,s,e),A.mode&1&&dm(s,h,e),e=A,u=h;var x=e.updateQueue;if(x===null){var D=new Set;D.add(u),e.updateQueue=D}else x.add(u);break e}else{if(!(e&1)){dm(s,h,e),_d();break e}u=Error(M(426))}}else if(pe&&l.mode&1){var L=fm(o);if(L!==null){!(L.flags&65536)&&(L.flags|=256),pm(L,o,l,s,e),Jh(Ai(u,l));break e}}s=u=Ai(u,l),Pe!==4&&(Pe=2),xs===null?xs=[s]:xs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=L_(s,u,e);om(s,E);break e;case 1:l=u;var _=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Kn===null||!Kn.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var V=b_(s,l,e);om(s,V);break e}}s=s.return}while(s!==null)}tv(n)}catch(F){e=F,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(!0)}function Z_(){var t=Za.current;return Za.current=Ja,t===null?Ja:t}function _d(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),Oe===null||!(Nr&268435455)&&!(xl&268435455)||Vn(Oe,Ue)}function nl(t,e){var n=ne;ne|=2;var r=Z_();(Oe!==t||Ue!==e)&&(sn=null,Sr(t,e));do try{dI();break}catch(i){J_(t,i)}while(!0);if(ed(),ne=n,Za.current=r,ke!==null)throw Error(M(261));return Oe=null,Ue=0,Pe}function dI(){for(;ke!==null;)ev(ke)}function fI(){for(;ke!==null&&!FE();)ev(ke)}function ev(t){var e=rv(t.alternate,t,gt);t.memoizedProps=t.pendingProps,e===null?tv(t):ke=e,fd.current=null}function tv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=oI(n,e),n!==null){n.flags&=32767,ke=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Pe=6,ke=null;return}}else if(n=sI(n,e,gt),n!==null){ke=n;return}if(e=e.sibling,e!==null){ke=e;return}ke=e=t}while(e!==null);Pe===0&&(Pe=5)}function _r(t,e,n){var r=se,i=Ct.transition;try{Ct.transition=null,se=1,pI(t,e,n,r)}finally{Ct.transition=i,se=r}return null}function pI(t,e,n,r){do mi();while(Un!==null);if(ne&6)throw Error(M(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(M(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(GE(t,s),t===Oe&&(ke=Oe=null,Ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||oa||(oa=!0,iv(Ma,function(){return mi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ct.transition,Ct.transition=null;var o=se;se=1;var l=ne;ne|=4,fd.current=null,lI(t,n),Q_(n,t),OT(Nc),Ua=!!xc,Nc=xc=null,t.current=n,uI(n),UE(),ne=l,se=o,Ct.transition=s}else t.current=n;if(oa&&(oa=!1,Un=t,tl=i),s=t.pendingLanes,s===0&&(Kn=null),BE(n.stateNode),ft(t,Se()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(el)throw el=!1,t=Xc,Xc=null,t;return tl&1&&t.tag!==0&&mi(),s=t.pendingLanes,s&1?t===Jc?Ns++:(Ns=0,Jc=t):Ns=0,lr(),null}function mi(){if(Un!==null){var t=Ly(tl),e=Ct.transition,n=se;try{if(Ct.transition=null,se=16>t?16:t,Un===null)var r=!1;else{if(t=Un,Un=null,tl=0,ne&6)throw Error(M(331));var i=ne;for(ne|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for($=h;$!==null;){var f=$;switch(f.tag){case 0:case 11:case 15:Ps(8,f,s)}var m=f.child;if(m!==null)m.return=f,$=m;else for(;$!==null;){f=$;var y=f.sibling,A=f.return;if(W_(f),f===h){$=null;break}if(y!==null){y.return=A,$=y;break}$=A}}}var x=s.alternate;if(x!==null){var D=x.child;if(D!==null){x.child=null;do{var L=D.sibling;D.sibling=null,D=L}while(D!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ps(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,$=E;break e}$=s.return}}var _=t.current;for($=_;$!==null;){o=$;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,$=S;else e:for(o=_;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Pl(9,l)}}catch(F){Ee(l,l.return,F)}if(l===o){$=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,$=V;break e}$=l.return}}if(ne=i,lr(),$t&&typeof $t.onPostCommitFiberRoot=="function")try{$t.onPostCommitFiberRoot(El,t)}catch{}r=!0}return r}finally{se=n,Ct.transition=e}}return!1}function Rm(t,e,n){e=Ai(n,e),e=L_(t,e,1),t=Wn(t,e,1),e=st(),t!==null&&(co(t,1,e),ft(t,e))}function Ee(t,e,n){if(t.tag===3)Rm(t,t,n);else for(;e!==null;){if(e.tag===3){Rm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Kn===null||!Kn.has(r))){t=Ai(n,t),t=b_(e,t,1),e=Wn(e,t,1),t=st(),e!==null&&(co(e,1,t),ft(e,t));break}}e=e.return}}function mI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=st(),t.pingedLanes|=t.suspendedLanes&n,Oe===t&&(Ue&n)===n&&(Pe===4||Pe===3&&(Ue&130023424)===Ue&&500>Se()-md?Sr(t,0):pd|=n),ft(t,e)}function nv(t,e){e===0&&(t.mode&1?(e=Yo,Yo<<=1,!(Yo&130023424)&&(Yo=4194304)):e=1);var n=st();t=mn(t,e),t!==null&&(co(t,e,n),ft(t,n))}function gI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),nv(t,n)}function yI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(e),nv(t,n)}var rv;rv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ht.current)ct=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ct=!1,iI(t,e,n);ct=!!(t.flags&131072)}else ct=!1,pe&&e.flags&1048576&&a_(e,Wa,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ea(t,e),t=e.pendingProps;var i=Ei(e,et.current);pi(e,n),i=ld(null,e,r,t,i,n);var s=ud();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,dt(r)?(s=!0,qa(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,rd(e),i.updater=Cl,e.stateNode=i,i._reactInternals=e,jc(e,r,t,n),e=$c(null,e,r,!0,s,n)):(e.tag=0,pe&&s&&Yh(e),it(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ea(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=vI(r),t=Vt(r,t),i){case 0:e=Bc(null,e,r,t,n);break e;case 1:e=ym(null,e,r,t,n);break e;case 11:e=mm(null,e,r,t,n);break e;case 14:e=gm(null,e,r,Vt(r.type,t),n);break e}throw Error(M(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),Bc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),ym(t,e,r,i,n);case 3:e:{if(j_(e),t===null)throw Error(M(387));r=e.pendingProps,s=e.memoizedState,i=s.element,f_(t,e),Qa(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ai(Error(M(423)),e),e=_m(t,e,r,n,i);break e}else if(r!==i){i=Ai(Error(M(424)),e),e=_m(t,e,r,n,i);break e}else for(yt=Hn(e.stateNode.containerInfo.firstChild),vt=e,pe=!0,Lt=null,n=h_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ti(),r===i){e=gn(t,e,n);break e}it(t,e,r,n)}e=e.child}return e;case 5:return p_(e),t===null&&Mc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Dc(r,i)?o=null:s!==null&&Dc(r,s)&&(e.flags|=32),U_(t,e),it(t,e,o,n),e.child;case 6:return t===null&&Mc(e),null;case 13:return z_(t,e,n);case 4:return id(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ii(e,null,r,n):it(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),mm(t,e,r,i,n);case 7:return it(t,e,e.pendingProps,n),e.child;case 8:return it(t,e,e.pendingProps.children,n),e.child;case 12:return it(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ue(Ka,r._currentValue),r._currentValue=o,s!==null)if(Ft(s.value,o)){if(s.children===i.children&&!ht.current){e=gn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=dn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Fc(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(M(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Fc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}it(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,pi(e,n),i=Pt(i),r=r(i),e.flags|=1,it(t,e,r,n),e.child;case 14:return r=e.type,i=Vt(r,e.pendingProps),i=Vt(r.type,i),gm(t,e,r,i,n);case 15:return M_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),Ea(t,e),e.tag=1,dt(r)?(t=!0,qa(e)):t=!1,pi(e,n),O_(e,r,i),jc(e,r,i,n),$c(null,e,r,!0,t,n);case 19:return B_(t,e,n);case 22:return F_(t,e,n)}throw Error(M(156,e.tag))};function iv(t,e){return Ny(t,e)}function _I(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rt(t,e,n,r){return new _I(t,e,n,r)}function vd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function vI(t){if(typeof t=="function")return vd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Fh)return 11;if(t===Uh)return 14}return 2}function Qn(t,e){var n=t.alternate;return n===null?(n=Rt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Sa(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")vd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Jr:return Ar(n.children,i,s,e);case Mh:o=8,i|=8;break;case cc:return t=Rt(12,n,e,i|2),t.elementType=cc,t.lanes=s,t;case hc:return t=Rt(13,n,e,i),t.elementType=hc,t.lanes=s,t;case dc:return t=Rt(19,n,e,i),t.elementType=dc,t.lanes=s,t;case py:return Nl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case dy:o=10;break e;case fy:o=9;break e;case Fh:o=11;break e;case Uh:o=14;break e;case xn:o=16,r=null;break e}throw Error(M(130,t==null?t:typeof t,""))}return e=Rt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ar(t,e,n,r){return t=Rt(7,t,r,e),t.lanes=n,t}function Nl(t,e,n,r){return t=Rt(22,t,r,e),t.elementType=py,t.lanes=n,t.stateNode={isHidden:!1},t}function Ku(t,e,n){return t=Rt(6,t,null,e),t.lanes=n,t}function Gu(t,e,n){return e=Rt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function wI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cu(0),this.expirationTimes=Cu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function wd(t,e,n,r,i,s,o,l,u){return t=new wI(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Rt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},rd(s),t}function EI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function sv(t){if(!t)return nr;t=t._reactInternals;e:{if(jr(t)!==t||t.tag!==1)throw Error(M(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(dt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(M(171))}if(t.tag===1){var n=t.type;if(dt(n))return s_(t,n,e)}return e}function ov(t,e,n,r,i,s,o,l,u){return t=wd(n,r,!0,t,i,s,o,l,u),t.context=sv(null),n=t.current,r=st(),i=Gn(n),s=dn(r,i),s.callback=e??null,Wn(n,s,i),t.current.lanes=i,co(t,i,r),ft(t,r),t}function Dl(t,e,n,r){var i=e.current,s=st(),o=Gn(i);return n=sv(n),e.context===null?e.context=n:e.pendingContext=n,e=dn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Wn(i,e,o),t!==null&&(Mt(t,i,o,s),_a(t,i,o)),o}function rl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Cm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ed(t,e){Cm(t,e),(t=t.alternate)&&Cm(t,e)}function TI(){return null}var av=typeof reportError=="function"?reportError:function(t){console.error(t)};function Td(t){this._internalRoot=t}Vl.prototype.render=Td.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(M(409));Dl(t,e,null,null)};Vl.prototype.unmount=Td.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Dr(function(){Dl(null,t,null,null)}),e[pn]=null}};function Vl(t){this._internalRoot=t}Vl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Fy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Dn.length&&e!==0&&e<Dn[n].priority;n++);Dn.splice(n,0,t),n===0&&jy(t)}};function Id(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ol(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Pm(){}function II(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=rl(o);s.call(h)}}var o=ov(e,r,t,0,null,!1,!1,"",Pm);return t._reactRootContainer=o,t[pn]=o.current,Hs(t.nodeType===8?t.parentNode:t),Dr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=rl(u);l.call(h)}}var u=wd(t,0,!1,null,null,!1,!1,"",Pm);return t._reactRootContainer=u,t[pn]=u.current,Hs(t.nodeType===8?t.parentNode:t),Dr(function(){Dl(e,u,n,r)}),u}function Ll(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=rl(o);l.call(u)}}Dl(e,o,t,i)}else o=II(n,e,t,i,r);return rl(o)}by=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ys(e.pendingLanes);n!==0&&(Bh(e,n|1),ft(e,Se()),!(ne&6)&&(ki=Se()+500,lr()))}break;case 13:Dr(function(){var r=mn(t,1);if(r!==null){var i=st();Mt(r,t,1,i)}}),Ed(t,1)}};$h=function(t){if(t.tag===13){var e=mn(t,134217728);if(e!==null){var n=st();Mt(e,t,134217728,n)}Ed(t,134217728)}};My=function(t){if(t.tag===13){var e=Gn(t),n=mn(t,e);if(n!==null){var r=st();Mt(n,t,e,r)}Ed(t,e)}};Fy=function(){return se};Uy=function(t,e){var n=se;try{return se=t,e()}finally{se=n}};Tc=function(t,e,n){switch(e){case"input":if(mc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Al(r);if(!i)throw Error(M(90));gy(r),mc(r,i)}}}break;case"textarea":_y(t,n);break;case"select":e=n.value,e!=null&&ci(t,!!n.multiple,e,!1)}};Ay=gd;ky=Dr;var SI={usingClientEntryPoint:!1,Events:[fo,ni,Al,Iy,Sy,gd]},ds={findFiberByHostInstance:wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},AI={bundleType:ds.bundleType,version:ds.version,rendererPackageName:ds.rendererPackageName,rendererConfig:ds.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Py(t),t===null?null:t.stateNode},findFiberByHostInstance:ds.findFiberByHostInstance||TI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var aa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!aa.isDisabled&&aa.supportsFiber)try{El=aa.inject(AI),$t=aa}catch{}}Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=SI;Tt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Id(e))throw Error(M(200));return EI(t,e,null,n)};Tt.createRoot=function(t,e){if(!Id(t))throw Error(M(299));var n=!1,r="",i=av;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=wd(t,1,!1,null,null,n,!1,r,i),t[pn]=e.current,Hs(t.nodeType===8?t.parentNode:t),new Td(e)};Tt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(M(188)):(t=Object.keys(t).join(","),Error(M(268,t)));return t=Py(e),t=t===null?null:t.stateNode,t};Tt.flushSync=function(t){return Dr(t)};Tt.hydrate=function(t,e,n){if(!Ol(e))throw Error(M(200));return Ll(null,t,e,!0,n)};Tt.hydrateRoot=function(t,e,n){if(!Id(t))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=av;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ov(e,null,t,1,n??null,i,!1,s,o),t[pn]=e.current,Hs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Vl(e)};Tt.render=function(t,e,n){if(!Ol(e))throw Error(M(200));return Ll(null,t,e,!1,n)};Tt.unmountComponentAtNode=function(t){if(!Ol(t))throw Error(M(40));return t._reactRootContainer?(Dr(function(){Ll(null,null,t,!1,function(){t._reactRootContainer=null,t[pn]=null})}),!0):!1};Tt.unstable_batchedUpdates=gd;Tt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ol(n))throw Error(M(200));if(t==null||t._reactInternals===void 0)throw Error(M(38));return Ll(t,e,n,!1,r)};Tt.version="18.3.1-next-f1338f8080-20240426";function lv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lv)}catch(t){console.error(t)}}lv(),ly.exports=Tt;var kI=ly.exports,xm=kI;lc.createRoot=xm.createRoot,lc.hydrateRoot=xm.hydrateRoot;/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var RI={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CI=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),qe=(t,e)=>{const n=Ne.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:l="",children:u,...h},f)=>Ne.createElement("svg",{ref:f,...RI,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${CI(t)}`,l].join(" "),...h},[...e.map(([m,y])=>Ne.createElement(m,y)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PI=qe("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xI=qe("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=qe("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NI=qe("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DI=qe("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=qe("Loader",[["line",{x1:"12",x2:"12",y1:"2",y2:"6",key:"gza1u7"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22",key:"1qhbu9"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76",key:"xae44r"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07",key:"bxnmvf"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12",key:"89khin"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12",key:"pb8tfm"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24",key:"1uxjnu"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93",key:"6duxfx"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VI=qe("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OI=qe("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LI=qe("PanelsTopLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bI=qe("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MI=qe("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FI=qe("ShieldCheck",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UI=qe("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jI=qe("Ticket",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=qe("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=qe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zI=qe("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]);var Dm={};/**
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
 */const uv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},BI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},cv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let y=(l&15)<<2|h>>6,A=h&63;u||(A=64,o||(y=64)),r.push(n[f],n[m],n[y],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(uv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):BI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||m==null)throw new $I;const y=s<<2|l>>4;if(r.push(y),h!==64){const A=l<<4&240|h>>2;if(r.push(A),m!==64){const x=h<<6&192|m;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $I extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qI=function(t){const e=uv(t);return cv.encodeByteArray(e,!0)},il=function(t){return qI(t).replace(/\./g,"")},hv=function(t){try{return cv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function HI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const WI=()=>HI().__FIREBASE_DEFAULTS__,KI=()=>{if(typeof process>"u"||typeof Dm>"u")return;const t=Dm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},GI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&hv(t[1]);return e&&JSON.parse(e)},bl=()=>{try{return WI()||KI()||GI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},dv=t=>{var e,n;return(n=(e=bl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},QI=t=>{const e=dv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},fv=()=>{var t;return(t=bl())===null||t===void 0?void 0:t.config},pv=t=>{var e;return(e=bl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class YI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function XI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[il(JSON.stringify(n)),il(JSON.stringify(o)),""].join(".")}/**
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
 */function tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function JI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tt())}function ZI(){var t;const e=(t=bl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function e1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function t1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function n1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function r1(){const t=tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function i1(){return!ZI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function s1(){try{return typeof indexedDB=="object"}catch{return!1}}function o1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const a1="FirebaseError";class In extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=a1,Object.setPrototypeOf(this,In.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mo.prototype.create)}}class mo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?l1(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new In(i,l,r)}}function l1(t,e){return t.replace(u1,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const u1=/\{\$([^}]+)}/g;function c1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function sl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Vm(s)&&Vm(o)){if(!sl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Vm(t){return t!==null&&typeof t=="object"}/**
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
 */function go(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function h1(t,e){const n=new d1(t,e);return n.subscribe.bind(n)}class d1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");f1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Qu),i.error===void 0&&(i.error=Qu),i.complete===void 0&&(i.complete=Qu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function f1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Qu(){}/**
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
 */function Be(t){return t&&t._delegate?t._delegate:t}class Vr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const vr="[DEFAULT]";/**
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
 */class p1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new YI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(g1(e))try{this.getOrInitializeService({instanceIdentifier:vr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=vr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vr){return this.instances.has(e)}getOptions(e=vr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:m1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=vr){return this.component?this.component.multipleInstances?e:vr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function m1(t){return t===vr?void 0:t}function g1(t){return t.instantiationMode==="EAGER"}/**
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
 */class y1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new p1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const _1={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},v1=ee.INFO,w1={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},E1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=w1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Sd{constructor(e){this.name=e,this._logLevel=v1,this._logHandler=E1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const T1=(t,e)=>e.some(n=>t instanceof n);let Om,Lm;function I1(){return Om||(Om=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function S1(){return Lm||(Lm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mv=new WeakMap,ih=new WeakMap,gv=new WeakMap,Yu=new WeakMap,Ad=new WeakMap;function A1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Yn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&mv.set(n,t)}).catch(()=>{}),Ad.set(e,t),e}function k1(t){if(ih.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ih.set(t,e)}let sh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ih.get(t);if(e==="objectStoreNames")return t.objectStoreNames||gv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function R1(t){sh=t(sh)}function C1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Xu(this),e,...n);return gv.set(r,e.sort?e.sort():[e]),Yn(r)}:S1().includes(t)?function(...e){return t.apply(Xu(this),e),Yn(mv.get(this))}:function(...e){return Yn(t.apply(Xu(this),e))}}function P1(t){return typeof t=="function"?C1(t):(t instanceof IDBTransaction&&k1(t),T1(t,I1())?new Proxy(t,sh):t)}function Yn(t){if(t instanceof IDBRequest)return A1(t);if(Yu.has(t))return Yu.get(t);const e=P1(t);return e!==t&&(Yu.set(t,e),Ad.set(e,t)),e}const Xu=t=>Ad.get(t);function x1(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Yn(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Yn(o.result),u.oldVersion,u.newVersion,Yn(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const N1=["get","getKey","getAll","getAllKeys","count"],D1=["put","add","delete","clear"],Ju=new Map;function bm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ju.get(e))return Ju.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=D1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||N1.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return Ju.set(e,s),s}R1(t=>({...t,get:(e,n,r)=>bm(e,n)||t.get(e,n,r),has:(e,n)=>!!bm(e,n)||t.has(e,n)}));/**
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
 */class V1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(O1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function O1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const oh="@firebase/app",Mm="0.10.13";/**
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
 */const yn=new Sd("@firebase/app"),L1="@firebase/app-compat",b1="@firebase/analytics-compat",M1="@firebase/analytics",F1="@firebase/app-check-compat",U1="@firebase/app-check",j1="@firebase/auth",z1="@firebase/auth-compat",B1="@firebase/database",$1="@firebase/data-connect",q1="@firebase/database-compat",H1="@firebase/functions",W1="@firebase/functions-compat",K1="@firebase/installations",G1="@firebase/installations-compat",Q1="@firebase/messaging",Y1="@firebase/messaging-compat",X1="@firebase/performance",J1="@firebase/performance-compat",Z1="@firebase/remote-config",eS="@firebase/remote-config-compat",tS="@firebase/storage",nS="@firebase/storage-compat",rS="@firebase/firestore",iS="@firebase/vertexai-preview",sS="@firebase/firestore-compat",oS="firebase",aS="10.14.1";/**
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
 */const ah="[DEFAULT]",lS={[oh]:"fire-core",[L1]:"fire-core-compat",[M1]:"fire-analytics",[b1]:"fire-analytics-compat",[U1]:"fire-app-check",[F1]:"fire-app-check-compat",[j1]:"fire-auth",[z1]:"fire-auth-compat",[B1]:"fire-rtdb",[$1]:"fire-data-connect",[q1]:"fire-rtdb-compat",[H1]:"fire-fn",[W1]:"fire-fn-compat",[K1]:"fire-iid",[G1]:"fire-iid-compat",[Q1]:"fire-fcm",[Y1]:"fire-fcm-compat",[X1]:"fire-perf",[J1]:"fire-perf-compat",[Z1]:"fire-rc",[eS]:"fire-rc-compat",[tS]:"fire-gcs",[nS]:"fire-gcs-compat",[rS]:"fire-fst",[sS]:"fire-fst-compat",[iS]:"fire-vertex","fire-js":"fire-js",[oS]:"fire-js-all"};/**
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
 */const ol=new Map,uS=new Map,lh=new Map;function Fm(t,e){try{t.container.addComponent(e)}catch(n){yn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ri(t){const e=t.name;if(lh.has(e))return yn.debug(`There were multiple attempts to register component ${e}.`),!1;lh.set(e,t);for(const n of ol.values())Fm(n,t);for(const n of uS.values())Fm(n,t);return!0}function kd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function jn(t){return t.settings!==void 0}/**
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
 */const cS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xn=new mo("app","Firebase",cS);/**
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
 */class hS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Vr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xn.create("app-deleted",{appName:this._name})}}/**
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
 */const Ui=aS;function yv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ah,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Xn.create("bad-app-name",{appName:String(i)});if(n||(n=fv()),!n)throw Xn.create("no-options");const s=ol.get(i);if(s){if(sl(n,s.options)&&sl(r,s.config))return s;throw Xn.create("duplicate-app",{appName:i})}const o=new y1(i);for(const u of lh.values())o.addComponent(u);const l=new hS(n,r,o);return ol.set(i,l),l}function _v(t=ah){const e=ol.get(t);if(!e&&t===ah&&fv())return yv();if(!e)throw Xn.create("no-app",{appName:t});return e}function Jn(t,e,n){var r;let i=(r=lS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yn.warn(l.join(" "));return}Ri(new Vr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const dS="firebase-heartbeat-database",fS=1,eo="firebase-heartbeat-store";let Zu=null;function vv(){return Zu||(Zu=x1(dS,fS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(eo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Xn.create("idb-open",{originalErrorMessage:t.message})})),Zu}async function pS(t){try{const n=(await vv()).transaction(eo),r=await n.objectStore(eo).get(wv(t));return await n.done,r}catch(e){if(e instanceof In)yn.warn(e.message);else{const n=Xn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yn.warn(n.message)}}}async function Um(t,e){try{const r=(await vv()).transaction(eo,"readwrite");await r.objectStore(eo).put(e,wv(t)),await r.done}catch(n){if(n instanceof In)yn.warn(n.message);else{const r=Xn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});yn.warn(r.message)}}}function wv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const mS=1024,gS=30*24*60*60*1e3;class yS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new vS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=jm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=gS}),this._storage.overwrite(this._heartbeatsCache))}catch(r){yn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=jm(),{heartbeatsToSend:r,unsentEntries:i}=_S(this._heartbeatsCache.heartbeats),s=il(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return yn.warn(n),""}}}function jm(){return new Date().toISOString().substring(0,10)}function _S(t,e=mS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),zm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),zm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class vS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return s1()?o1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await pS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Um(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Um(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function zm(t){return il(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function wS(t){Ri(new Vr("platform-logger",e=>new V1(e),"PRIVATE")),Ri(new Vr("heartbeat",e=>new yS(e),"PRIVATE")),Jn(oh,Mm,t),Jn(oh,Mm,"esm2017"),Jn("fire-js","")}wS("");var ES="firebase",TS="10.14.1";/**
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
 */Jn(ES,TS,"app");function Rd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Ev(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const IS=Ev,Tv=new mo("auth","Firebase",Ev());/**
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
 */const al=new Sd("@firebase/auth");function SS(t,...e){al.logLevel<=ee.WARN&&al.warn(`Auth (${Ui}): ${t}`,...e)}function Aa(t,...e){al.logLevel<=ee.ERROR&&al.error(`Auth (${Ui}): ${t}`,...e)}/**
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
 */function _n(t,...e){throw Cd(t,...e)}function Ht(t,...e){return Cd(t,...e)}function Iv(t,e,n){const r=Object.assign(Object.assign({},IS()),{[e]:n});return new mo("auth","Firebase",r).create(e,{appName:t.name})}function kr(t){return Iv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Cd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Tv.create(t,...e)}function W(t,e,...n){if(!t)throw Cd(e,...n)}function un(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Aa(e),new Error(e)}function vn(t,e){t||un(e)}/**
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
 */function uh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function AS(){return Bm()==="http:"||Bm()==="https:"}function Bm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function kS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(AS()||t1()||"connection"in navigator)?navigator.onLine:!0}function RS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class yo{constructor(e,n){this.shortDelay=e,this.longDelay=n,vn(n>e,"Short delay should be less than long delay!"),this.isMobile=JI()||n1()}get(){return kS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Pd(t,e){vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Sv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;un("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;un("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;un("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const CS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const PS=new yo(3e4,6e4);function xd(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ji(t,e,n,r,i={}){return Av(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=go(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return e1()||(h.referrerPolicy="no-referrer"),Sv.fetch()(kv(t,t.config.apiHost,n,l),h)})}async function Av(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},CS),e);try{const i=new NS(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw la(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw la(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw la(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw la(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Iv(t,f,h);_n(t,f)}}catch(i){if(i instanceof In)throw i;_n(t,"network-request-failed",{message:String(i)})}}async function xS(t,e,n,r,i={}){const s=await ji(t,e,n,r,i);return"mfaPendingCredential"in s&&_n(t,"multi-factor-auth-required",{_serverResponse:s}),s}function kv(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Pd(t.config,i):`${t.config.apiScheme}://${i}`}class NS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ht(this.auth,"network-request-failed")),PS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function la(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ht(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function DS(t,e){return ji(t,"POST","/v1/accounts:delete",e)}async function Rv(t,e){return ji(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ds(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function VS(t,e=!1){const n=Be(t),r=await n.getIdToken(e),i=Nd(r);W(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ds(ec(i.auth_time)),issuedAtTime:Ds(ec(i.iat)),expirationTime:Ds(ec(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ec(t){return Number(t)*1e3}function Nd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Aa("JWT malformed, contained fewer than 3 sections"),null;try{const i=hv(n);return i?JSON.parse(i):(Aa("Failed to decode base64 JWT payload"),null)}catch(i){return Aa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function $m(t){const e=Nd(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function to(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof In&&OS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function OS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class LS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ch{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ds(this.lastLoginAt),this.creationTime=Ds(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ll(t){var e;const n=t.auth,r=await t.getIdToken(),i=await to(t,Rv(n,{idToken:r}));W(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Cv(s.providerUserInfo):[],l=MS(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new ch(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function bS(t){const e=Be(t);await ll(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function MS(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Cv(t){return t.map(e=>{var{providerId:n}=e,r=Rd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function FS(t,e){const n=await Av(t,{},async()=>{const r=go({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=kv(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Sv.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function US(t,e){return ji(t,"POST","/v2/accounts:revokeToken",xd(t,e))}/**
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
 */class gi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$m(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){W(e.length!==0,"internal-error");const n=$m(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await FS(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new gi;return r&&(W(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(W(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(W(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new gi,this.toJSON())}_performRefresh(){return un("not implemented")}}/**
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
 */function Cn(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class cn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Rd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new LS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ch(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await to(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return VS(this,e)}reload(){return bS(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new cn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ll(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(jn(this.auth.app))return Promise.reject(kr(this.auth));const e=await this.getIdToken();return await to(this,DS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(i=n.email)!==null&&i!==void 0?i:void 0,A=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,x=(o=n.photoURL)!==null&&o!==void 0?o:void 0,D=(l=n.tenantId)!==null&&l!==void 0?l:void 0,L=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,E=(h=n.createdAt)!==null&&h!==void 0?h:void 0,_=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:S,emailVerified:V,isAnonymous:F,providerData:j,stsTokenManager:w}=n;W(S&&w,e,"internal-error");const g=gi.fromJSON(this.name,w);W(typeof S=="string",e,"internal-error"),Cn(m,e.name),Cn(y,e.name),W(typeof V=="boolean",e,"internal-error"),W(typeof F=="boolean",e,"internal-error"),Cn(A,e.name),Cn(x,e.name),Cn(D,e.name),Cn(L,e.name),Cn(E,e.name),Cn(_,e.name);const v=new cn({uid:S,auth:e,email:y,emailVerified:V,displayName:m,isAnonymous:F,photoURL:x,phoneNumber:A,tenantId:D,stsTokenManager:g,createdAt:E,lastLoginAt:_});return j&&Array.isArray(j)&&(v.providerData=j.map(T=>Object.assign({},T))),L&&(v._redirectEventId=L),v}static async _fromIdTokenResponse(e,n,r=!1){const i=new gi;i.updateFromServerResponse(n);const s=new cn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ll(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];W(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Cv(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new gi;l.updateFromIdToken(r);const u=new cn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new ch(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
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
 */const qm=new Map;function hn(t){vn(t instanceof Function,"Expected a class definition");let e=qm.get(t);return e?(vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,qm.set(t,e),e)}/**
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
 */class Pv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Pv.type="NONE";const Hm=Pv;/**
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
 */function ka(t,e,n){return`firebase:${t}:${e}:${n}`}class yi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ka(this.userKey,i.apiKey,s),this.fullPersistenceKey=ka("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?cn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new yi(hn(Hm),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||hn(Hm);const o=ka(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){const m=cn._fromJSON(e,f);h!==s&&(l=m),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new yi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new yi(s,e,r))}}/**
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
 */function Wm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Vv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Lv(e))return"Blackberry";if(bv(e))return"Webos";if(Nv(e))return"Safari";if((e.includes("chrome/")||Dv(e))&&!e.includes("edge/"))return"Chrome";if(Ov(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function xv(t=tt()){return/firefox\//i.test(t)}function Nv(t=tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Dv(t=tt()){return/crios\//i.test(t)}function Vv(t=tt()){return/iemobile/i.test(t)}function Ov(t=tt()){return/android/i.test(t)}function Lv(t=tt()){return/blackberry/i.test(t)}function bv(t=tt()){return/webos/i.test(t)}function Dd(t=tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function jS(t=tt()){var e;return Dd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zS(){return r1()&&document.documentMode===10}function Mv(t=tt()){return Dd(t)||Ov(t)||bv(t)||Lv(t)||/windows phone/i.test(t)||Vv(t)}/**
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
 */function Fv(t,e=[]){let n;switch(t){case"Browser":n=Wm(tt());break;case"Worker":n=`${Wm(tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ui}/${r}`}/**
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
 */class BS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function $S(t,e={}){return ji(t,"GET","/v2/passwordPolicy",xd(t,e))}/**
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
 */const qS=6;class HS{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:qS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class WS{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Km(this),this.idTokenSubscription=new Km(this),this.beforeStateQueue=new BS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Tv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=hn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await yi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Rv(this,{idToken:e}),r=await cn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(jn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ll(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=RS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(jn(this.app))return Promise.reject(kr(this));const n=e?Be(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return jn(this.app)?Promise.reject(kr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return jn(this.app)?Promise.reject(kr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(hn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await $S(this),n=new HS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new mo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await US(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&hn(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await yi.create(this,[hn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Fv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&SS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Vd(t){return Be(t)}class Km{constructor(e){this.auth=e,this.observer=null,this.addObserver=h1(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Od={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function KS(t){Od=t}function GS(t){return Od.loadJS(t)}function QS(){return Od.gapiScript}function YS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function XS(t,e){const n=kd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(sl(s,e??{}))return i;_n(i,"already-initialized")}return n.initialize({options:e})}function JS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(hn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ZS(t,e,n){const r=Vd(t);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Uv(e),{host:o,port:l}=eA(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),tA()}function Uv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function eA(t){const e=Uv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Gm(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Gm(o)}}}function Gm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function tA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class jv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return un("not implemented")}_getIdTokenResponse(e){return un("not implemented")}_linkToIdToken(e,n){return un("not implemented")}_getReauthenticationResolver(e){return un("not implemented")}}/**
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
 */async function _i(t,e){return xS(t,"POST","/v1/accounts:signInWithIdp",xd(t,e))}/**
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
 */const nA="http://localhost";class Or extends jv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Or(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):_n("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Rd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Or(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return _i(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,_i(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_i(e,n)}buildRequest(){const e={requestUri:nA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=go(n)}return e}}/**
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
 */class zv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class _o extends zv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class On extends _o{constructor(){super("facebook.com")}static credential(e){return Or._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return On.credential(e.oauthAccessToken)}catch{return null}}}On.FACEBOOK_SIGN_IN_METHOD="facebook.com";On.PROVIDER_ID="facebook.com";/**
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
 */class Ln extends _o{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Or._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ln.credential(n,r)}catch{return null}}}Ln.GOOGLE_SIGN_IN_METHOD="google.com";Ln.PROVIDER_ID="google.com";/**
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
 */class bn extends _o{constructor(){super("github.com")}static credential(e){return Or._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.GITHUB_SIGN_IN_METHOD="github.com";bn.PROVIDER_ID="github.com";/**
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
 */class Mn extends _o{constructor(){super("twitter.com")}static credential(e,n){return Or._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Mn.credential(n,r)}catch{return null}}}Mn.TWITTER_SIGN_IN_METHOD="twitter.com";Mn.PROVIDER_ID="twitter.com";/**
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
 */class Ci{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await cn._fromIdTokenResponse(e,r,i),o=Qm(r);return new Ci({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Qm(r);return new Ci({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Qm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ul extends In{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ul.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ul(e,n,r,i)}}function Bv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ul._fromErrorAndOperation(t,s,e,r):s})}async function rA(t,e,n=!1){const r=await to(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ci._forOperation(t,"link",r)}/**
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
 */async function iA(t,e,n=!1){const{auth:r}=t;if(jn(r.app))return Promise.reject(kr(r));const i="reauthenticate";try{const s=await to(t,Bv(r,i,e,t),n);W(s.idToken,r,"internal-error");const o=Nd(s.idToken);W(o,r,"internal-error");const{sub:l}=o;return W(t.uid===l,r,"user-mismatch"),Ci._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&_n(r,"user-mismatch"),s}}/**
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
 */async function sA(t,e,n=!1){if(jn(t.app))return Promise.reject(kr(t));const r="signIn",i=await Bv(t,r,e),s=await Ci._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function oA(t,e,n,r){return Be(t).onIdTokenChanged(e,n,r)}function aA(t,e,n){return Be(t).beforeAuthStateChanged(e,n)}const cl="__sak";/**
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
 */class $v{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(cl,"1"),this.storage.removeItem(cl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const lA=1e3,uA=10;class qv extends $v{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Mv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);zS()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,uA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},lA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}qv.type="LOCAL";const cA=qv;/**
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
 */class Hv extends $v{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Hv.type="SESSION";const Wv=Hv;/**
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
 */function hA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ml{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ml(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await hA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ml.receivers=[];/**
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
 */function Ld(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class dA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=Ld("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const y=m;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(y.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Wt(){return window}function fA(t){Wt().location.href=t}/**
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
 */function Kv(){return typeof Wt().WorkerGlobalScope<"u"&&typeof Wt().importScripts=="function"}async function pA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function gA(){return Kv()?self:null}/**
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
 */const Gv="firebaseLocalStorageDb",yA=1,hl="firebaseLocalStorage",Qv="fbase_key";class vo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Fl(t,e){return t.transaction([hl],e?"readwrite":"readonly").objectStore(hl)}function _A(){const t=indexedDB.deleteDatabase(Gv);return new vo(t).toPromise()}function hh(){const t=indexedDB.open(Gv,yA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(hl,{keyPath:Qv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(hl)?e(r):(r.close(),await _A(),e(await hh()))})})}async function Ym(t,e,n){const r=Fl(t,!0).put({[Qv]:e,value:n});return new vo(r).toPromise()}async function vA(t,e){const n=Fl(t,!1).get(e),r=await new vo(n).toPromise();return r===void 0?null:r.value}function Xm(t,e){const n=Fl(t,!0).delete(e);return new vo(n).toPromise()}const wA=800,EA=3;class Yv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>EA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Kv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ml._getInstance(gA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await pA(),!this.activeServiceWorker)return;this.sender=new dA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hh();return await Ym(e,cl,"1"),await Xm(e,cl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ym(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>vA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Fl(i,!1).getAll();return new vo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Yv.type="LOCAL";const TA=Yv;new yo(3e4,6e4);/**
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
 */function IA(t,e){return e?hn(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class bd extends jv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _i(e,this._buildIdpRequest())}_linkToIdToken(e,n){return _i(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return _i(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function SA(t){return sA(t.auth,new bd(t),t.bypassAuthState)}function AA(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),iA(n,new bd(t),t.bypassAuthState)}async function kA(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),rA(n,new bd(t),t.bypassAuthState)}/**
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
 */class Xv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return SA;case"linkViaPopup":case"linkViaRedirect":return kA;case"reauthViaPopup":case"reauthViaRedirect":return AA;default:_n(this.auth,"internal-error")}}resolve(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const RA=new yo(2e3,1e4);class ui extends Xv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ui.currentPopupAction&&ui.currentPopupAction.cancel(),ui.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){vn(this.filter.length===1,"Popup operations only handle one event");const e=Ld();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ui.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ht(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,RA.get())};e()}}ui.currentPopupAction=null;/**
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
 */const CA="pendingRedirect",Ra=new Map;class PA extends Xv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ra.get(this.auth._key());if(!e){try{const r=await xA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ra.set(this.auth._key(),e)}return this.bypassAuthState||Ra.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xA(t,e){const n=VA(e),r=DA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function NA(t,e){Ra.set(t._key(),e)}function DA(t){return hn(t._redirectPersistence)}function VA(t){return ka(CA,t.config.apiKey,t.name)}async function OA(t,e,n=!1){if(jn(t.app))return Promise.reject(kr(t));const r=Vd(t),i=IA(r,e),o=await new PA(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const LA=10*60*1e3;class bA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!MA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Jv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ht(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=LA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jm(e))}saveEventToCache(e){this.cachedEventUids.add(Jm(e)),this.lastProcessedEventTime=Date.now()}}function Jm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Jv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function MA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Jv(t);default:return!1}}/**
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
 */async function FA(t,e={}){return ji(t,"GET","/v1/projects",e)}/**
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
 */const UA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jA=/^https?/;async function zA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await FA(t);for(const n of e)try{if(BA(n))return}catch{}_n(t,"unauthorized-domain")}function BA(t){const e=uh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!jA.test(n))return!1;if(UA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const $A=new yo(3e4,6e4);function Zm(){const t=Wt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function qA(t){return new Promise((e,n)=>{var r,i,s;function o(){Zm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zm(),n(Ht(t,"network-request-failed"))},timeout:$A.get()})}if(!((i=(r=Wt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Wt().gapi)===null||s===void 0)&&s.load)o();else{const l=YS("iframefcb");return Wt()[l]=()=>{gapi.load?o():n(Ht(t,"network-request-failed"))},GS(`${QS()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Ca=null,e})}let Ca=null;function HA(t){return Ca=Ca||qA(t),Ca}/**
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
 */const WA=new yo(5e3,15e3),KA="__/auth/iframe",GA="emulator/auth/iframe",QA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},YA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function XA(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Pd(e,GA):`https://${t.config.authDomain}/${KA}`,r={apiKey:e.apiKey,appName:t.name,v:Ui},i=YA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${go(r).slice(1)}`}async function JA(t){const e=await HA(t),n=Wt().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:XA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:QA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ht(t,"network-request-failed"),l=Wt().setTimeout(()=>{s(o)},WA.get());function u(){Wt().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const ZA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ek=500,tk=600,nk="_blank",rk="http://localhost";class eg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ik(t,e,n,r=ek,i=tk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},ZA),{width:r.toString(),height:i.toString(),top:s,left:o}),h=tt().toLowerCase();n&&(l=Dv(h)?nk:n),xv(h)&&(e=e||rk,u.scrollbars="yes");const f=Object.entries(u).reduce((y,[A,x])=>`${y}${A}=${x},`,"");if(jS(h)&&l!=="_self")return sk(e||"",l),new eg(null);const m=window.open(e||"",l,f);W(m,t,"popup-blocked");try{m.focus()}catch{}return new eg(m)}function sk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const ok="__/auth/handler",ak="emulator/auth/handler",lk=encodeURIComponent("fac");async function tg(t,e,n,r,i,s){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ui,eventId:i};if(e instanceof zv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",c1(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof _o){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${lk}=${encodeURIComponent(u)}`:"";return`${uk(t)}?${go(l).slice(1)}${h}`}function uk({config:t}){return t.emulator?Pd(t,ak):`https://${t.authDomain}/${ok}`}/**
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
 */const tc="webStorageSupport";class ck{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wv,this._completeRedirectFn=OA,this._overrideRedirectResult=NA}async _openPopup(e,n,r,i){var s;vn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await tg(e,n,r,uh(),i);return ik(e,o,Ld())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await tg(e,n,r,uh(),i);return fA(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(vn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await JA(e),r=new bA(e);return n.register("authEvent",i=>(W(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(tc,{type:tc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[tc];o!==void 0&&n(!!o),_n(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=zA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Mv()||Nv()||Dd()}}const hk=ck;var ng="@firebase/auth",rg="1.7.9";/**
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
 */class dk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function fk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function pk(t){Ri(new Vr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fv(t)},h=new WS(r,i,s,u);return JS(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ri(new Vr("auth-internal",e=>{const n=Vd(e.getProvider("auth").getImmediate());return(r=>new dk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jn(ng,rg,fk(t)),Jn(ng,rg,"esm2017")}/**
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
 */const mk=5*60,gk=pv("authIdTokenMaxAge")||mk;let ig=null;const yk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>gk)return;const i=n==null?void 0:n.token;ig!==i&&(ig=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function _k(t=_v()){const e=kd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=XS(t,{popupRedirectResolver:hk,persistence:[TA,cA,Wv]}),r=pv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=yk(s.toString());aA(n,o,()=>o(n.currentUser)),oA(n,l=>o(l))}}const i=dv("auth");return i&&ZS(n,`http://${i}`),n}function vk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}KS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ht("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",vk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});pk("Browser");var sg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rr,Zv;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,g){function v(){}v.prototype=g.prototype,w.D=g.prototype,w.prototype=new v,w.prototype.constructor=w,w.C=function(T,k,P){for(var I=Array(arguments.length-2),St=2;St<arguments.length;St++)I[St-2]=arguments[St];return g.prototype[k].apply(T,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,g,v){v||(v=0);var T=Array(16);if(typeof g=="string")for(var k=0;16>k;++k)T[k]=g.charCodeAt(v++)|g.charCodeAt(v++)<<8|g.charCodeAt(v++)<<16|g.charCodeAt(v++)<<24;else for(k=0;16>k;++k)T[k]=g[v++]|g[v++]<<8|g[v++]<<16|g[v++]<<24;g=w.g[0],v=w.g[1],k=w.g[2];var P=w.g[3],I=g+(P^v&(k^P))+T[0]+3614090360&4294967295;g=v+(I<<7&4294967295|I>>>25),I=P+(k^g&(v^k))+T[1]+3905402710&4294967295,P=g+(I<<12&4294967295|I>>>20),I=k+(v^P&(g^v))+T[2]+606105819&4294967295,k=P+(I<<17&4294967295|I>>>15),I=v+(g^k&(P^g))+T[3]+3250441966&4294967295,v=k+(I<<22&4294967295|I>>>10),I=g+(P^v&(k^P))+T[4]+4118548399&4294967295,g=v+(I<<7&4294967295|I>>>25),I=P+(k^g&(v^k))+T[5]+1200080426&4294967295,P=g+(I<<12&4294967295|I>>>20),I=k+(v^P&(g^v))+T[6]+2821735955&4294967295,k=P+(I<<17&4294967295|I>>>15),I=v+(g^k&(P^g))+T[7]+4249261313&4294967295,v=k+(I<<22&4294967295|I>>>10),I=g+(P^v&(k^P))+T[8]+1770035416&4294967295,g=v+(I<<7&4294967295|I>>>25),I=P+(k^g&(v^k))+T[9]+2336552879&4294967295,P=g+(I<<12&4294967295|I>>>20),I=k+(v^P&(g^v))+T[10]+4294925233&4294967295,k=P+(I<<17&4294967295|I>>>15),I=v+(g^k&(P^g))+T[11]+2304563134&4294967295,v=k+(I<<22&4294967295|I>>>10),I=g+(P^v&(k^P))+T[12]+1804603682&4294967295,g=v+(I<<7&4294967295|I>>>25),I=P+(k^g&(v^k))+T[13]+4254626195&4294967295,P=g+(I<<12&4294967295|I>>>20),I=k+(v^P&(g^v))+T[14]+2792965006&4294967295,k=P+(I<<17&4294967295|I>>>15),I=v+(g^k&(P^g))+T[15]+1236535329&4294967295,v=k+(I<<22&4294967295|I>>>10),I=g+(k^P&(v^k))+T[1]+4129170786&4294967295,g=v+(I<<5&4294967295|I>>>27),I=P+(v^k&(g^v))+T[6]+3225465664&4294967295,P=g+(I<<9&4294967295|I>>>23),I=k+(g^v&(P^g))+T[11]+643717713&4294967295,k=P+(I<<14&4294967295|I>>>18),I=v+(P^g&(k^P))+T[0]+3921069994&4294967295,v=k+(I<<20&4294967295|I>>>12),I=g+(k^P&(v^k))+T[5]+3593408605&4294967295,g=v+(I<<5&4294967295|I>>>27),I=P+(v^k&(g^v))+T[10]+38016083&4294967295,P=g+(I<<9&4294967295|I>>>23),I=k+(g^v&(P^g))+T[15]+3634488961&4294967295,k=P+(I<<14&4294967295|I>>>18),I=v+(P^g&(k^P))+T[4]+3889429448&4294967295,v=k+(I<<20&4294967295|I>>>12),I=g+(k^P&(v^k))+T[9]+568446438&4294967295,g=v+(I<<5&4294967295|I>>>27),I=P+(v^k&(g^v))+T[14]+3275163606&4294967295,P=g+(I<<9&4294967295|I>>>23),I=k+(g^v&(P^g))+T[3]+4107603335&4294967295,k=P+(I<<14&4294967295|I>>>18),I=v+(P^g&(k^P))+T[8]+1163531501&4294967295,v=k+(I<<20&4294967295|I>>>12),I=g+(k^P&(v^k))+T[13]+2850285829&4294967295,g=v+(I<<5&4294967295|I>>>27),I=P+(v^k&(g^v))+T[2]+4243563512&4294967295,P=g+(I<<9&4294967295|I>>>23),I=k+(g^v&(P^g))+T[7]+1735328473&4294967295,k=P+(I<<14&4294967295|I>>>18),I=v+(P^g&(k^P))+T[12]+2368359562&4294967295,v=k+(I<<20&4294967295|I>>>12),I=g+(v^k^P)+T[5]+4294588738&4294967295,g=v+(I<<4&4294967295|I>>>28),I=P+(g^v^k)+T[8]+2272392833&4294967295,P=g+(I<<11&4294967295|I>>>21),I=k+(P^g^v)+T[11]+1839030562&4294967295,k=P+(I<<16&4294967295|I>>>16),I=v+(k^P^g)+T[14]+4259657740&4294967295,v=k+(I<<23&4294967295|I>>>9),I=g+(v^k^P)+T[1]+2763975236&4294967295,g=v+(I<<4&4294967295|I>>>28),I=P+(g^v^k)+T[4]+1272893353&4294967295,P=g+(I<<11&4294967295|I>>>21),I=k+(P^g^v)+T[7]+4139469664&4294967295,k=P+(I<<16&4294967295|I>>>16),I=v+(k^P^g)+T[10]+3200236656&4294967295,v=k+(I<<23&4294967295|I>>>9),I=g+(v^k^P)+T[13]+681279174&4294967295,g=v+(I<<4&4294967295|I>>>28),I=P+(g^v^k)+T[0]+3936430074&4294967295,P=g+(I<<11&4294967295|I>>>21),I=k+(P^g^v)+T[3]+3572445317&4294967295,k=P+(I<<16&4294967295|I>>>16),I=v+(k^P^g)+T[6]+76029189&4294967295,v=k+(I<<23&4294967295|I>>>9),I=g+(v^k^P)+T[9]+3654602809&4294967295,g=v+(I<<4&4294967295|I>>>28),I=P+(g^v^k)+T[12]+3873151461&4294967295,P=g+(I<<11&4294967295|I>>>21),I=k+(P^g^v)+T[15]+530742520&4294967295,k=P+(I<<16&4294967295|I>>>16),I=v+(k^P^g)+T[2]+3299628645&4294967295,v=k+(I<<23&4294967295|I>>>9),I=g+(k^(v|~P))+T[0]+4096336452&4294967295,g=v+(I<<6&4294967295|I>>>26),I=P+(v^(g|~k))+T[7]+1126891415&4294967295,P=g+(I<<10&4294967295|I>>>22),I=k+(g^(P|~v))+T[14]+2878612391&4294967295,k=P+(I<<15&4294967295|I>>>17),I=v+(P^(k|~g))+T[5]+4237533241&4294967295,v=k+(I<<21&4294967295|I>>>11),I=g+(k^(v|~P))+T[12]+1700485571&4294967295,g=v+(I<<6&4294967295|I>>>26),I=P+(v^(g|~k))+T[3]+2399980690&4294967295,P=g+(I<<10&4294967295|I>>>22),I=k+(g^(P|~v))+T[10]+4293915773&4294967295,k=P+(I<<15&4294967295|I>>>17),I=v+(P^(k|~g))+T[1]+2240044497&4294967295,v=k+(I<<21&4294967295|I>>>11),I=g+(k^(v|~P))+T[8]+1873313359&4294967295,g=v+(I<<6&4294967295|I>>>26),I=P+(v^(g|~k))+T[15]+4264355552&4294967295,P=g+(I<<10&4294967295|I>>>22),I=k+(g^(P|~v))+T[6]+2734768916&4294967295,k=P+(I<<15&4294967295|I>>>17),I=v+(P^(k|~g))+T[13]+1309151649&4294967295,v=k+(I<<21&4294967295|I>>>11),I=g+(k^(v|~P))+T[4]+4149444226&4294967295,g=v+(I<<6&4294967295|I>>>26),I=P+(v^(g|~k))+T[11]+3174756917&4294967295,P=g+(I<<10&4294967295|I>>>22),I=k+(g^(P|~v))+T[2]+718787259&4294967295,k=P+(I<<15&4294967295|I>>>17),I=v+(P^(k|~g))+T[9]+3951481745&4294967295,w.g[0]=w.g[0]+g&4294967295,w.g[1]=w.g[1]+(k+(I<<21&4294967295|I>>>11))&4294967295,w.g[2]=w.g[2]+k&4294967295,w.g[3]=w.g[3]+P&4294967295}r.prototype.u=function(w,g){g===void 0&&(g=w.length);for(var v=g-this.blockSize,T=this.B,k=this.h,P=0;P<g;){if(k==0)for(;P<=v;)i(this,w,P),P+=this.blockSize;if(typeof w=="string"){for(;P<g;)if(T[k++]=w.charCodeAt(P++),k==this.blockSize){i(this,T),k=0;break}}else for(;P<g;)if(T[k++]=w[P++],k==this.blockSize){i(this,T),k=0;break}}this.h=k,this.o+=g},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var g=1;g<w.length-8;++g)w[g]=0;var v=8*this.o;for(g=w.length-8;g<w.length;++g)w[g]=v&255,v/=256;for(this.u(w),w=Array(16),g=v=0;4>g;++g)for(var T=0;32>T;T+=8)w[v++]=this.g[g]>>>T&255;return w};function s(w,g){var v=l;return Object.prototype.hasOwnProperty.call(v,w)?v[w]:v[w]=g(w)}function o(w,g){this.h=g;for(var v=[],T=!0,k=w.length-1;0<=k;k--){var P=w[k]|0;T&&P==g||(v[k]=P,T=!1)}this.g=v}var l={};function u(w){return-128<=w&&128>w?s(w,function(g){return new o([g|0],0>g?-1:0)}):new o([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return m;if(0>w)return L(h(-w));for(var g=[],v=1,T=0;w>=v;T++)g[T]=w/v|0,v*=4294967296;return new o(g,0)}function f(w,g){if(w.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(w.charAt(0)=="-")return L(f(w.substring(1),g));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(g,8)),T=m,k=0;k<w.length;k+=8){var P=Math.min(8,w.length-k),I=parseInt(w.substring(k,k+P),g);8>P?(P=h(Math.pow(g,P)),T=T.j(P).add(h(I))):(T=T.j(v),T=T.add(h(I)))}return T}var m=u(0),y=u(1),A=u(16777216);t=o.prototype,t.m=function(){if(D(this))return-L(this).m();for(var w=0,g=1,v=0;v<this.g.length;v++){var T=this.i(v);w+=(0<=T?T:4294967296+T)*g,g*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(x(this))return"0";if(D(this))return"-"+L(this).toString(w);for(var g=h(Math.pow(w,6)),v=this,T="";;){var k=V(v,g).g;v=E(v,k.j(g));var P=((0<v.g.length?v.g[0]:v.h)>>>0).toString(w);if(v=k,x(v))return P+T;for(;6>P.length;)P="0"+P;T=P+T}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function x(w){if(w.h!=0)return!1;for(var g=0;g<w.g.length;g++)if(w.g[g]!=0)return!1;return!0}function D(w){return w.h==-1}t.l=function(w){return w=E(this,w),D(w)?-1:x(w)?0:1};function L(w){for(var g=w.g.length,v=[],T=0;T<g;T++)v[T]=~w.g[T];return new o(v,~w.h).add(y)}t.abs=function(){return D(this)?L(this):this},t.add=function(w){for(var g=Math.max(this.g.length,w.g.length),v=[],T=0,k=0;k<=g;k++){var P=T+(this.i(k)&65535)+(w.i(k)&65535),I=(P>>>16)+(this.i(k)>>>16)+(w.i(k)>>>16);T=I>>>16,P&=65535,I&=65535,v[k]=I<<16|P}return new o(v,v[v.length-1]&-2147483648?-1:0)};function E(w,g){return w.add(L(g))}t.j=function(w){if(x(this)||x(w))return m;if(D(this))return D(w)?L(this).j(L(w)):L(L(this).j(w));if(D(w))return L(this.j(L(w)));if(0>this.l(A)&&0>w.l(A))return h(this.m()*w.m());for(var g=this.g.length+w.g.length,v=[],T=0;T<2*g;T++)v[T]=0;for(T=0;T<this.g.length;T++)for(var k=0;k<w.g.length;k++){var P=this.i(T)>>>16,I=this.i(T)&65535,St=w.i(k)>>>16,hr=w.i(k)&65535;v[2*T+2*k]+=I*hr,_(v,2*T+2*k),v[2*T+2*k+1]+=P*hr,_(v,2*T+2*k+1),v[2*T+2*k+1]+=I*St,_(v,2*T+2*k+1),v[2*T+2*k+2]+=P*St,_(v,2*T+2*k+2)}for(T=0;T<g;T++)v[T]=v[2*T+1]<<16|v[2*T];for(T=g;T<2*g;T++)v[T]=0;return new o(v,0)};function _(w,g){for(;(w[g]&65535)!=w[g];)w[g+1]+=w[g]>>>16,w[g]&=65535,g++}function S(w,g){this.g=w,this.h=g}function V(w,g){if(x(g))throw Error("division by zero");if(x(w))return new S(m,m);if(D(w))return g=V(L(w),g),new S(L(g.g),L(g.h));if(D(g))return g=V(w,L(g)),new S(L(g.g),g.h);if(30<w.g.length){if(D(w)||D(g))throw Error("slowDivide_ only works with positive integers.");for(var v=y,T=g;0>=T.l(w);)v=F(v),T=F(T);var k=j(v,1),P=j(T,1);for(T=j(T,2),v=j(v,2);!x(T);){var I=P.add(T);0>=I.l(w)&&(k=k.add(v),P=I),T=j(T,1),v=j(v,1)}return g=E(w,k.j(g)),new S(k,g)}for(k=m;0<=w.l(g);){for(v=Math.max(1,Math.floor(w.m()/g.m())),T=Math.ceil(Math.log(v)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),P=h(v),I=P.j(g);D(I)||0<I.l(w);)v-=T,P=h(v),I=P.j(g);x(P)&&(P=y),k=k.add(P),w=E(w,I)}return new S(k,w)}t.A=function(w){return V(this,w).h},t.and=function(w){for(var g=Math.max(this.g.length,w.g.length),v=[],T=0;T<g;T++)v[T]=this.i(T)&w.i(T);return new o(v,this.h&w.h)},t.or=function(w){for(var g=Math.max(this.g.length,w.g.length),v=[],T=0;T<g;T++)v[T]=this.i(T)|w.i(T);return new o(v,this.h|w.h)},t.xor=function(w){for(var g=Math.max(this.g.length,w.g.length),v=[],T=0;T<g;T++)v[T]=this.i(T)^w.i(T);return new o(v,this.h^w.h)};function F(w){for(var g=w.g.length+1,v=[],T=0;T<g;T++)v[T]=w.i(T)<<1|w.i(T-1)>>>31;return new o(v,w.h)}function j(w,g){var v=g>>5;g%=32;for(var T=w.g.length-v,k=[],P=0;P<T;P++)k[P]=0<g?w.i(P+v)>>>g|w.i(P+v+1)<<32-g:w.i(P+v);return new o(k,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Zv=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Rr=o}).apply(typeof sg<"u"?sg:typeof self<"u"?self:typeof window<"u"?window:{});var ua=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var e0,vs,t0,Pa,dh,n0,r0,i0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ua=="object"&&ua];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var p=0;p<a.length-1;p++){var C=a[p];if(!(C in d))break e;d=d[C]}a=a[a.length-1],p=d[a],c=c(p),c!=p&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var d=0,p=!1,C={next:function(){if(!p&&d<a.length){var N=d++;return{value:c(N,a[N]),done:!1}}return p=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function m(a,c,d){if(!a)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,p),a.apply(c,C)}}return function(){return a.apply(c,arguments)}}function y(a,c,d){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,y.apply(null,arguments)}function A(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function x(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(p,C,N){for(var U=Array(arguments.length-2),le=2;le<arguments.length;le++)U[le-2]=arguments[le];return c.prototype[C].apply(p,U)}}function D(a){const c=a.length;if(0<c){const d=Array(c);for(let p=0;p<c;p++)d[p]=a[p];return d}return[]}function L(a,c){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(u(p)){const C=a.length||0,N=p.length||0;a.length=C+N;for(let U=0;U<N;U++)a[C+U]=p[U]}else a.push(p)}}class E{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function _(a){return/^[\s\xa0]*$/.test(a)}function S(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function V(a){return V[" "](a),a}V[" "]=function(){};var F=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function j(a,c,d){for(const p in a)c.call(d,a[p],p,a)}function w(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function g(a){const c={};for(const d in a)c[d]=a[d];return c}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,c){let d,p;for(let C=1;C<arguments.length;C++){p=arguments[C];for(d in p)a[d]=p[d];for(let N=0;N<v.length;N++)d=v[N],Object.prototype.hasOwnProperty.call(p,d)&&(a[d]=p[d])}}function k(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function P(a){l.setTimeout(()=>{throw a},0)}function I(){var a=G;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class St{constructor(){this.h=this.g=null}add(c,d){const p=hr.get();p.set(c,d),this.h?this.h.next=p:this.g=p,this.h=p}}var hr=new E(()=>new Hi,a=>a.reset());class Hi{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Xt,z=!1,G=new St,X=()=>{const a=l.Promise.resolve(void 0);Xt=()=>{a.then(me)}};var me=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(d){P(d)}var c=hr;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}z=!1};function ae(){this.s=this.s,this.C=this.C}ae.prototype.s=!1,ae.prototype.ma=function(){this.s||(this.s=!0,this.N())},ae.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Te(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}Te.prototype.h=function(){this.defaultPrevented=!0};var Jt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function Zt(a,c){if(Te.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(F){e:{try{V(c.nodeName);var C=!0;break e}catch{}C=!1}C||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:en[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Zt.aa.h.call(this)}}x(Zt,Te);var en={2:"touch",3:"pen",4:"mouse"};Zt.prototype.h=function(){Zt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var tn="closure_listenable_"+(1e6*Math.random()|0),Tw=0;function Iw(a,c,d,p,C){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!p,this.ha=C,this.key=++Tw,this.da=this.fa=!1}function Ro(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Co(a){this.src=a,this.g={},this.h=0}Co.prototype.add=function(a,c,d,p,C){var N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);var U=tu(a,c,p,C);return-1<U?(c=a[U],d||(c.fa=!1)):(c=new Iw(c,this.src,N,!!p,C),c.fa=d,a.push(c)),c};function eu(a,c){var d=c.type;if(d in a.g){var p=a.g[d],C=Array.prototype.indexOf.call(p,c,void 0),N;(N=0<=C)&&Array.prototype.splice.call(p,C,1),N&&(Ro(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function tu(a,c,d,p){for(var C=0;C<a.length;++C){var N=a[C];if(!N.da&&N.listener==c&&N.capture==!!d&&N.ha==p)return C}return-1}var nu="closure_lm_"+(1e6*Math.random()|0),ru={};function If(a,c,d,p,C){if(Array.isArray(c)){for(var N=0;N<c.length;N++)If(a,c[N],d,p,C);return null}return d=kf(d),a&&a[tn]?a.K(c,d,h(p)?!!p.capture:!1,C):Sw(a,c,d,!1,p,C)}function Sw(a,c,d,p,C,N){if(!c)throw Error("Invalid event type");var U=h(C)?!!C.capture:!!C,le=su(a);if(le||(a[nu]=le=new Co(a)),d=le.add(c,d,p,U,N),d.proxy)return d;if(p=Aw(),d.proxy=p,p.src=a,p.listener=d,a.addEventListener)Jt||(C=U),C===void 0&&(C=!1),a.addEventListener(c.toString(),p,C);else if(a.attachEvent)a.attachEvent(Af(c.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Aw(){function a(d){return c.call(a.src,a.listener,d)}const c=kw;return a}function Sf(a,c,d,p,C){if(Array.isArray(c))for(var N=0;N<c.length;N++)Sf(a,c[N],d,p,C);else p=h(p)?!!p.capture:!!p,d=kf(d),a&&a[tn]?(a=a.i,c=String(c).toString(),c in a.g&&(N=a.g[c],d=tu(N,d,p,C),-1<d&&(Ro(N[d]),Array.prototype.splice.call(N,d,1),N.length==0&&(delete a.g[c],a.h--)))):a&&(a=su(a))&&(c=a.g[c.toString()],a=-1,c&&(a=tu(c,d,p,C)),(d=-1<a?c[a]:null)&&iu(d))}function iu(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[tn])eu(c.i,a);else{var d=a.type,p=a.proxy;c.removeEventListener?c.removeEventListener(d,p,a.capture):c.detachEvent?c.detachEvent(Af(d),p):c.addListener&&c.removeListener&&c.removeListener(p),(d=su(c))?(eu(d,a),d.h==0&&(d.src=null,c[nu]=null)):Ro(a)}}}function Af(a){return a in ru?ru[a]:ru[a]="on"+a}function kw(a,c){if(a.da)a=!0;else{c=new Zt(c,this);var d=a.listener,p=a.ha||a.src;a.fa&&iu(a),a=d.call(p,c)}return a}function su(a){return a=a[nu],a instanceof Co?a:null}var ou="__closure_events_fn_"+(1e9*Math.random()>>>0);function kf(a){return typeof a=="function"?a:(a[ou]||(a[ou]=function(c){return a.handleEvent(c)}),a[ou])}function He(){ae.call(this),this.i=new Co(this),this.M=this,this.F=null}x(He,ae),He.prototype[tn]=!0,He.prototype.removeEventListener=function(a,c,d,p){Sf(this,a,c,d,p)};function nt(a,c){var d,p=a.F;if(p)for(d=[];p;p=p.F)d.push(p);if(a=a.M,p=c.type||c,typeof c=="string")c=new Te(c,a);else if(c instanceof Te)c.target=c.target||a;else{var C=c;c=new Te(p,a),T(c,C)}if(C=!0,d)for(var N=d.length-1;0<=N;N--){var U=c.g=d[N];C=Po(U,p,!0,c)&&C}if(U=c.g=a,C=Po(U,p,!0,c)&&C,C=Po(U,p,!1,c)&&C,d)for(N=0;N<d.length;N++)U=c.g=d[N],C=Po(U,p,!1,c)&&C}He.prototype.N=function(){if(He.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],p=0;p<d.length;p++)Ro(d[p]);delete a.g[c],a.h--}}this.F=null},He.prototype.K=function(a,c,d,p){return this.i.add(String(a),c,!1,d,p)},He.prototype.L=function(a,c,d,p){return this.i.add(String(a),c,!0,d,p)};function Po(a,c,d,p){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var C=!0,N=0;N<c.length;++N){var U=c[N];if(U&&!U.da&&U.capture==d){var le=U.listener,Le=U.ha||U.src;U.fa&&eu(a.i,U),C=le.call(Le,p)!==!1&&C}}return C&&!p.defaultPrevented}function Rf(a,c,d){if(typeof a=="function")d&&(a=y(a,d));else if(a&&typeof a.handleEvent=="function")a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function Cf(a){a.g=Rf(()=>{a.g=null,a.i&&(a.i=!1,Cf(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class Rw extends ae{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Cf(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wi(a){ae.call(this),this.h=a,this.g={}}x(Wi,ae);var Pf=[];function xf(a){j(a.g,function(c,d){this.g.hasOwnProperty(d)&&iu(c)},a),a.g={}}Wi.prototype.N=function(){Wi.aa.N.call(this),xf(this)},Wi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var au=l.JSON.stringify,Cw=l.JSON.parse,Pw=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function lu(){}lu.prototype.h=null;function Nf(a){return a.h||(a.h=a.i())}function Df(){}var Ki={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function uu(){Te.call(this,"d")}x(uu,Te);function cu(){Te.call(this,"c")}x(cu,Te);var dr={},Vf=null;function xo(){return Vf=Vf||new He}dr.La="serverreachability";function Of(a){Te.call(this,dr.La,a)}x(Of,Te);function Gi(a){const c=xo();nt(c,new Of(c))}dr.STAT_EVENT="statevent";function Lf(a,c){Te.call(this,dr.STAT_EVENT,a),this.stat=c}x(Lf,Te);function rt(a){const c=xo();nt(c,new Lf(c,a))}dr.Ma="timingevent";function bf(a,c){Te.call(this,dr.Ma,a),this.size=c}x(bf,Te);function Qi(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function Yi(){this.g=!0}Yi.prototype.xa=function(){this.g=!1};function xw(a,c,d,p,C,N){a.info(function(){if(a.g)if(N)for(var U="",le=N.split("&"),Le=0;Le<le.length;Le++){var re=le[Le].split("=");if(1<re.length){var We=re[0];re=re[1];var Ke=We.split("_");U=2<=Ke.length&&Ke[1]=="type"?U+(We+"="+re+"&"):U+(We+"=redacted&")}}else U=null;else U=N;return"XMLHTTP REQ ("+p+") [attempt "+C+"]: "+c+`
`+d+`
`+U})}function Nw(a,c,d,p,C,N,U){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+C+"]: "+c+`
`+d+`
`+N+" "+U})}function $r(a,c,d,p){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+Vw(a,d)+(p?" "+p:"")})}function Dw(a,c){a.info(function(){return"TIMEOUT: "+c})}Yi.prototype.info=function(){};function Vw(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var p=d[a];if(!(2>p.length)){var C=p[1];if(Array.isArray(C)&&!(1>C.length)){var N=C[0];if(N!="noop"&&N!="stop"&&N!="close")for(var U=1;U<C.length;U++)C[U]=""}}}}return au(d)}catch{return c}}var No={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Mf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},hu;function Do(){}x(Do,lu),Do.prototype.g=function(){return new XMLHttpRequest},Do.prototype.i=function(){return{}},hu=new Do;function Sn(a,c,d,p){this.j=a,this.i=c,this.l=d,this.R=p||1,this.U=new Wi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ff}function Ff(){this.i=null,this.g="",this.h=!1}var Uf={},du={};function fu(a,c,d){a.L=1,a.v=bo(nn(c)),a.m=d,a.P=!0,jf(a,null)}function jf(a,c){a.F=Date.now(),Vo(a),a.A=nn(a.v);var d=a.A,p=a.R;Array.isArray(p)||(p=[String(p)]),ep(d.i,"t",p),a.C=0,d=a.j.J,a.h=new Ff,a.g=_p(a.j,d?c:null,!a.m),0<a.O&&(a.M=new Rw(y(a.Y,a,a.g),a.O)),c=a.U,d=a.g,p=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(Pf[0]=C.toString()),C=Pf);for(var N=0;N<C.length;N++){var U=If(d,C[N],p||c.handleEvent,!1,c.h||c);if(!U)break;c.g[U.key]=U}c=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),Gi(),xw(a.i,a.u,a.A,a.l,a.R,a.m)}Sn.prototype.ca=function(a){a=a.target;const c=this.M;c&&rn(a)==3?c.j():this.Y(a)},Sn.prototype.Y=function(a){try{if(a==this.g)e:{const Ke=rn(this.g);var c=this.g.Ba();const Wr=this.g.Z();if(!(3>Ke)&&(Ke!=3||this.g&&(this.h.h||this.g.oa()||ap(this.g)))){this.J||Ke!=4||c==7||(c==8||0>=Wr?Gi(3):Gi(2)),pu(this);var d=this.g.Z();this.X=d;t:if(zf(this)){var p=ap(this.g);a="";var C=p.length,N=rn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fr(this),Xi(this);var U="";break t}this.h.i=new l.TextDecoder}for(c=0;c<C;c++)this.h.h=!0,a+=this.h.i.decode(p[c],{stream:!(N&&c==C-1)});p.length=0,this.h.g+=a,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=d==200,Nw(this.i,this.u,this.A,this.l,this.R,Ke,d),this.o){if(this.T&&!this.K){t:{if(this.g){var le,Le=this.g;if((le=Le.g?Le.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(le)){var re=le;break t}}re=null}if(d=re)$r(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,mu(this,d);else{this.o=!1,this.s=3,rt(12),fr(this),Xi(this);break e}}if(this.P){d=!0;let Nt;for(;!this.J&&this.C<U.length;)if(Nt=Ow(this,U),Nt==du){Ke==4&&(this.s=4,rt(14),d=!1),$r(this.i,this.l,null,"[Incomplete Response]");break}else if(Nt==Uf){this.s=4,rt(15),$r(this.i,this.l,U,"[Invalid Chunk]"),d=!1;break}else $r(this.i,this.l,Nt,null),mu(this,Nt);if(zf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ke!=4||U.length!=0||this.h.h||(this.s=1,rt(16),d=!1),this.o=this.o&&d,!d)$r(this.i,this.l,U,"[Invalid Chunked Response]"),fr(this),Xi(this);else if(0<U.length&&!this.W){this.W=!0;var We=this.j;We.g==this&&We.ba&&!We.M&&(We.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),Eu(We),We.M=!0,rt(11))}}else $r(this.i,this.l,U,null),mu(this,U);Ke==4&&fr(this),this.o&&!this.J&&(Ke==4?pp(this.j,this):(this.o=!1,Vo(this)))}else Xw(this.g),d==400&&0<U.indexOf("Unknown SID")?(this.s=3,rt(12)):(this.s=0,rt(13)),fr(this),Xi(this)}}}catch{}finally{}};function zf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Ow(a,c){var d=a.C,p=c.indexOf(`
`,d);return p==-1?du:(d=Number(c.substring(d,p)),isNaN(d)?Uf:(p+=1,p+d>c.length?du:(c=c.slice(p,p+d),a.C=p+d,c)))}Sn.prototype.cancel=function(){this.J=!0,fr(this)};function Vo(a){a.S=Date.now()+a.I,Bf(a,a.I)}function Bf(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Qi(y(a.ba,a),c)}function pu(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Sn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Dw(this.i,this.A),this.L!=2&&(Gi(),rt(17)),fr(this),this.s=2,Xi(this)):Bf(this,this.S-a)};function Xi(a){a.j.G==0||a.J||pp(a.j,a)}function fr(a){pu(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,xf(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function mu(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||gu(d.h,a))){if(!a.K&&gu(d.h,a)&&d.G==3){try{var p=d.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var C=p;if(C[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Bo(d),jo(d);else break e;wu(d),rt(18)}}else d.za=C[1],0<d.za-d.T&&37500>C[2]&&d.F&&d.v==0&&!d.C&&(d.C=Qi(y(d.Za,d),6e3));if(1>=Hf(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else mr(d,11)}else if((a.K||d.g==a)&&Bo(d),!_(c))for(C=d.Da.g.parse(c),c=0;c<C.length;c++){let re=C[c];if(d.T=re[0],re=re[1],d.G==2)if(re[0]=="c"){d.K=re[1],d.ia=re[2];const We=re[3];We!=null&&(d.la=We,d.j.info("VER="+d.la));const Ke=re[4];Ke!=null&&(d.Aa=Ke,d.j.info("SVER="+d.Aa));const Wr=re[5];Wr!=null&&typeof Wr=="number"&&0<Wr&&(p=1.5*Wr,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Nt=a.g;if(Nt){const qo=Nt.g?Nt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(qo){var N=p.h;N.g||qo.indexOf("spdy")==-1&&qo.indexOf("quic")==-1&&qo.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(yu(N,N.h),N.h=null))}if(p.D){const Tu=Nt.g?Nt.g.getResponseHeader("X-HTTP-Session-Id"):null;Tu&&(p.ya=Tu,ce(p.I,p.D,Tu))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var U=a;if(p.qa=yp(p,p.J?p.ia:null,p.W),U.K){Wf(p.h,U);var le=U,Le=p.L;Le&&(le.I=Le),le.B&&(pu(le),Vo(le)),p.g=U}else dp(p);0<d.i.length&&zo(d)}else re[0]!="stop"&&re[0]!="close"||mr(d,7);else d.G==3&&(re[0]=="stop"||re[0]=="close"?re[0]=="stop"?mr(d,7):vu(d):re[0]!="noop"&&d.l&&d.l.ta(re),d.v=0)}}Gi(4)}catch{}}var Lw=class{constructor(a,c){this.g=a,this.map=c}};function $f(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function qf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Hf(a){return a.h?1:a.g?a.g.size:0}function gu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function yu(a,c){a.g?a.g.add(c):a.h=c}function Wf(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}$f.prototype.cancel=function(){if(this.i=Kf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Kf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return D(a.i)}function bw(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,p=0;p<d;p++)c.push(a[p]);return c}c=[],d=0;for(p in a)c[d++]=a[p];return c}function Mw(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const p in a)c[d++]=p;return c}}}function Gf(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=Mw(a),p=bw(a),C=p.length,N=0;N<C;N++)c.call(void 0,p[N],d&&d[N],a)}var Qf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Fw(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var p=a[d].indexOf("="),C=null;if(0<=p){var N=a[d].substring(0,p);C=a[d].substring(p+1)}else N=a[d];c(N,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function pr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof pr){this.h=a.h,Oo(this,a.j),this.o=a.o,this.g=a.g,Lo(this,a.s),this.l=a.l;var c=a.i,d=new es;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),Yf(this,d),this.m=a.m}else a&&(c=String(a).match(Qf))?(this.h=!1,Oo(this,c[1]||"",!0),this.o=Ji(c[2]||""),this.g=Ji(c[3]||"",!0),Lo(this,c[4]),this.l=Ji(c[5]||"",!0),Yf(this,c[6]||"",!0),this.m=Ji(c[7]||"")):(this.h=!1,this.i=new es(null,this.h))}pr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(Zi(c,Xf,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(Zi(c,Xf,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Zi(d,d.charAt(0)=="/"?zw:jw,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Zi(d,$w)),a.join("")};function nn(a){return new pr(a)}function Oo(a,c,d){a.j=d?Ji(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function Lo(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function Yf(a,c,d){c instanceof es?(a.i=c,qw(a.i,a.h)):(d||(c=Zi(c,Bw)),a.i=new es(c,a.h))}function ce(a,c,d){a.i.set(c,d)}function bo(a){return ce(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ji(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Zi(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,Uw),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Uw(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Xf=/[#\/\?@]/g,jw=/[#\?:]/g,zw=/[#\?]/g,Bw=/[#\?@]/g,$w=/#/g;function es(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function An(a){a.g||(a.g=new Map,a.h=0,a.i&&Fw(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=es.prototype,t.add=function(a,c){An(this),this.i=null,a=qr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function Jf(a,c){An(a),c=qr(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function Zf(a,c){return An(a),c=qr(a,c),a.g.has(c)}t.forEach=function(a,c){An(this),this.g.forEach(function(d,p){d.forEach(function(C){a.call(c,C,p,this)},this)},this)},t.na=function(){An(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let p=0;p<c.length;p++){const C=a[p];for(let N=0;N<C.length;N++)d.push(c[p])}return d},t.V=function(a){An(this);let c=[];if(typeof a=="string")Zf(this,a)&&(c=c.concat(this.g.get(qr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return An(this),this.i=null,a=qr(this,a),Zf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function ep(a,c,d){Jf(a,c),0<d.length&&(a.i=null,a.g.set(qr(a,c),D(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var p=c[d];const N=encodeURIComponent(String(p)),U=this.V(p);for(p=0;p<U.length;p++){var C=N;U[p]!==""&&(C+="="+encodeURIComponent(String(U[p]))),a.push(C)}}return this.i=a.join("&")};function qr(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function qw(a,c){c&&!a.j&&(An(a),a.i=null,a.g.forEach(function(d,p){var C=p.toLowerCase();p!=C&&(Jf(this,p),ep(this,C,d))},a)),a.j=c}function Hw(a,c){const d=new Yi;if(l.Image){const p=new Image;p.onload=A(kn,d,"TestLoadImage: loaded",!0,c,p),p.onerror=A(kn,d,"TestLoadImage: error",!1,c,p),p.onabort=A(kn,d,"TestLoadImage: abort",!1,c,p),p.ontimeout=A(kn,d,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else c(!1)}function Ww(a,c){const d=new Yi,p=new AbortController,C=setTimeout(()=>{p.abort(),kn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:p.signal}).then(N=>{clearTimeout(C),N.ok?kn(d,"TestPingServer: ok",!0,c):kn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(C),kn(d,"TestPingServer: error",!1,c)})}function kn(a,c,d,p,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),p(d)}catch{}}function Kw(){this.g=new Pw}function Gw(a,c,d){const p=d||"";try{Gf(a,function(C,N){let U=C;h(C)&&(U=au(C)),c.push(p+N+"="+encodeURIComponent(U))})}catch(C){throw c.push(p+"type="+encodeURIComponent("_badmap")),C}}function Mo(a){this.l=a.Ub||null,this.j=a.eb||!1}x(Mo,lu),Mo.prototype.g=function(){return new Fo(this.l,this.j)},Mo.prototype.i=function(a){return function(){return a}}({});function Fo(a,c){He.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(Fo,He),t=Fo.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,ns(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ts(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ns(this)),this.g&&(this.readyState=3,ns(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;tp(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function tp(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?ts(this):ns(this),this.readyState==3&&tp(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ts(this))},t.Qa=function(a){this.g&&(this.response=a,ts(this))},t.ga=function(){this.g&&ts(this)};function ts(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ns(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function ns(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Fo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function np(a){let c="";return j(a,function(d,p){c+=p,c+=":",c+=d,c+=`\r
`}),c}function _u(a,c,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=np(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):ce(a,c,d))}function we(a){He.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(we,He);var Qw=/^https?$/i,Yw=["POST","PUT"];t=we.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():hu.g(),this.v=this.o?Nf(this.o):Nf(hu),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(N){rp(this,N);return}if(a=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var C in p)d.set(C,p[C]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const N of p.keys())d.set(N,p.get(N));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),C=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Yw,c,void 0))||p||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,U]of d)this.g.setRequestHeader(N,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{op(this),this.u=!0,this.g.send(a),this.u=!1}catch(N){rp(this,N)}};function rp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,ip(a),Uo(a)}function ip(a){a.A||(a.A=!0,nt(a,"complete"),nt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,nt(this,"complete"),nt(this,"abort"),Uo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Uo(this,!0)),we.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?sp(this):this.bb())},t.bb=function(){sp(this)};function sp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||rn(a)!=4||a.Z()!=2)){if(a.u&&rn(a)==4)Rf(a.Ea,0,a);else if(nt(a,"readystatechange"),rn(a)==4){a.h=!1;try{const U=a.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var p;if(p=U===0){var C=String(a.D).match(Qf)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),p=!Qw.test(C?C.toLowerCase():"")}d=p}if(d)nt(a,"complete"),nt(a,"success");else{a.m=6;try{var N=2<rn(a)?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.Z()+"]",ip(a)}}finally{Uo(a)}}}}function Uo(a,c){if(a.g){op(a);const d=a.g,p=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||nt(a,"ready");try{d.onreadystatechange=p}catch{}}}function op(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function rn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<rn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),Cw(c)}};function ap(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Xw(a){const c={};a=(a.g&&2<=rn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(_(a[p]))continue;var d=k(a[p]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=c[C]||[];c[C]=N,N.push(d)}w(c,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function rs(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function lp(a){this.Aa=0,this.i=[],this.j=new Yi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=rs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=rs("baseRetryDelayMs",5e3,a),this.cb=rs("retryDelaySeedMs",1e4,a),this.Wa=rs("forwardChannelMaxRetries",2,a),this.wa=rs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new $f(a&&a.concurrentRequestLimit),this.Da=new Kw,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=lp.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,p){rt(0),this.W=a,this.H=c||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=yp(this,null,this.W),zo(this)};function vu(a){if(up(a),a.G==3){var c=a.U++,d=nn(a.I);if(ce(d,"SID",a.K),ce(d,"RID",c),ce(d,"TYPE","terminate"),is(a,d),c=new Sn(a,a.j,c),c.L=2,c.v=bo(nn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=_p(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Vo(c)}gp(a)}function jo(a){a.g&&(Eu(a),a.g.cancel(),a.g=null)}function up(a){jo(a),a.u&&(l.clearTimeout(a.u),a.u=null),Bo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function zo(a){if(!qf(a.h)&&!a.s){a.s=!0;var c=a.Ga;Xt||X(),z||(Xt(),z=!0),G.add(c,a),a.B=0}}function Jw(a,c){return Hf(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Qi(y(a.Ga,a,c),mp(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new Sn(this,this.j,a);let N=this.o;if(this.S&&(N?(N=g(N),T(N,this.S)):N=this.S),this.m!==null||this.O||(C.H=N,N=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=hp(this,C,c),d=nn(this.I),ce(d,"RID",a),ce(d,"CVER",22),this.D&&ce(d,"X-HTTP-Session-Id",this.D),is(this,d),N&&(this.O?c="headers="+encodeURIComponent(String(np(N)))+"&"+c:this.m&&_u(d,this.m,N)),yu(this.h,C),this.Ua&&ce(d,"TYPE","init"),this.P?(ce(d,"$req",c),ce(d,"SID","null"),C.T=!0,fu(C,d,null)):fu(C,d,c),this.G=2}}else this.G==3&&(a?cp(this,a):this.i.length==0||qf(this.h)||cp(this))};function cp(a,c){var d;c?d=c.l:d=a.U++;const p=nn(a.I);ce(p,"SID",a.K),ce(p,"RID",d),ce(p,"AID",a.T),is(a,p),a.m&&a.o&&_u(p,a.m,a.o),d=new Sn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=hp(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),yu(a.h,d),fu(d,p,c)}function is(a,c){a.H&&j(a.H,function(d,p){ce(c,p,d)}),a.l&&Gf({},function(d,p){ce(c,p,d)})}function hp(a,c,d){d=Math.min(a.i.length,d);var p=a.l?y(a.l.Na,a.l,a):null;e:{var C=a.i;let N=-1;for(;;){const U=["count="+d];N==-1?0<d?(N=C[0].g,U.push("ofs="+N)):N=0:U.push("ofs="+N);let le=!0;for(let Le=0;Le<d;Le++){let re=C[Le].g;const We=C[Le].map;if(re-=N,0>re)N=Math.max(0,C[Le].g-100),le=!1;else try{Gw(We,U,"req"+re+"_")}catch{p&&p(We)}}if(le){p=U.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,p}function dp(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;Xt||X(),z||(Xt(),z=!0),G.add(c,a),a.v=0}}function wu(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Qi(y(a.Fa,a),mp(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,fp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Qi(y(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,rt(10),jo(this),fp(this))};function Eu(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function fp(a){a.g=new Sn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=nn(a.qa);ce(c,"RID","rpc"),ce(c,"SID",a.K),ce(c,"AID",a.T),ce(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&ce(c,"TO",a.ja),ce(c,"TYPE","xmlhttp"),is(a,c),a.m&&a.o&&_u(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=bo(nn(c)),d.m=null,d.P=!0,jf(d,a)}t.Za=function(){this.C!=null&&(this.C=null,jo(this),wu(this),rt(19))};function Bo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function pp(a,c){var d=null;if(a.g==c){Bo(a),Eu(a),a.g=null;var p=2}else if(gu(a.h,c))d=c.D,Wf(a.h,c),p=1;else return;if(a.G!=0){if(c.o)if(p==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var C=a.B;p=xo(),nt(p,new bf(p,d)),zo(a)}else dp(a);else if(C=c.s,C==3||C==0&&0<c.X||!(p==1&&Jw(a,c)||p==2&&wu(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),C){case 1:mr(a,5);break;case 4:mr(a,10);break;case 3:mr(a,6);break;default:mr(a,2)}}}function mp(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function mr(a,c){if(a.j.info("Error code "+c),c==2){var d=y(a.fb,a),p=a.Xa;const C=!p;p=new pr(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Oo(p,"https"),bo(p),C?Hw(p.toString(),d):Ww(p.toString(),d)}else rt(2);a.G=0,a.l&&a.l.sa(c),gp(a),up(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function gp(a){if(a.G=0,a.ka=[],a.l){const c=Kf(a.h);(c.length!=0||a.i.length!=0)&&(L(a.ka,c),L(a.ka,a.i),a.h.i.length=0,D(a.i),a.i.length=0),a.l.ra()}}function yp(a,c,d){var p=d instanceof pr?nn(d):new pr(d);if(p.g!="")c&&(p.g=c+"."+p.g),Lo(p,p.s);else{var C=l.location;p=C.protocol,c=c?c+"."+C.hostname:C.hostname,C=+C.port;var N=new pr(null);p&&Oo(N,p),c&&(N.g=c),C&&Lo(N,C),d&&(N.l=d),p=N}return d=a.D,c=a.ya,d&&c&&ce(p,d,c),ce(p,"VER",a.la),is(a,p),p}function _p(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new we(new Mo({eb:d})):new we(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function vp(){}t=vp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function $o(){}$o.prototype.g=function(a,c){return new mt(a,c)};function mt(a,c){He.call(this),this.g=new lp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!_(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!_(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new Hr(this)}x(mt,He),mt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},mt.prototype.close=function(){vu(this.g)},mt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=au(a),a=d);c.i.push(new Lw(c.Ya++,a)),c.G==3&&zo(c)},mt.prototype.N=function(){this.g.l=null,delete this.j,vu(this.g),delete this.g,mt.aa.N.call(this)};function wp(a){uu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}x(wp,uu);function Ep(){cu.call(this),this.status=1}x(Ep,cu);function Hr(a){this.g=a}x(Hr,vp),Hr.prototype.ua=function(){nt(this.g,"a")},Hr.prototype.ta=function(a){nt(this.g,new wp(a))},Hr.prototype.sa=function(a){nt(this.g,new Ep)},Hr.prototype.ra=function(){nt(this.g,"b")},$o.prototype.createWebChannel=$o.prototype.g,mt.prototype.send=mt.prototype.o,mt.prototype.open=mt.prototype.m,mt.prototype.close=mt.prototype.close,i0=function(){return new $o},r0=function(){return xo()},n0=dr,dh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},No.NO_ERROR=0,No.TIMEOUT=8,No.HTTP_ERROR=6,Pa=No,Mf.COMPLETE="complete",t0=Mf,Df.EventType=Ki,Ki.OPEN="a",Ki.CLOSE="b",Ki.ERROR="c",Ki.MESSAGE="d",He.prototype.listen=He.prototype.K,vs=Df,we.prototype.listenOnce=we.prototype.L,we.prototype.getLastError=we.prototype.Ka,we.prototype.getLastErrorCode=we.prototype.Ba,we.prototype.getStatus=we.prototype.Z,we.prototype.getResponseJson=we.prototype.Oa,we.prototype.getResponseText=we.prototype.oa,we.prototype.send=we.prototype.ea,we.prototype.setWithCredentials=we.prototype.Ha,e0=we}).apply(typeof ua<"u"?ua:typeof self<"u"?self:typeof window<"u"?window:{});const og="@firebase/firestore";/**
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
 */class Xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
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
 */let zi="10.14.0";/**
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
 */const Lr=new Sd("@firebase/firestore");function fs(){return Lr.logLevel}function q(t,...e){if(Lr.logLevel<=ee.DEBUG){const n=e.map(Md);Lr.debug(`Firestore (${zi}): ${t}`,...n)}}function wn(t,...e){if(Lr.logLevel<=ee.ERROR){const n=e.map(Md);Lr.error(`Firestore (${zi}): ${t}`,...n)}}function Pi(t,...e){if(Lr.logLevel<=ee.WARN){const n=e.map(Md);Lr.warn(`Firestore (${zi}): ${t}`,...n)}}function Md(t){if(typeof t=="string")return t;try{/**
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
 */function K(t="Unexpected state"){const e=`FIRESTORE (${zi}) INTERNAL ASSERTION FAILED: `+t;throw wn(e),new Error(e)}function oe(t,e){t||K()}function Y(t,e){return t}/**
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
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends In{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Zn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class s0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Xe.UNAUTHENTICATED))}shutdown(){}}class Ek{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Tk{constructor(e){this.t=e,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){oe(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Zn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Zn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Zn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(oe(typeof r.accessToken=="string"),new s0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string"),new Xe(e)}}class Ik{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Sk{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Ik(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ak{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kk{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){oe(this.o===void 0);const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(oe(typeof n.token=="string"),this.R=n.token,new Ak(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Rk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class o0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Rk(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ie(t,e){return t<e?-1:t>e?1:0}function xi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class xe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new B(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return xe.fromMillis(Date.now())}static fromDate(e){return xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new xe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Q(e)}static min(){return new Q(new xe(0,0))}static max(){return new Q(new xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class no{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(),r===void 0?r=e.length-n:r>e.length-n&&K(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return no.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof no?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class de extends no{construct(e,n,r){return new de(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new de(n)}static emptyPath(){return new de([])}}const Ck=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Fe extends no{construct(e,n,r){return new Fe(e,n,r)}static isValidIdentifier(e){return Ck.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Fe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Fe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new B(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new B(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new B(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new B(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Fe(n)}static emptyPath(){return new Fe([])}}/**
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
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(de.fromString(e))}static fromName(e){return new H(de.fromString(e).popFirst(5))}static empty(){return new H(de.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&de.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return de.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new de(e.slice()))}}function Pk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Q.fromTimestamp(r===1e9?new xe(n+1,0):new xe(n,r));return new rr(i,H.empty(),e)}function xk(t){return new rr(t.readTime,t.key,-1)}class rr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new rr(Q.min(),H.empty(),-1)}static max(){return new rr(Q.max(),H.empty(),-1)}}function Nk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:ie(t.largestBatchId,e.largestBatchId))}/**
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
 */const Dk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Vk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function wo(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==Dk)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,r)=>{n(e)})}static reject(e){return new b((n,r)=>{r(e)})}static waitFor(e){return new b((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=b.resolve(!1);for(const r of e)n=n.next(i=>i?b.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new b((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new b((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Ok(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Eo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Fd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Fd.oe=-1;function Ul(t){return t==null}function dl(t){return t===0&&1/t==-1/0}function Lk(t){return typeof t=="number"&&Number.isInteger(t)&&!dl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function ag(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function zr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function a0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ve{constructor(e,n){this.comparator=e,this.root=n||Me.EMPTY}insert(e,n){return new ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Me.BLACK,null,null))}remove(e){return new ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Me.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ca(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ca(this.root,e,this.comparator,!1)}getReverseIterator(){return new ca(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ca(this.root,e,this.comparator,!0)}}class ca{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Me{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Me.RED,this.left=i??Me.EMPTY,this.right=s??Me.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Me(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Me.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Me.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}Me.EMPTY=null,Me.RED=!0,Me.BLACK=!1;Me.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Me(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class je{constructor(e){this.comparator=e,this.data=new ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new lg(this.data.getIterator())}getIteratorFrom(e){return new lg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new je(this.comparator);return n.data=e,n}}class lg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class _t{constructor(e){this.fields=e,e.sort(Fe.comparator)}static empty(){return new _t([])}unionWith(e){let n=new je(Fe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new _t(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return xi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class l0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class $e{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new l0("Invalid base64 string: "+s):s}}(e);return new $e(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new $e(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}$e.EMPTY_BYTE_STRING=new $e("");const bk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ir(t){if(oe(!!t),typeof t=="string"){let e=0;const n=bk.exec(t);if(oe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ie(t.seconds),nanos:Ie(t.nanos)}}function Ie(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function br(t){return typeof t=="string"?$e.fromBase64String(t):$e.fromUint8Array(t)}/**
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
 */function Ud(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function jd(t){const e=t.mapValue.fields.__previous_value__;return Ud(e)?jd(e):e}function ro(t){const e=ir(t.mapValue.fields.__local_write_time__.timestampValue);return new xe(e.seconds,e.nanos)}/**
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
 */class Mk{constructor(e,n,r,i,s,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class io{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new io("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof io&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ha={mapValue:{}};function Mr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ud(t)?4:Uk(t)?9007199254740991:Fk(t)?10:11:K()}function Yt(t,e){if(t===e)return!0;const n=Mr(t);if(n!==Mr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ro(t).isEqual(ro(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ir(i.timestampValue),l=ir(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return br(i.bytesValue).isEqual(br(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ie(i.geoPointValue.latitude)===Ie(s.geoPointValue.latitude)&&Ie(i.geoPointValue.longitude)===Ie(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ie(i.integerValue)===Ie(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ie(i.doubleValue),l=Ie(s.doubleValue);return o===l?dl(o)===dl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return xi(t.arrayValue.values||[],e.arrayValue.values||[],Yt);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(ag(o)!==ag(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Yt(o[u],l[u])))return!1;return!0}(t,e);default:return K()}}function so(t,e){return(t.values||[]).find(n=>Yt(n,e))!==void 0}function Ni(t,e){if(t===e)return 0;const n=Mr(t),r=Mr(e);if(n!==r)return ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ie(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ie(s.integerValue||s.doubleValue),u=Ie(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return ug(t.timestampValue,e.timestampValue);case 4:return ug(ro(t),ro(e));case 5:return ie(t.stringValue,e.stringValue);case 6:return function(s,o){const l=br(s),u=br(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=ie(l[h],u[h]);if(f!==0)return f}return ie(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ie(Ie(s.latitude),Ie(o.latitude));return l!==0?l:ie(Ie(s.longitude),Ie(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return cg(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,h,f;const m=s.fields||{},y=o.fields||{},A=(l=m.value)===null||l===void 0?void 0:l.arrayValue,x=(u=y.value)===null||u===void 0?void 0:u.arrayValue,D=ie(((h=A==null?void 0:A.values)===null||h===void 0?void 0:h.length)||0,((f=x==null?void 0:x.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:cg(A,x)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===ha.mapValue&&o===ha.mapValue)return 0;if(s===ha.mapValue)return 1;if(o===ha.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const y=ie(u[m],f[m]);if(y!==0)return y;const A=Ni(l[u[m]],h[f[m]]);if(A!==0)return A}return ie(u.length,f.length)}(t.mapValue,e.mapValue);default:throw K()}}function ug(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ie(t,e);const n=ir(t),r=ir(e),i=ie(n.seconds,r.seconds);return i!==0?i:ie(n.nanos,r.nanos)}function cg(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Ni(n[i],r[i]);if(s)return s}return ie(n.length,r.length)}function Di(t){return fh(t)}function fh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ir(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return br(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=fh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${fh(n.fields[o])}`;return i+"}"}(t.mapValue):K()}function hg(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ph(t){return!!t&&"integerValue"in t}function zd(t){return!!t&&"arrayValue"in t}function dg(t){return!!t&&"nullValue"in t}function fg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function xa(t){return!!t&&"mapValue"in t}function Fk(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Vs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return zr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Vs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Vs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Uk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class ut{constructor(e){this.value=e}static empty(){return new ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!xa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Vs(n)}setAll(e){let n=Fe.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Vs(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());xa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Yt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];xa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){zr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ut(Vs(this.value))}}function u0(t){const e=[];return zr(t.fields,(n,r)=>{const i=new Fe([n]);if(xa(r)){const s=u0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new _t(e)}/**
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
 */class Ze{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Ze(e,0,Q.min(),Q.min(),Q.min(),ut.empty(),0)}static newFoundDocument(e,n,r,i){return new Ze(e,1,n,Q.min(),r,i,0)}static newNoDocument(e,n){return new Ze(e,2,n,Q.min(),Q.min(),ut.empty(),0)}static newUnknownDocument(e,n){return new Ze(e,3,n,Q.min(),Q.min(),ut.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class fl{constructor(e,n){this.position=e,this.inclusive=n}}function pg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=Ni(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function mg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Yt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class oo{constructor(e,n="asc"){this.field=e,this.dir=n}}function jk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class c0{}class Re extends c0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Bk(e,n,r):n==="array-contains"?new Hk(e,r):n==="in"?new Wk(e,r):n==="not-in"?new Kk(e,r):n==="array-contains-any"?new Gk(e,r):new Re(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new $k(e,r):new qk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ni(n,this.value)):n!==null&&Mr(this.value)===Mr(n)&&this.matchesComparison(Ni(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ut extends c0{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Ut(e,n)}matches(e){return h0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function h0(t){return t.op==="and"}function d0(t){return zk(t)&&h0(t)}function zk(t){for(const e of t.filters)if(e instanceof Ut)return!1;return!0}function mh(t){if(t instanceof Re)return t.field.canonicalString()+t.op.toString()+Di(t.value);if(d0(t))return t.filters.map(e=>mh(e)).join(",");{const e=t.filters.map(n=>mh(n)).join(",");return`${t.op}(${e})`}}function f0(t,e){return t instanceof Re?function(r,i){return i instanceof Re&&r.op===i.op&&r.field.isEqual(i.field)&&Yt(r.value,i.value)}(t,e):t instanceof Ut?function(r,i){return i instanceof Ut&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&f0(o,i.filters[l]),!0):!1}(t,e):void K()}function p0(t){return t instanceof Re?function(n){return`${n.field.canonicalString()} ${n.op} ${Di(n.value)}`}(t):t instanceof Ut?function(n){return n.op.toString()+" {"+n.getFilters().map(p0).join(" ,")+"}"}(t):"Filter"}class Bk extends Re{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class $k extends Re{constructor(e,n){super(e,"in",n),this.keys=m0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class qk extends Re{constructor(e,n){super(e,"not-in",n),this.keys=m0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function m0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class Hk extends Re{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return zd(n)&&so(n.arrayValue,this.value)}}class Wk extends Re{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&so(this.value.arrayValue,n)}}class Kk extends Re{constructor(e,n){super(e,"not-in",n)}matches(e){if(so(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!so(this.value.arrayValue,n)}}class Gk extends Re{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!zd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>so(this.value.arrayValue,r))}}/**
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
 */class Qk{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function gg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Qk(t,e,n,r,i,s,o)}function Bd(t){const e=Y(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>mh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ul(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Di(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Di(r)).join(",")),e.ue=n}return e.ue}function $d(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!jk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!f0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!mg(t.startAt,e.startAt)&&mg(t.endAt,e.endAt)}function gh(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Bi{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Yk(t,e,n,r,i,s,o,l){return new Bi(t,e,n,r,i,s,o,l)}function qd(t){return new Bi(t)}function yg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function g0(t){return t.collectionGroup!==null}function Os(t){const e=Y(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new je(Fe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new oo(s,r))}),n.has(Fe.keyField().canonicalString())||e.ce.push(new oo(Fe.keyField(),r))}return e.ce}function Kt(t){const e=Y(t);return e.le||(e.le=Xk(e,Os(t))),e.le}function Xk(t,e){if(t.limitType==="F")return gg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new oo(i.field,s)});const n=t.endAt?new fl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new fl(t.startAt.position,t.startAt.inclusive):null;return gg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function yh(t,e){const n=t.filters.concat([e]);return new Bi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function _h(t,e,n){return new Bi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function jl(t,e){return $d(Kt(t),Kt(e))&&t.limitType===e.limitType}function y0(t){return`${Bd(Kt(t))}|lt:${t.limitType}`}function Gr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>p0(i)).join(", ")}]`),Ul(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Di(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Di(i)).join(",")),`Target(${r})`}(Kt(t))}; limitType=${t.limitType})`}function zl(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Os(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=pg(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Os(r),i)||r.endAt&&!function(o,l,u){const h=pg(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Os(r),i))}(t,e)}function Jk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function _0(t){return(e,n)=>{let r=!1;for(const i of Os(t)){const s=Zk(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Zk(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Ni(u,h):K()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
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
 */class $i{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){zr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return a0(this.inner)}size(){return this.innerSize}}/**
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
 */const eR=new ve(H.comparator);function En(){return eR}const v0=new ve(H.comparator);function ws(...t){let e=v0;for(const n of t)e=e.insert(n.key,n);return e}function w0(t){let e=v0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ir(){return Ls()}function E0(){return Ls()}function Ls(){return new $i(t=>t.toString(),(t,e)=>t.isEqual(e))}const tR=new ve(H.comparator),nR=new je(H.comparator);function Z(...t){let e=nR;for(const n of t)e=e.add(n);return e}const rR=new je(ie);function iR(){return rR}/**
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
 */function Hd(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:dl(e)?"-0":e}}function T0(t){return{integerValue:""+t}}function sR(t,e){return Lk(e)?T0(e):Hd(t,e)}/**
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
 */class Bl{constructor(){this._=void 0}}function oR(t,e,n){return t instanceof pl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ud(s)&&(s=jd(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ao?S0(t,e):t instanceof lo?A0(t,e):function(i,s){const o=I0(i,s),l=_g(o)+_g(i.Pe);return ph(o)&&ph(i.Pe)?T0(l):Hd(i.serializer,l)}(t,e)}function aR(t,e,n){return t instanceof ao?S0(t,e):t instanceof lo?A0(t,e):n}function I0(t,e){return t instanceof ml?function(r){return ph(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class pl extends Bl{}class ao extends Bl{constructor(e){super(),this.elements=e}}function S0(t,e){const n=k0(e);for(const r of t.elements)n.some(i=>Yt(i,r))||n.push(r);return{arrayValue:{values:n}}}class lo extends Bl{constructor(e){super(),this.elements=e}}function A0(t,e){let n=k0(e);for(const r of t.elements)n=n.filter(i=>!Yt(i,r));return{arrayValue:{values:n}}}class ml extends Bl{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function _g(t){return Ie(t.integerValue||t.doubleValue)}function k0(t){return zd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function lR(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ao&&i instanceof ao||r instanceof lo&&i instanceof lo?xi(r.elements,i.elements,Yt):r instanceof ml&&i instanceof ml?Yt(r.Pe,i.Pe):r instanceof pl&&i instanceof pl}(t.transform,e.transform)}class uR{constructor(e,n){this.version=e,this.transformResults=n}}class wt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new wt}static exists(e){return new wt(void 0,e)}static updateTime(e){return new wt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Na(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class $l{}function R0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Wd(t.key,wt.none()):new To(t.key,t.data,wt.none());{const n=t.data,r=ut.empty();let i=new je(Fe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ur(t.key,r,new _t(i.toArray()),wt.none())}}function cR(t,e,n){t instanceof To?function(i,s,o){const l=i.value.clone(),u=wg(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof ur?function(i,s,o){if(!Na(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=wg(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(C0(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function bs(t,e,n,r){return t instanceof To?function(s,o,l,u){if(!Na(s.precondition,o))return l;const h=s.value.clone(),f=Eg(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof ur?function(s,o,l,u){if(!Na(s.precondition,o))return l;const h=Eg(s.fieldTransforms,u,o),f=o.data;return f.setAll(C0(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return Na(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function hR(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=I0(r.transform,i||null);s!=null&&(n===null&&(n=ut.empty()),n.set(r.field,s))}return n||null}function vg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&xi(r,i,(s,o)=>lR(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class To extends $l{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ur extends $l{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function C0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function wg(t,e,n){const r=new Map;oe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,aR(o,l,n[i]))}return r}function Eg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,oR(s,o,e))}return r}class Wd extends $l{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class dR extends $l{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class fR{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&cR(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=bs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=bs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=E0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=R0(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Z())}isEqual(e){return this.batchId===e.batchId&&xi(this.mutations,e.mutations,(n,r)=>vg(n,r))&&xi(this.baseMutations,e.baseMutations,(n,r)=>vg(n,r))}}class Kd{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){oe(e.mutations.length===r.length);let i=function(){return tR}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Kd(e,n,r,i)}}/**
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
 */class pR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class mR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ae,te;function gR(t){switch(t){default:return K();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0}}function P0(t){if(t===void 0)return wn("GRPC error has no .code"),O.UNKNOWN;switch(t){case Ae.OK:return O.OK;case Ae.CANCELLED:return O.CANCELLED;case Ae.UNKNOWN:return O.UNKNOWN;case Ae.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Ae.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Ae.INTERNAL:return O.INTERNAL;case Ae.UNAVAILABLE:return O.UNAVAILABLE;case Ae.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Ae.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Ae.NOT_FOUND:return O.NOT_FOUND;case Ae.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Ae.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Ae.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Ae.ABORTED:return O.ABORTED;case Ae.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Ae.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Ae.DATA_LOSS:return O.DATA_LOSS;default:return K()}}(te=Ae||(Ae={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function yR(){return new TextEncoder}/**
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
 */const _R=new Rr([4294967295,4294967295],0);function Tg(t){const e=yR().encode(t),n=new Zv;return n.update(e),new Uint8Array(n.digest())}function Ig(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Rr([n,r],0),new Rr([i,s],0)]}class Gd{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Es(`Invalid padding: ${n}`);if(r<0)throw new Es(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Es(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Es(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Rr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Rr.fromNumber(r)));return i.compare(_R)===1&&(i=new Rr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Tg(e),[r,i]=Ig(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Gd(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Tg(e),[r,i]=Ig(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Es extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ql{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Io.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ql(Q.min(),i,new ve(ie),En(),Z())}}class Io{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Io(r,n,Z(),Z(),Z())}}/**
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
 */class Da{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class x0{constructor(e,n){this.targetId=e,this.me=n}}class N0{constructor(e,n,r=$e.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Sg{constructor(){this.fe=0,this.ge=kg(),this.pe=$e.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Z(),n=Z(),r=Z();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K()}}),new Io(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=kg()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,oe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class vR{constructor(e){this.Le=e,this.Be=new Map,this.ke=En(),this.qe=Ag(),this.Qe=new ve(ie)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(gh(s))if(r===0){const o=new H(s.path);this.Ue(n,o,Ze.newNoDocument(o,Q.min()))}else oe(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=br(r).toUint8Array()}catch(u){if(u instanceof l0)return Pi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Gd(o,i,s)}catch(u){return Pi(u instanceof Es?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&gh(l.target)){const u=new H(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Ze.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=Z();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new ql(e,n,this.Qe,this.ke,r);return this.ke=En(),this.qe=Ag(),this.Qe=new ve(ie),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Sg,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new je(ie),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Sg),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Ag(){return new ve(H.comparator)}function kg(){return new ve(H.comparator)}const wR={asc:"ASCENDING",desc:"DESCENDING"},ER={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},TR={and:"AND",or:"OR"};class IR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function vh(t,e){return t.useProto3Json||Ul(e)?e:{value:e}}function gl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function D0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function SR(t,e){return gl(t,e.toTimestamp())}function Gt(t){return oe(!!t),Q.fromTimestamp(function(n){const r=ir(n);return new xe(r.seconds,r.nanos)}(t))}function Qd(t,e){return wh(t,e).canonicalString()}function wh(t,e){const n=function(i){return new de(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function V0(t){const e=de.fromString(t);return oe(F0(e)),e}function Eh(t,e){return Qd(t.databaseId,e.path)}function nc(t,e){const n=V0(e);if(n.get(1)!==t.databaseId.projectId)throw new B(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(L0(n))}function O0(t,e){return Qd(t.databaseId,e)}function AR(t){const e=V0(t);return e.length===4?de.emptyPath():L0(e)}function Th(t){return new de(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function L0(t){return oe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Rg(t,e,n){return{name:Eh(t,e),fields:n.value.mapValue.fields}}function kR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(oe(f===void 0||typeof f=="string"),$e.fromBase64String(f||"")):(oe(f===void 0||f instanceof Buffer||f instanceof Uint8Array),$e.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?O.UNKNOWN:P0(h.code);return new B(f,h.message||"")}(o);n=new N0(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=nc(t,r.document.name),s=Gt(r.document.updateTime),o=r.document.createTime?Gt(r.document.createTime):Q.min(),l=new ut({mapValue:{fields:r.document.fields}}),u=Ze.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Da(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=nc(t,r.document),s=r.readTime?Gt(r.readTime):Q.min(),o=Ze.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Da([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=nc(t,r.document),s=r.removedTargetIds||[];n=new Da([],s,i,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new mR(i,s),l=r.targetId;n=new x0(l,o)}}return n}function RR(t,e){let n;if(e instanceof To)n={update:Rg(t,e.key,e.value)};else if(e instanceof Wd)n={delete:Eh(t,e.key)};else if(e instanceof ur)n={update:Rg(t,e.key,e.data),updateMask:bR(e.fieldMask)};else{if(!(e instanceof dR))return K();n={verify:Eh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof pl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ao)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof lo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ml)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw K()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:SR(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K()}(t,e.precondition)),n}function CR(t,e){return t&&t.length>0?(oe(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Gt(i.updateTime):Gt(s);return o.isEqual(Q.min())&&(o=Gt(s)),new uR(o,i.transformResults||[])}(n,e))):[]}function PR(t,e){return{documents:[O0(t,e.path)]}}function xR(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=O0(t,i);const s=function(h){if(h.length!==0)return M0(Ut.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(y){return{field:Qr(y.field),direction:VR(y.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=vh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:i}}function NR(t){let e=AR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){oe(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(m){const y=b0(m);return y instanceof Ut&&d0(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(y=>function(x){return new oo(Yr(x.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(m){let y;return y=typeof m=="object"?m.value:m,Ul(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(m){const y=!!m.before,A=m.values||[];return new fl(A,y)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const y=!m.before,A=m.values||[];return new fl(A,y)}(n.endAt)),Yk(e,i,o,s,l,"F",u,h)}function DR(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function b0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Yr(n.unaryFilter.field);return Re.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Yr(n.unaryFilter.field);return Re.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Yr(n.unaryFilter.field);return Re.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Yr(n.unaryFilter.field);return Re.create(o,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(n){return Re.create(Yr(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Ut.create(n.compositeFilter.filters.map(r=>b0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K()}}(n.compositeFilter.op))}(t):K()}function VR(t){return wR[t]}function OR(t){return ER[t]}function LR(t){return TR[t]}function Qr(t){return{fieldPath:t.canonicalString()}}function Yr(t){return Fe.fromServerFormat(t.fieldPath)}function M0(t){return t instanceof Re?function(n){if(n.op==="=="){if(fg(n.value))return{unaryFilter:{field:Qr(n.field),op:"IS_NAN"}};if(dg(n.value))return{unaryFilter:{field:Qr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(fg(n.value))return{unaryFilter:{field:Qr(n.field),op:"IS_NOT_NAN"}};if(dg(n.value))return{unaryFilter:{field:Qr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qr(n.field),op:OR(n.op),value:n.value}}}(t):t instanceof Ut?function(n){const r=n.getFilters().map(i=>M0(i));return r.length===1?r[0]:{compositeFilter:{op:LR(n.op),filters:r}}}(t):K()}function bR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function F0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class zn{constructor(e,n,r,i,s=Q.min(),o=Q.min(),l=$e.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new zn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new zn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class MR{constructor(e){this.ct=e}}function FR(t){const e=NR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?_h(e,e.limit,"L"):e}/**
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
 */class UR{constructor(){this.un=new jR}addToCollectionParentIndex(e,n){return this.un.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(rr.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(rr.min())}updateCollectionGroup(e,n,r){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class jR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new je(de.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new je(de.comparator)).toArray()}}/**
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
 */class Vi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Vi(0)}static kn(){return new Vi(-1)}}/**
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
 */class zR{constructor(){this.changes=new $i(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ze.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?b.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class BR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class $R{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&bs(r.mutation,i,_t.empty(),xe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Z()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Z()){const i=Ir();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ws();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ir();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Z()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=En();const o=Ls(),l=function(){return Ls()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof ur)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),bs(f.mutation,h,f.mutation.getFieldMask(),xe.now())):o.set(h.key,_t.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var m;return l.set(h,new BR(f,(m=o.get(h))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Ls();let i=new ve((o,l)=>o-l),s=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||_t.empty();f=l.applyToLocalView(h,f),r.set(u,f);const m=(i.get(l.batchId)||Z()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,m=E0();f.forEach(y=>{if(!s.has(y)){const A=R0(n.get(y),r.get(y));A!==null&&m.set(y,A),s=s.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return b.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return H.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):g0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):b.resolve(Ir());let l=-1,u=s;return o.next(h=>b.forEach(h,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?b.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{u=u.insert(f,y)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,Z())).next(f=>({batchId:l,changes:w0(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let i=ws();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ws();return this.indexManager.getCollectionParents(e,s).next(l=>b.forEach(l,u=>{const h=function(m,y){return new Bi(y,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((m,y)=>{o=o.insert(m,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,Ze.newInvalidDocument(f)))});let l=ws();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&bs(f.mutation,h,_t.empty(),xe.now()),zl(n,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class qR{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return b.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Gt(i.createTime)}}(n)),b.resolve()}getNamedQuery(e,n){return b.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:FR(i.bundledQuery),readTime:Gt(i.readTime)}}(n)),b.resolve()}}/**
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
 */class HR{constructor(){this.overlays=new ve(H.comparator),this.Ir=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ir();return b.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),b.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),b.resolve()}getOverlaysForCollection(e,n,r){const i=Ir(),s=n.length+1,o=new H(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return b.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ve((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Ir(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Ir(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return b.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new pR(n,r));let s=this.Ir.get(n);s===void 0&&(s=Z(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class WR{constructor(){this.sessionToken=$e.EMPTY_BYTE_STRING}getSessionToken(e){return b.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,b.resolve()}}/**
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
 */class Yd{constructor(){this.Tr=new je(De.Er),this.dr=new je(De.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new De(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new De(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new H(new de([])),r=new De(n,e),i=new De(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new H(new de([])),r=new De(n,e),i=new De(n,e+1);let s=Z();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new De(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class De{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return H.comparator(e.key,n.key)||ie(e.wr,n.wr)}static Ar(e,n){return ie(e.wr,n.wr)||H.comparator(e.key,n.key)}}/**
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
 */class KR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new je(De.Er)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new fR(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new De(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return b.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new De(n,0),i=new De(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),b.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new je(ie);return n.forEach(i=>{const s=new De(i,0),o=new De(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),b.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const o=new De(new H(s),0);let l=new je(ie);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},o),b.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){oe(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return b.forEach(n.mutations,i=>{const s=new De(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new De(n,0),i=this.br.firstAfterOrEqual(r);return b.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class GR{constructor(e){this.Mr=e,this.docs=function(){return new ve(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return b.resolve(r?r.document.mutableCopy():Ze.newInvalidDocument(n))}getEntries(e,n){let r=En();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ze.newInvalidDocument(i))}),b.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=En();const o=n.path,l=new H(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Nk(xk(f),r)<=0||(i.has(f.key)||zl(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return b.resolve(s)}getAllFromCollectionGroup(e,n,r,i){K()}Or(e,n){return b.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new QR(this)}getSize(e){return b.resolve(this.size)}}class QR extends zR{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),b.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class YR{constructor(e){this.persistence=e,this.Nr=new $i(n=>Bd(n),$d),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Yd,this.targetCount=0,this.kr=Vi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),b.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Vi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.Kn(n),b.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),b.waitFor(s).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return b.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),b.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),b.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),b.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return b.resolve(r)}containsKey(e,n){return b.resolve(this.Br.containsKey(n))}}/**
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
 */class XR{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Fd(0),this.Kr=!1,this.Kr=!0,this.$r=new WR,this.referenceDelegate=e(this),this.Ur=new YR(this),this.indexManager=new UR,this.remoteDocumentCache=function(i){return new GR(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new MR(n),this.Gr=new qR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new HR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new KR(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new JR(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return b.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class JR extends Vk{constructor(e){super(),this.currentSequenceNumber=e}}class Xd{constructor(e){this.persistence=e,this.Jr=new Yd,this.Yr=null}static Zr(e){return new Xd(e)}get Xr(){if(this.Yr)return this.Yr;throw K()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),b.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),b.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Xr,r=>{const i=H.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,Q.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return b.or([()=>b.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class Jd{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=Z(),i=Z();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Jd(e,n.fromCache,r,i)}}/**
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
 */class ZR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class eC{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return i1()?8:Ok(tt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new ZR;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(fs()<=ee.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Gr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),b.resolve()):(fs()<=ee.DEBUG&&q("QueryEngine","Query:",Gr(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(fs()<=ee.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Gr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Kt(n))):b.resolve())}Yi(e,n){if(yg(n))return b.resolve(null);let r=Kt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=_h(n,null,"F"),r=Kt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Z(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,o,u.readTime)?this.Yi(e,_h(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,i){return yg(n)||i.isEqual(Q.min())?b.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?b.resolve(null):(fs()<=ee.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Gr(n)),this.rs(e,o,n,Pk(i,-1)).next(l=>l))})}ts(e,n){let r=new je(_0(e));return n.forEach((i,s)=>{zl(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return fs()<=ee.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Gr(n)),this.Ji.getDocumentsMatchingQuery(e,n,rr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class tC{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new ve(ie),this._s=new $i(s=>Bd(s),$d),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $R(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function nC(t,e,n,r){return new tC(t,e,n,r)}async function U0(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=Z();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function rC(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const m=h.batch,y=m.keys();let A=b.resolve();return y.forEach(x=>{A=A.next(()=>f.getEntry(u,x)).next(D=>{const L=h.docVersions.get(x);oe(L!==null),D.version.compareTo(L)<0&&(m.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),f.addEntry(D)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=Z();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function j0(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function iC(t,e){const n=Y(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,m)=>{const y=i.get(m);if(!y)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,m)));let A=y.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?A=A.withResumeToken($e.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),i=i.insert(m,A),function(D,L,E){return D.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(y,A,f)&&l.push(n.Ur.updateTargetData(s,A))});let u=En(),h=Z();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(sC(s,o,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(Q.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(m=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return b.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.os=i,s))}function sC(t,e,n){let r=Z(),i=Z();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=En();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Q.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):q("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function oC(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function aC(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,b.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new zn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Ih(t,e,n){const r=Y(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Eo(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Cg(t,e,n){const r=Y(t);let i=Q.min(),s=Z();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const m=Y(u),y=m._s.get(f);return y!==void 0?b.resolve(m.os.get(y)):m.Ur.getTargetData(h,f)}(r,o,Kt(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:Q.min(),n?s:Z())).next(l=>(lC(r,Jk(e),l),{documents:l,Ts:s})))}function lC(t,e,n){let r=t.us.get(e)||Q.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class Pg{constructor(){this.activeTargetIds=iR()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class uC{constructor(){this.so=new Pg,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Pg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class cC{_o(e){}shutdown(){}}/**
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
 */class xg{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let da=null;function rc(){return da===null?da=function(){return 268435456+Math.round(2147483648*Math.random())}():da++,"0x"+da.toString(16)}/**
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
 */const hC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class dC{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Ye="WebChannelConnection";class fC extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=rc(),u=this.xo(n,r.toUriEncodedString());q("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,o),this.No(n,u,h,i).then(f=>(q("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Pi("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+zi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=hC[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=rc();return new Promise((o,l)=>{const u=new e0;u.setWithCredentials(!0),u.listenOnce(t0.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Pa.NO_ERROR:const f=u.getResponseJson();q(Ye,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case Pa.TIMEOUT:q(Ye,`RPC '${e}' ${s} timed out`),l(new B(O.DEADLINE_EXCEEDED,"Request time out"));break;case Pa.HTTP_ERROR:const m=u.getStatus();if(q(Ye,`RPC '${e}' ${s} failed with status:`,m,"response text:",u.getResponseText()),m>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const A=y==null?void 0:y.error;if(A&&A.status&&A.message){const x=function(L){const E=L.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(E)>=0?E:O.UNKNOWN}(A.status);l(new B(x,A.message))}else l(new B(O.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new B(O.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{q(Ye,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);q(Ye,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const i=rc(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=i0(),l=r0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");q(Ye,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=o.createWebChannel(f,u);let y=!1,A=!1;const x=new dC({Io:L=>{A?q(Ye,`Not sending because RPC '${e}' stream ${i} is closed:`,L):(y||(q(Ye,`Opening RPC '${e}' stream ${i} transport.`),m.open(),y=!0),q(Ye,`RPC '${e}' stream ${i} sending:`,L),m.send(L))},To:()=>m.close()}),D=(L,E,_)=>{L.listen(E,S=>{try{_(S)}catch(V){setTimeout(()=>{throw V},0)}})};return D(m,vs.EventType.OPEN,()=>{A||(q(Ye,`RPC '${e}' stream ${i} transport opened.`),x.yo())}),D(m,vs.EventType.CLOSE,()=>{A||(A=!0,q(Ye,`RPC '${e}' stream ${i} transport closed`),x.So())}),D(m,vs.EventType.ERROR,L=>{A||(A=!0,Pi(Ye,`RPC '${e}' stream ${i} transport errored:`,L),x.So(new B(O.UNAVAILABLE,"The operation could not be completed")))}),D(m,vs.EventType.MESSAGE,L=>{var E;if(!A){const _=L.data[0];oe(!!_);const S=_,V=S.error||((E=S[0])===null||E===void 0?void 0:E.error);if(V){q(Ye,`RPC '${e}' stream ${i} received error:`,V);const F=V.status;let j=function(v){const T=Ae[v];if(T!==void 0)return P0(T)}(F),w=V.message;j===void 0&&(j=O.INTERNAL,w="Unknown error status: "+F+" with message "+V.message),A=!0,x.So(new B(j,w)),m.close()}else q(Ye,`RPC '${e}' stream ${i} received:`,_),x.bo(_)}}),D(l,n0.STAT_EVENT,L=>{L.stat===dh.PROXY?q(Ye,`RPC '${e}' stream ${i} detected buffering proxy`):L.stat===dh.NOPROXY&&q(Ye,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{x.wo()},0),x}}function ic(){return typeof document<"u"?document:null}/**
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
 */function Hl(t){return new IR(t,!0)}/**
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
 */class z0{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class B0{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new z0(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(wn(n.toString()),wn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new B(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class pC extends B0{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=kR(this.serializer,e),r=function(s){if(!("targetChange"in s))return Q.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Q.min():o.readTime?Gt(o.readTime):Q.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Th(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=gh(u)?{documents:PR(s,u)}:{query:xR(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=D0(s,o.resumeToken);const h=vh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(Q.min())>0){l.readTime=gl(s,o.snapshotVersion.toTimestamp());const h=vh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=DR(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Th(this.serializer),n.removeTarget=e,this.a_(n)}}class mC extends B0{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return oe(!!e.streamToken),this.lastStreamToken=e.streamToken,oe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){oe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=CR(e.writeResults,e.commitTime),r=Gt(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Th(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>RR(this.serializer,r))};this.a_(n)}}/**
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
 */class gC extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new B(O.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,wh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(O.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,wh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(O.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class yC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(wn(n),this.D_=!1):q("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class _C{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Br(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=Y(u);h.L_.add(4),await So(h),h.q_.set("Unknown"),h.L_.delete(4),await Wl(h)}(this))})}),this.q_=new yC(r,i)}}async function Wl(t){if(Br(t))for(const e of t.B_)await e(!0)}async function So(t){for(const e of t.B_)await e(!1)}function $0(t,e){const n=Y(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),nf(n)?tf(n):qi(n).r_()&&ef(n,e))}function Zd(t,e){const n=Y(t),r=qi(n);n.N_.delete(e),r.r_()&&q0(n,e),n.N_.size===0&&(r.r_()?r.o_():Br(n)&&n.q_.set("Unknown"))}function ef(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}qi(t).A_(e)}function q0(t,e){t.Q_.xe(e),qi(t).R_(e)}function tf(t){t.Q_=new vR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),qi(t).start(),t.q_.v_()}function nf(t){return Br(t)&&!qi(t).n_()&&t.N_.size>0}function Br(t){return Y(t).L_.size===0}function H0(t){t.Q_=void 0}async function vC(t){t.q_.set("Online")}async function wC(t){t.N_.forEach((e,n)=>{ef(t,e)})}async function EC(t,e){H0(t),nf(t)?(t.q_.M_(e),tf(t)):t.q_.set("Unknown")}async function TC(t,e,n){if(t.q_.set("Online"),e instanceof N0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await yl(t,r)}else if(e instanceof Da?t.Q_.Ke(e):e instanceof x0?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Q.min()))try{const r=await j0(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken($e.EMPTY_BYTE_STRING,f.snapshotVersion)),q0(s,u);const m=new zn(f.target,u,h,f.sequenceNumber);ef(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await yl(t,r)}}async function yl(t,e,n){if(!Eo(e))throw e;t.L_.add(1),await So(t),t.q_.set("Offline"),n||(n=()=>j0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Wl(t)})}function W0(t,e){return e().catch(n=>yl(t,n,e))}async function Kl(t){const e=Y(t),n=sr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;IC(e);)try{const i=await oC(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,SC(e,i)}catch(i){await yl(e,i)}K0(e)&&G0(e)}function IC(t){return Br(t)&&t.O_.length<10}function SC(t,e){t.O_.push(e);const n=sr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function K0(t){return Br(t)&&!sr(t).n_()&&t.O_.length>0}function G0(t){sr(t).start()}async function AC(t){sr(t).p_()}async function kC(t){const e=sr(t);for(const n of t.O_)e.m_(n.mutations)}async function RC(t,e,n){const r=t.O_.shift(),i=Kd.from(r,e,n);await W0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Kl(t)}async function CC(t,e){e&&sr(t).V_&&await async function(r,i){if(function(o){return gR(o)&&o!==O.ABORTED}(i.code)){const s=r.O_.shift();sr(r).s_(),await W0(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Kl(r)}}(t,e),K0(t)&&G0(t)}async function Ng(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=Br(n);n.L_.add(3),await So(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Wl(n)}async function PC(t,e){const n=Y(t);e?(n.L_.delete(2),await Wl(n)):e||(n.L_.add(2),await So(n),n.q_.set("Unknown"))}function qi(t){return t.K_||(t.K_=function(n,r,i){const s=Y(n);return s.w_(),new pC(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:vC.bind(null,t),Ro:wC.bind(null,t),mo:EC.bind(null,t),d_:TC.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),nf(t)?tf(t):t.q_.set("Unknown")):(await t.K_.stop(),H0(t))})),t.K_}function sr(t){return t.U_||(t.U_=function(n,r,i){const s=Y(n);return s.w_(),new mC(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:AC.bind(null,t),mo:CC.bind(null,t),f_:kC.bind(null,t),g_:RC.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Kl(t)):(await t.U_.stop(),t.O_.length>0&&(q("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class rf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Zn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new rf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sf(t,e){if(wn("AsyncQueue",`${e}: ${t}`),Eo(t))return new B(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class vi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=ws(),this.sortedSet=new ve(this.comparator)}static emptySet(e){return new vi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof vi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new vi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Dg{constructor(){this.W_=new ve(H.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):K():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Oi{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Oi(e,n,vi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&jl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class xC{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class NC{constructor(){this.queries=Vg(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=Y(n),s=i.queries;i.queries=Vg(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new B(O.ABORTED,"Firestore shutting down"))}}function Vg(){return new $i(t=>y0(t),jl)}async function Q0(t,e){const n=Y(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new xC,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=sf(o,`Initialization of query '${Gr(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&of(n)}async function Y0(t,e){const n=Y(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function DC(t,e){const n=Y(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&of(n)}function VC(t,e,n){const r=Y(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function of(t){t.Y_.forEach(e=>{e.next()})}var Sh,Og;(Og=Sh||(Sh={})).ea="default",Og.Cache="cache";class X0{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Oi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Oi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Sh.Cache}}/**
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
 */class J0{constructor(e){this.key=e}}class Z0{constructor(e){this.key=e}}class OC{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Z(),this.mutatedKeys=Z(),this.Aa=_0(e),this.Ra=new vi(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Dg,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const y=i.get(f),A=zl(this.query,m)?m:null,x=!!y&&this.mutatedKeys.has(y.key),D=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let L=!1;y&&A?y.data.isEqual(A.data)?x!==D&&(r.track({type:3,doc:A}),L=!0):this.ga(y,A)||(r.track({type:2,doc:A}),L=!0,(u&&this.Aa(A,u)>0||h&&this.Aa(A,h)<0)&&(l=!0)):!y&&A?(r.track({type:0,doc:A}),L=!0):y&&!A&&(r.track({type:1,doc:y}),L=!0,(u||h)&&(l=!0)),L&&(A?(o=o.add(A),s=D?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,m)=>function(A,x){const D=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return D(A)-D(x)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new Oi(this.query,e.Ra,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Dg,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Z(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new Z0(r))}),this.da.forEach(r=>{e.has(r)||n.push(new J0(r))}),n}ba(e){this.Ta=e.Ts,this.da=Z();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Oi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class LC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class bC{constructor(e){this.key=e,this.va=!1}}class MC{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new $i(l=>y0(l),jl),this.Ma=new Map,this.xa=new Set,this.Oa=new ve(H.comparator),this.Na=new Map,this.La=new Yd,this.Ba={},this.ka=new Map,this.qa=Vi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function FC(t,e,n=!0){const r=sw(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await ew(r,e,n,!0),i}async function UC(t,e){const n=sw(t);await ew(n,e,!0,!1)}async function ew(t,e,n,r){const i=await aC(t.localStore,Kt(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await jC(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&$0(t.remoteStore,i),l}async function jC(t,e,n,r,i){t.Ka=(m,y,A)=>async function(D,L,E,_){let S=L.view.ma(E);S.ns&&(S=await Cg(D.localStore,L.query,!1).then(({documents:w})=>L.view.ma(w,S)));const V=_&&_.targetChanges.get(L.targetId),F=_&&_.targetMismatches.get(L.targetId)!=null,j=L.view.applyChanges(S,D.isPrimaryClient,V,F);return bg(D,L.targetId,j.wa),j.snapshot}(t,m,y,A);const s=await Cg(t.localStore,e,!0),o=new OC(e,s.Ts),l=o.ma(s.documents),u=Io.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);bg(t,n,h.wa);const f=new LC(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function zC(t,e,n){const r=Y(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!jl(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Ih(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Zd(r.remoteStore,i.targetId),Ah(r,i.targetId)}).catch(wo)):(Ah(r,i.targetId),await Ih(r.localStore,i.targetId,!0))}async function BC(t,e){const n=Y(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Zd(n.remoteStore,r.targetId))}async function $C(t,e,n){const r=YC(t);try{const i=await function(o,l){const u=Y(o),h=xe.now(),f=l.reduce((A,x)=>A.add(x.key),Z());let m,y;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let x=En(),D=Z();return u.cs.getEntries(A,f).next(L=>{x=L,x.forEach((E,_)=>{_.isValidDocument()||(D=D.add(E))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,x)).next(L=>{m=L;const E=[];for(const _ of l){const S=hR(_,m.get(_.key).overlayedDocument);S!=null&&E.push(new ur(_.key,S,u0(S.value.mapValue),wt.exists(!0)))}return u.mutationQueue.addMutationBatch(A,h,E,l)}).next(L=>{y=L;const E=L.applyToLocalDocumentSet(m,D);return u.documentOverlayCache.saveOverlays(A,L.batchId,E)})}).then(()=>({batchId:y.batchId,changes:w0(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new ve(ie)),h=h.insert(l,u),o.Ba[o.currentUser.toKey()]=h}(r,i.batchId,n),await Ao(r,i.changes),await Kl(r.remoteStore)}catch(i){const s=sf(i,"Failed to persist write");n.reject(s)}}async function tw(t,e){const n=Y(t);try{const r=await iC(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(oe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?oe(o.va):i.removedDocuments.size>0&&(oe(o.va),o.va=!1))}),await Ao(n,r,e)}catch(r){await wo(r)}}function Lg(t,e,n){const r=Y(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Y(o);u.onlineState=l;let h=!1;u.queries.forEach((f,m)=>{for(const y of m.j_)y.Z_(l)&&(h=!0)}),h&&of(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function qC(t,e,n){const r=Y(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new ve(H.comparator);o=o.insert(s,Ze.newNoDocument(s,Q.min()));const l=Z().add(s),u=new ql(Q.min(),new Map,new ve(ie),o,l);await tw(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),af(r)}else await Ih(r.localStore,e,!1).then(()=>Ah(r,e,n)).catch(wo)}async function HC(t,e){const n=Y(t),r=e.batch.batchId;try{const i=await rC(n.localStore,e);rw(n,r,null),nw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ao(n,i)}catch(i){await wo(i)}}async function WC(t,e,n){const r=Y(t);try{const i=await function(o,l){const u=Y(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(oe(m!==null),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);rw(r,e,n),nw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ao(r,i)}catch(i){await wo(i)}}function nw(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function rw(t,e,n){const r=Y(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Ah(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||iw(t,r)})}function iw(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Zd(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),af(t))}function bg(t,e,n){for(const r of n)r instanceof J0?(t.La.addReference(r.key,e),KC(t,r)):r instanceof Z0?(q("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||iw(t,r.key)):K()}function KC(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(q("SyncEngine","New document in limbo: "+n),t.xa.add(r),af(t))}function af(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new H(de.fromString(e)),r=t.qa.next();t.Na.set(r,new bC(n)),t.Oa=t.Oa.insert(n,r),$0(t.remoteStore,new zn(Kt(qd(n.path)),r,"TargetPurposeLimboResolution",Fd.oe))}}async function Ao(t,e,n){const r=Y(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){i.push(h);const m=Jd.Wi(u.targetId,h);s.push(m)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,h){const f=Y(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>b.forEach(h,y=>b.forEach(y.$i,A=>f.persistence.referenceDelegate.addReference(m,y.targetId,A)).next(()=>b.forEach(y.Ui,A=>f.persistence.referenceDelegate.removeReference(m,y.targetId,A)))))}catch(m){if(!Eo(m))throw m;q("LocalStore","Failed to update sequence numbers: "+m)}for(const m of h){const y=m.targetId;if(!m.fromCache){const A=f.os.get(y),x=A.snapshotVersion,D=A.withLastLimboFreeSnapshotVersion(x);f.os=f.os.insert(y,D)}}}(r.localStore,s))}async function GC(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await U0(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new B(O.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ao(n,r.hs)}}function QC(t,e){const n=Y(t),r=n.Na.get(e);if(r&&r.va)return Z().add(r.key);{let i=Z();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function sw(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=tw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=QC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=qC.bind(null,e),e.Ca.d_=DC.bind(null,e.eventManager),e.Ca.$a=VC.bind(null,e.eventManager),e}function YC(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=HC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=WC.bind(null,e),e}class _l{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Hl(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return nC(this.persistence,new eC,e.initialUser,this.serializer)}Ga(e){return new XR(Xd.Zr,this.serializer)}Wa(e){return new uC}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}_l.provider={build:()=>new _l};class kh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Lg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=GC.bind(null,this.syncEngine),await PC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new NC}()}createDatastore(e){const n=Hl(e.databaseInfo.databaseId),r=function(s){return new fC(s)}(e.databaseInfo);return function(s,o,l,u){return new gC(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new _C(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Lg(this.syncEngine,n,0),function(){return xg.D()?new xg:new cC}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const m=new MC(i,s,o,l,u,h);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Y(i);q("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await So(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}kh.provider={build:()=>new kh};/**
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
 */class ow{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):wn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class XC{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Xe.UNAUTHENTICATED,this.clientId=o0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{q("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Zn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=sf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function sc(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await U0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Mg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await JC(t);q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Ng(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Ng(e.remoteStore,i)),t._onlineComponents=e}async function JC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await sc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===O.FAILED_PRECONDITION||i.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Pi("Error using user provided cache. Falling back to memory cache: "+n),await sc(t,new _l)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await sc(t,new _l);return t._offlineComponents}async function aw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await Mg(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await Mg(t,new kh))),t._onlineComponents}function ZC(t){return aw(t).then(e=>e.syncEngine)}async function Rh(t){const e=await aw(t),n=e.eventManager;return n.onListen=FC.bind(null,e.syncEngine),n.onUnlisten=zC.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=UC.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=BC.bind(null,e.syncEngine),n}function eP(t,e,n={}){const r=new Zn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new ow({next:y=>{f.Za(),o.enqueueAndForget(()=>Y0(s,m)),y.fromCache&&u.source==="server"?h.reject(new B(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(y)},error:y=>h.reject(y)}),m=new X0(l,f,{includeMetadataChanges:!0,_a:!0});return Q0(s,m)}(await Rh(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function lw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Fg=new Map;/**
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
 */function uw(t,e,n){if(!n)throw new B(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function tP(t,e,n,r){if(e===!0&&r===!0)throw new B(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ug(t){if(!H.isDocumentKey(t))throw new B(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function jg(t){if(H.isDocumentKey(t))throw new B(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Gl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function Qt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Gl(t);throw new B(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class zg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new B(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}tP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=lw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new B(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new B(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new B(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ql{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zg(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new wk;switch(r.type){case"firstParty":return new Sk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Fg.get(n);r&&(q("ComponentProvider","Removing Datastore"),Fg.delete(n),r.terminate())}(this),Promise.resolve()}}function nP(t,e,n,r={}){var i;const s=(t=Qt(t,Ql))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Pi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Xe.MOCK_USER;else{l=XI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new B(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Xe(h)}t._authCredentials=new Ek(new s0(l,u))}}/**
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
 */class cr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new cr(this.firestore,e,this._query)}}class pt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new er(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new pt(this.firestore,e,this._key)}}class er extends cr{constructor(e,n,r){super(e,n,qd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pt(this.firestore,null,new H(e))}withConverter(e){return new er(this.firestore,e,this._path)}}function ps(t,e,...n){if(t=Be(t),uw("collection","path",e),t instanceof Ql){const r=de.fromString(e,...n);return jg(r),new er(t,null,r)}{if(!(t instanceof pt||t instanceof er))throw new B(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(de.fromString(e,...n));return jg(r),new er(t.firestore,null,r)}}function Ch(t,e,...n){if(t=Be(t),arguments.length===1&&(e=o0.newId()),uw("doc","path",e),t instanceof Ql){const r=de.fromString(e,...n);return Ug(r),new pt(t,null,new H(r))}{if(!(t instanceof pt||t instanceof er))throw new B(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(de.fromString(e,...n));return Ug(r),new pt(t.firestore,t instanceof er?t.converter:null,new H(r))}}/**
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
 */class Bg{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new z0(this,"async_queue_retry"),this.Vu=()=>{const r=ic();r&&q("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=ic();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=ic();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Zn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Eo(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw wn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=rf.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&K()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function $g(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Fr extends Ql{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Bg,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Bg(e),this._firestoreClient=void 0,await e}}}function rP(t,e){const n=typeof t=="object"?t:_v(),r=typeof t=="string"?t:"(default)",i=kd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=QI("firestore");s&&nP(i,...s)}return i}function Yl(t){if(t._terminated)throw new B(O.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||iP(t),t._firestoreClient}function iP(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new Mk(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,lw(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new XC(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class Li{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Li($e.fromBase64String(e))}catch(n){throw new B(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Li($e.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Xl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class lf{constructor(e){this._methodName=e}}/**
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
 */class uf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class cf{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const sP=/^__.*__$/;class oP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ur(e,this.data,this.fieldMask,n,this.fieldTransforms):new To(e,this.data,n,this.fieldTransforms)}}class cw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ur(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function hw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class hf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new hf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return vl(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(hw(this.Cu)&&sP.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class aP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Hl(e)}Qu(e,n,r,i=!1){return new hf({Cu:e,methodName:n,qu:r,path:Fe.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Jl(t){const e=t._freezeSettings(),n=Hl(t._databaseId);return new aP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function df(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);ff("Data must be an object, but it was:",o,r);const l=dw(r,o);let u,h;if(s.merge)u=new _t(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const y=Ph(e,m,n);if(!o.contains(y))throw new B(O.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);pw(f,y)||f.push(y)}u=new _t(f),h=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=o.fieldTransforms;return new oP(new ut(l),u,h)}class Zl extends lf{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Zl}}function lP(t,e,n,r){const i=t.Qu(1,e,n);ff("Data must be an object, but it was:",i,r);const s=[],o=ut.empty();zr(r,(u,h)=>{const f=pf(e,u,n);h=Be(h);const m=i.Nu(f);if(h instanceof Zl)s.push(f);else{const y=ko(h,m);y!=null&&(s.push(f),o.set(f,y))}});const l=new _t(s);return new cw(o,l,i.fieldTransforms)}function uP(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[Ph(e,r,n)],u=[i];if(s.length%2!=0)throw new B(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<s.length;y+=2)l.push(Ph(e,s[y])),u.push(s[y+1]);const h=[],f=ut.empty();for(let y=l.length-1;y>=0;--y)if(!pw(h,l[y])){const A=l[y];let x=u[y];x=Be(x);const D=o.Nu(A);if(x instanceof Zl)h.push(A);else{const L=ko(x,D);L!=null&&(h.push(A),f.set(A,L))}}const m=new _t(h);return new cw(f,m,o.fieldTransforms)}function cP(t,e,n,r=!1){return ko(n,t.Qu(r?4:3,e))}function ko(t,e){if(fw(t=Be(t)))return ff("Unsupported field value:",e,t),dw(t,e);if(t instanceof lf)return function(r,i){if(!hw(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=ko(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Be(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return sR(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=xe.fromDate(r);return{timestampValue:gl(i.serializer,s)}}if(r instanceof xe){const s=new xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:gl(i.serializer,s)}}if(r instanceof uf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Li)return{bytesValue:D0(i.serializer,r._byteString)};if(r instanceof pt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Qd(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof cf)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Hd(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Gl(r)}`)}(t,e)}function dw(t,e){const n={};return a0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):zr(t,(r,i)=>{const s=ko(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function fw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof xe||t instanceof uf||t instanceof Li||t instanceof pt||t instanceof lf||t instanceof cf)}function ff(t,e,n){if(!fw(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Gl(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Ph(t,e,n){if((e=Be(e))instanceof Xl)return e._internalPath;if(typeof e=="string")return pf(t,e);throw vl("Field path arguments must be of type string or ",t,!1,void 0,n)}const hP=new RegExp("[~\\*/\\[\\]]");function pf(t,e,n){if(e.search(hP)>=0)throw vl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Xl(...e.split("."))._internalPath}catch{throw vl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function vl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new B(O.INVALID_ARGUMENT,l+t+u)}function pw(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class mw{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new dP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(mf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class dP extends mw{data(){return super.data()}}function mf(t,e){return typeof e=="string"?pf(t,e):e instanceof Xl?e._internalPath:e._delegate._internalPath}/**
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
 */function gw(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gf{}class yw extends gf{}function qg(t,e,...n){let r=[];e instanceof gf&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof _f).length,l=s.filter(u=>u instanceof yf).length;if(o>1||o>0&&l>0)throw new B(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class yf extends yw{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new yf(e,n,r)}_apply(e){const n=this._parse(e);return _w(e._query,n),new cr(e.firestore,e.converter,yh(e._query,n))}_parse(e){const n=Jl(e.firestore);return function(s,o,l,u,h,f,m){let y;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new B(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Kg(m,f);const A=[];for(const x of m)A.push(Wg(u,s,x));y={arrayValue:{values:A}}}else y=Wg(u,s,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Kg(m,f),y=cP(l,o,m,f==="in"||f==="not-in");return Re.create(h,f,y)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class _f extends gf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new _f(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Ut.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)_w(o,u),o=yh(o,u)}(e._query,n),new cr(e.firestore,e.converter,yh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class vf extends yw{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new vf(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new B(O.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new B(O.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new oo(s,o)}(e._query,this._field,this._direction);return new cr(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Bi(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function Hg(t,e="asc"){const n=e,r=mf("orderBy",t);return vf._create(r,n)}function Wg(t,e,n){if(typeof(n=Be(n))=="string"){if(n==="")throw new B(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!g0(e)&&n.indexOf("/")!==-1)throw new B(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(de.fromString(n));if(!H.isDocumentKey(r))throw new B(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return hg(t,new H(r))}if(n instanceof pt)return hg(t,n._key);throw new B(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Gl(n)}.`)}function Kg(t,e){if(!Array.isArray(t)||t.length===0)throw new B(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function _w(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new B(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class fP{convertValue(e,n="none"){switch(Mr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ie(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(br(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw K()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return zr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ie(o.doubleValue));return new cf(s)}convertGeoPoint(e){return new uf(Ie(e.latitude),Ie(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=jd(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ro(e));default:return null}}convertTimestamp(e){const n=ir(e);return new xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=de.fromString(e);oe(F0(r));const i=new io(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(n)||wn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function wf(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Ts{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vw extends mw{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Va(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(mf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Va extends vw{data(e={}){return super.data(e)}}class ww{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ts(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Va(this._firestore,this._userDataWriter,r.key,r,new Ts(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Va(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ts(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Va(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ts(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:pP(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function pP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}class Ef extends fP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Li(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new pt(this.firestore,null,n)}}function mP(t){t=Qt(t,cr);const e=Qt(t.firestore,Fr),n=Yl(e),r=new Ef(e);return gw(t._query),eP(n,t._query).then(i=>new ww(e,r,t,i))}function gP(t,e,n){t=Qt(t,pt);const r=Qt(t.firestore,Fr),i=wf(t.converter,e,n);return Tf(r,[df(Jl(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,wt.none())])}function Gg(t,e){const n=Qt(t.firestore,Fr),r=Ch(t),i=wf(t.converter,e);return Tf(n,[df(Jl(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,wt.exists(!1))]).then(()=>r)}function oc(t,...e){var n,r,i;t=Be(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||$g(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if($g(e[o])){const m=e[o];e[o]=(n=m.next)===null||n===void 0?void 0:n.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(i=m.complete)===null||i===void 0?void 0:i.bind(m)}let u,h,f;if(t instanceof pt)h=Qt(t.firestore,Fr),f=qd(t._key.path),u={next:m=>{e[o]&&e[o](yP(h,t,m))},error:e[o+1],complete:e[o+2]};else{const m=Qt(t,cr);h=Qt(m.firestore,Fr),f=m._query;const y=new Ef(h);u={next:A=>{e[o]&&e[o](new ww(h,y,m,A))},error:e[o+1],complete:e[o+2]},gw(t._query)}return function(y,A,x,D){const L=new ow(D),E=new X0(A,L,x);return y.asyncQueue.enqueueAndForget(async()=>Q0(await Rh(y),E)),()=>{L.Za(),y.asyncQueue.enqueueAndForget(async()=>Y0(await Rh(y),E))}}(Yl(h),f,l,u)}function Tf(t,e){return function(r,i){const s=new Zn;return r.asyncQueue.enqueueAndForget(async()=>$C(await ZC(r),i,s)),s.promise}(Yl(t),e)}function yP(t,e,n){const r=n.docs.get(e._key),i=new Ef(t);return new vw(t,i,e._key,r,new Ts(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */class _P{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Jl(e)}set(e,n,r){this._verifyNotCommitted();const i=ac(e,this._firestore),s=wf(i.converter,n,r),o=df(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,wt.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=ac(e,this._firestore);let o;return o=typeof(n=Be(n))=="string"||n instanceof Xl?uP(this._dataReader,"WriteBatch.update",s._key,n,r,i):lP(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,wt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=ac(e,this._firestore);return this._mutations=this._mutations.concat(new Wd(n._key,wt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new B(O.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ac(t,e){if((t=Be(t)).firestore!==e)throw new B(O.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */function vP(t){return Yl(t=Qt(t,Fr)),new _P(t,e=>Tf(t,e))}(function(e,n=!0){(function(i){zi=i})(Ui),Ri(new Vr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Fr(new Tk(r.getProvider("auth-internal")),new kk(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new B(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new io(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Jn(og,"4.7.3",e),Jn(og,"4.7.3","esm2017")})();const wP={apiKey:"AIzaSyCy_gaaxo0Vd-0llMEi1h3BD5t_zfiVYyI",authDomain:"i-love-bharat.firebaseapp.com",projectId:"i-love-bharat",storageBucket:"i-love-bharat.firebasestorage.app",messagingSenderId:"960030069619",appId:"1:960030069619:web:037404bcf35a848f302b06",measurementId:"G-1Z5HK31G0N"},Ew=yv(wP);_k(Ew);const Pn=rP(Ew),gr="mega-youth-fest-2026-v1",EP=()=>R.jsx("style",{children:`
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700;900&family=Outfit:wght@300;400;600;800&display=swap');
    
    :root {
      --primary: #ea580c;
      --secondary: #138808;
      --accent: #FF9933;
    }

    .font-cinzel { font-family: 'Cinzel', serif; }
    .font-outfit { font-family: 'Outfit', sans-serif; }

    .tricolor-bg {
      background: linear-gradient(180deg, #FF9933 0%, #FF9933 33.33%, #FFFFFF 33.33%, #FFFFFF 66.66%, #138808 66.66%, #138808 100%);
    }

    @keyframes pulse-heart {
      0% { transform: scale(1); filter: drop-shadow(0 0 0px rgba(234, 88, 12, 0)); }
      50% { transform: scale(1.1); filter: drop-shadow(0 0 20px rgba(234, 88, 12, 0.4)); }
      100% { transform: scale(1); filter: drop-shadow(0 0 0px rgba(234, 88, 12, 0)); }
    }

    .animate-heart { animation: pulse-heart 2s infinite ease-in-out; }

    .glass {
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.3);
    }

    .hide-scrollbar::-webkit-scrollbar { display: none; }
    
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      display: flex;
      width: 200%;
      animation: marquee 30s linear infinite;
    }

    .perspective-1000 { perspective: 1000px; }
    .rotate-y-12 { transform: rotateY(12deg); }
  `}),Qg={drawPledge:t=>{const e=document.createElement("canvas"),n=e.getContext("2d");e.width=1200,e.height=900,n.fillStyle="#ffffff",n.fillRect(0,0,1200,900),n.strokeStyle="#ea580c",n.lineWidth=40,n.strokeRect(0,0,1200,900),n.strokeStyle="#FF9933",n.lineWidth=5,n.strokeRect(50,50,1100,800),n.fillStyle="#9a3412",n.font="bold 40px serif",n.textAlign="center",n.fillText("ISKCON UJJAIN",600,150),n.fillStyle="#000000",n.font="bold 70px serif",n.fillText("CERTIFICATE OF COMMITMENT",600,250),n.fillStyle="#6b7280",n.font="30px sans-serif",n.fillText("NASHA MUKT BHARAT ABHIYAN",600,310),n.fillStyle="#ea580c",n.font="bold 90px serif",n.fillText(t.toUpperCase(),600,500),n.fillStyle="#374151",n.font="italic 35px serif",n.fillText("This is to certify that you have solemnly pledged",600,580),n.fillText("to live a life free from intoxicants and drugs.",600,640);const r=new Date().toLocaleDateString();return n.fillStyle="#000000",n.font="bold 25px sans-serif",n.textAlign="left",n.fillText(`Date: ${r}`,100,800),n.textAlign="right",n.fillText("Authorized ISKCON Signatory",1100,800),e.toDataURL("image/png",1)},drawPass:(t,e,n,r)=>{const i=document.createElement("canvas"),s=i.getContext("2d");return i.width=600,i.height=900,s.fillStyle="#ffffff",s.fillRect(0,0,600,900),s.fillStyle="#ea580c",s.fillRect(0,0,600,250),s.fillStyle="#ffffff",s.textAlign="center",s.font="bold 30px sans-serif",s.fillText("ISKCON UJJAIN",300,80),s.font="bold 60px sans-serif",s.fillText("ENTRY PASS",300,160),s.fillStyle="#1f2937",s.font="bold 50px sans-serif",s.fillText(t,300,400),s.fillStyle="#fef3c7",s.fillRect(150,450,300,70),s.fillStyle="#92400e",s.font="bold 30px sans-serif",s.fillText(`${n} • ${e} Yrs`,300,495),s.fillStyle="#f0fdf4",s.fillRect(50,580,500,120),s.strokeStyle="#16a34a",s.lineWidth=5,s.strokeRect(50,580,500,120),s.fillStyle="#16a34a",s.font="bold 40px sans-serif",s.fillText("AUTHORIZED",300,655),s.fillStyle="#111827",s.fillRect(0,800,600,100),s.fillStyle="#ffffff",s.font="bold 25px sans-serif",s.fillText(`Valid on: ${r}`,300,860),i.toDataURL("image/png",1)}},TP=t=>t!=null&&t.seconds?new Date(t.seconds*1e3).toLocaleString():new Date(t).toLocaleString(),Yg=(t,e)=>{const n=`Name,Contact/Mobile,Age,Gender,Time
`,r=t.map(l=>`"${l.name}","${l.contact||l.mobile}","${l.age||"-"}","${l.gender||"-"}","${TP(l.createdAt)}"`).join(`
`),i=new Blob([n+r],{type:"text/csv"}),s=URL.createObjectURL(i),o=document.createElement("a");o.href=s,o.download=`${e}.csv`,o.click()},IP=({type:t,name:e,extraData:n,eventDate:r,onClose:i})=>{const[s,o]=Ne.useState(""),[l,u]=Ne.useState(!1);Ne.useEffect(()=>((async()=>{const m=t==="pledge"?Qg.drawPledge(e):Qg.drawPass(e,n.age,n.gender,r),A=await(await fetch(m)).blob(),x=URL.createObjectURL(A);o(x),u(!0)})(),()=>s&&URL.revokeObjectURL(s)),[e]);const h=()=>{const f=`🇮🇳 I just joined the I Love Bharat Mega Youth Fest 2026! Join me here: ${window.location.origin}`;window.open(`https://wa.me/?text=${encodeURIComponent(f)}`,"_blank")};return R.jsx("div",{className:"fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex items-center justify-center p-4",children:R.jsxs("div",{className:"bg-white rounded-[3rem] w-full max-w-lg overflow-hidden shadow-2xl animate-in zoom-in duration-500 relative",children:[R.jsx("button",{onClick:i,className:"absolute top-6 right-6 z-10 bg-black/10 p-2 rounded-full hover:bg-black/20",children:R.jsx(rh,{size:24})}),R.jsxs("div",{className:"p-10 text-center space-y-6",children:[R.jsxs("div",{className:"space-y-2",children:[R.jsx("h2",{className:"text-4xl font-black text-orange-600 font-cinzel tracking-tighter",children:"SUCCESS!"}),R.jsx("p",{className:"text-gray-500 font-bold uppercase tracking-widest text-xs",children:"Your Document is ready"})]}),l?R.jsx("img",{src:s,className:"w-full rounded-3xl border-8 border-orange-50 shadow-2xl transform hover:scale-[1.02] transition duration-500",alt:"Result"}):R.jsxs("div",{className:"h-64 flex flex-col items-center justify-center gap-4 bg-gray-50 rounded-3xl border-2 border-dashed",children:[R.jsx(nh,{className:"animate-spin text-orange-500",size:48}),R.jsx("p",{className:"font-bold text-gray-400",children:"Forging your document..."})]}),R.jsxs("div",{className:"grid gap-3 pt-4",children:[R.jsxs("a",{href:s,download:`${t==="pledge"?"Certificate":"Pass"}_${e}.png`,className:"w-full py-5 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl font-black text-xl shadow-xl flex items-center justify-center gap-3 hover:scale-[1.02] transition active:scale-95",children:[R.jsx(th,{size:24})," DOWNLOAD NOW"]}),R.jsxs("button",{onClick:h,className:"w-full py-4 border-2 border-green-600 text-green-700 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-green-50 transition",children:[R.jsx(MI,{size:20})," SHARE LINK"]}),R.jsx("p",{className:"text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]",children:"If download fails, long press image to save"})]})]})]})})};function SP(){const[t,e]=Ne.useState(DEFAULT_CONFIG),[n,r]=Ne.useState([]),[i,s]=Ne.useState([]),[o,l]=Ne.useState(!1),[u,h]=Ne.useState(!1),[f,m]=Ne.useState(null),[y,A]=Ne.useState(null),x=Ne.useRef(null);Ne.useEffect(()=>{const E=oc(Ch(Pn,"artifacts",gr,"public","site_config"),V=>{V.exists()&&e(F=>({...F,...V.data()}))}),_=oc(qg(ps(Pn,"artifacts",gr,"public","attendees"),Hg("createdAt","desc")),V=>r(V.docs.map(F=>({...F.data(),id:F.id})))),S=oc(qg(ps(Pn,"artifacts",gr,"public","pledges"),Hg("createdAt","desc")),V=>s(V.docs.map(F=>({...F.data(),id:F.id}))));return sessionStorage.getItem("fest_visited")||(setTimeout(()=>m("attendance"),2500),sessionStorage.setItem("fest_visited","true")),()=>{E(),_(),S()}},[]);const D=async E=>{l(!0),await gP(Ch(Pn,"artifacts",gr,"public","site_config"),E),l(!1),alert("Live configuration updated!")},L=async E=>{if(!window.confirm("CRITICAL: This will wipe all registration data. Proceed?"))return;const _=vP(Pn);(await mP(ps(Pn,"artifacts",gr,"public",E))).forEach(V=>_.delete(V.ref)),await _.commit(),alert("Database cleared.")};return R.jsxs("div",{className:"min-h-screen bg-[#fffdfa] font-outfit text-gray-900 overflow-x-hidden",children:[R.jsx(EP,{}),R.jsx("nav",{className:"fixed top-0 w-full z-50 p-4 md:p-6 flex justify-center",children:R.jsxs("div",{className:"glass shadow-2xl rounded-full px-8 py-3 flex justify-between items-center w-full max-w-5xl border border-white/80",children:[R.jsxs("div",{className:"flex items-center gap-3",children:[R.jsx("div",{className:"w-10 h-10 rounded-full tricolor-bg p-[2px]",children:R.jsx("img",{src:t.header.logoUrl,className:"w-full h-full rounded-full object-cover bg-white"})}),R.jsxs("div",{className:"flex flex-col",children:[R.jsx("span",{className:"font-cinzel font-black text-orange-800 text-sm leading-none",children:t.header.orgName}),R.jsx("span",{className:"text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1",children:"Youth Revolution"})]})]}),R.jsx("div",{className:"flex gap-4",children:R.jsx("button",{onClick:()=>m("admin"),className:"p-2 hover:bg-orange-50 rounded-full text-gray-300 hover:text-orange-600 transition",children:R.jsx(VI,{size:20})})})]})}),R.jsxs("header",{className:"pt-40 pb-20 px-6 text-center max-w-6xl mx-auto space-y-10",children:[R.jsxs("div",{className:"space-y-4 animate-in fade-in slide-in-from-bottom-10 duration-1000",children:[R.jsx("h1",{className:"text-6xl md:text-9xl font-black text-orange-600 font-cinzel tracking-tighter leading-none filter drop-shadow-xl",children:t.header.eventName}),R.jsxs("div",{className:"flex justify-center items-center gap-6",children:[R.jsx("div",{className:"h-[2px] bg-orange-200 flex-1 max-w-[100px]"}),R.jsx("div",{className:"animate-heart",children:R.jsx(AP,{})}),R.jsx("div",{className:"h-[2px] bg-orange-200 flex-1 max-w-[100px]"})]}),R.jsxs("p",{className:"text-xl md:text-3xl font-bold text-gray-500 italic tracking-wide",children:['"',t.header.tagline,'"']})]}),R.jsxs("div",{className:"grid lg:grid-cols-2 gap-8 pt-10",children:[R.jsxs("div",{className:"glass p-10 rounded-[3rem] text-left space-y-6 shadow-xl border-orange-100/50 hover:shadow-2xl transition duration-500",children:[R.jsx("div",{className:"w-16 h-16 bg-orange-600 rounded-3xl flex items-center justify-center text-white shadow-lg shadow-orange-200",children:R.jsx(PI,{size:32})}),R.jsx("h2",{className:"text-4xl font-black text-gray-800 font-cinzel tracking-tight",children:"THE EVENT"}),R.jsx("p",{className:"text-lg text-gray-500 leading-relaxed font-medium",children:t.about.description}),R.jsxs("div",{className:"flex flex-wrap gap-4 pt-4",children:[R.jsx("span",{className:"px-6 py-2 bg-orange-50 rounded-full text-orange-700 font-black text-sm uppercase border border-orange-100",children:t.about.date}),R.jsx("span",{className:"px-6 py-2 bg-orange-50 rounded-full text-orange-700 font-black text-sm uppercase border border-orange-100",children:t.about.venue}),R.jsx("span",{className:"px-6 py-2 bg-orange-50 rounded-full text-orange-700 font-black text-sm uppercase border border-orange-100",children:t.about.time})]})]}),R.jsx("div",{className:"bg-orange-600 p-1 rounded-[3rem] shadow-2xl group transition duration-500 hover:scale-[1.01]",children:R.jsxs("div",{className:"bg-white rounded-[2.9rem] h-full p-10 flex flex-col items-center md:items-start text-center md:text-left gap-6 overflow-hidden relative",children:[R.jsx("img",{src:t.dedication.imageUrl,className:"w-32 h-32 rounded-full border-4 border-orange-50 shadow-xl object-cover"}),R.jsxs("div",{className:"space-y-2 relative z-10",children:[R.jsx("span",{className:"text-orange-600 font-black text-xs uppercase tracking-widest",children:"Inspiration"}),R.jsx("h3",{className:"text-3xl font-black text-gray-900 font-cinzel leading-tight",children:t.dedication.name}),R.jsx("p",{className:"text-gray-400 font-medium italic",children:t.dedication.subtitle})]}),R.jsx(FI,{className:"absolute -right-10 -bottom-10 w-48 h-48 text-orange-50 opacity-50 group-hover:rotate-12 transition duration-700"})]})})]})]}),R.jsxs("section",{className:"py-20 overflow-hidden bg-gray-50/50",children:[R.jsx("h2",{className:"text-center text-4xl font-black mb-16 font-cinzel text-gray-300 uppercase tracking-[0.3em]",children:"Highlights"}),R.jsx("div",{className:"flex overflow-x-auto gap-8 px-10 pb-10 hide-scrollbar snap-x",ref:x,children:t.gallery.map(E=>R.jsxs("div",{className:"flex-shrink-0 w-80 h-[28rem] rounded-[2.5rem] overflow-hidden shadow-2xl snap-center relative group",children:[R.jsx("img",{src:E.url,className:"w-full h-full object-cover group-hover:scale-110 transition duration-1000"}),R.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"}),R.jsxs("div",{className:"absolute bottom-8 left-8 text-white space-y-1",children:[R.jsx("span",{className:"text-[10px] font-black tracking-[0.4em] text-orange-400 uppercase",children:"Gallery"}),R.jsx("h4",{className:"text-2xl font-bold font-cinzel",children:E.title})]})]},E.id))})]}),R.jsxs("footer",{className:"bg-gray-900 text-white rounded-t-[4rem] px-8 pt-20 pb-40 relative",children:[R.jsxs("div",{className:"max-w-6xl mx-auto grid md:grid-cols-3 gap-16",children:[R.jsxs("div",{className:"space-y-6",children:[R.jsx("h2",{className:"text-3xl font-black text-orange-500 font-cinzel",children:t.header.orgName}),R.jsx("p",{className:"text-gray-400 font-medium",children:"Empowering India's youth through the timeless wisdom of Bharat's culture and heritage."})]}),R.jsxs("div",{className:"space-y-6",children:[R.jsx("h3",{className:"font-bold text-xl uppercase tracking-widest text-orange-200",children:"Connect"}),R.jsxs("div",{className:"flex gap-4",children:[R.jsx("a",{href:t.socials.instagram,target:"_blank",className:"w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-orange-600 transition duration-300",children:R.jsx(DI,{})}),R.jsx("a",{href:t.socials.youtube,target:"_blank",className:"w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-red-600 transition duration-300",children:R.jsx(zI,{})}),R.jsx("a",{href:t.socials.facebook,target:"_blank",className:"w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-blue-600 transition duration-300",children:R.jsx(NI,{})})]})]}),R.jsxs("div",{className:"space-y-4",children:[R.jsx("h3",{className:"font-bold text-xl uppercase tracking-widest text-orange-200",children:"Contact"}),R.jsxs("div",{className:"space-y-2 text-gray-400",children:[R.jsxs("div",{className:"flex items-center gap-2",children:[R.jsx(bI,{size:16})," +91 0000 0000"]}),R.jsxs("div",{className:"flex items-center gap-2",children:[R.jsx(OI,{size:16})," fest@iskconujjain.com"]})]})]})]}),R.jsx("div",{className:"absolute bottom-0 left-0 w-full bg-orange-600 py-3 overflow-hidden",children:R.jsx("div",{className:"animate-marquee whitespace-nowrap text-white font-black uppercase text-sm tracking-widest",children:`Join the revolution • Nasha Mukt Bharat • ISKCON Ujjain 2026 • ${t.header.eventName} • `.repeat(10)})})]}),R.jsxs("div",{className:"fixed bottom-0 left-0 w-full p-6 flex gap-4 z-50 md:flex-col md:w-auto md:right-10 md:bottom-10 md:left-auto md:p-0",children:[R.jsxs("button",{onClick:()=>m("pledge"),className:"flex-1 md:w-72 bg-gradient-to-r from-secondary to-[#166534] text-white py-5 rounded-3xl font-black text-xl shadow-2xl shadow-green-200 flex items-center justify-center gap-3 hover:scale-105 transition active:scale-95 border-b-4 border-black/20",children:[R.jsx(xI,{})," ",t.labels.pledgeBtn]}),R.jsxs("button",{onClick:()=>m("attendance"),className:"flex-1 md:w-72 bg-gradient-to-r from-primary to-red-600 text-white py-5 rounded-3xl font-black text-xl shadow-2xl shadow-orange-200 flex items-center justify-center gap-3 hover:scale-105 transition active:scale-95 border-b-4 border-black/20",children:[R.jsx(jI,{})," ",t.labels.attendanceBtn]})]}),f==="attendance"&&R.jsx("div",{className:"fixed inset-0 z-[150] bg-black/80 flex items-center justify-center p-4",children:R.jsxs("form",{className:"bg-white rounded-[3rem] w-full max-w-md p-10 space-y-6 relative shadow-2xl animate-in fade-in zoom-in duration-300",onSubmit:async E=>{E.preventDefault(),l(!0);const _={name:E.target.name.value,contact:E.target.mob.value,age:E.target.age.value,gender:E.target.gen.value,createdAt:new Date};await Gg(ps(Pn,"artifacts",gr,"public","attendees"),_),l(!1),m(null),A({type:"pass",name:_.name,extraData:_})},children:[R.jsx("button",{type:"button",onClick:()=>m(null),className:"absolute top-8 right-8 text-gray-300 hover:text-red-500 transition",children:R.jsx(rh,{size:28})}),R.jsxs("div",{className:"space-y-2",children:[R.jsx("h2",{className:"text-3xl font-black font-cinzel text-orange-600 leading-none tracking-tighter",children:"REGISTRATION"}),R.jsx("p",{className:"text-gray-400 font-bold text-xs uppercase tracking-widest",children:"Generate your entry pass"})]}),R.jsx("input",{name:"name",placeholder:"Full Name",className:"w-full p-5 bg-gray-50 rounded-2xl border-none focus:ring-4 ring-orange-100 transition text-lg font-bold",required:!0}),R.jsxs("div",{className:"flex gap-3",children:[R.jsx("input",{name:"age",type:"number",placeholder:"Age",className:"w-full p-5 bg-gray-50 rounded-2xl border-none focus:ring-4 ring-orange-100 transition font-bold",required:!0}),R.jsxs("select",{name:"gen",className:"w-full p-5 bg-gray-50 rounded-2xl border-none focus:ring-4 ring-orange-100 transition font-bold uppercase",children:[R.jsx("option",{value:"M",children:"Male"}),R.jsx("option",{value:"F",children:"Female"})]})]}),R.jsx("input",{name:"mob",type:"tel",placeholder:"Mobile Number",className:"w-full p-5 bg-gray-50 rounded-2xl border-none focus:ring-4 ring-orange-100 transition font-bold",required:!0}),R.jsx("button",{disabled:o,className:"w-full bg-orange-600 text-white py-5 rounded-3xl font-black text-xl uppercase shadow-xl flex justify-center hover:bg-orange-700 transition",children:o?R.jsx(nh,{className:"animate-spin"}):"GET MY PASS"})]})}),f==="pledge"&&R.jsx("div",{className:"fixed inset-0 z-[150] bg-black/80 flex items-center justify-center p-4",children:R.jsxs("form",{className:"bg-white rounded-[3rem] w-full max-w-md p-10 space-y-6 relative shadow-2xl animate-in fade-in zoom-in duration-300",onSubmit:async E=>{E.preventDefault(),l(!0);const _=E.target.name.value;await Gg(ps(Pn,"artifacts",gr,"public","pledges"),{name:_,mobile:E.target.mob.value,createdAt:new Date}),l(!1),m(null),A({type:"pledge",name:_})},children:[R.jsx("button",{type:"button",onClick:()=>m(null),className:"absolute top-8 right-8 text-gray-300",children:R.jsx(rh,{size:28})}),R.jsxs("div",{className:"space-y-2",children:[R.jsx("h2",{className:"text-3xl font-black font-cinzel text-green-700 leading-none tracking-tighter uppercase",children:"Nasha Mukt Bharat"}),R.jsxs("p",{className:"text-gray-400 font-bold text-xs uppercase tracking-widest italic",children:['"',t.pledgeText.english,'"']})]}),R.jsx("input",{name:"name",placeholder:"Full Name",className:"w-full p-5 bg-gray-50 rounded-2xl border-none focus:ring-4 ring-green-100 transition text-lg font-bold",required:!0}),R.jsx("input",{name:"mob",type:"tel",placeholder:"Mobile (Optional)",className:"w-full p-5 bg-gray-50 rounded-2xl border-none focus:ring-4 ring-green-100 transition font-bold"}),R.jsx("button",{disabled:o,className:"w-full bg-green-700 text-white py-5 rounded-3xl font-black text-xl uppercase shadow-xl flex justify-center hover:bg-green-800 transition",children:o?R.jsx(nh,{className:"animate-spin"}):"I COMMITTED"})]})}),f==="admin"&&R.jsx("div",{className:"fixed inset-0 z-[300] bg-[#f8fafc] overflow-auto p-6 md:p-12",children:R.jsxs("div",{className:"max-w-6xl mx-auto space-y-12",children:[R.jsxs("div",{className:"flex justify-between items-end border-b-4 border-black pb-4",children:[R.jsxs("div",{children:[R.jsx("h1",{className:"text-5xl font-black font-cinzel text-orange-600",children:"DASHBOARD"}),R.jsx("p",{className:"font-bold text-gray-400 uppercase tracking-widest",children:"Master Management Suite"})]}),R.jsx("button",{onClick:()=>m(null),className:"bg-black text-white px-10 py-4 rounded-2xl font-black hover:scale-95 transition",children:"CLOSE PANEL"})]}),R.jsxs("div",{className:"grid lg:grid-cols-2 gap-10",children:[R.jsxs("div",{className:"bg-white p-10 rounded-[3rem] shadow-xl border space-y-8",children:[R.jsxs("h3",{className:"text-2xl font-black border-b pb-4 flex items-center gap-2",children:[R.jsx(UI,{className:"text-orange-500"})," THEME & CONTENT"]}),R.jsxs("div",{className:"space-y-4",children:[R.jsxs("div",{children:[R.jsx("label",{className:"text-xs font-black text-gray-400 uppercase",children:"Organization Name"}),R.jsx("input",{value:t.header.orgName,onChange:E=>e({...t,header:{...t.header,orgName:E.target.value}}),className:"w-full p-4 bg-gray-50 rounded-xl mt-1 font-bold border-none"})]}),R.jsxs("div",{children:[R.jsx("label",{className:"text-xs font-black text-gray-400 uppercase",children:"Event Title"}),R.jsx("input",{value:t.header.eventName,onChange:E=>e({...t,header:{...t.header,eventName:E.target.value}}),className:"w-full p-4 bg-gray-50 rounded-xl mt-1 font-bold border-none"})]}),R.jsxs("div",{children:[R.jsx("label",{className:"text-xs font-black text-gray-400 uppercase",children:"Instagram Link"}),R.jsx("input",{value:t.socials.instagram,onChange:E=>e({...t,socials:{...t.socials,instagram:E.target.value}}),className:"w-full p-4 bg-gray-50 rounded-xl mt-1 font-bold border-none"})]})]}),R.jsx("button",{onClick:()=>D(t),className:"w-full bg-green-600 text-white py-5 rounded-2xl font-black text-lg shadow-lg shadow-green-100 hover:bg-green-700 transition",children:"PUSH LIVE UPDATE"})]}),R.jsxs("div",{className:"bg-white p-10 rounded-[3rem] shadow-xl border space-y-8",children:[R.jsxs("h3",{className:"text-2xl font-black border-b pb-4 flex items-center gap-2",children:[R.jsx(LI,{className:"text-blue-500"})," DATA HUB"]}),R.jsxs("div",{className:"space-y-6",children:[R.jsxs("div",{className:"flex justify-between items-center bg-gray-50 p-6 rounded-3xl",children:[R.jsxs("div",{children:[R.jsx("h4",{className:"text-2xl font-black text-gray-700",children:n.length}),R.jsx("p",{className:"text-xs font-bold text-gray-400 uppercase",children:"Attendees Registered"})]}),R.jsxs("div",{className:"flex gap-2",children:[R.jsxs("button",{onClick:()=>Yg(n,"Attendees"),className:"bg-blue-600 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2",children:["CSV ",R.jsx(th,{size:16})]}),R.jsx("button",{onClick:()=>L("attendees"),className:"bg-red-50 text-red-600 p-4 rounded-xl hover:bg-red-600 hover:text-white transition",children:R.jsx(Nm,{})})]})]}),R.jsxs("div",{className:"flex justify-between items-center bg-gray-50 p-6 rounded-3xl",children:[R.jsxs("div",{children:[R.jsx("h4",{className:"text-2xl font-black text-gray-700",children:i.length}),R.jsx("p",{className:"text-xs font-bold text-gray-400 uppercase",children:"Pledges Taken"})]}),R.jsxs("div",{className:"flex gap-2",children:[R.jsxs("button",{onClick:()=>Yg(i,"Pledges"),className:"bg-blue-600 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2",children:["CSV ",R.jsx(th,{size:16})]}),R.jsx("button",{onClick:()=>L("pledges"),className:"bg-red-50 text-red-600 p-4 rounded-xl hover:bg-red-600 hover:text-white transition",children:R.jsx(Nm,{})})]})]})]})]})]})]})}),y&&R.jsx(IP,{type:y.type,name:y.name,extraData:y.extraData,eventDate:t.about.date,onClose:()=>A(null)})]})}const AP=()=>R.jsx("div",{className:"relative w-16 h-16 md:w-24 md:h-24",children:R.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:"w-full h-full drop-shadow-2xl",xmlns:"http://www.w3.org/2000/svg",children:[R.jsx("defs",{children:R.jsxs("linearGradient",{id:"heartGrad",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[R.jsx("stop",{offset:"0%",stopColor:"#FF9933"}),R.jsx("stop",{offset:"33%",stopColor:"#FF9933"}),R.jsx("stop",{offset:"33%",stopColor:"#FFFFFF"}),R.jsx("stop",{offset:"66%",stopColor:"#FFFFFF"}),R.jsx("stop",{offset:"66%",stopColor:"#138808"}),R.jsx("stop",{offset:"100%",stopColor:"#138808"})]})}),R.jsx("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",fill:"url(#heartGrad)",stroke:"#fff",strokeWidth:"0.5"})]})});lc.createRoot(document.getElementById("root")).render(R.jsx(mE.StrictMode,{children:R.jsx(SP,{})}));
