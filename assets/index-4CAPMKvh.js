(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const u of r)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(r){const u={};return r.integrity&&(u.integrity=r.integrity),r.referrerPolicy&&(u.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?u.credentials="include":r.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function n(r){if(r.ep)return;r.ep=!0;const u=i(r);fetch(r.href,u)}})();function U(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var g={exports:{}},v={},x={exports:{}},o={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=Symbol.for("react.element"),q=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),H=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),K=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),O=Symbol.iterator;function G(e){return e===null||typeof e!="object"?null:(e=O&&e[O]||e["@@iterator"],typeof e=="function"?e:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,P={};function p(e,t,i){this.props=e,this.context=t,this.refs=P,this.updater=i||k}p.prototype.isReactComponent={};p.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};p.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function I(){}I.prototype=p.prototype;function E(e,t,i){this.props=e,this.context=t,this.refs=P,this.updater=i||k}var b=E.prototype=new I;b.constructor=E;C(b,p.prototype);b.isPureReactComponent=!0;var $=Array.isArray,L=Object.prototype.hasOwnProperty,R={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function T(e,t,i){var n,r={},u=null,c=null;if(t!=null)for(n in t.ref!==void 0&&(c=t.ref),t.key!==void 0&&(u=""+t.key),t)L.call(t,n)&&!N.hasOwnProperty(n)&&(r[n]=t[n]);var f=arguments.length-2;if(f===1)r.children=i;else if(1<f){for(var s=Array(f),a=0;a<f;a++)s[a]=arguments[a+2];r.children=s}if(e&&e.defaultProps)for(n in f=e.defaultProps,f)r[n]===void 0&&(r[n]=f[n]);return{$$typeof:y,type:e,key:u,ref:c,props:r,_owner:R.current}}function Q(e,t){return{$$typeof:y,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function w(e){return typeof e=="object"&&e!==null&&e.$$typeof===y}function X(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(i){return t[i]})}var j=/\/+/g;function S(e,t){return typeof e=="object"&&e!==null&&e.key!=null?X(""+e.key):t.toString(36)}function _(e,t,i,n,r){var u=typeof e;(u==="undefined"||u==="boolean")&&(e=null);var c=!1;if(e===null)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case y:case q:c=!0}}if(c)return c=e,r=r(c),e=n===""?"."+S(c,0):n,$(r)?(i="",e!=null&&(i=e.replace(j,"$&/")+"/"),_(r,t,i,"",function(a){return a})):r!=null&&(w(r)&&(r=Q(r,i+(!r.key||c&&c.key===r.key?"":(""+r.key).replace(j,"$&/")+"/")+e)),t.push(r)),1;if(c=0,n=n===""?".":n+":",$(e))for(var f=0;f<e.length;f++){u=e[f];var s=n+S(u,f);c+=_(u,t,i,s,r)}else if(s=G(e),typeof s=="function")for(e=s.call(e),f=0;!(u=e.next()).done;)u=u.value,s=n+S(u,f++),c+=_(u,t,i,s,r);else if(u==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function d(e,t,i){if(e==null)return e;var n=[],r=0;return _(e,n,"","",function(u){return t.call(i,u,r++)}),n}function Z(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i)},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var l={current:null},h={transition:null},ee={ReactCurrentDispatcher:l,ReactCurrentBatchConfig:h,ReactCurrentOwner:R};function D(){throw Error("act(...) is not supported in production builds of React.")}o.Children={map:d,forEach:function(e,t,i){d(e,function(){t.apply(this,arguments)},i)},count:function(e){var t=0;return d(e,function(){t++}),t},toArray:function(e){return d(e,function(t){return t})||[]},only:function(e){if(!w(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};o.Component=p;o.Fragment=M;o.Profiler=B;o.PureComponent=E;o.StrictMode=V;o.Suspense=J;o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ee;o.act=D;o.cloneElement=function(e,t,i){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=C({},e.props),r=e.key,u=e.ref,c=e._owner;if(t!=null){if(t.ref!==void 0&&(u=t.ref,c=R.current),t.key!==void 0&&(r=""+t.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(s in t)L.call(t,s)&&!N.hasOwnProperty(s)&&(n[s]=t[s]===void 0&&f!==void 0?f[s]:t[s])}var s=arguments.length-2;if(s===1)n.children=i;else if(1<s){f=Array(s);for(var a=0;a<s;a++)f[a]=arguments[a+2];n.children=f}return{$$typeof:y,type:e.type,key:r,ref:u,props:n,_owner:c}};o.createContext=function(e){return e={$$typeof:H,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:z,_context:e},e.Consumer=e};o.createElement=T;o.createFactory=function(e){var t=T.bind(null,e);return t.type=e,t};o.createRef=function(){return{current:null}};o.forwardRef=function(e){return{$$typeof:W,render:e}};o.isValidElement=w;o.lazy=function(e){return{$$typeof:Y,_payload:{_status:-1,_result:e},_init:Z}};o.memo=function(e,t){return{$$typeof:K,type:e,compare:t===void 0?null:t}};o.startTransition=function(e){var t=h.transition;h.transition={};try{e()}finally{h.transition=t}};o.unstable_act=D;o.useCallback=function(e,t){return l.current.useCallback(e,t)};o.useContext=function(e){return l.current.useContext(e)};o.useDebugValue=function(){};o.useDeferredValue=function(e){return l.current.useDeferredValue(e)};o.useEffect=function(e,t){return l.current.useEffect(e,t)};o.useId=function(){return l.current.useId()};o.useImperativeHandle=function(e,t,i){return l.current.useImperativeHandle(e,t,i)};o.useInsertionEffect=function(e,t){return l.current.useInsertionEffect(e,t)};o.useLayoutEffect=function(e,t){return l.current.useLayoutEffect(e,t)};o.useMemo=function(e,t){return l.current.useMemo(e,t)};o.useReducer=function(e,t,i){return l.current.useReducer(e,t,i)};o.useRef=function(e){return l.current.useRef(e)};o.useState=function(e){return l.current.useState(e)};o.useSyncExternalStore=function(e,t,i){return l.current.useSyncExternalStore(e,t,i)};o.useTransition=function(){return l.current.useTransition()};o.version="18.3.1";x.exports=o;var F=x.exports;const te=U(F);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var re=F,ne=Symbol.for("react.element"),oe=Symbol.for("react.fragment"),ue=Object.prototype.hasOwnProperty,ie=re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ce={key:!0,ref:!0,__self:!0,__source:!0};function A(e,t,i){var n,r={},u=null,c=null;i!==void 0&&(u=""+i),t.key!==void 0&&(u=""+t.key),t.ref!==void 0&&(c=t.ref);for(n in t)ue.call(t,n)&&!ce.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)r[n]===void 0&&(r[n]=t[n]);return{$$typeof:ne,type:e,key:u,ref:c,props:r,_owner:ie.current}}v.Fragment=oe;v.jsx=A;v.jsxs=A;g.exports=v;var m=g.exports;createRoot(document.getElementById("root")).render(m.jsx(te.StrictMode,{children:m.jsxs("div",{children:[m.jsx("button",{class:"bg-emerald-400",children:" eu sou um botao idiota 1"}),m.jsx("button",{class:"bg-yellow-400",children:" eu sou um botao idiota 2"})]})}));
