(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function nT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Uy={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Go=Symbol.for("react.element"),rT=Symbol.for("react.portal"),iT=Symbol.for("react.fragment"),sT=Symbol.for("react.strict_mode"),oT=Symbol.for("react.profiler"),aT=Symbol.for("react.provider"),lT=Symbol.for("react.context"),uT=Symbol.for("react.forward_ref"),cT=Symbol.for("react.suspense"),hT=Symbol.for("react.memo"),dT=Symbol.for("react.lazy"),tm=Symbol.iterator;function fT(t){return t===null||typeof t!="object"?null:(t=tm&&t[tm]||t["@@iterator"],typeof t=="function"?t:null)}var Fy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zy=Object.assign,By={};function cs(t,e,n){this.props=t,this.context=e,this.refs=By,this.updater=n||Fy}cs.prototype.isReactComponent={};cs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};cs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function jy(){}jy.prototype=cs.prototype;function md(t,e,n){this.props=t,this.context=e,this.refs=By,this.updater=n||Fy}var gd=md.prototype=new jy;gd.constructor=md;zy(gd,cs.prototype);gd.isPureReactComponent=!0;var nm=Array.isArray,$y=Object.prototype.hasOwnProperty,yd={current:null},qy={key:!0,ref:!0,__self:!0,__source:!0};function Hy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)$y.call(e,r)&&!qy.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Go,type:t,key:s,ref:o,props:i,_owner:yd.current}}function pT(t,e){return{$$typeof:Go,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function _d(t){return typeof t=="object"&&t!==null&&t.$$typeof===Go}function mT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var rm=/\/+/g;function cc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?mT(""+t.key):e.toString(36)}function ol(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Go:case rT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+cc(o,0):r,nm(i)?(n="",t!=null&&(n=t.replace(rm,"$&/")+"/"),ol(i,e,n,"",function(c){return c})):i!=null&&(_d(i)&&(i=pT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(rm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",nm(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+cc(s,l);o+=ol(s,e,n,u,i)}else if(u=fT(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+cc(s,l++),o+=ol(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Oa(t,e,n){if(t==null)return t;var r=[],i=0;return ol(t,r,"","",function(s){return e.call(n,s,i++)}),r}function gT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var _t={current:null},al={transition:null},yT={ReactCurrentDispatcher:_t,ReactCurrentBatchConfig:al,ReactCurrentOwner:yd};function Wy(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:Oa,forEach:function(t,e,n){Oa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Oa(t,function(){e++}),e},toArray:function(t){return Oa(t,function(e){return e})||[]},only:function(t){if(!_d(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};te.Component=cs;te.Fragment=iT;te.Profiler=oT;te.PureComponent=md;te.StrictMode=sT;te.Suspense=cT;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yT;te.act=Wy;te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=zy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=yd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)$y.call(e,u)&&!qy.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Go,type:t.type,key:i,ref:s,props:r,_owner:o}};te.createContext=function(t){return t={$$typeof:lT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:aT,_context:t},t.Consumer=t};te.createElement=Hy;te.createFactory=function(t){var e=Hy.bind(null,t);return e.type=t,e};te.createRef=function(){return{current:null}};te.forwardRef=function(t){return{$$typeof:uT,render:t}};te.isValidElement=_d;te.lazy=function(t){return{$$typeof:dT,_payload:{_status:-1,_result:t},_init:gT}};te.memo=function(t,e){return{$$typeof:hT,type:t,compare:e===void 0?null:e}};te.startTransition=function(t){var e=al.transition;al.transition={};try{t()}finally{al.transition=e}};te.unstable_act=Wy;te.useCallback=function(t,e){return _t.current.useCallback(t,e)};te.useContext=function(t){return _t.current.useContext(t)};te.useDebugValue=function(){};te.useDeferredValue=function(t){return _t.current.useDeferredValue(t)};te.useEffect=function(t,e){return _t.current.useEffect(t,e)};te.useId=function(){return _t.current.useId()};te.useImperativeHandle=function(t,e,n){return _t.current.useImperativeHandle(t,e,n)};te.useInsertionEffect=function(t,e){return _t.current.useInsertionEffect(t,e)};te.useLayoutEffect=function(t,e){return _t.current.useLayoutEffect(t,e)};te.useMemo=function(t,e){return _t.current.useMemo(t,e)};te.useReducer=function(t,e,n){return _t.current.useReducer(t,e,n)};te.useRef=function(t){return _t.current.useRef(t)};te.useState=function(t){return _t.current.useState(t)};te.useSyncExternalStore=function(t,e,n){return _t.current.useSyncExternalStore(t,e,n)};te.useTransition=function(){return _t.current.useTransition()};te.version="18.3.1";Uy.exports=te;var ee=Uy.exports;const p=nT(ee);var Xc={},Ky={exports:{}},Dt={},Gy={exports:{}},Qy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(j,G){var Y=j.length;j.push(G);e:for(;0<Y;){var ce=Y-1>>>1,se=j[ce];if(0<i(se,G))j[ce]=G,j[Y]=se,Y=ce;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var G=j[0],Y=j.pop();if(Y!==G){j[0]=Y;e:for(var ce=0,se=j.length,z=se>>>1;ce<z;){var ue=2*(ce+1)-1,Pe=j[ue],Ue=ue+1,tt=j[Ue];if(0>i(Pe,Y))Ue<se&&0>i(tt,Pe)?(j[ce]=tt,j[Ue]=Y,ce=Ue):(j[ce]=Pe,j[ue]=Y,ce=ue);else if(Ue<se&&0>i(tt,Y))j[ce]=tt,j[Ue]=Y,ce=Ue;else break e}}return G}function i(j,G){var Y=j.sortIndex-G.sortIndex;return Y!==0?Y:j.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,m=null,_=3,A=!1,x=!1,C=!1,O=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(j){for(var G=n(c);G!==null;){if(G.callback===null)r(c);else if(G.startTime<=j)r(c),G.sortIndex=G.expirationTime,e(u,G);else break;G=n(c)}}function N(j){if(C=!1,T(j),!x)if(n(u)!==null)x=!0,tn(U);else{var G=n(c);G!==null&&ft(N,G.startTime-j)}}function U(j,G){x=!1,C&&(C=!1,S(y),y=-1),A=!0;var Y=_;try{for(T(G),m=n(u);m!==null&&(!(m.expirationTime>G)||j&&!R());){var ce=m.callback;if(typeof ce=="function"){m.callback=null,_=m.priorityLevel;var se=ce(m.expirationTime<=G);G=t.unstable_now(),typeof se=="function"?m.callback=se:m===n(u)&&r(u),T(G)}else r(u);m=n(u)}if(m!==null)var z=!0;else{var ue=n(c);ue!==null&&ft(N,ue.startTime-G),z=!1}return z}finally{m=null,_=Y,A=!1}}var L=!1,v=null,y=-1,E=5,I=-1;function R(){return!(t.unstable_now()-I<E)}function b(){if(v!==null){var j=t.unstable_now();I=j;var G=!0;try{G=v(!0,j)}finally{G?k():(L=!1,v=null)}}else L=!1}var k;if(typeof w=="function")k=function(){w(b)};else if(typeof MessageChannel<"u"){var We=new MessageChannel,Vt=We.port2;We.port1.onmessage=b,k=function(){Vt.postMessage(null)}}else k=function(){O(b,0)};function tn(j){v=j,L||(L=!0,k())}function ft(j,G){y=O(function(){j(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(j){j.callback=null},t.unstable_continueExecution=function(){x||A||(x=!0,tn(U))},t.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<j?Math.floor(1e3/j):5},t.unstable_getCurrentPriorityLevel=function(){return _},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(j){switch(_){case 1:case 2:case 3:var G=3;break;default:G=_}var Y=_;_=G;try{return j()}finally{_=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(j,G){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var Y=_;_=j;try{return G()}finally{_=Y}},t.unstable_scheduleCallback=function(j,G,Y){var ce=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ce+Y:ce):Y=ce,j){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=Y+se,j={id:f++,callback:G,priorityLevel:j,startTime:Y,expirationTime:se,sortIndex:-1},Y>ce?(j.sortIndex=Y,e(c,j),n(u)===null&&j===n(c)&&(C?(S(y),y=-1):C=!0,ft(N,Y-ce))):(j.sortIndex=se,e(u,j),x||A||(x=!0,tn(U))),j},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(j){var G=_;return function(){var Y=_;_=G;try{return j.apply(this,arguments)}finally{_=Y}}}})(Qy);Gy.exports=Qy;var _T=Gy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vT=ee,Nt=_T;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yy=new Set,wo={};function ni(t,e){Yi(t,e),Yi(t+"Capture",e)}function Yi(t,e){for(wo[t]=e,t=0;t<e.length;t++)Yy.add(e[t])}var Cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jc=Object.prototype.hasOwnProperty,wT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,im={},sm={};function ET(t){return Jc.call(sm,t)?!0:Jc.call(im,t)?!1:wT.test(t)?sm[t]=!0:(im[t]=!0,!1)}function TT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function IT(t,e,n,r){if(e===null||typeof e>"u"||TT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function vt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ze[t]=new vt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ze[e]=new vt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ze[t]=new vt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ze[t]=new vt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ze[t]=new vt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ze[t]=new vt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ze[t]=new vt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ze[t]=new vt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ze[t]=new vt(t,5,!1,t.toLowerCase(),null,!1,!1)});var vd=/[\-:]([a-z])/g;function wd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(vd,wd);Ze[e]=new vt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(vd,wd);Ze[e]=new vt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(vd,wd);Ze[e]=new vt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ze[t]=new vt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ze.xlinkHref=new vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ze[t]=new vt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ed(t,e,n,r){var i=Ze.hasOwnProperty(e)?Ze[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(IT(e,n,i,r)&&(n=null),r||i===null?ET(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Fn=vT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Va=Symbol.for("react.element"),Ri=Symbol.for("react.portal"),xi=Symbol.for("react.fragment"),Td=Symbol.for("react.strict_mode"),Zc=Symbol.for("react.profiler"),Xy=Symbol.for("react.provider"),Jy=Symbol.for("react.context"),Id=Symbol.for("react.forward_ref"),eh=Symbol.for("react.suspense"),th=Symbol.for("react.suspense_list"),kd=Symbol.for("react.memo"),Hn=Symbol.for("react.lazy"),Zy=Symbol.for("react.offscreen"),om=Symbol.iterator;function Ms(t){return t===null||typeof t!="object"?null:(t=om&&t[om]||t["@@iterator"],typeof t=="function"?t:null)}var Se=Object.assign,hc;function Ks(t){if(hc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);hc=e&&e[1]||""}return`
`+hc+t}var dc=!1;function fc(t,e){if(!t||dc)return"";dc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{dc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ks(t):""}function kT(t){switch(t.tag){case 5:return Ks(t.type);case 16:return Ks("Lazy");case 13:return Ks("Suspense");case 19:return Ks("SuspenseList");case 0:case 2:case 15:return t=fc(t.type,!1),t;case 11:return t=fc(t.type.render,!1),t;case 1:return t=fc(t.type,!0),t;default:return""}}function nh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case xi:return"Fragment";case Ri:return"Portal";case Zc:return"Profiler";case Td:return"StrictMode";case eh:return"Suspense";case th:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Jy:return(t.displayName||"Context")+".Consumer";case Xy:return(t._context.displayName||"Context")+".Provider";case Id:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case kd:return e=t.displayName||null,e!==null?e:nh(t.type)||"Memo";case Hn:e=t._payload,t=t._init;try{return nh(t(e))}catch{}}return null}function ST(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nh(e);case 8:return e===Td?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function pr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function e_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function AT(t){var e=e_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function La(t){t._valueTracker||(t._valueTracker=AT(t))}function t_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=e_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Rl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function rh(t,e){var n=e.checked;return Se({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function am(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=pr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function n_(t,e){e=e.checked,e!=null&&Ed(t,"checked",e,!1)}function ih(t,e){n_(t,e);var n=pr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?sh(t,e.type,n):e.hasOwnProperty("defaultValue")&&sh(t,e.type,pr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function lm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function sh(t,e,n){(e!=="number"||Rl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Gs=Array.isArray;function zi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+pr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function oh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Se({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function um(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(Gs(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:pr(n)}}function r_(t,e){var n=pr(e.value),r=pr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function cm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function i_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ah(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?i_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ma,s_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ma=Ma||document.createElement("div"),Ma.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ma.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Eo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ro={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},RT=["Webkit","ms","Moz","O"];Object.keys(ro).forEach(function(t){RT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ro[e]=ro[t]})});function o_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ro.hasOwnProperty(t)&&ro[t]?(""+e).trim():e+"px"}function a_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=o_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var xT=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lh(t,e){if(e){if(xT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function uh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ch=null;function Sd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var hh=null,Bi=null,ji=null;function hm(t){if(t=Xo(t)){if(typeof hh!="function")throw Error(F(280));var e=t.stateNode;e&&(e=wu(e),hh(t.stateNode,t.type,e))}}function l_(t){Bi?ji?ji.push(t):ji=[t]:Bi=t}function u_(){if(Bi){var t=Bi,e=ji;if(ji=Bi=null,hm(t),e)for(t=0;t<e.length;t++)hm(e[t])}}function c_(t,e){return t(e)}function h_(){}var pc=!1;function d_(t,e,n){if(pc)return t(e,n);pc=!0;try{return c_(t,e,n)}finally{pc=!1,(Bi!==null||ji!==null)&&(h_(),u_())}}function To(t,e){var n=t.stateNode;if(n===null)return null;var r=wu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var dh=!1;if(Cn)try{var Us={};Object.defineProperty(Us,"passive",{get:function(){dh=!0}}),window.addEventListener("test",Us,Us),window.removeEventListener("test",Us,Us)}catch{dh=!1}function bT(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var io=!1,xl=null,bl=!1,fh=null,PT={onError:function(t){io=!0,xl=t}};function CT(t,e,n,r,i,s,o,l,u){io=!1,xl=null,bT.apply(PT,arguments)}function NT(t,e,n,r,i,s,o,l,u){if(CT.apply(this,arguments),io){if(io){var c=xl;io=!1,xl=null}else throw Error(F(198));bl||(bl=!0,fh=c)}}function ri(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function f_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function dm(t){if(ri(t)!==t)throw Error(F(188))}function DT(t){var e=t.alternate;if(!e){if(e=ri(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return dm(i),t;if(s===r)return dm(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function p_(t){return t=DT(t),t!==null?m_(t):null}function m_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=m_(t);if(e!==null)return e;t=t.sibling}return null}var g_=Nt.unstable_scheduleCallback,fm=Nt.unstable_cancelCallback,OT=Nt.unstable_shouldYield,VT=Nt.unstable_requestPaint,Ne=Nt.unstable_now,LT=Nt.unstable_getCurrentPriorityLevel,Ad=Nt.unstable_ImmediatePriority,y_=Nt.unstable_UserBlockingPriority,Pl=Nt.unstable_NormalPriority,MT=Nt.unstable_LowPriority,__=Nt.unstable_IdlePriority,gu=null,un=null;function UT(t){if(un&&typeof un.onCommitFiberRoot=="function")try{un.onCommitFiberRoot(gu,t,void 0,(t.current.flags&128)===128)}catch{}}var Yt=Math.clz32?Math.clz32:BT,FT=Math.log,zT=Math.LN2;function BT(t){return t>>>=0,t===0?32:31-(FT(t)/zT|0)|0}var Ua=64,Fa=4194304;function Qs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Cl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Qs(l):(s&=o,s!==0&&(r=Qs(s)))}else o=n&~i,o!==0?r=Qs(o):s!==0&&(r=Qs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Yt(e),i=1<<n,r|=t[n],e&=~i;return r}function jT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $T(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Yt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=jT(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function ph(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function v_(){var t=Ua;return Ua<<=1,!(Ua&4194240)&&(Ua=64),t}function mc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Qo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Yt(e),t[e]=n}function qT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Yt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Rd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Yt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var he=0;function w_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var E_,xd,T_,I_,k_,mh=!1,za=[],rr=null,ir=null,sr=null,Io=new Map,ko=new Map,Kn=[],HT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pm(t,e){switch(t){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":Io.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ko.delete(e.pointerId)}}function Fs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Xo(e),e!==null&&xd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function WT(t,e,n,r,i){switch(e){case"focusin":return rr=Fs(rr,t,e,n,r,i),!0;case"dragenter":return ir=Fs(ir,t,e,n,r,i),!0;case"mouseover":return sr=Fs(sr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Io.set(s,Fs(Io.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ko.set(s,Fs(ko.get(s)||null,t,e,n,r,i)),!0}return!1}function S_(t){var e=Vr(t.target);if(e!==null){var n=ri(e);if(n!==null){if(e=n.tag,e===13){if(e=f_(n),e!==null){t.blockedOn=e,k_(t.priority,function(){T_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ll(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=gh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ch=r,n.target.dispatchEvent(r),ch=null}else return e=Xo(n),e!==null&&xd(e),t.blockedOn=n,!1;e.shift()}return!0}function mm(t,e,n){ll(t)&&n.delete(e)}function KT(){mh=!1,rr!==null&&ll(rr)&&(rr=null),ir!==null&&ll(ir)&&(ir=null),sr!==null&&ll(sr)&&(sr=null),Io.forEach(mm),ko.forEach(mm)}function zs(t,e){t.blockedOn===e&&(t.blockedOn=null,mh||(mh=!0,Nt.unstable_scheduleCallback(Nt.unstable_NormalPriority,KT)))}function So(t){function e(i){return zs(i,t)}if(0<za.length){zs(za[0],t);for(var n=1;n<za.length;n++){var r=za[n];r.blockedOn===t&&(r.blockedOn=null)}}for(rr!==null&&zs(rr,t),ir!==null&&zs(ir,t),sr!==null&&zs(sr,t),Io.forEach(e),ko.forEach(e),n=0;n<Kn.length;n++)r=Kn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Kn.length&&(n=Kn[0],n.blockedOn===null);)S_(n),n.blockedOn===null&&Kn.shift()}var $i=Fn.ReactCurrentBatchConfig,Nl=!0;function GT(t,e,n,r){var i=he,s=$i.transition;$i.transition=null;try{he=1,bd(t,e,n,r)}finally{he=i,$i.transition=s}}function QT(t,e,n,r){var i=he,s=$i.transition;$i.transition=null;try{he=4,bd(t,e,n,r)}finally{he=i,$i.transition=s}}function bd(t,e,n,r){if(Nl){var i=gh(t,e,n,r);if(i===null)Sc(t,e,r,Dl,n),pm(t,r);else if(WT(i,t,e,n,r))r.stopPropagation();else if(pm(t,r),e&4&&-1<HT.indexOf(t)){for(;i!==null;){var s=Xo(i);if(s!==null&&E_(s),s=gh(t,e,n,r),s===null&&Sc(t,e,r,Dl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Sc(t,e,r,null,n)}}var Dl=null;function gh(t,e,n,r){if(Dl=null,t=Sd(r),t=Vr(t),t!==null)if(e=ri(t),e===null)t=null;else if(n=e.tag,n===13){if(t=f_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Dl=t,null}function A_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(LT()){case Ad:return 1;case y_:return 4;case Pl:case MT:return 16;case __:return 536870912;default:return 16}default:return 16}}var er=null,Pd=null,ul=null;function R_(){if(ul)return ul;var t,e=Pd,n=e.length,r,i="value"in er?er.value:er.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ul=i.slice(t,1<r?1-r:void 0)}function cl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ba(){return!0}function gm(){return!1}function Ot(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ba:gm,this.isPropagationStopped=gm,this}return Se(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ba)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ba)},persist:function(){},isPersistent:Ba}),e}var hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cd=Ot(hs),Yo=Se({},hs,{view:0,detail:0}),YT=Ot(Yo),gc,yc,Bs,yu=Se({},Yo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Bs&&(Bs&&t.type==="mousemove"?(gc=t.screenX-Bs.screenX,yc=t.screenY-Bs.screenY):yc=gc=0,Bs=t),gc)},movementY:function(t){return"movementY"in t?t.movementY:yc}}),ym=Ot(yu),XT=Se({},yu,{dataTransfer:0}),JT=Ot(XT),ZT=Se({},Yo,{relatedTarget:0}),_c=Ot(ZT),eI=Se({},hs,{animationName:0,elapsedTime:0,pseudoElement:0}),tI=Ot(eI),nI=Se({},hs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),rI=Ot(nI),iI=Se({},hs,{data:0}),_m=Ot(iI),sI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},aI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=aI[t])?!!e[t]:!1}function Nd(){return lI}var uI=Se({},Yo,{key:function(t){if(t.key){var e=sI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=cl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?oI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nd,charCode:function(t){return t.type==="keypress"?cl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?cl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),cI=Ot(uI),hI=Se({},yu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vm=Ot(hI),dI=Se({},Yo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nd}),fI=Ot(dI),pI=Se({},hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),mI=Ot(pI),gI=Se({},yu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),yI=Ot(gI),_I=[9,13,27,32],Dd=Cn&&"CompositionEvent"in window,so=null;Cn&&"documentMode"in document&&(so=document.documentMode);var vI=Cn&&"TextEvent"in window&&!so,x_=Cn&&(!Dd||so&&8<so&&11>=so),wm=" ",Em=!1;function b_(t,e){switch(t){case"keyup":return _I.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function P_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var bi=!1;function wI(t,e){switch(t){case"compositionend":return P_(e);case"keypress":return e.which!==32?null:(Em=!0,wm);case"textInput":return t=e.data,t===wm&&Em?null:t;default:return null}}function EI(t,e){if(bi)return t==="compositionend"||!Dd&&b_(t,e)?(t=R_(),ul=Pd=er=null,bi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return x_&&e.locale!=="ko"?null:e.data;default:return null}}var TI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!TI[t.type]:e==="textarea"}function C_(t,e,n,r){l_(r),e=Ol(e,"onChange"),0<e.length&&(n=new Cd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var oo=null,Ao=null;function II(t){j_(t,0)}function _u(t){var e=Ni(t);if(t_(e))return t}function kI(t,e){if(t==="change")return e}var N_=!1;if(Cn){var vc;if(Cn){var wc="oninput"in document;if(!wc){var Im=document.createElement("div");Im.setAttribute("oninput","return;"),wc=typeof Im.oninput=="function"}vc=wc}else vc=!1;N_=vc&&(!document.documentMode||9<document.documentMode)}function km(){oo&&(oo.detachEvent("onpropertychange",D_),Ao=oo=null)}function D_(t){if(t.propertyName==="value"&&_u(Ao)){var e=[];C_(e,Ao,t,Sd(t)),d_(II,e)}}function SI(t,e,n){t==="focusin"?(km(),oo=e,Ao=n,oo.attachEvent("onpropertychange",D_)):t==="focusout"&&km()}function AI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return _u(Ao)}function RI(t,e){if(t==="click")return _u(e)}function xI(t,e){if(t==="input"||t==="change")return _u(e)}function bI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Jt=typeof Object.is=="function"?Object.is:bI;function Ro(t,e){if(Jt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Jc.call(e,i)||!Jt(t[i],e[i]))return!1}return!0}function Sm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Am(t,e){var n=Sm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sm(n)}}function O_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?O_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function V_(){for(var t=window,e=Rl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Rl(t.document)}return e}function Od(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function PI(t){var e=V_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&O_(n.ownerDocument.documentElement,n)){if(r!==null&&Od(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Am(n,s);var o=Am(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var CI=Cn&&"documentMode"in document&&11>=document.documentMode,Pi=null,yh=null,ao=null,_h=!1;function Rm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_h||Pi==null||Pi!==Rl(r)||(r=Pi,"selectionStart"in r&&Od(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ao&&Ro(ao,r)||(ao=r,r=Ol(yh,"onSelect"),0<r.length&&(e=new Cd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Pi)))}function ja(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ci={animationend:ja("Animation","AnimationEnd"),animationiteration:ja("Animation","AnimationIteration"),animationstart:ja("Animation","AnimationStart"),transitionend:ja("Transition","TransitionEnd")},Ec={},L_={};Cn&&(L_=document.createElement("div").style,"AnimationEvent"in window||(delete Ci.animationend.animation,delete Ci.animationiteration.animation,delete Ci.animationstart.animation),"TransitionEvent"in window||delete Ci.transitionend.transition);function vu(t){if(Ec[t])return Ec[t];if(!Ci[t])return t;var e=Ci[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in L_)return Ec[t]=e[n];return t}var M_=vu("animationend"),U_=vu("animationiteration"),F_=vu("animationstart"),z_=vu("transitionend"),B_=new Map,xm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Er(t,e){B_.set(t,e),ni(e,[t])}for(var Tc=0;Tc<xm.length;Tc++){var Ic=xm[Tc],NI=Ic.toLowerCase(),DI=Ic[0].toUpperCase()+Ic.slice(1);Er(NI,"on"+DI)}Er(M_,"onAnimationEnd");Er(U_,"onAnimationIteration");Er(F_,"onAnimationStart");Er("dblclick","onDoubleClick");Er("focusin","onFocus");Er("focusout","onBlur");Er(z_,"onTransitionEnd");Yi("onMouseEnter",["mouseout","mouseover"]);Yi("onMouseLeave",["mouseout","mouseover"]);Yi("onPointerEnter",["pointerout","pointerover"]);Yi("onPointerLeave",["pointerout","pointerover"]);ni("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ni("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ni("onBeforeInput",["compositionend","keypress","textInput","paste"]);ni("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ni("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ni("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ys="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),OI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ys));function bm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,NT(r,e,void 0,t),t.currentTarget=null}function j_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;bm(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;bm(i,l,c),s=u}}}if(bl)throw t=fh,bl=!1,fh=null,t}function ye(t,e){var n=e[Ih];n===void 0&&(n=e[Ih]=new Set);var r=t+"__bubble";n.has(r)||($_(e,t,2,!1),n.add(r))}function kc(t,e,n){var r=0;e&&(r|=4),$_(n,t,r,e)}var $a="_reactListening"+Math.random().toString(36).slice(2);function xo(t){if(!t[$a]){t[$a]=!0,Yy.forEach(function(n){n!=="selectionchange"&&(OI.has(n)||kc(n,!1,t),kc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[$a]||(e[$a]=!0,kc("selectionchange",!1,e))}}function $_(t,e,n,r){switch(A_(e)){case 1:var i=GT;break;case 4:i=QT;break;default:i=bd}n=i.bind(null,e,n,t),i=void 0,!dh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Sc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Vr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}d_(function(){var c=s,f=Sd(n),m=[];e:{var _=B_.get(t);if(_!==void 0){var A=Cd,x=t;switch(t){case"keypress":if(cl(n)===0)break e;case"keydown":case"keyup":A=cI;break;case"focusin":x="focus",A=_c;break;case"focusout":x="blur",A=_c;break;case"beforeblur":case"afterblur":A=_c;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=ym;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=JT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=fI;break;case M_:case U_:case F_:A=tI;break;case z_:A=mI;break;case"scroll":A=YT;break;case"wheel":A=yI;break;case"copy":case"cut":case"paste":A=rI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=vm}var C=(e&4)!==0,O=!C&&t==="scroll",S=C?_!==null?_+"Capture":null:_;C=[];for(var w=c,T;w!==null;){T=w;var N=T.stateNode;if(T.tag===5&&N!==null&&(T=N,S!==null&&(N=To(w,S),N!=null&&C.push(bo(w,N,T)))),O)break;w=w.return}0<C.length&&(_=new A(_,x,null,n,f),m.push({event:_,listeners:C}))}}if(!(e&7)){e:{if(_=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",_&&n!==ch&&(x=n.relatedTarget||n.fromElement)&&(Vr(x)||x[Nn]))break e;if((A||_)&&(_=f.window===f?f:(_=f.ownerDocument)?_.defaultView||_.parentWindow:window,A?(x=n.relatedTarget||n.toElement,A=c,x=x?Vr(x):null,x!==null&&(O=ri(x),x!==O||x.tag!==5&&x.tag!==6)&&(x=null)):(A=null,x=c),A!==x)){if(C=ym,N="onMouseLeave",S="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(C=vm,N="onPointerLeave",S="onPointerEnter",w="pointer"),O=A==null?_:Ni(A),T=x==null?_:Ni(x),_=new C(N,w+"leave",A,n,f),_.target=O,_.relatedTarget=T,N=null,Vr(f)===c&&(C=new C(S,w+"enter",x,n,f),C.target=T,C.relatedTarget=O,N=C),O=N,A&&x)t:{for(C=A,S=x,w=0,T=C;T;T=vi(T))w++;for(T=0,N=S;N;N=vi(N))T++;for(;0<w-T;)C=vi(C),w--;for(;0<T-w;)S=vi(S),T--;for(;w--;){if(C===S||S!==null&&C===S.alternate)break t;C=vi(C),S=vi(S)}C=null}else C=null;A!==null&&Pm(m,_,A,C,!1),x!==null&&O!==null&&Pm(m,O,x,C,!0)}}e:{if(_=c?Ni(c):window,A=_.nodeName&&_.nodeName.toLowerCase(),A==="select"||A==="input"&&_.type==="file")var U=kI;else if(Tm(_))if(N_)U=xI;else{U=AI;var L=SI}else(A=_.nodeName)&&A.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(U=RI);if(U&&(U=U(t,c))){C_(m,U,n,f);break e}L&&L(t,_,c),t==="focusout"&&(L=_._wrapperState)&&L.controlled&&_.type==="number"&&sh(_,"number",_.value)}switch(L=c?Ni(c):window,t){case"focusin":(Tm(L)||L.contentEditable==="true")&&(Pi=L,yh=c,ao=null);break;case"focusout":ao=yh=Pi=null;break;case"mousedown":_h=!0;break;case"contextmenu":case"mouseup":case"dragend":_h=!1,Rm(m,n,f);break;case"selectionchange":if(CI)break;case"keydown":case"keyup":Rm(m,n,f)}var v;if(Dd)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else bi?b_(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(x_&&n.locale!=="ko"&&(bi||y!=="onCompositionStart"?y==="onCompositionEnd"&&bi&&(v=R_()):(er=f,Pd="value"in er?er.value:er.textContent,bi=!0)),L=Ol(c,y),0<L.length&&(y=new _m(y,t,null,n,f),m.push({event:y,listeners:L}),v?y.data=v:(v=P_(n),v!==null&&(y.data=v)))),(v=vI?wI(t,n):EI(t,n))&&(c=Ol(c,"onBeforeInput"),0<c.length&&(f=new _m("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:c}),f.data=v))}j_(m,e)})}function bo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ol(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=To(t,n),s!=null&&r.unshift(bo(t,s,i)),s=To(t,e),s!=null&&r.push(bo(t,s,i))),t=t.return}return r}function vi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Pm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=To(n,s),u!=null&&o.unshift(bo(n,u,l))):i||(u=To(n,s),u!=null&&o.push(bo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var VI=/\r\n?/g,LI=/\u0000|\uFFFD/g;function Cm(t){return(typeof t=="string"?t:""+t).replace(VI,`
`).replace(LI,"")}function qa(t,e,n){if(e=Cm(e),Cm(t)!==e&&n)throw Error(F(425))}function Vl(){}var vh=null,wh=null;function Eh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Th=typeof setTimeout=="function"?setTimeout:void 0,MI=typeof clearTimeout=="function"?clearTimeout:void 0,Nm=typeof Promise=="function"?Promise:void 0,UI=typeof queueMicrotask=="function"?queueMicrotask:typeof Nm<"u"?function(t){return Nm.resolve(null).then(t).catch(FI)}:Th;function FI(t){setTimeout(function(){throw t})}function Ac(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),So(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);So(e)}function or(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Dm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ds=Math.random().toString(36).slice(2),on="__reactFiber$"+ds,Po="__reactProps$"+ds,Nn="__reactContainer$"+ds,Ih="__reactEvents$"+ds,zI="__reactListeners$"+ds,BI="__reactHandles$"+ds;function Vr(t){var e=t[on];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Nn]||n[on]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Dm(t);t!==null;){if(n=t[on])return n;t=Dm(t)}return e}t=n,n=t.parentNode}return null}function Xo(t){return t=t[on]||t[Nn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ni(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function wu(t){return t[Po]||null}var kh=[],Di=-1;function Tr(t){return{current:t}}function ve(t){0>Di||(t.current=kh[Di],kh[Di]=null,Di--)}function me(t,e){Di++,kh[Di]=t.current,t.current=e}var mr={},ht=Tr(mr),It=Tr(!1),Hr=mr;function Xi(t,e){var n=t.type.contextTypes;if(!n)return mr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function kt(t){return t=t.childContextTypes,t!=null}function Ll(){ve(It),ve(ht)}function Om(t,e,n){if(ht.current!==mr)throw Error(F(168));me(ht,e),me(It,n)}function q_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,ST(t)||"Unknown",i));return Se({},n,r)}function Ml(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||mr,Hr=ht.current,me(ht,t),me(It,It.current),!0}function Vm(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=q_(t,e,Hr),r.__reactInternalMemoizedMergedChildContext=t,ve(It),ve(ht),me(ht,t)):ve(It),me(It,n)}var Tn=null,Eu=!1,Rc=!1;function H_(t){Tn===null?Tn=[t]:Tn.push(t)}function jI(t){Eu=!0,H_(t)}function Ir(){if(!Rc&&Tn!==null){Rc=!0;var t=0,e=he;try{var n=Tn;for(he=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Tn=null,Eu=!1}catch(i){throw Tn!==null&&(Tn=Tn.slice(t+1)),g_(Ad,Ir),i}finally{he=e,Rc=!1}}return null}var Oi=[],Vi=0,Ul=null,Fl=0,Lt=[],Mt=0,Wr=null,In=1,kn="";function Nr(t,e){Oi[Vi++]=Fl,Oi[Vi++]=Ul,Ul=t,Fl=e}function W_(t,e,n){Lt[Mt++]=In,Lt[Mt++]=kn,Lt[Mt++]=Wr,Wr=t;var r=In;t=kn;var i=32-Yt(r)-1;r&=~(1<<i),n+=1;var s=32-Yt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,In=1<<32-Yt(e)+i|n<<i|r,kn=s+t}else In=1<<s|n<<i|r,kn=t}function Vd(t){t.return!==null&&(Nr(t,1),W_(t,1,0))}function Ld(t){for(;t===Ul;)Ul=Oi[--Vi],Oi[Vi]=null,Fl=Oi[--Vi],Oi[Vi]=null;for(;t===Wr;)Wr=Lt[--Mt],Lt[Mt]=null,kn=Lt[--Mt],Lt[Mt]=null,In=Lt[--Mt],Lt[Mt]=null}var Ct=null,bt=null,Ee=!1,Gt=null;function K_(t,e){var n=Ft(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Lm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ct=t,bt=or(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ct=t,bt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Wr!==null?{id:In,overflow:kn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ft(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ct=t,bt=null,!0):!1;default:return!1}}function Sh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ah(t){if(Ee){var e=bt;if(e){var n=e;if(!Lm(t,e)){if(Sh(t))throw Error(F(418));e=or(n.nextSibling);var r=Ct;e&&Lm(t,e)?K_(r,n):(t.flags=t.flags&-4097|2,Ee=!1,Ct=t)}}else{if(Sh(t))throw Error(F(418));t.flags=t.flags&-4097|2,Ee=!1,Ct=t}}}function Mm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ct=t}function Ha(t){if(t!==Ct)return!1;if(!Ee)return Mm(t),Ee=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Eh(t.type,t.memoizedProps)),e&&(e=bt)){if(Sh(t))throw G_(),Error(F(418));for(;e;)K_(t,e),e=or(e.nextSibling)}if(Mm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){bt=or(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}bt=null}}else bt=Ct?or(t.stateNode.nextSibling):null;return!0}function G_(){for(var t=bt;t;)t=or(t.nextSibling)}function Ji(){bt=Ct=null,Ee=!1}function Md(t){Gt===null?Gt=[t]:Gt.push(t)}var $I=Fn.ReactCurrentBatchConfig;function js(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function Wa(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Um(t){var e=t._init;return e(t._payload)}function Q_(t){function e(S,w){if(t){var T=S.deletions;T===null?(S.deletions=[w],S.flags|=16):T.push(w)}}function n(S,w){if(!t)return null;for(;w!==null;)e(S,w),w=w.sibling;return null}function r(S,w){for(S=new Map;w!==null;)w.key!==null?S.set(w.key,w):S.set(w.index,w),w=w.sibling;return S}function i(S,w){return S=cr(S,w),S.index=0,S.sibling=null,S}function s(S,w,T){return S.index=T,t?(T=S.alternate,T!==null?(T=T.index,T<w?(S.flags|=2,w):T):(S.flags|=2,w)):(S.flags|=1048576,w)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function l(S,w,T,N){return w===null||w.tag!==6?(w=Oc(T,S.mode,N),w.return=S,w):(w=i(w,T),w.return=S,w)}function u(S,w,T,N){var U=T.type;return U===xi?f(S,w,T.props.children,N,T.key):w!==null&&(w.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Hn&&Um(U)===w.type)?(N=i(w,T.props),N.ref=js(S,w,T),N.return=S,N):(N=yl(T.type,T.key,T.props,null,S.mode,N),N.ref=js(S,w,T),N.return=S,N)}function c(S,w,T,N){return w===null||w.tag!==4||w.stateNode.containerInfo!==T.containerInfo||w.stateNode.implementation!==T.implementation?(w=Vc(T,S.mode,N),w.return=S,w):(w=i(w,T.children||[]),w.return=S,w)}function f(S,w,T,N,U){return w===null||w.tag!==7?(w=zr(T,S.mode,N,U),w.return=S,w):(w=i(w,T),w.return=S,w)}function m(S,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Oc(""+w,S.mode,T),w.return=S,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Va:return T=yl(w.type,w.key,w.props,null,S.mode,T),T.ref=js(S,null,w),T.return=S,T;case Ri:return w=Vc(w,S.mode,T),w.return=S,w;case Hn:var N=w._init;return m(S,N(w._payload),T)}if(Gs(w)||Ms(w))return w=zr(w,S.mode,T,null),w.return=S,w;Wa(S,w)}return null}function _(S,w,T,N){var U=w!==null?w.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return U!==null?null:l(S,w,""+T,N);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Va:return T.key===U?u(S,w,T,N):null;case Ri:return T.key===U?c(S,w,T,N):null;case Hn:return U=T._init,_(S,w,U(T._payload),N)}if(Gs(T)||Ms(T))return U!==null?null:f(S,w,T,N,null);Wa(S,T)}return null}function A(S,w,T,N,U){if(typeof N=="string"&&N!==""||typeof N=="number")return S=S.get(T)||null,l(w,S,""+N,U);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Va:return S=S.get(N.key===null?T:N.key)||null,u(w,S,N,U);case Ri:return S=S.get(N.key===null?T:N.key)||null,c(w,S,N,U);case Hn:var L=N._init;return A(S,w,T,L(N._payload),U)}if(Gs(N)||Ms(N))return S=S.get(T)||null,f(w,S,N,U,null);Wa(w,N)}return null}function x(S,w,T,N){for(var U=null,L=null,v=w,y=w=0,E=null;v!==null&&y<T.length;y++){v.index>y?(E=v,v=null):E=v.sibling;var I=_(S,v,T[y],N);if(I===null){v===null&&(v=E);break}t&&v&&I.alternate===null&&e(S,v),w=s(I,w,y),L===null?U=I:L.sibling=I,L=I,v=E}if(y===T.length)return n(S,v),Ee&&Nr(S,y),U;if(v===null){for(;y<T.length;y++)v=m(S,T[y],N),v!==null&&(w=s(v,w,y),L===null?U=v:L.sibling=v,L=v);return Ee&&Nr(S,y),U}for(v=r(S,v);y<T.length;y++)E=A(v,S,y,T[y],N),E!==null&&(t&&E.alternate!==null&&v.delete(E.key===null?y:E.key),w=s(E,w,y),L===null?U=E:L.sibling=E,L=E);return t&&v.forEach(function(R){return e(S,R)}),Ee&&Nr(S,y),U}function C(S,w,T,N){var U=Ms(T);if(typeof U!="function")throw Error(F(150));if(T=U.call(T),T==null)throw Error(F(151));for(var L=U=null,v=w,y=w=0,E=null,I=T.next();v!==null&&!I.done;y++,I=T.next()){v.index>y?(E=v,v=null):E=v.sibling;var R=_(S,v,I.value,N);if(R===null){v===null&&(v=E);break}t&&v&&R.alternate===null&&e(S,v),w=s(R,w,y),L===null?U=R:L.sibling=R,L=R,v=E}if(I.done)return n(S,v),Ee&&Nr(S,y),U;if(v===null){for(;!I.done;y++,I=T.next())I=m(S,I.value,N),I!==null&&(w=s(I,w,y),L===null?U=I:L.sibling=I,L=I);return Ee&&Nr(S,y),U}for(v=r(S,v);!I.done;y++,I=T.next())I=A(v,S,y,I.value,N),I!==null&&(t&&I.alternate!==null&&v.delete(I.key===null?y:I.key),w=s(I,w,y),L===null?U=I:L.sibling=I,L=I);return t&&v.forEach(function(b){return e(S,b)}),Ee&&Nr(S,y),U}function O(S,w,T,N){if(typeof T=="object"&&T!==null&&T.type===xi&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case Va:e:{for(var U=T.key,L=w;L!==null;){if(L.key===U){if(U=T.type,U===xi){if(L.tag===7){n(S,L.sibling),w=i(L,T.props.children),w.return=S,S=w;break e}}else if(L.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Hn&&Um(U)===L.type){n(S,L.sibling),w=i(L,T.props),w.ref=js(S,L,T),w.return=S,S=w;break e}n(S,L);break}else e(S,L);L=L.sibling}T.type===xi?(w=zr(T.props.children,S.mode,N,T.key),w.return=S,S=w):(N=yl(T.type,T.key,T.props,null,S.mode,N),N.ref=js(S,w,T),N.return=S,S=N)}return o(S);case Ri:e:{for(L=T.key;w!==null;){if(w.key===L)if(w.tag===4&&w.stateNode.containerInfo===T.containerInfo&&w.stateNode.implementation===T.implementation){n(S,w.sibling),w=i(w,T.children||[]),w.return=S,S=w;break e}else{n(S,w);break}else e(S,w);w=w.sibling}w=Vc(T,S.mode,N),w.return=S,S=w}return o(S);case Hn:return L=T._init,O(S,w,L(T._payload),N)}if(Gs(T))return x(S,w,T,N);if(Ms(T))return C(S,w,T,N);Wa(S,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,w!==null&&w.tag===6?(n(S,w.sibling),w=i(w,T),w.return=S,S=w):(n(S,w),w=Oc(T,S.mode,N),w.return=S,S=w),o(S)):n(S,w)}return O}var Zi=Q_(!0),Y_=Q_(!1),zl=Tr(null),Bl=null,Li=null,Ud=null;function Fd(){Ud=Li=Bl=null}function zd(t){var e=zl.current;ve(zl),t._currentValue=e}function Rh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function qi(t,e){Bl=t,Ud=Li=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Tt=!0),t.firstContext=null)}function Bt(t){var e=t._currentValue;if(Ud!==t)if(t={context:t,memoizedValue:e,next:null},Li===null){if(Bl===null)throw Error(F(308));Li=t,Bl.dependencies={lanes:0,firstContext:t}}else Li=Li.next=t;return e}var Lr=null;function Bd(t){Lr===null?Lr=[t]:Lr.push(t)}function X_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Bd(e)):(n.next=i.next,i.next=n),e.interleaved=n,Dn(t,r)}function Dn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Wn=!1;function jd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function J_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function xn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ar(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Dn(t,n)}return i=r.interleaved,i===null?(e.next=e,Bd(r)):(e.next=i.next,i.next=e),r.interleaved=e,Dn(t,n)}function hl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Rd(t,n)}}function Fm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function jl(t,e,n,r){var i=t.updateQueue;Wn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,f=c=u=null,l=s;do{var _=l.lane,A=l.eventTime;if((r&_)===_){f!==null&&(f=f.next={eventTime:A,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=t,C=l;switch(_=e,A=n,C.tag){case 1:if(x=C.payload,typeof x=="function"){m=x.call(A,m,_);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=C.payload,_=typeof x=="function"?x.call(A,m,_):x,_==null)break e;m=Se({},m,_);break e;case 2:Wn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,_=i.effects,_===null?i.effects=[l]:_.push(l))}else A={eventTime:A,lane:_,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=A,u=m):f=f.next=A,o|=_;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;_=l,l=_.next,_.next=null,i.lastBaseUpdate=_,i.shared.pending=null}}while(!0);if(f===null&&(u=m),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Gr|=o,t.lanes=o,t.memoizedState=m}}function zm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var Jo={},cn=Tr(Jo),Co=Tr(Jo),No=Tr(Jo);function Mr(t){if(t===Jo)throw Error(F(174));return t}function $d(t,e){switch(me(No,e),me(Co,t),me(cn,Jo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ah(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ah(e,t)}ve(cn),me(cn,e)}function es(){ve(cn),ve(Co),ve(No)}function Z_(t){Mr(No.current);var e=Mr(cn.current),n=ah(e,t.type);e!==n&&(me(Co,t),me(cn,n))}function qd(t){Co.current===t&&(ve(cn),ve(Co))}var Ie=Tr(0);function $l(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var xc=[];function Hd(){for(var t=0;t<xc.length;t++)xc[t]._workInProgressVersionPrimary=null;xc.length=0}var dl=Fn.ReactCurrentDispatcher,bc=Fn.ReactCurrentBatchConfig,Kr=0,ke=null,ze=null,qe=null,ql=!1,lo=!1,Do=0,qI=0;function st(){throw Error(F(321))}function Wd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Jt(t[n],e[n]))return!1;return!0}function Kd(t,e,n,r,i,s){if(Kr=s,ke=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,dl.current=t===null||t.memoizedState===null?GI:QI,t=n(r,i),lo){s=0;do{if(lo=!1,Do=0,25<=s)throw Error(F(301));s+=1,qe=ze=null,e.updateQueue=null,dl.current=YI,t=n(r,i)}while(lo)}if(dl.current=Hl,e=ze!==null&&ze.next!==null,Kr=0,qe=ze=ke=null,ql=!1,e)throw Error(F(300));return t}function Gd(){var t=Do!==0;return Do=0,t}function sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?ke.memoizedState=qe=t:qe=qe.next=t,qe}function jt(){if(ze===null){var t=ke.alternate;t=t!==null?t.memoizedState:null}else t=ze.next;var e=qe===null?ke.memoizedState:qe.next;if(e!==null)qe=e,ze=t;else{if(t===null)throw Error(F(310));ze=t,t={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},qe===null?ke.memoizedState=qe=t:qe=qe.next=t}return qe}function Oo(t,e){return typeof e=="function"?e(t):e}function Pc(t){var e=jt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=ze,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var f=c.lane;if((Kr&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var m={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,ke.lanes|=f,Gr|=f}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Jt(r,e.memoizedState)||(Tt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ke.lanes|=s,Gr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Cc(t){var e=jt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Jt(s,e.memoizedState)||(Tt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function ev(){}function tv(t,e){var n=ke,r=jt(),i=e(),s=!Jt(r.memoizedState,i);if(s&&(r.memoizedState=i,Tt=!0),r=r.queue,Qd(iv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||qe!==null&&qe.memoizedState.tag&1){if(n.flags|=2048,Vo(9,rv.bind(null,n,r,i,e),void 0,null),He===null)throw Error(F(349));Kr&30||nv(n,e,i)}return i}function nv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ke.updateQueue,e===null?(e={lastEffect:null,stores:null},ke.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function rv(t,e,n,r){e.value=n,e.getSnapshot=r,sv(e)&&ov(t)}function iv(t,e,n){return n(function(){sv(e)&&ov(t)})}function sv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Jt(t,n)}catch{return!0}}function ov(t){var e=Dn(t,1);e!==null&&Xt(e,t,1,-1)}function Bm(t){var e=sn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oo,lastRenderedState:t},e.queue=t,t=t.dispatch=KI.bind(null,ke,t),[e.memoizedState,t]}function Vo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ke.updateQueue,e===null?(e={lastEffect:null,stores:null},ke.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function av(){return jt().memoizedState}function fl(t,e,n,r){var i=sn();ke.flags|=t,i.memoizedState=Vo(1|e,n,void 0,r===void 0?null:r)}function Tu(t,e,n,r){var i=jt();r=r===void 0?null:r;var s=void 0;if(ze!==null){var o=ze.memoizedState;if(s=o.destroy,r!==null&&Wd(r,o.deps)){i.memoizedState=Vo(e,n,s,r);return}}ke.flags|=t,i.memoizedState=Vo(1|e,n,s,r)}function jm(t,e){return fl(8390656,8,t,e)}function Qd(t,e){return Tu(2048,8,t,e)}function lv(t,e){return Tu(4,2,t,e)}function uv(t,e){return Tu(4,4,t,e)}function cv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function hv(t,e,n){return n=n!=null?n.concat([t]):null,Tu(4,4,cv.bind(null,e,t),n)}function Yd(){}function dv(t,e){var n=jt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Wd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function fv(t,e){var n=jt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Wd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function pv(t,e,n){return Kr&21?(Jt(n,e)||(n=v_(),ke.lanes|=n,Gr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Tt=!0),t.memoizedState=n)}function HI(t,e){var n=he;he=n!==0&&4>n?n:4,t(!0);var r=bc.transition;bc.transition={};try{t(!1),e()}finally{he=n,bc.transition=r}}function mv(){return jt().memoizedState}function WI(t,e,n){var r=ur(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},gv(t))yv(e,n);else if(n=X_(t,e,n,r),n!==null){var i=yt();Xt(n,t,r,i),_v(n,e,r)}}function KI(t,e,n){var r=ur(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(gv(t))yv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Jt(l,o)){var u=e.interleaved;u===null?(i.next=i,Bd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=X_(t,e,i,r),n!==null&&(i=yt(),Xt(n,t,r,i),_v(n,e,r))}}function gv(t){var e=t.alternate;return t===ke||e!==null&&e===ke}function yv(t,e){lo=ql=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function _v(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Rd(t,n)}}var Hl={readContext:Bt,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useInsertionEffect:st,useLayoutEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useMutableSource:st,useSyncExternalStore:st,useId:st,unstable_isNewReconciler:!1},GI={readContext:Bt,useCallback:function(t,e){return sn().memoizedState=[t,e===void 0?null:e],t},useContext:Bt,useEffect:jm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,fl(4194308,4,cv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return fl(4194308,4,t,e)},useInsertionEffect:function(t,e){return fl(4,2,t,e)},useMemo:function(t,e){var n=sn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=sn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=WI.bind(null,ke,t),[r.memoizedState,t]},useRef:function(t){var e=sn();return t={current:t},e.memoizedState=t},useState:Bm,useDebugValue:Yd,useDeferredValue:function(t){return sn().memoizedState=t},useTransition:function(){var t=Bm(!1),e=t[0];return t=HI.bind(null,t[1]),sn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ke,i=sn();if(Ee){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),He===null)throw Error(F(349));Kr&30||nv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,jm(iv.bind(null,r,s,t),[t]),r.flags|=2048,Vo(9,rv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=sn(),e=He.identifierPrefix;if(Ee){var n=kn,r=In;n=(r&~(1<<32-Yt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Do++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=qI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},QI={readContext:Bt,useCallback:dv,useContext:Bt,useEffect:Qd,useImperativeHandle:hv,useInsertionEffect:lv,useLayoutEffect:uv,useMemo:fv,useReducer:Pc,useRef:av,useState:function(){return Pc(Oo)},useDebugValue:Yd,useDeferredValue:function(t){var e=jt();return pv(e,ze.memoizedState,t)},useTransition:function(){var t=Pc(Oo)[0],e=jt().memoizedState;return[t,e]},useMutableSource:ev,useSyncExternalStore:tv,useId:mv,unstable_isNewReconciler:!1},YI={readContext:Bt,useCallback:dv,useContext:Bt,useEffect:Qd,useImperativeHandle:hv,useInsertionEffect:lv,useLayoutEffect:uv,useMemo:fv,useReducer:Cc,useRef:av,useState:function(){return Cc(Oo)},useDebugValue:Yd,useDeferredValue:function(t){var e=jt();return ze===null?e.memoizedState=t:pv(e,ze.memoizedState,t)},useTransition:function(){var t=Cc(Oo)[0],e=jt().memoizedState;return[t,e]},useMutableSource:ev,useSyncExternalStore:tv,useId:mv,unstable_isNewReconciler:!1};function Wt(t,e){if(t&&t.defaultProps){e=Se({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function xh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Se({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Iu={isMounted:function(t){return(t=t._reactInternals)?ri(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=yt(),i=ur(t),s=xn(r,i);s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,i),e!==null&&(Xt(e,t,i,r),hl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=yt(),i=ur(t),s=xn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,i),e!==null&&(Xt(e,t,i,r),hl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=yt(),r=ur(t),i=xn(n,r);i.tag=2,e!=null&&(i.callback=e),e=ar(t,i,r),e!==null&&(Xt(e,t,r,n),hl(e,t,r))}};function $m(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ro(n,r)||!Ro(i,s):!0}function vv(t,e,n){var r=!1,i=mr,s=e.contextType;return typeof s=="object"&&s!==null?s=Bt(s):(i=kt(e)?Hr:ht.current,r=e.contextTypes,s=(r=r!=null)?Xi(t,i):mr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Iu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function qm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Iu.enqueueReplaceState(e,e.state,null)}function bh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},jd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Bt(s):(s=kt(e)?Hr:ht.current,i.context=Xi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(xh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Iu.enqueueReplaceState(i,i.state,null),jl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ts(t,e){try{var n="",r=e;do n+=kT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Nc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ph(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var XI=typeof WeakMap=="function"?WeakMap:Map;function wv(t,e,n){n=xn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Kl||(Kl=!0,zh=r),Ph(t,e)},n}function Ev(t,e,n){n=xn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ph(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ph(t,e),typeof r!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Hm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new XI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=h1.bind(null,t,e,n),e.then(t,t))}function Wm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Km(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=xn(-1,1),e.tag=2,ar(n,e,1))),n.lanes|=1),t)}var JI=Fn.ReactCurrentOwner,Tt=!1;function gt(t,e,n,r){e.child=t===null?Y_(e,null,n,r):Zi(e,t.child,n,r)}function Gm(t,e,n,r,i){n=n.render;var s=e.ref;return qi(e,i),r=Kd(t,e,n,r,s,i),n=Gd(),t!==null&&!Tt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,On(t,e,i)):(Ee&&n&&Vd(e),e.flags|=1,gt(t,e,r,i),e.child)}function Qm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!sf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Tv(t,e,s,r,i)):(t=yl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ro,n(o,r)&&t.ref===e.ref)return On(t,e,i)}return e.flags|=1,t=cr(s,r),t.ref=e.ref,t.return=e,e.child=t}function Tv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ro(s,r)&&t.ref===e.ref)if(Tt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Tt=!0);else return e.lanes=t.lanes,On(t,e,i)}return Ch(t,e,n,r,i)}function Iv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(Ui,xt),xt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,me(Ui,xt),xt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,me(Ui,xt),xt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,me(Ui,xt),xt|=r;return gt(t,e,i,n),e.child}function kv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ch(t,e,n,r,i){var s=kt(n)?Hr:ht.current;return s=Xi(e,s),qi(e,i),n=Kd(t,e,n,r,s,i),r=Gd(),t!==null&&!Tt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,On(t,e,i)):(Ee&&r&&Vd(e),e.flags|=1,gt(t,e,n,i),e.child)}function Ym(t,e,n,r,i){if(kt(n)){var s=!0;Ml(e)}else s=!1;if(qi(e,i),e.stateNode===null)pl(t,e),vv(e,n,r),bh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Bt(c):(c=kt(n)?Hr:ht.current,c=Xi(e,c));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&qm(e,o,r,c),Wn=!1;var _=e.memoizedState;o.state=_,jl(e,r,o,i),u=e.memoizedState,l!==r||_!==u||It.current||Wn?(typeof f=="function"&&(xh(e,n,f,r),u=e.memoizedState),(l=Wn||$m(e,n,l,r,_,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,J_(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Wt(e.type,l),o.props=c,m=e.pendingProps,_=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Bt(u):(u=kt(n)?Hr:ht.current,u=Xi(e,u));var A=n.getDerivedStateFromProps;(f=typeof A=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||_!==u)&&qm(e,o,r,u),Wn=!1,_=e.memoizedState,o.state=_,jl(e,r,o,i);var x=e.memoizedState;l!==m||_!==x||It.current||Wn?(typeof A=="function"&&(xh(e,n,A,r),x=e.memoizedState),(c=Wn||$m(e,n,c,r,_,x,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),o.props=r,o.state=x,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),r=!1)}return Nh(t,e,n,r,s,i)}function Nh(t,e,n,r,i,s){kv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Vm(e,n,!1),On(t,e,s);r=e.stateNode,JI.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Zi(e,t.child,null,s),e.child=Zi(e,null,l,s)):gt(t,e,l,s),e.memoizedState=r.state,i&&Vm(e,n,!0),e.child}function Sv(t){var e=t.stateNode;e.pendingContext?Om(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Om(t,e.context,!1),$d(t,e.containerInfo)}function Xm(t,e,n,r,i){return Ji(),Md(i),e.flags|=256,gt(t,e,n,r),e.child}var Dh={dehydrated:null,treeContext:null,retryLane:0};function Oh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Av(t,e,n){var r=e.pendingProps,i=Ie.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),me(Ie,i&1),t===null)return Ah(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Au(o,r,0,null),t=zr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Oh(n),e.memoizedState=Dh,t):Xd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return ZI(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=cr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=cr(l,s):(s=zr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Oh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Dh,r}return s=t.child,t=s.sibling,r=cr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Xd(t,e){return e=Au({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ka(t,e,n,r){return r!==null&&Md(r),Zi(e,t.child,null,n),t=Xd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ZI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Nc(Error(F(422))),Ka(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Au({mode:"visible",children:r.children},i,0,null),s=zr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Zi(e,t.child,null,o),e.child.memoizedState=Oh(o),e.memoizedState=Dh,s);if(!(e.mode&1))return Ka(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=Nc(s,r,void 0),Ka(t,e,o,r)}if(l=(o&t.childLanes)!==0,Tt||l){if(r=He,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Dn(t,i),Xt(r,t,i,-1))}return rf(),r=Nc(Error(F(421))),Ka(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=d1.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,bt=or(i.nextSibling),Ct=e,Ee=!0,Gt=null,t!==null&&(Lt[Mt++]=In,Lt[Mt++]=kn,Lt[Mt++]=Wr,In=t.id,kn=t.overflow,Wr=e),e=Xd(e,r.children),e.flags|=4096,e)}function Jm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Rh(t.return,e,n)}function Dc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Rv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(gt(t,e,r.children,n),r=Ie.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Jm(t,n,e);else if(t.tag===19)Jm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(me(Ie,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&$l(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Dc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&$l(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Dc(e,!0,n,null,s);break;case"together":Dc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function pl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function On(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Gr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function e1(t,e,n){switch(e.tag){case 3:Sv(e),Ji();break;case 5:Z_(e);break;case 1:kt(e.type)&&Ml(e);break;case 4:$d(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;me(zl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(me(Ie,Ie.current&1),e.flags|=128,null):n&e.child.childLanes?Av(t,e,n):(me(Ie,Ie.current&1),t=On(t,e,n),t!==null?t.sibling:null);me(Ie,Ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Rv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),me(Ie,Ie.current),r)break;return null;case 22:case 23:return e.lanes=0,Iv(t,e,n)}return On(t,e,n)}var xv,Vh,bv,Pv;xv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vh=function(){};bv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Mr(cn.current);var s=null;switch(n){case"input":i=rh(t,i),r=rh(t,r),s=[];break;case"select":i=Se({},i,{value:void 0}),r=Se({},r,{value:void 0}),s=[];break;case"textarea":i=oh(t,i),r=oh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Vl)}lh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(wo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(wo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ye("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Pv=function(t,e,n,r){n!==r&&(e.flags|=4)};function $s(t,e){if(!Ee)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function t1(t,e,n){var r=e.pendingProps;switch(Ld(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(e),null;case 1:return kt(e.type)&&Ll(),ot(e),null;case 3:return r=e.stateNode,es(),ve(It),ve(ht),Hd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ha(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gt!==null&&($h(Gt),Gt=null))),Vh(t,e),ot(e),null;case 5:qd(e);var i=Mr(No.current);if(n=e.type,t!==null&&e.stateNode!=null)bv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return ot(e),null}if(t=Mr(cn.current),Ha(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[on]=e,r[Po]=s,t=(e.mode&1)!==0,n){case"dialog":ye("cancel",r),ye("close",r);break;case"iframe":case"object":case"embed":ye("load",r);break;case"video":case"audio":for(i=0;i<Ys.length;i++)ye(Ys[i],r);break;case"source":ye("error",r);break;case"img":case"image":case"link":ye("error",r),ye("load",r);break;case"details":ye("toggle",r);break;case"input":am(r,s),ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ye("invalid",r);break;case"textarea":um(r,s),ye("invalid",r)}lh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&qa(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&qa(r.textContent,l,t),i=["children",""+l]):wo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ye("scroll",r)}switch(n){case"input":La(r),lm(r,s,!0);break;case"textarea":La(r),cm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Vl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=i_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[on]=e,t[Po]=r,xv(t,e,!1,!1),e.stateNode=t;e:{switch(o=uh(n,r),n){case"dialog":ye("cancel",t),ye("close",t),i=r;break;case"iframe":case"object":case"embed":ye("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ys.length;i++)ye(Ys[i],t);i=r;break;case"source":ye("error",t),i=r;break;case"img":case"image":case"link":ye("error",t),ye("load",t),i=r;break;case"details":ye("toggle",t),i=r;break;case"input":am(t,r),i=rh(t,r),ye("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Se({},r,{value:void 0}),ye("invalid",t);break;case"textarea":um(t,r),i=oh(t,r),ye("invalid",t);break;default:i=r}lh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?a_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&s_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Eo(t,u):typeof u=="number"&&Eo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(wo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ye("scroll",t):u!=null&&Ed(t,s,u,o))}switch(n){case"input":La(t),lm(t,r,!1);break;case"textarea":La(t),cm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+pr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?zi(t,!!r.multiple,s,!1):r.defaultValue!=null&&zi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Vl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ot(e),null;case 6:if(t&&e.stateNode!=null)Pv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=Mr(No.current),Mr(cn.current),Ha(e)){if(r=e.stateNode,n=e.memoizedProps,r[on]=e,(s=r.nodeValue!==n)&&(t=Ct,t!==null))switch(t.tag){case 3:qa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&qa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[on]=e,e.stateNode=r}return ot(e),null;case 13:if(ve(Ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ee&&bt!==null&&e.mode&1&&!(e.flags&128))G_(),Ji(),e.flags|=98560,s=!1;else if(s=Ha(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[on]=e}else Ji(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ot(e),s=!1}else Gt!==null&&($h(Gt),Gt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ie.current&1?Be===0&&(Be=3):rf())),e.updateQueue!==null&&(e.flags|=4),ot(e),null);case 4:return es(),Vh(t,e),t===null&&xo(e.stateNode.containerInfo),ot(e),null;case 10:return zd(e.type._context),ot(e),null;case 17:return kt(e.type)&&Ll(),ot(e),null;case 19:if(ve(Ie),s=e.memoizedState,s===null)return ot(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)$s(s,!1);else{if(Be!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=$l(t),o!==null){for(e.flags|=128,$s(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return me(Ie,Ie.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ne()>ns&&(e.flags|=128,r=!0,$s(s,!1),e.lanes=4194304)}else{if(!r)if(t=$l(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),$s(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ee)return ot(e),null}else 2*Ne()-s.renderingStartTime>ns&&n!==1073741824&&(e.flags|=128,r=!0,$s(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ne(),e.sibling=null,n=Ie.current,me(Ie,r?n&1|2:n&1),e):(ot(e),null);case 22:case 23:return nf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?xt&1073741824&&(ot(e),e.subtreeFlags&6&&(e.flags|=8192)):ot(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function n1(t,e){switch(Ld(e),e.tag){case 1:return kt(e.type)&&Ll(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return es(),ve(It),ve(ht),Hd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return qd(e),null;case 13:if(ve(Ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));Ji()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ve(Ie),null;case 4:return es(),null;case 10:return zd(e.type._context),null;case 22:case 23:return nf(),null;case 24:return null;default:return null}}var Ga=!1,ut=!1,r1=typeof WeakSet=="function"?WeakSet:Set,$=null;function Mi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){be(t,e,r)}else n.current=null}function Lh(t,e,n){try{n()}catch(r){be(t,e,r)}}var Zm=!1;function i1(t,e){if(vh=Nl,t=V_(),Od(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,m=t,_=null;t:for(;;){for(var A;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(A=m.firstChild)!==null;)_=m,m=A;for(;;){if(m===t)break t;if(_===n&&++c===i&&(l=o),_===s&&++f===r&&(u=o),(A=m.nextSibling)!==null)break;m=_,_=m.parentNode}m=A}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(wh={focusedElem:t,selectionRange:n},Nl=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var C=x.memoizedProps,O=x.memoizedState,S=e.stateNode,w=S.getSnapshotBeforeUpdate(e.elementType===e.type?C:Wt(e.type,C),O);S.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var T=e.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(N){be(e,e.return,N)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return x=Zm,Zm=!1,x}function uo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Lh(e,n,s)}i=i.next}while(i!==r)}}function ku(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Mh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Cv(t){var e=t.alternate;e!==null&&(t.alternate=null,Cv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[on],delete e[Po],delete e[Ih],delete e[zI],delete e[BI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Nv(t){return t.tag===5||t.tag===3||t.tag===4}function eg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Nv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Uh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Vl));else if(r!==4&&(t=t.child,t!==null))for(Uh(t,e,n),t=t.sibling;t!==null;)Uh(t,e,n),t=t.sibling}function Fh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Fh(t,e,n),t=t.sibling;t!==null;)Fh(t,e,n),t=t.sibling}var Ge=null,Kt=!1;function $n(t,e,n){for(n=n.child;n!==null;)Dv(t,e,n),n=n.sibling}function Dv(t,e,n){if(un&&typeof un.onCommitFiberUnmount=="function")try{un.onCommitFiberUnmount(gu,n)}catch{}switch(n.tag){case 5:ut||Mi(n,e);case 6:var r=Ge,i=Kt;Ge=null,$n(t,e,n),Ge=r,Kt=i,Ge!==null&&(Kt?(t=Ge,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ge.removeChild(n.stateNode));break;case 18:Ge!==null&&(Kt?(t=Ge,n=n.stateNode,t.nodeType===8?Ac(t.parentNode,n):t.nodeType===1&&Ac(t,n),So(t)):Ac(Ge,n.stateNode));break;case 4:r=Ge,i=Kt,Ge=n.stateNode.containerInfo,Kt=!0,$n(t,e,n),Ge=r,Kt=i;break;case 0:case 11:case 14:case 15:if(!ut&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Lh(n,e,o),i=i.next}while(i!==r)}$n(t,e,n);break;case 1:if(!ut&&(Mi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){be(n,e,l)}$n(t,e,n);break;case 21:$n(t,e,n);break;case 22:n.mode&1?(ut=(r=ut)||n.memoizedState!==null,$n(t,e,n),ut=r):$n(t,e,n);break;default:$n(t,e,n)}}function tg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new r1),e.forEach(function(r){var i=f1.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ht(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ge=l.stateNode,Kt=!1;break e;case 3:Ge=l.stateNode.containerInfo,Kt=!0;break e;case 4:Ge=l.stateNode.containerInfo,Kt=!0;break e}l=l.return}if(Ge===null)throw Error(F(160));Dv(s,o,i),Ge=null,Kt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){be(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ov(e,t),e=e.sibling}function Ov(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ht(e,t),nn(t),r&4){try{uo(3,t,t.return),ku(3,t)}catch(C){be(t,t.return,C)}try{uo(5,t,t.return)}catch(C){be(t,t.return,C)}}break;case 1:Ht(e,t),nn(t),r&512&&n!==null&&Mi(n,n.return);break;case 5:if(Ht(e,t),nn(t),r&512&&n!==null&&Mi(n,n.return),t.flags&32){var i=t.stateNode;try{Eo(i,"")}catch(C){be(t,t.return,C)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&n_(i,s),uh(l,o);var c=uh(l,s);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?a_(i,m):f==="dangerouslySetInnerHTML"?s_(i,m):f==="children"?Eo(i,m):Ed(i,f,m,c)}switch(l){case"input":ih(i,s);break;case"textarea":r_(i,s);break;case"select":var _=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var A=s.value;A!=null?zi(i,!!s.multiple,A,!1):_!==!!s.multiple&&(s.defaultValue!=null?zi(i,!!s.multiple,s.defaultValue,!0):zi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Po]=s}catch(C){be(t,t.return,C)}}break;case 6:if(Ht(e,t),nn(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(C){be(t,t.return,C)}}break;case 3:if(Ht(e,t),nn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{So(e.containerInfo)}catch(C){be(t,t.return,C)}break;case 4:Ht(e,t),nn(t);break;case 13:Ht(e,t),nn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ef=Ne())),r&4&&tg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(ut=(c=ut)||f,Ht(e,t),ut=c):Ht(e,t),nn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for($=t,f=t.child;f!==null;){for(m=$=f;$!==null;){switch(_=$,A=_.child,_.tag){case 0:case 11:case 14:case 15:uo(4,_,_.return);break;case 1:Mi(_,_.return);var x=_.stateNode;if(typeof x.componentWillUnmount=="function"){r=_,n=_.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(C){be(r,n,C)}}break;case 5:Mi(_,_.return);break;case 22:if(_.memoizedState!==null){rg(m);continue}}A!==null?(A.return=_,$=A):rg(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=o_("display",o))}catch(C){be(t,t.return,C)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(C){be(t,t.return,C)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ht(e,t),nn(t),r&4&&tg(t);break;case 21:break;default:Ht(e,t),nn(t)}}function nn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Nv(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Eo(i,""),r.flags&=-33);var s=eg(t);Fh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=eg(t);Uh(t,l,o);break;default:throw Error(F(161))}}catch(u){be(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function s1(t,e,n){$=t,Vv(t)}function Vv(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ga;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||ut;l=Ga;var c=ut;if(Ga=o,(ut=u)&&!c)for($=i;$!==null;)o=$,u=o.child,o.tag===22&&o.memoizedState!==null?ig(i):u!==null?(u.return=o,$=u):ig(i);for(;s!==null;)$=s,Vv(s),s=s.sibling;$=i,Ga=l,ut=c}ng(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):ng(t)}}function ng(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ut||ku(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ut)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Wt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&zm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}zm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&So(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}ut||e.flags&512&&Mh(e)}catch(_){be(e,e.return,_)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function rg(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function ig(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ku(4,e)}catch(u){be(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){be(e,i,u)}}var s=e.return;try{Mh(e)}catch(u){be(e,s,u)}break;case 5:var o=e.return;try{Mh(e)}catch(u){be(e,o,u)}}}catch(u){be(e,e.return,u)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var o1=Math.ceil,Wl=Fn.ReactCurrentDispatcher,Jd=Fn.ReactCurrentOwner,zt=Fn.ReactCurrentBatchConfig,oe=0,He=null,Ve=null,Xe=0,xt=0,Ui=Tr(0),Be=0,Lo=null,Gr=0,Su=0,Zd=0,co=null,Et=null,ef=0,ns=1/0,En=null,Kl=!1,zh=null,lr=null,Qa=!1,tr=null,Gl=0,ho=0,Bh=null,ml=-1,gl=0;function yt(){return oe&6?Ne():ml!==-1?ml:ml=Ne()}function ur(t){return t.mode&1?oe&2&&Xe!==0?Xe&-Xe:$I.transition!==null?(gl===0&&(gl=v_()),gl):(t=he,t!==0||(t=window.event,t=t===void 0?16:A_(t.type)),t):1}function Xt(t,e,n,r){if(50<ho)throw ho=0,Bh=null,Error(F(185));Qo(t,n,r),(!(oe&2)||t!==He)&&(t===He&&(!(oe&2)&&(Su|=n),Be===4&&Gn(t,Xe)),St(t,r),n===1&&oe===0&&!(e.mode&1)&&(ns=Ne()+500,Eu&&Ir()))}function St(t,e){var n=t.callbackNode;$T(t,e);var r=Cl(t,t===He?Xe:0);if(r===0)n!==null&&fm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&fm(n),e===1)t.tag===0?jI(sg.bind(null,t)):H_(sg.bind(null,t)),UI(function(){!(oe&6)&&Ir()}),n=null;else{switch(w_(r)){case 1:n=Ad;break;case 4:n=y_;break;case 16:n=Pl;break;case 536870912:n=__;break;default:n=Pl}n=$v(n,Lv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Lv(t,e){if(ml=-1,gl=0,oe&6)throw Error(F(327));var n=t.callbackNode;if(Hi()&&t.callbackNode!==n)return null;var r=Cl(t,t===He?Xe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ql(t,r);else{e=r;var i=oe;oe|=2;var s=Uv();(He!==t||Xe!==e)&&(En=null,ns=Ne()+500,Fr(t,e));do try{u1();break}catch(l){Mv(t,l)}while(!0);Fd(),Wl.current=s,oe=i,Ve!==null?e=0:(He=null,Xe=0,e=Be)}if(e!==0){if(e===2&&(i=ph(t),i!==0&&(r=i,e=jh(t,i))),e===1)throw n=Lo,Fr(t,0),Gn(t,r),St(t,Ne()),n;if(e===6)Gn(t,r);else{if(i=t.current.alternate,!(r&30)&&!a1(i)&&(e=Ql(t,r),e===2&&(s=ph(t),s!==0&&(r=s,e=jh(t,s))),e===1))throw n=Lo,Fr(t,0),Gn(t,r),St(t,Ne()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Dr(t,Et,En);break;case 3:if(Gn(t,r),(r&130023424)===r&&(e=ef+500-Ne(),10<e)){if(Cl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){yt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Th(Dr.bind(null,t,Et,En),e);break}Dr(t,Et,En);break;case 4:if(Gn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Yt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*o1(r/1960))-r,10<r){t.timeoutHandle=Th(Dr.bind(null,t,Et,En),r);break}Dr(t,Et,En);break;case 5:Dr(t,Et,En);break;default:throw Error(F(329))}}}return St(t,Ne()),t.callbackNode===n?Lv.bind(null,t):null}function jh(t,e){var n=co;return t.current.memoizedState.isDehydrated&&(Fr(t,e).flags|=256),t=Ql(t,e),t!==2&&(e=Et,Et=n,e!==null&&$h(e)),t}function $h(t){Et===null?Et=t:Et.push.apply(Et,t)}function a1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Jt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Gn(t,e){for(e&=~Zd,e&=~Su,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Yt(e),r=1<<n;t[n]=-1,e&=~r}}function sg(t){if(oe&6)throw Error(F(327));Hi();var e=Cl(t,0);if(!(e&1))return St(t,Ne()),null;var n=Ql(t,e);if(t.tag!==0&&n===2){var r=ph(t);r!==0&&(e=r,n=jh(t,r))}if(n===1)throw n=Lo,Fr(t,0),Gn(t,e),St(t,Ne()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Dr(t,Et,En),St(t,Ne()),null}function tf(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(ns=Ne()+500,Eu&&Ir())}}function Qr(t){tr!==null&&tr.tag===0&&!(oe&6)&&Hi();var e=oe;oe|=1;var n=zt.transition,r=he;try{if(zt.transition=null,he=1,t)return t()}finally{he=r,zt.transition=n,oe=e,!(oe&6)&&Ir()}}function nf(){xt=Ui.current,ve(Ui)}function Fr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,MI(n)),Ve!==null)for(n=Ve.return;n!==null;){var r=n;switch(Ld(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ll();break;case 3:es(),ve(It),ve(ht),Hd();break;case 5:qd(r);break;case 4:es();break;case 13:ve(Ie);break;case 19:ve(Ie);break;case 10:zd(r.type._context);break;case 22:case 23:nf()}n=n.return}if(He=t,Ve=t=cr(t.current,null),Xe=xt=e,Be=0,Lo=null,Zd=Su=Gr=0,Et=co=null,Lr!==null){for(e=0;e<Lr.length;e++)if(n=Lr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Lr=null}return t}function Mv(t,e){do{var n=Ve;try{if(Fd(),dl.current=Hl,ql){for(var r=ke.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ql=!1}if(Kr=0,qe=ze=ke=null,lo=!1,Do=0,Jd.current=null,n===null||n.return===null){Be=1,Lo=e,Ve=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Xe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var _=f.alternate;_?(f.updateQueue=_.updateQueue,f.memoizedState=_.memoizedState,f.lanes=_.lanes):(f.updateQueue=null,f.memoizedState=null)}var A=Wm(o);if(A!==null){A.flags&=-257,Km(A,o,l,s,e),A.mode&1&&Hm(s,c,e),e=A,u=c;var x=e.updateQueue;if(x===null){var C=new Set;C.add(u),e.updateQueue=C}else x.add(u);break e}else{if(!(e&1)){Hm(s,c,e),rf();break e}u=Error(F(426))}}else if(Ee&&l.mode&1){var O=Wm(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),Km(O,o,l,s,e),Md(ts(u,l));break e}}s=u=ts(u,l),Be!==4&&(Be=2),co===null?co=[s]:co.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var S=wv(s,u,e);Fm(s,S);break e;case 1:l=u;var w=s.type,T=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(lr===null||!lr.has(T)))){s.flags|=65536,e&=-e,s.lanes|=e;var N=Ev(s,l,e);Fm(s,N);break e}}s=s.return}while(s!==null)}zv(n)}catch(U){e=U,Ve===n&&n!==null&&(Ve=n=n.return);continue}break}while(!0)}function Uv(){var t=Wl.current;return Wl.current=Hl,t===null?Hl:t}function rf(){(Be===0||Be===3||Be===2)&&(Be=4),He===null||!(Gr&268435455)&&!(Su&268435455)||Gn(He,Xe)}function Ql(t,e){var n=oe;oe|=2;var r=Uv();(He!==t||Xe!==e)&&(En=null,Fr(t,e));do try{l1();break}catch(i){Mv(t,i)}while(!0);if(Fd(),oe=n,Wl.current=r,Ve!==null)throw Error(F(261));return He=null,Xe=0,Be}function l1(){for(;Ve!==null;)Fv(Ve)}function u1(){for(;Ve!==null&&!OT();)Fv(Ve)}function Fv(t){var e=jv(t.alternate,t,xt);t.memoizedProps=t.pendingProps,e===null?zv(t):Ve=e,Jd.current=null}function zv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=n1(n,e),n!==null){n.flags&=32767,Ve=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Be=6,Ve=null;return}}else if(n=t1(n,e,xt),n!==null){Ve=n;return}if(e=e.sibling,e!==null){Ve=e;return}Ve=e=t}while(e!==null);Be===0&&(Be=5)}function Dr(t,e,n){var r=he,i=zt.transition;try{zt.transition=null,he=1,c1(t,e,n,r)}finally{zt.transition=i,he=r}return null}function c1(t,e,n,r){do Hi();while(tr!==null);if(oe&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(qT(t,s),t===He&&(Ve=He=null,Xe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Qa||(Qa=!0,$v(Pl,function(){return Hi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=zt.transition,zt.transition=null;var o=he;he=1;var l=oe;oe|=4,Jd.current=null,i1(t,n),Ov(n,t),PI(wh),Nl=!!vh,wh=vh=null,t.current=n,s1(n),VT(),oe=l,he=o,zt.transition=s}else t.current=n;if(Qa&&(Qa=!1,tr=t,Gl=i),s=t.pendingLanes,s===0&&(lr=null),UT(n.stateNode),St(t,Ne()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Kl)throw Kl=!1,t=zh,zh=null,t;return Gl&1&&t.tag!==0&&Hi(),s=t.pendingLanes,s&1?t===Bh?ho++:(ho=0,Bh=t):ho=0,Ir(),null}function Hi(){if(tr!==null){var t=w_(Gl),e=zt.transition,n=he;try{if(zt.transition=null,he=16>t?16:t,tr===null)var r=!1;else{if(t=tr,tr=null,Gl=0,oe&6)throw Error(F(331));var i=oe;for(oe|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for($=c;$!==null;){var f=$;switch(f.tag){case 0:case 11:case 15:uo(8,f,s)}var m=f.child;if(m!==null)m.return=f,$=m;else for(;$!==null;){f=$;var _=f.sibling,A=f.return;if(Cv(f),f===c){$=null;break}if(_!==null){_.return=A,$=_;break}$=A}}}var x=s.alternate;if(x!==null){var C=x.child;if(C!==null){x.child=null;do{var O=C.sibling;C.sibling=null,C=O}while(C!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:uo(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,$=S;break e}$=s.return}}var w=t.current;for($=w;$!==null;){o=$;var T=o.child;if(o.subtreeFlags&2064&&T!==null)T.return=o,$=T;else e:for(o=w;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ku(9,l)}}catch(U){be(l,l.return,U)}if(l===o){$=null;break e}var N=l.sibling;if(N!==null){N.return=l.return,$=N;break e}$=l.return}}if(oe=i,Ir(),un&&typeof un.onPostCommitFiberRoot=="function")try{un.onPostCommitFiberRoot(gu,t)}catch{}r=!0}return r}finally{he=n,zt.transition=e}}return!1}function og(t,e,n){e=ts(n,e),e=wv(t,e,1),t=ar(t,e,1),e=yt(),t!==null&&(Qo(t,1,e),St(t,e))}function be(t,e,n){if(t.tag===3)og(t,t,n);else for(;e!==null;){if(e.tag===3){og(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(lr===null||!lr.has(r))){t=ts(n,t),t=Ev(e,t,1),e=ar(e,t,1),t=yt(),e!==null&&(Qo(e,1,t),St(e,t));break}}e=e.return}}function h1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=yt(),t.pingedLanes|=t.suspendedLanes&n,He===t&&(Xe&n)===n&&(Be===4||Be===3&&(Xe&130023424)===Xe&&500>Ne()-ef?Fr(t,0):Zd|=n),St(t,e)}function Bv(t,e){e===0&&(t.mode&1?(e=Fa,Fa<<=1,!(Fa&130023424)&&(Fa=4194304)):e=1);var n=yt();t=Dn(t,e),t!==null&&(Qo(t,e,n),St(t,n))}function d1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Bv(t,n)}function f1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),Bv(t,n)}var jv;jv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||It.current)Tt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Tt=!1,e1(t,e,n);Tt=!!(t.flags&131072)}else Tt=!1,Ee&&e.flags&1048576&&W_(e,Fl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;pl(t,e),t=e.pendingProps;var i=Xi(e,ht.current);qi(e,n),i=Kd(null,e,r,t,i,n);var s=Gd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,kt(r)?(s=!0,Ml(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,jd(e),i.updater=Iu,e.stateNode=i,i._reactInternals=e,bh(e,r,t,n),e=Nh(null,e,r,!0,s,n)):(e.tag=0,Ee&&s&&Vd(e),gt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(pl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=m1(r),t=Wt(r,t),i){case 0:e=Ch(null,e,r,t,n);break e;case 1:e=Ym(null,e,r,t,n);break e;case 11:e=Gm(null,e,r,t,n);break e;case 14:e=Qm(null,e,r,Wt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),Ch(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),Ym(t,e,r,i,n);case 3:e:{if(Sv(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,J_(t,e),jl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ts(Error(F(423)),e),e=Xm(t,e,r,n,i);break e}else if(r!==i){i=ts(Error(F(424)),e),e=Xm(t,e,r,n,i);break e}else for(bt=or(e.stateNode.containerInfo.firstChild),Ct=e,Ee=!0,Gt=null,n=Y_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ji(),r===i){e=On(t,e,n);break e}gt(t,e,r,n)}e=e.child}return e;case 5:return Z_(e),t===null&&Ah(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Eh(r,i)?o=null:s!==null&&Eh(r,s)&&(e.flags|=32),kv(t,e),gt(t,e,o,n),e.child;case 6:return t===null&&Ah(e),null;case 13:return Av(t,e,n);case 4:return $d(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Zi(e,null,r,n):gt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),Gm(t,e,r,i,n);case 7:return gt(t,e,e.pendingProps,n),e.child;case 8:return gt(t,e,e.pendingProps.children,n),e.child;case 12:return gt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,me(zl,r._currentValue),r._currentValue=o,s!==null)if(Jt(s.value,o)){if(s.children===i.children&&!It.current){e=On(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=xn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Rh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Rh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}gt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,qi(e,n),i=Bt(i),r=r(i),e.flags|=1,gt(t,e,r,n),e.child;case 14:return r=e.type,i=Wt(r,e.pendingProps),i=Wt(r.type,i),Qm(t,e,r,i,n);case 15:return Tv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),pl(t,e),e.tag=1,kt(r)?(t=!0,Ml(e)):t=!1,qi(e,n),vv(e,r,i),bh(e,r,i,n),Nh(null,e,r,!0,t,n);case 19:return Rv(t,e,n);case 22:return Iv(t,e,n)}throw Error(F(156,e.tag))};function $v(t,e){return g_(t,e)}function p1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(t,e,n,r){return new p1(t,e,n,r)}function sf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function m1(t){if(typeof t=="function")return sf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Id)return 11;if(t===kd)return 14}return 2}function cr(t,e){var n=t.alternate;return n===null?(n=Ft(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function yl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")sf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case xi:return zr(n.children,i,s,e);case Td:o=8,i|=8;break;case Zc:return t=Ft(12,n,e,i|2),t.elementType=Zc,t.lanes=s,t;case eh:return t=Ft(13,n,e,i),t.elementType=eh,t.lanes=s,t;case th:return t=Ft(19,n,e,i),t.elementType=th,t.lanes=s,t;case Zy:return Au(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Xy:o=10;break e;case Jy:o=9;break e;case Id:o=11;break e;case kd:o=14;break e;case Hn:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Ft(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function zr(t,e,n,r){return t=Ft(7,t,r,e),t.lanes=n,t}function Au(t,e,n,r){return t=Ft(22,t,r,e),t.elementType=Zy,t.lanes=n,t.stateNode={isHidden:!1},t}function Oc(t,e,n){return t=Ft(6,t,null,e),t.lanes=n,t}function Vc(t,e,n){return e=Ft(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function g1(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mc(0),this.expirationTimes=mc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function of(t,e,n,r,i,s,o,l,u){return t=new g1(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ft(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},jd(s),t}function y1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ri,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function qv(t){if(!t)return mr;t=t._reactInternals;e:{if(ri(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(kt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(kt(n))return q_(t,n,e)}return e}function Hv(t,e,n,r,i,s,o,l,u){return t=of(n,r,!0,t,i,s,o,l,u),t.context=qv(null),n=t.current,r=yt(),i=ur(n),s=xn(r,i),s.callback=e??null,ar(n,s,i),t.current.lanes=i,Qo(t,i,r),St(t,r),t}function Ru(t,e,n,r){var i=e.current,s=yt(),o=ur(i);return n=qv(n),e.context===null?e.context=n:e.pendingContext=n,e=xn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ar(i,e,o),t!==null&&(Xt(t,i,o,s),hl(t,i,o)),o}function Yl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ag(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function af(t,e){ag(t,e),(t=t.alternate)&&ag(t,e)}function _1(){return null}var Wv=typeof reportError=="function"?reportError:function(t){console.error(t)};function lf(t){this._internalRoot=t}xu.prototype.render=lf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Ru(t,e,null,null)};xu.prototype.unmount=lf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Qr(function(){Ru(null,t,null,null)}),e[Nn]=null}};function xu(t){this._internalRoot=t}xu.prototype.unstable_scheduleHydration=function(t){if(t){var e=I_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Kn.length&&e!==0&&e<Kn[n].priority;n++);Kn.splice(n,0,t),n===0&&S_(t)}};function uf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function bu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function lg(){}function v1(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Yl(o);s.call(c)}}var o=Hv(e,r,t,0,null,!1,!1,"",lg);return t._reactRootContainer=o,t[Nn]=o.current,xo(t.nodeType===8?t.parentNode:t),Qr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Yl(u);l.call(c)}}var u=of(t,0,!1,null,null,!1,!1,"",lg);return t._reactRootContainer=u,t[Nn]=u.current,xo(t.nodeType===8?t.parentNode:t),Qr(function(){Ru(e,u,n,r)}),u}function Pu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Yl(o);l.call(u)}}Ru(e,o,t,i)}else o=v1(n,e,t,i,r);return Yl(o)}E_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Qs(e.pendingLanes);n!==0&&(Rd(e,n|1),St(e,Ne()),!(oe&6)&&(ns=Ne()+500,Ir()))}break;case 13:Qr(function(){var r=Dn(t,1);if(r!==null){var i=yt();Xt(r,t,1,i)}}),af(t,1)}};xd=function(t){if(t.tag===13){var e=Dn(t,134217728);if(e!==null){var n=yt();Xt(e,t,134217728,n)}af(t,134217728)}};T_=function(t){if(t.tag===13){var e=ur(t),n=Dn(t,e);if(n!==null){var r=yt();Xt(n,t,e,r)}af(t,e)}};I_=function(){return he};k_=function(t,e){var n=he;try{return he=t,e()}finally{he=n}};hh=function(t,e,n){switch(e){case"input":if(ih(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=wu(r);if(!i)throw Error(F(90));t_(r),ih(r,i)}}}break;case"textarea":r_(t,n);break;case"select":e=n.value,e!=null&&zi(t,!!n.multiple,e,!1)}};c_=tf;h_=Qr;var w1={usingClientEntryPoint:!1,Events:[Xo,Ni,wu,l_,u_,tf]},qs={findFiberByHostInstance:Vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},E1={bundleType:qs.bundleType,version:qs.version,rendererPackageName:qs.rendererPackageName,rendererConfig:qs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=p_(t),t===null?null:t.stateNode},findFiberByHostInstance:qs.findFiberByHostInstance||_1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ya=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ya.isDisabled&&Ya.supportsFiber)try{gu=Ya.inject(E1),un=Ya}catch{}}Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=w1;Dt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!uf(e))throw Error(F(200));return y1(t,e,null,n)};Dt.createRoot=function(t,e){if(!uf(t))throw Error(F(299));var n=!1,r="",i=Wv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=of(t,1,!1,null,null,n,!1,r,i),t[Nn]=e.current,xo(t.nodeType===8?t.parentNode:t),new lf(e)};Dt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=p_(e),t=t===null?null:t.stateNode,t};Dt.flushSync=function(t){return Qr(t)};Dt.hydrate=function(t,e,n){if(!bu(e))throw Error(F(200));return Pu(null,t,e,!0,n)};Dt.hydrateRoot=function(t,e,n){if(!uf(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Wv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Hv(e,null,t,1,n??null,i,!1,s,o),t[Nn]=e.current,xo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new xu(e)};Dt.render=function(t,e,n){if(!bu(e))throw Error(F(200));return Pu(null,t,e,!1,n)};Dt.unmountComponentAtNode=function(t){if(!bu(t))throw Error(F(40));return t._reactRootContainer?(Qr(function(){Pu(null,null,t,!1,function(){t._reactRootContainer=null,t[Nn]=null})}),!0):!1};Dt.unstable_batchedUpdates=tf;Dt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!bu(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return Pu(t,e,n,!1,r)};Dt.version="18.3.1-next-f1338f8080-20240426";function Kv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kv)}catch(t){console.error(t)}}Kv(),Ky.exports=Dt;var T1=Ky.exports,ug=T1;Xc.createRoot=ug.createRoot,Xc.hydrateRoot=ug.hydrateRoot;/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var I1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Te=(t,e)=>{const n=ee.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:l="",children:u,...c},f)=>ee.createElement("svg",{ref:f,...I1,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${k1(t)}`,l].join(" "),...c},[...e.map(([m,_])=>ee.createElement(m,_)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=Te("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=Te("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=Te("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=Te("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=Te("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=Te("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=Te("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=Te("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=Te("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=Te("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=Te("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=Te("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=Te("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=Te("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=Te("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=Te("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=Te("Sliders",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=Te("Ticket",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=Te("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=Te("Type",[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=Te("UploadCloud",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M12 12v9",key:"192myk"}],["path",{d:"m16 16-4-4-4 4",key:"119tzi"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=Te("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fo=Te("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=Te("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]);var hg={};/**
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
 */const Yv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},q1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Xv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let _=(l&15)<<2|c>>6,A=c&63;u||(A=64,o||(_=64)),r.push(n[f],n[m],n[_],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Yv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):q1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||m==null)throw new H1;const _=s<<2|l>>4;if(r.push(_),c!==64){const A=l<<4&240|c>>2;if(r.push(A),m!==64){const x=c<<6&192|m;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class H1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const W1=function(t){const e=Yv(t);return Xv.encodeByteArray(e,!0)},Jl=function(t){return W1(t).replace(/\./g,"")},Jv=function(t){try{return Xv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function K1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const G1=()=>K1().__FIREBASE_DEFAULTS__,Q1=()=>{if(typeof process>"u"||typeof hg>"u")return;const t=hg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Y1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Jv(t[1]);return e&&JSON.parse(e)},Cu=()=>{try{return G1()||Q1()||Y1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Zv=t=>{var e,n;return(n=(e=Cu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},e0=t=>{const e=Zv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},t0=()=>{var t;return(t=Cu())===null||t===void 0?void 0:t.config},n0=t=>{var e;return(e=Cu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class X1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function r0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Jl(JSON.stringify(n)),Jl(JSON.stringify(o)),""].join(".")}/**
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
 */function dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function J1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dt())}function Z1(){var t;const e=(t=Cu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ek(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function tk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function nk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rk(){const t=dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ik(){return!Z1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function sk(){try{return typeof indexedDB=="object"}catch{return!1}}function ok(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const ak="FirebaseError";class _n extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ak,Object.setPrototypeOf(this,_n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zo.prototype.create)}}class Zo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?lk(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new _n(i,l,r)}}function lk(t,e){return t.replace(uk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const uk=/\{\$([^}]+)}/g;function ck(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Zl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(dg(s)&&dg(o)){if(!Zl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function dg(t){return t!==null&&typeof t=="object"}/**
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
 */function ea(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Xs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Js(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function hk(t,e){const n=new dk(t,e);return n.subscribe.bind(n)}class dk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");fk(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Lc),i.error===void 0&&(i.error=Lc),i.complete===void 0&&(i.complete=Lc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Lc(){}/**
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
 */function Me(t){return t&&t._delegate?t._delegate:t}class gr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Or="[DEFAULT]";/**
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
 */class pk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new X1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gk(e))try{this.getOrInitializeService({instanceIdentifier:Or})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Or){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Or){return this.instances.has(e)}getOptions(e=Or){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:mk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Or){return this.component?this.component.multipleInstances?e:Or:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mk(t){return t===Or?void 0:t}function gk(t){return t.instantiationMode==="EAGER"}/**
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
 */class yk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new pk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const _k={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},vk=re.INFO,wk={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},Ek=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=wk[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cf{constructor(e){this.name=e,this._logLevel=vk,this._logHandler=Ek,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_k[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const Tk=(t,e)=>e.some(n=>t instanceof n);let fg,pg;function Ik(){return fg||(fg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kk(){return pg||(pg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const i0=new WeakMap,qh=new WeakMap,s0=new WeakMap,Mc=new WeakMap,hf=new WeakMap;function Sk(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(hr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&i0.set(n,t)}).catch(()=>{}),hf.set(e,t),e}function Ak(t){if(qh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});qh.set(t,e)}let Hh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||s0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Rk(t){Hh=t(Hh)}function xk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Uc(this),e,...n);return s0.set(r,e.sort?e.sort():[e]),hr(r)}:kk().includes(t)?function(...e){return t.apply(Uc(this),e),hr(i0.get(this))}:function(...e){return hr(t.apply(Uc(this),e))}}function bk(t){return typeof t=="function"?xk(t):(t instanceof IDBTransaction&&Ak(t),Tk(t,Ik())?new Proxy(t,Hh):t)}function hr(t){if(t instanceof IDBRequest)return Sk(t);if(Mc.has(t))return Mc.get(t);const e=bk(t);return e!==t&&(Mc.set(t,e),hf.set(e,t)),e}const Uc=t=>hf.get(t);function Pk(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=hr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(hr(o.result),u.oldVersion,u.newVersion,hr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const Ck=["get","getKey","getAll","getAllKeys","count"],Nk=["put","add","delete","clear"],Fc=new Map;function mg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fc.get(e))return Fc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Nk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ck.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Fc.set(e,s),s}Rk(t=>({...t,get:(e,n,r)=>mg(e,n)||t.get(e,n,r),has:(e,n)=>!!mg(e,n)||t.has(e,n)}));/**
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
 */class Dk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ok(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ok(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wh="@firebase/app",gg="0.10.13";/**
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
 */const Vn=new cf("@firebase/app"),Vk="@firebase/app-compat",Lk="@firebase/analytics-compat",Mk="@firebase/analytics",Uk="@firebase/app-check-compat",Fk="@firebase/app-check",zk="@firebase/auth",Bk="@firebase/auth-compat",jk="@firebase/database",$k="@firebase/data-connect",qk="@firebase/database-compat",Hk="@firebase/functions",Wk="@firebase/functions-compat",Kk="@firebase/installations",Gk="@firebase/installations-compat",Qk="@firebase/messaging",Yk="@firebase/messaging-compat",Xk="@firebase/performance",Jk="@firebase/performance-compat",Zk="@firebase/remote-config",eS="@firebase/remote-config-compat",tS="@firebase/storage",nS="@firebase/storage-compat",rS="@firebase/firestore",iS="@firebase/vertexai-preview",sS="@firebase/firestore-compat",oS="firebase",aS="10.14.1";/**
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
 */const Kh="[DEFAULT]",lS={[Wh]:"fire-core",[Vk]:"fire-core-compat",[Mk]:"fire-analytics",[Lk]:"fire-analytics-compat",[Fk]:"fire-app-check",[Uk]:"fire-app-check-compat",[zk]:"fire-auth",[Bk]:"fire-auth-compat",[jk]:"fire-rtdb",[$k]:"fire-data-connect",[qk]:"fire-rtdb-compat",[Hk]:"fire-fn",[Wk]:"fire-fn-compat",[Kk]:"fire-iid",[Gk]:"fire-iid-compat",[Qk]:"fire-fcm",[Yk]:"fire-fcm-compat",[Xk]:"fire-perf",[Jk]:"fire-perf-compat",[Zk]:"fire-rc",[eS]:"fire-rc-compat",[tS]:"fire-gcs",[nS]:"fire-gcs-compat",[rS]:"fire-fst",[sS]:"fire-fst-compat",[iS]:"fire-vertex","fire-js":"fire-js",[oS]:"fire-js-all"};/**
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
 */const eu=new Map,uS=new Map,Gh=new Map;function yg(t,e){try{t.container.addComponent(e)}catch(n){Vn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Yr(t){const e=t.name;if(Gh.has(e))return Vn.debug(`There were multiple attempts to register component ${e}.`),!1;Gh.set(e,t);for(const n of eu.values())yg(n,t);for(const n of uS.values())yg(n,t);return!0}function Nu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function an(t){return t.settings!==void 0}/**
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
 */const cS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},dr=new Zo("app","Firebase",cS);/**
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
 */class hS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dr.create("app-deleted",{appName:this._name})}}/**
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
 */const ii=aS;function o0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Kh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw dr.create("bad-app-name",{appName:String(i)});if(n||(n=t0()),!n)throw dr.create("no-options");const s=eu.get(i);if(s){if(Zl(n,s.options)&&Zl(r,s.config))return s;throw dr.create("duplicate-app",{appName:i})}const o=new yk(i);for(const u of Gh.values())o.addComponent(u);const l=new hS(n,r,o);return eu.set(i,l),l}function df(t=Kh){const e=eu.get(t);if(!e&&t===Kh&&t0())return o0();if(!e)throw dr.create("no-app",{appName:t});return e}function hn(t,e,n){var r;let i=(r=lS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vn.warn(l.join(" "));return}Yr(new gr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const dS="firebase-heartbeat-database",fS=1,Mo="firebase-heartbeat-store";let zc=null;function a0(){return zc||(zc=Pk(dS,fS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Mo)}catch(n){console.warn(n)}}}}).catch(t=>{throw dr.create("idb-open",{originalErrorMessage:t.message})})),zc}async function pS(t){try{const n=(await a0()).transaction(Mo),r=await n.objectStore(Mo).get(l0(t));return await n.done,r}catch(e){if(e instanceof _n)Vn.warn(e.message);else{const n=dr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Vn.warn(n.message)}}}async function _g(t,e){try{const r=(await a0()).transaction(Mo,"readwrite");await r.objectStore(Mo).put(e,l0(t)),await r.done}catch(n){if(n instanceof _n)Vn.warn(n.message);else{const r=dr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Vn.warn(r.message)}}}function l0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const mS=1024,gS=30*24*60*60*1e3;class yS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new vS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=vg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=gS}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Vn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=vg(),{heartbeatsToSend:r,unsentEntries:i}=_S(this._heartbeatsCache.heartbeats),s=Jl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Vn.warn(n),""}}}function vg(){return new Date().toISOString().substring(0,10)}function _S(t,e=mS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),wg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),wg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class vS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sk()?ok().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await pS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _g(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _g(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function wg(t){return Jl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function wS(t){Yr(new gr("platform-logger",e=>new Dk(e),"PRIVATE")),Yr(new gr("heartbeat",e=>new yS(e),"PRIVATE")),hn(Wh,gg,t),hn(Wh,gg,"esm2017"),hn("fire-js","")}wS("");var ES="firebase",TS="10.14.1";/**
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
 */hn(ES,TS,"app");function ff(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function u0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const IS=u0,c0=new Zo("auth","Firebase",u0());/**
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
 */const tu=new cf("@firebase/auth");function kS(t,...e){tu.logLevel<=re.WARN&&tu.warn(`Auth (${ii}): ${t}`,...e)}function _l(t,...e){tu.logLevel<=re.ERROR&&tu.error(`Auth (${ii}): ${t}`,...e)}/**
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
 */function Zt(t,...e){throw pf(t,...e)}function dn(t,...e){return pf(t,...e)}function h0(t,e,n){const r=Object.assign(Object.assign({},IS()),{[e]:n});return new Zo("auth","Firebase",r).create(e,{appName:t.name})}function bn(t){return h0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function pf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return c0.create(t,...e)}function Q(t,e,...n){if(!t)throw pf(e,...n)}function Sn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _l(e),new Error(e)}function Ln(t,e){t||Sn(e)}/**
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
 */function Qh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function SS(){return Eg()==="http:"||Eg()==="https:"}function Eg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function AS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(SS()||tk()||"connection"in navigator)?navigator.onLine:!0}function RS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ta{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ln(n>e,"Short delay should be less than long delay!"),this.isMobile=J1()||nk()}get(){return AS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function mf(t,e){Ln(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class d0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const xS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const bS=new ta(3e4,6e4);function kr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Sr(t,e,n,r,i={}){return f0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ea(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return ek()||(c.referrerPolicy="no-referrer"),d0.fetch()(p0(t,t.config.apiHost,n,l),c)})}async function f0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},xS),e);try{const i=new CS(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Xa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xa(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Xa(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Xa(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw h0(t,f,c);Zt(t,f)}}catch(i){if(i instanceof _n)throw i;Zt(t,"network-request-failed",{message:String(i)})}}async function na(t,e,n,r,i={}){const s=await Sr(t,e,n,r,i);return"mfaPendingCredential"in s&&Zt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function p0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?mf(t.config,i):`${t.config.apiScheme}://${i}`}function PS(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class CS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(dn(this.auth,"network-request-failed")),bS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Xa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=dn(t,e,r);return i.customData._tokenResponse=n,i}function Tg(t){return t!==void 0&&t.enterprise!==void 0}class NS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return PS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function DS(t,e){return Sr(t,"GET","/v2/recaptchaConfig",kr(t,e))}/**
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
 */async function OS(t,e){return Sr(t,"POST","/v1/accounts:delete",e)}async function m0(t,e){return Sr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function po(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function VS(t,e=!1){const n=Me(t),r=await n.getIdToken(e),i=gf(r);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:po(Bc(i.auth_time)),issuedAtTime:po(Bc(i.iat)),expirationTime:po(Bc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Bc(t){return Number(t)*1e3}function gf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return _l("JWT malformed, contained fewer than 3 sections"),null;try{const i=Jv(n);return i?JSON.parse(i):(_l("Failed to decode base64 JWT payload"),null)}catch(i){return _l("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ig(t){const e=gf(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Uo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof _n&&LS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function LS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class MS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Yh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=po(this.lastLoginAt),this.creationTime=po(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function nu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Uo(t,m0(n,{idToken:r}));Q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?g0(s.providerUserInfo):[],l=FS(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?c:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Yh(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function US(t){const e=Me(t);await nu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function FS(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function g0(t){return t.map(e=>{var{providerId:n}=e,r=ff(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function zS(t,e){const n=await f0(t,{},async()=>{const r=ea({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=p0(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",d0.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function BS(t,e){return Sr(t,"POST","/v2/accounts:revokeToken",kr(t,e))}/**
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
 */class Wi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ig(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const n=Ig(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await zS(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Wi;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Wi,this.toJSON())}_performRefresh(){return Sn("not implemented")}}/**
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
 */function qn(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class An{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=ff(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new MS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Yh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Uo(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return VS(this,e)}reload(){return US(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new An(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await nu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(an(this.auth.app))return Promise.reject(bn(this.auth));const e=await this.getIdToken();return await Uo(this,OS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,_=(i=n.email)!==null&&i!==void 0?i:void 0,A=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,x=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,S=(c=n.createdAt)!==null&&c!==void 0?c:void 0,w=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:T,emailVerified:N,isAnonymous:U,providerData:L,stsTokenManager:v}=n;Q(T&&v,e,"internal-error");const y=Wi.fromJSON(this.name,v);Q(typeof T=="string",e,"internal-error"),qn(m,e.name),qn(_,e.name),Q(typeof N=="boolean",e,"internal-error"),Q(typeof U=="boolean",e,"internal-error"),qn(A,e.name),qn(x,e.name),qn(C,e.name),qn(O,e.name),qn(S,e.name),qn(w,e.name);const E=new An({uid:T,auth:e,email:_,emailVerified:N,displayName:m,isAnonymous:U,photoURL:x,phoneNumber:A,tenantId:C,stsTokenManager:y,createdAt:S,lastLoginAt:w});return L&&Array.isArray(L)&&(E.providerData=L.map(I=>Object.assign({},I))),O&&(E._redirectEventId=O),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new Wi;i.updateFromServerResponse(n);const s=new An({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await nu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?g0(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Wi;l.updateFromIdToken(r);const u=new An({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Yh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const kg=new Map;function Rn(t){Ln(t instanceof Function,"Expected a class definition");let e=kg.get(t);return e?(Ln(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,kg.set(t,e),e)}/**
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
 */class y0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}y0.type="NONE";const Sg=y0;/**
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
 */function vl(t,e,n){return`firebase:${t}:${e}:${n}`}class Ki{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=vl(this.userKey,i.apiKey,s),this.fullPersistenceKey=vl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?An._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ki(Rn(Sg),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Rn(Sg);const o=vl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){const m=An._fromJSON(e,f);c!==s&&(l=m),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ki(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Ki(s,e,r))}}/**
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
 */function Ag(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(E0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(I0(e))return"Blackberry";if(k0(e))return"Webos";if(v0(e))return"Safari";if((e.includes("chrome/")||w0(e))&&!e.includes("edge/"))return"Chrome";if(T0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function _0(t=dt()){return/firefox\//i.test(t)}function v0(t=dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function w0(t=dt()){return/crios\//i.test(t)}function E0(t=dt()){return/iemobile/i.test(t)}function T0(t=dt()){return/android/i.test(t)}function I0(t=dt()){return/blackberry/i.test(t)}function k0(t=dt()){return/webos/i.test(t)}function yf(t=dt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function jS(t=dt()){var e;return yf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function $S(){return rk()&&document.documentMode===10}function S0(t=dt()){return yf(t)||T0(t)||k0(t)||I0(t)||/windows phone/i.test(t)||E0(t)}/**
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
 */function A0(t,e=[]){let n;switch(t){case"Browser":n=Ag(dt());break;case"Worker":n=`${Ag(dt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ii}/${r}`}/**
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
 */class qS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function HS(t,e={}){return Sr(t,"GET","/v2/passwordPolicy",kr(t,e))}/**
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
 */const WS=6;class KS{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:WS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class GS{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rg(this),this.idTokenSubscription=new Rg(this),this.beforeStateQueue=new qS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=c0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Rn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ki.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await m0(this,{idToken:e}),r=await An._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(an(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await nu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=RS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(an(this.app))return Promise.reject(bn(this));const n=e?Me(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return an(this.app)?Promise.reject(bn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return an(this.app)?Promise.reject(bn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Rn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await HS(this),n=new KS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Zo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await BS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Rn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await Ki.create(this,[Rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=A0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&kS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function si(t){return Me(t)}class Rg{constructor(e){this.auth=e,this.observer=null,this.addObserver=hk(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Du={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function QS(t){Du=t}function R0(t){return Du.loadJS(t)}function YS(){return Du.recaptchaEnterpriseScript}function XS(){return Du.gapiScript}function JS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const ZS="recaptcha-enterprise",eA="NO_RECAPTCHA";class tA{constructor(e){this.type=ZS,this.auth=si(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{DS(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new NS(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Tg(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(eA)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Tg(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=YS();u.length!==0&&(u+=l),R0(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function xg(t,e,n,r=!1){const i=new tA(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function bg(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await xg(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await xg(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function nA(t,e){const n=Nu(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Zl(s,e??{}))return i;Zt(i,"already-initialized")}return n.initialize({options:e})}function rA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function iA(t,e,n){const r=si(t);Q(r._canInitEmulator,r,"emulator-config-failed"),Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=x0(e),{host:o,port:l}=sA(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),oA()}function x0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function sA(t){const e=x0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Pg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Pg(o)}}}function Pg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function oA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class _f{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Sn("not implemented")}_getIdTokenResponse(e){return Sn("not implemented")}_linkToIdToken(e,n){return Sn("not implemented")}_getReauthenticationResolver(e){return Sn("not implemented")}}async function aA(t,e){return Sr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function lA(t,e){return na(t,"POST","/v1/accounts:signInWithPassword",kr(t,e))}/**
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
 */async function uA(t,e){return na(t,"POST","/v1/accounts:signInWithEmailLink",kr(t,e))}async function cA(t,e){return na(t,"POST","/v1/accounts:signInWithEmailLink",kr(t,e))}/**
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
 */class Fo extends _f{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Fo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Fo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bg(e,n,"signInWithPassword",lA);case"emailLink":return uA(e,{email:this._email,oobCode:this._password});default:Zt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bg(e,r,"signUpPassword",aA);case"emailLink":return cA(e,{idToken:n,email:this._email,oobCode:this._password});default:Zt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Gi(t,e){return na(t,"POST","/v1/accounts:signInWithIdp",kr(t,e))}/**
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
 */const hA="http://localhost";class Xr extends _f{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Xr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Zt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=ff(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Xr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Gi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Gi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Gi(e,n)}buildRequest(){const e={requestUri:hA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ea(n)}return e}}/**
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
 */function dA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function fA(t){const e=Xs(Js(t)).link,n=e?Xs(Js(e)).deep_link_id:null,r=Xs(Js(t)).deep_link_id;return(r?Xs(Js(r)).link:null)||r||n||e||t}class vf{constructor(e){var n,r,i,s,o,l;const u=Xs(Js(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,m=dA((i=u.mode)!==null&&i!==void 0?i:null);Q(c&&f&&m,"argument-error"),this.apiKey=c,this.operation=m,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=fA(e);try{return new vf(n)}catch{return null}}}/**
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
 */class fs{constructor(){this.providerId=fs.PROVIDER_ID}static credential(e,n){return Fo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=vf.parseLink(n);return Q(r,"argument-error"),Fo._fromEmailAndCode(e,r.code,r.tenantId)}}fs.PROVIDER_ID="password";fs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class b0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ra extends b0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Qn extends ra{constructor(){super("facebook.com")}static credential(e){return Xr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qn.PROVIDER_ID="facebook.com";/**
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
 */class Yn extends ra{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Xr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Yn.credential(n,r)}catch{return null}}}Yn.GOOGLE_SIGN_IN_METHOD="google.com";Yn.PROVIDER_ID="google.com";/**
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
 */class Xn extends ra{constructor(){super("github.com")}static credential(e){return Xr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.GITHUB_SIGN_IN_METHOD="github.com";Xn.PROVIDER_ID="github.com";/**
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
 */class Jn extends ra{constructor(){super("twitter.com")}static credential(e,n){return Xr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Jn.credential(n,r)}catch{return null}}}Jn.TWITTER_SIGN_IN_METHOD="twitter.com";Jn.PROVIDER_ID="twitter.com";/**
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
 */async function pA(t,e){return na(t,"POST","/v1/accounts:signUp",kr(t,e))}/**
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
 */class yr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await An._fromIdTokenResponse(e,r,i),o=Cg(r);return new yr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Cg(r);return new yr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Cg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function mA(t){var e;if(an(t.app))return Promise.reject(bn(t));const n=si(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new yr({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await pA(n,{returnSecureToken:!0}),i=await yr._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class ru extends _n{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ru.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ru(e,n,r,i)}}function P0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ru._fromErrorAndOperation(t,s,e,r):s})}async function gA(t,e,n=!1){const r=await Uo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return yr._forOperation(t,"link",r)}/**
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
 */async function yA(t,e,n=!1){const{auth:r}=t;if(an(r.app))return Promise.reject(bn(r));const i="reauthenticate";try{const s=await Uo(t,P0(r,i,e,t),n);Q(s.idToken,r,"internal-error");const o=gf(s.idToken);Q(o,r,"internal-error");const{sub:l}=o;return Q(t.uid===l,r,"user-mismatch"),yr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Zt(r,"user-mismatch"),s}}/**
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
 */async function C0(t,e,n=!1){if(an(t.app))return Promise.reject(bn(t));const r="signIn",i=await P0(t,r,e),s=await yr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function _A(t,e){return C0(si(t),e)}/**
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
 */async function vA(t){const e=si(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function wA(t,e,n){return an(t.app)?Promise.reject(bn(t)):_A(Me(t),fs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&vA(t),r})}function EA(t,e,n,r){return Me(t).onIdTokenChanged(e,n,r)}function TA(t,e,n){return Me(t).beforeAuthStateChanged(e,n)}function IA(t,e,n,r){return Me(t).onAuthStateChanged(e,n,r)}function kA(t){return Me(t).signOut()}const iu="__sak";/**
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
 */class N0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(iu,"1"),this.storage.removeItem(iu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const SA=1e3,AA=10;class D0 extends N0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=S0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);$S()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,AA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},SA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}D0.type="LOCAL";const RA=D0;/**
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
 */class O0 extends N0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}O0.type="SESSION";const V0=O0;/**
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
 */function xA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ou{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ou(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await xA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ou.receivers=[];/**
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
 */function wf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class bA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=wf("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const _=m;if(_.data.eventId===c)switch(_.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(_.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function fn(){return window}function PA(t){fn().location.href=t}/**
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
 */function L0(){return typeof fn().WorkerGlobalScope<"u"&&typeof fn().importScripts=="function"}async function CA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function NA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function DA(){return L0()?self:null}/**
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
 */const M0="firebaseLocalStorageDb",OA=1,su="firebaseLocalStorage",U0="fbase_key";class ia{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vu(t,e){return t.transaction([su],e?"readwrite":"readonly").objectStore(su)}function VA(){const t=indexedDB.deleteDatabase(M0);return new ia(t).toPromise()}function Xh(){const t=indexedDB.open(M0,OA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(su,{keyPath:U0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(su)?e(r):(r.close(),await VA(),e(await Xh()))})})}async function Ng(t,e,n){const r=Vu(t,!0).put({[U0]:e,value:n});return new ia(r).toPromise()}async function LA(t,e){const n=Vu(t,!1).get(e),r=await new ia(n).toPromise();return r===void 0?null:r.value}function Dg(t,e){const n=Vu(t,!0).delete(e);return new ia(n).toPromise()}const MA=800,UA=3;class F0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>UA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return L0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ou._getInstance(DA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await CA(),!this.activeServiceWorker)return;this.sender=new bA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||NA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xh();return await Ng(e,iu,"1"),await Dg(e,iu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ng(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>LA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Dg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Vu(i,!1).getAll();return new ia(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),MA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}F0.type="LOCAL";const FA=F0;new ta(3e4,6e4);/**
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
 */function zA(t,e){return e?Rn(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ef extends _f{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Gi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Gi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function BA(t){return C0(t.auth,new Ef(t),t.bypassAuthState)}function jA(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),yA(n,new Ef(t),t.bypassAuthState)}async function $A(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),gA(n,new Ef(t),t.bypassAuthState)}/**
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
 */class z0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return BA;case"linkViaPopup":case"linkViaRedirect":return $A;case"reauthViaPopup":case"reauthViaRedirect":return jA;default:Zt(this.auth,"internal-error")}}resolve(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const qA=new ta(2e3,1e4);class Fi extends z0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Fi.currentPopupAction&&Fi.currentPopupAction.cancel(),Fi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){Ln(this.filter.length===1,"Popup operations only handle one event");const e=wf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qA.get())};e()}}Fi.currentPopupAction=null;/**
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
 */const HA="pendingRedirect",wl=new Map;class WA extends z0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=wl.get(this.auth._key());if(!e){try{const r=await KA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}wl.set(this.auth._key(),e)}return this.bypassAuthState||wl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function KA(t,e){const n=YA(e),r=QA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function GA(t,e){wl.set(t._key(),e)}function QA(t){return Rn(t._redirectPersistence)}function YA(t){return vl(HA,t.config.apiKey,t.name)}async function XA(t,e,n=!1){if(an(t.app))return Promise.reject(bn(t));const r=si(t),i=zA(r,e),o=await new WA(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const JA=10*60*1e3;class ZA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!eR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!B0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(dn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=JA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Og(e))}saveEventToCache(e){this.cachedEventUids.add(Og(e)),this.lastProcessedEventTime=Date.now()}}function Og(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function B0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function eR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return B0(t);default:return!1}}/**
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
 */async function tR(t,e={}){return Sr(t,"GET","/v1/projects",e)}/**
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
 */const nR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rR=/^https?/;async function iR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await tR(t);for(const n of e)try{if(sR(n))return}catch{}Zt(t,"unauthorized-domain")}function sR(t){const e=Qh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!rR.test(n))return!1;if(nR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const oR=new ta(3e4,6e4);function Vg(){const t=fn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function aR(t){return new Promise((e,n)=>{var r,i,s;function o(){Vg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vg(),n(dn(t,"network-request-failed"))},timeout:oR.get()})}if(!((i=(r=fn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=fn().gapi)===null||s===void 0)&&s.load)o();else{const l=JS("iframefcb");return fn()[l]=()=>{gapi.load?o():n(dn(t,"network-request-failed"))},R0(`${XS()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw El=null,e})}let El=null;function lR(t){return El=El||aR(t),El}/**
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
 */const uR=new ta(5e3,15e3),cR="__/auth/iframe",hR="emulator/auth/iframe",dR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pR(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?mf(e,hR):`https://${t.config.authDomain}/${cR}`,r={apiKey:e.apiKey,appName:t.name,v:ii},i=fR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ea(r).slice(1)}`}async function mR(t){const e=await lR(t),n=fn().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:pR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=dn(t,"network-request-failed"),l=fn().setTimeout(()=>{s(o)},uR.get());function u(){fn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const gR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yR=500,_R=600,vR="_blank",wR="http://localhost";class Lg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ER(t,e,n,r=yR,i=_R){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},gR),{width:r.toString(),height:i.toString(),top:s,left:o}),c=dt().toLowerCase();n&&(l=w0(c)?vR:n),_0(c)&&(e=e||wR,u.scrollbars="yes");const f=Object.entries(u).reduce((_,[A,x])=>`${_}${A}=${x},`,"");if(jS(c)&&l!=="_self")return TR(e||"",l),new Lg(null);const m=window.open(e||"",l,f);Q(m,t,"popup-blocked");try{m.focus()}catch{}return new Lg(m)}function TR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const IR="__/auth/handler",kR="emulator/auth/handler",SR=encodeURIComponent("fac");async function Mg(t,e,n,r,i,s){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ii,eventId:i};if(e instanceof b0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ck(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof ra){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${SR}=${encodeURIComponent(u)}`:"";return`${AR(t)}?${ea(l).slice(1)}${c}`}function AR({config:t}){return t.emulator?mf(t,kR):`https://${t.authDomain}/${IR}`}/**
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
 */const jc="webStorageSupport";class RR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=V0,this._completeRedirectFn=XA,this._overrideRedirectResult=GA}async _openPopup(e,n,r,i){var s;Ln((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Mg(e,n,r,Qh(),i);return ER(e,o,wf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Mg(e,n,r,Qh(),i);return PA(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ln(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await mR(e),r=new ZA(e);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(jc,{type:jc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[jc];o!==void 0&&n(!!o),Zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=iR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return S0()||v0()||yf()}}const xR=RR;var Ug="@firebase/auth",Fg="1.7.9";/**
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
 */class bR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function PR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function CR(t){Yr(new gr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:A0(t)},c=new GS(r,i,s,u);return rA(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Yr(new gr("auth-internal",e=>{const n=si(e.getProvider("auth").getImmediate());return(r=>new bR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),hn(Ug,Fg,PR(t)),hn(Ug,Fg,"esm2017")}/**
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
 */const NR=5*60,DR=n0("authIdTokenMaxAge")||NR;let zg=null;const OR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>DR)return;const i=n==null?void 0:n.token;zg!==i&&(zg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function VR(t=df()){const e=Nu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=nA(t,{popupRedirectResolver:xR,persistence:[FA,RA,V0]}),r=n0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=OR(s.toString());TA(n,o,()=>o(n.currentUser)),EA(n,l=>o(l))}}const i=Zv("auth");return i&&iA(n,`http://${i}`),n}function LR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}QS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=dn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",LR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});CR("Browser");var Bg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Br,j0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,y){function E(){}E.prototype=y.prototype,v.D=y.prototype,v.prototype=new E,v.prototype.constructor=v,v.C=function(I,R,b){for(var k=Array(arguments.length-2),We=2;We<arguments.length;We++)k[We-2]=arguments[We];return y.prototype[R].apply(I,k)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,y,E){E||(E=0);var I=Array(16);if(typeof y=="string")for(var R=0;16>R;++R)I[R]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(R=0;16>R;++R)I[R]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=v.g[0],E=v.g[1],R=v.g[2];var b=v.g[3],k=y+(b^E&(R^b))+I[0]+3614090360&4294967295;y=E+(k<<7&4294967295|k>>>25),k=b+(R^y&(E^R))+I[1]+3905402710&4294967295,b=y+(k<<12&4294967295|k>>>20),k=R+(E^b&(y^E))+I[2]+606105819&4294967295,R=b+(k<<17&4294967295|k>>>15),k=E+(y^R&(b^y))+I[3]+3250441966&4294967295,E=R+(k<<22&4294967295|k>>>10),k=y+(b^E&(R^b))+I[4]+4118548399&4294967295,y=E+(k<<7&4294967295|k>>>25),k=b+(R^y&(E^R))+I[5]+1200080426&4294967295,b=y+(k<<12&4294967295|k>>>20),k=R+(E^b&(y^E))+I[6]+2821735955&4294967295,R=b+(k<<17&4294967295|k>>>15),k=E+(y^R&(b^y))+I[7]+4249261313&4294967295,E=R+(k<<22&4294967295|k>>>10),k=y+(b^E&(R^b))+I[8]+1770035416&4294967295,y=E+(k<<7&4294967295|k>>>25),k=b+(R^y&(E^R))+I[9]+2336552879&4294967295,b=y+(k<<12&4294967295|k>>>20),k=R+(E^b&(y^E))+I[10]+4294925233&4294967295,R=b+(k<<17&4294967295|k>>>15),k=E+(y^R&(b^y))+I[11]+2304563134&4294967295,E=R+(k<<22&4294967295|k>>>10),k=y+(b^E&(R^b))+I[12]+1804603682&4294967295,y=E+(k<<7&4294967295|k>>>25),k=b+(R^y&(E^R))+I[13]+4254626195&4294967295,b=y+(k<<12&4294967295|k>>>20),k=R+(E^b&(y^E))+I[14]+2792965006&4294967295,R=b+(k<<17&4294967295|k>>>15),k=E+(y^R&(b^y))+I[15]+1236535329&4294967295,E=R+(k<<22&4294967295|k>>>10),k=y+(R^b&(E^R))+I[1]+4129170786&4294967295,y=E+(k<<5&4294967295|k>>>27),k=b+(E^R&(y^E))+I[6]+3225465664&4294967295,b=y+(k<<9&4294967295|k>>>23),k=R+(y^E&(b^y))+I[11]+643717713&4294967295,R=b+(k<<14&4294967295|k>>>18),k=E+(b^y&(R^b))+I[0]+3921069994&4294967295,E=R+(k<<20&4294967295|k>>>12),k=y+(R^b&(E^R))+I[5]+3593408605&4294967295,y=E+(k<<5&4294967295|k>>>27),k=b+(E^R&(y^E))+I[10]+38016083&4294967295,b=y+(k<<9&4294967295|k>>>23),k=R+(y^E&(b^y))+I[15]+3634488961&4294967295,R=b+(k<<14&4294967295|k>>>18),k=E+(b^y&(R^b))+I[4]+3889429448&4294967295,E=R+(k<<20&4294967295|k>>>12),k=y+(R^b&(E^R))+I[9]+568446438&4294967295,y=E+(k<<5&4294967295|k>>>27),k=b+(E^R&(y^E))+I[14]+3275163606&4294967295,b=y+(k<<9&4294967295|k>>>23),k=R+(y^E&(b^y))+I[3]+4107603335&4294967295,R=b+(k<<14&4294967295|k>>>18),k=E+(b^y&(R^b))+I[8]+1163531501&4294967295,E=R+(k<<20&4294967295|k>>>12),k=y+(R^b&(E^R))+I[13]+2850285829&4294967295,y=E+(k<<5&4294967295|k>>>27),k=b+(E^R&(y^E))+I[2]+4243563512&4294967295,b=y+(k<<9&4294967295|k>>>23),k=R+(y^E&(b^y))+I[7]+1735328473&4294967295,R=b+(k<<14&4294967295|k>>>18),k=E+(b^y&(R^b))+I[12]+2368359562&4294967295,E=R+(k<<20&4294967295|k>>>12),k=y+(E^R^b)+I[5]+4294588738&4294967295,y=E+(k<<4&4294967295|k>>>28),k=b+(y^E^R)+I[8]+2272392833&4294967295,b=y+(k<<11&4294967295|k>>>21),k=R+(b^y^E)+I[11]+1839030562&4294967295,R=b+(k<<16&4294967295|k>>>16),k=E+(R^b^y)+I[14]+4259657740&4294967295,E=R+(k<<23&4294967295|k>>>9),k=y+(E^R^b)+I[1]+2763975236&4294967295,y=E+(k<<4&4294967295|k>>>28),k=b+(y^E^R)+I[4]+1272893353&4294967295,b=y+(k<<11&4294967295|k>>>21),k=R+(b^y^E)+I[7]+4139469664&4294967295,R=b+(k<<16&4294967295|k>>>16),k=E+(R^b^y)+I[10]+3200236656&4294967295,E=R+(k<<23&4294967295|k>>>9),k=y+(E^R^b)+I[13]+681279174&4294967295,y=E+(k<<4&4294967295|k>>>28),k=b+(y^E^R)+I[0]+3936430074&4294967295,b=y+(k<<11&4294967295|k>>>21),k=R+(b^y^E)+I[3]+3572445317&4294967295,R=b+(k<<16&4294967295|k>>>16),k=E+(R^b^y)+I[6]+76029189&4294967295,E=R+(k<<23&4294967295|k>>>9),k=y+(E^R^b)+I[9]+3654602809&4294967295,y=E+(k<<4&4294967295|k>>>28),k=b+(y^E^R)+I[12]+3873151461&4294967295,b=y+(k<<11&4294967295|k>>>21),k=R+(b^y^E)+I[15]+530742520&4294967295,R=b+(k<<16&4294967295|k>>>16),k=E+(R^b^y)+I[2]+3299628645&4294967295,E=R+(k<<23&4294967295|k>>>9),k=y+(R^(E|~b))+I[0]+4096336452&4294967295,y=E+(k<<6&4294967295|k>>>26),k=b+(E^(y|~R))+I[7]+1126891415&4294967295,b=y+(k<<10&4294967295|k>>>22),k=R+(y^(b|~E))+I[14]+2878612391&4294967295,R=b+(k<<15&4294967295|k>>>17),k=E+(b^(R|~y))+I[5]+4237533241&4294967295,E=R+(k<<21&4294967295|k>>>11),k=y+(R^(E|~b))+I[12]+1700485571&4294967295,y=E+(k<<6&4294967295|k>>>26),k=b+(E^(y|~R))+I[3]+2399980690&4294967295,b=y+(k<<10&4294967295|k>>>22),k=R+(y^(b|~E))+I[10]+4293915773&4294967295,R=b+(k<<15&4294967295|k>>>17),k=E+(b^(R|~y))+I[1]+2240044497&4294967295,E=R+(k<<21&4294967295|k>>>11),k=y+(R^(E|~b))+I[8]+1873313359&4294967295,y=E+(k<<6&4294967295|k>>>26),k=b+(E^(y|~R))+I[15]+4264355552&4294967295,b=y+(k<<10&4294967295|k>>>22),k=R+(y^(b|~E))+I[6]+2734768916&4294967295,R=b+(k<<15&4294967295|k>>>17),k=E+(b^(R|~y))+I[13]+1309151649&4294967295,E=R+(k<<21&4294967295|k>>>11),k=y+(R^(E|~b))+I[4]+4149444226&4294967295,y=E+(k<<6&4294967295|k>>>26),k=b+(E^(y|~R))+I[11]+3174756917&4294967295,b=y+(k<<10&4294967295|k>>>22),k=R+(y^(b|~E))+I[2]+718787259&4294967295,R=b+(k<<15&4294967295|k>>>17),k=E+(b^(R|~y))+I[9]+3951481745&4294967295,v.g[0]=v.g[0]+y&4294967295,v.g[1]=v.g[1]+(R+(k<<21&4294967295|k>>>11))&4294967295,v.g[2]=v.g[2]+R&4294967295,v.g[3]=v.g[3]+b&4294967295}r.prototype.u=function(v,y){y===void 0&&(y=v.length);for(var E=y-this.blockSize,I=this.B,R=this.h,b=0;b<y;){if(R==0)for(;b<=E;)i(this,v,b),b+=this.blockSize;if(typeof v=="string"){for(;b<y;)if(I[R++]=v.charCodeAt(b++),R==this.blockSize){i(this,I),R=0;break}}else for(;b<y;)if(I[R++]=v[b++],R==this.blockSize){i(this,I),R=0;break}}this.h=R,this.o+=y},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var y=1;y<v.length-8;++y)v[y]=0;var E=8*this.o;for(y=v.length-8;y<v.length;++y)v[y]=E&255,E/=256;for(this.u(v),v=Array(16),y=E=0;4>y;++y)for(var I=0;32>I;I+=8)v[E++]=this.g[y]>>>I&255;return v};function s(v,y){var E=l;return Object.prototype.hasOwnProperty.call(E,v)?E[v]:E[v]=y(v)}function o(v,y){this.h=y;for(var E=[],I=!0,R=v.length-1;0<=R;R--){var b=v[R]|0;I&&b==y||(E[R]=b,I=!1)}this.g=E}var l={};function u(v){return-128<=v&&128>v?s(v,function(y){return new o([y|0],0>y?-1:0)}):new o([v|0],0>v?-1:0)}function c(v){if(isNaN(v)||!isFinite(v))return m;if(0>v)return O(c(-v));for(var y=[],E=1,I=0;v>=E;I++)y[I]=v/E|0,E*=4294967296;return new o(y,0)}function f(v,y){if(v.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(v.charAt(0)=="-")return O(f(v.substring(1),y));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=c(Math.pow(y,8)),I=m,R=0;R<v.length;R+=8){var b=Math.min(8,v.length-R),k=parseInt(v.substring(R,R+b),y);8>b?(b=c(Math.pow(y,b)),I=I.j(b).add(c(k))):(I=I.j(E),I=I.add(c(k)))}return I}var m=u(0),_=u(1),A=u(16777216);t=o.prototype,t.m=function(){if(C(this))return-O(this).m();for(var v=0,y=1,E=0;E<this.g.length;E++){var I=this.i(E);v+=(0<=I?I:4294967296+I)*y,y*=4294967296}return v},t.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(x(this))return"0";if(C(this))return"-"+O(this).toString(v);for(var y=c(Math.pow(v,6)),E=this,I="";;){var R=N(E,y).g;E=S(E,R.j(y));var b=((0<E.g.length?E.g[0]:E.h)>>>0).toString(v);if(E=R,x(E))return b+I;for(;6>b.length;)b="0"+b;I=b+I}},t.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function x(v){if(v.h!=0)return!1;for(var y=0;y<v.g.length;y++)if(v.g[y]!=0)return!1;return!0}function C(v){return v.h==-1}t.l=function(v){return v=S(this,v),C(v)?-1:x(v)?0:1};function O(v){for(var y=v.g.length,E=[],I=0;I<y;I++)E[I]=~v.g[I];return new o(E,~v.h).add(_)}t.abs=function(){return C(this)?O(this):this},t.add=function(v){for(var y=Math.max(this.g.length,v.g.length),E=[],I=0,R=0;R<=y;R++){var b=I+(this.i(R)&65535)+(v.i(R)&65535),k=(b>>>16)+(this.i(R)>>>16)+(v.i(R)>>>16);I=k>>>16,b&=65535,k&=65535,E[R]=k<<16|b}return new o(E,E[E.length-1]&-2147483648?-1:0)};function S(v,y){return v.add(O(y))}t.j=function(v){if(x(this)||x(v))return m;if(C(this))return C(v)?O(this).j(O(v)):O(O(this).j(v));if(C(v))return O(this.j(O(v)));if(0>this.l(A)&&0>v.l(A))return c(this.m()*v.m());for(var y=this.g.length+v.g.length,E=[],I=0;I<2*y;I++)E[I]=0;for(I=0;I<this.g.length;I++)for(var R=0;R<v.g.length;R++){var b=this.i(I)>>>16,k=this.i(I)&65535,We=v.i(R)>>>16,Vt=v.i(R)&65535;E[2*I+2*R]+=k*Vt,w(E,2*I+2*R),E[2*I+2*R+1]+=b*Vt,w(E,2*I+2*R+1),E[2*I+2*R+1]+=k*We,w(E,2*I+2*R+1),E[2*I+2*R+2]+=b*We,w(E,2*I+2*R+2)}for(I=0;I<y;I++)E[I]=E[2*I+1]<<16|E[2*I];for(I=y;I<2*y;I++)E[I]=0;return new o(E,0)};function w(v,y){for(;(v[y]&65535)!=v[y];)v[y+1]+=v[y]>>>16,v[y]&=65535,y++}function T(v,y){this.g=v,this.h=y}function N(v,y){if(x(y))throw Error("division by zero");if(x(v))return new T(m,m);if(C(v))return y=N(O(v),y),new T(O(y.g),O(y.h));if(C(y))return y=N(v,O(y)),new T(O(y.g),y.h);if(30<v.g.length){if(C(v)||C(y))throw Error("slowDivide_ only works with positive integers.");for(var E=_,I=y;0>=I.l(v);)E=U(E),I=U(I);var R=L(E,1),b=L(I,1);for(I=L(I,2),E=L(E,2);!x(I);){var k=b.add(I);0>=k.l(v)&&(R=R.add(E),b=k),I=L(I,1),E=L(E,1)}return y=S(v,R.j(y)),new T(R,y)}for(R=m;0<=v.l(y);){for(E=Math.max(1,Math.floor(v.m()/y.m())),I=Math.ceil(Math.log(E)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),b=c(E),k=b.j(y);C(k)||0<k.l(v);)E-=I,b=c(E),k=b.j(y);x(b)&&(b=_),R=R.add(b),v=S(v,k)}return new T(R,v)}t.A=function(v){return N(this,v).h},t.and=function(v){for(var y=Math.max(this.g.length,v.g.length),E=[],I=0;I<y;I++)E[I]=this.i(I)&v.i(I);return new o(E,this.h&v.h)},t.or=function(v){for(var y=Math.max(this.g.length,v.g.length),E=[],I=0;I<y;I++)E[I]=this.i(I)|v.i(I);return new o(E,this.h|v.h)},t.xor=function(v){for(var y=Math.max(this.g.length,v.g.length),E=[],I=0;I<y;I++)E[I]=this.i(I)^v.i(I);return new o(E,this.h^v.h)};function U(v){for(var y=v.g.length+1,E=[],I=0;I<y;I++)E[I]=v.i(I)<<1|v.i(I-1)>>>31;return new o(E,v.h)}function L(v,y){var E=y>>5;y%=32;for(var I=v.g.length-E,R=[],b=0;b<I;b++)R[b]=0<y?v.i(b+E)>>>y|v.i(b+E+1)<<32-y:v.i(b+E);return new o(R,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,j0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,Br=o}).apply(typeof Bg<"u"?Bg:typeof self<"u"?self:typeof window<"u"?window:{});var Ja=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $0,Zs,q0,Tl,Jh,H0,W0,K0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ja=="object"&&Ja];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var P=a[g];if(!(P in d))break e;d=d[P]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var d=0,g=!1,P={next:function(){if(!g&&d<a.length){var D=d++;return{value:h(D,a[D]),done:!1}}return g=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function m(a,h,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,g),a.apply(h,P)}}return function(){return a.apply(h,arguments)}}function _(a,h,d){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,_.apply(null,arguments)}function A(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function x(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,P,D){for(var B=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)B[pe-2]=arguments[pe];return h.prototype[P].apply(g,B)}}function C(a){const h=a.length;if(0<h){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function O(a,h){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(u(g)){const P=a.length||0,D=g.length||0;a.length=P+D;for(let B=0;B<D;B++)a[P+B]=g[B]}else a.push(g)}}class S{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function w(a){return/^[\s\xa0]*$/.test(a)}function T(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function N(a){return N[" "](a),a}N[" "]=function(){};var U=T().indexOf("Gecko")!=-1&&!(T().toLowerCase().indexOf("webkit")!=-1&&T().indexOf("Edge")==-1)&&!(T().indexOf("Trident")!=-1||T().indexOf("MSIE")!=-1)&&T().indexOf("Edge")==-1;function L(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function v(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function y(a){const h={};for(const d in a)h[d]=a[d];return h}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,h){let d,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(d in g)a[d]=g[d];for(let D=0;D<E.length;D++)d=E[D],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function R(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function b(a){l.setTimeout(()=>{throw a},0)}function k(){var a=G;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class We{constructor(){this.h=this.g=null}add(h,d){const g=Vt.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var Vt=new S(()=>new tn,a=>a.reset());class tn{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ft,j=!1,G=new We,Y=()=>{const a=l.Promise.resolve(void 0);ft=()=>{a.then(ce)}};var ce=()=>{for(var a;a=k();){try{a.h.call(a.g)}catch(d){b(d)}var h=Vt;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}j=!1};function se(){this.s=this.s,this.C=this.C}se.prototype.s=!1,se.prototype.ma=function(){this.s||(this.s=!0,this.N())},se.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function z(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}z.prototype.h=function(){this.defaultPrevented=!0};var ue=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,h),l.removeEventListener("test",d,h)}catch{}return a}();function Pe(a,h){if(z.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(U){e:{try{N(h.nodeName);var P=!0;break e}catch{}P=!1}P||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ue[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Pe.aa.h.call(this)}}x(Pe,z);var Ue={2:"touch",3:"pen",4:"mouse"};Pe.prototype.h=function(){Pe.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var tt="closure_listenable_"+(1e6*Math.random()|0),fa=0;function pa(a,h,d,g,P){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=P,this.key=++fa,this.da=this.fa=!1}function Ar(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Rr(a){this.src=a,this.g={},this.h=0}Rr.prototype.add=function(a,h,d,g,P){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var B=ci(a,h,g,P);return-1<B?(h=a[B],d||(h.fa=!1)):(h=new pa(h,this.src,D,!!g,P),h.fa=d,a.push(h)),h};function ui(a,h){var d=h.type;if(d in a.g){var g=a.g[d],P=Array.prototype.indexOf.call(g,h,void 0),D;(D=0<=P)&&Array.prototype.splice.call(g,P,1),D&&(Ar(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function ci(a,h,d,g){for(var P=0;P<a.length;++P){var D=a[P];if(!D.da&&D.listener==h&&D.capture==!!d&&D.ha==g)return P}return-1}var hi="closure_lm_"+(1e6*Math.random()|0),di={};function ws(a,h,d,g,P){if(Array.isArray(h)){for(var D=0;D<h.length;D++)ws(a,h[D],d,g,P);return null}return d=fe(d),a&&a[tt]?a.K(h,d,c(g)?!!g.capture:!1,P):ma(a,h,d,!1,g,P)}function ma(a,h,d,g,P,D){if(!h)throw Error("Invalid event type");var B=c(P)?!!P.capture:!!P,pe=pi(a);if(pe||(a[hi]=pe=new Rr(a)),d=pe.add(h,d,g,B,D),d.proxy)return d;if(g=ga(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)ue||(P=B),P===void 0&&(P=!1),a.addEventListener(h.toString(),g,P);else if(a.attachEvent)a.attachEvent(Ts(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function ga(){function a(d){return h.call(a.src,a.listener,d)}const h=ya;return a}function Es(a,h,d,g,P){if(Array.isArray(h))for(var D=0;D<h.length;D++)Es(a,h[D],d,g,P);else g=c(g)?!!g.capture:!!g,d=fe(d),a&&a[tt]?(a=a.i,h=String(h).toString(),h in a.g&&(D=a.g[h],d=ci(D,d,g,P),-1<d&&(Ar(D[d]),Array.prototype.splice.call(D,d,1),D.length==0&&(delete a.g[h],a.h--)))):a&&(a=pi(a))&&(h=a.g[h.toString()],a=-1,h&&(a=ci(h,d,g,P)),(d=-1<a?h[a]:null)&&fi(d))}function fi(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[tt])ui(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(Ts(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=pi(h))?(ui(d,a),d.h==0&&(d.src=null,h[hi]=null)):Ar(a)}}}function Ts(a){return a in di?di[a]:di[a]="on"+a}function ya(a,h){if(a.da)a=!0;else{h=new Pe(h,this);var d=a.listener,g=a.ha||a.src;a.fa&&fi(a),a=d.call(g,h)}return a}function pi(a){return a=a[hi],a instanceof Rr?a:null}var W="__closure_events_fn_"+(1e9*Math.random()>>>0);function fe(a){return typeof a=="function"?a:(a[W]||(a[W]=function(h){return a.handleEvent(h)}),a[W])}function Fe(){se.call(this),this.i=new Rr(this),this.M=this,this.F=null}x(Fe,se),Fe.prototype[tt]=!0,Fe.prototype.removeEventListener=function(a,h,d,g){Es(this,a,h,d,g)};function De(a,h){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new z(h,a);else if(h instanceof z)h.target=h.target||a;else{var P=h;h=new z(g,a),I(h,P)}if(P=!0,d)for(var D=d.length-1;0<=D;D--){var B=h.g=d[D];P=nt(B,g,!0,h)&&P}if(B=h.g=a,P=nt(B,g,!0,h)&&P,P=nt(B,g,!1,h)&&P,d)for(D=0;D<d.length;D++)B=h.g=d[D],P=nt(B,g,!1,h)&&P}Fe.prototype.N=function(){if(Fe.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],g=0;g<d.length;g++)Ar(d[g]);delete a.g[h],a.h--}}this.F=null},Fe.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},Fe.prototype.L=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function nt(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var P=!0,D=0;D<h.length;++D){var B=h[D];if(B&&!B.da&&B.capture==d){var pe=B.listener,Ke=B.ha||B.src;B.fa&&ui(a.i,B),P=pe.call(Ke,g)!==!1&&P}}return P&&!g.defaultPrevented}function Is(a,h,d){if(typeof a=="function")d&&(a=_(a,d));else if(a&&typeof a.handleEvent=="function")a=_(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function _a(a){a.g=Is(()=>{a.g=null,a.i&&(a.i=!1,_a(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class ks extends se{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:_a(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $t(a){se.call(this),this.h=a,this.g={}}x($t,se);var lp=[];function up(a){L(a.g,function(h,d){this.g.hasOwnProperty(d)&&fi(h)},a),a.g={}}$t.prototype.N=function(){$t.aa.N.call(this),up(this)},$t.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Gu=l.JSON.stringify,CE=l.JSON.parse,NE=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Qu(){}Qu.prototype.h=null;function cp(a){return a.h||(a.h=a.i())}function hp(){}var Ss={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Yu(){z.call(this,"d")}x(Yu,z);function Xu(){z.call(this,"c")}x(Xu,z);var xr={},dp=null;function va(){return dp=dp||new Fe}xr.La="serverreachability";function fp(a){z.call(this,xr.La,a)}x(fp,z);function As(a){const h=va();De(h,new fp(h))}xr.STAT_EVENT="statevent";function pp(a,h){z.call(this,xr.STAT_EVENT,a),this.stat=h}x(pp,z);function pt(a){const h=va();De(h,new pp(h,a))}xr.Ma="timingevent";function mp(a,h){z.call(this,xr.Ma,a),this.size=h}x(mp,z);function Rs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function xs(){this.g=!0}xs.prototype.xa=function(){this.g=!1};function DE(a,h,d,g,P,D){a.info(function(){if(a.g)if(D)for(var B="",pe=D.split("&"),Ke=0;Ke<pe.length;Ke++){var ae=pe[Ke].split("=");if(1<ae.length){var rt=ae[0];ae=ae[1];var it=rt.split("_");B=2<=it.length&&it[1]=="type"?B+(rt+"="+ae+"&"):B+(rt+"=redacted&")}}else B=null;else B=D;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+h+`
`+d+`
`+B})}function OE(a,h,d,g,P,D,B){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+h+`
`+d+`
`+D+" "+B})}function mi(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+LE(a,d)+(g?" "+g:"")})}function VE(a,h){a.info(function(){return"TIMEOUT: "+h})}xs.prototype.info=function(){};function LE(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var P=g[1];if(Array.isArray(P)&&!(1>P.length)){var D=P[0];if(D!="noop"&&D!="stop"&&D!="close")for(var B=1;B<P.length;B++)P[B]=""}}}}return Gu(d)}catch{return h}}var wa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},gp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ju;function Ea(){}x(Ea,Qu),Ea.prototype.g=function(){return new XMLHttpRequest},Ea.prototype.i=function(){return{}},Ju=new Ea;function zn(a,h,d,g){this.j=a,this.i=h,this.l=d,this.R=g||1,this.U=new $t(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new yp}function yp(){this.i=null,this.g="",this.h=!1}var _p={},Zu={};function ec(a,h,d){a.L=1,a.v=Sa(vn(h)),a.m=d,a.P=!0,vp(a,null)}function vp(a,h){a.F=Date.now(),Ta(a),a.A=vn(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Dp(d.i,"t",g),a.C=0,d=a.j.J,a.h=new yp,a.g=Xp(a.j,d?h:null,!a.m),0<a.O&&(a.M=new ks(_(a.Y,a,a.g),a.O)),h=a.U,d=a.g,g=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(lp[0]=P.toString()),P=lp);for(var D=0;D<P.length;D++){var B=ws(d,P[D],g||h.handleEvent,!1,h.h||h);if(!B)break;h.g[B.key]=B}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),As(),DE(a.i,a.u,a.A,a.l,a.R,a.m)}zn.prototype.ca=function(a){a=a.target;const h=this.M;h&&wn(a)==3?h.j():this.Y(a)},zn.prototype.Y=function(a){try{if(a==this.g)e:{const it=wn(this.g);var h=this.g.Ba();const _i=this.g.Z();if(!(3>it)&&(it!=3||this.g&&(this.h.h||this.g.oa()||zp(this.g)))){this.J||it!=4||h==7||(h==8||0>=_i?As(3):As(2)),tc(this);var d=this.g.Z();this.X=d;t:if(wp(this)){var g=zp(this.g);a="";var P=g.length,D=wn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){br(this),bs(this);var B="";break t}this.h.i=new l.TextDecoder}for(h=0;h<P;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(D&&h==P-1)});g.length=0,this.h.g+=a,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=d==200,OE(this.i,this.u,this.A,this.l,this.R,it,d),this.o){if(this.T&&!this.K){t:{if(this.g){var pe,Ke=this.g;if((pe=Ke.g?Ke.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(pe)){var ae=pe;break t}}ae=null}if(d=ae)mi(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,nc(this,d);else{this.o=!1,this.s=3,pt(12),br(this),bs(this);break e}}if(this.P){d=!0;let qt;for(;!this.J&&this.C<B.length;)if(qt=ME(this,B),qt==Zu){it==4&&(this.s=4,pt(14),d=!1),mi(this.i,this.l,null,"[Incomplete Response]");break}else if(qt==_p){this.s=4,pt(15),mi(this.i,this.l,B,"[Invalid Chunk]"),d=!1;break}else mi(this.i,this.l,qt,null),nc(this,qt);if(wp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),it!=4||B.length!=0||this.h.h||(this.s=1,pt(16),d=!1),this.o=this.o&&d,!d)mi(this.i,this.l,B,"[Invalid Chunked Response]"),br(this),bs(this);else if(0<B.length&&!this.W){this.W=!0;var rt=this.j;rt.g==this&&rt.ba&&!rt.M&&(rt.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),lc(rt),rt.M=!0,pt(11))}}else mi(this.i,this.l,B,null),nc(this,B);it==4&&br(this),this.o&&!this.J&&(it==4?Kp(this.j,this):(this.o=!1,Ta(this)))}else eT(this.g),d==400&&0<B.indexOf("Unknown SID")?(this.s=3,pt(12)):(this.s=0,pt(13)),br(this),bs(this)}}}catch{}finally{}};function wp(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function ME(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?Zu:(d=Number(h.substring(d,g)),isNaN(d)?_p:(g+=1,g+d>h.length?Zu:(h=h.slice(g,g+d),a.C=g+d,h)))}zn.prototype.cancel=function(){this.J=!0,br(this)};function Ta(a){a.S=Date.now()+a.I,Ep(a,a.I)}function Ep(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Rs(_(a.ba,a),h)}function tc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}zn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(VE(this.i,this.A),this.L!=2&&(As(),pt(17)),br(this),this.s=2,bs(this)):Ep(this,this.S-a)};function bs(a){a.j.G==0||a.J||Kp(a.j,a)}function br(a){tc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,up(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function nc(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||rc(d.h,a))){if(!a.K&&rc(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Ca(d),ba(d);else break e;ac(d),pt(18)}}else d.za=P[1],0<d.za-d.T&&37500>P[2]&&d.F&&d.v==0&&!d.C&&(d.C=Rs(_(d.Za,d),6e3));if(1>=kp(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Cr(d,11)}else if((a.K||d.g==a)&&Ca(d),!w(h))for(P=d.Da.g.parse(h),h=0;h<P.length;h++){let ae=P[h];if(d.T=ae[0],ae=ae[1],d.G==2)if(ae[0]=="c"){d.K=ae[1],d.ia=ae[2];const rt=ae[3];rt!=null&&(d.la=rt,d.j.info("VER="+d.la));const it=ae[4];it!=null&&(d.Aa=it,d.j.info("SVER="+d.Aa));const _i=ae[5];_i!=null&&typeof _i=="number"&&0<_i&&(g=1.5*_i,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const qt=a.g;if(qt){const Da=qt.g?qt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Da){var D=g.h;D.g||Da.indexOf("spdy")==-1&&Da.indexOf("quic")==-1&&Da.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(ic(D,D.h),D.h=null))}if(g.D){const uc=qt.g?qt.g.getResponseHeader("X-HTTP-Session-Id"):null;uc&&(g.ya=uc,ge(g.I,g.D,uc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var B=a;if(g.qa=Yp(g,g.J?g.ia:null,g.W),B.K){Sp(g.h,B);var pe=B,Ke=g.L;Ke&&(pe.I=Ke),pe.B&&(tc(pe),Ta(pe)),g.g=B}else Hp(g);0<d.i.length&&Pa(d)}else ae[0]!="stop"&&ae[0]!="close"||Cr(d,7);else d.G==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?Cr(d,7):oc(d):ae[0]!="noop"&&d.l&&d.l.ta(ae),d.v=0)}}As(4)}catch{}}var UE=class{constructor(a,h){this.g=a,this.map=h}};function Tp(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ip(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function kp(a){return a.h?1:a.g?a.g.size:0}function rc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function ic(a,h){a.g?a.g.add(h):a.h=h}function Sp(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Tp.prototype.cancel=function(){if(this.i=Ap(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Ap(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return C(a.i)}function FE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],d=a.length,g=0;g<d;g++)h.push(a[g]);return h}h=[],d=0;for(g in a)h[d++]=a[g];return h}function zE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const g in a)h[d++]=g;return h}}}function Rp(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=zE(a),g=FE(a),P=g.length,D=0;D<P;D++)h.call(void 0,g[D],d&&d[D],a)}var xp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function BE(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),P=null;if(0<=g){var D=a[d].substring(0,g);P=a[d].substring(g+1)}else D=a[d];h(D,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Pr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Pr){this.h=a.h,Ia(this,a.j),this.o=a.o,this.g=a.g,ka(this,a.s),this.l=a.l;var h=a.i,d=new Ns;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),bp(this,d),this.m=a.m}else a&&(h=String(a).match(xp))?(this.h=!1,Ia(this,h[1]||"",!0),this.o=Ps(h[2]||""),this.g=Ps(h[3]||"",!0),ka(this,h[4]),this.l=Ps(h[5]||"",!0),bp(this,h[6]||"",!0),this.m=Ps(h[7]||"")):(this.h=!1,this.i=new Ns(null,this.h))}Pr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Cs(h,Pp,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Cs(h,Pp,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Cs(d,d.charAt(0)=="/"?qE:$E,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Cs(d,WE)),a.join("")};function vn(a){return new Pr(a)}function Ia(a,h,d){a.j=d?Ps(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ka(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function bp(a,h,d){h instanceof Ns?(a.i=h,KE(a.i,a.h)):(d||(h=Cs(h,HE)),a.i=new Ns(h,a.h))}function ge(a,h,d){a.i.set(h,d)}function Sa(a){return ge(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ps(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Cs(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,jE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function jE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Pp=/[#\/\?@]/g,$E=/[#\?:]/g,qE=/[#\?]/g,HE=/[#\?@]/g,WE=/#/g;function Ns(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Bn(a){a.g||(a.g=new Map,a.h=0,a.i&&BE(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=Ns.prototype,t.add=function(a,h){Bn(this),this.i=null,a=gi(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Cp(a,h){Bn(a),h=gi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Np(a,h){return Bn(a),h=gi(a,h),a.g.has(h)}t.forEach=function(a,h){Bn(this),this.g.forEach(function(d,g){d.forEach(function(P){a.call(h,P,g,this)},this)},this)},t.na=function(){Bn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let g=0;g<h.length;g++){const P=a[g];for(let D=0;D<P.length;D++)d.push(h[g])}return d},t.V=function(a){Bn(this);let h=[];if(typeof a=="string")Np(this,a)&&(h=h.concat(this.g.get(gi(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return Bn(this),this.i=null,a=gi(this,a),Np(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Dp(a,h,d){Cp(a,h),0<d.length&&(a.i=null,a.g.set(gi(a,h),C(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var g=h[d];const D=encodeURIComponent(String(g)),B=this.V(g);for(g=0;g<B.length;g++){var P=D;B[g]!==""&&(P+="="+encodeURIComponent(String(B[g]))),a.push(P)}}return this.i=a.join("&")};function gi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function KE(a,h){h&&!a.j&&(Bn(a),a.i=null,a.g.forEach(function(d,g){var P=g.toLowerCase();g!=P&&(Cp(this,g),Dp(this,P,d))},a)),a.j=h}function GE(a,h){const d=new xs;if(l.Image){const g=new Image;g.onload=A(jn,d,"TestLoadImage: loaded",!0,h,g),g.onerror=A(jn,d,"TestLoadImage: error",!1,h,g),g.onabort=A(jn,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=A(jn,d,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function QE(a,h){const d=new xs,g=new AbortController,P=setTimeout(()=>{g.abort(),jn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(D=>{clearTimeout(P),D.ok?jn(d,"TestPingServer: ok",!0,h):jn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(P),jn(d,"TestPingServer: error",!1,h)})}function jn(a,h,d,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(d)}catch{}}function YE(){this.g=new NE}function XE(a,h,d){const g=d||"";try{Rp(a,function(P,D){let B=P;c(P)&&(B=Gu(P)),h.push(g+D+"="+encodeURIComponent(B))})}catch(P){throw h.push(g+"type="+encodeURIComponent("_badmap")),P}}function Aa(a){this.l=a.Ub||null,this.j=a.eb||!1}x(Aa,Qu),Aa.prototype.g=function(){return new Ra(this.l,this.j)},Aa.prototype.i=function(a){return function(){return a}}({});function Ra(a,h){Fe.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(Ra,Fe),t=Ra.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Os(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ds(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Os(this)),this.g&&(this.readyState=3,Os(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Op(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Op(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Ds(this):Os(this),this.readyState==3&&Op(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ds(this))},t.Qa=function(a){this.g&&(this.response=a,Ds(this))},t.ga=function(){this.g&&Ds(this)};function Ds(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Os(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Os(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ra.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Vp(a){let h="";return L(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function sc(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Vp(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):ge(a,h,d))}function xe(a){Fe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(xe,Fe);var JE=/^https?$/i,ZE=["POST","PUT"];t=xe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ju.g(),this.v=this.o?cp(this.o):cp(Ju),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){Lp(this,D);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)d.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())d.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),P=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(ZE,h,void 0))||g||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,B]of d)this.g.setRequestHeader(D,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Fp(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){Lp(this,D)}};function Lp(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Mp(a),xa(a)}function Mp(a){a.A||(a.A=!0,De(a,"complete"),De(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,De(this,"complete"),De(this,"abort"),xa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),xa(this,!0)),xe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Up(this):this.bb())},t.bb=function(){Up(this)};function Up(a){if(a.h&&typeof o<"u"&&(!a.v[1]||wn(a)!=4||a.Z()!=2)){if(a.u&&wn(a)==4)Is(a.Ea,0,a);else if(De(a,"readystatechange"),wn(a)==4){a.h=!1;try{const B=a.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=B===0){var P=String(a.D).match(xp)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),g=!JE.test(P?P.toLowerCase():"")}d=g}if(d)De(a,"complete"),De(a,"success");else{a.m=6;try{var D=2<wn(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",Mp(a)}}finally{xa(a)}}}}function xa(a,h){if(a.g){Fp(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||De(a,"ready");try{d.onreadystatechange=g}catch{}}}function Fp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function wn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<wn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),CE(h)}};function zp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function eT(a){const h={};a=(a.g&&2<=wn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(w(a[g]))continue;var d=R(a[g]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=h[P]||[];h[P]=D,D.push(d)}v(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Vs(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Bp(a){this.Aa=0,this.i=[],this.j=new xs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Vs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Vs("baseRetryDelayMs",5e3,a),this.cb=Vs("retryDelaySeedMs",1e4,a),this.Wa=Vs("forwardChannelMaxRetries",2,a),this.wa=Vs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Tp(a&&a.concurrentRequestLimit),this.Da=new YE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Bp.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,g){pt(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=Yp(this,null,this.W),Pa(this)};function oc(a){if(jp(a),a.G==3){var h=a.U++,d=vn(a.I);if(ge(d,"SID",a.K),ge(d,"RID",h),ge(d,"TYPE","terminate"),Ls(a,d),h=new zn(a,a.j,h),h.L=2,h.v=Sa(vn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=h.v,d=!0),d||(h.g=Xp(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Ta(h)}Qp(a)}function ba(a){a.g&&(lc(a),a.g.cancel(),a.g=null)}function jp(a){ba(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ca(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Pa(a){if(!Ip(a.h)&&!a.s){a.s=!0;var h=a.Ga;ft||Y(),j||(ft(),j=!0),G.add(h,a),a.B=0}}function tT(a,h){return kp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Rs(_(a.Ga,a,h),Gp(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new zn(this,this.j,a);let D=this.o;if(this.S&&(D?(D=y(D),I(D,this.S)):D=this.S),this.m!==null||this.O||(P.H=D,D=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=qp(this,P,h),d=vn(this.I),ge(d,"RID",a),ge(d,"CVER",22),this.D&&ge(d,"X-HTTP-Session-Id",this.D),Ls(this,d),D&&(this.O?h="headers="+encodeURIComponent(String(Vp(D)))+"&"+h:this.m&&sc(d,this.m,D)),ic(this.h,P),this.Ua&&ge(d,"TYPE","init"),this.P?(ge(d,"$req",h),ge(d,"SID","null"),P.T=!0,ec(P,d,null)):ec(P,d,h),this.G=2}}else this.G==3&&(a?$p(this,a):this.i.length==0||Ip(this.h)||$p(this))};function $p(a,h){var d;h?d=h.l:d=a.U++;const g=vn(a.I);ge(g,"SID",a.K),ge(g,"RID",d),ge(g,"AID",a.T),Ls(a,g),a.m&&a.o&&sc(g,a.m,a.o),d=new zn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=qp(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ic(a.h,d),ec(d,g,h)}function Ls(a,h){a.H&&L(a.H,function(d,g){ge(h,g,d)}),a.l&&Rp({},function(d,g){ge(h,g,d)})}function qp(a,h,d){d=Math.min(a.i.length,d);var g=a.l?_(a.l.Na,a.l,a):null;e:{var P=a.i;let D=-1;for(;;){const B=["count="+d];D==-1?0<d?(D=P[0].g,B.push("ofs="+D)):D=0:B.push("ofs="+D);let pe=!0;for(let Ke=0;Ke<d;Ke++){let ae=P[Ke].g;const rt=P[Ke].map;if(ae-=D,0>ae)D=Math.max(0,P[Ke].g-100),pe=!1;else try{XE(rt,B,"req"+ae+"_")}catch{g&&g(rt)}}if(pe){g=B.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,g}function Hp(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;ft||Y(),j||(ft(),j=!0),G.add(h,a),a.v=0}}function ac(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Rs(_(a.Fa,a),Gp(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Wp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Rs(_(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,pt(10),ba(this),Wp(this))};function lc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Wp(a){a.g=new zn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=vn(a.qa);ge(h,"RID","rpc"),ge(h,"SID",a.K),ge(h,"AID",a.T),ge(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&ge(h,"TO",a.ja),ge(h,"TYPE","xmlhttp"),Ls(a,h),a.m&&a.o&&sc(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Sa(vn(h)),d.m=null,d.P=!0,vp(d,a)}t.Za=function(){this.C!=null&&(this.C=null,ba(this),ac(this),pt(19))};function Ca(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Kp(a,h){var d=null;if(a.g==h){Ca(a),lc(a),a.g=null;var g=2}else if(rc(a.h,h))d=h.D,Sp(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var P=a.B;g=va(),De(g,new mp(g,d)),Pa(a)}else Hp(a);else if(P=h.s,P==3||P==0&&0<h.X||!(g==1&&tT(a,h)||g==2&&ac(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),P){case 1:Cr(a,5);break;case 4:Cr(a,10);break;case 3:Cr(a,6);break;default:Cr(a,2)}}}function Gp(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function Cr(a,h){if(a.j.info("Error code "+h),h==2){var d=_(a.fb,a),g=a.Xa;const P=!g;g=new Pr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ia(g,"https"),Sa(g),P?GE(g.toString(),d):QE(g.toString(),d)}else pt(2);a.G=0,a.l&&a.l.sa(h),Qp(a),jp(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function Qp(a){if(a.G=0,a.ka=[],a.l){const h=Ap(a.h);(h.length!=0||a.i.length!=0)&&(O(a.ka,h),O(a.ka,a.i),a.h.i.length=0,C(a.i),a.i.length=0),a.l.ra()}}function Yp(a,h,d){var g=d instanceof Pr?vn(d):new Pr(d);if(g.g!="")h&&(g.g=h+"."+g.g),ka(g,g.s);else{var P=l.location;g=P.protocol,h=h?h+"."+P.hostname:P.hostname,P=+P.port;var D=new Pr(null);g&&Ia(D,g),h&&(D.g=h),P&&ka(D,P),d&&(D.l=d),g=D}return d=a.D,h=a.ya,d&&h&&ge(g,d,h),ge(g,"VER",a.la),Ls(a,g),g}function Xp(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new xe(new Aa({eb:d})):new xe(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Jp(){}t=Jp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Na(){}Na.prototype.g=function(a,h){return new Rt(a,h)};function Rt(a,h){Fe.call(this),this.g=new Bp(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!w(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!w(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new yi(this)}x(Rt,Fe),Rt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Rt.prototype.close=function(){oc(this.g)},Rt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Gu(a),a=d);h.i.push(new UE(h.Ya++,a)),h.G==3&&Pa(h)},Rt.prototype.N=function(){this.g.l=null,delete this.j,oc(this.g),delete this.g,Rt.aa.N.call(this)};function Zp(a){Yu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}x(Zp,Yu);function em(){Xu.call(this),this.status=1}x(em,Xu);function yi(a){this.g=a}x(yi,Jp),yi.prototype.ua=function(){De(this.g,"a")},yi.prototype.ta=function(a){De(this.g,new Zp(a))},yi.prototype.sa=function(a){De(this.g,new em)},yi.prototype.ra=function(){De(this.g,"b")},Na.prototype.createWebChannel=Na.prototype.g,Rt.prototype.send=Rt.prototype.o,Rt.prototype.open=Rt.prototype.m,Rt.prototype.close=Rt.prototype.close,K0=function(){return new Na},W0=function(){return va()},H0=xr,Jh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},wa.NO_ERROR=0,wa.TIMEOUT=8,wa.HTTP_ERROR=6,Tl=wa,gp.COMPLETE="complete",q0=gp,hp.EventType=Ss,Ss.OPEN="a",Ss.CLOSE="b",Ss.ERROR="c",Ss.MESSAGE="d",Fe.prototype.listen=Fe.prototype.K,Zs=hp,xe.prototype.listenOnce=xe.prototype.L,xe.prototype.getLastError=xe.prototype.Ka,xe.prototype.getLastErrorCode=xe.prototype.Ba,xe.prototype.getStatus=xe.prototype.Z,xe.prototype.getResponseJson=xe.prototype.Oa,xe.prototype.getResponseText=xe.prototype.oa,xe.prototype.send=xe.prototype.ea,xe.prototype.setWithCredentials=xe.prototype.Ha,$0=xe}).apply(typeof Ja<"u"?Ja:typeof self<"u"?self:typeof window<"u"?window:{});const jg="@firebase/firestore";/**
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
 */class lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");/**
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
 */let ps="10.14.0";/**
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
 */const Jr=new cf("@firebase/firestore");function Hs(){return Jr.logLevel}function H(t,...e){if(Jr.logLevel<=re.DEBUG){const n=e.map(Tf);Jr.debug(`Firestore (${ps}): ${t}`,...n)}}function Mn(t,...e){if(Jr.logLevel<=re.ERROR){const n=e.map(Tf);Jr.error(`Firestore (${ps}): ${t}`,...n)}}function rs(t,...e){if(Jr.logLevel<=re.WARN){const n=e.map(Tf);Jr.warn(`Firestore (${ps}): ${t}`,...n)}}function Tf(t){if(typeof t=="string")return t;try{/**
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
 */function X(t="Unexpected state"){const e=`FIRESTORE (${ps}) INTERNAL ASSERTION FAILED: `+t;throw Mn(e),new Error(e)}function de(t,e){t||X()}function Z(t,e){return t}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends _n{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class jr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class G0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class MR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(lt.UNAUTHENTICATED))}shutdown(){}}class UR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class FR{constructor(e){this.t=e,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){de(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new jr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new jr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new jr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(de(typeof r.accessToken=="string"),new G0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return de(e===null||typeof e=="string"),new lt(e)}}class zR{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class BR{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new zR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class jR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $R{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){de(this.o===void 0);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(de(typeof n.token=="string"),this.R=n.token,new jR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function qR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Q0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=qR(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function le(t,e){return t<e?-1:t>e?1:0}function is(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return je.fromMillis(Date.now())}static fromDate(e){return je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new je(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new je(0,0))}static max(){return new J(new je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class zo{constructor(e,n,r){n===void 0?n=0:n>e.length&&X(),r===void 0?r=e.length-n:r>e.length-n&&X(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return zo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof zo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class _e extends zo{construct(e,n,r){return new _e(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new _e(n)}static emptyPath(){return new _e([])}}const HR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends zo{construct(e,n,r){return new Ye(e,n,r)}static isValidIdentifier(e){return HR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ye(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new q(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new q(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new q(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ye(n)}static emptyPath(){return new Ye([])}}/**
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(_e.fromString(e))}static fromName(e){return new K(_e.fromString(e).popFirst(5))}static empty(){return new K(_e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&_e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return _e.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new _e(e.slice()))}}function WR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new je(n+1,0):new je(n,r));return new _r(i,K.empty(),e)}function KR(t){return new _r(t.readTime,t.key,-1)}class _r{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new _r(J.min(),K.empty(),-1)}static max(){return new _r(J.max(),K.empty(),-1)}}function GR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:le(t.largestBatchId,e.largestBatchId))}/**
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
 */const QR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class YR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function sa(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==QR)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function XR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function oa(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class If{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}If.oe=-1;function Lu(t){return t==null}function ou(t){return t===0&&1/t==-1/0}function JR(t){return typeof t=="number"&&Number.isInteger(t)&&!ou(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function $g(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ms(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Y0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ae{constructor(e,n){this.comparator=e,this.root=n||Qe.EMPTY}insert(e,n){return new Ae(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(e){return new Ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Za(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Za(this.root,e,this.comparator,!1)}getReverseIterator(){return new Za(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Za(this.root,e,this.comparator,!0)}}class Za{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Qe.RED,this.left=i??Qe.EMPTY,this.right=s??Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Qe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Qe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1;Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Qe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Je{constructor(e){this.comparator=e,this.data=new Ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new qg(this.data.getIterator())}getIteratorFrom(e){return new qg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Je(this.comparator);return n.data=e,n}}class qg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Qt{constructor(e){this.fields=e,e.sort(Ye.comparator)}static empty(){return new Qt([])}unionWith(e){let n=new Je(Ye.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Qt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return is(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class X0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new X0("Invalid base64 string: "+s):s}}(e);return new et(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}et.EMPTY_BYTE_STRING=new et("");const ZR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vr(t){if(de(!!t),typeof t=="string"){let e=0;const n=ZR.exec(t);if(de(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ce(t.seconds),nanos:Ce(t.nanos)}}function Ce(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Zr(t){return typeof t=="string"?et.fromBase64String(t):et.fromUint8Array(t)}/**
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
 */function kf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Sf(t){const e=t.mapValue.fields.__previous_value__;return kf(e)?Sf(e):e}function Bo(t){const e=vr(t.mapValue.fields.__local_write_time__.timestampValue);return new je(e.seconds,e.nanos)}/**
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
 */class ex{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class jo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new jo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof jo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const el={mapValue:{}};function ei(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?kf(t)?4:nx(t)?9007199254740991:tx(t)?10:11:X()}function yn(t,e){if(t===e)return!0;const n=ei(t);if(n!==ei(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Bo(t).isEqual(Bo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=vr(i.timestampValue),l=vr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Zr(i.bytesValue).isEqual(Zr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ce(i.geoPointValue.latitude)===Ce(s.geoPointValue.latitude)&&Ce(i.geoPointValue.longitude)===Ce(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ce(i.integerValue)===Ce(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ce(i.doubleValue),l=Ce(s.doubleValue);return o===l?ou(o)===ou(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return is(t.arrayValue.values||[],e.arrayValue.values||[],yn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if($g(o)!==$g(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!yn(o[u],l[u])))return!1;return!0}(t,e);default:return X()}}function $o(t,e){return(t.values||[]).find(n=>yn(n,e))!==void 0}function ss(t,e){if(t===e)return 0;const n=ei(t),r=ei(e);if(n!==r)return le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return le(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ce(s.integerValue||s.doubleValue),u=Ce(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Hg(t.timestampValue,e.timestampValue);case 4:return Hg(Bo(t),Bo(e));case 5:return le(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Zr(s),u=Zr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=le(l[c],u[c]);if(f!==0)return f}return le(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=le(Ce(s.latitude),Ce(o.latitude));return l!==0?l:le(Ce(s.longitude),Ce(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Wg(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,f;const m=s.fields||{},_=o.fields||{},A=(l=m.value)===null||l===void 0?void 0:l.arrayValue,x=(u=_.value)===null||u===void 0?void 0:u.arrayValue,C=le(((c=A==null?void 0:A.values)===null||c===void 0?void 0:c.length)||0,((f=x==null?void 0:x.values)===null||f===void 0?void 0:f.length)||0);return C!==0?C:Wg(A,x)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===el.mapValue&&o===el.mapValue)return 0;if(s===el.mapValue)return 1;if(o===el.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const _=le(u[m],f[m]);if(_!==0)return _;const A=ss(l[u[m]],c[f[m]]);if(A!==0)return A}return le(u.length,f.length)}(t.mapValue,e.mapValue);default:throw X()}}function Hg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return le(t,e);const n=vr(t),r=vr(e),i=le(n.seconds,r.seconds);return i!==0?i:le(n.nanos,r.nanos)}function Wg(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=ss(n[i],r[i]);if(s)return s}return le(n.length,r.length)}function os(t){return Zh(t)}function Zh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=vr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Zr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Zh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Zh(n.fields[o])}`;return i+"}"}(t.mapValue):X()}function Kg(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ed(t){return!!t&&"integerValue"in t}function Af(t){return!!t&&"arrayValue"in t}function Gg(t){return!!t&&"nullValue"in t}function Qg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Il(t){return!!t&&"mapValue"in t}function tx(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function mo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ms(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=mo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=mo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function nx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ut{constructor(e){this.value=e}static empty(){return new Ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Il(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=mo(n)}setAll(e){let n=Ye.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=mo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Il(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return yn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Il(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ms(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ut(mo(this.value))}}function J0(t){const e=[];return ms(t.fields,(n,r)=>{const i=new Ye([n]);if(Il(r)){const s=J0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Qt(e)}/**
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
 */class ct{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ct(e,0,J.min(),J.min(),J.min(),Ut.empty(),0)}static newFoundDocument(e,n,r,i){return new ct(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new ct(e,2,n,J.min(),J.min(),Ut.empty(),0)}static newUnknownDocument(e,n){return new ct(e,3,n,J.min(),J.min(),Ut.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class au{constructor(e,n){this.position=e,this.inclusive=n}}function Yg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=ss(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Xg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!yn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class qo{constructor(e,n="asc"){this.field=e,this.dir=n}}function rx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Z0{}class Le extends Z0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new sx(e,n,r):n==="array-contains"?new lx(e,r):n==="in"?new ux(e,r):n==="not-in"?new cx(e,r):n==="array-contains-any"?new hx(e,r):new Le(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new ox(e,r):new ax(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ss(n,this.value)):n!==null&&ei(this.value)===ei(n)&&this.matchesComparison(ss(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class en extends Z0{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new en(e,n)}matches(e){return ew(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ew(t){return t.op==="and"}function tw(t){return ix(t)&&ew(t)}function ix(t){for(const e of t.filters)if(e instanceof en)return!1;return!0}function td(t){if(t instanceof Le)return t.field.canonicalString()+t.op.toString()+os(t.value);if(tw(t))return t.filters.map(e=>td(e)).join(",");{const e=t.filters.map(n=>td(n)).join(",");return`${t.op}(${e})`}}function nw(t,e){return t instanceof Le?function(r,i){return i instanceof Le&&r.op===i.op&&r.field.isEqual(i.field)&&yn(r.value,i.value)}(t,e):t instanceof en?function(r,i){return i instanceof en&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&nw(o,i.filters[l]),!0):!1}(t,e):void X()}function rw(t){return t instanceof Le?function(n){return`${n.field.canonicalString()} ${n.op} ${os(n.value)}`}(t):t instanceof en?function(n){return n.op.toString()+" {"+n.getFilters().map(rw).join(" ,")+"}"}(t):"Filter"}class sx extends Le{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class ox extends Le{constructor(e,n){super(e,"in",n),this.keys=iw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ax extends Le{constructor(e,n){super(e,"not-in",n),this.keys=iw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function iw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class lx extends Le{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Af(n)&&$o(n.arrayValue,this.value)}}class ux extends Le{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&$o(this.value.arrayValue,n)}}class cx extends Le{constructor(e,n){super(e,"not-in",n)}matches(e){if($o(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!$o(this.value.arrayValue,n)}}class hx extends Le{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Af(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>$o(this.value.arrayValue,r))}}/**
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
 */class dx{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function Jg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new dx(t,e,n,r,i,s,o)}function Rf(t){const e=Z(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>td(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Lu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>os(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>os(r)).join(",")),e.ue=n}return e.ue}function xf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!rx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!nw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Xg(t.startAt,e.startAt)&&Xg(t.endAt,e.endAt)}function nd(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class gs{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function fx(t,e,n,r,i,s,o,l){return new gs(t,e,n,r,i,s,o,l)}function bf(t){return new gs(t)}function Zg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function sw(t){return t.collectionGroup!==null}function go(t){const e=Z(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Je(Ye.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new qo(s,r))}),n.has(Ye.keyField().canonicalString())||e.ce.push(new qo(Ye.keyField(),r))}return e.ce}function pn(t){const e=Z(t);return e.le||(e.le=px(e,go(t))),e.le}function px(t,e){if(t.limitType==="F")return Jg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new qo(i.field,s)});const n=t.endAt?new au(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new au(t.startAt.position,t.startAt.inclusive):null;return Jg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function rd(t,e){const n=t.filters.concat([e]);return new gs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function id(t,e,n){return new gs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Mu(t,e){return xf(pn(t),pn(e))&&t.limitType===e.limitType}function ow(t){return`${Rf(pn(t))}|lt:${t.limitType}`}function Ii(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>rw(i)).join(", ")}]`),Lu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>os(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>os(i)).join(",")),`Target(${r})`}(pn(t))}; limitType=${t.limitType})`}function Uu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of go(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=Yg(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,go(r),i)||r.endAt&&!function(o,l,u){const c=Yg(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,go(r),i))}(t,e)}function mx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function aw(t){return(e,n)=>{let r=!1;for(const i of go(t)){const s=gx(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function gx(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?ss(u,c):X()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return X()}}/**
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
 */class ys{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ms(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Y0(this.inner)}size(){return this.innerSize}}/**
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
 */const yx=new Ae(K.comparator);function Un(){return yx}const lw=new Ae(K.comparator);function eo(...t){let e=lw;for(const n of t)e=e.insert(n.key,n);return e}function uw(t){let e=lw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ur(){return yo()}function cw(){return yo()}function yo(){return new ys(t=>t.toString(),(t,e)=>t.isEqual(e))}const _x=new Ae(K.comparator),vx=new Je(K.comparator);function ne(...t){let e=vx;for(const n of t)e=e.add(n);return e}const wx=new Je(le);function Ex(){return wx}/**
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
 */function Pf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ou(e)?"-0":e}}function hw(t){return{integerValue:""+t}}function Tx(t,e){return JR(e)?hw(e):Pf(t,e)}/**
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
 */class Fu{constructor(){this._=void 0}}function Ix(t,e,n){return t instanceof lu?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&kf(s)&&(s=Sf(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Ho?fw(t,e):t instanceof Wo?pw(t,e):function(i,s){const o=dw(i,s),l=ey(o)+ey(i.Pe);return ed(o)&&ed(i.Pe)?hw(l):Pf(i.serializer,l)}(t,e)}function kx(t,e,n){return t instanceof Ho?fw(t,e):t instanceof Wo?pw(t,e):n}function dw(t,e){return t instanceof uu?function(r){return ed(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class lu extends Fu{}class Ho extends Fu{constructor(e){super(),this.elements=e}}function fw(t,e){const n=mw(e);for(const r of t.elements)n.some(i=>yn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Wo extends Fu{constructor(e){super(),this.elements=e}}function pw(t,e){let n=mw(e);for(const r of t.elements)n=n.filter(i=>!yn(i,r));return{arrayValue:{values:n}}}class uu extends Fu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function ey(t){return Ce(t.integerValue||t.doubleValue)}function mw(t){return Af(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Sx(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ho&&i instanceof Ho||r instanceof Wo&&i instanceof Wo?is(r.elements,i.elements,yn):r instanceof uu&&i instanceof uu?yn(r.Pe,i.Pe):r instanceof lu&&i instanceof lu}(t.transform,e.transform)}class Ax{constructor(e,n){this.version=e,this.transformResults=n}}class mn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new mn}static exists(e){return new mn(void 0,e)}static updateTime(e){return new mn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function kl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class zu{}function gw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new _w(t.key,mn.none()):new aa(t.key,t.data,mn.none());{const n=t.data,r=Ut.empty();let i=new Je(Ye.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new oi(t.key,r,new Qt(i.toArray()),mn.none())}}function Rx(t,e,n){t instanceof aa?function(i,s,o){const l=i.value.clone(),u=ny(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof oi?function(i,s,o){if(!kl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=ny(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(yw(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function _o(t,e,n,r){return t instanceof aa?function(s,o,l,u){if(!kl(s.precondition,o))return l;const c=s.value.clone(),f=ry(s.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof oi?function(s,o,l,u){if(!kl(s.precondition,o))return l;const c=ry(s.fieldTransforms,u,o),f=o.data;return f.setAll(yw(s)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return kl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function xx(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=dw(r.transform,i||null);s!=null&&(n===null&&(n=Ut.empty()),n.set(r.field,s))}return n||null}function ty(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&is(r,i,(s,o)=>Sx(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class aa extends zu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class oi extends zu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function yw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function ny(t,e,n){const r=new Map;de(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,kx(o,l,n[i]))}return r}function ry(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Ix(s,o,e))}return r}class _w extends zu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class bx extends zu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Px{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Rx(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=_o(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=_o(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=cw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=gw(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&is(this.mutations,e.mutations,(n,r)=>ty(n,r))&&is(this.baseMutations,e.baseMutations,(n,r)=>ty(n,r))}}class Cf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){de(e.mutations.length===r.length);let i=function(){return _x}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Cf(e,n,r,i)}}/**
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
 */class Cx{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Nx{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Oe,ie;function Dx(t){switch(t){default:return X();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function vw(t){if(t===void 0)return Mn("GRPC error has no .code"),V.UNKNOWN;switch(t){case Oe.OK:return V.OK;case Oe.CANCELLED:return V.CANCELLED;case Oe.UNKNOWN:return V.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return V.INTERNAL;case Oe.UNAVAILABLE:return V.UNAVAILABLE;case Oe.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Oe.NOT_FOUND:return V.NOT_FOUND;case Oe.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Oe.ABORTED:return V.ABORTED;case Oe.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Oe.DATA_LOSS:return V.DATA_LOSS;default:return X()}}(ie=Oe||(Oe={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Ox(){return new TextEncoder}/**
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
 */const Vx=new Br([4294967295,4294967295],0);function iy(t){const e=Ox().encode(t),n=new j0;return n.update(e),new Uint8Array(n.digest())}function sy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Br([n,r],0),new Br([i,s],0)]}class Nf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new to(`Invalid padding: ${n}`);if(r<0)throw new to(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new to(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new to(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Br.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Br.fromNumber(r)));return i.compare(Vx)===1&&(i=new Br([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=iy(e),[r,i]=sy(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Nf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=iy(e),[r,i]=sy(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class to extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Bu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,la.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Bu(J.min(),i,new Ae(le),Un(),ne())}}class la{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new la(r,n,ne(),ne(),ne())}}/**
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
 */class Sl{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class ww{constructor(e,n){this.targetId=e,this.me=n}}class Ew{constructor(e,n,r=et.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class oy{constructor(){this.fe=0,this.ge=ly(),this.pe=et.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ne(),n=ne(),r=ne();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:X()}}),new la(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=ly()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,de(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Lx{constructor(e){this.Le=e,this.Be=new Map,this.ke=Un(),this.qe=ay(),this.Qe=new Ae(le)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:X()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(nd(s))if(r===0){const o=new K(s.path);this.Ue(n,o,ct.newNoDocument(o,J.min()))}else de(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Zr(r).toUint8Array()}catch(u){if(u instanceof X0)return rs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Nf(o,i,s)}catch(u){return rs(u instanceof to?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&nd(l.target)){const u=new K(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,ct.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ne();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Bu(e,n,this.Qe,this.ke,r);return this.ke=Un(),this.qe=ay(),this.Qe=new Ae(le),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new oy,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Je(le),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new oy),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function ay(){return new Ae(K.comparator)}function ly(){return new Ae(K.comparator)}const Mx={asc:"ASCENDING",desc:"DESCENDING"},Ux={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Fx={and:"AND",or:"OR"};class zx{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function sd(t,e){return t.useProto3Json||Lu(e)?e:{value:e}}function cu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Tw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Bx(t,e){return cu(t,e.toTimestamp())}function gn(t){return de(!!t),J.fromTimestamp(function(n){const r=vr(n);return new je(r.seconds,r.nanos)}(t))}function Df(t,e){return od(t,e).canonicalString()}function od(t,e){const n=function(i){return new _e(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Iw(t){const e=_e.fromString(t);return de(xw(e)),e}function ad(t,e){return Df(t.databaseId,e.path)}function $c(t,e){const n=Iw(e);if(n.get(1)!==t.databaseId.projectId)throw new q(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(Sw(n))}function kw(t,e){return Df(t.databaseId,e)}function jx(t){const e=Iw(t);return e.length===4?_e.emptyPath():Sw(e)}function ld(t){return new _e(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Sw(t){return de(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function uy(t,e,n){return{name:ad(t,e),fields:n.value.mapValue.fields}}function $x(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,f){return c.useProto3Json?(de(f===void 0||typeof f=="string"),et.fromBase64String(f||"")):(de(f===void 0||f instanceof Buffer||f instanceof Uint8Array),et.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?V.UNKNOWN:vw(c.code);return new q(f,c.message||"")}(o);n=new Ew(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=$c(t,r.document.name),s=gn(r.document.updateTime),o=r.document.createTime?gn(r.document.createTime):J.min(),l=new Ut({mapValue:{fields:r.document.fields}}),u=ct.newFoundDocument(i,s,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new Sl(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=$c(t,r.document),s=r.readTime?gn(r.readTime):J.min(),o=ct.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Sl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=$c(t,r.document),s=r.removedTargetIds||[];n=new Sl([],s,i,null)}else{if(!("filter"in e))return X();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Nx(i,s),l=r.targetId;n=new ww(l,o)}}return n}function qx(t,e){let n;if(e instanceof aa)n={update:uy(t,e.key,e.value)};else if(e instanceof _w)n={delete:ad(t,e.key)};else if(e instanceof oi)n={update:uy(t,e.key,e.data),updateMask:Zx(e.fieldMask)};else{if(!(e instanceof bx))return X();n={verify:ad(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof lu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ho)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Wo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof uu)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw X()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Bx(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:X()}(t,e.precondition)),n}function Hx(t,e){return t&&t.length>0?(de(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?gn(i.updateTime):gn(s);return o.isEqual(J.min())&&(o=gn(s)),new Ax(o,i.transformResults||[])}(n,e))):[]}function Wx(t,e){return{documents:[kw(t,e.path)]}}function Kx(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=kw(t,i);const s=function(c){if(c.length!==0)return Rw(en.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(f=>function(_){return{field:ki(_.field),direction:Yx(_.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=sd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function Gx(t){let e=jx(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){de(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(m){const _=Aw(m);return _ instanceof en&&tw(_)?_.getFilters():[_]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(_=>function(x){return new qo(Si(x.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(_))}(n.orderBy));let l=null;n.limit&&(l=function(m){let _;return _=typeof m=="object"?m.value:m,Lu(_)?null:_}(n.limit));let u=null;n.startAt&&(u=function(m){const _=!!m.before,A=m.values||[];return new au(A,_)}(n.startAt));let c=null;return n.endAt&&(c=function(m){const _=!m.before,A=m.values||[];return new au(A,_)}(n.endAt)),fx(e,i,o,s,l,"F",u,c)}function Qx(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Aw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Si(n.unaryFilter.field);return Le.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Si(n.unaryFilter.field);return Le.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Si(n.unaryFilter.field);return Le.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Si(n.unaryFilter.field);return Le.create(o,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(t):t.fieldFilter!==void 0?function(n){return Le.create(Si(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return en.create(n.compositeFilter.filters.map(r=>Aw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return X()}}(n.compositeFilter.op))}(t):X()}function Yx(t){return Mx[t]}function Xx(t){return Ux[t]}function Jx(t){return Fx[t]}function ki(t){return{fieldPath:t.canonicalString()}}function Si(t){return Ye.fromServerFormat(t.fieldPath)}function Rw(t){return t instanceof Le?function(n){if(n.op==="=="){if(Qg(n.value))return{unaryFilter:{field:ki(n.field),op:"IS_NAN"}};if(Gg(n.value))return{unaryFilter:{field:ki(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Qg(n.value))return{unaryFilter:{field:ki(n.field),op:"IS_NOT_NAN"}};if(Gg(n.value))return{unaryFilter:{field:ki(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ki(n.field),op:Xx(n.op),value:n.value}}}(t):t instanceof en?function(n){const r=n.getFilters().map(i=>Rw(i));return r.length===1?r[0]:{compositeFilter:{op:Jx(n.op),filters:r}}}(t):X()}function Zx(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function xw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class nr{constructor(e,n,r,i,s=J.min(),o=J.min(),l=et.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new nr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new nr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class e2{constructor(e){this.ct=e}}function t2(t){const e=Gx({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?id(e,e.limit,"L"):e}/**
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
 */class n2{constructor(){this.un=new r2}addToCollectionParentIndex(e,n){return this.un.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(_r.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(_r.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class r2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Je(_e.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Je(_e.comparator)).toArray()}}/**
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
 */class as{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new as(0)}static kn(){return new as(-1)}}/**
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
 */class i2{constructor(){this.changes=new ys(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ct.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class s2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class o2{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&_o(r.mutation,i,Qt.empty(),je.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const i=Ur();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=eo();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ur();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Un();const o=yo(),l=function(){return yo()}();return n.forEach((u,c)=>{const f=r.get(c.key);i.has(c.key)&&(f===void 0||f.mutation instanceof oi)?s=s.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),_o(f.mutation,c,f.mutation.getFieldMask(),je.now())):o.set(c.key,Qt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>{var m;return l.set(c,new s2(f,(m=o.get(c))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=yo();let i=new Ae((o,l)=>o-l),s=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||Qt.empty();f=l.applyToLocalView(c,f),r.set(u,f);const m=(i.get(l.batchId)||ne()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,m=cw();f.forEach(_=>{if(!s.has(_)){const A=gw(n.get(_),r.get(_));A!==null&&m.set(_,A),s=s.add(_)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,m))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):sw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(Ur());let l=-1,u=s;return o.next(c=>M.forEach(c,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(_=>{u=u.insert(f,_)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ne())).next(f=>({batchId:l,changes:uw(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=eo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=eo();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,u=>{const c=function(m,_){return new gs(_,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(f=>{f.forEach((m,_)=>{o=o.insert(m,_)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,ct.newInvalidDocument(f)))});let l=eo();return o.forEach((u,c)=>{const f=s.get(u);f!==void 0&&_o(f.mutation,c,Qt.empty(),je.now()),Uu(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class a2{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return M.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:gn(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:t2(i.bundledQuery),readTime:gn(i.readTime)}}(n)),M.resolve()}}/**
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
 */class l2{constructor(){this.overlays=new Ae(K.comparator),this.Ir=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ur();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=Ur(),s=n.length+1,o=new K(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ae((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=s.get(c.largestBatchId);f===null&&(f=Ur(),s=s.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=Ur(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=i)););return M.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Cx(n,r));let s=this.Ir.get(n);s===void 0&&(s=ne(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class u2{constructor(){this.sessionToken=et.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
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
 */class Of{constructor(){this.Tr=new Je($e.Er),this.dr=new Je($e.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new $e(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new $e(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new K(new _e([])),r=new $e(n,e),i=new $e(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new K(new _e([])),r=new $e(n,e),i=new $e(n,e+1);let s=ne();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new $e(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class $e{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return K.comparator(e.key,n.key)||le(e.wr,n.wr)}static Ar(e,n){return le(e.wr,n.wr)||K.comparator(e.key,n.key)}}/**
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
 */class c2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Je($e.Er)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Px(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new $e(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new $e(n,0),i=new $e(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Je(le);return n.forEach(i=>{const s=new $e(i,0),o=new $e(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),M.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new $e(new K(s),0);let l=new Je(le);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.wr)),!0)},o),M.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){de(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return M.forEach(n.mutations,i=>{const s=new $e(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new $e(n,0),i=this.br.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class h2{constructor(e){this.Mr=e,this.docs=function(){return new Ae(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():ct.newInvalidDocument(n))}getEntries(e,n){let r=Un();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ct.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Un();const o=n.path,l=new K(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||GR(KR(f),r)<=0||(i.has(f.key)||Uu(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){X()}Or(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new d2(this)}getSize(e){return M.resolve(this.size)}}class d2 extends i2{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class f2{constructor(e){this.persistence=e,this.Nr=new ys(n=>Rf(n),xf),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Of,this.targetCount=0,this.kr=as.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),M.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new as(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Kn(n),M.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.Br.containsKey(n))}}/**
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
 */class p2{constructor(e,n){this.qr={},this.overlays={},this.Qr=new If(0),this.Kr=!1,this.Kr=!0,this.$r=new u2,this.referenceDelegate=e(this),this.Ur=new f2(this),this.indexManager=new n2,this.remoteDocumentCache=function(i){return new h2(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new e2(n),this.Gr=new a2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new l2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new c2(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new m2(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return M.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class m2 extends YR{constructor(e){super(),this.currentSequenceNumber=e}}class Vf{constructor(e){this.persistence=e,this.Jr=new Of,this.Yr=null}static Zr(e){return new Vf(e)}get Xr(){if(this.Yr)return this.Yr;throw X()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),M.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Xr,r=>{const i=K.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return M.or([()=>M.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class Lf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ne(),i=ne();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Lf(e,n.fromCache,r,i)}}/**
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
 */class g2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class y2{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return ik()?8:XR(dt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new g2;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Hs()<=re.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Ii(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),M.resolve()):(Hs()<=re.DEBUG&&H("QueryEngine","Query:",Ii(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Hs()<=re.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Ii(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,pn(n))):M.resolve())}Yi(e,n){if(Zg(n))return M.resolve(null);let r=pn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=id(n,null,"F"),r=pn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ne(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,l);return this.ns(n,c,o,u.readTime)?this.Yi(e,id(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return Zg(n)||i.isEqual(J.min())?M.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?M.resolve(null):(Hs()<=re.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ii(n)),this.rs(e,o,n,WR(i,-1)).next(l=>l))})}ts(e,n){let r=new Je(aw(e));return n.forEach((i,s)=>{Uu(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Hs()<=re.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Ii(n)),this.Ji.getDocumentsMatchingQuery(e,n,_r.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class _2{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ae(le),this._s=new ys(s=>Rf(s),xf),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new o2(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function v2(t,e,n,r){return new _2(t,e,n,r)}async function bw(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ne();for(const c of i){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of s){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:l}))})})}function w2(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const m=c.batch,_=m.keys();let A=M.resolve();return _.forEach(x=>{A=A.next(()=>f.getEntry(u,x)).next(C=>{const O=c.docVersions.get(x);de(O!==null),C.version.compareTo(O)<0&&(m.applyToRemoteDocument(C,c),C.isValidDocument()&&(C.setReadTime(c.commitVersion),f.addEntry(C)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ne();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Pw(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function E2(t,e){const n=Z(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,m)=>{const _=i.get(m);if(!_)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,m)));let A=_.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?A=A.withResumeToken(et.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),i=i.insert(m,A),function(C,O,S){return C.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(_,A,f)&&l.push(n.Ur.updateTargetData(s,A))});let u=Un(),c=ne();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(T2(s,o,e.documentUpdates).next(f=>{u=f.Ps,c=f.Is})),!r.isEqual(J.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(m=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function T2(t,e,n){let r=ne(),i=ne();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Un();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):H("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function I2(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function k2(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new nr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function ud(t,e,n){const r=Z(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!oa(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function cy(t,e,n){const r=Z(t);let i=J.min(),s=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const m=Z(u),_=m._s.get(f);return _!==void 0?M.resolve(m.os.get(_)):m.Ur.getTargetData(c,f)}(r,o,pn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:ne())).next(l=>(S2(r,mx(e),l),{documents:l,Ts:s})))}function S2(t,e,n){let r=t.us.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class hy{constructor(){this.activeTargetIds=Ex()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class A2{constructor(){this.so=new hy,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new hy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class R2{_o(e){}shutdown(){}}/**
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
 */class dy{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let tl=null;function qc(){return tl===null?tl=function(){return 268435456+Math.round(2147483648*Math.random())}():tl++,"0x"+tl.toString(16)}/**
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
 */const x2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class b2{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const at="WebChannelConnection";class P2 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=qc(),u=this.xo(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(f=>(H("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw rs("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ps}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=x2[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=qc();return new Promise((o,l)=>{const u=new $0;u.setWithCredentials(!0),u.listenOnce(q0.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Tl.NO_ERROR:const f=u.getResponseJson();H(at,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case Tl.TIMEOUT:H(at,`RPC '${e}' ${s} timed out`),l(new q(V.DEADLINE_EXCEEDED,"Request time out"));break;case Tl.HTTP_ERROR:const m=u.getStatus();if(H(at,`RPC '${e}' ${s} failed with status:`,m,"response text:",u.getResponseText()),m>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const A=_==null?void 0:_.error;if(A&&A.status&&A.message){const x=function(O){const S=O.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(S)>=0?S:V.UNKNOWN}(A.status);l(new q(x,A.message))}else l(new q(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new q(V.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{H(at,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);H(at,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=qc(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=K0(),l=W0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");H(at,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=o.createWebChannel(f,u);let _=!1,A=!1;const x=new b2({Io:O=>{A?H(at,`Not sending because RPC '${e}' stream ${i} is closed:`,O):(_||(H(at,`Opening RPC '${e}' stream ${i} transport.`),m.open(),_=!0),H(at,`RPC '${e}' stream ${i} sending:`,O),m.send(O))},To:()=>m.close()}),C=(O,S,w)=>{O.listen(S,T=>{try{w(T)}catch(N){setTimeout(()=>{throw N},0)}})};return C(m,Zs.EventType.OPEN,()=>{A||(H(at,`RPC '${e}' stream ${i} transport opened.`),x.yo())}),C(m,Zs.EventType.CLOSE,()=>{A||(A=!0,H(at,`RPC '${e}' stream ${i} transport closed`),x.So())}),C(m,Zs.EventType.ERROR,O=>{A||(A=!0,rs(at,`RPC '${e}' stream ${i} transport errored:`,O),x.So(new q(V.UNAVAILABLE,"The operation could not be completed")))}),C(m,Zs.EventType.MESSAGE,O=>{var S;if(!A){const w=O.data[0];de(!!w);const T=w,N=T.error||((S=T[0])===null||S===void 0?void 0:S.error);if(N){H(at,`RPC '${e}' stream ${i} received error:`,N);const U=N.status;let L=function(E){const I=Oe[E];if(I!==void 0)return vw(I)}(U),v=N.message;L===void 0&&(L=V.INTERNAL,v="Unknown error status: "+U+" with message "+N.message),A=!0,x.So(new q(L,v)),m.close()}else H(at,`RPC '${e}' stream ${i} received:`,w),x.bo(w)}}),C(l,H0.STAT_EVENT,O=>{O.stat===Jh.PROXY?H(at,`RPC '${e}' stream ${i} detected buffering proxy`):O.stat===Jh.NOPROXY&&H(at,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{x.wo()},0),x}}function Hc(){return typeof document<"u"?document:null}/**
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
 */function ju(t){return new zx(t,!0)}/**
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
 */class Cw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Nw{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Cw(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(Mn(n.toString()),Mn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new q(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class C2 extends Nw{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=$x(this.serializer,e),r=function(s){if(!("targetChange"in s))return J.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?gn(o.readTime):J.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=ld(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=nd(u)?{documents:Wx(s,u)}:{query:Kx(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Tw(s,o.resumeToken);const c=sd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(J.min())>0){l.readTime=cu(s,o.snapshotVersion.toTimestamp());const c=sd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=Qx(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=ld(this.serializer),n.removeTarget=e,this.a_(n)}}class N2 extends Nw{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return de(!!e.streamToken),this.lastStreamToken=e.streamToken,de(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){de(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=Hx(e.writeResults,e.commitTime),r=gn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=ld(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>qx(this.serializer,r))};this.a_(n)}}/**
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
 */class D2 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new q(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,od(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(V.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,od(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(V.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class O2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Mn(n),this.D_=!1):H("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class V2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{ai(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=Z(u);c.L_.add(4),await ua(c),c.q_.set("Unknown"),c.L_.delete(4),await $u(c)}(this))})}),this.q_=new O2(r,i)}}async function $u(t){if(ai(t))for(const e of t.B_)await e(!0)}async function ua(t){for(const e of t.B_)await e(!1)}function Dw(t,e){const n=Z(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),zf(n)?Ff(n):_s(n).r_()&&Uf(n,e))}function Mf(t,e){const n=Z(t),r=_s(n);n.N_.delete(e),r.r_()&&Ow(n,e),n.N_.size===0&&(r.r_()?r.o_():ai(n)&&n.q_.set("Unknown"))}function Uf(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}_s(t).A_(e)}function Ow(t,e){t.Q_.xe(e),_s(t).R_(e)}function Ff(t){t.Q_=new Lx({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),_s(t).start(),t.q_.v_()}function zf(t){return ai(t)&&!_s(t).n_()&&t.N_.size>0}function ai(t){return Z(t).L_.size===0}function Vw(t){t.Q_=void 0}async function L2(t){t.q_.set("Online")}async function M2(t){t.N_.forEach((e,n)=>{Uf(t,e)})}async function U2(t,e){Vw(t),zf(t)?(t.q_.M_(e),Ff(t)):t.q_.set("Unknown")}async function F2(t,e,n){if(t.q_.set("Online"),e instanceof Ew&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await hu(t,r)}else if(e instanceof Sl?t.Q_.Ke(e):e instanceof ww?t.Q_.He(e):t.Q_.We(e),!n.isEqual(J.min()))try{const r=await Pw(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(c);f&&s.N_.set(c,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(et.EMPTY_BYTE_STRING,f.snapshotVersion)),Ow(s,u);const m=new nr(f.target,u,c,f.sequenceNumber);Uf(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await hu(t,r)}}async function hu(t,e,n){if(!oa(e))throw e;t.L_.add(1),await ua(t),t.q_.set("Offline"),n||(n=()=>Pw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await $u(t)})}function Lw(t,e){return e().catch(n=>hu(t,n,e))}async function qu(t){const e=Z(t),n=wr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;z2(e);)try{const i=await I2(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,B2(e,i)}catch(i){await hu(e,i)}Mw(e)&&Uw(e)}function z2(t){return ai(t)&&t.O_.length<10}function B2(t,e){t.O_.push(e);const n=wr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Mw(t){return ai(t)&&!wr(t).n_()&&t.O_.length>0}function Uw(t){wr(t).start()}async function j2(t){wr(t).p_()}async function $2(t){const e=wr(t);for(const n of t.O_)e.m_(n.mutations)}async function q2(t,e,n){const r=t.O_.shift(),i=Cf.from(r,e,n);await Lw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await qu(t)}async function H2(t,e){e&&wr(t).V_&&await async function(r,i){if(function(o){return Dx(o)&&o!==V.ABORTED}(i.code)){const s=r.O_.shift();wr(r).s_(),await Lw(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await qu(r)}}(t,e),Mw(t)&&Uw(t)}async function fy(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=ai(n);n.L_.add(3),await ua(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await $u(n)}async function W2(t,e){const n=Z(t);e?(n.L_.delete(2),await $u(n)):e||(n.L_.add(2),await ua(n),n.q_.set("Unknown"))}function _s(t){return t.K_||(t.K_=function(n,r,i){const s=Z(n);return s.w_(),new C2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:L2.bind(null,t),Ro:M2.bind(null,t),mo:U2.bind(null,t),d_:F2.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),zf(t)?Ff(t):t.q_.set("Unknown")):(await t.K_.stop(),Vw(t))})),t.K_}function wr(t){return t.U_||(t.U_=function(n,r,i){const s=Z(n);return s.w_(),new N2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:j2.bind(null,t),mo:H2.bind(null,t),f_:$2.bind(null,t),g_:q2.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await qu(t)):(await t.U_.stop(),t.O_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class Bf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new jr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Bf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jf(t,e){if(Mn("AsyncQueue",`${e}: ${t}`),oa(t))return new q(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Qi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=eo(),this.sortedSet=new Ae(this.comparator)}static emptySet(e){return new Qi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Qi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Qi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class py{constructor(){this.W_=new Ae(K.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):X():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ls{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ls(e,n,Qi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Mu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class K2{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class G2{constructor(){this.queries=my(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=Z(n),s=i.queries;i.queries=my(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new q(V.ABORTED,"Firestore shutting down"))}}function my(){return new ys(t=>ow(t),Mu)}async function Q2(t,e){const n=Z(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new K2,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=jf(o,`Initialization of query '${Ii(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&$f(n)}async function Y2(t,e){const n=Z(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function X2(t,e){const n=Z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&$f(n)}function J2(t,e,n){const r=Z(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function $f(t){t.Y_.forEach(e=>{e.next()})}var cd,gy;(gy=cd||(cd={})).ea="default",gy.Cache="cache";class Z2{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ls(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=ls.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==cd.Cache}}/**
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
 */class Fw{constructor(e){this.key=e}}class zw{constructor(e){this.key=e}}class eb{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ne(),this.mutatedKeys=ne(),this.Aa=aw(e),this.Ra=new Qi(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new py,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const _=i.get(f),A=Uu(this.query,m)?m:null,x=!!_&&this.mutatedKeys.has(_.key),C=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let O=!1;_&&A?_.data.isEqual(A.data)?x!==C&&(r.track({type:3,doc:A}),O=!0):this.ga(_,A)||(r.track({type:2,doc:A}),O=!0,(u&&this.Aa(A,u)>0||c&&this.Aa(A,c)<0)&&(l=!0)):!_&&A?(r.track({type:0,doc:A}),O=!0):_&&!A&&(r.track({type:1,doc:_}),O=!0,(u||c)&&(l=!0)),O&&(A?(o=o.add(A),s=C?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,m)=>function(A,x){const C=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return C(A)-C(x)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new ls(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new py,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ne(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new zw(r))}),this.da.forEach(r=>{e.has(r)||n.push(new Fw(r))}),n}ba(e){this.Ta=e.Ts,this.da=ne();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return ls.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class tb{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class nb{constructor(e){this.key=e,this.va=!1}}class rb{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ys(l=>ow(l),Mu),this.Ma=new Map,this.xa=new Set,this.Oa=new Ae(K.comparator),this.Na=new Map,this.La=new Of,this.Ba={},this.ka=new Map,this.qa=as.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function ib(t,e,n=!0){const r=Ww(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await Bw(r,e,n,!0),i}async function sb(t,e){const n=Ww(t);await Bw(n,e,!0,!1)}async function Bw(t,e,n,r){const i=await k2(t.localStore,pn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await ob(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&Dw(t.remoteStore,i),l}async function ob(t,e,n,r,i){t.Ka=(m,_,A)=>async function(C,O,S,w){let T=O.view.ma(S);T.ns&&(T=await cy(C.localStore,O.query,!1).then(({documents:v})=>O.view.ma(v,T)));const N=w&&w.targetChanges.get(O.targetId),U=w&&w.targetMismatches.get(O.targetId)!=null,L=O.view.applyChanges(T,C.isPrimaryClient,N,U);return _y(C,O.targetId,L.wa),L.snapshot}(t,m,_,A);const s=await cy(t.localStore,e,!0),o=new eb(e,s.Ts),l=o.ma(s.documents),u=la.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);_y(t,n,c.wa);const f=new tb(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function ab(t,e,n){const r=Z(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Mu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await ud(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Mf(r.remoteStore,i.targetId),hd(r,i.targetId)}).catch(sa)):(hd(r,i.targetId),await ud(r.localStore,i.targetId,!0))}async function lb(t,e){const n=Z(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Mf(n.remoteStore,r.targetId))}async function ub(t,e,n){const r=gb(t);try{const i=await function(o,l){const u=Z(o),c=je.now(),f=l.reduce((A,x)=>A.add(x.key),ne());let m,_;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let x=Un(),C=ne();return u.cs.getEntries(A,f).next(O=>{x=O,x.forEach((S,w)=>{w.isValidDocument()||(C=C.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,x)).next(O=>{m=O;const S=[];for(const w of l){const T=xx(w,m.get(w.key).overlayedDocument);T!=null&&S.push(new oi(w.key,T,J0(T.value.mapValue),mn.exists(!0)))}return u.mutationQueue.addMutationBatch(A,c,S,l)}).next(O=>{_=O;const S=O.applyToLocalDocumentSet(m,C);return u.documentOverlayCache.saveOverlays(A,O.batchId,S)})}).then(()=>({batchId:_.batchId,changes:uw(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Ae(le)),c=c.insert(l,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await ca(r,i.changes),await qu(r.remoteStore)}catch(i){const s=jf(i,"Failed to persist write");n.reject(s)}}async function jw(t,e){const n=Z(t);try{const r=await E2(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(de(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?de(o.va):i.removedDocuments.size>0&&(de(o.va),o.va=!1))}),await ca(n,r,e)}catch(r){await sa(r)}}function yy(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Z(o);u.onlineState=l;let c=!1;u.queries.forEach((f,m)=>{for(const _ of m.j_)_.Z_(l)&&(c=!0)}),c&&$f(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function cb(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ae(K.comparator);o=o.insert(s,ct.newNoDocument(s,J.min()));const l=ne().add(s),u=new Bu(J.min(),new Map,new Ae(le),o,l);await jw(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),qf(r)}else await ud(r.localStore,e,!1).then(()=>hd(r,e,n)).catch(sa)}async function hb(t,e){const n=Z(t),r=e.batch.batchId;try{const i=await w2(n.localStore,e);qw(n,r,null),$w(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ca(n,i)}catch(i){await sa(i)}}async function db(t,e,n){const r=Z(t);try{const i=await function(o,l){const u=Z(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(m=>(de(m!==null),f=m.keys(),u.mutationQueue.removeMutationBatch(c,m))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);qw(r,e,n),$w(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ca(r,i)}catch(i){await sa(i)}}function $w(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function qw(t,e,n){const r=Z(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function hd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||Hw(t,r)})}function Hw(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Mf(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),qf(t))}function _y(t,e,n){for(const r of n)r instanceof Fw?(t.La.addReference(r.key,e),fb(t,r)):r instanceof zw?(H("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||Hw(t,r.key)):X()}function fb(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(H("SyncEngine","New document in limbo: "+n),t.xa.add(r),qf(t))}function qf(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new K(_e.fromString(e)),r=t.qa.next();t.Na.set(r,new nb(n)),t.Oa=t.Oa.insert(n,r),Dw(t.remoteStore,new nr(pn(bf(n.path)),r,"TargetPurposeLimboResolution",If.oe))}}async function ca(t,e,n){const r=Z(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const m=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(c){i.push(c);const m=Lf.Wi(u.targetId,c);s.push(m)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const f=Z(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>M.forEach(c,_=>M.forEach(_.$i,A=>f.persistence.referenceDelegate.addReference(m,_.targetId,A)).next(()=>M.forEach(_.Ui,A=>f.persistence.referenceDelegate.removeReference(m,_.targetId,A)))))}catch(m){if(!oa(m))throw m;H("LocalStore","Failed to update sequence numbers: "+m)}for(const m of c){const _=m.targetId;if(!m.fromCache){const A=f.os.get(_),x=A.snapshotVersion,C=A.withLastLimboFreeSnapshotVersion(x);f.os=f.os.insert(_,C)}}}(r.localStore,s))}async function pb(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await bw(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new q(V.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ca(n,r.hs)}}function mb(t,e){const n=Z(t),r=n.Na.get(e);if(r&&r.va)return ne().add(r.key);{let i=ne();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function Ww(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=jw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=mb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=cb.bind(null,e),e.Ca.d_=X2.bind(null,e.eventManager),e.Ca.$a=J2.bind(null,e.eventManager),e}function gb(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=hb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=db.bind(null,e),e}class du{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ju(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return v2(this.persistence,new y2,e.initialUser,this.serializer)}Ga(e){return new p2(Vf.Zr,this.serializer)}Wa(e){return new A2}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}du.provider={build:()=>new du};class dd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>yy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=pb.bind(null,this.syncEngine),await W2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new G2}()}createDatastore(e){const n=ju(e.databaseInfo.databaseId),r=function(s){return new P2(s)}(e.databaseInfo);return function(s,o,l,u){return new D2(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new V2(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>yy(this.syncEngine,n,0),function(){return dy.D()?new dy:new R2}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,f){const m=new rb(i,s,o,l,u,c);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Z(i);H("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await ua(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}dd.provider={build:()=>new dd};/**
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
 */class yb{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Mn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class _b{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=lt.UNAUTHENTICATED,this.clientId=Q0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{H("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new jr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=jf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Wc(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await bw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function vy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await vb(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>fy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>fy(e.remoteStore,i)),t._onlineComponents=e}async function vb(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await Wc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;rs("Error using user provided cache. Falling back to memory cache: "+n),await Wc(t,new du)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await Wc(t,new du);return t._offlineComponents}async function Kw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await vy(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await vy(t,new dd))),t._onlineComponents}function wb(t){return Kw(t).then(e=>e.syncEngine)}async function wy(t){const e=await Kw(t),n=e.eventManager;return n.onListen=ib.bind(null,e.syncEngine),n.onUnlisten=ab.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=sb.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=lb.bind(null,e.syncEngine),n}/**
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
 */function Gw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Ey=new Map;/**
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
 */function Qw(t,e,n){if(!n)throw new q(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Eb(t,e,n,r){if(e===!0&&r===!0)throw new q(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ty(t){if(!K.isDocumentKey(t))throw new q(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Iy(t){if(K.isDocumentKey(t))throw new q(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Hu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function $r(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Hu(t);throw new q(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class ky{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Eb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Gw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Wu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ky({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ky(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new MR;switch(r.type){case"firstParty":return new BR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ey.get(n);r&&(H("ComponentProvider","Removing Datastore"),Ey.delete(n),r.terminate())}(this),Promise.resolve()}}function Tb(t,e,n,r={}){var i;const s=(t=$r(t,Wu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&rs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=lt.MOCK_USER;else{l=r0(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new q(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new lt(c)}t._authCredentials=new UR(new G0(l,u))}}/**
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
 */class li{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new li(this.firestore,e,this._query)}}class At{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new At(this.firestore,e,this._key)}}class fr extends li{constructor(e,n,r){super(e,n,bf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new At(this.firestore,null,new K(e))}withConverter(e){return new fr(this.firestore,e,this._path)}}function nl(t,e,...n){if(t=Me(t),Qw("collection","path",e),t instanceof Wu){const r=_e.fromString(e,...n);return Iy(r),new fr(t,null,r)}{if(!(t instanceof At||t instanceof fr))throw new q(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(_e.fromString(e,...n));return Iy(r),new fr(t.firestore,null,r)}}function fd(t,e,...n){if(t=Me(t),arguments.length===1&&(e=Q0.newId()),Qw("doc","path",e),t instanceof Wu){const r=_e.fromString(e,...n);return Ty(r),new At(t,null,new K(r))}{if(!(t instanceof At||t instanceof fr))throw new q(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(_e.fromString(e,...n));return Ty(r),new At(t.firestore,t instanceof fr?t.converter:null,new K(r))}}/**
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
 */class Sy{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Cw(this,"async_queue_retry"),this.Vu=()=>{const r=Hc();r&&H("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Hc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Hc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new jr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!oa(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Mn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Bf.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&X()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Ay(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Ko extends Wu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Sy,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Sy(e),this._firestoreClient=void 0,await e}}}function Ib(t,e){const n=typeof t=="object"?t:df(),r=typeof t=="string"?t:"(default)",i=Nu(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=e0("firestore");s&&Tb(i,...s)}return i}function Yw(t){if(t._terminated)throw new q(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||kb(t),t._firestoreClient}function kb(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,f){return new ex(l,u,c,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Gw(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new _b(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class us{constructor(e){this._byteString=e}static fromBase64String(e){try{return new us(et.fromBase64String(e))}catch(n){throw new q(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new us(et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Hf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Xw{constructor(e){this._methodName=e}}/**
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
 */class Wf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}/**
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
 */class Kf{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const Sb=/^__.*__$/;class Ab{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new oi(e,this.data,this.fieldMask,n,this.fieldTransforms):new aa(e,this.data,n,this.fieldTransforms)}}function Jw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class Gf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Gf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return fu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Jw(this.Cu)&&Sb.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Rb{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ju(e)}Qu(e,n,r,i=!1){return new Gf({Cu:e,methodName:n,qu:r,path:Ye.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Qf(t){const e=t._freezeSettings(),n=ju(t._databaseId);return new Rb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Zw(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);nE("Data must be an object, but it was:",o,r);const l=eE(r,o);let u,c;if(s.merge)u=new Qt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const _=bb(e,m,n);if(!o.contains(_))throw new q(V.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);Cb(f,_)||f.push(_)}u=new Qt(f),c=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,c=o.fieldTransforms;return new Ab(new Ut(l),u,c)}function xb(t,e,n,r=!1){return Yf(n,t.Qu(r?4:3,e))}function Yf(t,e){if(tE(t=Me(t)))return nE("Unsupported field value:",e,t),eE(t,e);if(t instanceof Xw)return function(r,i){if(!Jw(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Yf(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Me(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Tx(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=je.fromDate(r);return{timestampValue:cu(i.serializer,s)}}if(r instanceof je){const s=new je(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:cu(i.serializer,s)}}if(r instanceof Wf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof us)return{bytesValue:Tw(i.serializer,r._byteString)};if(r instanceof At){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Df(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Kf)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Pf(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Hu(r)}`)}(t,e)}function eE(t,e){const n={};return Y0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ms(t,(r,i)=>{const s=Yf(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function tE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof je||t instanceof Wf||t instanceof us||t instanceof At||t instanceof Xw||t instanceof Kf)}function nE(t,e,n){if(!tE(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Hu(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function bb(t,e,n){if((e=Me(e))instanceof Hf)return e._internalPath;if(typeof e=="string")return rE(t,e);throw fu("Field path arguments must be of type string or ",t,!1,void 0,n)}const Pb=new RegExp("[~\\*/\\[\\]]");function rE(t,e,n){if(e.search(Pb)>=0)throw fu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Hf(...e.split("."))._internalPath}catch{throw fu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function fu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new q(V.INVALID_ARGUMENT,l+t+u)}function Cb(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class iE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new At(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Nb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Xf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Nb extends iE{data(){return super.data()}}function Xf(t,e){return typeof e=="string"?rE(t,e):e instanceof Hf?e._internalPath:e._delegate._internalPath}/**
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
 */function Db(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Jf{}class sE extends Jf{}function Ry(t,e,...n){let r=[];e instanceof Jf&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof ep).length,l=s.filter(u=>u instanceof Zf).length;if(o>1||o>0&&l>0)throw new q(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Zf extends sE{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Zf(e,n,r)}_apply(e){const n=this._parse(e);return oE(e._query,n),new li(e.firestore,e.converter,rd(e._query,n))}_parse(e){const n=Qf(e.firestore);return function(s,o,l,u,c,f,m){let _;if(c.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new q(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Py(m,f);const A=[];for(const x of m)A.push(by(u,s,x));_={arrayValue:{values:A}}}else _=by(u,s,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Py(m,f),_=xb(l,o,m,f==="in"||f==="not-in");return Le.create(c,f,_)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class ep extends Jf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ep(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:en.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)oE(o,u),o=rd(o,u)}(e._query,n),new li(e.firestore,e.converter,rd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class tp extends sE{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new tp(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new q(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new q(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new qo(s,o)}(e._query,this._field,this._direction);return new li(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new gs(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function xy(t,e="asc"){const n=e,r=Xf("orderBy",t);return tp._create(r,n)}function by(t,e,n){if(typeof(n=Me(n))=="string"){if(n==="")throw new q(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!sw(e)&&n.indexOf("/")!==-1)throw new q(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(_e.fromString(n));if(!K.isDocumentKey(r))throw new q(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Kg(t,new K(r))}if(n instanceof At)return Kg(t,n._key);throw new q(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Hu(n)}.`)}function Py(t,e){if(!Array.isArray(t)||t.length===0)throw new q(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function oE(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new q(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new q(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Ob{convertValue(e,n="none"){switch(ei(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Zr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw X()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ms(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ce(o.doubleValue));return new Kf(s)}convertGeoPoint(e){return new Wf(Ce(e.latitude),Ce(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Sf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Bo(e));default:return null}}convertTimestamp(e){const n=vr(e);return new je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=_e.fromString(e);de(xw(r));const i=new jo(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||Mn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function aE(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class no{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class lE extends iE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Al(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Xf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Al extends lE{data(e={}){return super.data(e)}}class Vb{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new no(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Al(this._firestore,this._userDataWriter,r.key,r,new no(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Al(i._firestore,i._userDataWriter,l.doc.key,l.doc,new no(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Al(i._firestore,i._userDataWriter,l.doc.key,l.doc,new no(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:Lb(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Lb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X()}}class uE extends Ob{constructor(e){super(),this.firestore=e}convertBytes(e){return new us(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new At(this.firestore,null,n)}}function Mb(t,e,n){t=$r(t,At);const r=$r(t.firestore,Ko),i=aE(t.converter,e,n);return cE(r,[Zw(Qf(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,mn.none())])}function Cy(t,e){const n=$r(t.firestore,Ko),r=fd(t),i=aE(t.converter,e);return cE(n,[Zw(Qf(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,mn.exists(!1))]).then(()=>r)}function Kc(t,...e){var n,r,i;t=Me(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Ay(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Ay(e[o])){const m=e[o];e[o]=(n=m.next)===null||n===void 0?void 0:n.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(i=m.complete)===null||i===void 0?void 0:i.bind(m)}let u,c,f;if(t instanceof At)c=$r(t.firestore,Ko),f=bf(t._key.path),u={next:m=>{e[o]&&e[o](Ub(c,t,m))},error:e[o+1],complete:e[o+2]};else{const m=$r(t,li);c=$r(m.firestore,Ko),f=m._query;const _=new uE(c);u={next:A=>{e[o]&&e[o](new Vb(c,_,m,A))},error:e[o+1],complete:e[o+2]},Db(t._query)}return function(_,A,x,C){const O=new yb(C),S=new Z2(A,O,x);return _.asyncQueue.enqueueAndForget(async()=>Q2(await wy(_),S)),()=>{O.Za(),_.asyncQueue.enqueueAndForget(async()=>Y2(await wy(_),S))}}(Yw(c),f,l,u)}function cE(t,e){return function(r,i){const s=new jr;return r.asyncQueue.enqueueAndForget(async()=>ub(await wb(r),i,s)),s.promise}(Yw(t),e)}function Ub(t,e,n){const r=n.docs.get(e._key),i=new uE(t);return new lE(t,i,e._key,r,new no(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){ps=i})(ii),Yr(new gr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Ko(new FR(r.getProvider("auth-internal")),new $R(r.getProvider("app-check-internal")),function(c,f){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new q(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new jo(c.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),hn(jg,"4.7.3",e),hn(jg,"4.7.3","esm2017")})();/**
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
 */const hE="firebasestorage.googleapis.com",dE="storageBucket",Fb=2*60*1e3,zb=10*60*1e3,Bb=1e3;/**
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
 */class Re extends _n{constructor(e,n,r=0){super(Gc(e),`Firebase Storage: ${n} (${Gc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Re.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Gc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var we;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(we||(we={}));function Gc(t){return"storage/"+t}function np(){const t="An unknown error occurred, please check the error payload for server response.";return new Re(we.UNKNOWN,t)}function jb(t){return new Re(we.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function $b(t){return new Re(we.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function qb(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Re(we.UNAUTHENTICATED,t)}function Hb(){return new Re(we.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Wb(t){return new Re(we.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function fE(){return new Re(we.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function pE(){return new Re(we.CANCELED,"User canceled the upload/download.")}function Kb(t){return new Re(we.INVALID_URL,"Invalid URL '"+t+"'.")}function Gb(t){return new Re(we.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Qb(){return new Re(we.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+dE+"' property when initializing the app?")}function mE(){return new Re(we.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Yb(){return new Re(we.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function Xb(){return new Re(we.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Jb(t){return new Re(we.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function pd(t){return new Re(we.INVALID_ARGUMENT,t)}function gE(){return new Re(we.APP_DELETED,"The Firebase app was deleted.")}function Zb(t){return new Re(we.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function vo(t,e){return new Re(we.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ws(t){throw new Re(we.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Pt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Pt.makeFromUrl(e,n)}catch{return new Pt(e,"")}if(r.path==="")return r;throw Gb(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(N){N.path_=decodeURIComponent(N.path)}const f="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),_="(/([^?#]*).*)?$",A=new RegExp(`^https?://${m}/${f}/b/${i}/o${_}`,"i"),x={bucket:1,path:3},C=n===hE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,O="([^?#]*)",S=new RegExp(`^https?://${C}/${i}/${O}`,"i"),T=[{regex:l,indices:u,postModify:s},{regex:A,indices:x,postModify:c},{regex:S,indices:{bucket:1,path:2},postModify:c}];for(let N=0;N<T.length;N++){const U=T[N],L=U.regex.exec(e);if(L){const v=L[U.indices.bucket];let y=L[U.indices.path];y||(y=""),r=new Pt(v,y),U.postModify(r);break}}if(r==null)throw Kb(e);return r}}class eP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function tP(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let c=!1;function f(...O){c||(c=!0,e.apply(null,O))}function m(O){i=setTimeout(()=>{i=null,t(A,u())},O)}function _(){s&&clearTimeout(s)}function A(O,...S){if(c){_();return}if(O){_(),f.call(null,O,...S);return}if(u()||o){_(),f.call(null,O,...S);return}r<64&&(r*=2);let T;l===1?(l=2,T=0):T=(r+Math.random())*1e3,m(T)}let x=!1;function C(O){x||(x=!0,_(),!c&&(i!==null?(O||(l=2),clearTimeout(i),m(0)):O||(l=1)))}return m(0),s=setTimeout(()=>{o=!0,C(!0)},n),C}function nP(t){t(!1)}/**
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
 */function rP(t){return t!==void 0}function iP(t){return typeof t=="function"}function sP(t){return typeof t=="object"&&!Array.isArray(t)}function Ku(t){return typeof t=="string"||t instanceof String}function Ny(t){return rp()&&t instanceof Blob}function rp(){return typeof Blob<"u"}function Dy(t,e,n,r){if(r<e)throw pd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw pd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function ha(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function yE(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var qr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(qr||(qr={}));/**
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
 */function _E(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class oP{constructor(e,n,r,i,s,o,l,u,c,f,m,_=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=f,this.connectionFactory_=m,this.retry=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((A,x)=>{this.resolve_=A,this.reject_=x,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new rl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===qr.NO_ERROR,u=s.getStatus();if(!l||_E(u,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===qr.ABORT;r(!1,new rl(!1,null,f));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new rl(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());rP(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=np();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?gE():pE();o(u)}else{const u=fE();o(u)}};this.canceled_?n(!1,new rl(!1,null,!0)):this.backoffId_=tP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&nP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class rl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function aP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function lP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function uP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function cP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function hP(t,e,n,r,i,s,o=!0){const l=yE(t.urlParams),u=t.url+l,c=Object.assign({},t.headers);return uP(c,e),aP(c,n),lP(c,s),cP(c,r),new oP(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function dP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function fP(...t){const e=dP();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(rp())return new Blob(t);throw new Re(we.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function pP(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function mP(t){if(typeof atob>"u")throw Jb("base-64");return atob(t)}/**
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
 */const ln={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Qc{constructor(e,n){this.data=e,this.contentType=n||null}}function gP(t,e){switch(t){case ln.RAW:return new Qc(vE(e));case ln.BASE64:case ln.BASE64URL:return new Qc(wE(t,e));case ln.DATA_URL:return new Qc(_P(e),vP(e))}throw np()}function vE(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function yP(t){let e;try{e=decodeURIComponent(t)}catch{throw vo(ln.DATA_URL,"Malformed data URL.")}return vE(e)}function wE(t,e){switch(t){case ln.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw vo(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case ln.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw vo(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=mP(e)}catch(i){throw i.message.includes("polyfill")?i:vo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class EE{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw vo(ln.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=wP(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function _P(t){const e=new EE(t);return e.base64?wE(ln.BASE64,e.rest):yP(e.rest)}function vP(t){return new EE(t).contentType}function wP(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Zn{constructor(e,n){let r=0,i="";Ny(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Ny(this.data_)){const r=this.data_,i=pP(r,e,n);return i===null?null:new Zn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Zn(r,!0)}}static getBlob(...e){if(rp()){const n=e.map(r=>r instanceof Zn?r.data_:r);return new Zn(fP.apply(null,n))}else{const n=e.map(o=>Ku(o)?gP(ln.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new Zn(i,!0)}}uploadData(){return this.data_}}/**
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
 */function TE(t){let e;try{e=JSON.parse(t)}catch{return null}return sP(e)?e:null}/**
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
 */function EP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function TP(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function IE(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function IP(t,e){return e}class mt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||IP}}let il=null;function kP(t){return!Ku(t)||t.length<2?t:IE(t)}function kE(){if(il)return il;const t=[];t.push(new mt("bucket")),t.push(new mt("generation")),t.push(new mt("metageneration")),t.push(new mt("name","fullPath",!0));function e(s,o){return kP(o)}const n=new mt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new mt("size");return i.xform=r,t.push(i),t.push(new mt("timeCreated")),t.push(new mt("updated")),t.push(new mt("md5Hash",null,!0)),t.push(new mt("cacheControl",null,!0)),t.push(new mt("contentDisposition",null,!0)),t.push(new mt("contentEncoding",null,!0)),t.push(new mt("contentLanguage",null,!0)),t.push(new mt("contentType",null,!0)),t.push(new mt("metadata","customMetadata",!0)),il=t,il}function SP(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Pt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function AP(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return SP(r,t),r}function SE(t,e,n){const r=TE(e);return r===null?null:AP(t,r,n)}function RP(t,e,n,r){const i=TE(e);if(i===null||!Ku(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const f=t.bucket,m=t.fullPath,_="/b/"+o(f)+"/o/"+o(m),A=ha(_,n,r),x=yE({alt:"media",token:c});return A+x})[0]}function AE(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class vs{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Pn(t){if(!t)throw np()}function ip(t,e){function n(r,i){const s=SE(t,i,e);return Pn(s!==null),s}return n}function xP(t,e){function n(r,i){const s=SE(t,i,e);return Pn(s!==null),RP(s,i,t.host,t._protocol)}return n}function da(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=Hb():i=qb():n.getStatus()===402?i=$b(t.bucket):n.getStatus()===403?i=Wb(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function RE(t){const e=da(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=jb(t.path)),s.serverResponse=i.serverResponse,s}return n}function bP(t,e,n){const r=e.fullServerUrl(),i=ha(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new vs(i,s,ip(t,n),o);return l.errorHandler=RE(e),l}function PP(t,e,n){const r=e.fullServerUrl(),i=ha(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new vs(i,s,xP(t,n),o);return l.errorHandler=RE(e),l}function CP(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function xE(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=CP(null,e)),r}function NP(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let T="";for(let N=0;N<2;N++)T=T+Math.random().toString().slice(2);return T}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const c=xE(e,r,i),f=AE(c,n),m="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,_=`\r
--`+u+"--",A=Zn.getBlob(m,r,_);if(A===null)throw mE();const x={name:c.fullPath},C=ha(s,t.host,t._protocol),O="POST",S=t.maxUploadRetryTime,w=new vs(C,O,ip(t,n),S);return w.urlParams=x,w.headers=o,w.body=A.uploadData(),w.errorHandler=da(e),w}class pu{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function sp(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{Pn(!1)}return Pn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function DP(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=xE(e,r,i),l={name:o.fullPath},u=ha(s,t.host,t._protocol),c="POST",f={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},m=AE(o,n),_=t.maxUploadRetryTime;function A(C){sp(C);let O;try{O=C.getResponseHeader("X-Goog-Upload-URL")}catch{Pn(!1)}return Pn(Ku(O)),O}const x=new vs(u,c,A,_);return x.urlParams=l,x.headers=f,x.body=m,x.errorHandler=da(e),x}function OP(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(c){const f=sp(c,["active","final"]);let m=null;try{m=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Pn(!1)}m||Pn(!1);const _=Number(m);return Pn(!isNaN(_)),new pu(_,r.size(),f==="final")}const o="POST",l=t.maxUploadRetryTime,u=new vs(n,o,s,l);return u.headers=i,u.errorHandler=da(e),u}const Oy=256*1024;function VP(t,e,n,r,i,s,o,l){const u=new pu(0,0);if(o?(u.current=o.current,u.total=o.total):(u.current=0,u.total=r.size()),r.size()!==u.total)throw Yb();const c=u.total-u.current;let f=c;i>0&&(f=Math.min(f,i));const m=u.current,_=m+f;let A="";f===0?A="finalize":c===f?A="upload, finalize":A="upload";const x={"X-Goog-Upload-Command":A,"X-Goog-Upload-Offset":`${u.current}`},C=r.slice(m,_);if(C===null)throw mE();function O(N,U){const L=sp(N,["active","final"]),v=u.current+f,y=r.size();let E;return L==="final"?E=ip(e,s)(N,U):E=null,new pu(v,y,L==="final",E)}const S="POST",w=e.maxUploadRetryTime,T=new vs(n,S,O,w);return T.headers=x,T.body=C.uploadData(),T.progressCallback=l||null,T.errorHandler=da(t),T}const wt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Yc(t){switch(t){case"running":case"pausing":case"canceling":return wt.RUNNING;case"paused":return wt.PAUSED;case"success":return wt.SUCCESS;case"canceled":return wt.CANCELED;case"error":return wt.ERROR;default:return wt.ERROR}}/**
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
 */class LP{constructor(e,n,r){if(iP(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
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
 */function wi(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class MP{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=qr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=qr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=qr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Ws("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ws("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ws("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ws("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ws("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class UP extends MP{initXhr(){this.xhr_.responseType="text"}}function Ai(){return new UP}/**
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
 */class FP{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=kE(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(we.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(_E(i.status,[]))if(s)i=fE();else{this.sleepTime=Math.max(this.sleepTime*2,Bb),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(we.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=DP(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Ai,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=OP(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,Ai,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Oy*this._chunkMultiplier,n=new pu(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=VP(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(u){this._error=u,this._transition("error");return}const l=this._ref.storage._makeRequest(o,Ai,i,s,!1);this._request=l,l.getPromise().then(u=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(u.current),u.finalized?(this._metadata=u.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Oy*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=bP(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,Ai,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=NP(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Ai,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=pE(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Yc(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new LP(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Yc(this._state)){case wt.SUCCESS:wi(this._resolve.bind(null,this.snapshot))();break;case wt.CANCELED:case wt.ERROR:const n=this._reject;wi(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Yc(this._state)){case wt.RUNNING:case wt.PAUSED:e.next&&wi(e.next.bind(e,this.snapshot))();break;case wt.SUCCESS:e.complete&&wi(e.complete.bind(e))();break;case wt.CANCELED:case wt.ERROR:e.error&&wi(e.error.bind(e,this._error))();break;default:e.error&&wi(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class ti{constructor(e,n){this._service=e,n instanceof Pt?this._location=n:this._location=Pt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ti(e,n)}get root(){const e=new Pt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return IE(this._location.path)}get storage(){return this._service}get parent(){const e=EP(this._location.path);if(e===null)return null;const n=new Pt(this._location.bucket,e);return new ti(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Zb(e)}}function zP(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new FP(t,new Zn(e),n)}function BP(t){t._throwIfRoot("getDownloadURL");const e=PP(t.storage,t._location,kE());return t.storage.makeRequestWithTokens(e,Ai).then(n=>{if(n===null)throw Xb();return n})}function jP(t,e){const n=TP(t._location.path,e),r=new Pt(t._location.bucket,n);return new ti(t.storage,r)}/**
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
 */function $P(t){return/^[A-Za-z]+:\/\//.test(t)}function qP(t,e){return new ti(t,e)}function bE(t,e){if(t instanceof op){const n=t;if(n._bucket==null)throw Qb();const r=new ti(n,n._bucket);return e!=null?bE(r,e):r}else return e!==void 0?jP(t,e):t}function HP(t,e){if(e&&$P(e)){if(t instanceof op)return qP(t,e);throw pd("To use ref(service, url), the first argument must be a Storage instance.")}else return bE(t,e)}function Vy(t,e){const n=e==null?void 0:e[dE];return n==null?null:Pt.makeFromBucketSpec(n,t)}function WP(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:r0(i,t.app.options.projectId))}class op{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=hE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Fb,this._maxUploadRetryTime=zb,this._requests=new Set,i!=null?this._bucket=Pt.makeFromBucketSpec(i,this._host):this._bucket=Vy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Pt.makeFromBucketSpec(this._url,e):this._bucket=Vy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Dy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Dy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ti(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new eP(gE());{const o=hP(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Ly="@firebase/storage",My="0.13.2";/**
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
 */const PE="storage";function KP(t,e,n){return t=Me(t),zP(t,e,n)}function GP(t){return t=Me(t),BP(t)}function QP(t,e){return t=Me(t),HP(t,e)}function YP(t=df(),e){t=Me(t);const r=Nu(t,PE).getImmediate({identifier:e}),i=e0("storage");return i&&XP(r,...i),r}function XP(t,e,n,r={}){WP(t,e,n,r)}function JP(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new op(n,r,i,e,ii)}function ZP(){Yr(new gr(PE,JP,"PUBLIC").setMultipleInstances(!0)),hn(Ly,My,""),hn(Ly,My,"esm2017")}ZP();const eC={apiKey:"AIzaSyCy_gaaxo0Vd-0llMEi1h3BD5t_zfiVYyI",authDomain:"i-love-bharat.firebaseapp.com",projectId:"i-love-bharat",storageBucket:"i-love-bharat.firebasestorage.app",messagingSenderId:"960030069619",appId:"1:960030069619:web:037404bcf35a848f302b06",measurementId:"G-1Z5HK31G0N"},tC=typeof __firebase_config<"u"?JSON.parse(__firebase_config):eC,ap=o0(tC),mu=VR(ap),Ei=Ib(ap),nC=YP(ap),Ti=typeof __app_id<"u"?__app_id:"default-app-id",rn={settings:{autoPopup:"attendance"},visuals:{backgroundImage:"https://images.unsplash.com/photo-1596707333630-67c8dc91b9e9?auto=format&fit=crop&q=80&w=2000",backgroundOpacity:.15},header:{orgName:"ISKCON Ujjain Presents",eventName:"Mega Youth Fest",tagline:"Bharat Ki Yuva Kranti",subTagline:"3000+ Students Joining",logoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/ISKCON_Logo.svg/1200px-ISKCON_Logo.svg.png"},about:{title:"I Love Bharat 2026",description:"The program is based on the teachings of Bhagavad Gita. The aim of this program is to free youth from intoxication, depression, distraction, and give them direction for success and steadiness in life. India's glories will be displayed through Video shows, Drama, Kirtan, Dance, Lectures, and Prasadam distribution.",date:"26 January 2026",venue:"ISKCON Ujjain Goshala Ground",time:"4:00 PM",stats:"3000"},dedication:{title:"Dedicated to",name:"HDG A.C. Bhaktivedanta Swami Prabhupada",subtitle:"Founder-Acharya of the International Society for Krishna Consciousness",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/2/23/Bhaktivedanta_Swami_Prabhupada_at_Bhaktivedanta_Manor_1973.jpg"},pledgeText:{hindi:"मैं अपने कल्याण और नशा मुक्त भारत के लिए, सभी प्रकार के नशों, मादक पदार्थों और पदार्थों के उपयोग से मुक्त जीवन जीने का संकल्प लेता/लेती हूँ।",english:"For my well-being and for a Nasha Mukt Bharat, I take a pledge to live a life free from all drugs, intoxicants, and substance use."},gallery:[{id:1,url:"https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&q=80&w=800",title:"Cultural Dance"},{id:2,url:"https://images.unsplash.com/photo-1496372412473-e8548ffd82bc?auto=format&fit=crop&q=80&w=800",title:"Kirtan Bliss"},{id:3,url:"https://images.unsplash.com/photo-1515658323406-25d61c141a6e?auto=format&fit=crop&q=80&w=800",title:"Youth Power"}],videos:[{id:1,type:"youtube",url:"https://www.youtube.com/embed/dQw4w9WgXcQ",title:"Festival Highlights"}]},rC=async t=>t.type.startsWith("image/")?new Promise(e=>{const n=new FileReader;n.readAsDataURL(t),n.onload=r=>{const i=new Image;i.src=r.target.result,i.onload=()=>{const s=document.createElement("canvas"),o=1200;let l=i.width,u=i.height;l>o&&(u=Math.round(u*o/l),l=o),s.width=l,s.height=u,s.getContext("2d").drawImage(i,0,0,l,u),s.toBlob(f=>{e(f?new File([f],t.name,{type:"image/jpeg",lastModified:Date.now()}):t)},"image/jpeg",.8)}}}):t,iC=({message:t,type:e,onClose:n})=>t?p.createElement("div",{className:"fixed top-24 right-4 z-[100] animate-fade-in-up"},p.createElement("div",{className:`flex items-center gap-3 px-6 py-4 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.2)] backdrop-blur-md text-white font-bold border border-white/20 ${e==="error"?"bg-red-600/90":"bg-green-600/90"}`},e==="error"?p.createElement(Gv,{size:20}):p.createElement(Xl,{size:20}),p.createElement("span",{className:"tracking-wide"},t),p.createElement("button",{onClick:n,className:"ml-4 opacity-60 hover:opacity-100 transition-opacity bg-white/10 p-1 rounded-full"},p.createElement(fo,{size:16})))):null,sl=({label:t,value:e,onChange:n,showToast:r})=>{const[i,s]=ee.useState(!1),[o,l]=ee.useState(0),[u,c]=ee.useState(!1),[f,m]=ee.useState(null),[_,A]=ee.useState(!1),[x,C]=ee.useState(!1),O=ee.useRef(null);ee.useEffect(()=>{C(!1)},[e]);const S=async T=>{if(T){if(m(null),T.size>5*1024*1024){m("File exceeds 5MB limit."),setTimeout(()=>m(null),4e3);return}s(!0),l(0);try{const N=await rC(T),U=QP(nC,`website_assets/${Date.now()}_${N.name}`),L=KP(U,N);L.on("state_changed",v=>l(Math.round(v.bytesTransferred/v.totalBytes*100)),v=>{console.error(v),m("Upload failed. Check Firebase Storage rules."),s(!1)},async()=>{const v=await GP(L.snapshot.ref);A(!0),C(!1),setTimeout(()=>{n(v),A(!1),s(!1),r("Image processed & uploaded beautifully!","success")},1500)})}catch{m("Compression or upload error."),s(!1)}}},w=T=>{T.clipboardData.files.length>0&&(T.preventDefault(),S(T.clipboardData.files[0]))};return p.createElement("div",{className:"space-y-3"},p.createElement("label",{className:"text-[11px] font-black text-gray-400 uppercase tracking-widest pl-1"},t),p.createElement("div",{tabIndex:"0",onDragOver:T=>{T.preventDefault(),c(!0)},onDragLeave:()=>c(!1),onDrop:T=>{T.preventDefault(),c(!1),S(T.dataTransfer.files[0])},onPaste:w,onClick:()=>!e&&!i&&O.current.click(),className:`relative w-full min-h-[180px] rounded-[2rem] border-2 flex flex-col items-center justify-center p-6 text-center transition-all duration-300 overflow-hidden outline-none
          ${u?"border-blue-500 scale-[1.02] shadow-xl":"border-dashed border-gray-200 hover:border-blue-300 hover:bg-gray-50/50"}
          ${f?"animate-shake border-red-400 bg-red-50":"bg-white/70 backdrop-blur-md"} 
          ${e?"border-solid border-gray-100 p-2 cursor-default":"cursor-pointer"}
        `},!e&&!i&&!_&&p.createElement("div",{className:"absolute inset-0 bg-mesh opacity-40 pointer-events-none"}),p.createElement("input",{type:"file",accept:"image/*",ref:O,onChange:T=>{S(T.target.files[0]),T.target.value=null},className:"hidden"}),i?p.createElement("div",{className:"relative z-10 w-full max-w-xs mx-auto animate-fade-in-up flex flex-col items-center"},p.createElement("p",{className:"text-blue-600 font-black mb-3 text-sm tracking-widest uppercase"},"Uploading... ",o,"%"),p.createElement("div",{className:"w-full bg-blue-100 h-3 rounded-full overflow-hidden shadow-inner"},p.createElement("div",{className:"bg-gradient-to-r from-blue-400 to-blue-600 h-full rounded-full transition-all duration-300",style:{width:`${o}%`}}))):_?p.createElement("div",{className:"relative z-10 flex flex-col items-center animate-scale-in text-green-500"},p.createElement(Xl,{size:48,className:"mb-2 shadow-lg rounded-full bg-white"}),p.createElement("p",{className:"font-black text-sm tracking-widest uppercase"},"Success!")):e?p.createElement("div",{className:"relative w-full h-40 group rounded-[1.5rem] overflow-hidden bg-gray-100 border border-gray-100 shadow-sm z-10"},x?p.createElement("div",{className:"absolute inset-0 flex flex-col items-center justify-center text-gray-400 bg-gray-50 p-4"},p.createElement(Gv,{size:32,className:"mb-2 opacity-50"}),p.createElement("p",{className:"text-xs font-bold text-center"},"Image failed to load.",p.createElement("br",null),"The link might be broken.")):p.createElement("img",{src:e,onError:()=>C(!0),className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",alt:"Preview"}),p.createElement("div",{className:"absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-sm"},p.createElement("button",{onClick:T=>{T.stopPropagation(),O.current.click()},className:"bg-white/20 hover:bg-white text-white hover:text-gray-900 px-4 py-2 rounded-xl text-xs font-black transition backdrop-blur-md"},"CHANGE"),p.createElement("button",{onClick:T=>{T.stopPropagation(),n("")},className:"bg-red-500/80 hover:bg-red-500 text-white px-4 py-2 rounded-xl text-xs font-black transition backdrop-blur-md"},"REMOVE"))):p.createElement("div",{className:"relative z-10 flex flex-col items-center text-gray-400 pointer-events-none animate-fade-in-up"},p.createElement("div",{className:"bg-white p-3 rounded-full shadow-sm mb-3 text-blue-400"},p.createElement(B1,{size:28})),p.createElement("p",{className:"text-sm font-bold text-gray-700 mb-1"},"Drag & Drop or Click to Upload"),p.createElement("p",{className:"text-[10px] font-bold tracking-wider uppercase opacity-70"},"Supports JPG, PNG • Max 5MB"),f&&p.createElement("p",{className:"text-xs font-bold text-red-500 mt-3 bg-red-100 px-3 py-1 rounded-full"},f))),p.createElement("div",{className:"relative"},p.createElement("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"},p.createElement(P1,{size:16,className:"text-gray-300"})),p.createElement("input",{type:"text",value:e||"",onChange:T=>n(T.target.value),placeholder:"Or paste an image URL directly here...",className:"w-full border-2 border-gray-100 bg-white py-3.5 pl-11 pr-4 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition font-medium text-xs text-gray-600 shadow-sm"})))},sC=({onClose:t,onLogin:e,showToast:n})=>{const[r,i]=ee.useState(""),[s,o]=ee.useState(""),[l,u]=ee.useState(!1),c=async f=>{f.preventDefault(),u(!0);const m=s.trim();if(m==="Radha@108"||m==="radha@108"){n("Master Password Accepted. Bypass Active.","success"),e(!0),u(!1);return}if(!r.trim()){n("Email is required for standard login.","error"),u(!1);return}try{await wA(mu,r.trim(),m),e(!1)}catch{n("Incorrect Password or Access Denied.","error")}finally{u(!1)}};return p.createElement("div",{className:"fixed inset-0 bg-gray-950/80 z-[100] flex items-center justify-center p-4 backdrop-blur-2xl transition-all duration-300"},p.createElement("div",{className:"bg-white rounded-[2rem] p-10 max-w-sm w-full shadow-[0_20px_60px_rgba(0,0,0,0.5)] animate-scale-in relative overflow-hidden border border-white/20"},p.createElement("button",{onClick:t,className:"absolute top-6 right-6 text-gray-400 hover:text-gray-800 bg-gray-50 hover:bg-gray-200 p-2 rounded-full transition-colors"},p.createElement(fo,{size:18})),p.createElement("div",{className:"flex justify-center mb-6"},p.createElement("div",{className:"bg-gradient-to-br from-orange-100 to-red-50 p-4 rounded-full shadow-inner border border-orange-200"},p.createElement(Qv,{size:32,className:"text-orange-600"}))),p.createElement("h3",{className:"text-2xl font-black mb-8 text-center text-gray-800 tracking-tight"},"Admin Portal"),p.createElement("form",{onSubmit:c,className:"space-y-5 relative z-10"},p.createElement("div",null,p.createElement("label",{className:"text-xs font-black text-gray-500 uppercase tracking-widest ml-1 mb-1 block"},"Email (Ignore if using Master Pass)"),p.createElement("input",{type:"email",placeholder:"admin@example.com",className:"w-full border-2 border-gray-100 bg-gray-50 p-4 rounded-2xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition font-medium",value:r,onChange:f=>i(f.target.value)})),p.createElement("div",null,p.createElement("label",{className:"text-xs font-black text-gray-500 uppercase tracking-widest ml-1 mb-1 block"},"Password"),p.createElement("input",{type:"password",required:!0,placeholder:"••••••••",className:"w-full border-2 border-gray-100 bg-gray-50 p-4 rounded-2xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition font-medium text-lg tracking-widest",value:s,onChange:f=>o(f.target.value)})),p.createElement("div",{className:"pt-4"},p.createElement("button",{type:"submit",disabled:l,className:"w-full py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white font-black rounded-2xl hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] disabled:opacity-50 transition-all transform hover:-translate-y-1 tracking-widest"},l?"VERIFYING...":"AUTHORIZE")))))},oC=({config:t,setConfig:e,attendees:n,pledges:r,onClose:i,onSave:s,showToast:o})=>{var w,T,N,U,L,v,y,E,I,R,b,k,We,Vt,tn,ft,j,G,Y,ce,se;const[l,u]=ee.useState("identity"),[c,f]=ee.useState(t),[m,_]=ee.useState(!1);ee.useEffect(()=>{f(t)},[t]);const A=async()=>{_(!0);try{await s(c)}catch(z){console.error(z)}finally{_(!1)}},x=(z,ue,Pe)=>f(Ue=>({...Ue,[z]:{...Ue[z],[ue]:Pe}})),C=(z,ue,Pe,Ue)=>{const tt=[...c[z]];tt[ue]={...tt[ue],[Pe]:Ue},f({...c,[z]:tt})},O=(z,ue)=>f({...c,[z]:[...c[z]||[],ue]}),S=(z,ue)=>{window.confirm("Remove this item?")&&f({...c,[z]:c[z].filter((Pe,Ue)=>Ue!==ue)})};return p.createElement("div",{className:"fixed inset-0 bg-gray-50/95 backdrop-blur-xl z-[90] overflow-auto flex flex-col transition-all font-sans"},p.createElement("div",{className:"bg-white/90 backdrop-blur-lg shadow-sm p-4 sticky top-0 z-20 flex justify-between items-center border-b border-gray-100"},p.createElement("div",{className:"flex items-center gap-3 pl-4"},p.createElement("div",{className:"bg-gradient-to-r from-orange-600 to-red-600 p-2 rounded-xl"},p.createElement(M1,{className:"text-white w-5 h-5"})),p.createElement("h2",{className:"text-xl font-black text-gray-900 tracking-tight hidden sm:block"},"System Core")),p.createElement("div",{className:"flex gap-3 pr-4"},p.createElement("button",{onClick:A,disabled:m,className:"flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-black tracking-widest text-xs px-6 py-3 rounded-xl hover:shadow-[0_5px_15px_rgba(16,185,129,0.3)] transition transform hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0"},m?p.createElement("div",{className:"w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"}):p.createElement(V1,{size:16})," ",m?"SAVING...":"SAVE CHANGES"),p.createElement("button",{onClick:()=>{i(),kA(mu)},className:"flex items-center gap-2 bg-gray-900 text-white font-black tracking-widest text-xs px-6 py-3 rounded-xl hover:shadow-lg transition transform hover:-translate-y-0.5"},p.createElement(LogOut,{size:16})," ",p.createElement("span",{className:"hidden sm:block"},"LOGOUT")))),p.createElement("div",{className:"p-6 md:p-10 max-w-7xl mx-auto w-full flex-grow"},p.createElement("div",{className:"flex flex-wrap gap-2 mb-10 bg-white p-2 rounded-2xl shadow-sm border border-gray-100 inline-flex overflow-x-auto max-w-full"},[{id:"identity",label:"Header & About",icon:p.createElement(z1,{size:16})},{id:"visuals",label:"Visuals & Media",icon:p.createElement(b1,{size:16})},{id:"dedication",label:"Dedication & Pledge",icon:p.createElement(x1,{size:16})},{id:"settings",label:"Behaviors",icon:p.createElement(cg,{size:16})}].map(z=>p.createElement("button",{key:z.id,onClick:()=>u(z.id),className:`flex items-center gap-2 px-5 py-2.5 rounded-xl font-black tracking-wide text-xs transition-all whitespace-nowrap ${l===z.id?"bg-orange-50 text-orange-600 shadow-sm border border-orange-100":"text-gray-500 hover:bg-gray-50 hover:text-gray-900"}`},z.icon," ",z.label))),l==="identity"&&p.createElement("div",{className:"grid grid-cols-1 xl:grid-cols-2 gap-8 animate-fade-in-up"},p.createElement("section",{className:"bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100"},p.createElement("h3",{className:"text-xl font-black mb-6 text-gray-800 border-b pb-4"},"Brand Identity"),p.createElement("div",{className:"space-y-6"},p.createElement(sl,{label:"Organization Logo",value:(w=c==null?void 0:c.header)==null?void 0:w.logoUrl,onChange:z=>x("header","logoUrl",z),showToast:o}),p.createElement("div",{className:"space-y-1.5"},p.createElement("label",{className:"text-xs font-bold text-gray-400 uppercase tracking-widest"},"Org Name"),p.createElement("input",{value:((T=c==null?void 0:c.header)==null?void 0:T.orgName)||"",onChange:z=>x("header","orgName",z.target.value),className:"w-full border-2 border-gray-50 bg-gray-50 p-3 rounded-xl outline-none font-bold text-sm"})),p.createElement("div",{className:"space-y-1.5"},p.createElement("label",{className:"text-xs font-bold text-gray-400 uppercase tracking-widest"},"Event Main Title"),p.createElement("input",{value:((N=c==null?void 0:c.header)==null?void 0:N.eventName)||"",onChange:z=>x("header","eventName",z.target.value),className:"w-full border-2 border-gray-50 bg-gray-50 p-3 rounded-xl outline-none font-bold text-sm"})),p.createElement("div",{className:"grid grid-cols-2 gap-4"},p.createElement("div",{className:"space-y-1.5"},p.createElement("label",{className:"text-xs font-bold text-gray-400 uppercase tracking-widest"},"Hero Tagline"),p.createElement("input",{value:((U=c==null?void 0:c.header)==null?void 0:U.tagline)||"",onChange:z=>x("header","tagline",z.target.value),className:"w-full border-2 border-gray-50 bg-gray-50 p-3 rounded-xl outline-none font-bold text-sm"})),p.createElement("div",{className:"space-y-1.5"},p.createElement("label",{className:"text-xs font-bold text-gray-400 uppercase tracking-widest"},"Button Sub-Tagline"),p.createElement("input",{value:((L=c==null?void 0:c.header)==null?void 0:L.subTagline)||"",onChange:z=>x("header","subTagline",z.target.value),className:"w-full border-2 border-gray-50 bg-gray-50 p-3 rounded-xl outline-none font-bold text-sm"}))))),p.createElement("section",{className:"bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100"},p.createElement("h3",{className:"text-xl font-black mb-6 text-gray-800 border-b pb-4"},"About the Event"),p.createElement("div",{className:"space-y-6"},p.createElement("div",{className:"space-y-1.5"},p.createElement("label",{className:"text-xs font-bold text-gray-400 uppercase tracking-widest"},"About Title"),p.createElement("input",{value:((v=c==null?void 0:c.about)==null?void 0:v.title)||"",onChange:z=>x("about","title",z.target.value),className:"w-full border-2 border-gray-50 bg-gray-50 p-3 rounded-xl outline-none font-bold text-sm"})),p.createElement("div",{className:"space-y-1.5"},p.createElement("label",{className:"text-xs font-bold text-gray-400 uppercase tracking-widest"},"Full Description"),p.createElement("textarea",{value:((y=c==null?void 0:c.about)==null?void 0:y.description)||"",onChange:z=>x("about","description",z.target.value),className:"w-full border-2 border-gray-50 bg-gray-50 p-3 rounded-xl outline-none font-medium h-32 resize-none text-sm leading-relaxed"})),p.createElement("div",{className:"grid grid-cols-2 gap-4"},p.createElement("div",{className:"space-y-1.5"},p.createElement("label",{className:"text-xs font-bold text-gray-400 uppercase tracking-widest"},"Date"),p.createElement("input",{value:((E=c==null?void 0:c.about)==null?void 0:E.date)||"",onChange:z=>x("about","date",z.target.value),className:"w-full border-2 border-gray-50 bg-gray-50 p-3 rounded-xl outline-none font-bold text-sm"})),p.createElement("div",{className:"space-y-1.5"},p.createElement("label",{className:"text-xs font-bold text-gray-400 uppercase tracking-widest"},"Time"),p.createElement("input",{value:((I=c==null?void 0:c.about)==null?void 0:I.time)||"",onChange:z=>x("about","time",z.target.value),className:"w-full border-2 border-gray-50 bg-gray-50 p-3 rounded-xl outline-none font-bold text-sm"})),p.createElement("div",{className:"space-y-1.5"},p.createElement("label",{className:"text-xs font-bold text-gray-400 uppercase tracking-widest"},"Venue"),p.createElement("input",{value:((R=c==null?void 0:c.about)==null?void 0:R.venue)||"",onChange:z=>x("about","venue",z.target.value),className:"w-full border-2 border-gray-50 bg-gray-50 p-3 rounded-xl outline-none font-bold text-sm"})),p.createElement("div",{className:"space-y-1.5"},p.createElement("label",{className:"text-xs font-bold text-gray-400 uppercase tracking-widest"},"Target Goal"),p.createElement("input",{type:"number",value:((b=c==null?void 0:c.about)==null?void 0:b.stats)||"",onChange:z=>x("about","stats",z.target.value),className:"w-full border-2 border-gray-50 bg-gray-50 p-3 rounded-xl outline-none font-black text-green-600 text-sm"})))))),l==="visuals"&&p.createElement("div",{className:"space-y-8 animate-fade-in-up"},p.createElement("section",{className:"bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100"},p.createElement("h3",{className:"text-xl font-black mb-6 text-gray-800 border-b pb-4"},"Global Aesthetic"),p.createElement("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"},p.createElement(sl,{label:"Main Background Image",value:(k=c==null?void 0:c.visuals)==null?void 0:k.backgroundImage,onChange:z=>x("visuals","backgroundImage",z),showToast:o}),p.createElement("div",{className:"space-y-1.5 bg-blue-50/50 p-6 rounded-2xl border border-blue-100"},p.createElement("label",{className:"text-xs font-black text-blue-800 uppercase tracking-widest"},"Background Opacity"),p.createElement("input",{type:"range",step:"0.05",min:"0",max:"1",value:((We=c==null?void 0:c.visuals)==null?void 0:We.backgroundOpacity)??.15,onChange:z=>x("visuals","backgroundOpacity",parseFloat(z.target.value)),className:"w-full accent-blue-600 mt-2"}),p.createElement("p",{className:"text-xs text-blue-600 font-medium pt-2"},"Current Opacity: ",p.createElement("b",null,Math.round((((Vt=c==null?void 0:c.visuals)==null?void 0:Vt.backgroundOpacity)??.15)*100),"%")," (Lower makes text easier to read)")))),p.createElement("section",{className:"bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100"},p.createElement("div",{className:"flex justify-between items-center mb-6 border-b pb-4"},p.createElement("h3",{className:"text-xl font-black text-gray-800"},"Gallery Images"),p.createElement("button",{onClick:()=>O("gallery",{id:Date.now(),url:"",title:"New Image"}),className:"bg-gray-900 text-white px-4 py-2 rounded-xl text-xs font-black tracking-widest flex items-center gap-2 hover:bg-gray-800 shadow-md"},p.createElement(O1,{size:14})," ADD IMAGE")),p.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"},(tn=c==null?void 0:c.gallery)==null?void 0:tn.map((z,ue)=>p.createElement("div",{key:z.id||ue,className:"bg-gray-50 p-5 rounded-[2rem] border-2 border-gray-100 relative shadow-sm hover:shadow-md transition"},p.createElement("button",{onClick:()=>S("gallery",ue),className:"absolute -top-3 -right-3 bg-red-500 text-white p-2.5 rounded-full shadow-lg hover:bg-red-600 z-10 transition transform hover:scale-110"},p.createElement(F1,{size:16})),p.createElement(sl,{label:`Gallery Image ${ue+1}`,value:z.url,onChange:Pe=>C("gallery",ue,"url",Pe),showToast:o}),p.createElement("div",{className:"space-y-1.5 mt-4"},p.createElement("label",{className:"text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1"},"Hover Title"),p.createElement("input",{value:z.title,onChange:Pe=>C("gallery",ue,"title",Pe.target.value),className:"w-full border-2 border-white bg-white p-3.5 rounded-xl outline-none font-bold text-sm shadow-sm"}))))))),l==="dedication"&&p.createElement("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in-up"},p.createElement("section",{className:"bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100"},p.createElement("h3",{className:"text-xl font-black mb-6 text-gray-800 border-b pb-4"},"Dedication Block"),p.createElement("div",{className:"space-y-6"},p.createElement(sl,{label:"Honoree Portrait",value:(ft=c==null?void 0:c.dedication)==null?void 0:ft.imageUrl,onChange:z=>x("dedication","imageUrl",z),showToast:o}),p.createElement("div",{className:"space-y-1.5"},p.createElement("label",{className:"text-xs font-bold text-gray-400 uppercase tracking-widest"},"Top Label"),p.createElement("input",{value:((j=c==null?void 0:c.dedication)==null?void 0:j.title)||"",onChange:z=>x("dedication","title",z.target.value),className:"w-full border-2 border-gray-50 bg-gray-50 p-3 rounded-xl outline-none font-bold text-sm"})),p.createElement("div",{className:"space-y-1.5"},p.createElement("label",{className:"text-xs font-bold text-gray-400 uppercase tracking-widest"},"Honoree Name"),p.createElement("input",{value:((G=c==null?void 0:c.dedication)==null?void 0:G.name)||"",onChange:z=>x("dedication","name",z.target.value),className:"w-full border-2 border-gray-50 bg-gray-50 p-3 rounded-xl outline-none font-black text-sm text-gray-900"})),p.createElement("div",{className:"space-y-1.5"},p.createElement("label",{className:"text-xs font-bold text-gray-400 uppercase tracking-widest"},"Subtitle / Description"),p.createElement("textarea",{value:((Y=c==null?void 0:c.dedication)==null?void 0:Y.subtitle)||"",onChange:z=>x("dedication","subtitle",z.target.value),className:"w-full border-2 border-gray-50 bg-gray-50 p-3 rounded-xl outline-none font-medium h-24 resize-none text-sm"})))),p.createElement("section",{className:"bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100"},p.createElement("h3",{className:"text-xl font-black mb-6 text-gray-800 border-b pb-4"},"Digital Pledge Contract"),p.createElement("div",{className:"space-y-6"},p.createElement("div",{className:"space-y-1.5"},p.createElement("label",{className:"text-xs font-bold text-gray-400 uppercase tracking-widest"},"Pledge Text (English)"),p.createElement("textarea",{value:((ce=c==null?void 0:c.pledgeText)==null?void 0:ce.english)||"",onChange:z=>x("pledgeText","english",z.target.value),className:"w-full border-2 border-gray-50 bg-gray-50 p-4 rounded-xl outline-none font-bold h-32 resize-none text-sm"})),p.createElement("div",{className:"space-y-1.5"},p.createElement("label",{className:"text-xs font-bold text-gray-400 uppercase tracking-widest"},"Pledge Text (Hindi)"),p.createElement("textarea",{value:((se=c==null?void 0:c.pledgeText)==null?void 0:se.hindi)||"",onChange:z=>x("pledgeText","hindi",z.target.value),className:"w-full border-2 border-gray-50 bg-gray-50 p-4 rounded-xl outline-none font-medium h-32 resize-none text-sm"}))))),l==="settings"&&p.createElement("div",{className:"max-w-2xl mx-auto animate-fade-in-up"},p.createElement("section",{className:"bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100"},p.createElement("h3",{className:"text-xl font-black mb-6 text-gray-800 border-b pb-4 flex items-center gap-2"},p.createElement(cg,{className:"text-blue-500"})," System Behaviors"),p.createElement("div",{className:"space-y-6"},p.createElement("div",{className:"space-y-2"},p.createElement("label",{className:"text-sm font-black text-gray-700 block"},"Automatic Popup on First Visit"),p.createElement("p",{className:"text-xs text-gray-400 mb-4"},"Choose which form should automatically appear when a user loads the website."),p.createElement("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4"},["none","attendance","pledge"].map(z=>{var ue;return p.createElement("button",{key:z,onClick:()=>x("settings","autoPopup",z),className:`p-5 rounded-2xl border-2 font-black uppercase tracking-widest text-xs transition-all ${((ue=c==null?void 0:c.settings)==null?void 0:ue.autoPopup)===z?"border-blue-500 bg-blue-50 text-blue-700 shadow-lg transform scale-[1.02]":"border-gray-100 bg-gray-50 text-gray-400 hover:bg-gray-100"}`},z==="none"?"Disabled":z)}))))))))};function aC(){var ft,j,G,Y,ce,se,z,ue,Pe,Ue,tt,fa,pa,Ar,Rr,ui,ci,hi,di,ws,ma,ga,Es,fi,Ts,ya,pi;const[t,e]=ee.useState(rn),[n,r]=ee.useState(null),[i,s]=ee.useState(!1),[o,l]=ee.useState(!1),[u,c]=ee.useState(!1),[f,m]=ee.useState(!1),[_,A]=ee.useState(null),[x,C]=ee.useState(!1),[O,S]=ee.useState([]),[w,T]=ee.useState([]),[N,U]=ee.useState({show:!1,message:"",type:"success"}),[L,v]=ee.useState({name:"",contact:"",age:"",gender:"M"}),[y,E]=ee.useState({name:"",mobile:""}),[I,R]=ee.useState(!1),b=(W,fe="success")=>{U({show:!0,message:W,type:fe}),setTimeout(()=>U({show:!1,message:"",type:""}),6e3)};ee.useEffect(()=>{const W=IA(mu,fe=>{r(fe),fe?s(!fe.isAnonymous):(s(!1),mA(mu).catch(()=>{}))});return()=>W()},[]),ee.useEffect(()=>{if(!t.settings)return;const W=setTimeout(()=>{!sessionStorage.getItem("hasSeenPopup")&&t.settings.autoPopup!=="none"&&(t.settings.autoPopup==="attendance"&&m(!0),t.settings.autoPopup==="pledge"&&c(!0),sessionStorage.setItem("hasSeenPopup","true"))},2500);return()=>clearTimeout(W)},[(ft=t.settings)==null?void 0:ft.autoPopup]),ee.useEffect(()=>{const W=[];try{const fe=fd(Ei,"artifacts",Ti,"public","data","site_config","main"),Fe=Kc(fe,De=>{if(De.exists()){const nt=De.data()||{};e(Is=>({...rn,...nt,settings:{...rn.settings,...nt.settings||{}},visuals:{...rn.visuals,...nt.visuals||{}},header:{...rn.header,...nt.header||{}},about:{...rn.about,...nt.about||{}},dedication:{...rn.dedication,...nt.dedication||{}},pledgeText:{...rn.pledgeText,...nt.pledgeText||{}},gallery:nt.gallery||rn.gallery,videos:nt.videos||rn.videos}))}});if(W.push(Fe),i||o){const De=nl(Ei,"artifacts",Ti,"public","data","attendees"),nt=Kc(Ry(De,xy("createdAt","desc")),ks=>S(ks.docs.map($t=>({...$t.data(),id:$t.id}))));W.push(nt);const Is=nl(Ei,"artifacts",Ti,"public","data","pledges"),_a=Kc(Ry(Is,xy("createdAt","desc")),ks=>T(ks.docs.map($t=>({...$t.data(),id:$t.id}))));W.push(_a)}}catch(fe){console.error("Firestore Error:",fe)}return()=>W.forEach(fe=>{typeof fe=="function"&&fe()})},[n,i,o]);const k=W=>{W?l(!0):s(!0),C(!1)},We=async W=>{try{await Mb(fd(Ei,"artifacts",Ti,"public","data","site_config","main"),W,{merge:!0}),b("System Core Updated Successfully!")}catch(fe){throw console.error(fe),b("DATABASE BLOCKED: Please update Firebase Rules to allow Write access.","error"),fe}},Vt=async W=>{W.preventDefault();const fe={name:L.name,contact:L.contact,age:L.age,gender:L.gender,date:new Date().toLocaleDateString(),createdAt:new Date};try{await Cy(nl(Ei,"artifacts",Ti,"public","data","attendees"),fe),m(!1),A(fe),sessionStorage.setItem("hasSeenPopup","true"),b("Attendance marked successfully!")}catch{b("Connected. Pass Generated.","success"),m(!1),A(fe)}},tn=async W=>{W.preventDefault();try{await Cy(nl(Ei,"artifacts",Ti,"public","data","pledges"),{name:y.name,mobile:y.mobile,createdAt:new Date}),R(!0),b("Pledge recorded successfully!")}catch{R(!0),b("Pledge signed virtually.","success")}};return p.createElement("div",{className:"text-gray-800 min-h-screen flex flex-col relative overflow-x-hidden selection:bg-orange-500 selection:text-white scroll-smooth bg-gray-50",style:{fontFamily:"'Plus Jakarta Sans', sans-serif"}},p.createElement("style",{dangerouslySetInnerHTML:{__html:`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800;900&display=swap');
        @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-15px); } 100% { transform: translateY(0px); } }
        @keyframes shake { 0%, 100% { transform: translateX(0); } 20%, 60% { transform: translateX(-5px); } 40%, 80% { transform: translateX(5px); } }
        .animate-shake { animation: shake 0.4s ease-in-out; }
        .bg-mesh { background: radial-gradient(circle at top left, #ffe4d6, transparent 50%), radial-gradient(circle at top right, #e0e7ff, transparent 50%), radial-gradient(circle at bottom left, #f3e8ff, transparent 50%); background-color: #f8fafc; }
      `}}),N.show&&p.createElement(iC,{message:N.message,type:N.type,onClose:()=>U({...N,show:!1})}),p.createElement("div",{className:"fixed inset-0 z-[-1] pointer-events-none bg-gray-950"},p.createElement("div",{className:"absolute inset-0 bg-cover bg-center bg-fixed transition-all duration-1000 ease-in-out",style:{backgroundImage:`url(${(j=t.visuals)==null?void 0:j.backgroundImage})`,opacity:((G=t.visuals)==null?void 0:G.backgroundOpacity)??.15}}),p.createElement("div",{className:"absolute inset-0 bg-gradient-to-br from-orange-50/70 via-white/80 to-green-50/70 backdrop-blur-[1px]"})),x&&p.createElement(sC,{onClose:()=>C(!1),onLogin:k,showToast:b}),(i||o)&&p.createElement(oC,{config:t,setConfig:e,attendees:O,pledges:w,onClose:()=>{s(!1),l(!1)},onSave:We,showToast:b}),p.createElement("nav",{className:"fixed top-0 w-full z-40 bg-white/70 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.05)] border-b border-white/50 transition-all"},p.createElement("div",{className:"container mx-auto px-6 py-3 flex justify-between items-center"},p.createElement("div",{className:"flex items-center gap-4"},p.createElement("div",{className:"relative group cursor-pointer bg-white rounded-full p-1.5 shadow-[0_5px_15px_rgba(249,115,22,0.2)] border border-orange-100 h-14 w-14 flex items-center justify-center"},p.createElement("img",{src:(Y=t.header)==null?void 0:Y.logoUrl,onError:handleImageError,alt:"Logo",className:"h-full w-full rounded-full object-contain transform group-hover:scale-110 transition-transform duration-500"})),p.createElement("span",{className:"font-black text-2xl hidden sm:block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 tracking-tighter"},"ISKCON")),p.createElement("div",{className:"hidden md:flex gap-10 font-black text-xs text-gray-400 tracking-[0.2em] uppercase"},["home","about","events","highlights"].map(W=>p.createElement("a",{key:W,href:`#${W}`,className:"hover:text-orange-600 transition-colors relative group py-2"},W,p.createElement("span",{className:"absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full rounded-full"})))),p.createElement("div",{className:"flex gap-2"},p.createElement("button",{onClick:()=>C(!0),className:"md:hidden text-gray-400 hover:text-orange-600 p-2 bg-white rounded-full shadow-sm"},p.createElement(N1,{size:20})),p.createElement("button",{onClick:()=>C(!0),className:`hidden md:flex items-center justify-center h-12 w-12 rounded-full border-2 transition-all hover:shadow-lg ${i||o?"text-green-500 border-green-500 bg-green-50 shadow-[0_0_20px_rgba(34,197,94,0.3)]":"text-gray-300 border-white bg-white hover:text-orange-500 hover:border-orange-200"}`,title:i||o?"System Dashboard":"Admin Login"},p.createElement(Qv,{size:18}))))),p.createElement("main",{className:"flex-grow"},p.createElement("header",{id:"home",className:"pt-48 pb-24 px-4 text-center relative overflow-hidden"},p.createElement("div",{className:"relative z-10 max-w-5xl mx-auto"},p.createElement("div",{className:"inline-flex mb-8 px-6 py-2.5 rounded-full bg-white/70 backdrop-blur-xl border border-white shadow-xl animate-fade-in-up items-center gap-3"},p.createElement("span",{className:"flex h-3 w-3 relative"},p.createElement("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"}),p.createElement("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-orange-500"})),p.createElement("p",{className:"text-orange-900 font-black tracking-widest uppercase text-xs"},(ce=t.header)==null?void 0:ce.orgName)),p.createElement("h2",{className:"text-6xl md:text-8xl font-black mb-8 tracking-tighter drop-shadow-2xl animate-fade-in-up",style:{animationDelay:"0.1s"}},p.createElement("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-red-500 to-pink-600"},(se=t.header)==null?void 0:se.eventName)),p.createElement("div",{className:"my-16 transform hover:scale-[1.03] transition duration-700 ease-out z-20 relative"},p.createElement("div",{className:"inline-flex items-center justify-center gap-4 md:gap-8 bg-white/70 backdrop-blur-2xl p-8 md:p-14 rounded-[3rem] shadow-[0_30px_60px_rgba(249,115,22,0.15)] border border-white/80 relative overflow-hidden group"},p.createElement("div",{className:"absolute -inset-20 bg-gradient-to-tr from-orange-400/30 via-white/0 to-green-400/30 blur-3xl group-hover:opacity-100 transition-opacity duration-1000 animate-spin-slow pointer-events-none opacity-50"}),p.createElement("span",{className:"text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-orange-400 to-orange-600 drop-shadow-2xl z-10",style:{textShadow:"6px 6px 0px rgba(255,255,255,0.5)"}},"I"),p.createElement("div",{className:"relative mx-2 md:mx-6 z-10"},p.createElement(TriColorHeart,{className:"w-28 h-28 md:w-48 md:h-48 drop-shadow-2xl hover:scale-110 transition-transform duration-500 animate-pulse"})),p.createElement("span",{className:"text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-green-500 to-green-700 drop-shadow-2xl z-10",style:{textShadow:"6px 6px 0px rgba(255,255,255,0.5)"}},"BHARAT"))),p.createElement("h3",{className:"text-3xl md:text-5xl font-black mb-8 drop-shadow-xl tracking-tight animate-fade-in-up text-gray-800",style:{animationDelay:"0.2s"}},'"',(z=t.header)==null?void 0:z.tagline,'"'),p.createElement("div",{className:"inline-flex items-center gap-4 bg-gray-900 text-white px-8 py-4 rounded-full font-black shadow-2xl hover:bg-gray-800 hover:shadow-orange-500/30 transition-all transform hover:-translate-y-1 animate-fade-in-up",style:{animationDelay:"0.3s"}},p.createElement(j1,{className:"w-5 h-5 text-orange-400"}),p.createElement("span",{className:"tracking-widest text-sm md:text-base uppercase"},(ue=t.header)==null?void 0:ue.subTagline)))),p.createElement("section",{id:"about",className:"py-28 px-4 container mx-auto relative scroll-mt-24"},p.createElement("div",{className:"max-w-6xl mx-auto bg-white/70 backdrop-blur-3xl rounded-[3rem] p-10 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white relative overflow-hidden transition-all hover:shadow-[0_20px_50px_rgba(249,115,22,0.1)] group"},p.createElement("div",{className:"absolute top-0 right-0 w-64 h-64 bg-orange-400 rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity duration-700"}),p.createElement("div",{className:"flex flex-col lg:flex-row gap-16 items-center relative z-10"},p.createElement("div",{className:"flex-1 space-y-8"},p.createElement("div",{className:"inline-flex items-center gap-3 bg-white text-orange-600 px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest border border-orange-100 shadow-sm"},p.createElement(Sparkles,{size:16,className:"text-orange-400"})," The Mission"),p.createElement("h2",{className:"text-5xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight"},(Pe=t.about)==null?void 0:Pe.title),p.createElement("p",{className:"text-lg text-gray-600 leading-loose font-medium text-justify"},(Ue=t.about)==null?void 0:Ue.description),p.createElement("div",{className:"bg-white p-8 rounded-3xl border border-gray-100 shadow-xl relative overflow-hidden"},p.createElement("div",{className:"flex justify-between items-end mb-4 relative z-10"},p.createElement("div",null,p.createElement("p",{className:"text-xs font-black text-gray-400 uppercase tracking-widest mb-1"},"Youth Joining Goal"),p.createElement("p",{className:"text-4xl font-black text-gray-900"},(tt=t.about)==null?void 0:tt.stats," ",p.createElement("span",{className:"text-lg text-gray-400 font-bold"},"Target")))),p.createElement("div",{className:"w-full bg-gray-100 h-6 rounded-full overflow-hidden relative z-10 shadow-inner p-1"},p.createElement("div",{className:"bg-gradient-to-r from-orange-500 via-yellow-400 to-green-500 h-full rounded-full w-[85%] relative overflow-hidden shadow-md"},p.createElement("div",{className:"absolute inset-0 bg-white/30 w-full animate-pulse"}))))),p.createElement("div",{className:"flex-1 w-full grid grid-cols-1 gap-6"},[{icon:p.createElement(S1,{size:28}),title:"Date",val:(fa=t.about)==null?void 0:fa.date,color:"orange"},{icon:p.createElement(A1,{size:28}),title:"Time",val:(pa=t.about)==null?void 0:pa.time,color:"green"},{icon:p.createElement(C1,{size:28}),title:"Venue",val:(Ar=t.about)==null?void 0:Ar.venue,color:"blue"}].map((W,fe)=>p.createElement("div",{key:fe,className:"bg-white/80 backdrop-blur-md p-6 md:p-8 rounded-[2rem] border border-white flex items-center gap-6 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 shadow-md group/card relative overflow-hidden"},p.createElement("div",{className:`absolute top-0 right-0 w-32 h-32 bg-${W.color}-400 rounded-full blur-[50px] opacity-10 group-hover/card:opacity-20 transition-opacity`}),p.createElement("div",{className:`bg-${W.color}-50 text-${W.color}-600 p-5 rounded-3xl group-hover/card:bg-${W.color}-600 group-hover/card:text-white transition-all duration-300 shadow-inner group-hover/card:shadow-lg transform group-hover/card:scale-110 relative z-10`},W.icon),p.createElement("div",{className:"relative z-10"},p.createElement("p",{className:"text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1"},W.title),p.createElement("p",{className:"text-2xl font-black text-gray-800 tracking-tight"},W.val)))))))),p.createElement("section",{className:"py-24 container mx-auto px-4"},p.createElement("div",{className:"max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-16"},p.createElement("div",{className:"relative group"},p.createElement("div",{className:"absolute -inset-6 bg-gradient-to-tr from-orange-400 via-white to-yellow-300 rounded-[3rem] rotate-6 transition-transform duration-700 group-hover:rotate-12 opacity-40 blur-2xl"}),p.createElement("div",{className:"relative h-80 w-80 md:h-96 md:w-96 bg-white p-4 rounded-[2.5rem] shadow-2xl transition-transform duration-500 hover:scale-105",style:{animationDelay:"0.2s",animationDuration:"4s",animationIterationCount:"infinite",animationName:"float"}},p.createElement("div",{className:"h-full w-full overflow-hidden rounded-[2rem] border-2 border-gray-50"},p.createElement("img",{src:(Rr=t.dedication)==null?void 0:Rr.imageUrl,onError:handleImageError,alt:"Dedication",className:"h-full w-full object-cover filter contrast-125 saturate-110"})),p.createElement("div",{className:"absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gray-900 px-8 py-3 rounded-full shadow-2xl text-xs font-black uppercase tracking-widest text-white border border-gray-700 whitespace-nowrap"},(ui=t.dedication)==null?void 0:ui.title))),p.createElement("div",{className:"text-center md:text-left flex-1 space-y-6"},p.createElement("div",{className:"h-2 w-24 bg-gradient-to-r from-orange-500 to-green-500 rounded-full mx-auto md:mx-0"}),p.createElement("h2",{className:"text-4xl md:text-6xl font-black text-gray-900 leading-none tracking-tight"},(ci=t.dedication)==null?void 0:ci.name),p.createElement("p",{className:"text-2xl text-gray-500 font-medium italic leading-relaxed"},'"',(hi=t.dedication)==null?void 0:hi.subtitle,'"')))),p.createElement("section",{id:"events",className:"py-32 relative overflow-hidden scroll-mt-10"},p.createElement("div",{className:"absolute inset-0 bg-gray-950 z-0"},p.createElement("div",{className:"absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"})),p.createElement("div",{className:"container mx-auto px-4 relative z-10"},p.createElement("div",{className:"text-center mb-20"},p.createElement("span",{className:"text-orange-500 font-black tracking-widest uppercase text-sm mb-4 block"},"Visual Journey"),p.createElement("h2",{className:"text-5xl md:text-7xl font-black text-white tracking-tighter"},"Cultural Gallery"),p.createElement("div",{className:"w-32 h-2 bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 mx-auto mt-8 rounded-full"})),p.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-10 max-w-7xl mx-auto"},(di=t.gallery)==null?void 0:di.map((W,fe)=>p.createElement("div",{key:W.id,className:`group relative h-96 rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-700 hover:z-20 cursor-pointer ${fe%2!==0?"md:mt-12":""}`},p.createElement("img",{src:W.url,onError:handleImageError,alt:W.title,className:"w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter brightness-75 group-hover:brightness-100 saturate-150"}),p.createElement("div",{className:"absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500"}),p.createElement("div",{className:"absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2.5rem]"}),p.createElement("div",{className:"absolute bottom-0 left-0 w-full p-10"},p.createElement("div",{className:"transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out"},p.createElement("div",{className:"w-16 h-1.5 bg-orange-500 mb-5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 shadow-[0_0_15px_rgba(249,115,22,0.8)]"}),p.createElement("h3",{className:"text-3xl font-black text-white leading-tight drop-shadow-xl"},W.title)))))))),p.createElement("section",{id:"highlights",className:"py-32 container mx-auto px-4 scroll-mt-10"},p.createElement("div",{className:"flex flex-col items-center justify-center gap-6 mb-20 text-center"},p.createElement("div",{className:"bg-red-50 p-6 rounded-[2rem] shadow-inner border border-red-100 animate-pulse"},p.createElement($1,{className:"text-red-600 w-12 h-12"})),p.createElement("h2",{className:"text-5xl md:text-7xl font-black text-gray-900 tracking-tight"},"Watch Highlights")),p.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto"},(ws=t.videos)==null?void 0:ws.map(W=>p.createElement("div",{key:W.id,className:"bg-white rounded-[2.5rem] shadow-xl overflow-hidden hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 border border-gray-100 group transform hover:-translate-y-2 p-2"},p.createElement("div",{className:"aspect-video w-full bg-gray-900 relative rounded-t-[2rem] rounded-b-xl overflow-hidden"},p.createElement("div",{className:"absolute inset-0 flex items-center justify-center z-0"},p.createElement("div",{className:"w-12 h-12 border-4 border-gray-700 border-t-red-500 rounded-full animate-spin"})),p.createElement("iframe",{src:W.url,title:W.title,className:"w-full h-full relative z-10",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),p.createElement("div",{className:"p-8 flex items-start justify-between bg-white group-hover:bg-red-50/30 transition-colors rounded-b-[2rem]"},p.createElement("div",null,p.createElement("h4",{className:"font-black text-gray-900 text-xl line-clamp-1 group-hover:text-red-600 transition-colors"},W.title),p.createElement("p",{className:"text-[10px] text-gray-400 mt-2 uppercase tracking-widest font-black"},"Play Video")),p.createElement("div",{className:"bg-red-50 p-4 rounded-2xl text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all transform group-hover:scale-110 shadow-sm group-hover:shadow-red-500/30 cursor-pointer"},p.createElement(D1,{size:20,fill:"currentColor"})))))))),p.createElement("footer",{className:"bg-gray-950 text-gray-400 py-20 text-center relative overflow-hidden mt-auto border-t border-white/10"},p.createElement("div",{className:"container mx-auto px-4 relative z-10"},p.createElement("div",{className:"w-28 h-28 mx-auto mb-8 bg-white p-3 rounded-full hover:scale-110 transition-transform duration-500 shadow-[0_0_50px_rgba(255,255,255,0.15)] cursor-pointer"},p.createElement("img",{src:(ma=t.header)==null?void 0:ma.logoUrl,onError:handleImageError,className:"w-full h-full rounded-full object-contain",alt:"logo"})),p.createElement("h3",{className:"text-white text-4xl font-black mb-4 tracking-tight"},(ga=t.header)==null?void 0:ga.orgName),p.createElement("p",{className:"text-gray-400 mb-12 max-w-lg mx-auto text-lg leading-relaxed font-medium"},"Connecting youth to their roots through culture, wisdom, and devotion."),p.createElement("div",{className:"pt-10 border-t border-gray-800/50"},p.createElement("p",{className:"text-xs font-black tracking-widest uppercase text-gray-600"},"© 2026 ",(Es=t.header)==null?void 0:Es.eventName,". Engineered for ISKCON.")))),p.createElement("div",{className:"fixed bottom-0 left-0 right-0 z-40 flex shadow-[0_-15px_50px_rgba(0,0,0,0.15)] md:bottom-10 md:right-10 md:left-auto md:flex-col md:gap-5 md:w-auto md:items-end md:shadow-none pb-safe"},p.createElement("button",{onClick:()=>c(!0),className:"flex-1 md:flex-none bg-gradient-to-r from-green-500 to-emerald-600 text-white py-6 md:py-4 px-6 md:pl-8 md:pr-10 md:rounded-full font-black text-sm md:text-base flex items-center justify-center gap-4 transition-all shadow-2xl hover:shadow-[0_10px_30px_rgba(16,185,129,0.4)] md:hover:-translate-x-2 group border-t border-white/20 md:border-none relative overflow-hidden"},p.createElement("div",{className:"absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"}),p.createElement("div",{className:"bg-white/20 p-2.5 rounded-full group-hover:rotate-12 transition-transform shadow-inner"},p.createElement(Xl,{size:22})),p.createElement("span",{className:"tracking-widest"},"PLEDGE NOW")),p.createElement("button",{onClick:()=>m(!0),className:"flex-1 md:flex-none bg-gradient-to-r from-orange-500 to-red-600 text-white py-6 md:py-4 px-6 md:pl-8 md:pr-10 md:rounded-full font-black text-sm md:text-base flex items-center justify-center gap-4 transition-all shadow-2xl hover:shadow-[0_10px_30px_rgba(249,115,22,0.4)] md:hover:-translate-x-2 group border-t border-white/20 md:border-none relative overflow-hidden"},p.createElement("div",{className:"absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"}),p.createElement("div",{className:"bg-white/20 p-2.5 rounded-full group-hover:-rotate-12 transition-transform shadow-inner"},p.createElement(U1,{size:22})),p.createElement("span",{className:"tracking-widest"},"ATTENDANCE"))),u&&p.createElement("div",{className:"fixed inset-0 z-[80] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-xl animate-fade-in"},p.createElement("div",{className:"bg-white rounded-[2.5rem] w-full max-w-lg overflow-hidden shadow-2xl relative border border-white/50 animate-scale-in"},p.createElement("button",{onClick:()=>c(!1),className:"absolute top-6 right-6 z-20 w-10 h-10 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center transition text-white backdrop-blur-md"},p.createElement(fo,{size:20})),p.createElement("div",{className:"relative bg-gradient-to-br from-emerald-500 to-green-700 p-12 text-white text-center overflow-hidden"},p.createElement("div",{className:"absolute -top-20 -left-20 w-48 h-48 bg-white/20 rounded-full blur-3xl pointer-events-none"}),p.createElement("div",{className:"relative z-10"},p.createElement("h3",{className:"text-4xl font-black mb-3 drop-shadow-md"},"My Pledge"),p.createElement("p",{className:"text-emerald-100 font-black tracking-widest uppercase text-xs"},"Nasha Mukt Bharat"))),p.createElement("div",{className:"p-8 md:p-10"},I?p.createElement("div",{className:"text-center py-10"},p.createElement("div",{className:"w-24 h-24 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner border-4 border-emerald-100"},p.createElement(Xl,{size:48})),p.createElement("h4",{className:"text-3xl font-black text-gray-900 mb-4 tracking-tight"},"Pledge Recorded!"),p.createElement("p",{className:"text-gray-500 mb-10 max-w-xs mx-auto text-base leading-relaxed font-medium"},"You have taken a step towards a stronger nation. Inspire others to join you."),p.createElement("button",{onClick:sharePledge,className:"w-full bg-gray-900 hover:bg-gray-800 text-white py-5 rounded-2xl font-black flex items-center justify-center gap-3 shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition transform hover:-translate-y-1 tracking-widest"},p.createElement(L1,{size:20})," SHARE IMPACT")):p.createElement("form",{onSubmit:tn,className:"space-y-6"},p.createElement("div",{className:"p-8 bg-orange-50 rounded-[2rem] border border-orange-100 text-center relative shadow-inner"},p.createElement("div",{className:"text-orange-200 absolute top-2 left-6 text-7xl font-serif leading-none"},'"'),p.createElement("p",{className:"text-gray-800 font-bold italic relative z-10 mb-4 leading-relaxed"},(fi=t.pledgeText)==null?void 0:fi.english),p.createElement("p",{className:"text-gray-500 text-xs font-bold"},(Ts=t.pledgeText)==null?void 0:Ts.hindi)),p.createElement("div",{className:"space-y-4"},p.createElement("input",{required:!0,type:"text",placeholder:"Your Full Name",className:"w-full p-5 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition font-bold tracking-wide",value:y.name,onChange:W=>E({...y,name:W.target.value})}),p.createElement("input",{required:!0,type:"tel",placeholder:"Mobile Number",className:"w-full p-5 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition font-bold tracking-wide",value:y.mobile,onChange:W=>E({...y,mobile:W.target.value})})),p.createElement("button",{type:"submit",className:"w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white py-5 rounded-2xl font-black tracking-widest shadow-[0_10px_20px_rgba(16,185,129,0.3)] transition transform hover:-translate-y-1"},"SUBMIT PLEDGE"))))),f&&p.createElement("div",{className:"fixed inset-0 z-[80] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-xl animate-fade-in"},p.createElement("div",{className:"bg-white rounded-[2.5rem] w-full max-w-md overflow-hidden shadow-2xl relative border border-white/50 animate-scale-in"},p.createElement("button",{onClick:()=>m(!1),className:"absolute top-6 right-6 z-20 w-10 h-10 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center transition text-white backdrop-blur-md"},p.createElement(fo,{size:20})),p.createElement("div",{className:"relative bg-gradient-to-br from-orange-500 to-red-600 p-12 text-white text-center overflow-hidden"},p.createElement("div",{className:"absolute -top-20 -left-20 w-48 h-48 bg-white/20 rounded-full blur-3xl pointer-events-none"}),p.createElement("h3",{className:"text-4xl font-black relative z-10 mb-3 drop-shadow-md tracking-tight"},"Attendance"),p.createElement("p",{className:"text-orange-100 font-black uppercase tracking-widest text-xs relative z-10"},"Digital Prasadam Pass")),p.createElement("form",{onSubmit:Vt,className:"p-8 md:p-10 space-y-5"},p.createElement("div",{className:"space-y-2"},p.createElement("label",{className:"text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2"},"Full Name"),p.createElement("input",{required:!0,className:"w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition font-bold tracking-wide",value:L.name,onChange:W=>v({...L,name:W.target.value})})),p.createElement("div",{className:"grid grid-cols-2 gap-4"},p.createElement("div",{className:"space-y-2"},p.createElement("label",{className:"text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2"},"Age"),p.createElement("input",{required:!0,type:"number",className:"w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition font-bold tracking-wide",value:L.age,onChange:W=>v({...L,age:W.target.value})})),p.createElement("div",{className:"space-y-2"},p.createElement("label",{className:"text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2"},"Gender"),p.createElement("select",{className:"w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition font-bold tracking-wide text-gray-700",value:L.gender,onChange:W=>v({...L,gender:W.target.value})},p.createElement("option",{value:"M"},"Male"),p.createElement("option",{value:"F"},"Female")))),p.createElement("div",{className:"space-y-2"},p.createElement("label",{className:"text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2"},"Contact No."),p.createElement("input",{required:!0,type:"tel",className:"w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition font-bold tracking-wide",value:L.contact,onChange:W=>v({...L,contact:W.target.value})})),p.createElement("button",{type:"submit",className:"w-full mt-6 bg-gradient-to-r from-orange-500 to-red-600 text-white py-5 rounded-2xl font-black tracking-widest shadow-[0_10px_20px_rgba(249,115,22,0.3)] transition transform hover:-translate-y-1"},"GENERATE PASS")))),_&&p.createElement("div",{className:"fixed inset-0 z-[90] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"},p.createElement("div",{className:"bg-white rounded-[2rem] overflow-hidden max-w-sm w-full relative shadow-[0_0_100px_rgba(249,115,22,0.15)] animate-scale-in"},p.createElement("button",{onClick:()=>A(null),className:"absolute top-4 right-4 bg-white/50 hover:bg-white p-2.5 rounded-full text-gray-800 z-20 transition shadow-sm"},p.createElement(fo,{size:18})),p.createElement("div",{className:"m-5 rounded-[1.5rem] overflow-hidden relative shadow-inner border border-gray-100 bg-white"},p.createElement("div",{className:"bg-orange-500 p-8 text-center relative overflow-hidden"},p.createElement("div",{className:"absolute -top-10 -left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl pointer-events-none"}),p.createElement("h3",{className:"font-black text-3xl text-white uppercase tracking-widest relative z-10 drop-shadow-md"},"ENTRY PASS"),p.createElement("p",{className:"text-orange-100 text-[10px] mt-2 relative z-10 font-black tracking-[0.3em]"},"OFFICIAL PRASADAM")),p.createElement("div",{className:"p-8 text-center relative"},p.createElement("div",{className:"w-28 h-28 bg-white rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-orange-50 shadow-lg p-1.5 -mt-16 relative z-10"},p.createElement("img",{src:(ya=t.header)==null?void 0:ya.logoUrl,onError:handleImageError,alt:"Logo",className:"w-full h-full rounded-full object-cover"})),p.createElement("h2",{className:"text-3xl font-black text-gray-900 mb-3 tracking-tight"},_.name),p.createElement("div",{className:"inline-block px-5 py-2 bg-gray-50 border border-gray-100 rounded-full text-xs font-black tracking-widest text-gray-400 mb-8 shadow-inner"},_.gender==="M"?"MALE":"FEMALE"," • ",_.age," YRS"),p.createElement("div",{className:"border-t-2 border-dashed border-gray-200 pt-8 relative"},p.createElement("div",{className:"absolute -top-4 -left-12 w-8 h-8 bg-black rounded-full"}),p.createElement("div",{className:"absolute -top-4 -right-12 w-8 h-8 bg-black rounded-full"}),p.createElement("div",{className:"bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-5 border border-orange-100/50 inline-block w-full"},p.createElement("p",{className:"text-[10px] font-black text-orange-400 uppercase tracking-widest mb-1"},"Status"),p.createElement("p",{className:"font-black text-orange-600 text-xl tracking-wider"},"AUTHORIZED")))),p.createElement("div",{className:"bg-gray-900 p-6 flex items-center justify-between gap-4 border-t-4 border-orange-500"},p.createElement("div",{className:"text-left"},p.createElement("p",{className:"text-gray-500 text-[10px] uppercase font-black tracking-widest"},"Event Date"),p.createElement("p",{className:"text-white font-bold tracking-wide"},(pi=t.about)==null?void 0:pi.date)))),p.createElement("div",{className:"p-6 bg-white flex justify-center"},p.createElement("button",{onClick:()=>b("Please take a screenshot of this coupon to save it.","success"),className:"flex items-center gap-3 text-white font-black transition px-6 py-4 bg-gray-900 hover:bg-gray-800 rounded-2xl w-full justify-center tracking-widest text-sm shadow-[0_5px_15px_rgba(0,0,0,0.2)]"},p.createElement(R1,{size:18})," SAVE PASS")))))}Xc.createRoot(document.getElementById("root")).render(p.createElement(p.StrictMode,null,p.createElement(aC,null)));
