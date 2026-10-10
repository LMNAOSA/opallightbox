var _R=Object.create;var ab=Object.defineProperty;var vR=Object.getOwnPropertyDescriptor;var yR=Object.getOwnPropertyNames;var xR=Object.getPrototypeOf,bR=Object.prototype.hasOwnProperty;var la=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var SR=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of yR(e))!bR.call(t,s)&&s!==n&&ab(t,s,{get:()=>e[s],enumerable:!(i=vR(e,s))||i.enumerable});return t};var Ro=(t,e,n)=>(n=t!=null?_R(xR(t)):{},SR(e||!t||!t.__esModule?ab(n,"default",{value:t,enumerable:!0}):n,t));var vb=la(We=>{"use strict";var xg=Symbol.for("react.transitional.element"),MR=Symbol.for("react.portal"),ER=Symbol.for("react.fragment"),TR=Symbol.for("react.strict_mode"),AR=Symbol.for("react.profiler"),wR=Symbol.for("react.consumer"),RR=Symbol.for("react.context"),CR=Symbol.for("react.forward_ref"),DR=Symbol.for("react.suspense"),NR=Symbol.for("react.memo"),ub=Symbol.for("react.lazy"),LR=Symbol.for("react.activity"),OR=Symbol.for("react.view_transition"),rb=Symbol.iterator;function UR(t){return t===null||typeof t!="object"?null:(t=rb&&t[rb]||t["@@iterator"],typeof t=="function"?t:null)}var hb={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fb=Object.assign,db={};function El(t,e,n){this.props=t,this.context=e,this.refs=db,this.updater=n||hb}El.prototype.isReactComponent={};El.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};El.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function pb(){}pb.prototype=El.prototype;function bg(t,e,n){this.props=t,this.context=e,this.refs=db,this.updater=n||hb}var Sg=bg.prototype=new pb;Sg.constructor=bg;fb(Sg,El.prototype);Sg.isPureReactComponent=!0;var ob=Array.isArray;function yg(){}var jt={H:null,A:null,T:null,S:null},mb=Object.prototype.hasOwnProperty;function Mg(t,e,n){var i=n.ref;return{$$typeof:xg,type:t,key:e,ref:i!==void 0?i:null,props:n}}function IR(t,e){return Mg(t.type,e,t.props)}function Eg(t){return typeof t=="object"&&t!==null&&t.$$typeof===xg}function PR(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var lb=/\/+/g;function vg(t,e){return typeof t=="object"&&t!==null&&t.key!=null?PR(""+t.key):e.toString(36)}function BR(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(yg,yg):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function Ml(t,e,n,i,s){var a=typeof t;(a==="undefined"||a==="boolean")&&(t=null);var r=!1;if(t===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(t.$$typeof){case xg:case MR:r=!0;break;case ub:return r=t._init,Ml(r(t._payload),e,n,i,s)}}if(r)return s=s(t),r=i===""?"."+vg(t,0):i,ob(s)?(n="",r!=null&&(n=r.replace(lb,"$&/")+"/"),Ml(s,e,n,"",function(c){return c})):s!=null&&(Eg(s)&&(s=IR(s,n+(s.key==null||t&&t.key===s.key?"":(""+s.key).replace(lb,"$&/")+"/")+r)),e.push(s)),1;r=0;var o=i===""?".":i+":";if(ob(t))for(var l=0;l<t.length;l++)i=t[l],a=o+vg(i,l),r+=Ml(i,e,n,a,s);else if(l=UR(t),typeof l=="function")for(t=l.call(t),l=0;!(i=t.next()).done;)i=i.value,a=o+vg(i,l++),r+=Ml(i,e,n,a,s);else if(a==="object"){if(typeof t.then=="function")return Ml(BR(t),e,n,i,s);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return r}function gf(t,e,n){if(t==null)return t;var i=[],s=0;return Ml(t,i,"","",function(a){return e.call(n,a,s++)}),i}function FR(t){if(t._status===-1){var e=t._result,n=e();n.then(function(i){(t._status===0||t._status===-1)&&(t._status=1,t._result=i,n.status===void 0&&(n.status="fulfilled",n.value=i))},function(i){(t._status===0||t._status===-1)&&(t._status=2,t._result=i,n.status===void 0&&(n.status="rejected",n.reason=i))}),t._status===-1&&(t._status=0,t._result=n)}if(t._status===1)return t._result.default;throw t._result}var cb=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function gb(t){var e=jt.T,n={};n.types=e!==null?e.types:null,jt.T=n;try{var i=t(),s=jt.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(yg,cb)}catch(a){cb(a)}finally{e!==null&&n.types!==null&&(e.types=n.types),jt.T=e}}function _b(t){var e=jt.T;if(e!==null){var n=e.types;n===null?e.types=[t]:n.indexOf(t)===-1&&n.push(t)}else gb(_b.bind(null,t))}var zR={map:gf,forEach:function(t,e,n){gf(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return gf(t,function(){e++}),e},toArray:function(t){return gf(t,function(e){return e})||[]},only:function(t){if(!Eg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};We.Activity=LR;We.Children=zR;We.Component=El;We.Fragment=ER;We.Profiler=AR;We.PureComponent=bg;We.StrictMode=TR;We.Suspense=DR;We.ViewTransition=OR;We.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=jt;We.__COMPILER_RUNTIME={__proto__:null,c:function(t){return jt.H.useMemoCache(t)}};We.addTransitionType=_b;We.cache=function(t){return function(){return t.apply(null,arguments)}};We.cacheSignal=function(){return null};We.cloneElement=function(t,e,n){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var i=fb({},t.props),s=t.key;if(e!=null)for(a in e.key!==void 0&&(s=""+e.key),e)!mb.call(e,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&e.ref===void 0||(i[a]=e[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return Mg(t.type,s,i)};We.createContext=function(t){return t={$$typeof:RR,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:wR,_context:t},t};We.createElement=function(t,e,n){var i,s={},a=null;if(e!=null)for(i in e.key!==void 0&&(a=""+e.key),e)mb.call(e,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=e[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(t&&t.defaultProps)for(i in r=t.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return Mg(t,a,s)};We.createRef=function(){return{current:null}};We.forwardRef=function(t){return{$$typeof:CR,render:t}};We.isValidElement=Eg;We.lazy=function(t){return{$$typeof:ub,_payload:{_status:-1,_result:t},_init:FR}};We.memo=function(t,e){return{$$typeof:NR,type:t,compare:e===void 0?null:e}};We.startTransition=gb;We.unstable_useCacheRefresh=function(){return jt.H.useCacheRefresh()};We.use=function(t){return jt.H.use(t)};We.useActionState=function(t,e,n){return jt.H.useActionState(t,e,n)};We.useCallback=function(t,e){return jt.H.useCallback(t,e)};We.useContext=function(t){return jt.H.useContext(t)};We.useDebugValue=function(){};We.useDeferredValue=function(t,e){return jt.H.useDeferredValue(t,e)};We.useEffect=function(t,e){return jt.H.useEffect(t,e)};We.useEffectEvent=function(t){return jt.H.useEffectEvent(t)};We.useId=function(){return jt.H.useId()};We.useImperativeHandle=function(t,e,n){return jt.H.useImperativeHandle(t,e,n)};We.useInsertionEffect=function(t,e){return jt.H.useInsertionEffect(t,e)};We.useLayoutEffect=function(t,e){return jt.H.useLayoutEffect(t,e)};We.useMemo=function(t,e){return jt.H.useMemo(t,e)};We.useOptimistic=function(t,e){return jt.H.useOptimistic(t,e)};We.useReducer=function(t,e,n){return jt.H.useReducer(t,e,n)};We.useRef=function(t){return jt.H.useRef(t)};We.useState=function(t){return jt.H.useState(t)};We.useSyncExternalStore=function(t,e,n){return jt.H.useSyncExternalStore(t,e,n)};We.useTransition=function(){return jt.H.useTransition()};We.version="19.3.0"});var hu=la((MP,yb)=>{"use strict";yb.exports=vb()});var Cb=la(rn=>{"use strict";function Rg(t,e){var n=t.length;t.push(e);e:for(;0<n;){var i=n-1>>>1,s=t[i];if(0<_f(s,e))t[i]=e,t[n]=s,n=i;else break e}}function ca(t){return t.length===0?null:t[0]}function yf(t){if(t.length===0)return null;var e=t[0],n=t.pop();if(n!==e){t[0]=n;e:for(var i=0,s=t.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=t[r],l=r+1,c=t[l];if(0>_f(o,n))l<s&&0>_f(c,o)?(t[i]=c,t[l]=n,i=l):(t[i]=o,t[r]=n,i=r);else if(l<s&&0>_f(c,n))t[i]=c,t[l]=n,i=l;else break e}}return e}function _f(t,e){var n=t.sortIndex-e.sortIndex;return n!==0?n:t.id-e.id}rn.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(xb=performance,rn.unstable_now=function(){return xb.now()}):(Tg=Date,bb=Tg.now(),rn.unstable_now=function(){return Tg.now()-bb});var xb,Tg,bb,Fa=[],Er=[],HR=1,Es=null,di=3,Cg=!1,fu=!1,du=!1,Dg=!1,Eb=typeof setTimeout=="function"?setTimeout:null,Tb=typeof clearTimeout=="function"?clearTimeout:null,Sb=typeof setImmediate<"u"?setImmediate:null;function vf(t){for(var e=ca(Er);e!==null;){if(e.callback===null)yf(Er);else if(e.startTime<=t)yf(Er),e.sortIndex=e.expirationTime,Rg(Fa,e);else break;e=ca(Er)}}function Ng(t){if(du=!1,vf(t),!fu)if(ca(Fa)!==null)fu=!0,Al||(Al=!0,Tl());else{var e=ca(Er);e!==null&&Lg(Ng,e.startTime-t)}}var Al=!1,pu=-1,Ab=5,wb=-1;function Rb(){return Dg?!0:!(rn.unstable_now()-wb<Ab)}function Ag(){if(Dg=!1,Al){var t=rn.unstable_now();wb=t;var e=!0;try{e:{fu=!1,du&&(du=!1,Tb(pu),pu=-1),Cg=!0;var n=di;try{t:{for(vf(t),Es=ca(Fa);Es!==null&&!(Es.expirationTime>t&&Rb());){var i=Es.callback;if(typeof i=="function"){Es.callback=null,di=Es.priorityLevel;var s=i(Es.expirationTime<=t);if(t=rn.unstable_now(),typeof s=="function"){Es.callback=s,vf(t),e=!0;break t}Es===ca(Fa)&&yf(Fa),vf(t)}else yf(Fa);Es=ca(Fa)}if(Es!==null)e=!0;else{var a=ca(Er);a!==null&&Lg(Ng,a.startTime-t),e=!1}}break e}finally{Es=null,di=n,Cg=!1}e=void 0}}finally{e?Tl():Al=!1}}}var Tl;typeof Sb=="function"?Tl=function(){Sb(Ag)}:typeof MessageChannel<"u"?(wg=new MessageChannel,Mb=wg.port2,wg.port1.onmessage=Ag,Tl=function(){Mb.postMessage(null)}):Tl=function(){Eb(Ag,0)};var wg,Mb;function Lg(t,e){pu=Eb(function(){t(rn.unstable_now())},e)}rn.unstable_IdlePriority=5;rn.unstable_ImmediatePriority=1;rn.unstable_LowPriority=4;rn.unstable_NormalPriority=3;rn.unstable_Profiling=null;rn.unstable_UserBlockingPriority=2;rn.unstable_cancelCallback=function(t){t.callback=null};rn.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ab=0<t?Math.floor(1e3/t):5};rn.unstable_getCurrentPriorityLevel=function(){return di};rn.unstable_next=function(t){switch(di){case 1:case 2:case 3:var e=3;break;default:e=di}var n=di;di=e;try{return t()}finally{di=n}};rn.unstable_requestPaint=function(){Dg=!0};rn.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var n=di;di=t;try{return e()}finally{di=n}};rn.unstable_scheduleCallback=function(t,e,n){var i=rn.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,t){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,t={id:HR++,callback:e,priorityLevel:t,startTime:n,expirationTime:s,sortIndex:-1},n>i?(t.sortIndex=n,Rg(Er,t),ca(Fa)===null&&t===ca(Er)&&(du?(Tb(pu),pu=-1):du=!0,Lg(Ng,n-i))):(t.sortIndex=s,Rg(Fa,t),fu||Cg||(fu=!0,Al||(Al=!0,Tl()))),t};rn.unstable_shouldYield=Rb;rn.unstable_wrapCallback=function(t){var e=di;return function(){var n=di;di=e;try{return t.apply(this,arguments)}finally{di=n}}}});var Nb=la((TP,Db)=>{"use strict";Db.exports=Cb()});var Ub=la(pi=>{"use strict";var GR=hu();function Ob(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Tr(){}var bi={d:{f:Tr,r:function(){throw Error(Ob(522))},D:Tr,C:Tr,L:Tr,m:Tr,X:Tr,S:Tr,M:Tr},p:0,findDOMNode:null},VR=Symbol.for("react.portal"),kR=Symbol.for("react.recoverable"),Lb=Symbol.for("react.optimistic_key");function XR(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:VR,key:i==null?null:i===Lb?Lb:""+i,children:t,containerInfo:e,implementation:n}}var mu=GR.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function xf(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}pi.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=bi;pi.browser=function(t){return{$$typeof:kR,_reason:t}};pi.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(Ob(299));return XR(t,e,null,n)};pi.flushSync=function(t){var e=mu.T,n=bi.p;try{if(mu.T=null,bi.p=2,t)return t()}finally{mu.T=e,bi.p=n,bi.d.f()}};pi.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,bi.d.C(t,e))};pi.prefetchDNS=function(t){typeof t=="string"&&bi.d.D(t)};pi.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var n=e.as,i=xf(n,e.crossOrigin),s=typeof e.integrity=="string"?e.integrity:void 0,a=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;n==="style"?bi.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&bi.d.X(t,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};pi.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var n=xf(e.as,e.crossOrigin);bi.d.M(t,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0})}}else e==null&&bi.d.M(t)};pi.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var n=e.as,i=xf(n,e.crossOrigin);bi.d.L(t,n,{crossOrigin:i,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};pi.preloadModule=function(t,e){if(typeof t=="string")if(e){var n=xf(e.as,e.crossOrigin);bi.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0})}else bi.d.m(t)};pi.requestFormReset=function(t){bi.d.r(t)};pi.unstable_batchedUpdates=function(t,e){return t(e)};pi.useFormState=function(t,e,n){return mu.H.useFormState(t,e,n)};pi.useFormStatus=function(){return mu.H.useHostTransitionStatus()};pi.version="19.3.0"});var Bb=la((wP,Pb)=>{"use strict";function Ib(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ib)}catch(t){console.error(t)}}Ib(),Pb.exports=Ub()});var M1=la(tp=>{"use strict";var Hn=Nb(),SM=hu(),WR=Bb();function j(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function MM(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nh(t){for(var e=t,n=e;n&&!n.alternate;)e=n,(e.flags&4098)!==0&&(t=e.return),n=e.return;for(;e.return;)e=e.return;return e.tag===3?t:null}function EM(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function TM(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Fb(t){if(nh(t)!==t)throw Error(j(188))}function qR(t){var e=t.alternate;if(!e){if(e=nh(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,i=e;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return Fb(s),t;if(a===i)return Fb(s),e;a=a.sibling}throw Error(j(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(j(189))}}if(n.alternate!==i)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function AM(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=AM(t),e!==null)return e;t=t.sibling}return null}function Fi(t,e,n,i,s,a){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&n(t,i,s,a)||(t.tag!==22||t.memoizedState===null)&&(e||t.tag!==5&&t.tag!==27)&&Fi(t.child,e,n,i,s,a))return!0;t=t.sibling}return!1}function Ko(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function zb(t){var e=!1;for(t=t.return;t!==null&&(t.tag===4&&(e=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return e}function wM(t){var e=[null,null],n=Ko(t);return n===null||RM(e,t,n.child,{foundSelf:!1}),e}function RM(t,e,n,i){for(;n!==null;){if(n===e)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return t[1]=n,!0;t[0]=n}else if((n.tag!==22||n.memoizedState===null)&&RM(t,e,n.child,i))return!0;n=n.sibling}return!1}function zn(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(j(559))}}var Ol=null,u0=null;function YR(t,e,n){return t===n?!0:t===e?(Ol=t,!0):!1}function ZR(t,e,n){return t===n?(u0=t,!1):t===e?(u0!==null&&(Ol=t),!0):!1}function Hb(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function h0(t,e,n){for(var i=0,s=t;s;s=n(s))i++;s=0;for(var a=e;a;a=n(a))s++;for(;0<i-s;)t=n(t),i--;for(;0<s-i;)e=n(e),s--;for(;i--;){if(t===e||e!==null&&t===e.alternate)return t;t=n(t),e=n(e)}return null}var qt=Object.assign,KR=Symbol.for("react.element"),bf=Symbol.for("react.transitional.element"),Su=Symbol.for("react.portal"),Ul=Symbol.for("react.fragment"),CM=Symbol.for("react.strict_mode"),f0=Symbol.for("react.profiler"),DM=Symbol.for("react.consumer"),ma=Symbol.for("react.context"),b_=Symbol.for("react.forward_ref"),d0=Symbol.for("react.suspense"),p0=Symbol.for("react.suspense_list"),S_=Symbol.for("react.memo"),Cr=Symbol.for("react.lazy");Symbol.for("react.scope");var m0=Symbol.for("react.activity"),jR=Symbol.for("react.legacy_hidden");Symbol.for("react.tracing_marker");var JR=Symbol.for("react.memo_cache_sentinel"),g0=Symbol.for("react.view_transition"),QR=Symbol.for("react.recoverable"),Gb=Symbol.iterator;function gu(t){return t===null||typeof t!="object"?null:(t=Gb&&t[Gb]||t["@@iterator"],typeof t=="function"?t:null)}var $R=Symbol.for("react.client.reference");function _0(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===$R?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ul:return"Fragment";case f0:return"Profiler";case CM:return"StrictMode";case d0:return"Suspense";case p0:return"SuspenseList";case m0:return"Activity";case g0:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case Su:return"Portal";case ma:return t.displayName||"Context";case DM:return(t._context.displayName||"Context")+".Consumer";case b_:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case S_:return e=t.displayName||null,e!==null?e:_0(t.type)||"Memo";case Cr:e=t._payload,t=t._init;try{return _0(t(e))}catch{}}return null}var Mu=Array.isArray,He=SM.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Tt=WR.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Po={pending:!1,data:null,method:null,action:null},v0=[],Il=-1;function Sa(t){return{current:t}}function oi(t){0>Il||(t.current=v0[Il],v0[Il]=null,Il--)}function $t(t,e){Il++,v0[Il]=t.current,t.current=e}var ya=Sa(null),Hu=Sa(null),Fr=Sa(null),od=Sa(null);function ld(t,e){switch($t(Fr,e),$t(Hu,t),$t(ya,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?tM(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=tM(e),t=QT(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}oi(ya),$t(ya,t)}function tc(){oi(ya),oi(Hu),oi(Fr)}function y0(t){var e=t.memoizedState;e!==null&&(hc._currentValue=e.memoizedState,$t(od,t)),e=ya.current;var n=QT(e,t.type);e!==n&&($t(Hu,t),$t(ya,n))}function cd(t){Hu.current===t&&(oi(ya),oi(Hu)),od.current===t&&(oi(od),hc._currentValue=Po)}var Og,Vb;function wr(t){if(Og===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Og=e&&e[1]||"",Vb=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Og+t+Vb}var Ug=!1;function Ig(t,e){if(!t||Ug)return"";Ug=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var f=function(){throw Error()};if(Object.defineProperty(f.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(f,[])}catch(g){var u=g}Reflect.construct(t,[],f)}else{try{f.call()}catch(g){u=g}f=!1;try{var d=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),f=!0,new t}finally{f&&(d!==void 0?Object.defineProperty(t.prototype,"props",d):delete t.prototype.props)}}}else{try{throw Error()}catch(g){u=g}(f=t())&&typeof f.catch=="function"&&f.catch(function(){})}}catch(g){if(g&&u&&typeof g.stack=="string")return[g.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var h=`
`+l[i].replace(" at new "," at ");return t.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",t.displayName)),h}while(1<=i&&0<=s);break}}}finally{Ug=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?wr(n):""}function eC(t,e){switch(t.tag){case 26:case 27:case 5:return wr(t.type);case 16:return wr("Lazy");case 13:return t.child!==e&&e!==null?wr("Suspense Fallback"):wr("Suspense");case 19:return wr("SuspenseList");case 0:case 15:return Ig(t.type,!1);case 11:return Ig(t.type.render,!1);case 1:return Ig(t.type,!0);case 31:return wr("Activity");case 30:return wr("ViewTransition");default:return""}}function kb(t){try{var e="",n=null;do e+=eC(t,n),n=t,t=t.return;while(t);return e}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var x0=Object.prototype.hasOwnProperty,M_=Hn.unstable_scheduleCallback,Pg=Hn.unstable_cancelCallback,tC=Hn.unstable_shouldYield,nC=Hn.unstable_requestPaint,cs=Hn.unstable_now,iC=Hn.unstable_getCurrentPriorityLevel,NM=Hn.unstable_ImmediatePriority,LM=Hn.unstable_UserBlockingPriority,ud=Hn.unstable_NormalPriority,sC=Hn.unstable_LowPriority,OM=Hn.unstable_IdlePriority,aC=Hn.log,rC=Hn.unstable_setDisableYieldValue,ih=null,us=null;function Lr(t){if(typeof aC=="function"&&rC(t),us&&typeof us.setStrictMode=="function")try{us.setStrictMode(ih,t)}catch{}}var hs=Math.clz32?Math.clz32:cC,oC=Math.log,lC=Math.LN2;function cC(t){return t>>>=0,t===0?32:31-(oC(t)/lC|0)|0}var Sf=256,Mf=262144,Ef=4194304;function No(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Pd(t,e,n){var i=t.pendingLanes;if(i===0)return 0;var s=0,a=t.suspendedLanes,r=t.pingedLanes;t=t.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=No(i):(r&=o,r!==0?s=No(r):n||(n=o&~t,n!==0&&(s=No(n))))):(o=i&~a,o!==0?s=No(o):r!==0?s=No(r):n||(n=i&~t,n!==0&&(s=No(n)))),s===0?0:e!==0&&e!==s&&(e&a)===0&&(a=s&-s,n=e&-e,a>=n||a===32&&(n&4194048)!==0)?e:s}function sh(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function UM(t,e){(e&8)!==0&&(e|=e&32);var n=t.entangledLanes;if(n!==0)for(t=t.entanglements,n&=e;0<n;){var i=31-hs(n),s=1<<i;e|=t[i],n&=~s}return e}function uC(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function IM(){var t=Ef;return Ef<<=1,(Ef&62914560)===0&&(Ef=4194304),t}function Bg(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ah(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function hC(t,e,n,i,s,a){var r=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var o=t.entanglements,l=t.expirationTimes,c=t.hiddenUpdates;for(n=r&~n;0<n;){var h=31-hs(n),f=1<<h;o[h]=0,l[h]=-1;var u=c[h];if(u!==null)for(c[h]=null,h=0;h<u.length;h++){var d=u[h];d!==null&&(d.lane&=-536870913)}n&=~f}i!==0&&PM(t,i,0),a!==0&&s===0&&t.tag!==0&&(t.suspendedLanes|=a&~(r&~e))}function PM(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-hs(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|n&261930}function BM(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-hs(n),s=1<<i;s&e|t[i]&e&&(t[i]|=e),n&=~s}}function FM(t,e){var n=e&-e;return n=(n&42)!==0?1:E_(n),(n&(t.suspendedLanes|e))!==0?0:n}function E_(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function T_(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function zM(){var t=Tt.p;return t!==0?t:(t=window.event,t===void 0?32:x1(t.type))}function Xb(t,e){var n=Tt.p;try{return Tt.p=t,e()}finally{Tt.p=n}}var Ja=Math.random().toString(36).slice(2),ai="__reactFiber$"+Ja,zi="__reactProps$"+Ja,pc="__reactContainer$"+Ja,Wb="__reactEvents$"+Ja,fC="__reactListeners$"+Ja,dC="__reactHandles$"+Ja,qb="__reactResources$"+Ja,rh="__reactMarker$"+Ja,hd="__reactLoad$"+Ja;function Bd(t){delete t[ai],delete t[zi],delete t[fC],delete t[dC]}function Uo(t){var e;if(e=t[ai])return e;for(var n=t.parentNode;n;){if(e=n[pc]||n[ai]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=cM(t);t!==null;){if(n=t[ai])return n;t=cM(t)}return e}t=n,n=t.parentNode}return null}function mc(t){if(t=t[ai]||t[pc]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Eu(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(j(33))}function Wl(t){var e=t[qb];return e||(e=t[qb]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Jn(t){t[rh]=!0}function HM(t){t[hd]=void 0}var GM=new Set,VM={};function jo(t,e){nc(t,e),nc(t+"Capture",e)}function nc(t,e){for(VM[t]=e,t=0;t<e.length;t++)GM.add(e[t])}var pC=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Yb={},Zb={};function mC(t){return x0.call(Zb,t)?!0:x0.call(Yb,t)?!1:pC.test(t)?Zb[t]=!0:(Yb[t]=!0,!1)}var bt=!1;function Kb(){var t=bt;return bt=!1,t}function Vf(t,e,n){if(mC(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,n)}}function Tf(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,n)}}function za(t,e,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,i)}}function as(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function kM(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function gC(t,e,n){var i=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(t,e,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function b0(t){if(!t._valueTracker){var e=kM(t)?"checked":"value";t._valueTracker=gC(t,e,""+t[e])}}function XM(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=kM(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}var _C=/[\n"\\]/g;function Cs(t){return t.replace(_C,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function S0(t,e,n,i,s,a,r,o){t.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?t.type=r:t.removeAttribute("type"),e!=null?r==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+as(e)):t.value!==""+as(e)&&(t.value=""+as(e)):r!=="submit"&&r!=="reset"||t.removeAttribute("value"),e!=null?r==="number"&&t.value==e?Fg(t,as(t.value)):Fg(t,as(e)):n!=null?Fg(t,as(n)):i!=null&&t.removeAttribute("value"),s==null&&a!=null&&(t.defaultChecked=!!a),s!=null&&(t.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+as(o):t.removeAttribute("name")}function WM(t,e,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(t.type=a),e!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||e!=null)){b0(t);return}n=n!=null?""+as(n):"",e=e!=null?""+as(e):n,o||e===t.value||(t.value=e),t.defaultValue=e}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=o?t.checked:!!i,t.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.name=r),b0(t)}function Fg(t,e){t.defaultValue!==""+e&&(t.defaultValue=""+e)}function ql(t,e,n,i){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&i&&(t[n].defaultSelected=!0)}else{for(n=""+as(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,i&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function qM(t,e,n){if(e!=null&&(e=""+as(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+as(n):""}function YM(t,e,n,i){if(e==null){if(i!=null){if(n!=null)throw Error(j(92));if(Mu(i)){if(1<i.length)throw Error(j(93));i=i[0]}n=i}n==null&&(n=""),e=n}n=as(e),t.defaultValue=n,i=t.textContent,i===n&&i!==""&&i!==null&&(t.value=i),b0(t)}function ic(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var vC=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function jb(t,e,n){var i=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,n):typeof n!="number"||n===0||vC.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function ZM(t,e,n){if(e!=null&&typeof e!="object")throw Error(j(62));if(t=t.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="",bt=!0);for(var s in e)i=e[s],e.hasOwnProperty(s)&&n[s]!==i&&(jb(t,s,i),bt=!0)}else for(var a in e)e.hasOwnProperty(a)&&jb(t,a,e[a])}function A_(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yC=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),xC=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function kf(t){return xC.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ga(){}var M0=null;function w_(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pl=null,Yl=null;function Jb(t){var e=mc(t);if(e&&(t=e.stateNode)){var n=t[zi]||null;e:switch(t=e.stateNode,e.type){case"input":if(S0(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Cs(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var s=i[zi]||null;if(!s)throw Error(j(90));S0(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(e=0;e<n.length;e++)i=n[e],i.form===t.form&&XM(i)}break e;case"textarea":qM(t,n.value,n.defaultValue);break e;case"select":e=n.value,e!=null&&ql(t,!!n.multiple,e,!1)}}}var zg=!1;function KM(t,e,n){if(zg)return t(e,n);zg=!0;try{var i=t(e);return i}finally{if(zg=!1,(Pl!==null||Yl!==null)&&(Jd(),Pl&&(e=Pl,t=Yl,Yl=Pl=null,Jb(e),t)))for(e=0;e<t.length;e++)Jb(t[e])}}function Gu(t,e){var n=t.stateNode;if(n===null)return null;var i=n[zi]||null;if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var Wa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),E0=!1;if(Wa)try{wl={},Object.defineProperty(wl,"passive",{get:function(){E0=!0}}),window.addEventListener("test",wl,wl),window.removeEventListener("test",wl,wl)}catch{E0=!1}var wl,Or=null,R_=null,Xf=null;function jM(){if(Xf)return Xf;var t,e=R_,n=e.length,i,s="value"in Or?Or.value:Or.textContent,a=s.length;for(t=0;t<n&&e[t]===s[t];t++);var r=n-t;for(i=1;i<=r&&e[n-i]===s[a-i];i++);return Xf=s.slice(t,1<i?1-i:void 0)}function Wf(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Af(){return!0}function Qb(){return!1}function Ti(t){function e(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Af:Qb,this.isPropagationStopped=Qb,this}return qt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Af)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Af)},persist:function(){},isPersistent:Af}),e}var $r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fd=Ti($r),oh=qt({},$r,{view:0,detail:0}),bC=Ti(oh),Hg,Gg,_u,zd=qt({},oh,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:C_,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==_u&&(_u&&t.type==="mousemove"?(Hg=t.screenX-_u.screenX,Gg=t.screenY-_u.screenY):Gg=Hg=0,_u=t),Hg)},movementY:function(t){return"movementY"in t?t.movementY:Gg}}),$b=Ti(zd),SC=qt({},zd,{dataTransfer:0}),MC=Ti(SC),EC=qt({},oh,{relatedTarget:0}),Vg=Ti(EC),TC=qt({},$r,{animationName:0,elapsedTime:0,pseudoElement:0}),AC=Ti(TC),wC=qt({},$r,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),RC=Ti(wC),CC=qt({},$r,{data:0}),eS=Ti(CC),DC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},NC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},LC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function OC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=LC[t])?!!e[t]:!1}function C_(){return OC}var UC=qt({},oh,{key:function(t){if(t.key){var e=DC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Wf(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?NC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:C_,charCode:function(t){return t.type==="keypress"?Wf(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Wf(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),IC=Ti(UC),PC=qt({},zd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tS=Ti(PC),BC=qt({},$r,{submitter:0}),FC=Ti(BC),zC=qt({},oh,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:C_}),HC=Ti(zC),GC=qt({},$r,{propertyName:0,elapsedTime:0,pseudoElement:0}),VC=Ti(GC),kC=qt({},zd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),XC=Ti(kC),WC=qt({},$r,{newState:0,oldState:0,source:0}),qC=Ti(WC),YC=[9,13,27,32],D_=Wa&&"CompositionEvent"in window,wu=null;Wa&&"documentMode"in document&&(wu=document.documentMode);var ZC=Wa&&"TextEvent"in window&&!wu,JM=Wa&&(!D_||wu&&8<wu&&11>=wu),nS=" ",iS=!1;function QM(t,e){switch(t){case"keyup":return YC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $M(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Bl=!1;function KC(t,e){switch(t){case"compositionend":return $M(e);case"keypress":return e.which!==32?null:(iS=!0,nS);case"textInput":return t=e.data,t===nS&&iS?null:t;default:return null}}function jC(t,e){if(Bl)return t==="compositionend"||!D_&&QM(t,e)?(t=jM(),Xf=R_=Or=null,Bl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return JM&&e.locale!=="ko"?null:e.data;default:return null}}var JC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sS(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!JC[t.type]:e==="textarea"}function eE(t,e,n,i){Pl?Yl?Yl.push(i):Yl=[i]:Pl=i,e=Od(e,"onChange"),0<e.length&&(n=new Fd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ru=null,Vu=null;function QC(t){KT(t,0)}function Hd(t){var e=Eu(t);if(XM(e))return t}function aS(t,e){if(t==="change")return e}var tE=!1;Wa&&(Wa?(Rf="oninput"in document,Rf||(kg=document.createElement("div"),kg.setAttribute("oninput","return;"),Rf=typeof kg.oninput=="function"),wf=Rf):wf=!1,tE=wf&&(!document.documentMode||9<document.documentMode));var wf,Rf,kg;function rS(){Ru&&(Ru.detachEvent("onpropertychange",nE),Vu=Ru=null)}function nE(t){if(t.propertyName==="value"&&Hd(Vu)){var e=[];eE(e,Vu,t,w_(t)),KM(QC,e)}}function $C(t,e,n){t==="focusin"?(rS(),Ru=e,Vu=n,Ru.attachEvent("onpropertychange",nE)):t==="focusout"&&rS()}function e3(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hd(Vu)}function t3(t,e){if(t==="click")return Hd(e)}function n3(t,e){if(t==="input"||t==="change")return Hd(e)}function i3(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ds=typeof Object.is=="function"?Object.is:i3;function ku(t,e){if(ds(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!x0.call(e,s)||!ds(t[s],e[s]))return!1}return!0}function T0(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function oS(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function lS(t,e){var n=oS(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=oS(n)}}function iE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?iE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function sE(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=T0(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=T0(t.document)}return e}function N_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var s3=Wa&&"documentMode"in document&&11>=document.documentMode,Fl=null,A0=null,Cu=null,w0=!1;function cS(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;w0||Fl==null||Fl!==T0(i)||(i=Fl,"selectionStart"in i&&N_(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Cu&&ku(Cu,i)||(Cu=i,i=Od(A0,"onSelect"),0<i.length&&(e=new Fd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Fl)))}function Co(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var zl={animationend:Co("Animation","AnimationEnd"),animationiteration:Co("Animation","AnimationIteration"),animationstart:Co("Animation","AnimationStart"),transitionrun:Co("Transition","TransitionRun"),transitionstart:Co("Transition","TransitionStart"),transitioncancel:Co("Transition","TransitionCancel"),transitionend:Co("Transition","TransitionEnd")},Xg={},aE={};Wa&&(aE=document.createElement("div").style,"AnimationEvent"in window||(delete zl.animationend.animation,delete zl.animationiteration.animation,delete zl.animationstart.animation),"TransitionEvent"in window||delete zl.transitionend.transition);function Jo(t){if(Xg[t])return Xg[t];if(!zl[t])return t;var e=zl[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in aE)return Xg[t]=e[n];return t}var rE=Jo("animationend"),oE=Jo("animationiteration"),lE=Jo("animationstart"),a3=Jo("transitionrun"),r3=Jo("transitionstart"),o3=Jo("transitioncancel"),cE=Jo("transitionend"),uE=new Map,R0="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");R0.push("scrollEnd");function ks(t,e){uE.set(t,e),jo(e,[t])}var l3=0;function qa(t,e){if(t.name!=null&&t.name!=="auto")return t.name;if(e.autoName!==null)return e.autoName;t=Vs.identifierPrefix;var n=l3++;return t="_"+t+"t_"+n.toString(32)+"_",e.autoName=t}function uS(t){if(t==null||typeof t=="string")return t;var e=null,n=ec;if(n!==null)for(var i=0;i<n.length;i++){var s=t[n[i]];if(s!=null){if(s==="none")return"none";e=e==null?s:e+(" "+s)}}return e??t.default}function Qa(t,e){return t=uS(t),e=uS(e),e==null?t==="auto"?null:t:e==="auto"?null:e}var fd=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},As=[],Hl=0,L_=0;function Gd(){for(var t=Hl,e=L_=Hl=0;e<t;){var n=As[e];As[e++]=null;var i=As[e];As[e++]=null;var s=As[e];As[e++]=null;var a=As[e];if(As[e++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&hE(n,s,a)}}function Vd(t,e,n,i){As[Hl++]=t,As[Hl++]=e,As[Hl++]=n,As[Hl++]=i,L_|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function O_(t,e,n,i){return Vd(t,e,n,i),dd(t)}function Qo(t,e){return Vd(t,null,null,e),dd(t)}function hE(t,e,n){t.lanes|=n;var i=t.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=t.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(t=a.stateNode,t===null||t._visibility&1||(s=!0)),t=a,a=a.return;return t.tag===3?(a=t.stateNode,s&&e!==null&&(s=31-hs(n),t=a.hiddenUpdates,i=t[s],i===null?t[s]=[e]:i.push(e),e.lane=n|536870912),a):null}function dd(t){if(50<zu)throw zu=0,td=null,Error(j(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Gl={};function c3(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pi(t,e,n,i){return new c3(t,e,n,i)}function U_(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ka(t,e){var n=t.alternate;return n===null?(n=Pi(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&1206910976,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function fE(t,e){t.flags&=1206910978;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function qf(t,e,n,i,s,a){var r=0;if(i=t,typeof i=="function")U_(i)&&(r=1);else if(typeof i=="string")r=I2(t,n,ya.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(i){case m0:return t=Pi(31,n,e,s),t.elementType=m0,t.lanes=a,t;case Ul:return Bo(n.children,s,a,e);case CM:r=8,s|=24;break;case f0:return t=Pi(12,n,e,s|2),t.elementType=f0,t.lanes=a,t;case d0:return t=Pi(13,n,e,s),t.elementType=d0,t.lanes=a,t;case p0:return t=Pi(19,n,e,s),t.elementType=p0,t.lanes=a,t;case jR:case g0:return t=s|32,t=Pi(30,n,e,t),t.elementType=g0,t.lanes=a,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case ma:r=10;break e;case DM:r=9;break e;case b_:r=11;break e;case S_:r=14;break e;case Cr:r=16,i=null;break e}r=29,n=Error(j(130,t===null?"null":typeof t,"")),i=null}return e=Pi(r,n,e,s),e.elementType=t,e.type=i,e.lanes=a,e}function Bo(t,e,n,i){return t=Pi(7,t,i,e),t.lanes=n,t}function Wg(t,e,n){return t=Pi(6,t,null,e),t.lanes=n,t}function dE(t){var e=Pi(18,null,null,0);return e.stateNode=t,e}function qg(t,e,n){return e=Pi(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var hS=new WeakMap;function Ds(t,e){if(typeof t=="object"&&t!==null){var n=hS.get(t);return n!==void 0?n:(e={value:t,source:e,stack:kb(e)},hS.set(t,e),e)}return{value:t,source:e,stack:kb(e)}}var Vl=[],kl=0,pd=null,Xu=0,ws=[],Rs=0,Zr=null,_a=1,va="";function Ga(t,e){Vl[kl++]=Xu,Vl[kl++]=pd,pd=t,Xu=e}function pE(t,e,n){ws[Rs++]=_a,ws[Rs++]=va,ws[Rs++]=Zr,Zr=t;var i=_a;t=va;var s=32-hs(i)-1;i&=~(1<<s),n+=1;var a=32-hs(e)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,_a=1<<32-hs(e)+s|n<<s|i,va=a+t}else _a=1<<a|n<<s|i,va=t}function kd(t){t.return!==null&&(Ga(t,1),pE(t,1,0))}function I_(t){for(;t===pd;)pd=Vl[--kl],Vl[kl]=null,Xu=Vl[--kl],Vl[kl]=null;for(;t===Zr;)Zr=ws[--Rs],ws[Rs]=null,va=ws[--Rs],ws[Rs]=null,_a=ws[--Rs],ws[Rs]=null}function mE(t,e){ws[Rs++]=_a,ws[Rs++]=va,ws[Rs++]=Zr,_a=e.id,va=e.overflow,Zr=t}var Qn=null,Qt=null,nt=!1,zr=null,Ns=!1,C0=Error(j(519));function Kr(t){var e=Error(j(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Wu(Ds(e,t)),C0}function fS(t){var e=t.stateNode,n=t.type,i=t.memoizedProps;switch(e[ai]=t,e[zi]=i,n){case"dialog":rt("cancel",e),rt("close",e);break;case"iframe":case"object":case"embed":rt("load",e);break;case"video":case"audio":for(n=0;n<Ku.length;n++)rt(Ku[n],e);break;case"source":rt("error",e);break;case"img":case"image":case"link":rt("error",e),rt("load",e);break;case"details":rt("toggle",e);break;case"input":rt("invalid",e),WM(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":rt("invalid",e);break;case"textarea":rt("invalid",e),YM(e,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||i.suppressHydrationWarning===!0||JT(e.textContent,n)?(i.popover!=null&&(rt("beforetoggle",e),rt("toggle",e)),i.onScroll!=null&&rt("scroll",e),i.onScrollEnd!=null&&rt("scrollend",e),i.onClick!=null&&(e.onclick=ga),e=!0):e=!1,e||Kr(t,!0)}function md(t){for(Qn=t.return;Qn;)switch(Qn.tag){case 5:case 31:case 13:Ns=!1;return;case 27:case 3:Ns=!0;return;default:Qn=Qn.return}}function Rl(t){if(t!==Qn)return!1;if(!nt)return md(t),nt=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||d_(t.type,t.memoizedProps)),n=!n),n&&Qt&&Kr(t),md(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));Qt=lM(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));Qt=lM(t)}else e===27?(e=Qt,eo(t.type)?(t=__,__=null,Qt=t):Qt=e):Qt=Qn?Ls(t.stateNode.nextSibling):null;return!0}function Go(){Qt=Qn=null,nt=!1}function Yg(){var t=zr;return t!==null&&(Ui===null?Ui=t:Ui.push.apply(Ui,t),zr=null),t}function Wu(t){zr===null?zr=[t]:zr.push(t)}var D0=Sa(null),$o=null,Va=null;function Ur(t,e,n){$t(D0,e._currentValue),e._currentValue=n}function Xa(t){t._currentValue=D0.current,oi(D0)}function Yf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function N0(t,e,n,i){var s=t.child;for(s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;e:for(;a!==null;){var o=a;a=s;for(var l=0;l<e.length;l++)if(o.context===e[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Yf(a.return,n,t),i||(r=null);break e}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(j(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),Yf(r,n,t),r=null}else s.tag===13&&s.memoizedState!==null&&s.memoizedState.dehydrated===null?(s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),Yf(s.return,n,t),r=s.child,r=r!==null?r.sibling:null):r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===t){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function Vo(t,e,n,i){t=null;for(var s=e,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(j(387));if(r=r.memoizedProps,r!==null){var o=s.type;ds(s.pendingProps.value,r.value)||(t!==null?t.push(o):t=[o])}}else if(s===od.current){if(r=s.alternate,r===null)throw Error(j(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(t!==null?t.push(hc):t=[hc])}s=s.return}return t!==null&&N0(e,t,n,i),e.flags|=262144,t!==null}function gd(t){for(t=t.firstContext;t!==null;){if(!ds(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ko(t){$o=t,Va=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ri(t){return gE($o,t)}function Cf(t,e){return $o===null&&ko(t),gE(t,e)}function gE(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Va===null){if(t===null)throw Error(j(308));Va=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Va=Va.next=e;return n}var u3=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},h3=Hn.unstable_scheduleCallback,f3=Hn.unstable_NormalPriority,wn={$$typeof:ma,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function P_(){return{controller:new u3,data:new Map,refCount:0}}function lh(t){t.refCount--,t.refCount===0&&h3(f3,function(){t.controller.abort()})}function dS(t,e){if((t.pendingLanes&4194048)!==0){var n=t.transitionTypes;for(n===null&&(n=t.transitionTypes=[]),t=0;t<e.length;t++){var i=e[t];n.indexOf(i)===-1&&n.push(i)}}}var Tu=null;function d3(t){var e=t.transitionTypes;return t.transitionTypes=null,e}var Du=null,L0=0,Xo=0,Zl=null;function p3(t,e){if(Du===null){var n=Du=[];L0=0,Xo=uv(),Zl={status:"pending",value:void 0,then:function(i){n.push(i)}}}return L0++,e.then(pS,pS),e}function pS(){if(--L0===0&&(Tu=null,Du!==null)){Zl!==null&&(Zl.status="fulfilled");var t=Du;Du=null,Xo=0,Zl=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function m3(t,e){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var s=0;s<n.length;s++)(0,n[s])(e)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var mS=He.S;He.S=function(t,e){if(UT=cs(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&p3(t,e),Tu!==null)for(var n=lc;n!==null;)dS(n,Tu),n=n.next;if(n=t.types,n!==null){for(var i=lc;i!==null;)dS(i,n),i=i.next;if(Xo!==0){i=Tu,i===null&&(i=Tu=[]);for(var s=0;s<n.length;s++){var a=n[s];i.indexOf(a)===-1&&i.push(a)}}}mS!==null&&mS(t,e)};var Fo=Sa(null);function B_(){var t=Fo.current;return t!==null?t:Wt.pooledCache}function Zf(t,e){e===null?$t(Fo,Fo.current):$t(Fo,e.pool)}function _E(){var t=B_();return t===null?null:{parent:wn._currentValue,pool:t}}var gc=Error(j(460)),F_=Error(j(474)),Xd=Error(j(542)),_d={then:function(){}};function gS(t){return t=t.status,t==="fulfilled"||t==="rejected"}function vE(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(ga,ga),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,vS(t),t===void 0&&!("reason"in e)?Error(j(600)):t;default:if(typeof e.status=="string")e.then(ga,ga);else{if(t=Wt,t!==null&&100<t.shellSuspendCounter)throw Error(j(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var s=e;s.status="fulfilled",s.value=i}},function(i){if(e.status==="pending"){var s=e;s.status="rejected",s.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,vS(t),t}throw zo=e,gc}}function Lo(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(zo=n,gc):n}}var zo=null;function _S(){if(zo===null)throw Error(j(459));var t=zo;return zo=null,t}function vS(t){if(t===gc||t===Xd)throw Error(j(483))}var Kl=null,qu=0;function Df(t){var e=qu;return qu+=1,Kl===null&&(Kl=[]),vE(Kl,t,e)}function Ar(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Nf(t,e){throw e.$$typeof===KR?Error(j(525)):(t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function yE(t){function e(p,_){if(t){var x=p.deletions;x===null?(p.deletions=[_],p.flags|=16):x.push(_)}}function n(p,_){if(!t)return null;for(;_!==null;)e(p,_),_=_.sibling;return null}function i(p){for(var _=new Map;p!==null;)p.key===null?_.set(p.index,p):_.set(p.key,p),p=p.sibling;return _}function s(p,_){return p=ka(p,_),p.index=0,p.sibling=null,p}function a(p,_,x){return p.index=x,t?(x=p.alternate,x!==null?(x=x.index,x<_?(p.flags|=2,_):x):(p.flags|=134217730,_)):(p.flags|=1048576,_)}function r(p){return t&&p.alternate===null&&(p.flags|=134217730),p}function o(p,_,x,v){return _===null||_.tag!==6?(_=Wg(x,p.mode,v),_.return=p,_):(_=s(_,x),_.return=p,_)}function l(p,_,x,v){var M=x.type;return M===Ul?(p=h(p,_,x.props.children,v,x.key),Ar(p,x),p):_!==null&&(_.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Cr&&Lo(M)===_.type)?(_=s(_,x.props),Ar(_,x),_.return=p,_):(_=qf(x.type,x.key,x.props,null,p.mode,v),Ar(_,x),_.return=p,_)}function c(p,_,x,v){return _===null||_.tag!==4||_.stateNode.containerInfo!==x.containerInfo||_.stateNode.implementation!==x.implementation?(_=qg(x,p.mode,v),_.return=p,_):(_=s(_,x.children||[]),_.return=p,_)}function h(p,_,x,v,M){return _===null||_.tag!==7?(_=Bo(x,p.mode,v,M),_.return=p,_):(_=s(_,x),_.return=p,_)}function f(p,_,x){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return _=Wg(""+_,p.mode,x),_.return=p,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case bf:return x=qf(_.type,_.key,_.props,null,p.mode,x),Ar(x,_),x.return=p,x;case Su:return _=qg(_,p.mode,x),_.return=p,_;case Cr:return _=Lo(_),f(p,_,x)}if(Mu(_)||gu(_))return _=Bo(_,p.mode,x,null),_.return=p,_;if(typeof _.then=="function")return f(p,Df(_),x);if(_.$$typeof===ma)return f(p,Cf(p,_),x);Nf(p,_)}return null}function u(p,_,x,v){var M=_!==null?_.key:null;if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return M!==null?null:o(p,_,""+x,v);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case bf:return x.key===M?l(p,_,x,v):null;case Su:return x.key===M?c(p,_,x,v):null;case Cr:return x=Lo(x),u(p,_,x,v)}if(Mu(x)||gu(x))return M!==null?null:h(p,_,x,v,null);if(typeof x.then=="function")return u(p,_,Df(x),v);if(x.$$typeof===ma)return u(p,_,Cf(p,x),v);Nf(p,x)}return null}function d(p,_,x,v,M){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return p=p.get(x)||null,o(_,p,""+v,M);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case bf:return p=p.get(v.key===null?x:v.key)||null,l(_,p,v,M);case Su:return p=p.get(v.key===null?x:v.key)||null,c(_,p,v,M);case Cr:return v=Lo(v),d(p,_,x,v,M)}if(Mu(v)||gu(v))return p=p.get(x)||null,h(_,p,v,M,null);if(typeof v.then=="function")return d(p,_,x,Df(v),M);if(v.$$typeof===ma)return d(p,_,x,Cf(_,v),M);Nf(_,v)}return null}function g(p,_,x,v){for(var M=null,E=null,w=_,y=_=0,A=null;w!==null&&y<x.length;y++){w.index>y?(A=w,w=null):A=w.sibling;var C=u(p,w,x[y],v);if(C===null){w===null&&(w=A);break}t&&w&&C.alternate===null&&e(p,w),_=a(C,_,y),E===null?M=C:E.sibling=C,E=C,w=A}if(y===x.length)return n(p,w),nt&&Ga(p,y),M;if(w===null){for(;y<x.length;y++)w=f(p,x[y],v),w!==null&&(_=a(w,_,y),E===null?M=w:E.sibling=w,E=w);return nt&&Ga(p,y),M}for(w=i(w);y<x.length;y++)A=d(w,p,y,x[y],v),A!==null&&(t&&(C=A.alternate,C!==null&&w.delete(C.key===null?y:C.key)),_=a(A,_,y),E===null?M=A:E.sibling=A,E=A);return t&&w.forEach(function(N){return e(p,N)}),nt&&Ga(p,y),M}function b(p,_,x,v){if(x==null)throw Error(j(151));for(var M=null,E=null,w=_,y=_=0,A=null,C=x.next();w!==null&&!C.done;y++,C=x.next()){w.index>y?(A=w,w=null):A=w.sibling;var N=u(p,w,C.value,v);if(N===null){w===null&&(w=A);break}t&&w&&N.alternate===null&&e(p,w),_=a(N,_,y),E===null?M=N:E.sibling=N,E=N,w=A}if(C.done)return n(p,w),nt&&Ga(p,y),M;if(w===null){for(;!C.done;y++,C=x.next())C=f(p,C.value,v),C!==null&&(_=a(C,_,y),E===null?M=C:E.sibling=C,E=C);return nt&&Ga(p,y),M}for(w=i(w);!C.done;y++,C=x.next())C=d(w,p,y,C.value,v),C!==null&&(t&&(A=C.alternate,A!==null&&w.delete(A.key===null?y:A.key)),_=a(C,_,y),E===null?M=C:E.sibling=C,E=C);return t&&w.forEach(function(U){return e(p,U)}),nt&&Ga(p,y),M}function m(p,_,x,v){if(typeof x=="object"&&x!==null&&x.type===Ul&&x.key===null&&x.props.ref===void 0&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case bf:e:{for(var M=x.key;_!==null;){if(_.key===M){if(M=x.type,M===Ul){if(_.tag===7){n(p,_.sibling),v=s(_,x.props.children),Ar(v,x),v.return=p,p=v;break e}}else if(_.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Cr&&Lo(M)===_.type){n(p,_.sibling),v=s(_,x.props),Ar(v,x),v.return=p,p=v;break e}n(p,_);break}else e(p,_);_=_.sibling}x.type===Ul?(v=Bo(x.props.children,p.mode,v,x.key),Ar(v,x),v.return=p,p=v):(v=qf(x.type,x.key,x.props,null,p.mode,v),Ar(v,x),v.return=p,p=v)}return r(p);case Su:e:{for(M=x.key;_!==null;){if(_.key===M)if(_.tag===4&&_.stateNode.containerInfo===x.containerInfo&&_.stateNode.implementation===x.implementation){n(p,_.sibling),v=s(_,x.children||[]),v.return=p,p=v;break e}else{n(p,_);break}else e(p,_);_=_.sibling}v=qg(x,p.mode,v),v.return=p,p=v}return r(p);case Cr:return x=Lo(x),m(p,_,x,v)}if(Mu(x))return g(p,_,x,v);if(gu(x)){if(M=gu(x),typeof M!="function")throw Error(j(150));return x=M.call(x),b(p,_,x,v)}if(typeof x.then=="function")return m(p,_,Df(x),v);if(x.$$typeof===ma)return m(p,_,Cf(p,x),v);Nf(p,x)}return typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint"?(x=""+x,_!==null&&_.tag===6?(n(p,_.sibling),v=s(_,x),v.return=p,p=v):(n(p,_),v=Wg(x,p.mode,v),v.return=p,p=v),r(p)):n(p,_)}return function(p,_,x,v){try{qu=0;var M=m(p,_,x,v);return Kl=null,M}catch(w){if(w===gc||w===Xd)throw w;var E=Pi(29,w,null,p.mode);return E.lanes=v,E.return=p,E}finally{}}}var Wo=yE(!0),xE=yE(!1),Dr=!1;function z_(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function O0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Hr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Gr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,(Et&2)!==0){var s=i.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),i.pending=e,e=dd(t),hE(t,null,n),e}return Vd(t,i,e,n),dd(t)}function Nu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,BM(t,n)}}function Zg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=e:a=a.next=e}else s=a=e;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var U0=!1;function Lu(){if(U0){var t=Zl;if(t!==null)throw t}}function Ou(t,e,n,i){U0=!1;var s=t.updateQueue;Dr=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==r&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(a!==null){var f=s.baseState;r=0,h=c=l=null,o=a;do{var u=o.lane&-536870913,d=u!==o.lane;if(d?(ht&u)===u:(i&u)===u){u!==0&&u===Xo&&(U0=!0),h!==null&&(h=h.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var g=t,b=o;u=e;var m=n;switch(b.tag){case 1:if(g=b.payload,typeof g=="function"){f=g.call(m,f,u);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=b.payload,u=typeof g=="function"?g.call(m,f,u):g,u==null)break e;f=qt({},f,u);break e;case 2:Dr=!0}}u=o.callback,u!==null&&(t.flags|=64,d&&(t.flags|=8192),d=s.callbacks,d===null?s.callbacks=[u]:d.push(u))}else d={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=d,l=f):h=h.next=d,r|=u;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;d=o,o=d.next,d.next=null,s.lastBaseUpdate=d,s.shared.pending=null}}while(!0);h===null&&(l=f),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=h,a===null&&(s.shared.lanes=0),Qr|=r,t.lanes=r,t.memoizedState=f}}function bE(t,e){if(typeof t!="function")throw Error(j(191,t));t.call(e)}function SE(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)bE(n[t],e)}var jr=Sa(null),vd=Sa(0);function yS(t,e){t=ja,$t(vd,t),$t(jr,e),ja=t|e.baseLanes}function I0(){$t(vd,ja),$t(jr,jr.current)}function H_(){ja=vd.current,oi(jr),oi(vd)}var ui=Sa(null),mi=null;function Vr(t){var e=t.alternate;$t(li,li.current&1),$t(ui,t),mi===null&&(e===null||jr.current!==null||e.memoizedState!==null)&&(mi=t)}function P0(t){$t(li,li.current),$t(ui,t),mi===null&&(mi=t)}function ME(t){t.tag===22?($t(li,li.current),$t(ui,t),mi===null&&(mi=t)):kr()}function kr(){$t(li,li.current),$t(ui,ui.current)}function rs(t){oi(ui),mi===t&&(mi=null),oi(li)}var li=Sa(0);function Yu(t,e){$t(ui,ui.current),$t(li,e)}function G_(t){oi(li),oi(ui),mi===t&&(mi=null)}function yd(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||g_(n)||pv(n)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!=="independent"){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ya=0,Je=null,Vt=null,An=null,xd=!1,jl=!1,qo=!1,bd=0,Zu=0,Jl=null,g3=0;function _n(){throw Error(j(321))}function V_(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ds(t[n],e[n]))return!1;return!0}function k_(t,e,n,i,s,a){return Ya=a,Je=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,He.H=t===null||t.memoizedState===null?eT:tT,qo=!1,a=n(i,s),qo=!1,jl&&(a=TE(e,n,i,s)),EE(t),a}function EE(t){He.H=Sd;var e=Vt!==null&&Vt.next!==null;if(Ya=0,An=Vt=Je=null,xd=!1,Zu=0,Jl=null,e)throw Error(j(300));t===null||Rn||(t=t.dependencies,t!==null&&gd(t)&&(Rn=!0))}function TE(t,e,n,i){Je=t;var s=0;do{if(jl&&(Jl=null),Zu=0,jl=!1,25<=s)throw Error(j(301));if(s+=1,An=Vt=null,t.updateQueue!=null){var a=t.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}He.H=E3,a=e(n,i)}while(jl);return a}function _3(){var t=He.H,e=t.useState()[0];return e=typeof e.then=="function"?ch(e):e,t=t.useState()[0],(Vt!==null?Vt.memoizedState:null)!==t&&(Je.flags|=1024),e}function X_(){var t=bd!==0;return bd=0,t}function W_(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function q_(t){if(xd){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}xd=!1}Ya=0,An=Vt=Je=null,jl=!1,Zu=bd=0,Jl=null}function Ei(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return An===null?Je.memoizedState=An=t:An=An.next=t,An}function xn(){if(Vt===null){var t=Je.alternate;t=t!==null?t.memoizedState:null}else t=Vt.next;var e=An===null?Je.memoizedState:An.next;if(e!==null)An=e,Vt=t;else{if(t===null)throw Je.alternate===null?Error(j(467)):Error(j(310));Vt=t,t={memoizedState:Vt.memoizedState,baseState:Vt.baseState,baseQueue:Vt.baseQueue,queue:Vt.queue,next:null},An===null?Je.memoizedState=An=t:An=An.next=t}return An}function Wd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ch(t){var e=Zu;return Zu+=1,Jl===null&&(Jl=[]),t=vE(Jl,t,e),e=Je,(An===null?e.memoizedState:An.next)===null&&(e=e.alternate,He.H=e===null||e.memoizedState===null?eT:tT),t}function qd(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ch(t);if(t.$$typeof===QR)return;if(t.$$typeof===ma)return ri(t)}throw Error(j(438,String(t)))}function Y_(t){var e=null,n=Je.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var i=Je.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(s){return s.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=Wd(),Je.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),i=0;i<t;i++)n[i]=JR;return e.index++,n}function Za(t,e){return typeof e=="function"?e(t):e}function Kf(t){var e=xn();return Z_(e,Vt,t)}function Z_(t,e,n){var i=t.queue;if(i===null)throw Error(j(311));i.lastRenderedReducer=n;var s=t.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}e.baseQueue=s=a,i.pending=null}if(a=t.baseState,s===null)t.memoizedState=a;else{e=s.next;var o=r=null,l=null,c=e,h=!1;do{var f=c.lane&-536870913;if(f!==c.lane?(ht&f)===f:(Ya&f)===f){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),f===Xo&&(h=!0);else if((Ya&u)===u){c=c.next,u===Xo&&(h=!0);continue}else f={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=f,r=a):l=l.next=f,Je.lanes|=u,Qr|=u;f=c.action,qo&&n(a,f),a=c.hasEagerState?c.eagerState:n(a,f)}else u={lane:f,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,r=a):l=l.next=u,Je.lanes|=f,Qr|=f;c=c.next}while(c!==null&&c!==e);if(l===null?r=a:l.next=o,!ds(a,t.memoizedState)&&(Rn=!0,h&&(n=Zl,n!==null)))throw n;t.memoizedState=a,t.baseState=r,t.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function Kg(t){var e=xn(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var i=n.dispatch,s=n.pending,a=e.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=t(a,r.action),r=r.next;while(r!==s);ds(a,e.memoizedState)||(Rn=!0),e.memoizedState=a,e.baseQueue===null&&(e.baseState=a),n.lastRenderedState=a}return[a,i]}function AE(t,e,n){var i=Je,s=xn(),a=nt;if(a){if(n===void 0)throw Error(j(407));n=n()}else n=e();var r=!ds((Vt||s).memoizedState,n);if(r&&(s.memoizedState=n,Rn=!0),s=s.queue,K_(CE.bind(null,i,s,t),[t]),t=s.getSnapshot!==e||r||An!==null&&(An.memoizedState.tag&1)!==0,sc(t?9:8,{destroy:void 0},RE.bind(null,i,s,n,e),null),t){if(i.flags|=2048,Wt===null)throw Error(j(349));a||(Ya&127)!==0||wE(i,e,n)}return n}function wE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Je.updateQueue,e===null?(e=Wd(),Je.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function RE(t,e,n,i){e.value=n,e.getSnapshot=i,DE(e)&&NE(t)}function CE(t,e,n){return n(function(){DE(e)&&NE(t)})}function DE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ds(t,n)}catch{return!0}}function NE(t){var e=Qo(t,2);e!==null&&Bi(e,t,2)}function B0(t){var e=Ei();if(typeof t=="function"){var n=t;if(t=n(),qo){Lr(!0);try{n()}finally{Lr(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Za,lastRenderedState:t},e}function LE(t,e,n,i){return t.baseState=n,Z_(t,Vt,typeof i=="function"?i:Za)}function v3(t,e,n,i,s){if(Zd(t))throw Error(j(485));if(t=e.action,t!==null){var a={payload:s,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};He.T!==null?n(!0):a.isTransition=!1,i(a),n=e.pending,n===null?(a.next=e.pending=a,OE(e,a)):(a.next=n.next,e.pending=n.next=a)}}function OE(t,e){var n=e.action,i=e.payload,s=t.state;if(e.isTransition){var a=He.T,r={};r.types=a!==null?a.types:null,He.T=r;try{var o=n(s,i),l=He.S;l!==null&&l(r,o),xS(t,e,o)}catch(c){F0(t,e,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),He.T=a}}else try{a=n(s,i),xS(t,e,a)}catch(c){F0(t,e,c)}}function xS(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){bS(t,e,i)},function(i){return F0(t,e,i)}):bS(t,e,n)}function bS(t,e,n){e.status="fulfilled",e.value=n,UE(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,OE(t,n)))}function F0(t,e,n){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=n,UE(e),e=e.next;while(e!==i)}t.action=null}function UE(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function IE(t,e){return e}function SS(t,e){if(nt){var n=Wt.formState;if(n!==null){e:{var i=Je;if(nt){if(Qt){t:{for(var s=Qt,a=Ns;s.nodeType!==8;){if(!a){s=null;break t}if(s=Ls(s.nextSibling),s===null){s=null;break t}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){Qt=Ls(s.nextSibling),i=s.data==="F!";break e}}Kr(i)}i=!1}i&&(e=n[0])}}return n=Ei(),n.memoizedState=n.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:IE,lastRenderedState:e},n.queue=i,n=JE.bind(null,Je,i),i.dispatch=n,i=B0(!1),a=$_.bind(null,Je,!1,i.queue),i=Ei(),s={state:e,dispatch:null,action:t,pending:null},i.queue=s,n=v3.bind(null,Je,s,a,n),s.dispatch=n,i.memoizedState=t,[e,n,!1]}function MS(t){var e=xn();return PE(e,Vt,t)}function PE(t,e,n){if(e=Z_(t,e,IE)[0],t=Kf(Za)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=ch(e)}catch(r){throw r===gc?Xd:r}else i=e;e=xn();var s=e.queue,a=s.dispatch;return n!==e.memoizedState&&(Je.flags|=2048,sc(9,{destroy:void 0},y3.bind(null,s,n),null)),[i,a,t]}function y3(t,e){t.action=e}function ES(t){var e=xn(),n=Vt;if(n!==null)return PE(e,n,t);xn(),e=e.memoizedState,n=xn();var i=n.queue.dispatch;return n.memoizedState=t,[e,i,!1]}function sc(t,e,n,i){return t={tag:t,create:n,deps:i,inst:e,next:null},e=Je.updateQueue,e===null&&(e=Wd(),Je.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t),t}function BE(){return xn().memoizedState}function jf(t,e,n,i){var s=Ei();Je.flags|=t,s.memoizedState=sc(1|e,{destroy:void 0},n,i===void 0?null:i)}function Yd(t,e,n,i){var s=xn();i=i===void 0?null:i;var a=s.memoizedState.inst;Vt!==null&&i!==null&&V_(i,Vt.memoizedState.deps)?s.memoizedState=sc(e,a,n,i):(Je.flags|=t,s.memoizedState=sc(1|e,a,n,i))}function TS(t,e){jf(8390656,8,t,e)}function K_(t,e){Yd(2048,8,t,e)}function x3(t){Je.flags|=4;var e=Je.updateQueue;if(e===null)e=Wd(),Je.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function FE(t){var e=xn().memoizedState;return x3({ref:e,nextImpl:t}),function(){if((Et&2)!==0)throw Error(j(440));return e.impl.apply(void 0,arguments)}}function zE(t,e){return Yd(4,2,t,e)}function HE(t,e){return Yd(4,4,t,e)}function GE(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function VE(t,e,n){n=n!=null?n.concat([t]):null,Yd(4,4,GE.bind(null,e,t),n)}function j_(){}function kE(t,e){var n=xn();e=e===void 0?null:e;var i=n.memoizedState;return e!==null&&V_(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function XE(t,e){var n=xn();e=e===void 0?null:e;var i=n.memoizedState;if(e!==null&&V_(e,i[1]))return i[0];if(i=t(),qo){Lr(!0);try{t()}finally{Lr(!1)}}return n.memoizedState=[i,e],i}function J_(t,e,n){return n===void 0||(Ya&1073741824)!==0&&(ht&261930)===0?t.memoizedState=e:(t.memoizedState=n,t=PT(),Je.lanes|=t,Qr|=t,n)}function WE(t,e,n,i){return ds(n,e)?n:jr.current!==null?(t=J_(t,n,i),ds(t,e)||(Rn=!0),t):(Ya&106)===0||(Ya&1073741824)!==0&&(ht&261930)===0?(Rn=!0,t.memoizedState=n):(t=PT(),Je.lanes|=t,Qr|=t,e)}function qE(t,e,n,i,s){var a=Tt.p;Tt.p=a!==0&&8>a?a:8;var r=He.T,o={};o.types=r!==null?r.types:null,He.T=o,$_(t,!1,e,n);try{var l=s(),c=He.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=m3(l,i);Uu(t,e,h,fs(t))}else Uu(t,e,i,fs(t))}catch(f){Uu(t,e,{then:function(){},status:"rejected",reason:f},fs())}finally{Tt.p=a,r!==null&&o.types!==null&&(r.types=o.types),He.T=r}}function b3(){}function z0(t,e,n,i){if(t.tag!==5)throw Error(j(476));var s=YE(t).queue;qE(t,s,e,Po,n===null?b3:function(){return ZE(t),n(i)})}function YE(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:Po,baseState:Po,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Za,lastRenderedState:Po},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Za,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function ZE(t){var e=YE(t);e.next===null&&(e=t.alternate.memoizedState),Uu(t,e.next.queue,{},fs())}function Q_(){return ri(hc)}function KE(){return xn().memoizedState}function jE(){return xn().memoizedState}function S3(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=fs();t=Hr(n);var i=Gr(e,t,n);i!==null&&(Bi(i,e,n),Nu(i,e,n)),e={cache:P_()},t.payload=e;return}e=e.return}}function M3(t,e,n){var i=fs();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Zd(t)?QE(e,n):(n=O_(t,e,n,i),n!==null&&(Bi(n,t,i),$E(n,e,i)))}function JE(t,e,n){var i=fs();Uu(t,e,n,i)}function Uu(t,e,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zd(t))QE(e,s);else{var a=t.alternate;if(t.lanes===0&&(a===null||a.lanes===0)&&(a=e.lastRenderedReducer,a!==null))try{var r=e.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,ds(o,r))return Vd(t,e,s,0),Wt===null&&Gd(),!1}catch{}finally{}if(n=O_(t,e,s,i),n!==null)return Bi(n,t,i),$E(n,e,i),!0}return!1}function $_(t,e,n,i){if(i={lane:2,revertLane:uv(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Zd(t)){if(e)throw Error(j(479))}else e=O_(t,n,i,2),e!==null&&Bi(e,t,2)}function Zd(t){var e=t.alternate;return t===Je||e!==null&&e===Je}function QE(t,e){jl=xd=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function $E(t,e,n){if((n&4194048)!==0){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,BM(t,n)}}var Sd={readContext:ri,use:qd,useCallback:_n,useContext:_n,useEffect:_n,useImperativeHandle:_n,useLayoutEffect:_n,useInsertionEffect:_n,useMemo:_n,useReducer:_n,useRef:_n,useState:_n,useDebugValue:_n,useDeferredValue:_n,useTransition:_n,useSyncExternalStore:_n,useId:_n,useHostTransitionStatus:_n,useFormState:_n,useActionState:_n,useOptimistic:_n,useMemoCache:_n,useCacheRefresh:_n,useEffectEvent:_n},eT={readContext:ri,use:qd,useCallback:function(t,e){return Ei().memoizedState=[t,e===void 0?null:e],t},useContext:ri,useEffect:TS,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,jf(4194308,4,GE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return jf(4194308,4,t,e)},useInsertionEffect:function(t,e){jf(4,2,t,e)},useMemo:function(t,e){var n=Ei();e=e===void 0?null:e;var i=t();if(qo){Lr(!0);try{t()}finally{Lr(!1)}}return n.memoizedState=[i,e],i},useReducer:function(t,e,n){var i=Ei();if(n!==void 0){var s=n(e);if(qo){Lr(!0);try{n(e)}finally{Lr(!1)}}}else s=e;return i.memoizedState=i.baseState=s,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:s},i.queue=t,t=t.dispatch=M3.bind(null,Je,t),[i.memoizedState,t]},useRef:function(t){var e=Ei();return t={current:t},e.memoizedState=t},useState:function(t){t=B0(t);var e=t.queue,n=JE.bind(null,Je,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:j_,useDeferredValue:function(t,e){var n=Ei();return J_(n,t,e)},useTransition:function(){var t=B0(!1);return t=qE.bind(null,Je,t.queue,!0,!1),Ei().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var i=Je,s=Ei();if(nt){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),Wt===null)throw Error(j(349));(ht&127)!==0||wE(i,e,n)}s.memoizedState=n;var a={value:n,getSnapshot:e};return s.queue=a,TS(CE.bind(null,i,a,t),[t]),i.flags|=2048,sc(9,{destroy:void 0},RE.bind(null,i,a,n,e),null),n},useId:function(){var t=Ei(),e=Wt.identifierPrefix;if(nt){var n=va,i=_a;n=(i&~(1<<32-hs(i)-1)).toString(32)+n,e="_"+e+"R_"+n,n=bd++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=g3++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Q_,useFormState:SS,useActionState:SS,useOptimistic:function(t){var e=Ei();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=$_.bind(null,Je,!0,n),n.dispatch=e,[t,e]},useMemoCache:Y_,useCacheRefresh:function(){return Ei().memoizedState=S3.bind(null,Je)},useEffectEvent:function(t){var e=Ei(),n={impl:t};return e.memoizedState=n,function(){if((Et&2)!==0)throw Error(j(440));return n.impl.apply(void 0,arguments)}}},tT={readContext:ri,use:qd,useCallback:kE,useContext:ri,useEffect:K_,useImperativeHandle:VE,useInsertionEffect:zE,useLayoutEffect:HE,useMemo:XE,useReducer:Kf,useRef:BE,useState:function(){return Kf(Za)},useDebugValue:j_,useDeferredValue:function(t,e){var n=xn();return WE(n,Vt.memoizedState,t,e)},useTransition:function(){var t=Kf(Za)[0],e=xn().memoizedState;return[typeof t=="boolean"?t:ch(t),e]},useSyncExternalStore:AE,useId:KE,useHostTransitionStatus:Q_,useFormState:MS,useActionState:MS,useOptimistic:function(t,e){var n=xn();return LE(n,Vt,t,e)},useMemoCache:Y_,useCacheRefresh:jE,useEffectEvent:FE},E3={readContext:ri,use:qd,useCallback:kE,useContext:ri,useEffect:K_,useImperativeHandle:VE,useInsertionEffect:zE,useLayoutEffect:HE,useMemo:XE,useReducer:Kg,useRef:BE,useState:function(){return Kg(Za)},useDebugValue:j_,useDeferredValue:function(t,e){var n=xn();return Vt===null?J_(n,t,e):WE(n,Vt.memoizedState,t,e)},useTransition:function(){var t=Kg(Za)[0],e=xn().memoizedState;return[typeof t=="boolean"?t:ch(t),e]},useSyncExternalStore:AE,useId:KE,useHostTransitionStatus:Q_,useFormState:ES,useActionState:ES,useOptimistic:function(t,e){var n=xn();return Vt!==null?LE(n,Vt,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:Y_,useCacheRefresh:jE,useEffectEvent:FE};function jg(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:qt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var H0={enqueueSetState:function(t,e,n){t=t._reactInternals;var i=fs(),s=Hr(i);s.payload=e,n!=null&&(s.callback=n),e=Gr(t,s,i),e!==null&&(Bi(e,t,i),Nu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=fs(),s=Hr(i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Gr(t,s,i),e!==null&&(Bi(e,t,i),Nu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=fs(),i=Hr(n);i.tag=2,e!=null&&(i.callback=e),e=Gr(t,i,n),e!==null&&(Bi(e,t,n),Nu(e,t,n))}};function AS(t,e,n,i,s,a,r){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,a,r):e.prototype&&e.prototype.isPureReactComponent?!ku(n,i)||!ku(s,a):!0}function wS(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&H0.enqueueReplaceState(e,e.state,null)}function Yo(t,e){var n=e;if("ref"in e){n={};for(var i in e)i!=="ref"&&(n[i]=e[i])}if(t=t.defaultProps){n===e&&(n=qt({},n));for(var s in t)n[s]===void 0&&(n[s]=t[s])}return n}function nT(t){fd(t)}function iT(t){console.error(t)}function sT(t){fd(t)}function Md(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function RS(t,e,n){try{var i=t.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function G0(t,e,n){return n=Hr(n),n.tag=3,n.payload={element:null},n.callback=function(){Md(t,e)},n}function aT(t){return t=Hr(t),t.tag=3,t}function rT(t,e,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;t.payload=function(){return s(a)},t.callback=function(){RS(e,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){RS(e,n,i),typeof s!="function"&&(Xr===null?Xr=new Set([this]):Xr.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function T3(t,e,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=n.alternate,e!==null&&Vo(e,n,s,!0),n=ui.current,n!==null){switch(n.tag){case 31:case 13:case 19:return mi===null?Nd():n.alternate===null&&vn===0&&(vn=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===_d?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([i]):e.add(i),i0(t,i,s)),!1;case 22:return n.flags|=65536,i===_d?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([i]):n.add(i)),i0(t,i,s)),!1}throw Error(j(435,n.tag))}return i0(t,i,s),Nd(),!1}if(nt)return e=ui.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=s,i!==C0&&(t=Error(j(422),{cause:i}),Wu(Ds(t,n)))):(i!==C0&&(e=Error(j(423),{cause:i}),Wu(Ds(e,n))),t=t.current.alternate,t.flags|=65536,s&=-s,t.lanes|=s,i=Ds(i,n),s=G0(t.stateNode,i,s),Zg(t,s),vn!==4&&(vn=2)),!1;var a=Error(j(520),{cause:i});if(a=Ds(a,n),Fu===null?Fu=[a]:Fu.push(a),vn!==4&&(vn=2),e===null)return!0;i=Ds(i,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=s&-s,n.lanes|=t,t=G0(n.stateNode,i,t),Zg(n,t),!1;case 1:if(e=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(Xr===null||!Xr.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=aT(s),rT(s,t,n,i),Zg(n,s),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var ev=Error(j(461)),Rn=!1;function Fn(t,e,n,i){e.child=t===null?xE(e,null,n,i):Wo(e,t.child,n,i)}function CS(t,e,n,i,s){n=n.render;var a=e.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return ko(e),i=k_(t,e,n,r,a,s),o=X_(),t!==null&&!Rn?(W_(t,e,s),Ka(t,e,s)):(nt&&o&&kd(e),e.flags|=1,Fn(t,e,i,s),e.child)}function DS(t,e,n,i,s){if(t===null){var a=n.type;return typeof a=="function"&&!U_(a)&&a.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=a,oT(t,e,a,i,s)):(t=qf(n.type,null,i,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(a=t.child,!nv(t,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:ku,n(r,i)&&t.ref===e.ref)return Ka(t,e,s)}return e.flags|=1,t=ka(a,i),t.ref=e.ref,t.return=e,e.child=t}function oT(t,e,n,i,s){if(t!==null){var a=t.memoizedProps;if(ku(a,i)&&t.ref===e.ref)if(Rn=!1,e.pendingProps=i=a,nv(t,s))(t.flags&131072)!==0&&(Rn=!0);else return e.lanes=t.lanes,Ka(t,e,s)}return V0(t,e,n,i,s)}function lT(t,e,n,i){var s=i.children,a=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((e.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,t!==null){for(i=e.child=t.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,e.child=null;return NS(t,e,a,n,i)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Zf(e,a!==null?a.cachePool:null),a!==null?yS(e,a):I0(),ME(e);else return i=e.lanes=536870912,NS(t,e,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(Zf(e,a.cachePool),yS(e,a),kr(),e.memoizedState=null):(t!==null&&Zf(e,null),I0(),kr());return Fn(t,e,s,n),e.child}function Iu(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function NS(t,e,n,i,s){var a=B_();return a=a===null?null:{parent:wn._currentValue,pool:a},e.memoizedState={baseLanes:n,cachePool:a},t!==null&&Zf(e,null),I0(),ME(e),t!==null&&Vo(t,e,i,!0),e.childLanes=s,null}function Jf(t,e){return e=Kd({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function LS(t,e,n){return Wo(e,t.child,null,n),t=Jf(e,e.pendingProps),t.flags|=2,rs(e),e.memoizedState=null,t}function A3(t,e,n){var i=e.pendingProps,s=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(nt){if(i.mode==="hidden")return t=Jf(e,i),e.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Iu(null,t);if(P0(e),(t=Qt)?(t=l1(t,Ns),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Zr!==null?{id:_a,overflow:va}:null,retryLane:536870912,hydrationErrors:null},n=dE(t),n.return=e,e.child=n,Qn=e,Qt=null)):t=null,t===null)throw Kr(e);return e.lanes=536870912,null}return Jf(e,i)}var a=t.memoizedState;if(a!==null){var r=a.dehydrated;if(P0(e),s)if(e.flags&256)e.flags&=-257,e=LS(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(j(558));else if(Rn||Vo(t,e,n,!1),s=(n&t.childLanes)!==0,Rn||s){if(jr.current===null){if(i=Wt,i!==null&&(r=FM(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,Qo(t,r),Bi(i,t,r),ev;Nd()}e=LS(t,e,n)}else t=a.treeContext,Qt=Ls(r.nextSibling),Qn=e,nt=!0,zr=null,Ns=!1,t!==null&&mE(e,t),e=Jf(e,i),e.flags|=134221824;return e}return t=ka(t.child,{mode:i.mode,children:i.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Dl(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(j(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function V0(t,e,n,i,s){return ko(e),n=k_(t,e,n,i,void 0,s),i=X_(),t!==null&&!Rn?(W_(t,e,s),Ka(t,e,s)):(nt&&i&&kd(e),e.flags|=1,Fn(t,e,n,s),e.child)}function OS(t,e,n,i,s,a){return ko(e),e.updateQueue=null,n=TE(e,i,n,s),EE(t),i=X_(),t!==null&&!Rn?(W_(t,e,a),Ka(t,e,a)):(nt&&i&&kd(e),e.flags|=1,Fn(t,e,n,a),e.child)}function US(t,e,n,i,s){if(ko(e),e.stateNode===null){var a=Gl,r=n.contextType;typeof r=="object"&&r!==null&&(a=ri(r)),a=new n(i,a),e.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=H0,e.stateNode=a,a._reactInternals=e,a=e.stateNode,a.props=i,a.state=e.memoizedState,a.refs={},z_(e),r=n.contextType,a.context=typeof r=="object"&&r!==null?ri(r):Gl,a.state=e.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(jg(e,n,r,i),a.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&H0.enqueueReplaceState(a,a.state,null),Ou(e,i,a,s),Lu(),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){a=e.stateNode;var o=e.memoizedProps,l=Yo(n,o);a.props=l;var c=a.context,h=n.contextType;r=Gl,typeof h=="object"&&h!==null&&(r=ri(h));var f=n.getDerivedStateFromProps;h=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&wS(e,a,i,r),Dr=!1;var u=e.memoizedState;a.state=u,Ou(e,i,a,s),Lu(),c=e.memoizedState,o||u!==c||Dr?(typeof f=="function"&&(jg(e,n,f,i),c=e.memoizedState),(l=Dr||AS(e,n,l,i,u,c,r))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,O0(t,e),r=e.memoizedProps,h=Yo(n,r),a.props=h,f=e.pendingProps,u=a.context,c=n.contextType,l=Gl,typeof c=="object"&&c!==null&&(l=ri(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==f||u!==l)&&wS(e,a,i,l),Dr=!1,u=e.memoizedState,a.state=u,Ou(e,i,a,s),Lu();var d=e.memoizedState;r!==f||u!==d||Dr||t!==null&&t.dependencies!==null&&gd(t.dependencies)?(typeof o=="function"&&(jg(e,n,o,i),d=e.memoizedState),(h=Dr||AS(e,n,h,i,u,d,l)||t!==null&&t.dependencies!==null&&gd(t.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,d,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,d,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=d),a.props=i,a.state=d,a.context=l,i=h):(typeof a.componentDidUpdate!="function"||r===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return a=i,Dl(t,e),i=(e.flags&128)!==0,a||i?(a=e.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),e.flags|=1,t!==null&&i?(e.child=Wo(e,t.child,null,s),e.child=Wo(e,null,n,s)):Fn(t,e,n,s),e.memoizedState=a.state,t=e.child):t=Ka(t,e,s),t}function IS(t,e,n,i){return Go(),e.flags|=256,Fn(t,e,n,i),e.child}var k0={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function X0(t){return{baseLanes:t,cachePool:_E()}}function W0(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=ls),t}function cT(t,e,n){var i=e.pendingProps,s=!1,a=(e.flags&128)!==0,r;if((r=a)||(r=t!==null&&t.memoizedState===null?!1:(li.current&2)!==0),r&&(s=!0,e.flags&=-129),r=(e.flags&32)!==0,e.flags&=-33,t===null){if(nt){if(s?Vr(e):kr(),(t=Qt)?(t=l1(t,Ns),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Zr!==null?{id:_a,overflow:va}:null,retryLane:536870912,hydrationErrors:null},n=dE(t),n.return=e,e.child=n,Qn=e,Qt=null)):t=null,t===null)throw Kr(e);return pv(t)?e.lanes=32:e.lanes=536870912,null}return a=i.children,i=i.fallback,s?(kr(),s=e.mode,a=Kd({mode:"hidden",children:a},s),i=Bo(i,s,n,null),a.return=e,i.return=e,a.sibling=i,e.child=a,i=e.child,i.memoizedState=X0(n),i.childLanes=W0(t,r,n),e.memoizedState=k0,Iu(null,i)):(Vr(e),tv(e,a))}var o=t.memoizedState;if(o!==null){var l=o.dehydrated;if(l!==null)return w3(t,e,a,r,i,l,o,n)}return s?(kr(),s=i.fallback,a=e.mode,o=t.child,l=o.sibling,i=ka(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&1206910976,l!==null?s=ka(l,s):(s=Bo(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,Iu(null,i),i=e.child,s=t.child.memoizedState,s===null?s=X0(n):(a=s.cachePool,a!==null?(o=wn._currentValue,a=a.parent!==o?{parent:o,pool:o}:a):a=_E(),s={baseLanes:s.baseLanes|n,cachePool:a}),i.memoizedState=s,i.childLanes=W0(t,r,n),e.memoizedState=k0,Iu(t.child,i)):(Vr(e),n=t.child,t=n.sibling,n=ka(n,{mode:"visible",children:i.children}),n.return=e,n.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=n,e.memoizedState=null,n)}function tv(t,e){return e=Kd({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Kd(t,e){return t=Pi(22,t,null,e),t.lanes=0,t}function Lf(t,e,n){return Wo(e,t.child,null,n),t=tv(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function w3(t,e,n,i,s,a,r,o){if(n)return e.flags&256?(Vr(e),e.flags&=-257,Lf(t,e,o)):e.memoizedState!==null?(kr(),e.child=t.child,e.flags|=128,null):(kr(),a=s.fallback,r=e.mode,s=Kd({mode:"visible",children:s.children},r),a=Bo(a,r,o,null),a.flags|=2,s.return=e,a.return=e,s.sibling=a,e.child=s,Wo(e,t.child,null,o),s=e.child,s.memoizedState=X0(o),s.childLanes=W0(t,i,o),e.memoizedState=k0,Iu(null,s));if(Vr(e),pv(a)){if(i=a.nextSibling&&a.nextSibling.dataset,i)var l=i.dgst;return i=l,i!==""&&(s=Error(j(419)),s.stack="",s.digest=i,Wu({value:s,source:null,stack:null})),Lf(t,e,o)}if(Rn||Vo(t,e,o,!1),i=(o&t.childLanes)!==0,Rn||i){if(jr.current!==null)return Lf(t,e,o);if(i=Wt,i!==null&&(s=FM(i,o),s!==0&&s!==r.retryLane))throw r.retryLane=s,Qo(t,s),Bi(i,t,s),ev;return g_(a)||Nd(),Lf(t,e,o)}return g_(a)?(e.flags|=192,e.child=t.child,null):(t=r.treeContext,Qt=Ls(a.nextSibling),Qn=e,nt=!0,zr=null,Ns=!1,t!==null&&mE(e,t),e=tv(e,s.children),e.flags|=134221824,e)}function PS(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Yf(t.return,e,n)}function BS(t){for(var e=null;t!==null;){var n=t.alternate;n!==null&&yd(n)===null&&(e=t),t=t.sibling}return e}function Of(t,e,n,i,s,a){var r=t.memoizedState;r===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function Jg(t){var e=t.child;for(t.child=null;e!==null;){var n=e.sibling;e.sibling=t.child,t.child=e,e=n}}function q0(t,e,n){var i=e.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=li.current;if(e.flags&128)return Yu(e,r),null;var o=(r&2)!==0;if(o?(r=r&1|2,e.flags|=128):r&=1,Yu(e,r),s==="backwards"&&t!==null?(Jg(t),Fn(t,e,i,n),Jg(t)):Fn(t,e,i,n),i=nt?Xu:0,!o&&t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&PS(t,n,e);else if(t.tag===19)PS(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(s){case"backwards":n=BS(e.child),n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null,Jg(e)),Of(e,!0,s,null,a,i);break;case"unstable_legacy-backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&yd(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Of(e,!0,n,null,a,i);break;case"together":Of(e,!1,null,null,void 0,i);break;case"independent":e.memoizedState=null;break;default:n=BS(e.child),n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Of(e,!1,s,n,a,i)}return e.child}function FS(t,e,n){var i=e.pendingProps;return Ur(e,e.type,i.value),Fn(t,e,i.children,n),e.child}function Ka(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Qr|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(Vo(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=ka(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ka(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function nv(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&gd(t)))}function R3(t,e,n){switch(e.tag){case 3:ld(e,e.stateNode.containerInfo),Ur(e,wn,t.memoizedState.cache),Go();break;case 27:case 5:y0(e);break;case 4:ld(e,e.stateNode.containerInfo);break;case 10:Ur(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,P0(e),null;break;case 13:var i=e.memoizedState;if(i!==null){if(i.dehydrated!==null)return Vr(e),e.flags|=128,null;i=Vo(t,e,n,!1);var s=e.child.childLanes;return i||(n&s)!==0?cT(t,e,n):(Vr(e),t=Ka(t,e,n),t!==null?t.sibling:null)}Vr(e);break;case 19:if(e.flags&128)return q0(t,e,n);if(s=(t.flags&128)!==0,i=(n&e.childLanes)!==0,i||(Vo(t,e,n,!1),i=(n&e.childLanes)!==0),s){if(i)return q0(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Yu(e,li.current),i)break;return null;case 22:return e.lanes=0,lT(t,e,n,e.pendingProps);case 24:Ur(e,wn,t.memoizedState.cache)}return Ka(t,e,n)}function uT(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)Rn=!0;else{if(!nv(t,n)&&(e.flags&128)===0)return Rn=!1,R3(t,e,n);Rn=(t.flags&131072)!==0}else Rn=!1,nt&&(e.flags&1048576)!==0&&pE(e,Xu,e.index);switch(e.lanes=0,e.tag){case 16:e:{var i=e.pendingProps;if(t=Lo(e.elementType),e.type=t,typeof t=="function")U_(t)?(i=Yo(t,i),e.tag=1,e=US(null,e,t,i,n)):(e.tag=0,e=V0(null,e,t,i,n));else{if(t!=null){var s=t.$$typeof;if(s===b_){e.tag=11,e=CS(null,e,t,i,n);break e}else if(s===S_){e.tag=14,e=DS(null,e,t,i,n);break e}else if(s===ma){e.tag=10,e.type=t,e=FS(null,e,n);break e}}throw e=_0(t)||t,Error(j(306,e,""))}}return e;case 0:return V0(t,e,e.type,e.pendingProps,n);case 1:return i=e.type,s=Yo(i,e.pendingProps),US(t,e,i,s,n);case 3:e:{if(ld(e,e.stateNode.containerInfo),t===null)throw Error(j(387));i=e.pendingProps;var a=e.memoizedState;s=a.element,O0(t,e),Ou(e,i,null,n);var r=e.memoizedState;if(i=r.cache,Ur(e,wn,i),i!==a.cache&&N0(e,[wn],n,!0),Lu(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},e.updateQueue.baseState=a,e.memoizedState=a,e.flags&256){e=IS(t,e,i,n);break e}else if(i!==s){s=Ds(Error(j(424)),e),Wu(s),e=IS(t,e,i,n);break e}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Qt=Ls(t.firstChild),Qn=e,nt=!0,zr=null,Ns=!0,n=xE(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(Go(),i===s){e=Ka(t,e,n);break e}Fn(t,e,i,n)}e=e.child}return e;case 26:return Dl(t,e),t===null?(n=hM(e.type,null,e.pendingProps,null))?e.memoizedState=n:nt||(e.stateNode=$T(e.type,e.pendingProps,Fr.current,e)):e.memoizedState=hM(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return y0(e),t===null&&nt&&(i=e.stateNode=c1(e.type,e.pendingProps,Fr.current),Qn=e,Ns=!0,s=Qt,eo(e.type)?(__=s,Qt=Ls(i.firstChild)):Qt=s),Fn(t,e,e.pendingProps.children,n),Dl(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&nt&&((s=i=Qt)&&(i=x2(i,e.type,e.pendingProps,Ns),i!==null?(e.stateNode=i,Qn=e,Qt=Ls(i.firstChild),Ns=!1,s=!0):s=!1),s||Kr(e)),y0(e),s=e.type,a=e.pendingProps,r=t!==null?t.memoizedProps:null,i=a.children,d_(s,a)?i=null:r!==null&&d_(s,r)&&(e.flags|=32),e.memoizedState!==null&&(s=k_(t,e,_3,null,null,n),hc._currentValue=s),Dl(t,e),Fn(t,e,i,n),e.child;case 6:return t===null&&nt&&((t=n=Qt)&&(n=b2(n,e.pendingProps,Ns),n!==null?(e.stateNode=n,Qn=e,Qt=null,t=!0):t=!1),t||Kr(e)),null;case 13:return cT(t,e,n);case 4:return ld(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Wo(e,null,i,n):Fn(t,e,i,n),e.child;case 11:return CS(t,e,e.type,e.pendingProps,n);case 7:return i=e.pendingProps,Dl(t,e),Fn(t,e,i,n),e.child;case 8:return Fn(t,e,e.pendingProps.children,n),e.child;case 12:return Fn(t,e,e.pendingProps.children,n),e.child;case 10:return FS(t,e,n);case 9:return s=e.type._context,i=e.pendingProps.children,ko(e),s=ri(s),i=i(s),e.flags|=1,Fn(t,e,i,n),e.child;case 14:return DS(t,e,e.type,e.pendingProps,n);case 15:return oT(t,e,e.type,e.pendingProps,n);case 19:return q0(t,e,n);case 31:return A3(t,e,n);case 22:return lT(t,e,n,e.pendingProps);case 24:return ko(e),i=ri(wn),t===null?(s=B_(),s===null&&(s=Wt,a=P_(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),e.memoizedState={parent:i,cache:s},z_(e),Ur(e,wn,s)):((t.lanes&n)!==0&&(O0(t,e),Ou(e,null,null,n),Lu()),s=t.memoizedState,a=e.memoizedState,s.parent!==i?(s={parent:i,cache:i},e.memoizedState=s,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=s),Ur(e,wn,i)):(i=a.cache,Ur(e,wn,i),i!==s.cache&&N0(e,[wn],n,!0))),Fn(t,e,e.pendingProps.children,n),e.child;case 30:return e.stateNode===null&&(e.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=e.pendingProps,i.name!=null&&i.name!=="auto"?e.flags|=t===null?18882560:18874368:nt&&kd(e),t!==null&&t.memoizedProps.name!==i.name?e.flags|=4194816:Dl(t,e),Fn(t,e,i.children,n),e.child;case 29:throw e.pendingProps}throw Error(j(156,e.tag))}function Ha(t){t.flags|=4}function Qg(t,e,n,i,s){var a;if((a=(t.mode&32)!==0)&&(a=n===null?pM(e,i):pM(e,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),a){if(t.flags|=16777216,(s&335544128)===s)if(t.stateNode.complete)t.flags|=8192;else if(zT())t.flags|=8192;else throw zo=_d,F_}else t.flags&=-16777217}function zS(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!d1(e))if(zT())t.flags|=8192;else throw zo=_d,F_}function Uf(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?IM():536870912,t.lanes|=e,ac|=e)}function vu(t,e){if(!nt)switch(t.tailMode){case"visible":break;case"collapsed":for(var n=t.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null;break;default:for(e=t.tail,n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null}}function Jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&1206910976,i|=s.flags&1206910976,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function C3(t,e,n){var i=e.pendingProps;switch(I_(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(e),null;case 1:return Jt(e),null;case 3:return n=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),Xa(wn),tc(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Rl(e)?Ha(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Yg())),Jt(e),null;case 26:var s=e.type,a=e.memoizedState;return t===null?(Ha(e),a!==null?(Jt(e),zS(e,a)):(Jt(e),Qg(e,s,null,i,n))):a?a!==t.memoizedState?(Ha(e),Jt(e),zS(e,a)):(Jt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==i&&Ha(e),Jt(e),Qg(e,s,t,i,n)),null;case 27:if(cd(e),n=Fr.current,s=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Ha(e);else{if(!i){if(e.stateNode===null)throw Error(j(166));return Jt(e),e.subtreeFlags&=-33554433,null}t=ya.current,Rl(e)?fS(e,t):(t=c1(s,i,n),e.stateNode=t,Ha(e))}return Jt(e),e.subtreeFlags&=-33554433,null;case 5:if(cd(e),s=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Ha(e);else{if(!i){if(e.stateNode===null)throw Error(j(166));return Jt(e),e.subtreeFlags&=-33554433,null}if(a=ya.current,Rl(e))fS(e,a);else{var r=Ju(Fr.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[ai]=e,a[zi]=i;e:for(r=e.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break e;for(;r.sibling===null;){if(r.return===null||r.return===e)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}e.stateNode=a;e:switch(ci(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Ha(e)}}return Jt(e),e.subtreeFlags&=-33554433,Qg(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&Ha(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(j(166));if(t=Fr.current,Rl(e)){if(t=e.stateNode,n=e.memoizedProps,i=null,s=Qn,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}t[ai]=e,t=!!(t.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||JT(t.nodeValue,n)),t||Kr(e,!0)}else t=Ju(t).createTextNode(i),t[ai]=e,e.stateNode=t}return Jt(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(i=Rl(e),n!==null){if(t===null){if(!i)throw Error(j(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(557));t[ai]=e}else Go(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Jt(e),t=!1}else n=Yg(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(rs(e),e):(rs(e),null);if((e.flags&128)!==0)throw Error(j(558))}return Jt(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(s=Rl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(j(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[ai]=e}else Go(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Jt(e),s=!1}else s=Yg(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),s=!0;if(!s)return e.flags&256?(rs(e),e):(rs(e),null)}return rs(e),(e.flags&128)!==0?(e.lanes=n,e):(n=i!==null,t=t!==null&&t.memoizedState!==null,n&&(i=e.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),Uf(e,e.updateQueue),Jt(e),null);case 4:return tc(),t===null&&hv(e.stateNode.containerInfo),e.flags|=67108864,Jt(e),null;case 10:return Xa(e.type),Jt(e),null;case 19:if(G_(e),i=e.memoizedState,i===null)return Jt(e),null;if(s=(e.flags&128)!==0,a=i.rendering,a===null)if(s)vu(i,!1);else{if(vn!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(a=yd(t),a!==null){for(e.flags|=128,vu(i,!1),t=a.updateQueue,e.updateQueue=t,Uf(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)fE(n,t),n=n.sibling;return Yu(e,li.current&1|2),nt&&Ga(e,i.treeForkCount),e.child}t=t.sibling}i.tail!==null&&cs()>Cd&&(e.flags|=128,s=!0,vu(i,!1),e.lanes=4194304)}else{if(!s)if(t=yd(a),t!==null){if(e.flags|=128,s=!0,t=t.updateQueue,e.updateQueue=t,Uf(e,t),vu(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!a.alternate&&!nt)return Jt(e),null}else 2*cs()-i.renderingStartTime>Cd&&n!==536870912&&(e.flags|=128,s=!0,vu(i,!1),e.lanes=4194304);i.isBackwards?(a.sibling=e.child,e.child=a):(t=i.last,t!==null?t.sibling=a:e.child=a,i.last=a)}if(i.tail!==null){t=i.tail;e:{for(n=t;n!==null;){if(n.alternate!==null){n=!1;break e}n=n.sibling}n=!0}return i.rendering=t,i.tail=t.sibling,i.renderingStartTime=cs(),t.sibling=null,a=li.current,a=s?a&1|2:a&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||nt?Yu(e,a):(n=a,$t(ui,e),$t(li,n),mi===null&&(mi=e)),nt&&Ga(e,i.treeForkCount),t}return Jt(e),null;case 22:case 23:return rs(e),H_(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?(n&536870912)!==0&&(e.flags&128)===0&&(Jt(e),e.subtreeFlags&6&&(e.flags|=8192)):Jt(e),n=e.updateQueue,n!==null&&Uf(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==n&&(e.flags|=2048),t!==null&&oi(Fo),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Xa(wn),Jt(e),null;case 25:return null;case 30:return e.flags|=33554432,Jt(e),null}throw Error(j(156,e.tag))}function D3(t,e){switch(I_(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Xa(wn),tc(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return cd(e),null;case 31:if(e.memoizedState!==null){if(rs(e),e.alternate===null)throw Error(j(340));Go()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(rs(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));Go()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return G_(e),t=e.flags,t&65536?(e.flags=t&-65537|128,t=e.memoizedState,t!==null&&(t.rendering=null,t.tail=null),e.flags|=4,e):null;case 4:return tc(),null;case 10:return Xa(e.type),null;case 22:case 23:return rs(e),H_(),t!==null&&oi(Fo),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Xa(wn),null;case 25:return null;default:return null}}function hT(t,e){switch(I_(e),e.tag){case 3:Xa(wn),tc();break;case 26:case 27:case 5:cd(e);break;case 4:tc();break;case 31:e.memoizedState!==null&&rs(e);break;case 13:rs(e);break;case 19:G_(e);break;case 10:Xa(e.type);break;case 22:case 23:rs(e),H_(),t!==null&&oi(Fo);break;case 24:Xa(wn)}}function uh(t,e){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&t)===t){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){Bt(e,e.return,o)}}function Jr(t,e,n){try{var i=e.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&t)===t){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=e;var l=n,c=o;try{c()}catch(h){Bt(s,l,h)}}}i=i.next}while(i!==a)}}catch(h){Bt(e,e.return,h)}}function fT(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{SE(e,n)}catch(i){Bt(t,t.return,i)}}}function dT(t,e,n){n.props=Yo(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(i){Bt(t,e,i)}}function da(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:var s=t.stateNode,a=qa(t.memoizedProps,s);(s.ref===null||s.ref.name!==a)&&(s.ref=i1(a)),i=s.ref;break;case 7:if(t.stateNode===null){var r=new ps(t);Fi(t.child,!1,v2,r,void 0,void 0),t.stateNode=r}i=t.stateNode;break;default:i=t.stateNode}typeof n=="function"?t.refCleanup=n(i):n.current=i}}catch(o){Bt(t,e,o)}}function si(t,e){var n=t.ref,i=t.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){Bt(t,e,s)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){Bt(t,e,s)}else n.current=null}function Ed(t,e){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&e!==null)for(var n=0;n<e.length;n++)o1(t.stateNode,e[n])}function HS(t){for(var e=t.return;e!==null&&(sv(e)&&o1(t.stateNode,e.stateNode),!iv(e));)e=e.return}function Pu(t){for(var e=t.return;e!==null&&(sv(e)&&y2(t.stateNode,e.stateNode),!iv(e));)e=e.return}function iv(t){return t.tag===5||t.tag===3||t.tag===27}function sv(t){return t&&t.tag===7&&t.stateNode!==null}function Y0(t){var e=t.type,n=t.memoizedProps,i=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){Bt(t,t.return,s)}}function $g(t,e,n){try{var i=t.stateNode;e2(i,t.type,n,e),i[zi]=e}catch(s){Bt(t,t.return,s)}}function pT(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&eo(t.type)||t.tag===4}function e0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||pT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&eo(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Z0(t,e,n,i){var s=t.tag;if(s===5||s===6)s=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(s,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(s),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ga)),Ed(t,i),bt=!0;else if(s!==4&&(s===27&&(Ed(t,i),i=null,eo(t.type)&&(n=t.stateNode,e=null)),t=t.child,t!==null))for(Z0(t,e,n,i),t=t.sibling;t!==null;)Z0(t,e,n,i),t=t.sibling}function Td(t,e,n,i){var s=t.tag;if(s===5||s===6)s=t.stateNode,e?n.insertBefore(s,e):n.appendChild(s),Ed(t,i),bt=!0;else if(s!==4&&(s===27&&(Ed(t,i),i=null,eo(t.type)&&(n=t.stateNode)),t=t.child,t!==null))for(Td(t,e,n,i),t=t.sibling;t!==null;)Td(t,e,n,i),t=t.sibling}function mT(t){var e=t.stateNode,n=t.memoizedProps;try{for(var i=t.type,s=e.attributes;s.length;)e.removeAttributeNode(s[0]);ci(e,i,n),e[ai]=t,e[zi]=n}catch(a){Bt(t,t.return,a)}}var Ad=!1,os=null;function GS(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(Ad=!0)}var pa=null;function VS(){var t=pa;return pa=null,t}var Ii=0;function _c(t,e,n,i,s){return Ii=0,gT(t.child,e,n,i,s)}function gT(t,e,n,i,s){for(var a=!1;t!==null;){if(t.tag===5){var r=t.stateNode;if(i!==null){var o=p_(r);i.push(o),o.view&&(a=!0)}else a||p_(r).view&&(a=!0);Ad=!0,e1(r,Ii===0?e:e+"_"+Ii,n),Ii++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&s||gT(t.child,e,n,i,s)&&(a=!0));t=t.sibling}return a}function ba(t,e){for(;t!==null;)t.tag===5?t1(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&e||ba(t.child,e)),t=t.sibling}function Qf(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Qf(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var e=t.memoizedProps;if(e.name==null||e.name==="auto")throw Error(j(544));var n=e.name;e=Qa(e.default,e.share),e!=="none"&&(_c(t,n,e,null,!1)||ba(t.child,!1))}t=t.sibling}}function K0(t,e){if(t.tag===30){var n=t.stateNode,i=t.memoizedProps,s=qa(i,n),a=Qa(i.default,n.paired?i.share:i.enter);a!=="none"?_c(t,s,a,null,!1)?(Qf(t),n.paired||e||rc(t,i.onEnter)):ba(t.child,!1):Qf(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)K0(t,e),t=t.sibling;else Qf(t)}function j0(t){if(os!==null&&os.size!==0){var e=os;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var s=e.get(i);if(s!==void 0){var a=Qa(n.default,n.share);if(a!=="none"&&(_c(t,i,a,null,!1)?(a=t.stateNode,s.paired=a,a.paired=s,rc(t,n.onShare)):ba(t.child,!1)),e.delete(i),e.size===0)break}}}j0(t)}t=t.sibling}}}function J0(t){if(t.tag===30){var e=t.memoizedProps,n=qa(e,t.stateNode),i=os!==null?os.get(n):void 0,s=Qa(e.default,i!==void 0?e.share:e.exit);s!=="none"&&(_c(t,n,s,null,!1)?i!==void 0?(s=t.stateNode,i.paired=s,s.paired=i,os.delete(n),rc(t,e.onShare)):rc(t,e.onExit):ba(t.child,!1)),os!==null&&j0(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)J0(t),t=t.sibling;else os!==null&&j0(t)}function _T(t){for(t=t.child;t!==null;){if(t.tag===30){var e=t.memoizedProps,n=qa(e,t.stateNode);e=Qa(e.default,e.update),t.flags&=-5,e!=="none"&&_c(t,n,e,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&_T(t);t=t.sibling}}function Q0(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var e=t.stateNode;e.paired!==null&&(e.paired=null,ba(t.child,!1))}Q0(t)}t=t.sibling}}function $f(t){if(t.tag===30)t.stateNode.paired=null,ba(t.child,!1),Q0(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)$f(t),t=t.sibling;else Q0(t)}function vT(t){for(t=t.child;t!==null;)t.tag===30?ba(t.child,!1):(t.subtreeFlags&33554432)!==0&&vT(t),t=t.sibling}function av(t,e,n,i,s,a,r){for(var o=!1;e!==null;){if(e.tag===5){var l=e.stateNode;if(a!==null&&Ii<a.length){var c=a[Ii],h=p_(l);(c.view||h.view)&&(o=!0);var f;if(f=(t.flags&4)===0)if(h.clip)f=!0;else{f=c.rect;var u=h.rect;f=f.y!==u.y||f.x!==u.x||f.height!==u.height||f.width!==u.width}f&&(t.flags|=4),h.abs?h=!c.abs:(c=c.rect,h=h.rect,h=c.height!==h.height||c.width!==h.width),h&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&e1(l,Ii===0?n:n+"_"+Ii,s),o&&(t.flags&4)!==0||(pa===null&&(pa=[]),pa.push(l,Ii===0?i:i+"_"+Ii,e.memoizedProps)),Ii++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&r?t.flags|=e.flags&32:av(t,e.child,n,i,s,a,r)&&(o=!0));e=e.sibling}return o}function yT(t,e){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,i=t.stateNode,s=qa(n,i),a=Qa(n.default,n.update);if(e){i=i.clones;var r=i===null?null:i.map(r2)}else r=t.memoizedState,t.memoizedState=null;i=t;var o=t.child;Ii=0,s=av(i,o,s,s,a,r,!1),(t.flags&4)!==0&&s&&(e||rc(t,n.onUpdate))}else(t.subtreeFlags&33554432)!==0&&yT(t,e);t=t.sibling}}var Kn=!1,Ct=!1,ua=!1,t0=!1,kS=typeof WeakSet=="function"?WeakSet:Set,jn=null,ha=!1,Au=!1,wd=!1,$0=!1;function N3(t,e,n){if(t=t.containerInfo,h_=fc,t=sE(t),N_(t)){if("selectionStart"in t)var i={start:t.selectionStart,end:t.selectionEnd};else e:{i=(i=t.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var a=s.anchorOffset,r=s.focusNode;s=s.focusOffset;try{i.nodeType,r.nodeType}catch{i=null;break e}var o=0,l=-1,c=-1,h=0,f=0,u=t,d=null;t:for(;;){for(var g;u!==i||a!==0&&u.nodeType!==3||(l=o+a),u!==r||s!==0&&u.nodeType!==3||(c=o+s),u.nodeType===3&&(o+=u.nodeValue.length),(g=u.firstChild)!==null;)d=u,u=g;for(;;){if(u===t)break t;if(d===i&&++h===a&&(l=o),d===r&&++f===s&&(c=o),(g=u.nextSibling)!==null)break;u=d,d=u.parentNode}u=g}i=l===-1||c===-1?null:{start:l,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(f_={focusedElem:t,selectionRange:i},fc=!1,n=(n&335544064)===n,jn=e,e=n?9270:1024;jn!==null;){if(t=jn,n&&(i=t.deletions,i!==null))for(a=0;a<i.length;a++)n&&J0(i[a]);if(t.alternate===null&&(t.flags&2)!==0)n&&GS(t),If(n);else{if(t.tag===22){if(i=t.alternate,t.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&J0(i),If(n);continue}else if(i!==null&&i.memoizedState!==null){n&&GS(t),If(n);continue}}i=t.child,(t.subtreeFlags&e)!==0&&i!==null?(i.return=t,jn=i):(n&&_T(t),If(n))}}os=null}function If(t){for(;jn!==null;){var e=jn,n=t,i=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 15:break;case 1:if((s&1024)!==0&&i!==null){n=void 0,s=i.memoizedProps,i=i.memoizedState;var a=e.stateNode;try{var r=Yo(e.type,s);n=a.getSnapshotBeforeUpdate(r,i),a.__reactInternalSnapshotBeforeUpdate=n}catch(o){Bt(e,e.return,o)}}break;case 3:if((s&1024)!==0){if(i=e.stateNode.containerInfo,n=i.nodeType,n===9)m_(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":m_(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=qa(i.memoizedProps,i.stateNode),s=e.memoizedProps,s=Qa(s.default,s.update),s!=="none"&&_c(i,n,s,i.memoizedState=[],!0));break;default:if((s&1024)!==0)throw Error(j(163))}if(i=e.sibling,i!==null){i.return=e.return,jn=i;break}jn=e.return}}function xT(t,e,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:fa(t,n),i&4&&uh(5,n);break;case 1:if(fa(t,n),i&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(r){Bt(n,n.return,r)}else{var s=Yo(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(s,e,t.__reactInternalSnapshotBeforeUpdate)}catch(r){Bt(n,n.return,r)}}i&64&&fT(n),i&512&&da(n,n.return);break;case 3:if(fa(t,n),i&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{SE(t,e)}catch(r){Bt(n,n.return,r)}}break;case 27:e===null&&i&4&&mT(n);case 26:case 5:fa(t,n),e===null&&i&4&&Y0(n),i&512&&da(n,n.return);break;case 12:fa(t,n);break;case 31:fa(t,n),i&4&&ET(t,n);break;case 13:fa(t,n),i&4&&TT(t,n),i&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=k3.bind(null,n),S2(t,n))));break;case 22:if(i=n.memoizedState!==null||Kn,!i){var a=e!==null&&e.memoizedState!==null||Ct;e=Kn,s=Ct,Kn=i,(Ct=a)&&!s?(i=2,(n.subtreeFlags&8772)!==0&&(i|=1),zs(t,n,i)):fa(t,n),Kn=e,Ct=s}break;case 30:fa(t,n),i&512&&da(n,n.return);break;case 7:i&512&&da(n,n.return);default:fa(t,n)}}function e_(t,e){for(t=t.child;t!==null;)bT(t,e),t=t.sibling}function bT(t,e){switch(t.tag){case 5:case 26:try{var n=t.stateNode;if(e){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var s=t.stateNode,a=t.memoizedProps.style,r=a!=null&&a.hasOwnProperty("display")?a.display:null;s.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(l){Bt(t,t.return,l)}t_(t,e);break;case 6:try{t.stateNode.nodeValue=e?"":t.memoizedProps,bt=!0}catch(l){Bt(t,t.return,l)}break;case 18:try{var o=t.stateNode;e?aM(o,!0):aM(t.stateNode,!1)}catch(l){Bt(t,t.return,l)}break;case 22:case 23:t.memoizedState===null&&e_(t,e);break;default:e_(t,e)}}function t_(t,e){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){e:{var n=t,i=e;switch(n.tag){case 4:bT(n,i);break e;case 22:n.memoizedState===null&&t_(n,i);break e;default:t_(n,i)}}t=t.sibling}}function ST(t){var e=t.alternate;e!==null&&(t.alternate=null,ST(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Bd(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var on=null,Oi=!1;function Fs(t,e,n){for(n=n.child;n!==null;)MT(t,e,n),n=n.sibling}function MT(t,e,n){if(us&&typeof us.onCommitFiberUnmount=="function")try{us.onCommitFiberUnmount(ih,n)}catch{}switch(n.tag){case 26:Ct||si(n,e),Fs(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!Ct&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ct||si(n,e),Pu(n);var i=on,s=Oi;eo(n.type)&&(on=n.stateNode,Oi=!1),Fs(t,e,n),u1(n.stateNode,n.type,n.memoizedProps),on=i,Oi=s;break;case 5:Ct||si(n,e),Pu(n);case 6:if(n.tag===6&&Pu(n),i=on,s=Oi,on=null,Fs(t,e,n),on=i,Oi=s,on!==null)if(Oi)try{(on.nodeType===9?on.body:on.nodeName==="HTML"?on.ownerDocument.body:on).removeChild(n.stateNode),bt=!0}catch(a){Bt(n,e,a)}else try{on.removeChild(n.stateNode),bt=!0}catch(a){Bt(n,e,a)}break;case 18:on!==null&&(Oi?(t=on,sM(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),dc(t)):sM(on,n.stateNode));break;case 4:i=on,s=Oi,on=n.stateNode.containerInfo,Oi=!0,Fs(t,e,n),on=i,Oi=s;break;case 0:case 11:case 14:case 15:Jr(2,n,e),Ct||Jr(4,n,e),Fs(t,e,n);break;case 1:Ct||(si(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"&&dT(n,e,i)),Fs(t,e,n);break;case 21:Fs(t,e,n);break;case 22:Ct=(i=Ct)||n.memoizedState!==null,Fs(t,e,n),Ct=i;break;case 30:si(n,e),Fs(t,e,n);break;case 7:Ct||si(n,e),Fs(t,e,n);break;default:Fs(t,e,n)}}function ET(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{dc(t)}catch(n){Bt(e,e.return,n)}}}function TT(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{dc(t)}catch(n){Bt(e,e.return,n)}}function L3(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new kS),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new kS),e;default:throw Error(j(435,t.tag))}}function Pf(t,e){var n=L3(t);e.forEach(function(i){if(!n.has(i)){n.add(i);var s=X3.bind(null,t,i);i.then(s,s)}})}function Si(t,e,n){var i=e.deletions;if(i!==null)for(var s=0;s<i.length;s++){var a=i[s],r=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 27:if(eo(l.type)){on=l.stateNode,Oi=!1;break e}break;case 5:on=l.stateNode,Oi=!1;break e;case 3:case 4:on=l.stateNode.containerInfo,Oi=!0;break e}l=l.return}if(on===null)throw Error(j(160));MT(r,o,a),on=null,Oi=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)AT(e,t,n),e=e.sibling}var Hs=null;function AT(t,e,n){var i=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(s&4&&(i=t.updateQueue,i=i!==null?i.events:null,i!==null))for(var a=0;a<i.length;a++){var r=i[a];r.ref.impl=r.nextImpl}Si(e,t,n),Mi(t),s&4&&(Jr(3,t,t.return),uh(3,t),Jr(5,t,t.return));break;case 1:Si(e,t,n),Mi(t),s&512&&(Ct||i===null||si(i,i.return)),s&64&&Kn&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?e:n.concat(e))));break;case 26:if(a=Hs,Si(e,t,n),Mi(t),s&512&&(Ct||i===null||si(i,i.return)),s&4)if(s=i!==null?i.memoizedState:null,n=t.memoizedState,i===null)if(n===null)if(t.stateNode===null)if(Kn)t.stateNode=$T(t.type,t.memoizedProps,e.containerInfo,t);else{e:{e=t.type,n=t.memoizedProps,s=a.ownerDocument||a;t:switch(e){case"title":i=s.getElementsByTagName("title")[0],(!i||i[rh]||i[ai]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=s.createElement(e),s.head.insertBefore(i,s.querySelector("head > title"))),ci(i,e,n),i[ai]=t,Jn(i),e=i;break e;case"link":if(a=dM("link","href",s).get(e+(n.href||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(r,1);break t}}i=s.createElement(e),ci(i,e,n),s.head.appendChild(i);break;case"meta":if(a=dM("meta","content",s).get(e+(n.content||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){a.splice(r,1);break t}}i=s.createElement(e),ci(i,e,n),s.head.appendChild(i);break;default:throw Error(j(468,e))}i[ai]=t,Jn(i),e=i}t.stateNode=e}else Kn||v_(a,t.type,t.stateNode);else t.stateNode=fM(a,n,t.memoizedProps);else s!==n?(s===null?(e=i.stateNode,e===null||Ct||e.parentNode.removeChild(e)):s.count--,n===null?Kn||v_(a,t.type,t.stateNode):fM(a,n,t.memoizedProps)):n===null&&t.stateNode!==null&&$g(t,t.memoizedProps,i.memoizedProps);break;case 27:Si(e,t,n),Mi(t),s&512&&(Ct||i===null||si(i,i.return)),i!==null&&s&4&&$g(t,t.memoizedProps,i.memoizedProps);break;case 5:if(a=ua,ua=!1,Si(e,t,n),ua=a,Mi(t),s&512&&(Ct||i===null||si(i,i.return)),t.flags&32){e=t.stateNode;try{ic(e,""),bt=!0}catch(h){Bt(t,t.return,h)}}s&4&&t.stateNode!=null&&(e=t.memoizedProps,$g(t,e,i!==null?i.memoizedProps:e)),s&1024&&(t0=!0);break;case 6:if(Si(e,t,n),Mi(t),s&4){if(t.stateNode===null)throw Error(j(162));e=t.memoizedProps,n=t.stateNode;try{n.nodeValue=e,bt=!0}catch(h){Bt(t,t.return,h)}}break;case 3:if(bt=!1,id=null,a=Hs,Hs=Qu(e.containerInfo),Si(e,t,n),Hs=a,Mi(t),s&4&&i!==null&&i.memoizedState.isDehydrated)try{dc(e.containerInfo)}catch(h){Bt(t,t.return,h)}t0&&(t0=!1,wT(t)),bt=!1;break;case 4:s=ua,ua=Kn,i=Kb(),a=Hs,Hs=Qu(t.stateNode.containerInfo),Si(e,t,n),Mi(t),Hs=a,bt&&Au&&(wd=!0),bt=i,ua=s;break;case 12:Si(e,t,n),Mi(t);break;case 31:Si(e,t,n),Mi(t),s&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,Pf(t,e)));break;case 13:Si(e,t,n),Mi(t),t.child.flags&8192&&t.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(jd=cs()),s&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,Pf(t,e)));break;case 22:a=t.memoizedState!==null,r=i!==null&&i.memoizedState!==null;var o=Kn,l=Ct,c=ua;Kn=o||a,ua=c||a,Ct=l||r,Si(e,t,n),Ct=l,ua=c,Kn=o,Mi(t),s&8192&&(e=t.stateNode,e._visibility=a?e._visibility&-2:e._visibility|1,!a||i===null||r||Kn||Ct||(e=r||Ct,n=Kn,i=Ct,Kn=a||Kn,Ct=e,Rr(t,2),Kn=n,Ct=i),!a&&ua||e_(t,a)),s&4&&(e=t.updateQueue,e!==null&&(n=e.retryQueue,n!==null&&(e.retryQueue=null,Pf(t,n))));break;case 19:Si(e,t,n),Mi(t),s&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,Pf(t,e)));break;case 30:s&512&&(Ct||i===null||si(i,i.return)),s=Kb(),a=Au,r=(n&335544064)===n,o=t.memoizedProps,Au=r&&Qa(o.default,o.update)!=="none",Si(e,t,n),Mi(t),r&&i!==null&&bt&&(t.flags|=4),Au=a,bt=s;break;case 21:break;case 7:s&512&&(Ct||i===null||si(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=t);default:Si(e,t,n),Mi(t)}}function Mi(t){var e=t.flags;if(e&2){try{for(var n,i=t.return;i!==null;){if(pT(i)){n=i;break}i=i.return}i=null;for(var s=t.return;s!==null;){if(sv(s)){var a=s.stateNode;i===null?i=[a]:i.push(a)}if(iv(s))break;s=s.return}var r=i;if(n==null)throw Error(j(160));switch(n.tag){case 27:var o=n.stateNode,l=e0(t);Td(t,l,o,r);break;case 5:var c=n.stateNode;n.flags&32&&(ic(c,""),n.flags&=-33);var h=e0(t);Td(t,h,c,r);break;case 3:case 4:var f=n.stateNode.containerInfo,u=e0(t);Z0(t,u,f,r);break;default:throw Error(j(161))}}catch(d){Bt(t,t.return,d)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function wT(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;wT(e),e.tag===5&&e.flags&1024&&(e=e.stateNode,fc=!0,e.reset(),fc=!1),t=t.sibling}}function Cl(t,e){if(e.subtreeFlags&9270)for(e=e.child;e!==null;)RT(e,t),e=e.sibling;else yT(e,!1)}function RT(t,e){var n=t.alternate;if(n===null)K0(t,!1);else switch(t.tag){case 3:if($0=ha=!1,VS(),Cl(e,t),!ha&&!wd){if(t=pa,t!==null)for(var i=0;i<t.length;i+=3){n=t[i];var s=t[i+1];t1(n,t[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+s+")"})}t=e.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),$0=!0}pa=null;break;case 5:Cl(e,t);break;case 4:i=ha,ha=!1,Cl(e,t),ha&&(wd=!0),ha=i;break;case 22:t.memoizedState===null&&(n.memoizedState!==null?K0(t,!1):Cl(e,t));break;case 30:i=ha,s=VS(),ha=!1,Cl(e,t),ha&&(t.flags|=4);var a=t.memoizedProps,r=t.stateNode;e=qa(a,r),r=qa(n.memoizedProps,r);var o=Qa(a.default,a.update);o==="none"?e=!1:(a=n.memoizedState,n.memoizedState=null,n=t.child,Ii=0,e=av(t,n,e,r,o,a,!0),Ii!==(a===null?0:a.length)&&(t.flags|=32)),(t.flags&4)!==0&&e?(rc(t,t.memoizedProps.onUpdate),pa=s):s!==null&&(s.push.apply(s,pa),pa=s),ha=(t.flags&32)!==0?!0:i;break;default:Cl(e,t)}}function fa(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)xT(t,e.alternate,e),e=e.sibling}function Rr(t,e){for(t=t.child;t!==null;){var n=t,i=e;switch(n.tag){case 0:case 11:case 14:case 15:Jr(4,n,n.return),Rr(n,i);break;case 1:si(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&dT(n,n.return,s),Rr(n,i);break;case 27:(i&2)!==0&&u1(n.stateNode,n.type,n.memoizedProps);case 5:si(n,n.return),n.tag!==5&&n.tag!==27||Pu(n),Rr(n,i);break;case 6:Pu(n);break;case 26:si(n,n.return),s=n.stateNode,n.memoizedState!==null||s===null||Ct||s.parentNode.removeChild(s),Rr(n,i);break;case 22:n.memoizedState===null&&Rr(n,i);break;case 30:si(n,n.return),Rr(n,i);break;case 7:si(n,n.return);default:Rr(n,i)}t=t.sibling}}function zs(t,e,n){for(n=(e.subtreeFlags&8772)!==0?n:n&-2,e=e.child;e!==null;){var i=e.alternate,s=t,a=e,r=a.flags,o=(n&1)!==0;switch(a.tag){case 0:case 11:case 15:zs(s,a,n),uh(4,a);break;case 1:if(zs(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(h){Bt(i,i.return,h)}if(i=a,s=i.updateQueue,s!==null){var l=i.stateNode;try{var c=s.shared.hiddenCallbacks;if(c!==null)for(s.shared.hiddenCallbacks=null,s=0;s<c.length;s++)bE(c[s],l)}catch(h){Bt(i,i.return,h)}}o&&r&64&&fT(a),da(a,a.return);break;case 27:(n&2)!==0&&mT(a);case 5:a.tag!==5&&a.tag!==27||HS(a),zs(s,a,n),o&&i===null&&r&4&&Y0(a),da(a,a.return);break;case 6:HS(a);break;case 26:l=a.stateNode,a.memoizedState!==null||l===null||Kn||v_(Qu(l.ownerDocument),a.type,l),zs(s,a,n),o&&i===null&&r&4&&Y0(a),da(a,a.return);break;case 12:zs(s,a,n);break;case 31:zs(s,a,n),o&&r&4&&ET(s,a);break;case 13:zs(s,a,n),o&&r&4&&TT(s,a);break;case 22:a.memoizedState===null&&zs(s,a,n),da(a,a.return);break;case 30:zs(s,a,n),da(a,a.return);break;case 7:da(a,a.return);default:zs(s,a,n)}e=e.sibling}}function rv(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&lh(n))}function ov(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&lh(t))}function Ts(t,e,n,i){var s=(n&335544064)===n;if(e.subtreeFlags&(s?10262:10256))for(e=e.child;e!==null;)CT(t,e,n,i),e=e.sibling;else s&&vT(e)}function CT(t,e,n,i){var s=(n&335544064)===n;s&&e.alternate===null&&e.return!==null&&e.return.alternate!==null&&$f(e);var a=e.flags;switch(e.tag){case 0:case 11:case 15:Ts(t,e,n,i),a&2048&&uh(9,e);break;case 1:Ts(t,e,n,i);break;case 3:Ts(t,e,n,i),s&&$0&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),a&2048&&(a=null,e.alternate!==null&&(a=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==a&&(e.refCount++,a!=null&&lh(a)));break;case 12:if(a&2048){Ts(t,e,n,i),a=e.stateNode;try{var r=e.memoizedProps,o=r.id,l=r.onPostCommit;typeof l=="function"&&l(o,e.alternate===null?"mount":"update",a.passiveEffectDuration,-0)}catch(c){Bt(e,e.return,c)}}else Ts(t,e,n,i);break;case 31:Ts(t,e,n,i);break;case 13:Ts(t,e,n,i);break;case 23:break;case 22:r=e.stateNode,o=e.alternate,e.memoizedState!==null?(s&&o!==null&&o.memoizedState===null&&$f(o),r._visibility&2?Ts(t,e,n,i):Bu(t,e)):(s&&o!==null&&o.memoizedState!==null&&$f(e),r._visibility&2?Ts(t,e,n,i):(r._visibility|=2,Nl(t,e,n,i,(e.subtreeFlags&10256)!==0||!1))),a&2048&&rv(o,e);break;case 24:Ts(t,e,n,i),a&2048&&ov(e.alternate,e);break;case 30:s&&(a=e.alternate,a!==null&&(ba(a.child,!0),ba(e.child,!0))),Ts(t,e,n,i);break;default:Ts(t,e,n,i)}}function Nl(t,e,n,i,s){for(s=s&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var a=t,r=e,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:Nl(a,r,o,l,s),uh(8,r);break;case 23:break;case 22:var h=r.stateNode;r.memoizedState!==null?h._visibility&2?Nl(a,r,o,l,s):Bu(a,r):(h._visibility|=2,Nl(a,r,o,l,s)),s&&c&2048&&rv(r.alternate,r);break;case 24:Nl(a,r,o,l,s),s&&c&2048&&ov(r.alternate,r);break;default:Nl(a,r,o,l,s)}e=e.sibling}}function Bu(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,i=e,s=i.flags;switch(i.tag){case 22:Bu(n,i),s&2048&&rv(i.alternate,i);break;case 24:Bu(n,i),s&2048&&ov(i.alternate,i);break;default:Bu(n,i)}e=e.sibling}}var Oo=8192;function Do(t,e,n){if(t.subtreeFlags&Oo)for(t=t.child;t!==null;)DT(t,e,n),t=t.sibling}function DT(t,e,n){switch(t.tag){case 26:Do(t,e,n),t.flags&Oo&&(t.memoizedState!==null?P2(n,Hs,t.memoizedState,t.memoizedProps):(t=t.stateNode,(e&335544128)===e&&mM(n,t)));break;case 5:Do(t,e,n),t.flags&Oo&&(t=t.stateNode,(e&335544128)===e&&mM(n,t));break;case 3:case 4:var i=Hs;Hs=Qu(t.stateNode.containerInfo),Do(t,e,n),Hs=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=Oo,Oo=16777216,Do(t,e,n),Oo=i):Do(t,e,n));break;case 30:if((t.flags&Oo)!==0&&(i=t.memoizedProps.name,i!=null&&i!=="auto")){var s=t.stateNode;s.paired=null,os===null&&(os=new Map),os.set(i,s)}Do(t,e,n);break;default:Do(t,e,n)}}function NT(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function yu(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];jn=i,OT(i,t)}NT(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)LT(t),t=t.sibling}function LT(t){switch(t.tag){case 0:case 11:case 15:yu(t),t.flags&2048&&Jr(9,t,t.return);break;case 3:yu(t);break;case 12:yu(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,ed(t)):yu(t);break;default:yu(t)}}function ed(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];jn=i,OT(i,t)}NT(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Jr(8,e,e.return),ed(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,ed(e));break;default:ed(e)}t=t.sibling}}function OT(t,e){for(;jn!==null;){var n=jn;switch(n.tag){case 0:case 11:case 15:Jr(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:lh(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,jn=i;else e:for(n=t;jn!==null;){i=jn;var s=i.sibling,a=i.return;if(ST(i),i===n){jn=null;break e}if(s!==null){s.return=a,jn=s;break e}jn=a}}}var O3={getCacheForType:function(t){var e=ri(wn),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return ri(wn).controller.signal}},U3=typeof WeakMap=="function"?WeakMap:Map,Et=0,Wt=null,ot=null,ht=0,It=0,ss=null,Ir=!1,vc=!1,lv=!1,ja=0,vn=0,Qr=0,Ho=0,Rd=0,ls=0,ac=0,Fu=null,Ui=null,n_=!1,jd=0,UT=0,Cd=1/0,Dd=null,Xr=null,hn=0,Vs=null,Zo=null,xa=0,i_=0,s_=null,IT=null,Ql=null,$l=null,ec=null,zu=0,td=null;function fs(){return(Et&2)!==0&&ht!==0?ht&-ht:He.T!==null?uv():zM()}function PT(){if(ls===0)if((ht&536870912)===0||nt){var t=Mf;Mf<<=1,(Mf&3932160)===0&&(Mf=262144),ls=t}else ls=536870912;return t=ui.current,t!==null&&(t.flags|=32),ls}function rc(t,e){if(e!=null){var n=t.stateNode,i=n.ref;i===null&&(i=n.ref=i1(qa(t.memoizedProps,n))),$l===null&&($l=[]),$l.push(e.bind(null,i))}}function Bi(t,e,n){(t===Wt&&(It===2||It===9)||t.cancelPendingCommit!==null)&&(oc(t,0),Pr(t,ht,ls,!1)),ah(t,n),((Et&2)===0||t!==Wt)&&(t===Wt&&((Et&2)===0&&(Ho|=n),vn===4&&Pr(t,ht,ls,!1)),Ma(t))}function BT(t,e,n){if((Et&6)!==0)throw Error(j(327));var i=!n&&(e&127)===0&&(e&t.expiredLanes)===0||sh(t,e),s=i?B3(t,e):n0(t,e,!0),a=i;do{if(s===0){vc&&!i&&Pr(t,e,0,!1);break}else{if(n=t.current.alternate,a&&!I3(n)){s=n0(t,e,!1),a=!1;continue}if(s===2){if(a=e,t.errorRecoveryDisabledLanes&a)var r=0;else r=t.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){e=r;e:{var o=t;s=Fu;var l=o.current.memoizedState.isDehydrated;if(l&&(oc(o,r).flags|=256),r=n0(o,r,!1),r!==2&&r!==6){if(lv&&!l){o.errorRecoveryDisabledLanes|=a,Ho|=a,s=4;break e}a=Ui,Ui=s,a!==null&&(Ui===null?Ui=a:Ui.push.apply(Ui,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){oc(t,0),Pr(t,e,0,!0);break}e:{switch(i=t,a=s,a){case 0:case 1:throw Error(j(345));case 4:if((e&4194048)!==e&&(e&62914560)!==e)break;case 6:Pr(i,e,ls,!Ir);break e;case 2:Ui=null;break;case 3:case 5:break;default:throw Error(j(329))}if((e&62914560)===e&&(s=jd+300-cs(),10<s)){if(Pr(i,e,ls,!Ir),Pd(i,0,!0)!==0)break e;xa=e,i.timeoutHandle=fv(XS.bind(null,i,n,Ui,Dd,n_,e,ls,Ho,ac,Ir,a,"Throttled",-0,0),s);break e}XS(i,n,Ui,Dd,n_,e,ls,Ho,ac,Ir,a,null,-0,0)}}break}while(!0);Ma(t)}function XS(t,e,n,i,s,a,r,o,l,c,h,f,u,d){t.timeoutHandle=-1;var g=e.subtreeFlags,b=(a&335544064)===a;if(f=null,(b||g&8192||(g&16785408)===16785408)&&(f={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ga},os=null,DT(e,a,f),b&&(g=f,b=t.containerInfo,b=(b.nodeType===9?b:b.ownerDocument).__reactViewTransition,b!=null&&(g.count++,g.waitingForViewTransition=!0,g=$u.bind(g),b.finished.then(g,g))),g=(a&62914560)===a?jd-cs():(a&4194048)===a?UT-cs():0,g=B2(f,g),g!==null)){xa=a,t.cancelPendingCommit=g(qS.bind(null,t,e,a,n,i,s,r,o,l,c,h,f,null,u,d)),Pr(t,a,r,!c);return}qS(t,e,a,n,i,s,r,o,l,c,h,f)}function I3(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!ds(a(),s))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Pr(t,e,n,i){e=UM(t,e),e&=~Rd,e&=~Ho,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var s=e;0<s;){var a=31-hs(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&PM(t,n,e)}function Jd(){return(Et&6)===0?(hh(0,!1),!1):!0}function cv(){if(ot!==null){if(It===0)var t=ot.return;else t=ot,Va=$o=null,q_(t),Kl=null,qu=0,t=ot;for(;t!==null;)hT(t.alternate,t),t=t.return;ot=null}}function oc(t,e){var n=t.timeoutHandle;return n!==-1&&(t.timeoutHandle=-1,i2(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),xa=0,cv(),Wt=t,ot=n=ka(t.current,null),ht=e,It=0,ss=null,Ir=!1,vc=sh(t,e),lv=!1,ac=ls=Rd=Ho=Qr=vn=0,Ui=Fu=null,n_=!1,ja=UM(t,e),Gd(),n}function FT(t,e){Je=null,He.H=Sd,e===gc||e===Xd?(e=_S(),It=3):e===F_?(e=_S(),It=4):It=e===ev?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ss=e,ot===null&&(vn=1,Md(t,Ds(e,t.current)))}function zT(){var t=ui.current;return t===null?!0:(ht&4194048)===ht?mi===null:(ht&62914560)===ht||(ht&536870912)!==0?t===mi:!1}function HT(){var t=He.H;return He.H=Sd,t===null?Sd:t}function GT(){var t=He.A;return He.A=O3,t}function Nd(){vn=4,Ir||(ht&4194048)!==ht&&ui.current!==null||(vc=!0),(Qr&134217727)===0&&(Ho&134217727)===0||Wt===null||Pr(Wt,ht,ls,!1)}function n0(t,e,n){var i=Et;Et|=2;var s=HT(),a=GT();(Wt!==t||ht!==e)&&(Dd=null,oc(t,e)),e=!1;var r=vn;e:do try{if(It!==0&&ot!==null){var o=ot,l=ss;switch(It){case 8:cv(),r=6;break e;case 3:case 2:case 9:case 6:ui.current===null&&(e=!0);var c=It;if(It=0,ss=null,Xl(t,o,l,c),n&&vc){r=0;break e}break;default:c=It,It=0,ss=null,Xl(t,o,l,c)}}P3(),r=vn;break}catch(h){FT(t,h)}while(!0);return e&&t.shellSuspendCounter++,Va=$o=null,Et=i,He.H=s,He.A=a,ot===null&&(Wt=null,ht=0,Gd()),r}function P3(){for(;ot!==null;)VT(ot)}function B3(t,e){var n=Et;Et|=2;var i=HT(),s=GT();Wt!==t||ht!==e?(Dd=null,Cd=cs()+500,oc(t,e)):vc=sh(t,e);e:do try{if(It!==0&&ot!==null){e=ot;var a=ss;t:switch(It){case 1:It=0,ss=null,Xl(t,e,a,1);break;case 2:case 9:if(gS(a)){It=0,ss=null,WS(e);break}e=function(){It!==2&&It!==9||Wt!==t||(It=7),Ma(t)},a.then(e,e);break e;case 3:It=7;break e;case 4:It=5;break e;case 7:gS(a)?(It=0,ss=null,WS(e)):(It=0,ss=null,Xl(t,e,a,7));break;case 5:var r=null;switch(ot.tag){case 26:r=ot.memoizedState;case 5:case 27:var o=ot;if(r?d1(r):o.stateNode.complete){It=0,ss=null;var l=o.sibling;if(l!==null)ot=l;else{var c=o.return;c!==null?(ot=c,Qd(c)):ot=null}break t}}It=0,ss=null,Xl(t,e,a,5);break;case 6:It=0,ss=null,Xl(t,e,a,6);break;case 8:cv(),vn=6;break e;default:throw Error(j(462))}}F3();break}catch(h){FT(t,h)}while(!0);return Va=$o=null,He.H=i,He.A=s,Et=n,ot!==null?0:(Wt=null,ht=0,Gd(),vn)}function F3(){for(;ot!==null&&!tC();)VT(ot)}function VT(t){var e=uT(t.alternate,t,ja);t.memoizedProps=t.pendingProps,e===null?Qd(t):ot=e}function WS(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=OS(n,e,e.pendingProps,e.type,void 0,ht);break;case 11:e=OS(n,e,e.pendingProps,e.type.render,e.ref,ht);break;case 5:q_(e);var i=e;i===Qn&&(nt?(md(i),i.tag===5&&i.stateNode!=null&&(Qt=i.stateNode)):(md(i),nt=!0));default:hT(n,e),e=ot=fE(e,ja),e=uT(n,e,ja)}t.memoizedProps=t.pendingProps,e===null?Qd(t):ot=e}function Xl(t,e,n,i){Va=$o=null,q_(e),Kl=null,qu=0;var s=e.return;try{if(T3(t,s,e,n,ht)){vn=1,Md(t,Ds(n,t.current)),ot=null;return}}catch(a){if(s!==null)throw ot=s,a;vn=1,Md(t,Ds(n,t.current)),ot=null;return}e.flags&32768?(nt||i===1?t=!0:vc||(ht&536870912)!==0?t=!1:(Ir=t=!0,(i===2||i===9||i===3||i===6)&&(i=ui.current,i!==null&&i.tag===13&&(i.flags|=16384))),kT(e,t)):Qd(e)}function Qd(t){var e=t;do{if((e.flags&32768)!==0){kT(e,Ir);return}t=e.return;var n=C3(e.alternate,e,ja);if(n!==null){ot=n;return}if(e=e.sibling,e!==null){ot=e;return}ot=e=t}while(e!==null);vn===0&&(vn=5)}function kT(t,e){do{var n=D3(t.alternate,t);if(n!==null){n.flags&=32767,ot=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){ot=t;return}ot=t=n}while(t!==null);vn=6,ot=null}function qS(t,e,n,i,s,a,r,o,l,c,h,f){t.cancelPendingCommit=null;do $d();while(hn!==0);if((Et&6)!==0)throw Error(j(327));if(e!==null){if(e===t.current)throw Error(j(177));t===Wt&&(ot=Wt=null,ht=0),Zo=e,Vs=t,xa=n,s_=s,IT=i,z3(t,e,n,r,o,l,f)}}function z3(t,e,n,i,s,a,r){var o=e.lanes|e.childLanes;if(i_=o,o|=L_,hC(t,n,o,i,s,a),$l=null,(n&335544064)===n?(ec=d3(t),i=10262):(ec=null,i=10256),(e.subtreeFlags&i)!==0||(e.flags&i)!==0?(t.callbackNode=null,t.callbackPriority=0,W3(ud,function(){return l_(),null})):(t.callbackNode=null,t.callbackPriority=0),Ad=!1,i=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||i){i=He.T,He.T=null,s=Tt.p,Tt.p=2,a=Et,Et|=4;try{N3(t,e,n)}finally{Et=a,Tt.p=s,He.T=i}}hn=1,Ad?Ql=c2(r,t.containerInfo,ec,a_,r_,G3,o_,l_,H3,null,null):(a_(),r_(),o_())}function H3(t){if(hn!==0){var e=Vs.onRecoverableError;e(t,{componentStack:null})}}function G3(){hn===3&&(hn=0,RT(Zo,Vs),hn=4)}function a_(){if(hn===1){hn=0;var t=Vs,e=Zo,n=xa,i=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||i){i=He.T,He.T=null;var s=Tt.p;Tt.p=2;var a=Et;Et|=4;try{Au=wd=!1,AT(e,t,n),n=f_;var r=sE(t.containerInfo),o=n.focusedElem,l=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&iE(o.ownerDocument.documentElement,o)){if(l!==null&&N_(o)){var c=l.start,h=l.end;if(h===void 0&&(h=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(h,o.value.length);else{var f=o.ownerDocument||document,u=f&&f.defaultView||window;if(u.getSelection){var d=u.getSelection(),g=o.textContent.length,b=Math.min(l.start,g),m=l.end===void 0?b:Math.min(l.end,g);!d.extend&&b>m&&(r=m,m=b,b=r);var p=lS(o,b),_=lS(o,m);if(p&&_&&(d.rangeCount!==1||d.anchorNode!==p.node||d.anchorOffset!==p.offset||d.focusNode!==_.node||d.focusOffset!==_.offset)){var x=f.createRange();x.setStart(p.node,p.offset),d.removeAllRanges(),b>m?(d.addRange(x),d.extend(_.node,_.offset)):(x.setEnd(_.node,_.offset),d.addRange(x))}}}}for(f=[],d=o;d=d.parentNode;)d.nodeType===1&&f.push({element:d,left:d.scrollLeft,top:d.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<f.length;o++){var v=f[o];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}fc=!!h_,f_=h_=null}finally{Et=a,Tt.p=s,He.T=i}}t.current=e,hn=2}}function r_(){if(hn===2){hn=0;var t=Vs,e=Zo,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=He.T,He.T=null;var i=Tt.p;Tt.p=2;var s=Et;Et|=4;try{xT(t,e.alternate,e)}finally{Et=s,Tt.p=i,He.T=n}}hn=3}}function o_(){if(hn===4||hn===3){hn=0;var t=Ql;Ql=null,nC();var e=Vs,n=Zo,i=xa,s=IT,a=(i&335544064)===i?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?hn=5:(hn=0,Zo=Vs=null,XT(e,e.pendingLanes)),a=e.pendingLanes,a===0&&(Xr=null),T_(i),n=n.stateNode,us&&typeof us.onCommitFiberRoot=="function")try{us.onCommitFiberRoot(ih,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=He.T,a=Tt.p,Tt.p=2,He.T=null;try{for(var r=e.onRecoverableError,o=0;o<s.length;o++){var l=s[o];r(l.value,{componentStack:l.stack})}}finally{He.T=n,Tt.p=a}}if(s=$l,r=ec,ec=null,s!==null&&($l=null,r===null&&(r=[]),t!==null))for(l=0;l<s.length;l++)n=(0,s[l])(r),n!==void 0&&t.finished.finally(n);(xa&3)!==0&&$d(),Ma(e),a=e.pendingLanes,(i&261930)!==0&&(a&42)!==0?e===td?zu++:(zu=0,td=e):(zu=0,td=null),hh(0,!1)}}function XT(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,lh(e)))}function $d(){return Ql!==null&&(Ql.skipTransition(),Ql=null),a_(),r_(),o_(),l_()}function l_(){if(hn!==5)return!1;var t=Vs,e=i_;i_=0;var n=T_(xa),i=He.T,s=Tt.p;try{Tt.p=32>n?32:n,He.T=null,n=s_,s_=null;var a=Vs,r=xa;if(hn=0,Zo=Vs=null,xa=0,(Et&6)!==0)throw Error(j(331));var o=Et;if(Et|=4,LT(a.current),CT(a,a.current,r,n),Et=o,hh(0,!1),us&&typeof us.onPostCommitFiberRoot=="function")try{us.onPostCommitFiberRoot(ih,a)}catch{}return!0}finally{Tt.p=s,He.T=i,XT(t,e)}}function YS(t,e,n){e=Ds(n,e),e=G0(t.stateNode,e,2),t=Gr(t,e,2),t!==null&&(ah(t,2),Ma(t))}function Bt(t,e,n){if(t.tag===3)YS(t,t,n);else for(;e!==null;){if(e.tag===3){YS(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Xr===null||!Xr.has(i))){t=Ds(n,t),n=aT(2),i=Gr(e,n,2),i!==null&&(rT(n,i,e,t),ah(i,2),Ma(i));break}}e=e.return}}function i0(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new U3;var s=new Set;i.set(e,s)}else s=i.get(e),s===void 0&&(s=new Set,i.set(e,s));s.has(n)||(lv=!0,s.add(n),t=V3.bind(null,t,e,n),e.then(t,t))}function V3(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,Wt===t&&(ht&n)===n&&((vn===4||vn===3&&(ht&62914560)===ht&&300>cs()-jd)&&(Et&2)===0?oc(t,0):Rd|=n,ac===ht&&(ac=0)),Ma(t)}function WT(t,e){e===0&&(e=IM()),t=Qo(t,e),t!==null&&(ah(t,e),Ma(t))}function k3(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),WT(t,n)}function X3(t,e){var n=0;switch(t.tag){case 31:case 13:var i=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(j(314))}i!==null&&i.delete(e),WT(t,n)}function W3(t,e){return M_(t,e)}var lc=null,Ll=null,c_=!1,Ld=!1,s0=!1,Br=0;function Ma(t){t!==Ll&&t.next===null&&(Ll===null?lc=Ll=t:Ll=Ll.next=t),Ld=!0,c_||(c_=!0,Y3())}function hh(t,e){if(!s0&&Ld){s0=!0;do for(var n=!1,i=lc;i!==null;){if(!e)if(t!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-hs(42|t)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ZS(i,a))}else a=ht,a=Pd(i,i===Wt?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||sh(i,a)||(n=!0,ZS(i,a));i=i.next}while(n);s0=!1}}function q3(){qT()}function qT(){Ld=c_=!1;var t=0;Br!==0&&n2()&&(t=Br);for(var e=cs(),n=null,i=lc;i!==null;){var s=i.next,a=YT(i,e);a===0?(i.next=null,n===null?lc=s:n.next=s,s===null&&(Ll=n)):(n=i,(t!==0||(a&3)!==0)&&(Ld=!0)),i=s}hn!==0&&hn!==5||hh(t,!1),Br!==0&&(Br=0)}function YT(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,s=t.expirationTimes,a=t.pendingLanes&-62914561;0<a;){var r=31-hs(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=uC(o,e)):l<=e&&(t.expiredLanes|=o),a&=~o}if(e=Wt,n=ht,n=Pd(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,n===0||t===e&&(It===2||It===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&Pg(i),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||sh(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(i!==null&&Pg(i),T_(n)){case 2:case 8:n=LM;break;case 32:n=ud;break;case 268435456:n=OM;break;default:n=ud}return i=ZT.bind(null,t),n=M_(n,i),t.callbackPriority=e,t.callbackNode=n,e}return i!==null&&i!==null&&Pg(i),t.callbackPriority=2,t.callbackNode=null,2}function ZT(t,e){if(hn!==0&&hn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if($d()&&t.callbackNode!==n)return null;var i=ht;return i=Pd(t,t===Wt?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(BT(t,i,e),YT(t,cs()),t.callbackNode!=null&&t.callbackNode===n?ZT.bind(null,t):null)}function ZS(t,e){if($d())return null;BT(t,e,!0)}function Y3(){s2(function(){(Et&6)!==0?M_(NM,q3):qT()})}function uv(){if(Br===0){var t=Xo;t===0&&(t=Sf,Sf<<=1,(Sf&261888)===0&&(Sf=256)),Br=t}return Br}function KS(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:kf(t)}function Z3(t,e,n,i,s){if(e==="submit"&&n&&n.stateNode===s){var a=KS((s[zi]||null).action),r=i.submitter;r&&(e=(e=r[zi]||null)?KS(e.formAction):r.getAttribute("formAction"),e!==null&&(a=e,r=null));var o=new Fd("action","action",null,i,s);t.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Br!==0){var l=new FormData(s,r);z0(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=new FormData(s,r),z0(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(Bf=0;Bf<R0.length;Bf++)Ff=R0[Bf],jS=Ff.toLowerCase(),JS=Ff[0].toUpperCase()+Ff.slice(1),ks(jS,"on"+JS);var Ff,jS,JS,Bf;ks(rE,"onAnimationEnd");ks(oE,"onAnimationIteration");ks(lE,"onAnimationStart");ks("dblclick","onDoubleClick");ks("focusin","onFocus");ks("focusout","onBlur");ks(a3,"onTransitionRun");ks(r3,"onTransitionStart");ks(o3,"onTransitionCancel");ks(cE,"onTransitionEnd");nc("onMouseEnter",["mouseout","mouseover"]);nc("onMouseLeave",["mouseout","mouseover"]);nc("onPointerEnter",["pointerout","pointerover"]);nc("onPointerLeave",["pointerout","pointerover"]);jo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));jo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));jo("onBeforeInput",["compositionend","keypress","textInput","paste"]);jo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));jo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));jo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ku="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),K3=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ku));function KT(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],s=i.event;i=i.listeners;e:{var a=void 0;if(e)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break e;a=o,s.currentTarget=c;try{a(s)}catch(h){fd(h)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break e;a=o,s.currentTarget=c;try{a(s)}catch(h){fd(h)}s.currentTarget=null,a=l}}}}function rt(t,e){var n=e[Wb];n===void 0&&(n=e[Wb]=new Set);var i=t+"__bubble";n.has(i)||(jT(e,t,2,!1),n.add(i))}function a0(t,e,n){var i=0;e&&(i|=4),jT(n,t,i,e)}var zf="_reactListening"+Math.random().toString(36).slice(2);function hv(t){if(!t[zf]){t[zf]=!0,GM.forEach(function(n){n!=="selectionchange"&&(K3.has(n)||a0(n,!1,t),a0(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[zf]||(e[zf]=!0,a0("selectionchange",!1,e))}}function jT(t,e,n,i){switch(x1(e)){case 2:var s=G2;break;case 8:s=V2;break;default:s=vv}n=s.bind(null,e,n,t),s=void 0,!E0||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),i?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function r0(t,e,n,i,s){var a=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=Uo(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue e}o=o.parentNode}}i=i.return}KM(function(){var c=a,h=w_(n),f=[];e:{var u=uE.get(t);if(u!==void 0){var d=Fd,g=t;switch(t){case"keypress":if(Wf(n)===0)break e;case"keydown":case"keyup":d=IC;break;case"focusin":g="focus",d=Vg;break;case"focusout":g="blur",d=Vg;break;case"beforeblur":case"afterblur":d=Vg;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=$b;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=MC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=HC;break;case rE:case oE:case lE:d=AC;break;case cE:d=VC;break;case"scroll":case"scrollend":d=bC;break;case"wheel":d=XC;break;case"copy":case"cut":case"paste":d=RC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=tS;break;case"submit":d=FC;break;case"toggle":case"beforetoggle":d=qC}var b=(e&4)!==0,m=!b&&(t==="scroll"||t==="scrollend"),p=b?u!==null?u+"Capture":null:u;b=[];for(var _=c,x;_!==null;){var v=_;if(x=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||x===null||p===null||(v=Gu(_,p),v!=null&&b.push(ju(_,v,x))),m)break;_=_.return}0<b.length&&(u=new d(u,g,null,n,h),f.push({event:u,listeners:b}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",u=t==="mouseout"||t==="pointerout",d&&n!==M0&&(g=n.relatedTarget||n.fromElement)&&(Uo(g)||g[pc]))break e;(u||d)&&(g=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,u?(d=n.relatedTarget||n.toElement,u=c,d=d?Uo(d):null,d!==null&&(m=nh(d),b=d.tag,d!==m||b!==5&&b!==27&&b!==6)&&(d=null)):(u=null,d=c),u!==d&&(b=$b,v="onMouseLeave",p="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(b=tS,v="onPointerLeave",p="onPointerEnter",_="pointer"),m=u==null?g:Eu(u),x=d==null?g:Eu(d),g=new b(v,_+"leave",u,n,h),g.target=m,g.relatedTarget=x,v=null,Uo(h)===c&&(b=new b(p,_+"enter",d,n,h),b.target=x,b.relatedTarget=m,v=b),m=v,b=u&&d?h0(u,d,j3):null,u!==null&&QS(f,g,u,b,!1),d!==null&&m!==null&&QS(f,m,d,b,!0)))}e:{if(u=c?Eu(c):window,d=u.nodeName&&u.nodeName.toLowerCase(),d==="select"||d==="input"&&u.type==="file")var M=aS;else if(sS(u))if(tE)M=n3;else{M=e3;var E=$C}else d=u.nodeName,!d||d.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&A_(c.elementType)&&(M=aS):M=t3;if(M&&(M=M(t,c))){eE(f,M,n,h);break e}E&&E(t,u,c)}switch(E=c?Eu(c):window,t){case"focusin":(sS(E)||E.contentEditable==="true")&&(Fl=E,A0=c,Cu=null);break;case"focusout":Cu=A0=Fl=null;break;case"mousedown":w0=!0;break;case"contextmenu":case"mouseup":case"dragend":w0=!1,cS(f,n,h);break;case"selectionchange":if(s3)break;case"keydown":case"keyup":cS(f,n,h)}var w;if(D_)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Bl?QM(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(JM&&n.locale!=="ko"&&(Bl||y!=="onCompositionStart"?y==="onCompositionEnd"&&Bl&&(w=jM()):(Or=h,R_="value"in Or?Or.value:Or.textContent,Bl=!0)),E=Od(c,y),0<E.length&&(y=new eS(y,t,null,n,h),f.push({event:y,listeners:E}),w?y.data=w:(w=$M(n),w!==null&&(y.data=w)))),(w=ZC?KC(t,n):jC(t,n))&&(y=Od(c,"onBeforeInput"),0<y.length&&(E=new eS("onBeforeInput","beforeinput",null,n,h),f.push({event:E,listeners:y}),E.data=w)),Z3(f,t,c,n,h)}KT(f,e)})}function ju(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Od(t,e){for(var n=e+"Capture",i=[];t!==null;){var s=t,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=Gu(t,n),s!=null&&i.unshift(ju(t,s,a)),s=Gu(t,e),s!=null&&i.push(ju(t,s,a))),t.tag===3)return i;t=t.return}return[]}function j3(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function QS(t,e,n,i,s){for(var a=e._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=Gu(n,a),c!=null&&r.unshift(ju(n,c,l))):s||(c=Gu(n,a),c!=null&&r.push(ju(n,c,l)))),n=n.return}r.length!==0&&t.push({event:e,listeners:r})}var J3=/\r\n?/g,Q3=/\u0000|\uFFFD/g;function $S(t){return(typeof t=="string"?t:""+t).replace(J3,`
`).replace(Q3,"")}function JT(t,e){return e=$S(e),$S(t)===e}function Pt(t,e,n,i,s,a){switch(n){case"children":if(typeof i=="string")e==="body"||e==="textarea"&&i===""||ic(t,i);else if(typeof i=="number"||typeof i=="bigint")e!=="body"&&ic(t,""+i);else return;break;case"className":Tf(t,"class",i);break;case"tabIndex":Tf(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Tf(t,n,i);break;case"style":ZM(t,i,a);return;case"data":if(e!=="object"){Tf(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=kf(i),t.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(e!=="input"&&Pt(t,e,"name",s.name,s,null),Pt(t,e,"formEncType",s.formEncType,s,null),Pt(t,e,"formMethod",s.formMethod,s,null),Pt(t,e,"formTarget",s.formTarget,s,null)):(Pt(t,e,"encType",s.encType,s,null),Pt(t,e,"method",s.method,s,null),Pt(t,e,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=kf(i),t.setAttribute(n,i);break;case"onClick":i!=null&&(t.onclick=ga);return;case"onScroll":i!=null&&rt("scroll",t);return;case"onScrollEnd":i!=null&&rt("scrollend",t);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(j(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(j(60));a?.__html!==n&&(t.innerHTML=n)}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}n=kf(i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,i):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":i===!0?t.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,i):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(n,i):t.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(n):t.setAttribute(n,i);break;case"popover":rt("beforetoggle",t),rt("toggle",t),Vf(t,"popover",i);break;case"xlinkActuate":za(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":za(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":za(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":za(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":za(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":za(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":za(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":za(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":za(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Vf(t,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=yC.get(n)||n,Vf(t,n,i);else return}bt=!0}function u_(t,e,n,i,s,a){switch(n){case"style":ZM(t,i,a);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(j(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(j(60));a?.__html!==n&&(t.innerHTML=n)}}break;case"children":if(typeof i=="string")ic(t,i);else if(typeof i=="number"||typeof i=="bigint")ic(t,""+i);else return;break;case"onScroll":i!=null&&rt("scroll",t);return;case"onScrollEnd":i!=null&&rt("scrollend",t);return;case"onClick":i!=null&&(t.onclick=ga);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!VM.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),a=n.slice(2,s?n.length-7:void 0),e=t[zi]||null,e=e!=null?e[n]:null,typeof e=="function"&&t.removeEventListener(a,e,s),typeof i=="function")){typeof e!="function"&&e!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(a,i,s);break e}bt=!0,n in t?t[n]=i:i===!0?t.setAttribute(n,""):Vf(t,n,i)}return}bt=!0}function ci(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":rt("error",t),rt("load",t);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(j(137,e));default:Pt(t,e,a,r,n,null)}}s&&Pt(t,e,"srcSet",n.srcSet,n,null),i&&Pt(t,e,"src",n.src,n,null);return;case"input":rt("invalid",t);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"name":s=h;break;case"type":r=h;break;case"checked":l=h;break;case"defaultChecked":c=h;break;case"value":a=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(j(137,e));break;default:Pt(t,e,i,h,n,null)}}WM(t,a,o,l,c,r,s,!1);return;case"select":rt("invalid",t),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:Pt(t,e,s,o,n,null)}e=a,n=r,t.multiple=!!i,e!=null?ql(t,!!i,e,!1):n!=null&&ql(t,!!i,n,!0);return;case"textarea":rt("invalid",t),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(j(91));break;default:Pt(t,e,r,o,n,null)}YM(t,i,s,a);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":t.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Pt(t,e,l,i,n,null)}return;case"dialog":rt("beforetoggle",t),rt("toggle",t),rt("cancel",t),rt("close",t);break;case"iframe":case"object":rt("load",t);break;case"video":case"audio":for(i=0;i<Ku.length;i++)rt(Ku[i],t);break;case"image":rt("error",t),rt("load",t);break;case"details":rt("toggle",t);break;case"embed":case"source":case"link":rt("error",t),rt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(j(137,e));default:Pt(t,e,c,i,n,null)}return;default:if(A_(e)){for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!==void 0&&u_(t,e,h,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&Pt(t,e,o,i,n,null))}var $3={};function e2(t,e,n,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,h=null;for(d in n){var f=n[d];if(n.hasOwnProperty(d)&&f!=null)switch(d){case"checked":break;case"value":break;case"defaultValue":l=f;default:i.hasOwnProperty(d)||Pt(t,e,d,null,i,f)}}for(var u in i){var d=i[u];if(f=n[u],i.hasOwnProperty(u)&&(d!=null||f!=null))switch(u){case"type":d!==f&&(bt=!0),a=d;break;case"name":d!==f&&(bt=!0),s=d;break;case"checked":d!==f&&(bt=!0),c=d;break;case"defaultChecked":d!==f&&(bt=!0),h=d;break;case"value":d!==f&&(bt=!0),r=d;break;case"defaultValue":d!==f&&(bt=!0),o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(j(137,e));break;default:d!==f&&Pt(t,e,u,d,i,f)}}S0(t,r,o,l,c,h,a,s);return;case"select":d=r=o=u=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":d=l;default:i.hasOwnProperty(a)||Pt(t,e,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":a!==l&&(bt=!0),u=a;break;case"defaultValue":a!==l&&(bt=!0),o=a;break;case"multiple":a!==l&&(bt=!0),r=a;default:a!==l&&Pt(t,e,s,a,i,l)}e=o,n=r,i=d,u!=null?ql(t,!!n,u,!1):!!i!=!!n&&(e!=null?ql(t,!!n,e,!0):ql(t,!!n,n?[]:"",!1));return;case"textarea":d=u=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:Pt(t,e,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":s!==a&&(bt=!0),u=s;break;case"defaultValue":s!==a&&(bt=!0),d=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(j(91));break;default:s!==a&&Pt(t,e,r,s,i,a)}qM(t,u,d);return;case"option":for(var g in n)if(u=n[g],n.hasOwnProperty(g)&&u!=null&&!i.hasOwnProperty(g))switch(g){case"selected":t.selected=!1;break;default:Pt(t,e,g,null,i,u)}for(l in i)if(u=i[l],d=n[l],i.hasOwnProperty(l)&&u!==d&&(u!=null||d!=null))switch(l){case"selected":u!==d&&(bt=!0),t.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:Pt(t,e,l,u,i,d)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var b in n)u=n[b],n.hasOwnProperty(b)&&u!=null&&!i.hasOwnProperty(b)&&Pt(t,e,b,null,i,u);for(c in i)if(u=i[c],d=n[c],i.hasOwnProperty(c)&&u!==d&&(u!=null||d!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(j(137,e));break;default:Pt(t,e,c,u,i,d)}return;default:if(A_(e)){for(var m in n)u=n[m],n.hasOwnProperty(m)&&u!==void 0&&!i.hasOwnProperty(m)&&u_(t,e,m,void 0,i,u);for(h in i)u=i[h],d=n[h],!i.hasOwnProperty(h)||u===d||u===void 0&&d===void 0||u_(t,e,h,u,i,d);return}}for(var p in n)u=n[p],n.hasOwnProperty(p)&&u!=null&&!i.hasOwnProperty(p)&&Pt(t,e,p,null,i,u);for(f in i)u=i[f],d=n[f],!i.hasOwnProperty(f)||u===d||u==null&&d==null||Pt(t,e,f,u,i,d)}function eM(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function t2(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&eM(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var h=l.transferSize,f=l.initiatorType;h&&eM(f)&&(l=l.responseEnd,r+=h*(l<o?1:(o-c)/(l-c)))}if(--i,e+=8*(a+r)/(s.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var h_=null,f_=null;function Ju(t){return t.nodeType===9?t:t.ownerDocument}function tM(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function QT(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function $T(t,e,n,i){return n=Ju(n).createElement(t),n[ai]=i,n[zi]=e,ci(n,t,e),Jn(n),n}function d_(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var o0=null;function n2(){var t=window.event;return t&&t.type==="popstate"?t===o0?!1:(o0=t,!0):(o0=null,!1)}var fv=typeof setTimeout=="function"?setTimeout:void 0,i2=typeof clearTimeout=="function"?clearTimeout:void 0,nM=typeof Promise=="function"?Promise:void 0,iM=typeof requestAnimationFrame=="function"?requestAnimationFrame:fv,s2=typeof queueMicrotask=="function"?queueMicrotask:typeof nM<"u"?function(t){return nM.resolve(null).then(t).catch(a2)}:fv;function a2(t){setTimeout(function(){throw t})}function eo(t){return t==="head"}function sM(t,e){var n=e,i=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){t.removeChild(s),dc(e);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")c0(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,c0(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[rh]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&c0(t.ownerDocument.body);n=s}while(n);dc(e)}function aM(t,e){var n=t;t=0;do{var i=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=i}while(n)}function e1(t,e,n){if(e=CSS.escape(e)!==e?"r-"+btoa(e).replace(/=/g,""):e,t.style.viewTransitionName=e,n!=null&&(t.style.viewTransitionClass=n),n=getComputedStyle(t),n.display==="inline"){if(e=t.getClientRects(),e.length===1)var i=1;else for(var s=i=0;s<e.length;s++){var a=e[s];0<a.width&&0<a.height&&i++}i===1&&(t=t.style,t.display=e.length===1?"inline-block":"block",t.marginTop="-"+n.paddingTop,t.marginBottom="-"+n.paddingBottom)}}function t1(t,e){t=t.style,e=e.style;var n=e!=null?e.hasOwnProperty("viewTransitionName")?e.viewTransitionName:e.hasOwnProperty("view-transition-name")?e["view-transition-name"]:null:null;t.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=e!=null?e.hasOwnProperty("viewTransitionClass")?e.viewTransitionClass:e.hasOwnProperty("view-transition-class")?e["view-transition-class"]:null:null,t.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),t.display==="inline-block"&&(e==null?t.display=t.margin="":(n=e.display,t.display=n==null||typeof n=="boolean"?"":n,n=e.margin,n!=null?t.margin=n:(n=e.hasOwnProperty("marginTop")?e.marginTop:e["margin-top"],t.marginTop=n==null||typeof n=="boolean"?"":n,e=e.hasOwnProperty("marginBottom")?e.marginBottom:e["margin-bottom"],t.marginBottom=e==null||typeof e=="boolean"?"":e)))}function n1(t,e,n){return n=n.ownerDocument.defaultView,{rect:t,abs:e.position==="absolute"||e.position==="fixed",clip:e.clipPath!=="none"||e.overflow!=="visible"||e.filter!=="none"||e.mask!=="none"||e.mask!=="none"||e.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=n.innerHeight&&t.left<=n.innerWidth}}function p_(t){var e=t.getBoundingClientRect(),n=getComputedStyle(t);return n1(e,n,t)}function r2(t){var e=t.getBoundingClientRect();e=new DOMRect(e.x+2e4,e.y+2e4,e.width,e.height);var n=getComputedStyle(t);return n1(e,n,t)}function o2(t){return t.documentElement.clientHeight}function l2(t){this.addEventListener("load",t),this.addEventListener("error",t)}function c2(t,e,n,i,s,a,r,o,l){var c=e.nodeType===9?e:e.ownerDocument;try{var h=c.startViewTransition({update:function(){var u=c.defaultView,d=u.navigation&&u.navigation.transition,g=c.fonts.status;i();var b=[];if(g==="loaded"&&(o2(c),c.fonts.status==="loading"&&b.push(c.fonts.ready)),g=b.length,t!==null)for(var m=t.suspenseyImages,p=0,_=0;_<m.length;_++){var x=m[_];if(!x.complete){var v=x.getBoundingClientRect();if(0<v.bottom&&0<v.right&&v.top<u.innerHeight&&v.left<u.innerWidth){if(p+=p1(x),p>sd){b.length=g;break}x=new Promise(l2.bind(x)),b.push(x)}}}if(0<b.length)return u=Promise.race([Promise.all(b),new Promise(function(M){return setTimeout(M,500)})]).then(s,s),(d?Promise.allSettled([d.finished,u]):u).then(a,a);if(s(),d)return d.finished.then(a,a);a()},types:n});c.__reactViewTransition=h;var f=[];return h.ready.then(function(){for(var u=c.documentElement.getAnimations({subtree:!0}),d=0;d<u.length;d++){var g=u[d],b=g.effect,m=b.pseudoElement;if(m!=null&&m.startsWith("::view-transition")){f.push(g),g=b.getKeyframes();for(var p=m=void 0,_=!0,x=0;x<g.length;x++){var v=g[x],M=v.width;if(m===void 0)m=M;else if(m!==M){_=!1;break}if(M=v.height,p===void 0)p=M;else if(p!==M){_=!1;break}delete v.width,delete v.height,v.transform==="none"&&delete v.transform}_&&m!==void 0&&p!==void 0&&(b.setKeyframes(g),_=getComputedStyle(b.target,b.pseudoElement),_.width!==m||_.height!==p)&&(_=g[0],_.width=m,_.height=p,_=g[g.length-1],_.width=m,_.height=p,b.setKeyframes(g))}}r()},function(u){c.__reactViewTransition===h&&(c.__reactViewTransition=null);try{if(typeof u=="object"&&u!==null)switch(u.name){case"InvalidStateError":(u.message==="View transition was skipped because document visibility state is hidden."||u.message==="Skipping view transition because document visibility state has become hidden."||u.message==="Skipping view transition because viewport size changed."||u.message==="Transition was aborted because of invalid state")&&(u=null)}u!==null&&l(u)}finally{i(),s(),r()}}),h.finished.finally(function(){for(var u=0;u<f.length;u++)f[u].cancel();c.__reactViewTransition===h&&(c.__reactViewTransition=null),o()}),h}catch{return i(),s(),r(),null}}function Io(t,e){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+e+")"}Io.prototype.animate=function(t,e){return e=typeof e=="number"?{duration:e}:qt({},e),e.pseudoElement=this._selector,this._scope.animate(t,e)};Io.prototype.getAnimations=function(){for(var t=this._scope,e=this._selector,n=t.getAnimations({subtree:!0}),i=[],s=0;s<n.length;s++){var a=n[s].effect;a!==null&&a.target===t&&a.pseudoElement===e&&i.push(n[s])}return i};Io.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function i1(t){return{name:t,group:new Io("group",t),imagePair:new Io("image-pair",t),old:new Io("old",t),new:new Io("new",t)}}function ps(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}ps.prototype.addEventListener=function(t,e,n){var i=null,s=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(s1(a,t,e,n)===-1){var r=this,o=e;n!=null&&typeof n!="boolean"&&n.once===!0&&(o=function(l){r.removeEventListener(t,e,n),typeof e=="function"?e.call(this,l):e.handleEvent(l)}),i!==null&&(s=r.removeEventListener.bind(r,t,e,n),i.addEventListener("abort",s,{once:!0}),s=i.removeEventListener.bind(i,"abort",s)),i=cc(n),a.push({type:t,listener:e,optionsOrUseCapture:n,attachedListener:o,cleanup:s}),Fi(this._fragmentFiber.child,!1,u2,t,o,i)}this._eventListeners=a}};function u2(t,e,n,i){return zn(t).addEventListener(e,n,i),!1}ps.prototype.removeEventListener=function(t,e,n){var i=this._eventListeners;if(i!==null&&(e=s1(i,t,e,n),e!==-1)){var s=i[e];n=s.attachedListener;var a=s.cleanup;s=cc(s.optionsOrUseCapture),Fi(this._fragmentFiber.child,!1,h2,t,n,s),i.splice(e,1),a!==null&&a()}};function h2(t,e,n,i){return zn(t).removeEventListener(e,n,i),!1}function cc(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function rM(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function s1(t,e,n,i){if(t.length===0)return-1;i=rM(i);for(var s=0;s<t.length;s++){var a=t[s];if(a.type===e&&a.listener===n&&rM(a.optionsOrUseCapture)===i)return s}return-1}ps.prototype.dispatchEvent=function(t){var e=Ko(this._fragmentFiber);if(e===null)return!0;e=zn(e);var n=this._eventListeners;if(n!==null&&0<n.length||!t.bubbles){var i=e.nodeType===9?e.createComment(""):document.createTextNode("");if(n)for(var s=0;s<n.length;s++){var a=n[s];i.addEventListener(a.type,a.attachedListener,cc(a.optionsOrUseCapture))}if(e.appendChild(i),t=i.dispatchEvent(t),n)for(s=0;s<n.length;s++)a=n[s],i.removeEventListener(a.type,a.attachedListener,cc(a.optionsOrUseCapture));return e.removeChild(i),t}return e.dispatchEvent(t)};ps.prototype.focus=function(t){Fi(this._fragmentFiber.child,!0,a1,t,void 0,void 0)};function a1(t,e){return t.tag===6?!1:(t=zn(t),M2(t,e))}ps.prototype.focusLast=function(t){var e=[];Fi(this._fragmentFiber.child,!0,dv,e,void 0,void 0);for(var n=e.length-1;0<=n&&!a1(e[n],t);n--);};function dv(t,e){return e.push(t),!1}ps.prototype.blur=function(){var t=Ko(this._fragmentFiber);t!==null&&(t=zn(t),t=Ju(t).activeElement,t!==null&&Fi(this._fragmentFiber.child,!1,f2,t,void 0,void 0))};function f2(t,e){return t.tag===6?!1:(t=zn(t),t===e||t.contains(e)?(e.blur(),!0):!1)}ps.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),Fi(this._fragmentFiber.child,!1,d2,t,void 0,void 0)};function d2(t,e){return t.tag===6||(t=zn(t),e.observe(t)),!1}ps.prototype.unobserveUsing=function(t){var e=this._observers;if(e!==null&&e.has(t)){e.delete(t),Fi(this._fragmentFiber.child,!1,p2,t,void 0,void 0);for(var n=e=0;n<Gs.length;n++){var i=Gs[n];i.fragmentInstance===this&&i.observer===t?t.unobserve(i.instance):Gs[e++]=i}Gs.length=e}};function p2(t,e){return t.tag===6||(t=zn(t),e.unobserve(t)),!1}var Gs=[],l0=!1;function m2(t,e,n){Gs.push({fragmentInstance:t,observer:e,instance:n}),l0||(l0=!0,E2(function(){l0=!1;var i=Gs;Gs=[];for(var s=0;s<i.length;s++){var a=i[s];a.observer.unobserve(a.instance)}}))}ps.prototype.getClientRects=function(){var t=[];return Fi(this._fragmentFiber.child,!1,g2,t,void 0,void 0),t};function g2(t,e){if(t.tag===6){t=t.stateNode;var n=t.ownerDocument.createRange();n.selectNodeContents(t),e.push.apply(e,n.getClientRects())}else t=zn(t),e.push.apply(e,t.getClientRects());return!1}ps.prototype.getRootNode=function(t){var e=Ko(this._fragmentFiber);return e===null?this:zn(e).getRootNode(t)};ps.prototype.compareDocumentPosition=function(t){var e=Ko(this._fragmentFiber);if(e===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];Fi(this._fragmentFiber.child,!1,dv,n,void 0,void 0);var i=zn(e);if(n.length===0){if(n=i,zb(this._fragmentFiber)){e:{for(e=this._fragmentFiber.return;e!==null;){if(e.tag===4){e=e.stateNode.containerInfo;break e}if(e.tag===3||e.tag===5||e.tag===27)break;e=e.return}e=null}e!=null&&(n=e)}e=this._fragmentFiber;var s=i=n.compareDocumentPosition(t);return n===t?s=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=wM(e)[1],n===null?s=Node.DOCUMENT_POSITION_PRECEDING:(t=zn(n).compareDocumentPosition(t),s=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),s|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}e=zn(n[0]),s=zn(n[n.length-1]);var a=zb(this._fragmentFiber)?e.parentElement:i;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=a.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=e.compareDocumentPosition(t),o=s.compareDocumentPosition(t),l=r&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=i&&a&&r&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,e=i&&e===t||a&&s===t||l||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&e===t||!a&&s===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,e&Node.DOCUMENT_POSITION_DISCONNECTED||e&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||_2(e,this._fragmentFiber,n[0],n[n.length-1],t)?e:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function _2(t,e,n,i,s){var a=Uo(s);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)e:{for(;a!==null;){if(a.tag===7&&(a===e||a.alternate===e)){n=!0;break e}a=a.return}n=!1}return n}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=s.ownerDocument,s===a||s===a.documentElement||s===a.body;e:{for(a=e,e=Ko(e);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==e&&a.alternate!==e)){a=!0;break e}a=a.return}a=!1}return a}return t&Node.DOCUMENT_POSITION_PRECEDING?((e=!!a)&&!(e=a===n)&&(e=h0(n,a,Hb),e===null?e=!1:(Fi(e,!0,YR,a,n),a=Ol,Ol=null,e=a!==null)),e):t&Node.DOCUMENT_POSITION_FOLLOWING?((e=!!a)&&!(e=a===i)&&(e=h0(i,a,Hb),e===null?e=!1:(Fi(e,!0,ZR,a,i),a=Ol,u0=Ol=null,e=a!==null)),e):!1}function oM(t,e){var n=t.ownerDocument.createRange();n.selectNodeContents(t),t=n.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,e?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}ps.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(j(566));var e=[];Fi(this._fragmentFiber.child,!1,dv,e,void 0,void 0);var n=t!==!1;if(e.length===0){var i=wM(this._fragmentFiber);if(i=n?i[1]||i[0]||Ko(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){t=zn(i),oM(t,n);return}if(i=zn(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(t);return}i.scrollIntoView(t)}}for(i=n?e.length-1:0;i!==(n?-1:e.length);){var s=e[i];s.tag===6?(s=zn(s),oM(s,n)):zn(s).scrollIntoView(t),i+=n?-1:1}};function v2(t,e){return t=zn(t),r1(t,e),!1}function r1(t,e){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(e)}function o1(t,e){var n=e._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];t.addEventListener(s.type,s.attachedListener,cc(s.optionsOrUseCapture))}t.nodeType!==3&&(n=e._observers,n!==null&&n.forEach(function(a){for(var r=0,o=0;o<Gs.length;o++){var l=Gs[o];(l.fragmentInstance!==e||l.observer!==a||l.instance!==t)&&(Gs[r++]=l)}Gs.length=r,a.observe(t)}),r1(t,e))}function y2(t,e){var n=e._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];t.removeEventListener(s.type,s.attachedListener,cc(s.optionsOrUseCapture))}t.nodeType!==3&&(n=e._observers,n!==null&&n.forEach(function(a){typeof a.rootMargin=="string"?m2(e,a,t):a.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(e))}function m_(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":m_(n),Bd(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function x2(t,e,n,i){for(;t.nodeType===1;){var s=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[rh])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(a=t.getAttribute("rel"),a==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(a!==s.rel||t.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||t.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||t.getAttribute("title")!==(s.title==null?null:s.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(a=t.getAttribute("src"),(a!==(s.src==null?null:s.src)||t.getAttribute("type")!==(s.type==null?null:s.type)||t.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&t.getAttribute("name")===a)return t}else return t;if(t=Ls(t.nextSibling),t===null)break}return null}function b2(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ls(t.nextSibling),t===null))return null;return t}function l1(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Ls(t.nextSibling),t===null))return null;return t}function g_(t){return t.data==="$?"||t.data==="$~"}function pv(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function S2(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var i=function(){e(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function Ls(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var __=null;function lM(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return Ls(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function cM(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function M2(t,e){function n(){i=!0}if(t.ownerDocument.activeElement===t)return!0;var i=!1;try{t.ownerDocument.addEventListener("focus",n,!0),(t.focus||HTMLElement.prototype.focus).call(t,e)}finally{t.ownerDocument.removeEventListener("focus",n,!0)}return i}function E2(t){iM(function(){iM(function(e){return t(e)})})}function c1(t,e,n){switch(e=Ju(n),t){case"html":if(t=e.documentElement,!t)throw Error(j(452));return t;case"head":if(t=e.head,!t)throw Error(j(453));return t;case"body":if(t=e.body,!t)throw Error(j(454));return t;default:throw Error(j(451))}}function u1(t,e,n){for(var i in n){var s=n[i];n.hasOwnProperty(i)&&s!=null&&Pt(t,e,i,null,$3,s)}n.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===ga&&(t.onclick=null),Bd(t)}function c0(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Bd(t)}var Os=new Map,uM=new Set;function Qu(t){if(typeof t.getRootNode=="function"){var e=t.getRootNode();if(e.nodeType===9||e.nodeType===11)return e}return t.nodeType===9?t:t.ownerDocument}var $a=Tt.d;Tt.d={f:T2,r:A2,D:w2,C:R2,L:C2,m:D2,X:L2,S:N2,M:O2};function T2(){var t=$a.f(),e=Jd();return t||e}function A2(t){var e=mc(t);e!==null&&e.tag===5&&e.type==="form"?ZE(e):$a.r(t)}var yc=typeof document>"u"?null:document;function h1(t,e,n){var i=yc;if(i&&typeof e=="string"&&e){var s=Cs(e);s='link[rel="'+t+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),uM.has(s)||(uM.add(s),t={rel:t,crossOrigin:n,href:e},i.querySelector(s)===null&&(e=i.createElement("link"),ci(e,"link",t),Jn(e),i.head.appendChild(e)))}}function w2(t){$a.D(t),h1("dns-prefetch",t,null)}function R2(t,e){$a.C(t,e),h1("preconnect",t,e)}function C2(t,e,n){$a.L(t,e,n);var i=yc;if(i&&t&&e){var s='link[rel="preload"][as="'+Cs(e)+'"]';e==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+Cs(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+Cs(n.imageSizes)+'"]')):s+='[href="'+Cs(t)+'"]';var a=s;switch(e){case"style":a=uc(t);break;case"script":a=xc(t)}if(!(Os.has(a)||(t=qt({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),Os.set(a,t),i.querySelector(s)!==null||e==="style"&&i.querySelector(fh(a))||e==="script"&&i.querySelector(dh(a))))){var r=i.createElement("link");ci(r,"link",t),e==="style"&&(r[hd]=!0,r.onload=r.onerror=function(){HM(r)}),Jn(r),i.head.appendChild(r)}}}function D2(t,e){$a.m(t,e);var n=yc;if(n&&t){var i=e&&typeof e.as=="string"?e.as:"script",s='link[rel="modulepreload"][as="'+Cs(i)+'"][href="'+Cs(t)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=xc(t)}if(!Os.has(a)&&(t=qt({rel:"modulepreload",href:t},e),Os.set(a,t),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(dh(a)))return}i=n.createElement("link"),ci(i,"link",t),Jn(i),n.head.appendChild(i)}}}function N2(t,e,n){$a.S(t,e,n);var i=yc;if(i&&t){var s=Wl(i).hoistableStyles,a=uc(t);e=e||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(fh(a)))o.loading=5;else{t=qt({rel:"stylesheet",href:t,"data-precedence":e},n),(n=Os.get(a))&&mv(t,n);var l=r=i.createElement("link");Jn(l),ci(l,"link",t),l._p=new Promise(function(c,h){l.onload=c,l.onerror=h}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,nd(r,e,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function L2(t,e){$a.X(t,e);var n=yc;if(n&&t){var i=Wl(n).hoistableScripts,s=xc(t),a=i.get(s);a||(a=n.querySelector(dh(s)),a||(t=qt({src:t,async:!0},e),(e=Os.get(s))&&gv(t,e),a=n.createElement("script"),Jn(a),ci(a,"link",t),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function O2(t,e){$a.M(t,e);var n=yc;if(n&&t){var i=Wl(n).hoistableScripts,s=xc(t),a=i.get(s);a||(a=n.querySelector(dh(s)),a||(t=qt({src:t,async:!0,type:"module"},e),(e=Os.get(s))&&gv(t,e),a=n.createElement("script"),Jn(a),ci(a,"link",t),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function hM(t,e,n,i){var s=(s=Fr.current)?Qu(s):null;if(!s)throw Error(j(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=uc(n.href),e=Wl(s).hoistableStyles,i=e.get(n),i||(i={type:"style",instance:null,count:0,state:null},e.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=uc(n.href);var a=Wl(s).hoistableStyles,r=a.get(t);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(t,r),(a=s.querySelector(fh(t)))?a._p||(r.instance=a,r.state.loading=5):(a=Os.get(t),a||(a={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Os.set(t,a)),U2(s,t,a,r.state))),e&&i===null)throw Error(j(528,""));return r}if(e&&i!==null)throw Error(j(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(n=xc(n),e=Wl(s).hoistableScripts,i=e.get(n),i||(i={type:"script",instance:null,count:0,state:null},e.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(j(444,t))}}function uc(t){return'href="'+Cs(t)+'"'}function fh(t){return'link[rel="stylesheet"]['+t+"]"}function f1(t){return qt({},t,{"data-precedence":t.precedence,precedence:null})}function U2(t,e,n,i){if(e=t.querySelector('link[rel="preload"][as="style"]['+e+"]")){if(e[hd]!==!0){i.loading=1;return}}else e=t.createElement("link"),e[hd]=!0,e.onload=e.onerror=HM.bind(null,e),ci(e,"link",n),Jn(e),t.head.appendChild(e);i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2})}function xc(t){return'[src="'+Cs(t)+'"]'}function dh(t){return"script[async]"+t}function fM(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+Cs(n.href)+'"]');if(i)return e.instance=i,Jn(i),i;var s=qt({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),Jn(i),ci(i,"style",s),nd(i,n.precedence,t),e.instance=i;case"stylesheet":s=uc(n.href);var a=t.querySelector(fh(s));if(a)return e.state.loading|=4,e.instance=a,Jn(a),a;i=f1(n),(s=Os.get(s))&&mv(i,s),a=(t.ownerDocument||t).createElement("link"),Jn(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),ci(a,"link",i),e.state.loading|=4,nd(a,n.precedence,t),e.instance=a;case"script":return a=xc(n.src),(s=t.querySelector(dh(a)))?(e.instance=s,Jn(s),s):(i=n,(s=Os.get(a))&&(i=qt({},n),gv(i,s)),t=t.ownerDocument||t,s=t.createElement("script"),Jn(s),ci(s,"link",i),t.head.appendChild(s),e.instance=s);case"void":return null;default:throw Error(j(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(i=e.instance,e.state.loading|=4,nd(i,n.precedence,t));return e.instance}function nd(t,e,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===e)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(t,a.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function mv(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function gv(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var id=null;function dM(t,e,n){if(id===null){var i=new Map,s=id=new Map;s.set(n,i)}else s=id,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(t))return i;for(i.set(t,null),n=n.getElementsByTagName(t),s=0;s<n.length;s++){var a=n[s];if(!(a[rh]||a[ai]||t==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(e)||"";r=t+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function v_(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function I2(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function pM(t,e){return t==="img"&&e.src!=null&&e.src!==""&&e.onLoad==null&&e.loading!=="lazy"}function d1(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function p1(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function mM(t,e){typeof e.decode=="function"&&(t.imgCount++,e.complete||(t.imgBytes+=p1(e),t.suspenseyImages.push(e)),t=F2.bind(t),e.decode().then(t,t))}function P2(t,e,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=uc(i.href),a=e.querySelector(fh(s));if(a){e=a._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=$u.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=a,Jn(a);return}a=e.ownerDocument||e,i=f1(i),(s=Os.get(s))&&mv(i,s),a=a.createElement("link"),Jn(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),ci(a,"link",i),n.instance=a}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(t.count++,n=$u.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var sd=0;function B2(t,e){return t.stylesheets&&t.count===0&&ad(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var i=setTimeout(function(){if(t.stylesheets&&ad(t,t.stylesheets),t.unsuspend){var a=t.unsuspend;t.unsuspend=null,a()}},6e4+e);0<t.imgBytes&&sd===0&&(sd=62500*t2());var s=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ad(t,t.stylesheets),t.unsuspend)){var a=t.unsuspend;t.unsuspend=null,a()}},(t.imgBytes>sd?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function m1(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)ad(t,t.stylesheets);else if(t.unsuspend){var e=t.unsuspend;t.unsuspend=null,e()}}}function $u(){this.count--,m1(this)}function F2(){this.imgCount--,m1(this)}var Ud=null;function ad(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ud=new Map,e.forEach(z2,t),Ud=null,$u.call(t))}function z2(t,e){if(!(e.state.loading&4)){var n=Ud.get(t);if(n)var i=n.get(null);else{n=new Map,Ud.set(t,n);for(var s=t.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=e.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=$u.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(s,t.firstChild)),e.state.loading|=4}}var hc={$$typeof:ma,Provider:null,Consumer:null,_currentValue:Po,_currentValue2:Po,_threadCount:0};function H2(t,e,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Bg(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bg(0),this.hiddenUpdates=Bg(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function g1(t,e,n,i,s,a,r,o,l,c,h,f){return t=new H2(t,e,n,r,l,c,h,f,o),e=1,a===!0&&(e|=24),a=Pi(3,null,null,e),t.current=a,a.stateNode=t,e=P_(),e.refCount++,t.pooledCache=e,e.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:e},z_(a),t}function _1(t){return t?(t=Gl,t):Gl}function v1(t,e,n,i,s,a){s=_1(s),i.context===null?i.context=s:i.pendingContext=s,i=Hr(e),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=Gr(t,i,e),n!==null&&(Bi(n,t,e),Nu(n,t,e))}function gM(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function _v(t,e){gM(t,e),(t=t.alternate)&&gM(t,e)}function y1(t){if(t.tag===13||t.tag===31){var e=Qo(t,67108864);e!==null&&Bi(e,t,67108864),_v(t,67108864)}}function _M(t){if(t.tag===13||t.tag===31){var e=fs();e=E_(e);var n=Qo(t,e);n!==null&&Bi(n,t,e),_v(t,e)}}var fc=!0;function G2(t,e,n,i){var s=He.T;He.T=null;var a=Tt.p;try{Tt.p=2,vv(t,e,n,i)}finally{Tt.p=a,He.T=s}}function V2(t,e,n,i){var s=He.T;He.T=null;var a=Tt.p;try{Tt.p=8,vv(t,e,n,i)}finally{Tt.p=a,He.T=s}}function vv(t,e,n,i){if(fc){var s=y_(i);if(s===null)r0(t,e,i,Id,n),vM(t,i);else if(X2(s,t,e,n,i))i.stopPropagation();else if(vM(t,i),e&4&&-1<k2.indexOf(t)){for(;s!==null;){var a=mc(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=No(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-hs(r);o.entanglements[1]|=l,r&=~l}Ma(a),(Et&6)===0&&(Cd=cs()+500,hh(0,!1))}}break;case 31:case 13:o=Qo(a,2),o!==null&&Bi(o,a,2),Jd(),_v(a,2)}if(a=y_(i),a===null&&r0(t,e,i,Id,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else r0(t,e,i,null,n)}}function y_(t){return t=w_(t),yv(t)}var Id=null;function yv(t){if(Id=null,t=Uo(t),t!==null){var e=nh(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=EM(e),t!==null)return t;t=null}else if(n===31){if(t=TM(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Id=t,null}function x1(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(iC()){case NM:return 2;case LM:return 8;case ud:case sC:return 32;case OM:return 268435456;default:return 32}default:return 32}}var x_=!1,Wr=null,qr=null,Yr=null,eh=new Map,th=new Map,Nr=[],k2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function vM(t,e){switch(t){case"focusin":case"focusout":Wr=null;break;case"dragenter":case"dragleave":qr=null;break;case"mouseover":case"mouseout":Yr=null;break;case"pointerover":case"pointerout":eh.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":th.delete(e.pointerId)}}function xu(t,e,n,i,s,a){return t===null||t.nativeEvent!==a?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},e!==null&&(e=mc(e),e!==null&&y1(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function X2(t,e,n,i,s){switch(e){case"focusin":return Wr=xu(Wr,t,e,n,i,s),!0;case"dragenter":return qr=xu(qr,t,e,n,i,s),!0;case"mouseover":return Yr=xu(Yr,t,e,n,i,s),!0;case"pointerover":var a=s.pointerId;return eh.set(a,xu(eh.get(a)||null,t,e,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,th.set(a,xu(th.get(a)||null,t,e,n,i,s)),!0}return!1}function b1(t){var e=Uo(t.target);if(e!==null){var n=nh(e);if(n!==null){if(e=n.tag,e===13){if(e=EM(n),e!==null){t.blockedOn=e,Xb(t.priority,function(){_M(n)});return}}else if(e===31){if(e=TM(n),e!==null){t.blockedOn=e,Xb(t.priority,function(){_M(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function rd(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=y_(t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);M0=i,n.target.dispatchEvent(i),M0=null}else return e=mc(n),e!==null&&y1(e),t.blockedOn=n,!1;e.shift()}return!0}function yM(t,e,n){rd(t)&&n.delete(e)}function W2(){x_=!1,Wr!==null&&rd(Wr)&&(Wr=null),qr!==null&&rd(qr)&&(qr=null),Yr!==null&&rd(Yr)&&(Yr=null),eh.forEach(yM),th.forEach(yM)}function Hf(t,e){t.blockedOn===e&&(t.blockedOn=null,x_||(x_=!0,Hn.unstable_scheduleCallback(Hn.unstable_NormalPriority,W2)))}var Gf=null;function xM(t){Gf!==t&&(Gf=t,Hn.unstable_scheduleCallback(Hn.unstable_NormalPriority,function(){Gf===t&&(Gf=null);for(var e=0;e<t.length;e+=3){var n=t[e],i=t[e+1],s=t[e+2];if(typeof i!="function"){if(yv(i||n)===null)continue;break}var a=mc(n);a!==null&&(t.splice(e,3),e-=3,z0(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function dc(t){function e(l){return Hf(l,t)}Wr!==null&&Hf(Wr,t),qr!==null&&Hf(qr,t),Yr!==null&&Hf(Yr,t),eh.forEach(e),th.forEach(e);for(var n=0;n<Nr.length;n++){var i=Nr[n];i.blockedOn===t&&(i.blockedOn=null)}for(;0<Nr.length&&(n=Nr[0],n.blockedOn===null);)b1(n),n.blockedOn===null&&Nr.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[zi]||null;if(typeof a=="function")r||xM(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[zi]||null)o=r.formAction;else if(yv(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),xM(n)}}}function S1(){function t(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function e(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),s!==null&&(s(),s=null)}}}function xv(t){this._internalRoot=t}ep.prototype.render=xv.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));var n=e.current,i=fs();v1(n,i,t,e,null,null)};ep.prototype.unmount=xv.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;v1(t.current,2,null,t,null,null),Jd(),e[pc]=null}};function ep(t){this._internalRoot=t}ep.prototype.unstable_scheduleHydration=function(t){if(t){var e=zM();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Nr.length&&e!==0&&e<Nr[n].priority;n++);Nr.splice(n,0,t),n===0&&b1(t)}};var bM=SM.version;if(bM!=="19.3.0")throw Error(j(527,bM,"19.3.0"));Tt.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=qR(e),t=t!==null?AM(t):null,t=t===null?null:t.stateNode,t};var q2={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:He,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(bu=__REACT_DEVTOOLS_GLOBAL_HOOK__,!bu.isDisabled&&bu.supportsFiber))try{ih=bu.inject(q2),us=bu}catch{}var bu;tp.createRoot=function(t,e){if(!MM(t))throw Error(j(299));var n=!1,i="",s=nT,a=iT,r=sT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(s=e.onUncaughtError),e.onCaughtError!==void 0&&(a=e.onCaughtError),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=g1(t,1,!1,null,null,n,i,null,s,a,r,S1),t[pc]=e.current,hv(t),new xv(e)};tp.hydrateRoot=function(t,e,n){if(!MM(t))throw Error(j(299));var i=!1,s="",a=nT,r=iT,o=sT,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),e=g1(t,1,!0,e,n??null,i,s,l,a,r,o,S1),e.context=_1(null),n=e.current,i=fs(),i=E_(i),s=Hr(i),s.callback=null,Gr(n,s,i),n=i,e.current.lanes=n,ah(e,n),Ma(e),t[pc]=e.current,hv(t),new ep(e)};tp.version="19.3.0"});var A1=la((CP,T1)=>{"use strict";function E1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E1)}catch(t){console.error(t)}}E1(),T1.exports=M1()});var Fw=la(hg=>{"use strict";var uP=Symbol.for("react.transitional.element"),hP=Symbol.for("react.fragment");function Bw(t,e,n){var i=null;if(n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),"key"in e){n={};for(var s in e)s!=="key"&&(n[s]=e[s])}else n=e;return e=n.ref,{$$typeof:uP,type:t,key:i,ref:e!==void 0?e:null,props:n}}hg.Fragment=hP;hg.jsx=Bw;hg.jsxs=Bw});var df=la((Iz,zw)=>{"use strict";zw.exports=Fw()});var Zi=Ro(hu(),1),Kw=Ro(A1(),1);var ae=Ro(hu(),1);var _o={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},vo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},fA=0,ly=1,dA=2;var Qh=1,pA=2,Zc=3,js=0,Ci=1,On=2,Ca=0,rl=1,cy=2,uy=3,hy=4,mA=5;var oo=100,gA=101,_A=102,vA=103,yA=104,xA=200,bA=201,SA=202,MA=203,Lp=204,Op=205,EA=206,TA=207,AA=208,wA=209,RA=210,CA=211,DA=212,NA=213,LA=214,Up=0,Ip=1,Pp=2,ol=3,Bp=4,Fp=5,zp=6,Hp=7,fy=0,OA=1,UA=2,$s=0,dy=1,py=2,my=3,$h=4,gy=5,_y=6,vy=7,Zv="attached",IA="detached",yy=300,yo=301,ml=302,cm=303,um=304,ef=306,lo=1e3,Gi=1001,Bc=1002,bn=1003,hm=1004;var gl=1005;var dn=1006,Kc=1007;var xs=1008;var qi=1009,xy=1010,by=1011,jc=1012,fm=1013,ea=1014,bs=1015,Da=1016,dm=1017,pm=1018,Jc=1020,Sy=35902,My=35899,Ey=1021,Ty=1022,Ss=1023,Aa=1026,xo=1027,mm=1028,gm=1029,bo=1030,_m=1031;var vm=1033,tf=33776,nf=33777,sf=33778,af=33779,ym=35840,xm=35841,bm=35842,Sm=35843,Mm=36196,Em=37492,Tm=37496,Am=37488,wm=37489,rf=37490,Rm=37491,Cm=37808,Dm=37809,Nm=37810,Lm=37811,Om=37812,Um=37813,Im=37814,Pm=37815,Bm=37816,Fm=37817,zm=37818,Hm=37819,Gm=37820,Vm=37821,km=36492,Xm=36494,Wm=36495,qm=36283,Ym=36284,of=36285,Zm=36286;var ll=2300,cl=2301,Np=2302,Kv=2303,jv=2400,Jv=2401,Qv=2402,PA=2500;var Ay=0,lf=1,Qc=2,BA=3200;var Km=0,FA=1,ta="",fn="srgb",hi="srgb-linear",Mh="linear",Dt="srgb";var sl=7680;var $v=519,zA=512,HA=513,GA=514,jm=515,VA=516,kA=517,Jm=518,XA=519,Gp=35044;var wy="300 es",Zs=2e3,Fc=2001;function Y2(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Z2(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function zc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function WA(){let t=zc("canvas");return t.style.display="block",t}var w1={},Hc=null;function Eh(...t){let e="THREE."+t.shift();Hc?Hc("log",e,...t):console.log(e,...t)}function qA(t){let e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){let n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ee(...t){t=qA(t);let e="THREE."+t.shift();if(Hc)Hc("warn",e,...t);else{let n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Fe(...t){t=qA(t);let e="THREE."+t.shift();if(Hc)Hc("error",e,...t);else{let n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function al(...t){let e=t.join(" ");e in w1||(w1[e]=!0,Ee(...t))}function YA(t,e,n){return new Promise(function(i,s){function a(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}var ZA={[Up]:Ip,[Pp]:zp,[Bp]:Hp,[ol]:Fp,[Ip]:Up,[zp]:Pp,[Hp]:Bp,[Fp]:ol},Js=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(e){let n=this._listeners;if(n===void 0)return;let i=n[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,e);e.target=null}}},gi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],R1=1234567,Ic=Math.PI/180,ul=180/Math.PI;function Ks(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(gi[t&255]+gi[t>>8&255]+gi[t>>16&255]+gi[t>>24&255]+"-"+gi[e&255]+gi[e>>8&255]+"-"+gi[e>>16&15|64]+gi[e>>24&255]+"-"+gi[n&63|128]+gi[n>>8&255]+"-"+gi[n>>16&255]+gi[n>>24&255]+gi[i&255]+gi[i>>8&255]+gi[i>>16&255]+gi[i>>24&255]).toLowerCase()}function it(t,e,n){return Math.max(e,Math.min(n,t))}function Ry(t,e){return(t%e+e)%e}function K2(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function j2(t,e,n){return t!==e?(n-t)/(e-t):0}function Sh(t,e,n){return(1-n)*t+n*e}function J2(t,e,n,i){return Sh(t,e,1-Math.exp(-n*i))}function Q2(t,e=1){return e-Math.abs(Ry(t,e*2)-e)}function $2(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function eD(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function tD(t,e){return t+Math.floor(Math.random()*(e-t+1))}function nD(t,e){return t+Math.random()*(e-t)}function iD(t){return t*(.5-Math.random())}function sD(t){t!==void 0&&(R1=t);let e=R1+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function aD(t){return t*Ic}function rD(t){return t*ul}function oD(t){return(t&t-1)===0&&t!==0}function lD(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function cD(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function uD(t,e,n,i,s){let a=Math.cos,r=Math.sin,o=a(n/2),l=r(n/2),c=a((e+i)/2),h=r((e+i)/2),f=a((e-i)/2),u=r((e-i)/2),d=a((i-e)/2),g=r((i-e)/2);switch(s){case"XYX":t.set(o*h,l*f,l*u,o*c);break;case"YZY":t.set(l*u,o*h,l*f,o*c);break;case"ZXZ":t.set(l*f,l*u,o*h,o*c);break;case"XZX":t.set(o*h,l*g,l*d,o*c);break;case"YXY":t.set(l*d,o*h,l*g,o*c);break;case"ZYZ":t.set(l*g,l*d,o*h,o*c);break;default:Ee("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ys(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ft(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var kt={DEG2RAD:Ic,RAD2DEG:ul,generateUUID:Ks,clamp:it,euclideanModulo:Ry,mapLinear:K2,inverseLerp:j2,lerp:Sh,damp:J2,pingpong:Q2,smoothstep:$2,smootherstep:eD,randInt:tD,randFloat:nD,randFloatSpread:iD,seededRandom:sD,degToRad:aD,radToDeg:rD,isPowerOfTwo:oD,ceilPowerOfTwo:lD,floorPowerOfTwo:cD,setQuaternionFromProperEuler:uD,normalize:Ft,denormalize:Ys},Oy=class Oy{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=it(this.x,e.x,n.x),this.y=it(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=it(this.x,e,n),this.y=it(this.y,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-e.x,r=this.y-e.y;return this.x=a*i-r*s+e.x,this.y=a*s+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Oy.prototype.isVector2=!0;var Ce=Oy,vi=class{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3],u=a[r+0],d=a[r+1],g=a[r+2],b=a[r+3];if(f!==b||l!==u||c!==d||h!==g){let m=l*u+c*d+h*g+f*b;m<0&&(u=-u,d=-d,g=-g,b=-b,m=-m);let p=1-o;if(m<.9995){let _=Math.acos(m),x=Math.sin(_);p=Math.sin(p*_)/x,o=Math.sin(o*_)/x,l=l*p+u*o,c=c*p+d*o,h=h*p+g*o,f=f*p+b*o}else{l=l*p+u*o,c=c*p+d*o,h=h*p+g*o,f=f*p+b*o;let _=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=_,c*=_,h*=_,f*=_}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=a[r],u=a[r+1],d=a[r+2],g=a[r+3];return e[n]=o*g+h*f+l*d-c*u,e[n+1]=l*g+h*u+c*f-o*d,e[n+2]=c*g+h*d+o*u-l*f,e[n+3]=h*g-o*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){let i=e._x,s=e._y,a=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),f=o(a/2),u=l(i/2),d=l(s/2),g=l(a/2);switch(r){case"XYZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"YZX":this._x=u*h*f+c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f-u*d*g;break;case"XZY":this._x=u*h*f-c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f+u*d*g;break;default:Ee("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],h=n[6],f=n[10],u=i+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(a-c)*d,this._z=(r-s)*d}else if(i>o&&i>f){let d=2*Math.sqrt(1+i-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(a+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-i-f);this._w=(a-c)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-i-o);this._w=(r-s)/d,this._x=(a+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,s=e._y,a=e._z,r=e._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+r*o+s*c-a*l,this._y=s*h+r*l+a*o-i*c,this._z=a*h+r*c+i*l-s*o,this._w=r*h-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,s=e._y,a=e._z,r=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,a=-a,r=-r,o=-o);let l=1-n;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){let e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(n),a*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Uy=class Uy{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(C1.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(C1.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,s=this.z,a=e.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(e){let n=this.x,i=this.y,s=this.z,a=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*s-o*i),h=2*(o*n-a*s),f=2*(a*i-r*n);return this.x=n+l*c+r*f-o*h,this.y=i+l*h+o*c-a*f,this.z=s+l*f+a*h-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=it(this.x,e.x,n.x),this.y=it(this.y,e.y,n.y),this.z=it(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=it(this.x,e,n),this.y=it(this.y,e,n),this.z=it(this.z,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,s=e.y,a=e.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return bv.copy(this).projectOnVector(e),this.sub(bv)}reflect(e){return this.sub(bv.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Uy.prototype.isVector3=!0;var D=Uy,bv=new D,C1=new vi,Iy=class Iy{constructor(e,n,i,s,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,a,r,o,l,c)}set(e,n,i,s,a,r,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=n,h[4]=a,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],u=i[2],d=i[5],g=i[8],b=s[0],m=s[3],p=s[6],_=s[1],x=s[4],v=s[7],M=s[2],E=s[5],w=s[8];return a[0]=r*b+o*_+l*M,a[3]=r*m+o*x+l*E,a[6]=r*p+o*v+l*w,a[1]=c*b+h*_+f*M,a[4]=c*m+h*x+f*E,a[7]=c*p+h*v+f*w,a[2]=u*b+d*_+g*M,a[5]=u*m+d*x+g*E,a[8]=u*p+d*v+g*w,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return n*r*h-n*o*c-i*a*h+i*o*l+s*a*c-s*r*l}invert(){let e=this.elements,n=e[0],i=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*r-o*c,u=o*l-h*a,d=c*a-r*l,g=n*f+i*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/g;return e[0]=f*b,e[1]=(s*c-h*i)*b,e[2]=(o*i-s*r)*b,e[3]=u*b,e[4]=(h*n-s*l)*b,e[5]=(s*a-o*n)*b,e[6]=d*b,e[7]=(i*l-c*n)*b,e[8]=(r*n-i*a)*b,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+e,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(e,n){return al("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Sv.makeScale(e,n)),this}rotate(e){return al("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Sv.makeRotation(-e)),this}translate(e,n){return al("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Sv.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Iy.prototype.isMatrix3=!0;var Ye=Iy,Sv=new Ye,D1=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),N1=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hD(){let t={enabled:!0,workingColorSpace:hi,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===Dt&&(s.r=or(s.r),s.g=or(s.g),s.b=or(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Dt&&(s.r=Pc(s.r),s.g=Pc(s.g),s.b=Pc(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ta?Mh:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return al("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return al("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,a)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[hi]:{primaries:e,whitePoint:i,transfer:Mh,toXYZ:D1,fromXYZ:N1,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:e,whitePoint:i,transfer:Dt,toXYZ:D1,fromXYZ:N1,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),t}var et=hD();function or(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Pc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var bc,Vp=class{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{bc===void 0&&(bc=zc("canvas")),bc.width=e.width,bc.height=e.height;let s=bc.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=bc}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let n=zc("canvas");n.width=e.width,n.height=e.height;let i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=or(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){let n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(or(n[i]/255)*255):n[i]=or(n[i]);return{data:n,width:e.width,height:e.height}}else return Ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},fD=0,Gc=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fD++}),this.uuid=Ks(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(Mv(s[r].image)):a.push(Mv(s[r]))}else a=Mv(s);i.url=a}return n||(e.images[this.uuid]=i),i}};function Mv(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Vp.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ee("Texture: Unable to serialize Texture."),{})}var dD=0,Ev=new D,ei=class t extends Js{constructor(e=t.DEFAULT_IMAGE,n=t.DEFAULT_MAPPING,i=Gi,s=Gi,a=dn,r=xs,o=Ss,l=qi,c=t.DEFAULT_ANISOTROPY,h=ta){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dD++}),this.uuid=Ks(),this.name="",this.source=new Gc(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ev).x}get height(){return this.source.getSize(Ev).y}get depth(){return this.source.getSize(Ev).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let n in e){let i=e[n];if(i===void 0){Ee(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Ee(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lo:e.x=e.x-Math.floor(e.x);break;case Gi:e.x=e.x<0?0:1;break;case Bc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lo:e.y=e.y-Math.floor(e.y);break;case Gi:e.y=e.y<0?0:1;break;case Bc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ei.DEFAULT_IMAGE=null;ei.DEFAULT_MAPPING=yy;ei.DEFAULT_ANISOTROPY=1;var Py=class Py{constructor(e=0,n=0,i=0,s=1){this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,s=this.z,a=this.w,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,a,l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],g=l[9],b=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+b)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let x=(c+1)/2,v=(d+1)/2,M=(p+1)/2,E=(h+u)/4,w=(f+b)/4,y=(g+m)/4;return x>v&&x>M?x<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(x),s=E/i,a=w/i):v>M?v<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(v),i=E/s,a=y/s):M<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(M),i=w/a,s=y/a),this.set(i,s,a,n),this}let _=Math.sqrt((m-g)*(m-g)+(f-b)*(f-b)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(f-b)/_,this.z=(u-h)/_,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=it(this.x,e.x,n.x),this.y=it(this.y,e.y,n.y),this.z=it(this.z,e.z,n.z),this.w=it(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=it(this.x,e,n),this.y=it(this.y,e,n),this.z=it(this.z,e,n),this.w=it(this.w,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Py.prototype.isVector4=!0;var zt=Py,kp=class extends Js{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new zt(0,0,e,n),this.scissorTest=!1,this.viewport=new zt(0,0,e,n),this.textures=[];let s={width:e,height:n,depth:i.depth},a=new ei(s),r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let n={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},e.textures[n].image);this.textures[n].source=new Gc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},_s=class extends kp{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}},Th=class extends ei{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Xp=class extends ei{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var lm=class lm{constructor(e,n,i,s,a,r,o,l,c,h,f,u,d,g,b,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,a,r,o,l,c,h,f,u,d,g,b,m)}set(e,n,i,s,a,r,o,l,c,h,f,u,d,g,b,m){let p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=s,p[1]=a,p[5]=r,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=g,p[11]=b,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lm().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let n=this.elements,i=e.elements,s=1/Sc.setFromMatrixColumn(e,0).length(),a=1/Sc.setFromMatrixColumn(e,1).length(),r=1/Sc.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,i=e.x,s=e.y,a=e.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){let u=r*h,d=r*f,g=o*h,b=o*f;n[0]=l*h,n[4]=-l*f,n[8]=c,n[1]=d+g*c,n[5]=u-b*c,n[9]=-o*l,n[2]=b-u*c,n[6]=g+d*c,n[10]=r*l}else if(e.order==="YXZ"){let u=l*h,d=l*f,g=c*h,b=c*f;n[0]=u+b*o,n[4]=g*o-d,n[8]=r*c,n[1]=r*f,n[5]=r*h,n[9]=-o,n[2]=d*o-g,n[6]=b+u*o,n[10]=r*l}else if(e.order==="ZXY"){let u=l*h,d=l*f,g=c*h,b=c*f;n[0]=u-b*o,n[4]=-r*f,n[8]=g+d*o,n[1]=d+g*o,n[5]=r*h,n[9]=b-u*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(e.order==="ZYX"){let u=r*h,d=r*f,g=o*h,b=o*f;n[0]=l*h,n[4]=g*c-d,n[8]=u*c+b,n[1]=l*f,n[5]=b*c+u,n[9]=d*c-g,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(e.order==="YZX"){let u=r*l,d=r*c,g=o*l,b=o*c;n[0]=l*h,n[4]=b-u*f,n[8]=g*f+d,n[1]=f,n[5]=r*h,n[9]=-o*h,n[2]=-c*h,n[6]=d*f+g,n[10]=u-b*f}else if(e.order==="XZY"){let u=r*l,d=r*c,g=o*l,b=o*c;n[0]=l*h,n[4]=-f,n[8]=c*h,n[1]=u*f+b,n[5]=r*h,n[9]=d*f-g,n[2]=g*f-d,n[6]=o*h,n[10]=b*f+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pD,e,mD)}lookAt(e,n,i){let s=this.elements;return ms.subVectors(e,n),ms.lengthSq()===0&&(ms.z=1),ms.normalize(),to.crossVectors(i,ms),to.lengthSq()===0&&(Math.abs(i.z)===1?ms.x+=1e-4:ms.z+=1e-4,ms.normalize(),to.crossVectors(i,ms)),to.normalize(),np.crossVectors(ms,to),s[0]=to.x,s[4]=np.x,s[8]=ms.x,s[1]=to.y,s[5]=np.y,s[9]=ms.y,s[2]=to.z,s[6]=np.z,s[10]=ms.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],u=i[9],d=i[13],g=i[2],b=i[6],m=i[10],p=i[14],_=i[3],x=i[7],v=i[11],M=i[15],E=s[0],w=s[4],y=s[8],A=s[12],C=s[1],N=s[5],U=s[9],X=s[13],Y=s[2],F=s[6],V=s[10],k=s[14],$=s[3],te=s[7],fe=s[11],ge=s[15];return a[0]=r*E+o*C+l*Y+c*$,a[4]=r*w+o*N+l*F+c*te,a[8]=r*y+o*U+l*V+c*fe,a[12]=r*A+o*X+l*k+c*ge,a[1]=h*E+f*C+u*Y+d*$,a[5]=h*w+f*N+u*F+d*te,a[9]=h*y+f*U+u*V+d*fe,a[13]=h*A+f*X+u*k+d*ge,a[2]=g*E+b*C+m*Y+p*$,a[6]=g*w+b*N+m*F+p*te,a[10]=g*y+b*U+m*V+p*fe,a[14]=g*A+b*X+m*k+p*ge,a[3]=_*E+x*C+v*Y+M*$,a[7]=_*w+x*N+v*F+M*te,a[11]=_*y+x*U+v*V+M*fe,a[15]=_*A+x*X+v*k+M*ge,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],s=e[8],a=e[12],r=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],g=e[3],b=e[7],m=e[11],p=e[15],_=l*d-c*u,x=o*d-c*f,v=o*u-l*f,M=r*d-c*h,E=r*u-l*h,w=r*f-o*h;return n*(b*_-m*x+p*v)-i*(g*_-m*M+p*E)+s*(g*x-b*M+p*w)-a*(g*v-b*E+m*w)}determinantAffine(){let e=this.elements,n=e[0],i=e[4],s=e[8],a=e[1],r=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return n*(r*h-o*c)-i*(a*h-o*l)+s*(a*c-r*l)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],g=e[12],b=e[13],m=e[14],p=e[15],_=n*o-i*r,x=n*l-s*r,v=n*c-a*r,M=i*l-s*o,E=i*c-a*o,w=s*c-a*l,y=h*b-f*g,A=h*m-u*g,C=h*p-d*g,N=f*m-u*b,U=f*p-d*b,X=u*p-d*m,Y=_*X-x*U+v*N+M*C-E*A+w*y;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/Y;return e[0]=(o*X-l*U+c*N)*F,e[1]=(s*U-i*X-a*N)*F,e[2]=(b*w-m*E+p*M)*F,e[3]=(u*E-f*w-d*M)*F,e[4]=(l*C-r*X-c*A)*F,e[5]=(n*X-s*C+a*A)*F,e[6]=(m*v-g*w-p*x)*F,e[7]=(h*w-u*v+d*x)*F,e[8]=(r*U-o*C+c*y)*F,e[9]=(i*C-n*U-a*y)*F,e[10]=(g*E-b*v+p*_)*F,e[11]=(f*v-h*E-d*_)*F,e[12]=(o*A-r*N-l*y)*F,e[13]=(n*N-i*A+s*y)*F,e[14]=(b*x-g*M-m*_)*F,e[15]=(h*M-f*x+u*_)*F,this}scale(e){let n=this.elements,i=e.x,s=e.y,a=e.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=e.x,o=e.y,l=e.z,c=a*r,h=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*r,0,c*l-s*o,h*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,a,r){return this.set(1,i,a,0,e,1,r,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,h=r+r,f=o+o,u=a*c,d=a*h,g=a*f,b=r*h,m=r*f,p=o*f,_=l*c,x=l*h,v=l*f,M=i.x,E=i.y,w=i.z;return s[0]=(1-(b+p))*M,s[1]=(d+v)*M,s[2]=(g-x)*M,s[3]=0,s[4]=(d-v)*E,s[5]=(1-(u+p))*E,s[6]=(m+_)*E,s[7]=0,s[8]=(g+x)*w,s[9]=(m-_)*w,s[10]=(1-(u+b))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let a=this.determinantAffine();if(a===0)return i.set(1,1,1),n.identity(),this;let r=Sc.set(s[0],s[1],s[2]).length(),o=Sc.set(s[4],s[5],s[6]).length(),l=Sc.set(s[8],s[9],s[10]).length();a<0&&(r=-r),Xs.copy(this);let c=1/r,h=1/o,f=1/l;return Xs.elements[0]*=c,Xs.elements[1]*=c,Xs.elements[2]*=c,Xs.elements[4]*=h,Xs.elements[5]*=h,Xs.elements[6]*=h,Xs.elements[8]*=f,Xs.elements[9]*=f,Xs.elements[10]*=f,n.setFromRotationMatrix(Xs),i.x=r,i.y=o,i.z=l,this}makePerspective(e,n,i,s,a,r,o=Zs,l=!1){let c=this.elements,h=2*a/(n-e),f=2*a/(i-s),u=(n+e)/(n-e),d=(i+s)/(i-s),g,b;if(l)g=a/(r-a),b=r*a/(r-a);else if(o===Zs)g=-(r+a)/(r-a),b=-2*r*a/(r-a);else if(o===Fc)g=-r/(r-a),b=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,s,a,r,o=Zs,l=!1){let c=this.elements,h=2/(n-e),f=2/(i-s),u=-(n+e)/(n-e),d=-(i+s)/(i-s),g,b;if(l)g=1/(r-a),b=r/(r-a);else if(o===Zs)g=-2/(r-a),b=-(r+a)/(r-a);else if(o===Fc)g=-1/(r-a),b=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};lm.prototype.isMatrix4=!0;var qe=lm,Sc=new D,Xs=new qe,pD=new D(0,0,0),mD=new D(1,1,1),to=new D,np=new D,ms=new D,L1=new qe,O1=new vi,lr=class t{constructor(e=0,n=0,i=0,s=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let s=e.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(n){case"XYZ":this._y=Math.asin(it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(it(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-it(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-it(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ee("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return L1.makeRotationFromQuaternion(e),this.setFromRotationMatrix(L1,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return O1.setFromEuler(this),this.setFromQuaternion(O1,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};lr.DEFAULT_ORDER="XYZ";var Vc=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},gD=0,U1=new D,Mc=new vi,er=new qe,ip=new D,ph=new D,_D=new D,vD=new vi,I1=new D(1,0,0),P1=new D(0,1,0),B1=new D(0,0,1),F1={type:"added"},yD={type:"removed"},Ec={type:"childadded",child:null},Tv={type:"childremoved",child:null},pn=class t extends Js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gD++}),this.uuid=Ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new D,n=new lr,i=new vi,s=new D(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qe},normalMatrix:{value:new Ye}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Mc.setFromAxisAngle(e,n),this.quaternion.multiply(Mc),this}rotateOnWorldAxis(e,n){return Mc.setFromAxisAngle(e,n),this.quaternion.premultiply(Mc),this}rotateX(e){return this.rotateOnAxis(I1,e)}rotateY(e){return this.rotateOnAxis(P1,e)}rotateZ(e){return this.rotateOnAxis(B1,e)}translateOnAxis(e,n){return U1.copy(e).applyQuaternion(this.quaternion),this.position.add(U1.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(I1,e)}translateY(e){return this.translateOnAxis(P1,e)}translateZ(e){return this.translateOnAxis(B1,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(er.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ip.copy(e):ip.set(e,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ph.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?er.lookAt(ph,ip,this.up):er.lookAt(ip,ph,this.up),this.quaternion.setFromRotationMatrix(er),s&&(er.extractRotation(s.matrixWorld),Mc.setFromRotationMatrix(er),this.quaternion.premultiply(Mc.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Fe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(F1),Ec.child=e,this.dispatchEvent(Ec),Ec.child=null):Fe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(yD),Tv.child=e,this.dispatchEvent(Tv),Tv.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),er.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),er.multiply(e.parent.matrixWorld)),e.applyMatrix4(er),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(F1),Ec.child=e,this.dispatchEvent(Ec),Ec.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(e,n);if(r!==void 0)return r}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ph,e,_D),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ph,vD,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let n=e.x,i=e.y,s=e.z,a=this.matrix.elements;a[12]+=n-a[0]*n-a[4]*i-a[8]*s,a[13]+=i-a[1]*n-a[5]*i-a[9]*s,a[14]+=s-a[2]*n-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,i)}}toJSON(e){let n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];a(e.shapes,f)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));s.material=o}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(e.animations,l))}}if(n){let o=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),f=r(e.shapes),u=r(e.skeletons),d=r(e.animations),g=r(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function r(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};pn.DEFAULT_UP=new D(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Nn=class extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}},xD={type:"move"},kc=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let n=this._hand;if(n)for(let i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(let b of e.hand.values()){let m=n.getJointPose(b,i),p=this._getHandJoint(c,b);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=n.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xD)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){let i=new Nn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}},KA={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},no={h:0,s:0,l:0},sp={h:0,s:0,l:0};function Av(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}var Oe=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=et.workingColorSpace){if(e=Ry(e,1),n=it(n,0,1),i=it(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=Av(r,a,e+1/3),this.g=Av(r,a,e),this.b=Av(r,a,e-1/3)}return et.colorSpaceToWorking(this,s),this}setStyle(e,n=fn){function i(a){a!==void 0&&parseFloat(a)<1&&Ee("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:Ee("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);Ee("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=fn){let i=KA[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ee("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}copyLinearToSRGB(e){return this.r=Pc(e.r),this.g=Pc(e.g),this.b=Pc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return et.workingToColorSpace(_i.copy(this),e),Math.round(it(_i.r*255,0,255))*65536+Math.round(it(_i.g*255,0,255))*256+Math.round(it(_i.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.workingToColorSpace(_i.copy(this),n);let i=_i.r,s=_i.g,a=_i.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,h=(o+r)/2;if(o===r)l=0,c=0;else{let f=r-o;switch(c=h<=.5?f/(r+o):f/(2-r-o),r){case i:l=(s-a)/f+(s<a?6:0);break;case s:l=(a-i)/f+2;break;case a:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=et.workingColorSpace){return et.workingToColorSpace(_i.copy(this),n),e.r=_i.r,e.g=_i.g,e.b=_i.b,e}getStyle(e=fn){et.workingToColorSpace(_i.copy(this),e);let n=_i.r,i=_i.g,s=_i.b;return e!==fn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(no),this.setHSL(no.h+e,no.s+n,no.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(no),e.getHSL(sp);let i=Sh(no.h,sp.h,n),s=Sh(no.s,sp.s,n),a=Sh(no.l,sp.l,n);return this.setHSL(i,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,i=this.g,s=this.b,a=e.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_i=new Oe;Oe.NAMES=KA;var Ah=class extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new lr,this.environmentIntensity=1,this.environmentRotation=new lr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}},Ws=new D,tr=new D,wv=new D,nr=new D,Tc=new D,Ac=new D,z1=new D,Rv=new D,Cv=new D,Dv=new D,Nv=new zt,Lv=new zt,Ov=new zt,rr=class t{constructor(e=new D,n=new D,i=new D){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),Ws.subVectors(e,n),s.cross(Ws);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,n,i,s,a){Ws.subVectors(s,n),tr.subVectors(i,n),wv.subVectors(e,n);let r=Ws.dot(Ws),o=Ws.dot(tr),l=Ws.dot(wv),c=tr.dot(tr),h=tr.dot(wv),f=r*c-o*o;if(f===0)return a.set(0,0,0),null;let u=1/f,d=(c*l-o*h)*u,g=(r*h-o*l)*u;return a.set(1-d-g,g,d)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,nr)===null?!1:nr.x>=0&&nr.y>=0&&nr.x+nr.y<=1}static getInterpolation(e,n,i,s,a,r,o,l){return this.getBarycoord(e,n,i,s,nr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,nr.x),l.addScaledVector(r,nr.y),l.addScaledVector(o,nr.z),l)}static getInterpolatedAttribute(e,n,i,s,a,r){return Nv.setScalar(0),Lv.setScalar(0),Ov.setScalar(0),Nv.fromBufferAttribute(e,n),Lv.fromBufferAttribute(e,i),Ov.fromBufferAttribute(e,s),r.setScalar(0),r.addScaledVector(Nv,a.x),r.addScaledVector(Lv,a.y),r.addScaledVector(Ov,a.z),r}static isFrontFacing(e,n,i,s){return Ws.subVectors(i,n),tr.subVectors(e,n),Ws.cross(tr).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ws.subVectors(this.c,this.b),tr.subVectors(this.a,this.b),Ws.cross(tr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return t.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,a){return t.getInterpolation(e,this.a,this.b,this.c,n,i,s,a)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){let i=this.a,s=this.b,a=this.c,r,o;Tc.subVectors(s,i),Ac.subVectors(a,i),Rv.subVectors(e,i);let l=Tc.dot(Rv),c=Ac.dot(Rv);if(l<=0&&c<=0)return n.copy(i);Cv.subVectors(e,s);let h=Tc.dot(Cv),f=Ac.dot(Cv);if(h>=0&&f<=h)return n.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),n.copy(i).addScaledVector(Tc,r);Dv.subVectors(e,a);let d=Tc.dot(Dv),g=Ac.dot(Dv);if(g>=0&&d<=g)return n.copy(a);let b=d*c-l*g;if(b<=0&&c>=0&&g<=0)return o=c/(c-g),n.copy(i).addScaledVector(Ac,o);let m=h*g-d*f;if(m<=0&&f-h>=0&&d-g>=0)return z1.subVectors(a,s),o=(f-h)/(f-h+(d-g)),n.copy(s).addScaledVector(z1,o);let p=1/(m+b+u);return r=b*p,o=u*p,n.copy(i).addScaledVector(Tc,r).addScaledVector(Ac,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},wi=class{constructor(e=new D(1/0,1/0,1/0),n=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(qs.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(qs.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=qs.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,qs):qs.fromBufferAttribute(a,r),qs.applyMatrix4(e.matrixWorld),this.expandByPoint(qs);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ap.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ap.copy(i.boundingBox)),ap.applyMatrix4(e.matrixWorld),this.union(ap)}let s=e.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qs),qs.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mh),rp.subVectors(this.max,mh),wc.subVectors(e.a,mh),Rc.subVectors(e.b,mh),Cc.subVectors(e.c,mh),io.subVectors(Rc,wc),so.subVectors(Cc,Rc),el.subVectors(wc,Cc);let n=[0,-io.z,io.y,0,-so.z,so.y,0,-el.z,el.y,io.z,0,-io.x,so.z,0,-so.x,el.z,0,-el.x,-io.y,io.x,0,-so.y,so.x,0,-el.y,el.x,0];return!Uv(n,wc,Rc,Cc,rp)||(n=[1,0,0,0,1,0,0,0,1],!Uv(n,wc,Rc,Cc,rp))?!1:(op.crossVectors(io,so),n=[op.x,op.y,op.z],Uv(n,wc,Rc,Cc,rp))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qs).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qs).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ir[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ir[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ir[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ir[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ir[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ir[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ir[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ir[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ir),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ir=[new D,new D,new D,new D,new D,new D,new D,new D],qs=new D,ap=new wi,wc=new D,Rc=new D,Cc=new D,io=new D,so=new D,el=new D,mh=new D,rp=new D,op=new D,tl=new D;function Uv(t,e,n,i,s){for(let a=0,r=t.length-3;a<=r;a+=3){tl.fromArray(t,a);let o=s.x*Math.abs(tl.x)+s.y*Math.abs(tl.y)+s.z*Math.abs(tl.z),l=e.dot(tl),c=n.dot(tl),h=i.dot(tl);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Cn=new D,lp=new Ce,bD=0,tn=class extends Js{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bD++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Gp,this.updateRanges=[],this.gpuType=bs,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)lp.fromBufferAttribute(this,n),lp.applyMatrix3(e),this.setXY(n,lp.x,lp.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Cn.fromBufferAttribute(this,n),Cn.applyMatrix3(e),this.setXYZ(n,Cn.x,Cn.y,Cn.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Cn.fromBufferAttribute(this,n),Cn.applyMatrix4(e),this.setXYZ(n,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Cn.fromBufferAttribute(this,n),Cn.applyNormalMatrix(e),this.setXYZ(n,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Cn.fromBufferAttribute(this,n),Cn.transformDirection(e),this.setXYZ(n,Cn.x,Cn.y,Cn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ys(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Ft(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ys(n,this.array)),n}setX(e,n){return this.normalized&&(n=Ft(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ys(n,this.array)),n}setY(e,n){return this.normalized&&(n=Ft(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ys(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Ft(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ys(n,this.array)),n}setW(e,n){return this.normalized&&(n=Ft(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Ft(n,this.array),i=Ft(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=Ft(n,this.array),i=Ft(i,this.array),s=Ft(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,a){return e*=this.itemSize,this.normalized&&(n=Ft(n,this.array),i=Ft(i,this.array),s=Ft(s,this.array),a=Ft(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gp&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var wh=class extends tn{constructor(e,n,i){super(new Uint16Array(e),n,i)}};var Rh=class extends tn{constructor(e,n,i){super(new Uint32Array(e),n,i)}};var vt=class extends tn{constructor(e,n,i){super(new Float32Array(e),n,i)}},SD=new wi,gh=new D,Iv=new D,Vi=class{constructor(e=new D,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let i=this.center;n!==void 0?i.copy(n):SD.setFromPoints(e).getCenter(i);let s=0;for(let a=0,r=e.length;a<r;a++)s=Math.max(s,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gh.subVectors(e,this.center);let n=gh.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(gh,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Iv.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gh.copy(e.center).add(Iv)),this.expandByPoint(gh.copy(e.center).sub(Iv))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},MD=0,Us=new qe,Pv=new pn,Dc=new D,gs=new wi,_h=new wi,$n=new D,ft=class t extends Js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:MD++}),this.uuid=Ks(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Y2(e)?Rh:wh)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Ye().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Us.makeRotationFromQuaternion(e),this.applyMatrix4(Us),this}rotateX(e){return Us.makeRotationX(e),this.applyMatrix4(Us),this}rotateY(e){return Us.makeRotationY(e),this.applyMatrix4(Us),this}rotateZ(e){return Us.makeRotationZ(e),this.applyMatrix4(Us),this}translate(e,n,i){return Us.makeTranslation(e,n,i),this.applyMatrix4(Us),this}scale(e,n,i){return Us.makeScale(e,n,i),this.applyMatrix4(Us),this}lookAt(e){return Pv.lookAt(e),Pv.updateMatrix(),this.applyMatrix4(Pv.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dc).negate(),this.translate(Dc.x,Dc.y,Dc.z),this}setFromPoints(e){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=e.length;s<a;s++){let r=e[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new vt(i,3))}else{let i=Math.min(e.length,n.count);for(let s=0;s<i;s++){let a=e[s];n.setXYZ(s,a.x,a.y,a.z||0)}e.length>n.count&&Ee("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wi);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];gs.setFromBufferAttribute(a),this.morphTargetsRelative?($n.addVectors(this.boundingBox.min,gs.min),this.boundingBox.expandByPoint($n),$n.addVectors(this.boundingBox.max,gs.max),this.boundingBox.expandByPoint($n)):(this.boundingBox.expandByPoint(gs.min),this.boundingBox.expandByPoint(gs.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Fe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let i=this.boundingSphere.center;if(gs.setFromBufferAttribute(e),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];_h.setFromBufferAttribute(o),this.morphTargetsRelative?($n.addVectors(gs.min,_h.min),gs.expandByPoint($n),$n.addVectors(gs.max,_h.max),gs.expandByPoint($n)):(gs.expandByPoint(_h.min),gs.expandByPoint(_h.max))}gs.getCenter(i);let s=0;for(let a=0,r=e.count;a<r;a++)$n.fromBufferAttribute(e,a),s=Math.max(s,i.distanceToSquared($n));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)$n.fromBufferAttribute(o,c),l&&(Dc.fromBufferAttribute(e,c),$n.add(Dc)),s=Math.max(s,i.distanceToSquared($n))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Fe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Fe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new tn(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));let o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new D,l[y]=new D;let c=new D,h=new D,f=new D,u=new Ce,d=new Ce,g=new Ce,b=new D,m=new D;function p(y,A,C){c.fromBufferAttribute(i,y),h.fromBufferAttribute(i,A),f.fromBufferAttribute(i,C),u.fromBufferAttribute(a,y),d.fromBufferAttribute(a,A),g.fromBufferAttribute(a,C),h.sub(c),f.sub(c),d.sub(u),g.sub(u);let N=1/(d.x*g.y-g.x*d.y);isFinite(N)&&(b.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(N),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(N),o[y].add(b),o[A].add(b),o[C].add(b),l[y].add(m),l[A].add(m),l[C].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let y=0,A=_.length;y<A;++y){let C=_[y],N=C.start,U=C.count;for(let X=N,Y=N+U;X<Y;X+=3)p(e.getX(X+0),e.getX(X+1),e.getX(X+2))}let x=new D,v=new D,M=new D,E=new D;function w(y){M.fromBufferAttribute(s,y),E.copy(M);let A=o[y];x.copy(A),x.sub(M.multiplyScalar(M.dot(A))).normalize(),v.crossVectors(E,A);let N=v.dot(l[y])<0?-1:1;r.setXYZW(y,x.x,x.y,x.z,N)}for(let y=0,A=_.length;y<A;++y){let C=_[y],N=C.start,U=C.count;for(let X=N,Y=N+U;X<Y;X+=3)w(e.getX(X+0)),w(e.getX(X+1)),w(e.getX(X+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new tn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new D,a=new D,r=new D,o=new D,l=new D,c=new D,h=new D,f=new D;if(e)for(let u=0,d=e.count;u<d;u+=3){let g=e.getX(u+0),b=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(n,g),a.fromBufferAttribute(n,b),r.fromBufferAttribute(n,m),h.subVectors(r,a),f.subVectors(s,a),h.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=n.count;u<d;u+=3)s.fromBufferAttribute(n,u+0),a.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),h.subVectors(r,a),f.subVectors(s,a),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)$n.fromBufferAttribute(e,n),$n.normalize(),e.setXYZ(n,$n.x,$n.y,$n.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),d=0,g=0;for(let b=0,m=l.length;b<m;b++){o.isInterleavedBufferAttribute?d=l[b]*o.data.stride+o.offset:d=l[b]*h;for(let p=0;p<h;p++)u[g++]=c[d++]}return new tn(u,h,f)}if(this.index===null)return Ee("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new t,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=e(u,i);l.push(d)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(n))}let a=e.morphAttributes;for(let c in a){let h=[],f=a[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let c=0,h=r.length;c<h;c++){let f=r[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},co=class{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Gp,this.updateRanges=[],this.version=0,this.uuid=Ks()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let s=0,a=this.stride;s<a;s++)this.array[e+s]=n.array[i+s];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ks()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ks()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ai=new D,uo=class t{constructor(e,n,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Ai.fromBufferAttribute(this,n),Ai.applyMatrix4(e),this.setXYZ(n,Ai.x,Ai.y,Ai.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ai.fromBufferAttribute(this,n),Ai.applyNormalMatrix(e),this.setXYZ(n,Ai.x,Ai.y,Ai.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ai.fromBufferAttribute(this,n),Ai.transformDirection(e),this.setXYZ(n,Ai.x,Ai.y,Ai.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=Ys(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Ft(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=Ft(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=Ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=Ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=Ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Ys(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Ys(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Ys(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Ys(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=Ft(n,this.array),i=Ft(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=Ft(n,this.array),i=Ft(i,this.array),s=Ft(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,n,i,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(n=Ft(n,this.array),i=Ft(i,this.array),s=Ft(s,this.array),a=Ft(a,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=a,this}clone(e){if(e===void 0){Eh("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)n.push(this.data.array[s+a])}return new tn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new t(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Eh("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)n.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ED=0,ki=class extends Js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ED++}),this.uuid=Ks(),this.name="",this.type="Material",this.blending=rl,this.side=js,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lp,this.blendDst=Op,this.blendEquation=oo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=ol,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$v,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sl,this.stencilZFail=sl,this.stencilZPass=sl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let n in e){let i=e[n];if(i===void 0){Ee(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Ee(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==rl&&(i.blending=this.blending),this.side!==js&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Lp&&(i.blendSrc=this.blendSrc),this.blendDst!==Op&&(i.blendDst=this.blendDst),this.blendEquation!==oo&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ol&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$v&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==sl&&(i.stencilFail=this.stencilFail),this.stencilZFail!==sl&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==sl&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(e.textures),r=s(e.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Oe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ce().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ce().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let n=e.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var sr=new D,Bv=new D,cp=new D,ao=new D,Fv=new D,up=new D,zv=new D,wa=class{constructor(e=new D,n=new D(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=sr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(sr.copy(this.origin).addScaledVector(this.direction,n),sr.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){Bv.copy(e).add(n).multiplyScalar(.5),cp.copy(n).sub(e).normalize(),ao.copy(this.origin).sub(Bv);let a=e.distanceTo(n)*.5,r=-this.direction.dot(cp),o=ao.dot(this.direction),l=-ao.dot(cp),c=ao.lengthSq(),h=Math.abs(1-r*r),f,u,d,g;if(h>0)if(f=r*l-o,u=r*o-l,g=a*h,f>=0)if(u>=-g)if(u<=g){let b=1/h;f*=b,u*=b,d=f*(f+r*u+2*o)+u*(r*f+u+2*l)+c}else u=a,f=Math.max(0,-(r*u+o)),d=-f*f+u*(u+2*l)+c;else u=-a,f=Math.max(0,-(r*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-r*a+o)),u=f>0?-a:Math.min(Math.max(-a,-l),a),d=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-a,-l),a),d=u*(u+2*l)+c):(f=Math.max(0,-(r*a+o)),u=f>0?a:Math.min(Math.max(-a,-l),a),d=-f*f+u*(u+2*l)+c);else u=r>0?-a:a,f=Math.max(0,-(r*u+o)),d=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Bv).addScaledVector(cp,u),d}intersectSphere(e,n){sr.subVectors(e.center,this.origin);let i=sr.dot(this.direction),s=sr.dot(sr)-i*i,a=e.radius*e.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){let i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,a,r,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(a=(e.min.y-u.y)*h,r=(e.max.y-u.y)*h):(a=(e.max.y-u.y)*h,r=(e.min.y-u.y)*h),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,sr)!==null}intersectTriangle(e,n,i,s,a){Fv.subVectors(n,e),up.subVectors(i,e),zv.crossVectors(Fv,up);let r=this.direction.dot(zv),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;ao.subVectors(this.origin,e);let l=o*this.direction.dot(up.crossVectors(ao,up));if(l<0)return null;let c=o*this.direction.dot(Fv.cross(ao));if(c<0||l+c>r)return null;let h=-o*ao.dot(zv);return h<0?null:this.at(h/r,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ln=class extends ki{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new lr,this.combine=fy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},H1=new qe,nl=new wa,hp=new Vi,G1=new D,fp=new D,dp=new D,pp=new D,Hv=new D,mp=new D,V1=new D,gp=new D,Nt=class extends pn{constructor(e=new ft,n=new Ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(a&&o){mp.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let h=o[l],f=a[l];h!==0&&(Hv.fromBufferAttribute(f,e),r?mp.addScaledVector(Hv,h):mp.addScaledVector(Hv.sub(n),h))}n.add(mp)}return n}raycast(e,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),hp.copy(i.boundingSphere),hp.applyMatrix4(a),nl.copy(e.ray).recast(e.near),!(hp.containsPoint(nl.origin)===!1&&(nl.intersectSphere(hp,G1)===null||nl.origin.distanceToSquared(G1)>(e.far-e.near)**2))&&(H1.copy(a).invert(),nl.copy(e.ray).applyMatrix4(H1),!(i.boundingBox!==null&&nl.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,nl)))}_computeIntersections(e,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,f=a.attributes.normal,u=a.groups,d=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,b=u.length;g<b;g++){let m=u[g],p=r[m.materialIndex],_=Math.max(m.start,d.start),x=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=_,M=x;v<M;v+=3){let E=o.getX(v),w=o.getX(v+1),y=o.getX(v+2);s=_p(this,p,e,i,c,h,f,E,w,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,d.start),b=Math.min(o.count,d.start+d.count);for(let m=g,p=b;m<p;m+=3){let _=o.getX(m),x=o.getX(m+1),v=o.getX(m+2);s=_p(this,r,e,i,c,h,f,_,x,v),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,b=u.length;g<b;g++){let m=u[g],p=r[m.materialIndex],_=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=_,M=x;v<M;v+=3){let E=v,w=v+1,y=v+2;s=_p(this,p,e,i,c,h,f,E,w,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,d.start),b=Math.min(l.count,d.start+d.count);for(let m=g,p=b;m<p;m+=3){let _=m,x=m+1,v=m+2;s=_p(this,r,e,i,c,h,f,_,x,v),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function TD(t,e,n,i,s,a,r,o){let l;if(e.side===Ci?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,e.side===js,o),l===null)return null;gp.copy(o),gp.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(gp);return c<n.near||c>n.far?null:{distance:c,point:gp.clone(),object:t}}function _p(t,e,n,i,s,a,r,o,l,c){t.getVertexPosition(o,fp),t.getVertexPosition(l,dp),t.getVertexPosition(c,pp);let h=TD(t,e,n,i,fp,dp,pp,V1);if(h){let f=new D;rr.getBarycoord(V1,fp,dp,pp,f),s&&(h.uv=rr.getInterpolatedAttribute(s,o,l,c,f,new Ce)),a&&(h.uv1=rr.getInterpolatedAttribute(a,o,l,c,f,new Ce)),r&&(h.normal=rr.getInterpolatedAttribute(r,o,l,c,f,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new D,materialIndex:0};rr.getNormal(fp,dp,pp,u.normal),h.face=u,h.barycoord=f}return h}var vh=new zt,k1=new zt,X1=new zt,AD=new zt,W1=new qe,vp=new D,Gv=new Vi,q1=new qe,Vv=new wa,Ch=class extends Nt{constructor(e,n){super(e,n),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Zv,this.bindMatrix=new qe,this.bindMatrixInverse=new qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new wi),this.boundingBox.makeEmpty();let n=e.getAttribute("position");for(let i=0;i<n.count;i++)this.getVertexPosition(i,vp),this.boundingBox.expandByPoint(vp)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Vi),this.boundingSphere.makeEmpty();let n=e.getAttribute("position");for(let i=0;i<n.count;i++)this.getVertexPosition(i,vp),this.boundingSphere.expandByPoint(vp)}copy(e,n){return super.copy(e,n),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,n){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gv.copy(this.boundingSphere),Gv.applyMatrix4(s),e.ray.intersectsSphere(Gv)!==!1&&(q1.copy(s).invert(),Vv.copy(e.ray).applyMatrix4(q1),!(this.boundingBox!==null&&Vv.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,n,Vv)))}getVertexPosition(e,n){return super.getVertexPosition(e,n),this.applyBoneTransform(e,n),n}bind(e,n){this.skeleton=e,n===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),n=this.matrixWorld),this.bindMatrix.copy(n),this.bindMatrixInverse.copy(n).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new zt,n=this.geometry.attributes.skinWeight;for(let i=0,s=n.count;i<s;i++){e.fromBufferAttribute(n,i);let a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),n.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Zv?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===IA?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ee("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,n){let i=this.skeleton,s=this.geometry;k1.fromBufferAttribute(s.attributes.skinIndex,e),X1.fromBufferAttribute(s.attributes.skinWeight,e),n.isVector4?(vh.copy(n),n.set(0,0,0,0)):(vh.set(...n,1),n.set(0,0,0)),vh.applyMatrix4(this.bindMatrix);for(let a=0;a<4;a++){let r=X1.getComponent(a);if(r!==0){let o=k1.getComponent(a);W1.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),n.addScaledVector(AD.copy(vh).applyMatrix4(W1),r)}}return n.isVector4&&(n.w=vh.w),n.applyMatrix4(this.bindMatrixInverse)}},Xc=class extends pn{constructor(){super(),this.isBone=!0,this.type="Bone"}},Wc=class extends ei{constructor(e=null,n=1,i=1,s,a,r,o,l,c=bn,h=bn,f,u){super(null,r,o,l,c,h,s,a,f,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Y1=new qe,wD=new qe,Dh=class t{constructor(e=[],n=[]){this.uuid=Ks(),this.bones=e.slice(0),this.boneInverses=n,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,n=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),n.length===0)this.calculateInverses();else if(e.length!==n.length){Ee("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,n=this.bones.length;e<n;e++){let i=new qe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,n=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let a=0,r=e.length;a<r;a++){let o=e[a]?e[a].matrixWorld:wD;Y1.multiplyMatrices(o,n[a]),Y1.toArray(i,a*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new t(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let n=new Float32Array(e*e*4);n.set(this.boneMatrices);let i=new Wc(n,e,e,Ss,bs);return i.needsUpdate=!0,this.boneMatrices=n,this.boneTexture=i,this}getBoneByName(e){for(let n=0,i=this.bones.length;n<i;n++){let s=this.bones[n];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,n){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let a=e.bones[i],r=n[a];r===void 0&&(Ee("Skeleton: No bone found with UUID:",a),r=new Xc),this.bones.push(r),this.boneInverses.push(new qe().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let n=this.bones,i=this.boneInverses;for(let s=0,a=n.length;s<a;s++){let r=n[s];e.bones.push(r.uuid);let o=i[s];e.boneInverses.push(o.toArray())}return e}},ho=class extends tn{constructor(e,n,i,s=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Nc=new qe,Z1=new qe,yp=[],K1=new wi,RD=new qe,yh=new Nt,xh=new Vi,Nh=class extends Nt{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new ho(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,RD)}computeBoundingBox(){let e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new wi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Nc),K1.copy(e.boundingBox).applyMatrix4(Nc),this.boundingBox.union(K1)}computeBoundingSphere(){let e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Nc),xh.copy(e.boundingSphere).applyMatrix4(Nc),this.boundingSphere.union(xh)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){return n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){let i=n.morphTargetInfluences,s=this.morphTexture.source.data.data,a=i.length+1,r=e*a+1;for(let o=0;o<i.length;o++)i[o]=s[r+o]}raycast(e,n){let i=this.matrixWorld,s=this.count;if(yh.geometry=this.geometry,yh.material=this.material,yh.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xh.copy(this.boundingSphere),xh.applyMatrix4(i),e.ray.intersectsSphere(xh)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,Nc),Z1.multiplyMatrices(i,Nc),yh.matrixWorld=Z1,yh.raycast(e,yp);for(let r=0,o=yp.length;r<o;r++){let l=yp[r];l.instanceId=a,l.object=this,n.push(l)}yp.length=0}}setColorAt(e,n){return this.instanceColor===null&&(this.instanceColor=new ho(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,n){return n.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,n){let i=n.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Wc(new Float32Array(s*this.count),s,this.count,mm,bs));let a=this.morphTexture.source.data.data,r=0;for(let c=0;c<i.length;c++)r+=i[c];let o=this.geometry.morphTargetsRelative?1:1-r,l=s*e;return a[l]=o,a.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},kv=new D,CD=new D,DD=new Ye,Hi=class{constructor(e=new D(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){let s=kv.subVectors(i,n).cross(CD.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){let s=e.delta(kv),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(r<0||r>1)?null:n.copy(e.start).addScaledVector(s,r)}intersectsLine(e){let n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let i=n||DD.getNormalMatrix(e),s=this.coplanarPoint(kv).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},il=new Vi,ND=new Ce(.5,.5),xp=new D,qc=class{constructor(e=new Hi,n=new Hi,i=new Hi,s=new Hi,a=new Hi,r=new Hi){this.planes=[e,n,i,s,a,r]}set(e,n,i,s,a,r){let o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(e){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Zs,i=!1){let s=this.planes,a=e.elements,r=a[0],o=a[1],l=a[2],c=a[3],h=a[4],f=a[5],u=a[6],d=a[7],g=a[8],b=a[9],m=a[10],p=a[11],_=a[12],x=a[13],v=a[14],M=a[15];if(s[0].setComponents(c-r,d-h,p-g,M-_).normalize(),s[1].setComponents(c+r,d+h,p+g,M+_).normalize(),s[2].setComponents(c+o,d+f,p+b,M+x).normalize(),s[3].setComponents(c-o,d-f,p-b,M-x).normalize(),i)s[4].setComponents(l,u,m,v).normalize(),s[5].setComponents(c-l,d-u,p-m,M-v).normalize();else if(s[4].setComponents(c-l,d-u,p-m,M-v).normalize(),n===Zs)s[5].setComponents(c+l,d+u,p+m,M+v).normalize();else if(n===Fc)s[5].setComponents(l,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),il.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),il.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(il)}intersectsSprite(e){il.center.set(0,0,0);let n=ND.distanceTo(e.center);return il.radius=.7071067811865476+n,il.applyMatrix4(e.matrixWorld),this.intersectsSphere(il)}intersectsSphere(e){let n=this.planes,i=e.center,s=-e.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(xp.x=s.normal.x>0?e.max.x:e.min.x,xp.y=s.normal.y>0?e.max.y:e.min.y,xp.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(xp)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Gn=class extends ki{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Wp=new D,qp=new D,j1=new qe,bh=new wa,bp=new Vi,Xv=new D,J1=new D,fi=class extends pn{constructor(e=new ft,n=new Gn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let n=e.attributes.position,i=[0];for(let s=1,a=n.count;s<a;s++)Wp.fromBufferAttribute(n,s-1),qp.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=Wp.distanceTo(qp);e.setAttribute("lineDistance",new vt(i,1))}else Ee("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){let i=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),bp.copy(i.boundingSphere),bp.applyMatrix4(s),bp.radius+=a,e.ray.intersectsSphere(bp)===!1)return;j1.copy(s).invert(),bh.copy(e.ray).applyMatrix4(j1);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let d=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let b=d,m=g-1;b<m;b+=c){let p=h.getX(b),_=h.getX(b+1),x=Sp(this,e,bh,l,p,_,b);x&&n.push(x)}if(this.isLineLoop){let b=h.getX(g-1),m=h.getX(d),p=Sp(this,e,bh,l,b,m,g-1);p&&n.push(p)}}else{let d=Math.max(0,r.start),g=Math.min(u.count,r.start+r.count);for(let b=d,m=g-1;b<m;b+=c){let p=Sp(this,e,bh,l,b,b+1,b);p&&n.push(p)}if(this.isLineLoop){let b=Sp(this,e,bh,l,g-1,d,g-1);b&&n.push(b)}}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}};function Sp(t,e,n,i,s,a,r){let o=t.geometry.attributes.position;if(Wp.fromBufferAttribute(o,s),qp.fromBufferAttribute(o,a),n.distanceSqToSegment(Wp,qp,Xv,J1)>i)return;Xv.applyMatrix4(t.matrixWorld);let c=e.ray.origin.distanceTo(Xv);if(!(c<e.near||c>e.far))return{distance:c,point:J1.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}var Q1=new D,$1=new D,Ri=class extends fi{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let n=e.attributes.position,i=[];for(let s=0,a=n.count;s<a;s+=2)Q1.fromBufferAttribute(n,s),$1.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Q1.distanceTo($1);e.setAttribute("lineDistance",new vt(i,1))}else Ee("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Lh=class extends fi{constructor(e,n){super(e,n),this.isLineLoop=!0,this.type="LineLoop"}},Yc=class extends ki{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},eA=new qe,ey=new wa,Mp=new Vi,Ep=new D,Oh=class extends pn{constructor(e=new ft,n=new Yc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){let i=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Mp.copy(i.boundingSphere),Mp.applyMatrix4(s),Mp.radius+=a,e.ray.intersectsSphere(Mp)===!1)return;eA.copy(s).invert(),ey.copy(e.ray).applyMatrix4(eA);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){let u=Math.max(0,r.start),d=Math.min(c.count,r.start+r.count);for(let g=u,b=d;g<b;g++){let m=c.getX(g);Ep.fromBufferAttribute(f,m),tA(Ep,m,l,s,e,n,this)}}else{let u=Math.max(0,r.start),d=Math.min(f.count,r.start+r.count);for(let g=u,b=d;g<b;g++)Ep.fromBufferAttribute(f,g),tA(Ep,g,l,s,e,n,this)}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}};function tA(t,e,n,i,s,a,r){let o=ey.distanceSqToPoint(t);if(o<n){let l=new D;ey.closestPointToPoint(t,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}var Uh=class extends ei{constructor(e=[],n=yo,i,s,a,r,o,l,c,h){super(e,n,i,s,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var cr=class extends ei{constructor(e,n,i=ea,s,a,r,o=bn,l=bn,c,h=Aa,f=1){if(h!==Aa&&h!==xo)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:n,depth:f};super(u,s,a,r,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},Yp=class extends cr{constructor(e,n=ea,i=yo,s,a,r=bn,o=bn,l,c=Aa){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,n,i,s,a,r,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ih=class extends ei{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ur=class t extends ft{constructor(e=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],h=[],f=[],u=0,d=0;g("z","y","x",-1,-1,i,n,e,r,a,0),g("z","y","x",1,-1,i,n,-e,r,a,1),g("x","z","y",1,1,e,i,n,s,r,2),g("x","z","y",1,-1,e,i,-n,s,r,3),g("x","y","z",1,-1,e,n,i,s,a,4),g("x","y","z",-1,-1,e,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new vt(c,3)),this.setAttribute("normal",new vt(h,3)),this.setAttribute("uv",new vt(f,2));function g(b,m,p,_,x,v,M,E,w,y,A){let C=v/w,N=M/y,U=v/2,X=M/2,Y=E/2,F=w+1,V=y+1,k=0,$=0,te=new D;for(let fe=0;fe<V;fe++){let ge=fe*N-X;for(let xe=0;xe<F;xe++){let dt=xe*C-U;te[b]=dt*_,te[m]=ge*x,te[p]=Y,c.push(te.x,te.y,te.z),te[b]=0,te[m]=0,te[p]=E>0?1:-1,h.push(te.x,te.y,te.z),f.push(xe/w),f.push(1-fe/y),k+=1}}for(let fe=0;fe<y;fe++)for(let ge=0;ge<w;ge++){let xe=u+ge+F*fe,dt=u+ge+F*(fe+1),en=u+(ge+1)+F*(fe+1),pt=u+(ge+1)+F*fe;l.push(xe,dt,pt),l.push(dt,en,pt),$+=6}o.addGroup(d,$,A),d+=$,u+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Zp=class t extends ft{constructor(e=1,n=1,i=1,s=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),a=Math.floor(a);let h=[],f=[],u=[],d=[],g=0,b=[],m=i/2,p=0;_(),r===!1&&(e>0&&x(!0),n>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new vt(f,3)),this.setAttribute("normal",new vt(u,3)),this.setAttribute("uv",new vt(d,2));function _(){let v=new D,M=new D,E=0,w=(n-e)/i;for(let y=0;y<=a;y++){let A=[],C=y/a,N=C*(n-e)+e;for(let U=0;U<=s;U++){let X=U/s,Y=X*l+o,F=Math.sin(Y),V=Math.cos(Y);M.x=N*F,M.y=-C*i+m,M.z=N*V,f.push(M.x,M.y,M.z),v.set(F,w,V).normalize(),u.push(v.x,v.y,v.z),d.push(X,1-C),A.push(g++)}b.push(A)}for(let y=0;y<s;y++)for(let A=0;A<a;A++){let C=b[A][y],N=b[A+1][y],U=b[A+1][y+1],X=b[A][y+1];(e>0||A!==0)&&(h.push(C,N,X),E+=3),(n>0||A!==a-1)&&(h.push(N,U,X),E+=3)}c.addGroup(p,E,0),p+=E}function x(v){let M=g,E=new Ce,w=new D,y=0,A=v===!0?e:n,C=v===!0?1:-1;for(let U=1;U<=s;U++)f.push(0,m*C,0),u.push(0,C,0),d.push(.5,.5),g++;let N=g;for(let U=0;U<=s;U++){let Y=U/s*l+o,F=Math.cos(Y),V=Math.sin(Y);w.x=A*V,w.y=m*C,w.z=A*F,f.push(w.x,w.y,w.z),u.push(0,C,0),E.x=F*.5+.5,E.y=V*.5*C+.5,d.push(E.x,E.y),g++}for(let U=0;U<s;U++){let X=M+U,Y=N+U;v===!0?h.push(Y,Y+1,X):h.push(Y+1,Y,X),y+=3}c.addGroup(p,y,v===!0?1:2),p+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ph=class t extends Zp{constructor(e=1,n=1,i=32,s=1,a=!1,r=0,o=Math.PI*2){super(0,e,n,i,s,a,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(e){return new t(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Kp=class t extends ft{constructor(e=[],n=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:s};let a=[],r=[];o(s),c(i),h(),this.setAttribute("position",new vt(a,3)),this.setAttribute("normal",new vt(a.slice(),3)),this.setAttribute("uv",new vt(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let x=new D,v=new D,M=new D;for(let E=0;E<n.length;E+=3)d(n[E+0],x),d(n[E+1],v),d(n[E+2],M),l(x,v,M,_)}function l(_,x,v,M){let E=M+1,w=[];for(let y=0;y<=E;y++){w[y]=[];let A=_.clone().lerp(v,y/E),C=x.clone().lerp(v,y/E),N=E-y;for(let U=0;U<=N;U++)U===0&&y===E?w[y][U]=A:w[y][U]=A.clone().lerp(C,U/N)}for(let y=0;y<E;y++)for(let A=0;A<2*(E-y)-1;A++){let C=Math.floor(A/2);A%2===0?(u(w[y][C+1]),u(w[y+1][C]),u(w[y][C])):(u(w[y][C+1]),u(w[y+1][C+1]),u(w[y+1][C]))}}function c(_){let x=new D;for(let v=0;v<a.length;v+=3)x.x=a[v+0],x.y=a[v+1],x.z=a[v+2],x.normalize().multiplyScalar(_),a[v+0]=x.x,a[v+1]=x.y,a[v+2]=x.z}function h(){let _=new D;for(let x=0;x<a.length;x+=3){_.x=a[x+0],_.y=a[x+1],_.z=a[x+2];let v=m(_)/2/Math.PI+.5,M=p(_)/Math.PI+.5;r.push(v,1-M)}g(),f()}function f(){for(let _=0;_<r.length;_+=6){let x=r[_+0],v=r[_+2],M=r[_+4],E=Math.max(x,v,M),w=Math.min(x,v,M);E>.9&&w<.1&&(x<.2&&(r[_+0]+=1),v<.2&&(r[_+2]+=1),M<.2&&(r[_+4]+=1))}}function u(_){a.push(_.x,_.y,_.z)}function d(_,x){let v=_*3;x.x=e[v+0],x.y=e[v+1],x.z=e[v+2]}function g(){let _=new D,x=new D,v=new D,M=new D,E=new Ce,w=new Ce,y=new Ce;for(let A=0,C=0;A<a.length;A+=9,C+=6){_.set(a[A+0],a[A+1],a[A+2]),x.set(a[A+3],a[A+4],a[A+5]),v.set(a[A+6],a[A+7],a[A+8]),E.set(r[C+0],r[C+1]),w.set(r[C+2],r[C+3]),y.set(r[C+4],r[C+5]),M.copy(_).add(x).add(v).divideScalar(3);let N=m(M);b(E,C+0,_,N),b(w,C+2,x,N),b(y,C+4,v,N)}}function b(_,x,v,M){M<0&&_.x===1&&(r[x]=_.x-1),v.x===0&&v.z===0&&(r[x]=M/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.vertices,e.indices,e.radius,e.detail)}},Bh=class t extends Kp{constructor(e=1,n=0){let i=(1+Math.sqrt(5))/2,s=1/i,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(a,r,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new t(e.radius,e.detail)}},Tp=new D,Ap=new D,Wv=new D,wp=new rr,hl=class extends ft{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){let s=Math.pow(10,4),a=Math.cos(Ic*n),r=e.getIndex(),o=e.getAttribute("position"),l=r?r.count:o.count,c=[0,0,0],h=["a","b","c"],f=new Array(3),u={},d=[];for(let g=0;g<l;g+=3){r?(c[0]=r.getX(g),c[1]=r.getX(g+1),c[2]=r.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:b,b:m,c:p}=wp;if(b.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),wp.getNormal(Wv),f[0]=`${Math.round(b.x*s)},${Math.round(b.y*s)},${Math.round(b.z*s)}`,f[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,f[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let _=0;_<3;_++){let x=(_+1)%3,v=f[_],M=f[x],E=wp[h[_]],w=wp[h[x]],y=`${v}_${M}`,A=`${M}_${v}`;A in u&&u[A]?(Wv.dot(u[A].normal)<=a&&(d.push(E.x,E.y,E.z),d.push(w.x,w.y,w.z)),u[A]=null):y in u||(u[y]={index0:c[_],index1:c[x],normal:Wv.clone()})}}for(let g in u)if(u[g]){let{index0:b,index1:m}=u[g];Tp.fromBufferAttribute(o,b),Ap.fromBufferAttribute(o,m),d.push(Tp.x,Tp.y,Tp.z),d.push(Ap.x,Ap.y,Ap.z)}this.setAttribute("position",new vt(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var fo=class t extends ft{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};let a=e/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,f=e/o,u=n/l,d=[],g=[],b=[],m=[];for(let p=0;p<h;p++){let _=p*u-r;for(let x=0;x<c;x++){let v=x*f-a;g.push(v,-_,0),b.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<o;_++){let x=_+c*p,v=_+c*(p+1),M=_+1+c*(p+1),E=_+1+c*p;d.push(x,v,E),d.push(v,M,E)}this.setIndex(d),this.setAttribute("position",new vt(g,3)),this.setAttribute("normal",new vt(b,3)),this.setAttribute("uv",new vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}},po=class t extends ft{constructor(e=.5,n=1,i=32,s=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:s,thetaStart:a,thetaLength:r},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],h=[],f=e,u=(n-e)/s,d=new D,g=new Ce;for(let b=0;b<=s;b++){for(let m=0;m<=i;m++){let p=a+m/i*r;d.x=f*Math.cos(p),d.y=f*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/n+1)/2,g.y=(d.y/n+1)/2,h.push(g.x,g.y)}f+=u}for(let b=0;b<s;b++){let m=b*(i+1);for(let p=0;p<i;p++){let _=p+m,x=_,v=_+i+1,M=_+i+2,E=_+1;o.push(x,v,E),o.push(v,M,E)}}this.setIndex(o),this.setAttribute("position",new vt(l,3)),this.setAttribute("normal",new vt(c,3)),this.setAttribute("uv",new vt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Fh=class t extends ft{constructor(e=1,n=32,i=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));let l=Math.min(r+o,Math.PI),c=0,h=[],f=new D,u=new D,d=[],g=[],b=[],m=[];for(let p=0;p<=i;p++){let _=[],x=p/i,v=r+x*o,M=e*Math.cos(v),E=Math.sqrt(e*e-M*M),w=0;p===0&&r===0?w=.5/n:p===i&&l===Math.PI&&(w=-.5/n);for(let y=0;y<=n;y++){let A=y/n,C=s+A*a;f.x=-E*Math.cos(C),f.y=M,f.z=E*Math.sin(C),g.push(f.x,f.y,f.z),u.copy(f).normalize(),b.push(u.x,u.y,u.z),m.push(A+w,1-x),_.push(c++)}h.push(_)}for(let p=0;p<i;p++)for(let _=0;_<n;_++){let x=h[p][_+1],v=h[p][_],M=h[p+1][_],E=h[p+1][_+1];(p!==0||r>0)&&d.push(x,v,E),(p!==i-1||l<Math.PI)&&d.push(v,M,E)}this.setIndex(d),this.setAttribute("position",new vt(g,3)),this.setAttribute("normal",new vt(b,3)),this.setAttribute("uv",new vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var zh=class extends ft{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let n=[],i=new Set,s=new D,a=new D;if(e.index!==null){let r=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let f=l[c],u=f.start,d=f.count;for(let g=u,b=u+d;g<b;g+=3)for(let m=0;m<3;m++){let p=o.getX(g+m),_=o.getX(g+(m+1)%3);s.fromBufferAttribute(r,p),a.fromBufferAttribute(r,_),nA(s,a,i)===!0&&(n.push(s.x,s.y,s.z),n.push(a.x,a.y,a.z))}}}else{let r=e.attributes.position;for(let o=0,l=r.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,f=3*o+(c+1)%3;s.fromBufferAttribute(r,h),a.fromBufferAttribute(r,f),nA(s,a,i)===!0&&(n.push(s.x,s.y,s.z),n.push(a.x,a.y,a.z))}}this.setAttribute("position",new vt(n,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function nA(t,e,n){let i=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`;return n.has(i)===!0||n.has(s)===!0?!1:(n.add(i),n.add(s),!0)}function _l(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let s=t[n][i];if(iA(s))s.isRenderTargetTexture?(Ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone();else if(Array.isArray(s))if(iA(s[0])){let a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();e[n][i]=a}else e[n][i]=s.slice();else e[n][i]=s}}return e}function yi(t){let e={};for(let n=0;n<t.length;n++){let i=_l(t[n]);for(let s in i)e[s]=i[s]}return e}function iA(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function LD(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Cy(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}var jA={clone:_l,merge:yi},OD=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,UD=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,vs=class extends ki{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=OD,this.fragmentShader=UD,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_l(e.uniforms),this.uniformsGroups=LD(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new Oe().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ce().fromArray(s.value);break;case"v3":this.uniforms[i].value=new D().fromArray(s.value);break;case"v4":this.uniforms[i].value=new zt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ye().fromArray(s.value);break;case"m4":this.uniforms[i].value=new qe().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},jp=class extends vs{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Qs=class extends ki{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Km,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new lr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Xi=class extends Qs{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return it(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Jp=class extends ki{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Qp=class extends ki{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var hr=class extends Gn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function Rp(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function ID(t){function e(s,a){return t[s]-t[a]}let n=t.length,i=new Array(n);for(let s=0;s!==n;++s)i[s]=s;return i.sort(e),i}function sA(t,e,n){let i=t.length,s=new t.constructor(i);for(let a=0,r=0;r!==i;++a){let o=n[a]*e;for(let l=0;l!==e;++l)s[r++]=t[o+l]}return s}function PD(t,e,n,i){let s=1,a=t[0];for(;a!==void 0&&a[i]===void 0;)a=t[s++];if(a===void 0)return;let r=a[i];if(r!==void 0)if(Array.isArray(r))do r=a[i],r!==void 0&&(e.push(a.time),n.push(...r)),a=t[s++];while(a!==void 0);else if(r.toArray!==void 0)do r=a[i],r!==void 0&&(e.push(a.time),r.toArray(n,n.length)),a=t[s++];while(a!==void 0);else do r=a[i],r!==void 0&&(e.push(a.time),n.push(r)),a=t[s++];while(a!==void 0)}var Ra=class{constructor(e,n,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];e:{t:{let r;n:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],e<s)break t}r=n.length;break n}if(!(e>=a)){let o=n[1];e<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],e>=a)break t}r=i,i=0;break n}break e}for(;i<r;){let o=i+r>>>1;e<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},$p=class extends Ra{constructor(e,n,i,s){super(e,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:jv,endingEnd:jv}}intervalChanged_(e,n,i){let s=this.parameterPositions,a=e-2,r=e+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case Jv:a=e,o=2*n-i;break;case Qv:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Jv:r=e,l=2*i-n;break;case Qv:r=1,l=i+s[1]-s[0];break;default:r=e-1,l=n}let c=(i-n)*.5,h=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*h,this._offsetNext=r*h}interpolate_(e,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(i-n)/(s-n),b=g*g,m=b*g,p=-u*m+2*u*b-u*g,_=(1+u)*m+(-1.5-2*u)*b+(-.5+u)*g+1,x=(-1-d)*m+(1.5+d)*b+.5*g,v=d*m-d*b;for(let M=0;M!==o;++M)a[M]=p*r[h+M]+_*r[c+M]+x*r[l+M]+v*r[f+M];return a}},em=class extends Ra{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-n)/(s-n),f=1-h;for(let u=0;u!==o;++u)a[u]=r[c+u]*f+r[l+u]*h;return a}},tm=class extends Ra{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},nm=class extends Ra{interpolate_(e,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let g=(i-n)/(s-n),b=1-g;for(let m=0;m!==o;++m)a[m]=r[c+m]*b+r[l+m]*g;return a}let u=o*2,d=e-1;for(let g=0;g!==o;++g){let b=r[c+g],m=r[l+g],p=d*u+g*2,_=f[p],x=f[p+1],v=e*u+g*2,M=h[v],E=h[v+1],w=(i-n)/(s-n),y,A,C,N,U;for(let X=0;X<8;X++){y=w*w,A=y*w,C=1-w,N=C*C,U=N*C;let F=U*n+3*N*w*_+3*C*y*M+A*s-i;if(Math.abs(F)<1e-10)break;let V=3*N*(_-n)+6*C*w*(M-_)+3*y*(s-M);if(Math.abs(V)<1e-10)break;w=w-F/V,w=Math.max(0,Math.min(1,w))}a[g]=U*b+3*N*w*x+3*C*y*E+A*m}return a}},Wi=class{constructor(e,n,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Rp(n,this.TimeBufferType),this.values=Rp(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:Rp(e.times,Array),values:Rp(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new tm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new em(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new $p(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let n=new nm(this.times,this.values,this.getValueSize(),e);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(e){let n;switch(e){case ll:n=this.InterpolantFactoryMethodDiscrete;break;case cl:n=this.InterpolantFactoryMethodLinear;break;case Np:n=this.InterpolantFactoryMethodSmooth;break;case Kv:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ee("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ll;case this.InterpolantFactoryMethodLinear:return cl;case this.InterpolantFactoryMethodSmooth:return Np;case this.InterpolantFactoryMethodBezier:return Kv}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=e}return this}scale(e){if(e!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=e}return this}trim(e,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<e;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Fe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,a=i.length;a===0&&(Fe("KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Fe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(r!==null&&r>l){Fe("KeyframeTrack: Out of order keys.",this,o,l,r),e=!1;break}r=l}if(s!==void 0&&Z2(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Fe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Np,a=e.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*i,u=f-i,d=f+i;for(let g=0;g!==i;++g){let b=n[f+g];if(b!==n[u+g]||b!==n[d+g]){l=!0;break}}}if(l){if(o!==r){e[r]=e[o];let f=o*i,u=r*i;for(let d=0;d!==i;++d)n[u+d]=n[f+d]}++r}}if(a>0){e[r]=e[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=n.slice(0,r*i)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,e,n);return s.createInterpolant=this.createInterpolant,s}};Wi.prototype.ValueTypeName="";Wi.prototype.TimeBufferType=Float32Array;Wi.prototype.ValueBufferType=Float32Array;Wi.prototype.DefaultInterpolation=cl;var fr=class extends Wi{constructor(e,n,i){super(e,n,i)}};fr.prototype.ValueTypeName="bool";fr.prototype.ValueBufferType=Array;fr.prototype.DefaultInterpolation=ll;fr.prototype.InterpolantFactoryMethodLinear=void 0;fr.prototype.InterpolantFactoryMethodSmooth=void 0;var Hh=class extends Wi{constructor(e,n,i,s){super(e,n,i,s)}};Hh.prototype.ValueTypeName="color";var dr=class extends Wi{constructor(e,n,i,s){super(e,n,i,s)}};dr.prototype.ValueTypeName="number";var im=class extends Ra{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=e*o;for(let h=c+o;c!==h;c+=4)vi.slerpFlat(a,0,r,c-o,r,c,l);return a}},pr=class extends Wi{constructor(e,n,i,s){super(e,n,i,s)}InterpolantFactoryMethodLinear(e){return new im(this.times,this.values,this.getValueSize(),e)}};pr.prototype.ValueTypeName="quaternion";pr.prototype.InterpolantFactoryMethodSmooth=void 0;var mr=class extends Wi{constructor(e,n,i){super(e,n,i)}};mr.prototype.ValueTypeName="string";mr.prototype.ValueBufferType=Array;mr.prototype.DefaultInterpolation=ll;mr.prototype.InterpolantFactoryMethodLinear=void 0;mr.prototype.InterpolantFactoryMethodSmooth=void 0;var mo=class extends Wi{constructor(e,n,i,s){super(e,n,i,s)}};mo.prototype.ValueTypeName="vector";var Gh=class{constructor(e="",n=-1,i=[],s=PA){this.name=e,this.tracks=i,this.duration=n,this.blendMode=s,this.uuid=Ks(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let n=[],i=e.tracks,s=1/(e.fps||1);for(let r=0,o=i.length;r!==o;++r)n.push(FD(i[r]).scale(s));let a=new this(e.name,e.duration,n,e.blendMode);return a.uuid=e.uuid,a.userData=JSON.parse(e.userData||"{}"),a}static toJSON(e){let n=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:n,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let a=0,r=i.length;a!==r;++a)n.push(Wi.toJSON(i[a]));return s}static CreateFromMorphTargetSequence(e,n,i,s){let a=n.length,r=[];for(let o=0;o<a;o++){let l=[],c=[];l.push((o+a-1)%a,o,(o+1)%a),c.push(0,1,0);let h=ID(l);l=sA(l,1,h),c=sA(c,1,h),!s&&l[0]===0&&(l.push(a),c.push(c[0])),r.push(new dr(".morphTargetInfluences["+n[o].name+"]",l,c).scale(1/i))}return new this(e,-1,r)}static findByName(e,n){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===n)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,n,i){let s={},a=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(a);if(h&&h.length>1){let f=h[1],u=s[f];u||(s[f]=u=[]),u.push(c)}}let r=[];for(let o in s)r.push(this.CreateFromMorphTargetSequence(o,s[o],n,i));return r}resetDuration(){let e=this.tracks,n=0;for(let i=0,s=e.length;i!==s;++i){let a=this.tracks[i];n=Math.max(n,a.times[a.times.length-1])}return this.duration=n,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let n=0;n<this.tracks.length;n++)e=e&&this.tracks[n].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let n=new this.constructor(this.name,this.duration,e,this.blendMode);return n.userData=JSON.parse(JSON.stringify(this.userData)),n}toJSON(){return this.constructor.toJSON(this)}};function BD(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return dr;case"vector":case"vector2":case"vector3":case"vector4":return mo;case"color":return Hh;case"quaternion":return pr;case"bool":case"boolean":return fr;case"string":return mr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)}function FD(t){if(t.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=BD(t.type);if(t.times===void 0){let n=[],i=[];PD(t.keys,n,i,"value"),t.times=n,t.values=i}return e.parse!==void 0?e.parse(t):new e(t.name,t.times,t.values,t.interpolation)}var Ta={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(aA(t)||(this.files[t]=e))},get:function(t){if(this.enabled!==!1&&!aA(t))return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function aA(t){try{let e=t.slice(t.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var sm=class{constructor(e,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,a===!1&&s.onStart!==void 0&&s.onStart(h,r,o),a=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},JA=new sm,Is=class{constructor(e){this.manager=e!==void 0?e:JA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){let i=this;return new Promise(function(s,a){i.load(e,s,n,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Is.DEFAULT_MATERIAL_NAME="__DEFAULT";var ar={},ty=class extends Error{constructor(e,n){super(e),this.response=n}},gr=class extends Is{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,n,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=Ta.get(`file:${e}`);if(a!==void 0){this.manager.itemStart(e),setTimeout(()=>{n&&n(a),this.manager.itemEnd(e)},0);return}if(ar[e]!==void 0){ar[e].push({onLoad:n,onProgress:i,onError:s});return}ar[e]=[],ar[e].push({onLoad:n,onProgress:i,onError:s});let r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ee("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=ar[e],f=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=u?parseInt(u):0,g=d!==0,b=0,m=new ReadableStream({start(p){_();function _(){f.read().then(({done:x,value:v})=>{if(x)p.close();else{b+=v.byteLength;let M=new ProgressEvent("progress",{lengthComputable:g,loaded:b,total:d});for(let E=0,w=h.length;E<w;E++){let y=h[E];y.onProgress&&y.onProgress(M)}p.enqueue(v),_()}},x=>{p.error(x)})}}});return new Response(m)}else throw new ty(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let f=/charset="?([^;"\s]*)"?/i.exec(o),u=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(u);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Ta.add(`file:${e}`,c);let h=ar[e];delete ar[e];for(let f=0,u=h.length;f<u;f++){let d=h[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=ar[e];if(h===void 0)throw this.manager.itemError(e),c;delete ar[e];for(let f=0,u=h.length;f<u;f++){let d=h[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Lc=new WeakMap,am=class extends Is{constructor(e){super(e)}load(e,n,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,r=Ta.get(`image:${e}`);if(r!==void 0){if(r.complete===!0)a.manager.itemStart(e),setTimeout(function(){n&&n(r),a.manager.itemEnd(e)},0);else{let f=Lc.get(r);f===void 0&&(f=[],Lc.set(r,f)),f.push({onLoad:n,onError:s})}return r}let o=zc("img");function l(){h(),n&&n(this);let f=Lc.get(this)||[];for(let u=0;u<f.length;u++){let d=f[u];d.onLoad&&d.onLoad(this)}Lc.delete(this),a.manager.itemEnd(e)}function c(f){h(),s&&s(f),Ta.remove(`image:${e}`);let u=Lc.get(this)||[];for(let d=0;d<u.length;d++){let g=u[d];g.onError&&g.onError(f)}Lc.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ta.add(`image:${e}`,o),a.manager.itemStart(e),o.src=e,o}};var fl=class extends Is{constructor(e){super(e)}load(e,n,i,s){let a=new ei,r=new am(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){a.image=o,a.needsUpdate=!0,n!==void 0&&n(a)},i,s),a}},dl=class extends pn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}};var qv=new qe,rA=new D,oA=new D,Vh=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.mapType=qi,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qc,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let n=this.camera,i=this.matrix;rA.setFromMatrixPosition(e.matrixWorld),n.position.copy(rA),oA.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(oA),n.updateMatrixWorld(),qv.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qv,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Fc||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(qv)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Cp=new D,Dp=new vi,Ea=new D,kh=class extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=Zs,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Cp,Dp,Ea),Ea.x===1&&Ea.y===1&&Ea.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cp,Dp,Ea.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Cp,Dp,Ea),Ea.x===1&&Ea.y===1&&Ea.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cp,Dp,Ea.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ro=new D,lA=new Ce,cA=new Ce,Dn=class extends kh{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let n=.5*this.getFilmHeight()/e;this.fov=ul*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ic*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ul*2*Math.atan(Math.tan(Ic*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ro.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ro.x,ro.y).multiplyScalar(-e/ro.z),ro.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ro.x,ro.y).multiplyScalar(-e/ro.z)}getViewSize(e,n){return this.getViewBounds(e,lA,cA),n.subVectors(cA,lA)}setViewOffset(e,n,i,s,a,r){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,n=e*Math.tan(Ic*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},ny=class extends Vh{constructor(){super(new Dn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let n=this.camera,i=ul*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,a=e.distance||n.far;(i!==n.fov||s!==n.aspect||a!==n.far)&&(n.fov=i,n.aspect=s,n.far=a,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Xh=class extends dl{constructor(e,n,i=0,s=Math.PI/3,a=0,r=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.distance=i,this.angle=s,this.penumbra=a,this.decay=r,this.map=null,this.shadow=new ny}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let n=super.toJSON(e);return n.object.distance=this.distance,n.object.angle=this.angle,n.object.decay=this.decay,n.object.penumbra=this.penumbra,n.object.target=this.target.uuid,this.map&&this.map.isTexture&&(n.object.map=this.map.toJSON(e).uuid),n.object.shadow=this.shadow.toJSON(),n}},iy=class extends Vh{constructor(){super(new Dn(90,1,.5,500)),this.isPointLightShadow=!0}},Wh=class extends dl{constructor(e,n,i=0,s=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new iy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}},go=class extends kh{constructor(e=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-e,r=i+e,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},sy=class extends Vh{constructor(){super(new go(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},pl=class extends dl{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.shadow=new sy}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}},qh=class extends dl{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}};var ys=class{static extractUrlBase(e){let n=e.lastIndexOf("/");return n===-1?"./":e.slice(0,n+1)}static resolveURL(e,n){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(n)&&/^\//.test(e)&&(n=n.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:n+e)}};var Yv=new WeakMap,Yh=class extends Is{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ee("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ee("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,n,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,r=Ta.get(`image-bitmap:${e}`);if(r!==void 0){if(a.manager.itemStart(e),r.then){r.then(c=>{Yv.has(r)===!0?(s&&s(Yv.get(r)),a.manager.itemError(e),a.manager.itemEnd(e)):(n&&n(c),a.manager.itemEnd(e))});return}setTimeout(function(){n&&n(r),a.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(c){Ta.add(`image-bitmap:${e}`,c),n&&n(c),a.manager.itemEnd(e)}).catch(function(c){s&&s(c),Yv.set(l,c),Ta.remove(`image-bitmap:${e}`),a.manager.itemError(e),a.manager.itemEnd(e)});Ta.add(`image-bitmap:${e}`,l),a.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Oc=-90,Uc=1,rm=class extends pn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Dn(Oc,Uc,e,n);s.layers=this.layers,this.add(s);let a=new Dn(Oc,Uc,e,n);a.layers=this.layers,this.add(a);let r=new Dn(Oc,Uc,e,n);r.layers=this.layers,this.add(r);let o=new Dn(Oc,Uc,e,n);o.layers=this.layers,this.add(o);let l=new Dn(Oc,Uc,e,n);l.layers=this.layers,this.add(l);let c=new Dn(Oc,Uc,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(e===Zs)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(f,u,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},om=class extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Dy="\\[\\]\\.:\\/",zD=new RegExp("["+Dy+"]","g"),Ny="[^"+Dy+"]",HD="[^"+Dy.replace("\\.","")+"]",GD=/((?:WC+[\/:])*)/.source.replace("WC",Ny),VD=/(WCOD+)?/.source.replace("WCOD",HD),kD=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ny),XD=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ny),WD=new RegExp("^"+GD+VD+kD+XD+"$"),qD=["material","materials","bones","map"],ay=class{constructor(e,n,i){let s=i||Yt.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,s)}getValue(e,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,n)}setValue(e,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}},Yt=class t{constructor(e,n,i){this.path=n,this.parsedPath=i||t.parseTrackName(n),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new t.Composite(e,n,i):new t(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(zD,"")}static parseTrackName(e){let n=WD.exec(e);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);qD.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)e[n++]=i[s]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(e||(e=t.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ee("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!e.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Fe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Fe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Fe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Fe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Fe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let r=e[s];if(r===void 0){let c=n.nodeName;Fe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Yt.Composite=ay;Yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Yt.prototype.GetterByBindingType=[Yt.prototype._getValue_direct,Yt.prototype._getValue_array,Yt.prototype._getValue_arrayElement,Yt.prototype._getValue_toArray];Yt.prototype.SetterByBindingTypeAndVersioning=[[Yt.prototype._setValue_direct,Yt.prototype._setValue_direct_setNeedsUpdate,Yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_array,Yt.prototype._setValue_array_setNeedsUpdate,Yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_arrayElement,Yt.prototype._setValue_arrayElement_setNeedsUpdate,Yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_fromArray,Yt.prototype._setValue_fromArray_setNeedsUpdate,Yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var DP=new Float32Array(1);var uA=new qe,Zh=class{constructor(e,n,i=0,s=1/0){this.ray=new wa(e,n),this.near=i,this.far=s,this.camera=null,this.layers=new Vc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Fe("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return uA.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(uA),this}intersectObject(e,n=!0,i=[]){return ry(e,this,i,n),i.sort(hA),i}intersectObjects(e,n=!0,i=[]){for(let s=0,a=e.length;s<a;s++)ry(e[s],this,i,n);return i.sort(hA),i}};function hA(t,e){return t.distance-e.distance}function ry(t,e,n,i){let s=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(s=!1),s===!0&&i===!0){let a=t.children;for(let r=0,o=a.length;r<o;r++)ry(a[r],e,n,!0)}}var Kh=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ee("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}},_r=class{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=it(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(it(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var By=class By{constructor(e,n,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,s){let a=this.elements;return a[0]=e,a[2]=n,a[1]=i,a[3]=s,this}};By.prototype.isMatrix2=!0;var oy=By;var jh=class extends Ri{constructor(e=10,n=10,i=4473924,s=8947848){i=new Oe(i),s=new Oe(s);let a=n/2,r=e/n,o=e/2,l=[],c=[];for(let u=0,d=0,g=-o;u<=n;u++,g+=r){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);let b=u===a?i:s;b.toArray(c,d),d+=3,b.toArray(c,d),d+=3,b.toArray(c,d),d+=3,b.toArray(c,d),d+=3}let h=new ft;h.setAttribute("position",new vt(l,3)),h.setAttribute("color",new vt(c,3));let f=new Gn({vertexColors:!0,toneMapped:!1});super(h,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var Jh=class extends Js{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ee("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Ly(t,e,n,i){let s=YD(i);switch(n){case Ey:return t*e;case mm:return t*e/s.components*s.byteLength;case gm:return t*e/s.components*s.byteLength;case bo:return t*e*2/s.components*s.byteLength;case _m:return t*e*2/s.components*s.byteLength;case Ty:return t*e*3/s.components*s.byteLength;case Ss:return t*e*4/s.components*s.byteLength;case vm:return t*e*4/s.components*s.byteLength;case tf:case nf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case sf:case af:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case xm:case Sm:return Math.max(t,16)*Math.max(e,8)/4;case ym:case bm:return Math.max(t,8)*Math.max(e,8)/2;case Mm:case Em:case Am:case wm:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Tm:case rf:case Rm:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Cm:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Dm:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Nm:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Lm:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Om:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Um:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Im:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Pm:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Bm:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Fm:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case zm:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Hm:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Gm:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Vm:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case km:case Xm:case Wm:return Math.ceil(t/4)*Math.ceil(e/4)*16;case qm:case Ym:return Math.ceil(t/4)*Math.ceil(e/4)*8;case of:case Zm:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function YD(t){switch(t){case qi:case xy:return{byteLength:1,components:1};case jc:case by:case Da:return{byteLength:2,components:1};case dm:case pm:return{byteLength:2,components:4};case ea:case fm:case bs:return{byteLength:4,components:1};case Sy:case My:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Ee("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function xw(){let t=null,e=!1,n=null,i=null;function s(a,r){n(a,r),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){n=a},setContext:function(a){t=a}}}function KD(t){let e=new WeakMap;function n(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=t.HALF_FLOAT:d=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=t.SHORT;else if(c instanceof Uint32Array)d=t.UNSIGNED_INT;else if(c instanceof Int32Array)d=t.INT;else if(c instanceof Int8Array)d=t.BYTE;else if(c instanceof Uint8Array)d=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){let h=l.array,f=l.updateRanges;if(t.bindBuffer(c,o),f.length===0)t.bufferSubData(c,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){let g=f[u],b=f[d];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++u,f[u]=b)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){let b=f[d];t.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var jD=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,JD=`#ifdef USE_ALPHAHASH
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
#endif`,QD=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$D=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eN=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tN=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nN=`#ifdef USE_AOMAP
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
#endif`,iN=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sN=`#ifdef USE_BATCHING
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
#endif`,aN=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rN=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oN=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lN=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cN=`#ifdef USE_IRIDESCENCE
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
#endif`,uN=`#ifdef USE_BUMPMAP
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
#endif`,hN=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fN=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dN=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pN=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mN=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gN=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_N=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vN=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,yN=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,xN=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bN=`vec3 transformedNormal = objectNormal;
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
#endif`,SN=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,MN=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,EN=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,TN=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,AN="gl_FragColor = linearToOutputTexel( gl_FragColor );",wN=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,RN=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,CN=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,DN=`#ifdef USE_ENVMAP
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
#endif`,NN=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,LN=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ON=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,UN=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,IN=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,PN=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BN=`#ifdef USE_GRADIENTMAP
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
}`,FN=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zN=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,HN=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,GN=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif
#include <lightprobes_pars_fragment>`,VN=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
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
#endif`,kN=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,XN=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,WN=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qN=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,YN=`PhysicalMaterial material;
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
#endif`,ZN=`uniform sampler2D dfgLUT;
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
		return 0.5 / max( gv + gl, EPSILON );
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
}`,KN=`
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jN=`#if defined( RE_IndirectDiffuse )
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
#endif`,JN=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,QN=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,$N=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eL=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tL=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nL=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iL=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sL=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aL=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rL=`#if defined( USE_POINTS_UV )
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
#endif`,oL=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lL=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cL=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uL=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hL=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fL=`#ifdef USE_MORPHTARGETS
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
#endif`,dL=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pL=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mL=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_L=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vL=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,yL=`#ifdef USE_NORMALMAP
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
#endif`,xL=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bL=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,SL=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ML=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,EL=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,TL=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,AL=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wL=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RL=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,CL=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,DL=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,NL=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,LL=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,OL=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,UL=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,IL=`float getShadowMask() {
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
}`,PL=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BL=`#ifdef USE_SKINNING
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
#endif`,FL=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zL=`#ifdef USE_SKINNING
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
#endif`,HL=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,GL=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,VL=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kL=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,XL=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,WL=`#ifdef USE_TRANSMISSION
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
#endif`,qL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KL=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,jL=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,JL=`uniform sampler2D t2D;
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
}`,QL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$L=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eO=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tO=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nO=`#include <common>
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
}`,iO=`#if DEPTH_PACKING == 3200
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
}`,sO=`#define DISTANCE
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
}`,aO=`#define DISTANCE
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
void main() {
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
}`,rO=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oO=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lO=`uniform float scale;
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
}`,cO=`uniform vec3 diffuse;
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
}`,uO=`#include <common>
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
}`,hO=`uniform vec3 diffuse;
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
}`,fO=`#define LAMBERT
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
}`,dO=`#define LAMBERT
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
}`,pO=`#define MATCAP
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
}`,mO=`#define MATCAP
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
}`,gO=`#define NORMAL
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
}`,_O=`#define NORMAL
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
}`,vO=`#define PHONG
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
}`,yO=`#define PHONG
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
}`,xO=`#define STANDARD
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
}`,bO=`#define STANDARD
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
}`,SO=`#define TOON
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
}`,MO=`#define TOON
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
}`,EO=`uniform float size;
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
}`,TO=`uniform vec3 diffuse;
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
}`,AO=`#include <common>
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
}`,wO=`uniform vec3 color;
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
}`,RO=`uniform float rotation;
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
}`,CO=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:jD,alphahash_pars_fragment:JD,alphamap_fragment:QD,alphamap_pars_fragment:$D,alphatest_fragment:eN,alphatest_pars_fragment:tN,aomap_fragment:nN,aomap_pars_fragment:iN,batching_pars_vertex:sN,batching_vertex:aN,begin_vertex:rN,beginnormal_vertex:oN,bsdfs:lN,iridescence_fragment:cN,bumpmap_pars_fragment:uN,clipping_planes_fragment:hN,clipping_planes_pars_fragment:fN,clipping_planes_pars_vertex:dN,clipping_planes_vertex:pN,color_fragment:mN,color_pars_fragment:gN,color_pars_vertex:_N,color_vertex:vN,common:yN,cube_uv_reflection_fragment:xN,defaultnormal_vertex:bN,displacementmap_pars_vertex:SN,displacementmap_vertex:MN,emissivemap_fragment:EN,emissivemap_pars_fragment:TN,colorspace_fragment:AN,colorspace_pars_fragment:wN,envmap_fragment:RN,envmap_common_pars_fragment:CN,envmap_pars_fragment:DN,envmap_pars_vertex:NN,envmap_physical_pars_fragment:VN,envmap_vertex:LN,fog_vertex:ON,fog_pars_vertex:UN,fog_fragment:IN,fog_pars_fragment:PN,gradientmap_pars_fragment:BN,lightmap_pars_fragment:FN,lights_lambert_fragment:zN,lights_lambert_pars_fragment:HN,lights_pars_begin:GN,lights_toon_fragment:kN,lights_toon_pars_fragment:XN,lights_phong_fragment:WN,lights_phong_pars_fragment:qN,lights_physical_fragment:YN,lights_physical_pars_fragment:ZN,lights_fragment_begin:KN,lights_fragment_maps:jN,lights_fragment_end:JN,lightprobes_pars_fragment:QN,logdepthbuf_fragment:$N,logdepthbuf_pars_fragment:eL,logdepthbuf_pars_vertex:tL,logdepthbuf_vertex:nL,map_fragment:iL,map_pars_fragment:sL,map_particle_fragment:aL,map_particle_pars_fragment:rL,metalnessmap_fragment:oL,metalnessmap_pars_fragment:lL,morphinstance_vertex:cL,morphcolor_vertex:uL,morphnormal_vertex:hL,morphtarget_pars_vertex:fL,morphtarget_vertex:dL,normal_fragment_begin:pL,normal_fragment_maps:mL,normal_pars_fragment:gL,normal_pars_vertex:_L,normal_vertex:vL,normalmap_pars_fragment:yL,clearcoat_normal_fragment_begin:xL,clearcoat_normal_fragment_maps:bL,clearcoat_pars_fragment:SL,iridescence_pars_fragment:ML,opaque_fragment:EL,packing:TL,premultiplied_alpha_fragment:AL,project_vertex:wL,dithering_fragment:RL,dithering_pars_fragment:CL,roughnessmap_fragment:DL,roughnessmap_pars_fragment:NL,shadowmap_pars_fragment:LL,shadowmap_pars_vertex:OL,shadowmap_vertex:UL,shadowmask_pars_fragment:IL,skinbase_vertex:PL,skinning_pars_vertex:BL,skinning_vertex:FL,skinnormal_vertex:zL,specularmap_fragment:HL,specularmap_pars_fragment:GL,tonemapping_fragment:VL,tonemapping_pars_fragment:kL,transmission_fragment:XL,transmission_pars_fragment:WL,uv_pars_fragment:qL,uv_pars_vertex:YL,uv_vertex:ZL,worldpos_vertex:KL,background_vert:jL,background_frag:JL,backgroundCube_vert:QL,backgroundCube_frag:$L,cube_vert:eO,cube_frag:tO,depth_vert:nO,depth_frag:iO,distance_vert:sO,distance_frag:aO,equirect_vert:rO,equirect_frag:oO,linedashed_vert:lO,linedashed_frag:cO,meshbasic_vert:uO,meshbasic_frag:hO,meshlambert_vert:fO,meshlambert_frag:dO,meshmatcap_vert:pO,meshmatcap_frag:mO,meshnormal_vert:gO,meshnormal_frag:_O,meshphong_vert:vO,meshphong_frag:yO,meshphysical_vert:xO,meshphysical_frag:bO,meshtoon_vert:SO,meshtoon_frag:MO,points_vert:EO,points_frag:TO,shadow_vert:AO,shadow_frag:wO,sprite_vert:RO,sprite_frag:CO},me={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},La={basic:{uniforms:yi([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:yi([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Oe(0)},envMapIntensity:{value:1}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:yi([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:yi([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:yi([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Oe(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:yi([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:yi([me.points,me.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:yi([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:yi([me.common,me.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:yi([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:yi([me.sprite,me.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:yi([me.common,me.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:yi([me.lights,me.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};La.physical={uniforms:yi([La.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};var Qm={r:0,b:0,g:0},DO=new qe,bw=new Ye;bw.set(-1,0,0,0,1,0,0,0,1);function NO(t,e,n,i,s,a){let r=new Oe(0),o=s===!0?0:1,l,c,h=null,f=0,u=null;function d(_){let x=_.isScene===!0?_.background:null;if(x&&x.isTexture){let v=_.backgroundBlurriness>0;x=e.get(x,v)}return x}function g(_){let x=!1,v=d(_);v===null?m(r,o):v&&v.isColor&&(m(v,1),x=!0);let M=t.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(t.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function b(_,x){let v=d(x);v&&(v.isCubeTexture||v.mapping===ef)?(c===void 0&&(c=new Nt(new ur(1,1,1),new vs({name:"BackgroundCubeMaterial",uniforms:_l(La.backgroundCube.uniforms),vertexShader:La.backgroundCube.vertexShader,fragmentShader:La.backgroundCube.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(DO.makeRotationFromEuler(x.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(bw),c.material.toneMapped=et.getTransfer(v.colorSpace)!==Dt,(h!==v||f!==v.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,u=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Nt(new fo(2,2),new vs({name:"BackgroundMaterial",uniforms:_l(La.background.uniforms),vertexShader:La.background.vertexShader,fragmentShader:La.background.fragmentShader,side:js,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=et.getTransfer(v.colorSpace)!==Dt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,u=t.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,x){_.getRGB(Qm,Cy(t)),n.buffers.color.setClear(Qm.r,Qm.g,Qm.b,x,a)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(_,x=1){r.set(_),o=x,m(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,m(r,o)},render:g,addToRenderList:b,dispose:p}}function LO(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=u(null),a=s,r=!1;function o(N,U,X,Y,F){let V=!1,k=f(N,Y,X,U);a!==k&&(a=k,c(a.object)),V=d(N,Y,X,F),V&&g(N,Y,X,F),F!==null&&e.update(F,t.ELEMENT_ARRAY_BUFFER),(V||r)&&(r=!1,v(N,U,X,Y),F!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return t.createVertexArray()}function c(N){return t.bindVertexArray(N)}function h(N){return t.deleteVertexArray(N)}function f(N,U,X,Y){let F=Y.wireframe===!0,V=i[U.id];V===void 0&&(V={},i[U.id]=V);let k=N.isInstancedMesh===!0?N.id:0,$=V[k];$===void 0&&($={},V[k]=$);let te=$[X.id];te===void 0&&(te={},$[X.id]=te);let fe=te[F];return fe===void 0&&(fe=u(l()),te[F]=fe),fe}function u(N){let U=[],X=[],Y=[];for(let F=0;F<n;F++)U[F]=0,X[F]=0,Y[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:X,attributeDivisors:Y,object:N,attributes:{},index:null}}function d(N,U,X,Y){let F=a.attributes,V=U.attributes,k=0,$=X.getAttributes();for(let te in $)if($[te].location>=0){let ge=F[te],xe=V[te];if(xe===void 0&&(te==="instanceMatrix"&&N.instanceMatrix&&(xe=N.instanceMatrix),te==="instanceColor"&&N.instanceColor&&(xe=N.instanceColor)),ge===void 0||ge.attribute!==xe||xe&&ge.data!==xe.data)return!0;k++}return a.attributesNum!==k||a.index!==Y}function g(N,U,X,Y){let F={},V=U.attributes,k=0,$=X.getAttributes();for(let te in $)if($[te].location>=0){let ge=V[te];ge===void 0&&(te==="instanceMatrix"&&N.instanceMatrix&&(ge=N.instanceMatrix),te==="instanceColor"&&N.instanceColor&&(ge=N.instanceColor));let xe={};xe.attribute=ge,ge&&ge.data&&(xe.data=ge.data),F[te]=xe,k++}a.attributes=F,a.attributesNum=k,a.index=Y}function b(){let N=a.newAttributes;for(let U=0,X=N.length;U<X;U++)N[U]=0}function m(N){p(N,0)}function p(N,U){let X=a.newAttributes,Y=a.enabledAttributes,F=a.attributeDivisors;X[N]=1,Y[N]===0&&(t.enableVertexAttribArray(N),Y[N]=1),F[N]!==U&&(t.vertexAttribDivisor(N,U),F[N]=U)}function _(){let N=a.newAttributes,U=a.enabledAttributes;for(let X=0,Y=U.length;X<Y;X++)U[X]!==N[X]&&(t.disableVertexAttribArray(X),U[X]=0)}function x(N,U,X,Y,F,V,k){k===!0?t.vertexAttribIPointer(N,U,X,F,V):t.vertexAttribPointer(N,U,X,Y,F,V)}function v(N,U,X,Y){b();let F=Y.attributes,V=X.getAttributes(),k=U.defaultAttributeValues;for(let $ in V){let te=V[$];if(te.location>=0){let fe=F[$];if(fe===void 0&&($==="instanceMatrix"&&N.instanceMatrix&&(fe=N.instanceMatrix),$==="instanceColor"&&N.instanceColor&&(fe=N.instanceColor)),fe!==void 0){let ge=fe.normalized,xe=fe.itemSize,dt=e.get(fe);if(dt===void 0)continue;let en=dt.buffer,pt=dt.type,J=dt.bytesPerElement,re=pt===t.INT||pt===t.UNSIGNED_INT||fe.gpuType===fm;if(fe.isInterleavedBufferAttribute){let ee=fe.data,Ie=ee.stride,Ve=fe.offset;if(ee.isInstancedInterleavedBuffer){for(let we=0;we<te.locationSize;we++)p(te.location+we,ee.meshPerAttribute);N.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let we=0;we<te.locationSize;we++)m(te.location+we);t.bindBuffer(t.ARRAY_BUFFER,en);for(let we=0;we<te.locationSize;we++)x(te.location+we,xe/te.locationSize,pt,ge,Ie*J,(Ve+xe/te.locationSize*we)*J,re)}else{if(fe.isInstancedBufferAttribute){for(let ee=0;ee<te.locationSize;ee++)p(te.location+ee,fe.meshPerAttribute);N.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ee=0;ee<te.locationSize;ee++)m(te.location+ee);t.bindBuffer(t.ARRAY_BUFFER,en);for(let ee=0;ee<te.locationSize;ee++)x(te.location+ee,xe/te.locationSize,pt,ge,xe*J,xe/te.locationSize*ee*J,re)}}else if(k!==void 0){let ge=k[$];if(ge!==void 0)switch(ge.length){case 2:t.vertexAttrib2fv(te.location,ge);break;case 3:t.vertexAttrib3fv(te.location,ge);break;case 4:t.vertexAttrib4fv(te.location,ge);break;default:t.vertexAttrib1fv(te.location,ge)}}}}_()}function M(){A();for(let N in i){let U=i[N];for(let X in U){let Y=U[X];for(let F in Y){let V=Y[F];for(let k in V)h(V[k].object),delete V[k];delete Y[F]}}delete i[N]}}function E(N){if(i[N.id]===void 0)return;let U=i[N.id];for(let X in U){let Y=U[X];for(let F in Y){let V=Y[F];for(let k in V)h(V[k].object),delete V[k];delete Y[F]}}delete i[N.id]}function w(N){for(let U in i){let X=i[U];for(let Y in X){let F=X[Y];if(F[N.id]===void 0)continue;let V=F[N.id];for(let k in V)h(V[k].object),delete V[k];delete F[N.id]}}}function y(N){for(let U in i){let X=i[U],Y=N.isInstancedMesh===!0?N.id:0,F=X[Y];if(F!==void 0){for(let V in F){let k=F[V];for(let $ in k)h(k[$].object),delete k[$];delete F[V]}delete X[Y],Object.keys(X).length===0&&delete i[U]}}}function A(){C(),r=!0,a!==s&&(a=s,c(a.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:C,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:w,initAttributes:b,enableAttribute:m,disableUnusedAttributes:_}}function OO(t,e,n){let i;function s(l){i=l}function a(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,h){h!==0&&(t.drawArraysInstanced(i,l,c,h),n.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];n.update(u,i,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function UO(t,e,n,i){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(w){return!(w!==Ss&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let y=w===Da&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==qi&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==bs&&!y)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);h!==c&&(Ee("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Ee("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),M=t.getParameter(t.MAX_SAMPLES),E=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:x,maxFragmentUniforms:v,maxSamples:M,samples:E}}function IO(t){let e=this,n=null,i=0,s=!1,a=!1,r=new Hi,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||i!==0||s;return s=u,i=f.length,d},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,u){n=h(f,u,0)},this.setState=function(f,u,d){let g=f.clippingPlanes,b=f.clipIntersection,m=f.clipShadows,p=t.get(f);if(!s||g===null||g.length===0||a&&!m)a?h(null):c();else{let _=a?0:i,x=_*4,v=p.clippingState||null;l.value=v,v=h(g,u,x,d);for(let M=0;M!==x;++M)v[M]=n[M];p.clippingState=v,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,u,d,g){let b=f!==null?f.length:0,m=null;if(b!==0){if(m=l.value,g!==!0||m===null){let p=d+b*4,_=u.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=d;x!==b;++x,v+=4)r.copy(f[x]).applyMatrix4(_,o),r.normal.toArray(m,v),m[v+3]=r.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}var So=4,QA=[.125,.215,.35,.446,.526,.582],vl=20,PO=256,cf=new go,$A=new Oe,Fy=null,zy=0,Hy=0,Gy=!1,BO=new D,eg=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=BO}=a;Fy=this._renderer.getRenderTarget(),zy=this._renderer.getActiveCubeFace(),Hy=this._renderer.getActiveMipmapLevel(),Gy=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nw(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tw(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Fy,zy,Hy),this._renderer.xr.enabled=Gy,e.scissorTest=!1,$c(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===yo||e.mapping===ml?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fy=this._renderer.getRenderTarget(),zy=this._renderer.getActiveCubeFace(),Hy=this._renderer.getActiveMipmapLevel(),Gy=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:Da,format:Ss,colorSpace:hi,depthBuffer:!1},s=ew(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ew(e,n,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=FO(a)),this._blurMaterial=HO(a,e,n),this._ggxMaterial=zO(a,e,n)}return s}_compileMaterial(e){let n=new Nt(new ft,e);this._renderer.compile(n,cf)}_sceneToCubeUV(e,n,i,s,a){let l=new Dn(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor($A),f.toneMapping=$s,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Nt(new ur,new Ln({name:"PMREM.Background",side:Ci,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,m=b.material,p=!1,_=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,p=!0):(m.color.copy($A),p=!0);for(let x=0;x<6;x++){let v=x%3;v===0?(l.up.set(0,c[x],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+h[x],a.y,a.z)):v===1?(l.up.set(0,0,c[x]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+h[x],a.z)):(l.up.set(0,c[x],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+h[x]));let M=this._cubeSize;$c(s,v*M,x>2?M:0,M,M),f.setRenderTarget(s),p&&f.render(b,l),f.render(e,l)}f.toneMapping=d,f.autoClear=u,e.background=_}_textureToCubeUV(e,n){let i=this._renderer,s=e.mapping===yo||e.mapping===ml;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nw()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tw());let a=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=a;let o=a.uniforms;o.envMap.value=e;let l=this._cubeSize;$c(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,cf)}_applyPMREM(e){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(e,a-1,a);n.autoClear=i}_applyGGXFilter(e,n,i){let s=this._renderer,a=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;let l=r.uniforms,c=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=0+c*1.25,d=f*u,{_lodMax:g}=this,b=this._sizeLods[i],m=3*b*(i>g-So?i-g+So:0),p=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=g-n,$c(a,m,p,3*b,2*b),s.setRenderTarget(a),s.render(o,cf),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=g-i,$c(e,m,p,3*b,2*b),s.setRenderTarget(e),s.render(o,cf)}_blur(e,n,i,s,a){let r=this._pingPongRenderTarget;this._halfBlur(e,r,n,i,s,"latitudinal",a),this._halfBlur(r,e,i,i,s,"longitudinal",a)}_halfBlur(e,n,i,s,a,r,o){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&Fe("blur direction must be either latitudinal or longitudinal!");let h=3,f=this._lodMeshes[s];f.material=c;let u=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*d):2*Math.PI/(2*vl-1),b=a/g,m=isFinite(a)?1+Math.floor(h*b):vl;m>vl&&Ee(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vl}`);let p=[],_=0;for(let w=0;w<vl;++w){let y=w/b,A=Math.exp(-y*y/2);p.push(A),w===0?_+=A:w<m&&(_+=2*A)}for(let w=0;w<p.length;w++)p[w]=p[w]/_;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:x}=this;u.dTheta.value=g,u.mipInt.value=x-i;let v=this._sizeLods[s],M=3*v*(s>x-So?s-x+So:0),E=4*(this._cubeSize-v);$c(n,M,E,3*v,2*v),l.setRenderTarget(n),l.render(f,cf)}};function FO(t){let e=[],n=[],i=[],s=t,a=t-So+1+QA.length;for(let r=0;r<a;r++){let o=Math.pow(2,s);e.push(o);let l=1/o;r>t-So?l=QA[r-t+So-1]:r===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,g=6,b=3,m=2,p=1,_=new Float32Array(b*g*d),x=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let E=0;E<d;E++){let w=E%3*2/3-1,y=E>2?0:-1,A=[w,y,0,w+2/3,y,0,w+2/3,y+1,0,w,y,0,w+2/3,y+1,0,w,y+1,0];_.set(A,b*g*E),x.set(u,m*g*E);let C=[E,E,E,E,E,E];v.set(C,p*g*E)}let M=new ft;M.setAttribute("position",new tn(_,b)),M.setAttribute("uv",new tn(x,m)),M.setAttribute("faceIndex",new tn(v,p)),i.push(new Nt(M,null)),s>So&&s--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function ew(t,e,n){let i=new _s(t,e,n);return i.texture.mapping=ef,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $c(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function zO(t,e,n){return new vs({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:PO,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ig(),fragmentShader:`

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
		`,blending:Ca,depthTest:!1,depthWrite:!1})}function HO(t,e,n){let i=new Float32Array(vl),s=new D(0,1,0);return new vs({name:"SphericalGaussianBlur",defines:{n:vl,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ig(),fragmentShader:`

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
		`,blending:Ca,depthTest:!1,depthWrite:!1})}function tw(){return new vs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ig(),fragmentShader:`

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
		`,blending:Ca,depthTest:!1,depthWrite:!1})}function nw(){return new vs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ig(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ca,depthTest:!1,depthWrite:!1})}function ig(){return`

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
	`}var tg=class extends _s{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Uh(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ur(5,5,5),a=new vs({name:"CubemapFromEquirect",uniforms:_l(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ci,blending:Ca});a.uniforms.tEquirect.value=n;let r=new Nt(s,a),o=n.minFilter;return n.minFilter===xs&&(n.minFilter=dn),new rm(1,10,this).update(e,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){let a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(n,i,s);e.setRenderTarget(a)}};function GO(t){let e=new WeakMap,n=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?r(u):a(u)}function a(u){if(u&&u.isTexture){let d=u.mapping;if(d===cm||d===um)if(e.has(u)){let g=e.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let b=new tg(g.height);return b.fromEquirectangularTexture(t,u),e.set(u,b),u.addEventListener("dispose",c),o(b.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){let d=u.mapping,g=d===cm||d===um,b=d===yo||d===ml;if(g||b){let m=n.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new eg(t)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),m.texture;if(m!==void 0)return m.texture;{let _=u.image;return g&&_&&_.height>0||b&&_&&l(_)?(i===null&&(i=new eg(t)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,d){return d===cm?u.mapping=yo:d===um&&(u.mapping=ml),u}function l(u){let d=0,g=6;for(let b=0;b<g;b++)u[b]!==void 0&&d++;return d===g}function c(u){let d=u.target;d.removeEventListener("dispose",c);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let g=n.get(d);g!==void 0&&(n.delete(d),g.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function VO(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&al("WebGLRenderer: "+i+" extension not supported."),s}}}function kO(t,e,n,i){let s={},a=new WeakMap;function r(f){let u=f.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",r),delete s[u.id];let d=a.get(u);d&&(e.remove(d),a.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",r),s[u.id]=!0,n.memory.geometries++),u}function l(f){let u=f.attributes;for(let d in u)e.update(u[d],t.ARRAY_BUFFER)}function c(f){let u=[],d=f.index,g=f.attributes.position,b=0;if(g===void 0)return;if(d!==null){let _=d.array;b=d.version;for(let x=0,v=_.length;x<v;x+=3){let M=_[x+0],E=_[x+1],w=_[x+2];u.push(M,E,E,w,w,M)}}else{let _=g.array;b=g.version;for(let x=0,v=_.length/3-1;x<v;x+=3){let M=x+0,E=x+1,w=x+2;u.push(M,E,E,w,w,M)}}let m=new(g.count>=65535?Rh:wh)(u,1);m.version=b;let p=a.get(f);p&&e.remove(p),a.set(f,m)}function h(f){let u=a.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return a.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function XO(t,e,n){let i;function s(f){i=f}let a,r;function o(f){a=f.type,r=f.bytesPerElement}function l(f,u){t.drawElements(i,u,a,f*r),n.update(u,i,1)}function c(f,u,d){d!==0&&(t.drawElementsInstanced(i,u,a,f*r,d),n.update(u,i,d))}function h(f,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,a,f,0,d);let b=0;for(let m=0;m<d;m++)b+=u[m];n.update(b,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function WO(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case t.TRIANGLES:n.triangles+=o*(a/3);break;case t.LINES:n.lines+=o*(a/2);break;case t.LINE_STRIP:n.lines+=o*(a-1);break;case t.LINE_LOOP:n.lines+=o*a;break;case t.POINTS:n.points+=o*a;break;default:Fe("WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function qO(t,e,n){let i=new WeakMap,s=new zt;function a(r,o,l){let c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==f){let A=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],x=0;d===!0&&(x=1),g===!0&&(x=2),b===!0&&(x=3);let v=o.attributes.position.count*x,M=1;v>e.maxTextureSize&&(M=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let E=new Float32Array(v*M*4*f),w=new Th(E,v,M,f);w.type=bs,w.needsUpdate=!0;let y=x*4;for(let C=0;C<f;C++){let N=m[C],U=p[C],X=_[C],Y=v*M*4*C;for(let F=0;F<N.count;F++){let V=F*y;d===!0&&(s.fromBufferAttribute(N,F),E[Y+V+0]=s.x,E[Y+V+1]=s.y,E[Y+V+2]=s.z,E[Y+V+3]=0),g===!0&&(s.fromBufferAttribute(U,F),E[Y+V+4]=s.x,E[Y+V+5]=s.y,E[Y+V+6]=s.z,E[Y+V+7]=0),b===!0&&(s.fromBufferAttribute(X,F),E[Y+V+8]=s.x,E[Y+V+9]=s.y,E[Y+V+10]=s.z,E[Y+V+11]=X.itemSize===4?s.w:1)}}u={count:f,texture:w,size:new Ce(v,M)},i.set(o,u),o.addEventListener("dispose",A)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",r.morphTexture,n);else{let d=0;for(let b=0;b<c.length;b++)d+=c[b];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:a}}function YO(t,e,n,i,s){let a=new WeakMap;function r(c){let h=s.render.frame,f=c.geometry,u=e.get(c,f);if(a.get(u)!==h&&(e.update(u),a.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==h&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),a.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;a.get(d)!==h&&(d.update(),a.set(d,h))}return u}function o(){a=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:r,dispose:o}}var ZO={[dy]:"LINEAR_TONE_MAPPING",[py]:"REINHARD_TONE_MAPPING",[my]:"CINEON_TONE_MAPPING",[$h]:"ACES_FILMIC_TONE_MAPPING",[_y]:"AGX_TONE_MAPPING",[vy]:"NEUTRAL_TONE_MAPPING",[gy]:"CUSTOM_TONE_MAPPING"};function KO(t,e,n,i,s,a){let r=new _s(e,n,{type:t,depthBuffer:s,stencilBuffer:a,samples:i?4:0,depthTexture:s?new cr(e,n):void 0}),o=new _s(e,n,{type:Da,depthBuffer:!1,stencilBuffer:!1}),l=new ft;l.setAttribute("position",new vt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new vt([0,2,0,0,2,0],2));let c=new jp({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Nt(l,c),f=new go(-1,1,1,-1,0,1),u=null,d=null,g=!1,b,m=null,p=[],_=!1;this.setSize=function(x,v){r.setSize(x,v),o.setSize(x,v);for(let M=0;M<p.length;M++){let E=p[M];E.setSize&&E.setSize(x,v)}},this.setEffects=function(x){p=x,_=p.length>0&&p[0].isRenderPass===!0;let v=r.width,M=r.height;for(let E=0;E<p.length;E++){let w=p[E];w.setSize&&w.setSize(v,M)}},this.begin=function(x,v){if(g||x.toneMapping===$s&&p.length===0)return!1;if(m=v,v!==null){let M=v.width,E=v.height;(r.width!==M||r.height!==E)&&this.setSize(M,E)}return _===!1&&x.setRenderTarget(r),b=x.toneMapping,x.toneMapping=$s,!0},this.hasRenderPass=function(){return _},this.end=function(x,v){x.toneMapping=b,g=!0;let M=r,E=o;for(let w=0;w<p.length;w++){let y=p[w];if(y.enabled!==!1&&(y.render(x,E,M,v),y.needsSwap!==!1)){let A=M;M=E,E=A}}if(u!==x.outputColorSpace||d!==x.toneMapping){u=x.outputColorSpace,d=x.toneMapping,c.defines={},et.getTransfer(u)===Dt&&(c.defines.SRGB_TRANSFER="");let w=ZO[d];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=M.texture,x.setRenderTarget(m),x.render(h,f),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),l.dispose(),c.dispose()}}var Sw=new ei,Xy=new cr(1,1),Mw=new Th,Ew=new Xp,Tw=new Uh,iw=[],sw=[],aw=new Float32Array(16),rw=new Float32Array(9),ow=new Float32Array(4);function tu(t,e,n){let i=t[0];if(i<=0||i>0)return t;let s=e*n,a=iw[s];if(a===void 0&&(a=new Float32Array(s),iw[s]=a),e!==0){i.toArray(a,0);for(let r=1,o=0;r!==e;++r)o+=n,t[r].toArray(a,o)}return a}function Vn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function kn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function sg(t,e){let n=sw[e];n===void 0&&(n=new Int32Array(e),sw[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function jO(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function JO(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vn(n,e))return;t.uniform2fv(this.addr,e),kn(n,e)}}function QO(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Vn(n,e))return;t.uniform3fv(this.addr,e),kn(n,e)}}function $O(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vn(n,e))return;t.uniform4fv(this.addr,e),kn(n,e)}}function eU(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Vn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),kn(n,e)}else{if(Vn(n,i))return;ow.set(i),t.uniformMatrix2fv(this.addr,!1,ow),kn(n,i)}}function tU(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Vn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),kn(n,e)}else{if(Vn(n,i))return;rw.set(i),t.uniformMatrix3fv(this.addr,!1,rw),kn(n,i)}}function nU(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Vn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),kn(n,e)}else{if(Vn(n,i))return;aw.set(i),t.uniformMatrix4fv(this.addr,!1,aw),kn(n,i)}}function iU(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function sU(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vn(n,e))return;t.uniform2iv(this.addr,e),kn(n,e)}}function aU(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vn(n,e))return;t.uniform3iv(this.addr,e),kn(n,e)}}function rU(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vn(n,e))return;t.uniform4iv(this.addr,e),kn(n,e)}}function oU(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function lU(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vn(n,e))return;t.uniform2uiv(this.addr,e),kn(n,e)}}function cU(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vn(n,e))return;t.uniform3uiv(this.addr,e),kn(n,e)}}function uU(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vn(n,e))return;t.uniform4uiv(this.addr,e),kn(n,e)}}function hU(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let a;this.type===t.SAMPLER_2D_SHADOW?(Xy.compareFunction=n.isReversedDepthBuffer()?Jm:jm,a=Xy):a=Sw,n.setTexture2D(e||a,s)}function fU(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||Ew,s)}function dU(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||Tw,s)}function pU(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||Mw,s)}function mU(t){switch(t){case 5126:return jO;case 35664:return JO;case 35665:return QO;case 35666:return $O;case 35674:return eU;case 35675:return tU;case 35676:return nU;case 5124:case 35670:return iU;case 35667:case 35671:return sU;case 35668:case 35672:return aU;case 35669:case 35673:return rU;case 5125:return oU;case 36294:return lU;case 36295:return cU;case 36296:return uU;case 35678:case 36198:case 36298:case 36306:case 35682:return hU;case 35679:case 36299:case 36307:return fU;case 35680:case 36300:case 36308:case 36293:return dU;case 36289:case 36303:case 36311:case 36292:return pU}}function gU(t,e){t.uniform1fv(this.addr,e)}function _U(t,e){let n=tu(e,this.size,2);t.uniform2fv(this.addr,n)}function vU(t,e){let n=tu(e,this.size,3);t.uniform3fv(this.addr,n)}function yU(t,e){let n=tu(e,this.size,4);t.uniform4fv(this.addr,n)}function xU(t,e){let n=tu(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function bU(t,e){let n=tu(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function SU(t,e){let n=tu(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function MU(t,e){t.uniform1iv(this.addr,e)}function EU(t,e){t.uniform2iv(this.addr,e)}function TU(t,e){t.uniform3iv(this.addr,e)}function AU(t,e){t.uniform4iv(this.addr,e)}function wU(t,e){t.uniform1uiv(this.addr,e)}function RU(t,e){t.uniform2uiv(this.addr,e)}function CU(t,e){t.uniform3uiv(this.addr,e)}function DU(t,e){t.uniform4uiv(this.addr,e)}function NU(t,e,n){let i=this.cache,s=e.length,a=sg(n,s);Vn(i,a)||(t.uniform1iv(this.addr,a),kn(i,a));let r;this.type===t.SAMPLER_2D_SHADOW?r=Xy:r=Sw;for(let o=0;o!==s;++o)n.setTexture2D(e[o]||r,a[o])}function LU(t,e,n){let i=this.cache,s=e.length,a=sg(n,s);Vn(i,a)||(t.uniform1iv(this.addr,a),kn(i,a));for(let r=0;r!==s;++r)n.setTexture3D(e[r]||Ew,a[r])}function OU(t,e,n){let i=this.cache,s=e.length,a=sg(n,s);Vn(i,a)||(t.uniform1iv(this.addr,a),kn(i,a));for(let r=0;r!==s;++r)n.setTextureCube(e[r]||Tw,a[r])}function UU(t,e,n){let i=this.cache,s=e.length,a=sg(n,s);Vn(i,a)||(t.uniform1iv(this.addr,a),kn(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(e[r]||Mw,a[r])}function IU(t){switch(t){case 5126:return gU;case 35664:return _U;case 35665:return vU;case 35666:return yU;case 35674:return xU;case 35675:return bU;case 35676:return SU;case 5124:case 35670:return MU;case 35667:case 35671:return EU;case 35668:case 35672:return TU;case 35669:case 35673:return AU;case 5125:return wU;case 36294:return RU;case 36295:return CU;case 36296:return DU;case 35678:case 36198:case 36298:case 36306:case 35682:return NU;case 35679:case 36299:case 36307:return LU;case 35680:case 36300:case 36308:case 36293:return OU;case 36289:case 36303:case 36311:case 36292:return UU}}var Wy=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=mU(n.type)}},qy=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=IU(n.type)}},Yy=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(e,n[o.id],i)}}},Vy=/(\w+)(\])?(\[|\.)?/g;function lw(t,e){t.seq.push(e),t.map[e.id]=e}function PU(t,e,n){let i=t.name,s=i.length;for(Vy.lastIndex=0;;){let a=Vy.exec(i),r=Vy.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){lw(n,c===void 0?new Wy(o,t,e):new qy(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new Yy(o),lw(n,f)),n=f}}}var eu=class{constructor(e,n){this.seq=[],this.map={};let i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=e.getActiveUniform(n,r),l=e.getUniformLocation(n,o.name);PU(o,l,this)}let s=[],a=[];for(let r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(e,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(e,i,s)}setOptional(e,n,i){let s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,n){let i=[];for(let s=0,a=e.length;s!==a;++s){let r=e[s];r.id in n&&i.push(r)}return i}};function cw(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var BU=37297,FU=0;function zU(t,e){let n=t.split(`
`),i=[],s=Math.max(e-6,0),a=Math.min(e+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===e?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var uw=new Ye;function HU(t){et._getMatrix(uw,et.workingColorSpace,t);let e=`mat3( ${uw.elements.map(n=>n.toFixed(4))} )`;switch(et.getTransfer(t)){case Mh:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return Ee("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function hw(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),a=(t.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+zU(t.getShaderSource(e),o)}else return a}function GU(t,e){let n=HU(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var VU={[dy]:"Linear",[py]:"Reinhard",[my]:"Cineon",[$h]:"ACESFilmic",[_y]:"AgX",[vy]:"Neutral",[gy]:"Custom"};function kU(t,e){let n=VU[e];return n===void 0?(Ee("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var $m=new D;function XU(){et.getLuminanceCoefficients($m);let t=$m.x.toFixed(4),e=$m.y.toFixed(4),n=$m.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function WU(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hf).join(`
`)}function qU(t){let e=[];for(let n in t){let i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function YU(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=t.getActiveAttrib(e,s),r=a.name,o=1;a.type===t.FLOAT_MAT2&&(o=2),a.type===t.FLOAT_MAT3&&(o=3),a.type===t.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:t.getAttribLocation(e,r),locationSize:o}}return n}function hf(t){return t!==""}function fw(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dw(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ZU=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zy(t){return t.replace(ZU,jU)}var KU=new Map;function jU(t,e){let n=tt[e];if(n===void 0){let i=KU.get(e);if(i!==void 0)n=tt[i],Ee('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Zy(n)}var JU=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pw(t){return t.replace(JU,QU)}function QU(t,e,n,i){let s="";for(let a=parseInt(e);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function mw(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}var $U={[Qh]:"SHADOWMAP_TYPE_PCF",[Zc]:"SHADOWMAP_TYPE_VSM"};function eI(t){return $U[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var tI={[yo]:"ENVMAP_TYPE_CUBE",[ml]:"ENVMAP_TYPE_CUBE",[ef]:"ENVMAP_TYPE_CUBE_UV"};function nI(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":tI[t.envMapMode]||"ENVMAP_TYPE_CUBE"}var iI={[ml]:"ENVMAP_MODE_REFRACTION"};function sI(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":iI[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var aI={[fy]:"ENVMAP_BLENDING_MULTIPLY",[OA]:"ENVMAP_BLENDING_MIX",[UA]:"ENVMAP_BLENDING_ADD"};function rI(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":aI[t.combine]||"ENVMAP_BLENDING_NONE"}function oI(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function lI(t,e,n,i){let s=t.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=eI(n),c=nI(n),h=sI(n),f=rI(n),u=oI(n),d=WU(n),g=qU(a),b=s.createProgram(),m,p,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(hf).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(hf).join(`
`),p.length>0&&(p+=`
`)):(m=[mw(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hf).join(`
`),p=[mw(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==$s?"#define TONE_MAPPING":"",n.toneMapping!==$s?tt.tonemapping_pars_fragment:"",n.toneMapping!==$s?kU("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,GU("linearToOutputTexel",n.outputColorSpace),XU(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(hf).join(`
`)),r=Zy(r),r=fw(r,n),r=dw(r,n),o=Zy(o),o=fw(o,n),o=dw(o,n),r=pw(r),o=pw(o),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===wy?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===wy?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let x=_+m+r,v=_+p+o,M=cw(s,s.VERTEX_SHADER,x),E=cw(s,s.FRAGMENT_SHADER,v);s.attachShader(b,M),s.attachShader(b,E),n.index0AttributeName!==void 0?s.bindAttribLocation(b,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function w(N){if(t.debug.checkShaderErrors){let U=s.getProgramInfoLog(b)||"",X=s.getShaderInfoLog(M)||"",Y=s.getShaderInfoLog(E)||"",F=U.trim(),V=X.trim(),k=Y.trim(),$=!0,te=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,b,M,E);else{let fe=hw(s,M,"vertex"),ge=hw(s,E,"fragment");Fe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+F+`
`+fe+`
`+ge)}else F!==""?Ee("WebGLProgram: Program Info Log:",F):(V===""||k==="")&&(te=!1);te&&(N.diagnostics={runnable:$,programLog:F,vertexShader:{log:V,prefix:m},fragmentShader:{log:k,prefix:p}})}s.deleteShader(M),s.deleteShader(E),y=new eu(s,b),A=YU(s,b)}let y;this.getUniforms=function(){return y===void 0&&w(this),y};let A;this.getAttributes=function(){return A===void 0&&w(this),A};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(b,BU)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=FU++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=M,this.fragmentShader=E,this}var cI=0,Ky=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){let s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let n=this.materialCache.get(e);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let n=this.materialCache,i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){let n=this.shaderCache,i=n.get(e);return i===void 0&&(i=new jy(e),n.set(e,i)),i}},jy=class{constructor(e){this.id=cI++,this.code=e,this.usedTimes=0}};function uI(t){return t===bo||t===rf||t===of}function hI(t,e,n,i,s,a){let r=new Vc,o=new Ky,l=new Set,c=[],h=new Map,f=i.logarithmicDepthBuffer,u=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function b(y,A,C,N,U,X){let Y=N.fog,F=U.geometry,V=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?N.environment:null,k=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,$=e.get(y.envMap||V,k),te=$&&$.mapping===ef?$.image.height:null,fe=d[y.type];y.precision!==null&&(u=i.getMaxPrecision(y.precision),u!==y.precision&&Ee("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let ge=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,xe=ge!==void 0?ge.length:0,dt=0;F.morphAttributes.position!==void 0&&(dt=1),F.morphAttributes.normal!==void 0&&(dt=2),F.morphAttributes.color!==void 0&&(dt=3);let en,pt,J,re;if(fe){let _e=La[fe];en=_e.vertexShader,pt=_e.fragmentShader}else{en=y.vertexShader,pt=y.fragmentShader;let _e=o.getVertexShaderStage(y),Pe=o.getFragmentShaderStage(y);o.update(y,_e,Pe),J=_e.id,re=Pe.id}let ee=t.getRenderTarget(),Ie=t.state.buffers.depth.getReversed(),Ve=U.isInstancedMesh===!0,we=U.isBatchedMesh===!0,nn=!!y.map,at=!!y.matcap,Ht=!!$,yt=!!y.aoMap,lt=!!y.lightMap,mn=!!y.bumpMap&&y.wireframe===!1,ln=!!y.normalMap,yn=!!y.displacementMap,Mn=!!y.emissiveMap,Zt=!!y.metalnessMap,cn=!!y.roughnessMap,O=y.anisotropy>0,Wn=y.clearcoat>0,gt=y.dispersion>0,R=y.iridescence>0,S=y.sheen>0,P=y.transmission>0,H=O&&!!y.anisotropyMap,W=Wn&&!!y.clearcoatMap,ne=Wn&&!!y.clearcoatNormalMap,ie=Wn&&!!y.clearcoatRoughnessMap,Z=R&&!!y.iridescenceMap,K=R&&!!y.iridescenceThicknessMap,oe=S&&!!y.sheenColorMap,be=S&&!!y.sheenRoughnessMap,he=!!y.specularMap,le=!!y.specularColorMap,De=!!y.specularIntensityMap,Ne=P&&!!y.transmissionMap,ze=P&&!!y.thicknessMap,L=!!y.gradientMap,se=!!y.alphaMap,q=y.alphaTest>0,ce=!!y.alphaHash,de=!!y.extensions,Q=$s;y.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Q=t.toneMapping);let Te={shaderID:fe,shaderType:y.type,shaderName:y.name,vertexShader:en,fragmentShader:pt,defines:y.defines,customVertexShaderID:J,customFragmentShaderID:re,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:we,batchingColor:we&&U._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&U.instanceColor!==null,instancingMorph:Ve&&U.morphTexture!==null,outputColorSpace:ee===null?t.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:et.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:nn,matcap:at,envMap:Ht,envMapMode:Ht&&$.mapping,envMapCubeUVHeight:te,aoMap:yt,lightMap:lt,bumpMap:mn,normalMap:ln,displacementMap:yn,emissiveMap:Mn,normalMapObjectSpace:ln&&y.normalMapType===FA,normalMapTangentSpace:ln&&y.normalMapType===Km,packedNormalMap:ln&&y.normalMapType===Km&&uI(y.normalMap.format),metalnessMap:Zt,roughnessMap:cn,anisotropy:O,anisotropyMap:H,clearcoat:Wn,clearcoatMap:W,clearcoatNormalMap:ne,clearcoatRoughnessMap:ie,dispersion:gt,iridescence:R,iridescenceMap:Z,iridescenceThicknessMap:K,sheen:S,sheenColorMap:oe,sheenRoughnessMap:be,specularMap:he,specularColorMap:le,specularIntensityMap:De,transmission:P,transmissionMap:Ne,thicknessMap:ze,gradientMap:L,opaque:y.transparent===!1&&y.blending===rl&&y.alphaToCoverage===!1,alphaMap:se,alphaTest:q,alphaHash:ce,combine:y.combine,mapUv:nn&&g(y.map.channel),aoMapUv:yt&&g(y.aoMap.channel),lightMapUv:lt&&g(y.lightMap.channel),bumpMapUv:mn&&g(y.bumpMap.channel),normalMapUv:ln&&g(y.normalMap.channel),displacementMapUv:yn&&g(y.displacementMap.channel),emissiveMapUv:Mn&&g(y.emissiveMap.channel),metalnessMapUv:Zt&&g(y.metalnessMap.channel),roughnessMapUv:cn&&g(y.roughnessMap.channel),anisotropyMapUv:H&&g(y.anisotropyMap.channel),clearcoatMapUv:W&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:ne&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:K&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:be&&g(y.sheenRoughnessMap.channel),specularMapUv:he&&g(y.specularMap.channel),specularColorMapUv:le&&g(y.specularColorMap.channel),specularIntensityMapUv:De&&g(y.specularIntensityMap.channel),transmissionMapUv:Ne&&g(y.transmissionMap.channel),thicknessMapUv:ze&&g(y.thicknessMap.channel),alphaMapUv:se&&g(y.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ln||O),vertexNormals:!!F.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!F.attributes.uv&&(nn||se),fog:!!Y,useFog:y.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||F.attributes.normal===void 0&&ln===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ie,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:dt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&C.length>0,shadowMapType:t.shadowMap.type,toneMapping:Q,decodeVideoTexture:nn&&y.map.isVideoTexture===!0&&et.getTransfer(y.map.colorSpace)===Dt,decodeVideoTextureEmissive:Mn&&y.emissiveMap.isVideoTexture===!0&&et.getTransfer(y.emissiveMap.colorSpace)===Dt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===On,flipSided:y.side===Ci,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:de&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&y.extensions.multiDraw===!0||we)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Te.vertexUv1s=l.has(1),Te.vertexUv2s=l.has(2),Te.vertexUv3s=l.has(3),l.clear(),Te}function m(y){let A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(let C in y.defines)A.push(C),A.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(p(A,y),_(A,y),A.push(t.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function p(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function _(y,A){r.disableAll(),A.instancing&&r.enable(0),A.instancingColor&&r.enable(1),A.instancingMorph&&r.enable(2),A.matcap&&r.enable(3),A.envMap&&r.enable(4),A.normalMapObjectSpace&&r.enable(5),A.normalMapTangentSpace&&r.enable(6),A.clearcoat&&r.enable(7),A.iridescence&&r.enable(8),A.alphaTest&&r.enable(9),A.vertexColors&&r.enable(10),A.vertexAlphas&&r.enable(11),A.vertexUv1s&&r.enable(12),A.vertexUv2s&&r.enable(13),A.vertexUv3s&&r.enable(14),A.vertexTangents&&r.enable(15),A.anisotropy&&r.enable(16),A.alphaHash&&r.enable(17),A.batching&&r.enable(18),A.dispersion&&r.enable(19),A.batchingColor&&r.enable(20),A.gradientMap&&r.enable(21),A.packedNormalMap&&r.enable(22),A.vertexNormals&&r.enable(23),y.push(r.mask),r.disableAll(),A.fog&&r.enable(0),A.useFog&&r.enable(1),A.flatShading&&r.enable(2),A.logarithmicDepthBuffer&&r.enable(3),A.reversedDepthBuffer&&r.enable(4),A.skinning&&r.enable(5),A.morphTargets&&r.enable(6),A.morphNormals&&r.enable(7),A.morphColors&&r.enable(8),A.premultipliedAlpha&&r.enable(9),A.shadowMapEnabled&&r.enable(10),A.doubleSided&&r.enable(11),A.flipSided&&r.enable(12),A.useDepthPacking&&r.enable(13),A.dithering&&r.enable(14),A.transmission&&r.enable(15),A.sheen&&r.enable(16),A.opaque&&r.enable(17),A.pointsUvs&&r.enable(18),A.decodeVideoTexture&&r.enable(19),A.decodeVideoTextureEmissive&&r.enable(20),A.alphaToCoverage&&r.enable(21),A.numLightProbeGrids>0&&r.enable(22),A.hasPositionAttribute&&r.enable(23),y.push(r.mask)}function x(y){let A=d[y.type],C;if(A){let N=La[A];C=jA.clone(N.uniforms)}else C=y.uniforms;return C}function v(y,A){let C=h.get(A);return C!==void 0?++C.usedTimes:(C=new lI(t,A,y,s),c.push(C),h.set(A,C)),C}function M(y){if(--y.usedTimes===0){let A=c.indexOf(y);c[A]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function E(y){o.remove(y)}function w(){o.dispose()}return{getParameters:b,getProgramCacheKey:m,getUniforms:x,acquireProgram:v,releaseProgram:M,releaseShaderCache:E,programs:c,dispose:w}}function fI(){let t=new WeakMap;function e(r){return t.has(r)}function n(r){let o=t.get(r);return o===void 0&&(o={},t.set(r,o)),o}function i(r){t.delete(r)}function s(r,o,l){t.get(r)[o]=l}function a(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:a}}function dI(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function gw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function _w(){let t=[],e=0,n=[],i=[],s=[];function a(){e=0,n.length=0,i.length=0,s.length=0}function r(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,g,b,m,p){let _=t[e];return _===void 0?(_={id:u.id,object:u,geometry:d,material:g,materialVariant:r(u),groupOrder:b,renderOrder:u.renderOrder,z:m,group:p},t[e]=_):(_.id=u.id,_.object=u,_.geometry=d,_.material=g,_.materialVariant=r(u),_.groupOrder=b,_.renderOrder=u.renderOrder,_.z=m,_.group=p),e++,_}function l(u,d,g,b,m,p){let _=o(u,d,g,b,m,p);g.transmission>0?i.push(_):g.transparent===!0?s.push(_):n.push(_)}function c(u,d,g,b,m,p){let _=o(u,d,g,b,m,p);g.transmission>0?i.unshift(_):g.transparent===!0?s.unshift(_):n.unshift(_)}function h(u,d,g){n.length>1&&n.sort(u||dI),i.length>1&&i.sort(d||gw),s.length>1&&s.sort(d||gw),g&&(n.reverse(),i.reverse(),s.reverse())}function f(){for(let u=e,d=t.length;u<d;u++){let g=t[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:l,unshift:c,finish:f,sort:h}}function pI(){let t=new WeakMap;function e(i,s){let a=t.get(i),r;return a===void 0?(r=new _w,t.set(i,[r])):s>=a.length?(r=new _w,a.push(r)):r=a[s],r}function n(){t=new WeakMap}return{get:e,dispose:n}}function mI(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new D,color:new Oe};break;case"SpotLight":n={position:new D,direction:new D,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new D,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new D,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":n={color:new Oe,position:new D,halfWidth:new D,halfHeight:new D};break}return t[e.id]=n,n}}}function gI(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var _I=0;function vI(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function yI(t){let e=new mI,n=gI(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);let s=new D,a=new qe,r=new qe;function o(c){let h=0,f=0,u=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let d=0,g=0,b=0,m=0,p=0,_=0,x=0,v=0,M=0,E=0,w=0;c.sort(vI);for(let A=0,C=c.length;A<C;A++){let N=c[A],U=N.color,X=N.intensity,Y=N.distance,F=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===bo?F=N.shadow.map.texture:F=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=U.r*X,f+=U.g*X,u+=U.b*X;else if(N.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(N.sh.coefficients[V],X);w++}else if(N.isDirectionalLight){let V=e.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let k=N.shadow,$=n.get(N);$.shadowIntensity=k.intensity,$.shadowBias=k.bias,$.shadowNormalBias=k.normalBias,$.shadowRadius=k.radius,$.shadowMapSize=k.mapSize,i.directionalShadow[d]=$,i.directionalShadowMap[d]=F,i.directionalShadowMatrix[d]=N.shadow.matrix,_++}i.directional[d]=V,d++}else if(N.isSpotLight){let V=e.get(N);V.position.setFromMatrixPosition(N.matrixWorld),V.color.copy(U).multiplyScalar(X),V.distance=Y,V.coneCos=Math.cos(N.angle),V.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),V.decay=N.decay,i.spot[b]=V;let k=N.shadow;if(N.map&&(i.spotLightMap[M]=N.map,M++,k.updateMatrices(N),N.castShadow&&E++),i.spotLightMatrix[b]=k.matrix,N.castShadow){let $=n.get(N);$.shadowIntensity=k.intensity,$.shadowBias=k.bias,$.shadowNormalBias=k.normalBias,$.shadowRadius=k.radius,$.shadowMapSize=k.mapSize,i.spotShadow[b]=$,i.spotShadowMap[b]=F,v++}b++}else if(N.isRectAreaLight){let V=e.get(N);V.color.copy(U).multiplyScalar(X),V.halfWidth.set(N.width*.5,0,0),V.halfHeight.set(0,N.height*.5,0),i.rectArea[m]=V,m++}else if(N.isPointLight){let V=e.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity),V.distance=N.distance,V.decay=N.decay,N.castShadow){let k=N.shadow,$=n.get(N);$.shadowIntensity=k.intensity,$.shadowBias=k.bias,$.shadowNormalBias=k.normalBias,$.shadowRadius=k.radius,$.shadowMapSize=k.mapSize,$.shadowCameraNear=k.camera.near,$.shadowCameraFar=k.camera.far,i.pointShadow[g]=$,i.pointShadowMap[g]=F,i.pointShadowMatrix[g]=N.shadow.matrix,x++}i.point[g]=V,g++}else if(N.isHemisphereLight){let V=e.get(N);V.skyColor.copy(N.color).multiplyScalar(X),V.groundColor.copy(N.groundColor).multiplyScalar(X),i.hemi[p]=V,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;let y=i.hash;(y.directionalLength!==d||y.pointLength!==g||y.spotLength!==b||y.rectAreaLength!==m||y.hemiLength!==p||y.numDirectionalShadows!==_||y.numPointShadows!==x||y.numSpotShadows!==v||y.numSpotMaps!==M||y.numLightProbes!==w)&&(i.directional.length=d,i.spot.length=b,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=v+M-E,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=w,y.directionalLength=d,y.pointLength=g,y.spotLength=b,y.rectAreaLength=m,y.hemiLength=p,y.numDirectionalShadows=_,y.numPointShadows=x,y.numSpotShadows=v,y.numSpotMaps=M,y.numLightProbes=w,i.version=_I++)}function l(c,h){let f=0,u=0,d=0,g=0,b=0,m=h.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){let x=c[p];if(x.isDirectionalLight){let v=i.directional[f];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(x.isSpotLight){let v=i.spot[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(x.isRectAreaLight){let v=i.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),r.identity(),a.copy(x.matrixWorld),a.premultiply(m),r.extractRotation(a),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),g++}else if(x.isPointLight){let v=i.point[u];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),u++}else if(x.isHemisphereLight){let v=i.hemi[b];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),b++}}}return{setup:o,setupView:l,state:i}}function vw(t){let e=new yI(t),n=[],i=[],s=[];function a(u){f.camera=u,n.length=0,i.length=0,s.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){e.setup(n)}function h(u){e.setupView(n,u)}let f={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:f,setupLights:c,setupLightsView:h,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function xI(t){let e=new WeakMap;function n(s,a=0){let r=e.get(s),o;return r===void 0?(o=new vw(t),e.set(s,[o])):a>=r.length?(o=new vw(t),r.push(o)):o=r[a],o}function i(){e=new WeakMap}return{get:n,dispose:i}}var bI=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,SI=`uniform sampler2D shadow_pass;
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
}`,MI=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],EI=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],yw=new qe,uf=new D,ky=new D;function TI(t,e,n){let i=new qc,s=new Ce,a=new Ce,r=new zt,o=new Jp,l=new Qp,c={},h=n.maxTextureSize,f={[js]:Ci,[Ci]:js,[On]:On},u=new vs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:bI,fragmentShader:SI}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new ft;g.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Nt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qh;let p=this.type;this.render=function(E,w,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===pA&&(Ee("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Qh);let A=t.getRenderTarget(),C=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),U=t.state;U.setBlending(Ca),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let X=p!==this.type;X&&w.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(F=>F.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,F=E.length;Y<F;Y++){let V=E[Y],k=V.shadow;if(k===void 0){Ee("WebGLShadowMap:",V,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let $=k.getFrameExtents();s.multiply($),a.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/$.x),s.x=a.x*$.x,k.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/$.y),s.y=a.y*$.y,k.mapSize.y=a.y));let te=t.state.buffers.depth.getReversed();if(k.camera._reversedDepth=te,k.map===null||X===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Zc){if(V.isPointLight){Ee("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new _s(s.x,s.y,{format:bo,type:Da,minFilter:dn,magFilter:dn,generateMipmaps:!1}),k.map.texture.name=V.name+".shadowMap",k.map.depthTexture=new cr(s.x,s.y,bs),k.map.depthTexture.name=V.name+".shadowMapDepth",k.map.depthTexture.format=Aa,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=bn,k.map.depthTexture.magFilter=bn}else V.isPointLight?(k.map=new tg(s.x),k.map.depthTexture=new Yp(s.x,ea)):(k.map=new _s(s.x,s.y),k.map.depthTexture=new cr(s.x,s.y,ea)),k.map.depthTexture.name=V.name+".shadowMap",k.map.depthTexture.format=Aa,this.type===Qh?(k.map.depthTexture.compareFunction=te?Jm:jm,k.map.depthTexture.minFilter=dn,k.map.depthTexture.magFilter=dn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=bn,k.map.depthTexture.magFilter=bn);k.camera.updateProjectionMatrix()}let fe=k.map.isWebGLCubeRenderTarget?6:1;for(let ge=0;ge<fe;ge++){if(k.map.isWebGLCubeRenderTarget)t.setRenderTarget(k.map,ge),t.clear();else{ge===0&&(t.setRenderTarget(k.map),t.clear());let xe=k.getViewport(ge);r.set(a.x*xe.x,a.y*xe.y,a.x*xe.z,a.y*xe.w),U.viewport(r)}if(V.isPointLight){let xe=k.camera,dt=k.matrix,en=V.distance||xe.far;en!==xe.far&&(xe.far=en,xe.updateProjectionMatrix()),uf.setFromMatrixPosition(V.matrixWorld),xe.position.copy(uf),ky.copy(xe.position),ky.add(MI[ge]),xe.up.copy(EI[ge]),xe.lookAt(ky),xe.updateMatrixWorld(),dt.makeTranslation(-uf.x,-uf.y,-uf.z),yw.multiplyMatrices(xe.projectionMatrix,xe.matrixWorldInverse),k._frustum.setFromProjectionMatrix(yw,xe.coordinateSystem,xe.reversedDepth)}else k.updateMatrices(V);i=k.getFrustum(),v(w,y,k.camera,V,this.type)}k.isPointLightShadow!==!0&&this.type===Zc&&_(k,y),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(A,C,N)};function _(E,w){let y=e.update(b);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new _s(s.x,s.y,{format:bo,type:Da})),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(w,null,y,u,b,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(w,null,y,d,b,null)}function x(E,w,y,A){let C=null,N=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)C=N;else if(C=y.isPointLight===!0?l:o,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let U=C.uuid,X=w.uuid,Y=c[U];Y===void 0&&(Y={},c[U]=Y);let F=Y[X];F===void 0&&(F=C.clone(),Y[X]=F,w.addEventListener("dispose",M)),C=F}if(C.visible=w.visible,C.wireframe=w.wireframe,A===Zc?C.side=w.shadowSide!==null?w.shadowSide:w.side:C.side=w.shadowSide!==null?w.shadowSide:f[w.side],C.alphaMap=w.alphaMap,C.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,C.map=w.map,C.clipShadows=w.clipShadows,C.clippingPlanes=w.clippingPlanes,C.clipIntersection=w.clipIntersection,C.displacementMap=w.displacementMap,C.displacementScale=w.displacementScale,C.displacementBias=w.displacementBias,C.wireframeLinewidth=w.wireframeLinewidth,C.linewidth=w.linewidth,y.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let U=t.properties.get(C);U.light=y}return C}function v(E,w,y,A,C){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===Zc)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);let X=e.update(E),Y=E.material;if(Array.isArray(Y)){let F=X.groups;for(let V=0,k=F.length;V<k;V++){let $=F[V],te=Y[$.materialIndex];if(te&&te.visible){let fe=x(E,te,A,C);E.onBeforeShadow(t,E,w,y,X,fe,$),t.renderBufferDirect(y,null,X,fe,E,$),E.onAfterShadow(t,E,w,y,X,fe,$)}}}else if(Y.visible){let F=x(E,Y,A,C);E.onBeforeShadow(t,E,w,y,X,F,null),t.renderBufferDirect(y,null,X,F,E,null),E.onAfterShadow(t,E,w,y,X,F,null)}}let U=E.children;for(let X=0,Y=U.length;X<Y;X++)v(U[X],w,y,A,C)}function M(E){E.target.removeEventListener("dispose",M);for(let y in c){let A=c[y],C=E.target.uuid;C in A&&(A[C].dispose(),delete A[C])}}}function AI(t,e){function n(){let L=!1,se=new zt,q=null,ce=new zt(0,0,0,0);return{setMask:function(de){q!==de&&!L&&(t.colorMask(de,de,de,de),q=de)},setLocked:function(de){L=de},setClear:function(de,Q,Te,_e,Pe){Pe===!0&&(de*=_e,Q*=_e,Te*=_e),se.set(de,Q,Te,_e),ce.equals(se)===!1&&(t.clearColor(de,Q,Te,_e),ce.copy(se))},reset:function(){L=!1,q=null,ce.set(-1,0,0,0)}}}function i(){let L=!1,se=!1,q=null,ce=null,de=null;return{setReversed:function(Q){if(se!==Q){let Te=e.get("EXT_clip_control");Q?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),se=Q;let _e=de;de=null,this.setClear(_e)}},getReversed:function(){return se},setTest:function(Q){Q?ee(t.DEPTH_TEST):Ie(t.DEPTH_TEST)},setMask:function(Q){q!==Q&&!L&&(t.depthMask(Q),q=Q)},setFunc:function(Q){if(se&&(Q=ZA[Q]),ce!==Q){switch(Q){case Up:t.depthFunc(t.NEVER);break;case Ip:t.depthFunc(t.ALWAYS);break;case Pp:t.depthFunc(t.LESS);break;case ol:t.depthFunc(t.LEQUAL);break;case Bp:t.depthFunc(t.EQUAL);break;case Fp:t.depthFunc(t.GEQUAL);break;case zp:t.depthFunc(t.GREATER);break;case Hp:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ce=Q}},setLocked:function(Q){L=Q},setClear:function(Q){de!==Q&&(de=Q,se&&(Q=1-Q),t.clearDepth(Q))},reset:function(){L=!1,q=null,ce=null,de=null,se=!1}}}function s(){let L=!1,se=null,q=null,ce=null,de=null,Q=null,Te=null,_e=null,Pe=null;return{setTest:function(St){L||(St?ee(t.STENCIL_TEST):Ie(t.STENCIL_TEST))},setMask:function(St){se!==St&&!L&&(t.stencilMask(St),se=St)},setFunc:function(St,Di,Ki){(q!==St||ce!==Di||de!==Ki)&&(t.stencilFunc(St,Di,Ki),q=St,ce=Di,de=Ki)},setOp:function(St,Di,Ki){(Q!==St||Te!==Di||_e!==Ki)&&(t.stencilOp(St,Di,Ki),Q=St,Te=Di,_e=Ki)},setLocked:function(St){L=St},setClear:function(St){Pe!==St&&(t.clearStencil(St),Pe=St)},reset:function(){L=!1,se=null,q=null,ce=null,de=null,Q=null,Te=null,_e=null,Pe=null}}}let a=new n,r=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},f={},u={},d=new WeakMap,g=[],b=null,m=!1,p=null,_=null,x=null,v=null,M=null,E=null,w=null,y=new Oe(0,0,0),A=0,C=!1,N=null,U=null,X=null,Y=null,F=null,V=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,$=0,te=t.getParameter(t.VERSION);te.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(te)[1]),k=$>=1):te.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),k=$>=2);let fe=null,ge={},xe=t.getParameter(t.SCISSOR_BOX),dt=t.getParameter(t.VIEWPORT),en=new zt().fromArray(xe),pt=new zt().fromArray(dt);function J(L,se,q,ce){let de=new Uint8Array(4),Q=t.createTexture();t.bindTexture(L,Q),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Te=0;Te<q;Te++)L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?t.texImage3D(se,0,t.RGBA,1,1,ce,0,t.RGBA,t.UNSIGNED_BYTE,de):t.texImage2D(se+Te,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,de);return Q}let re={};re[t.TEXTURE_2D]=J(t.TEXTURE_2D,t.TEXTURE_2D,1),re[t.TEXTURE_CUBE_MAP]=J(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[t.TEXTURE_2D_ARRAY]=J(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),re[t.TEXTURE_3D]=J(t.TEXTURE_3D,t.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ee(t.DEPTH_TEST),r.setFunc(ol),mn(!1),ln(ly),ee(t.CULL_FACE),yt(Ca);function ee(L){h[L]!==!0&&(t.enable(L),h[L]=!0)}function Ie(L){h[L]!==!1&&(t.disable(L),h[L]=!1)}function Ve(L,se){return u[L]!==se?(t.bindFramebuffer(L,se),u[L]=se,L===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=se),L===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=se),!0):!1}function we(L,se){let q=g,ce=!1;if(L){q=d.get(se),q===void 0&&(q=[],d.set(se,q));let de=L.textures;if(q.length!==de.length||q[0]!==t.COLOR_ATTACHMENT0){for(let Q=0,Te=de.length;Q<Te;Q++)q[Q]=t.COLOR_ATTACHMENT0+Q;q.length=de.length,ce=!0}}else q[0]!==t.BACK&&(q[0]=t.BACK,ce=!0);ce&&t.drawBuffers(q)}function nn(L){return b!==L?(t.useProgram(L),b=L,!0):!1}let at={[oo]:t.FUNC_ADD,[gA]:t.FUNC_SUBTRACT,[_A]:t.FUNC_REVERSE_SUBTRACT};at[vA]=t.MIN,at[yA]=t.MAX;let Ht={[xA]:t.ZERO,[bA]:t.ONE,[SA]:t.SRC_COLOR,[Lp]:t.SRC_ALPHA,[RA]:t.SRC_ALPHA_SATURATE,[AA]:t.DST_COLOR,[EA]:t.DST_ALPHA,[MA]:t.ONE_MINUS_SRC_COLOR,[Op]:t.ONE_MINUS_SRC_ALPHA,[wA]:t.ONE_MINUS_DST_COLOR,[TA]:t.ONE_MINUS_DST_ALPHA,[CA]:t.CONSTANT_COLOR,[DA]:t.ONE_MINUS_CONSTANT_COLOR,[NA]:t.CONSTANT_ALPHA,[LA]:t.ONE_MINUS_CONSTANT_ALPHA};function yt(L,se,q,ce,de,Q,Te,_e,Pe,St){if(L===Ca){m===!0&&(Ie(t.BLEND),m=!1);return}if(m===!1&&(ee(t.BLEND),m=!0),L!==mA){if(L!==p||St!==C){if((_!==oo||M!==oo)&&(t.blendEquation(t.FUNC_ADD),_=oo,M=oo),St)switch(L){case rl:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case cy:t.blendFunc(t.ONE,t.ONE);break;case uy:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case hy:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Fe("WebGLState: Invalid blending: ",L);break}else switch(L){case rl:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case cy:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case uy:Fe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hy:Fe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Fe("WebGLState: Invalid blending: ",L);break}x=null,v=null,E=null,w=null,y.set(0,0,0),A=0,p=L,C=St}return}de=de||se,Q=Q||q,Te=Te||ce,(se!==_||de!==M)&&(t.blendEquationSeparate(at[se],at[de]),_=se,M=de),(q!==x||ce!==v||Q!==E||Te!==w)&&(t.blendFuncSeparate(Ht[q],Ht[ce],Ht[Q],Ht[Te]),x=q,v=ce,E=Q,w=Te),(_e.equals(y)===!1||Pe!==A)&&(t.blendColor(_e.r,_e.g,_e.b,Pe),y.copy(_e),A=Pe),p=L,C=!1}function lt(L,se){L.side===On?Ie(t.CULL_FACE):ee(t.CULL_FACE);let q=L.side===Ci;se&&(q=!q),mn(q),L.blending===rl&&L.transparent===!1?yt(Ca):yt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),a.setMask(L.colorWrite);let ce=L.stencilWrite;o.setTest(ce),ce&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Mn(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ee(t.SAMPLE_ALPHA_TO_COVERAGE):Ie(t.SAMPLE_ALPHA_TO_COVERAGE)}function mn(L){N!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),N=L)}function ln(L){L!==fA?(ee(t.CULL_FACE),L!==U&&(L===ly?t.cullFace(t.BACK):L===dA?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ie(t.CULL_FACE),U=L}function yn(L){L!==X&&(k&&t.lineWidth(L),X=L)}function Mn(L,se,q){L?(ee(t.POLYGON_OFFSET_FILL),(Y!==se||F!==q)&&(Y=se,F=q,r.getReversed()&&(se=-se),t.polygonOffset(se,q))):Ie(t.POLYGON_OFFSET_FILL)}function Zt(L){L?ee(t.SCISSOR_TEST):Ie(t.SCISSOR_TEST)}function cn(L){L===void 0&&(L=t.TEXTURE0+V-1),fe!==L&&(t.activeTexture(L),fe=L)}function O(L,se,q){q===void 0&&(fe===null?q=t.TEXTURE0+V-1:q=fe);let ce=ge[q];ce===void 0&&(ce={type:void 0,texture:void 0},ge[q]=ce),(ce.type!==L||ce.texture!==se)&&(fe!==q&&(t.activeTexture(q),fe=q),t.bindTexture(L,se||re[L]),ce.type=L,ce.texture=se)}function Wn(){let L=ge[fe];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function gt(){try{t.compressedTexImage2D(...arguments)}catch(L){Fe("WebGLState:",L)}}function R(){try{t.compressedTexImage3D(...arguments)}catch(L){Fe("WebGLState:",L)}}function S(){try{t.texSubImage2D(...arguments)}catch(L){Fe("WebGLState:",L)}}function P(){try{t.texSubImage3D(...arguments)}catch(L){Fe("WebGLState:",L)}}function H(){try{t.compressedTexSubImage2D(...arguments)}catch(L){Fe("WebGLState:",L)}}function W(){try{t.compressedTexSubImage3D(...arguments)}catch(L){Fe("WebGLState:",L)}}function ne(){try{t.texStorage2D(...arguments)}catch(L){Fe("WebGLState:",L)}}function ie(){try{t.texStorage3D(...arguments)}catch(L){Fe("WebGLState:",L)}}function Z(){try{t.texImage2D(...arguments)}catch(L){Fe("WebGLState:",L)}}function K(){try{t.texImage3D(...arguments)}catch(L){Fe("WebGLState:",L)}}function oe(L){return f[L]!==void 0?f[L]:t.getParameter(L)}function be(L,se){f[L]!==se&&(t.pixelStorei(L,se),f[L]=se)}function he(L){en.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),en.copy(L))}function le(L){pt.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),pt.copy(L))}function De(L,se){let q=c.get(se);q===void 0&&(q=new WeakMap,c.set(se,q));let ce=q.get(L);ce===void 0&&(ce=t.getUniformBlockIndex(se,L.name),q.set(L,ce))}function Ne(L,se){let ce=c.get(se).get(L);l.get(se)!==ce&&(t.uniformBlockBinding(se,ce,L.__bindingPointIndex),l.set(se,ce))}function ze(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),r.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},f={},fe=null,ge={},u={},d=new WeakMap,g=[],b=null,m=!1,p=null,_=null,x=null,v=null,M=null,E=null,w=null,y=new Oe(0,0,0),A=0,C=!1,N=null,U=null,X=null,Y=null,F=null,en.set(0,0,t.canvas.width,t.canvas.height),pt.set(0,0,t.canvas.width,t.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:ee,disable:Ie,bindFramebuffer:Ve,drawBuffers:we,useProgram:nn,setBlending:yt,setMaterial:lt,setFlipSided:mn,setCullFace:ln,setLineWidth:yn,setPolygonOffset:Mn,setScissorTest:Zt,activeTexture:cn,bindTexture:O,unbindTexture:Wn,compressedTexImage2D:gt,compressedTexImage3D:R,texImage2D:Z,texImage3D:K,pixelStorei:be,getParameter:oe,updateUBOMapping:De,uniformBlockBinding:Ne,texStorage2D:ne,texStorage3D:ie,texSubImage2D:S,texSubImage3D:P,compressedTexSubImage2D:H,compressedTexSubImage3D:W,scissor:he,viewport:le,reset:ze}}function wI(t,e,n,i,s,a,r){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ce,h=new WeakMap,f=new Set,u,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(R,S){return g?new OffscreenCanvas(R,S):zc("canvas")}function m(R,S,P){let H=1,W=gt(R);if((W.width>P||W.height>P)&&(H=P/Math.max(W.width,W.height)),H<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ne=Math.floor(H*W.width),ie=Math.floor(H*W.height);u===void 0&&(u=b(ne,ie));let Z=S?b(ne,ie):u;return Z.width=ne,Z.height=ie,Z.getContext("2d").drawImage(R,0,0,ne,ie),Ee("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+ne+"x"+ie+")."),Z}else return"data"in R&&Ee("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),R;return R}function p(R){return R.generateMipmaps}function _(R){t.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function v(R,S,P,H,W,ne=!1){if(R!==null){if(t[R]!==void 0)return t[R];Ee("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ie;H&&(ie=e.get("EXT_texture_norm16"),ie||Ee("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=S;if(S===t.RED&&(P===t.FLOAT&&(Z=t.R32F),P===t.HALF_FLOAT&&(Z=t.R16F),P===t.UNSIGNED_BYTE&&(Z=t.R8),P===t.UNSIGNED_SHORT&&ie&&(Z=ie.R16_EXT),P===t.SHORT&&ie&&(Z=ie.R16_SNORM_EXT)),S===t.RED_INTEGER&&(P===t.UNSIGNED_BYTE&&(Z=t.R8UI),P===t.UNSIGNED_SHORT&&(Z=t.R16UI),P===t.UNSIGNED_INT&&(Z=t.R32UI),P===t.BYTE&&(Z=t.R8I),P===t.SHORT&&(Z=t.R16I),P===t.INT&&(Z=t.R32I)),S===t.RG&&(P===t.FLOAT&&(Z=t.RG32F),P===t.HALF_FLOAT&&(Z=t.RG16F),P===t.UNSIGNED_BYTE&&(Z=t.RG8),P===t.UNSIGNED_SHORT&&ie&&(Z=ie.RG16_EXT),P===t.SHORT&&ie&&(Z=ie.RG16_SNORM_EXT)),S===t.RG_INTEGER&&(P===t.UNSIGNED_BYTE&&(Z=t.RG8UI),P===t.UNSIGNED_SHORT&&(Z=t.RG16UI),P===t.UNSIGNED_INT&&(Z=t.RG32UI),P===t.BYTE&&(Z=t.RG8I),P===t.SHORT&&(Z=t.RG16I),P===t.INT&&(Z=t.RG32I)),S===t.RGB_INTEGER&&(P===t.UNSIGNED_BYTE&&(Z=t.RGB8UI),P===t.UNSIGNED_SHORT&&(Z=t.RGB16UI),P===t.UNSIGNED_INT&&(Z=t.RGB32UI),P===t.BYTE&&(Z=t.RGB8I),P===t.SHORT&&(Z=t.RGB16I),P===t.INT&&(Z=t.RGB32I)),S===t.RGBA_INTEGER&&(P===t.UNSIGNED_BYTE&&(Z=t.RGBA8UI),P===t.UNSIGNED_SHORT&&(Z=t.RGBA16UI),P===t.UNSIGNED_INT&&(Z=t.RGBA32UI),P===t.BYTE&&(Z=t.RGBA8I),P===t.SHORT&&(Z=t.RGBA16I),P===t.INT&&(Z=t.RGBA32I)),S===t.RGB&&(P===t.UNSIGNED_SHORT&&ie&&(Z=ie.RGB16_EXT),P===t.SHORT&&ie&&(Z=ie.RGB16_SNORM_EXT),P===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),P===t.UNSIGNED_INT_10F_11F_11F_REV&&(Z=t.R11F_G11F_B10F)),S===t.RGBA){let K=ne?Mh:et.getTransfer(W);P===t.FLOAT&&(Z=t.RGBA32F),P===t.HALF_FLOAT&&(Z=t.RGBA16F),P===t.UNSIGNED_BYTE&&(Z=K===Dt?t.SRGB8_ALPHA8:t.RGBA8),P===t.UNSIGNED_SHORT&&ie&&(Z=ie.RGBA16_EXT),P===t.SHORT&&ie&&(Z=ie.RGBA16_SNORM_EXT),P===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),P===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function M(R,S){let P;return R?S===null||S===ea||S===Jc?P=t.DEPTH24_STENCIL8:S===bs?P=t.DEPTH32F_STENCIL8:S===jc&&(P=t.DEPTH24_STENCIL8,Ee("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ea||S===Jc?P=t.DEPTH_COMPONENT24:S===bs?P=t.DEPTH_COMPONENT32F:S===jc&&(P=t.DEPTH_COMPONENT16),P}function E(R,S){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==bn&&R.minFilter!==dn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function w(R){let S=R.target;S.removeEventListener("dispose",w),A(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&f.delete(S)}function y(R){let S=R.target;S.removeEventListener("dispose",y),N(S)}function A(R){let S=i.get(R);if(S.__webglInit===void 0)return;let P=R.source,H=d.get(P);if(H){let W=H[S.__cacheKey];W.usedTimes--,W.usedTimes===0&&C(R),Object.keys(H).length===0&&d.delete(P)}i.remove(R)}function C(R){let S=i.get(R);t.deleteTexture(S.__webglTexture);let P=R.source,H=d.get(P);delete H[S.__cacheKey],r.memory.textures--}function N(R){let S=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(S.__webglFramebuffer[H]))for(let W=0;W<S.__webglFramebuffer[H].length;W++)t.deleteFramebuffer(S.__webglFramebuffer[H][W]);else t.deleteFramebuffer(S.__webglFramebuffer[H]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[H])}else{if(Array.isArray(S.__webglFramebuffer))for(let H=0;H<S.__webglFramebuffer.length;H++)t.deleteFramebuffer(S.__webglFramebuffer[H]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let H=0;H<S.__webglColorRenderbuffer.length;H++)S.__webglColorRenderbuffer[H]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[H]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let P=R.textures;for(let H=0,W=P.length;H<W;H++){let ne=i.get(P[H]);ne.__webglTexture&&(t.deleteTexture(ne.__webglTexture),r.memory.textures--),i.remove(P[H])}i.remove(R)}let U=0;function X(){U=0}function Y(){return U}function F(R){U=R}function V(){let R=U;return R>=s.maxTextures&&Ee("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),U+=1,R}function k(R){let S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function $(R,S){let P=i.get(R);if(R.isVideoTexture&&O(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&P.__version!==R.version){let H=R.image;if(H===null)Ee("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Ee("WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(P,R,S);return}}else R.isExternalTexture&&(P.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,P.__webglTexture,t.TEXTURE0+S)}function te(R,S){let P=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&P.__version!==R.version){Ie(P,R,S);return}else R.isExternalTexture&&(P.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,P.__webglTexture,t.TEXTURE0+S)}function fe(R,S){let P=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&P.__version!==R.version){Ie(P,R,S);return}n.bindTexture(t.TEXTURE_3D,P.__webglTexture,t.TEXTURE0+S)}function ge(R,S){let P=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&P.__version!==R.version){Ve(P,R,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+S)}let xe={[lo]:t.REPEAT,[Gi]:t.CLAMP_TO_EDGE,[Bc]:t.MIRRORED_REPEAT},dt={[bn]:t.NEAREST,[hm]:t.NEAREST_MIPMAP_NEAREST,[gl]:t.NEAREST_MIPMAP_LINEAR,[dn]:t.LINEAR,[Kc]:t.LINEAR_MIPMAP_NEAREST,[xs]:t.LINEAR_MIPMAP_LINEAR},en={[zA]:t.NEVER,[XA]:t.ALWAYS,[HA]:t.LESS,[jm]:t.LEQUAL,[GA]:t.EQUAL,[Jm]:t.GEQUAL,[VA]:t.GREATER,[kA]:t.NOTEQUAL};function pt(R,S){if(S.type===bs&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===dn||S.magFilter===Kc||S.magFilter===gl||S.magFilter===xs||S.minFilter===dn||S.minFilter===Kc||S.minFilter===gl||S.minFilter===xs)&&Ee("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,xe[S.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,xe[S.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,xe[S.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,dt[S.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,dt[S.minFilter]),S.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,en[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===bn||S.minFilter!==gl&&S.minFilter!==xs||S.type===bs&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let P=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function J(R,S){let P=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",w));let H=S.source,W=d.get(H);W===void 0&&(W={},d.set(H,W));let ne=k(S);if(ne!==R.__cacheKey){W[ne]===void 0&&(W[ne]={texture:t.createTexture(),usedTimes:0},r.memory.textures++,P=!0),W[ne].usedTimes++;let ie=W[R.__cacheKey];ie!==void 0&&(W[R.__cacheKey].usedTimes--,ie.usedTimes===0&&C(S)),R.__cacheKey=ne,R.__webglTexture=W[ne].texture}return P}function re(R,S,P){return Math.floor(Math.floor(R/P)/S)}function ee(R,S,P,H){let ne=R.updateRanges;if(ne.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,P,H,S.data);else{ne.sort((be,he)=>be.start-he.start);let ie=0;for(let be=1;be<ne.length;be++){let he=ne[ie],le=ne[be],De=he.start+he.count,Ne=re(le.start,S.width,4),ze=re(he.start,S.width,4);le.start<=De+1&&Ne===ze&&re(le.start+le.count-1,S.width,4)===Ne?he.count=Math.max(he.count,le.start+le.count-he.start):(++ie,ne[ie]=le)}ne.length=ie+1;let Z=n.getParameter(t.UNPACK_ROW_LENGTH),K=n.getParameter(t.UNPACK_SKIP_PIXELS),oe=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let be=0,he=ne.length;be<he;be++){let le=ne[be],De=Math.floor(le.start/4),Ne=Math.ceil(le.count/4),ze=De%S.width,L=Math.floor(De/S.width),se=Ne,q=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,ze),n.pixelStorei(t.UNPACK_SKIP_ROWS,L),n.texSubImage2D(t.TEXTURE_2D,0,ze,L,se,q,P,H,S.data)}R.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Z),n.pixelStorei(t.UNPACK_SKIP_PIXELS,K),n.pixelStorei(t.UNPACK_SKIP_ROWS,oe)}}function Ie(R,S,P){let H=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(H=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(H=t.TEXTURE_3D);let W=J(R,S),ne=S.source;n.bindTexture(H,R.__webglTexture,t.TEXTURE0+P);let ie=i.get(ne);if(ne.version!==ie.__version||W===!0){if(n.activeTexture(t.TEXTURE0+P),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let q=et.getPrimaries(et.workingColorSpace),ce=S.colorSpace===ta?null:et.getPrimaries(S.colorSpace),de=S.colorSpace===ta||q===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,de)}n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment);let K=m(S.image,!1,s.maxTextureSize);K=Wn(S,K);let oe=a.convert(S.format,S.colorSpace),be=a.convert(S.type),he=v(S.internalFormat,oe,be,S.normalized,S.colorSpace,S.isVideoTexture);pt(H,S);let le,De=S.mipmaps,Ne=S.isVideoTexture!==!0,ze=ie.__version===void 0||W===!0,L=ne.dataReady,se=E(S,K);if(S.isDepthTexture)he=M(S.format===xo,S.type),ze&&(Ne?n.texStorage2D(t.TEXTURE_2D,1,he,K.width,K.height):n.texImage2D(t.TEXTURE_2D,0,he,K.width,K.height,0,oe,be,null));else if(S.isDataTexture)if(De.length>0){Ne&&ze&&n.texStorage2D(t.TEXTURE_2D,se,he,De[0].width,De[0].height);for(let q=0,ce=De.length;q<ce;q++)le=De[q],Ne?L&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,le.width,le.height,oe,be,le.data):n.texImage2D(t.TEXTURE_2D,q,he,le.width,le.height,0,oe,be,le.data);S.generateMipmaps=!1}else Ne?(ze&&n.texStorage2D(t.TEXTURE_2D,se,he,K.width,K.height),L&&ee(S,K,oe,be)):n.texImage2D(t.TEXTURE_2D,0,he,K.width,K.height,0,oe,be,K.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ne&&ze&&n.texStorage3D(t.TEXTURE_2D_ARRAY,se,he,De[0].width,De[0].height,K.depth);for(let q=0,ce=De.length;q<ce;q++)if(le=De[q],S.format!==Ss)if(oe!==null)if(Ne){if(L)if(S.layerUpdates.size>0){let de=Ly(le.width,le.height,S.format,S.type);for(let Q of S.layerUpdates){let Te=le.data.subarray(Q*de/le.data.BYTES_PER_ELEMENT,(Q+1)*de/le.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,Q,le.width,le.height,1,oe,Te)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,0,le.width,le.height,K.depth,oe,le.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,q,he,le.width,le.height,K.depth,0,le.data,0,0);else Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?L&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,0,le.width,le.height,K.depth,oe,be,le.data):n.texImage3D(t.TEXTURE_2D_ARRAY,q,he,le.width,le.height,K.depth,0,oe,be,le.data)}else{Ne&&ze&&n.texStorage2D(t.TEXTURE_2D,se,he,De[0].width,De[0].height);for(let q=0,ce=De.length;q<ce;q++)le=De[q],S.format!==Ss?oe!==null?Ne?L&&n.compressedTexSubImage2D(t.TEXTURE_2D,q,0,0,le.width,le.height,oe,le.data):n.compressedTexImage2D(t.TEXTURE_2D,q,he,le.width,le.height,0,le.data):Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?L&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,le.width,le.height,oe,be,le.data):n.texImage2D(t.TEXTURE_2D,q,he,le.width,le.height,0,oe,be,le.data)}else if(S.isDataArrayTexture)if(Ne){if(ze&&n.texStorage3D(t.TEXTURE_2D_ARRAY,se,he,K.width,K.height,K.depth),L)if(S.layerUpdates.size>0){let q=Ly(K.width,K.height,S.format,S.type);for(let ce of S.layerUpdates){let de=K.data.subarray(ce*q/K.data.BYTES_PER_ELEMENT,(ce+1)*q/K.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ce,K.width,K.height,1,oe,be,de)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,oe,be,K.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,he,K.width,K.height,K.depth,0,oe,be,K.data);else if(S.isData3DTexture)Ne?(ze&&n.texStorage3D(t.TEXTURE_3D,se,he,K.width,K.height,K.depth),L&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,oe,be,K.data)):n.texImage3D(t.TEXTURE_3D,0,he,K.width,K.height,K.depth,0,oe,be,K.data);else if(S.isFramebufferTexture){if(ze)if(Ne)n.texStorage2D(t.TEXTURE_2D,se,he,K.width,K.height);else{let q=K.width,ce=K.height;for(let de=0;de<se;de++)n.texImage2D(t.TEXTURE_2D,de,he,q,ce,0,oe,be,null),q>>=1,ce>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in t){let q=t.canvas;if(q.hasAttribute("layoutsubtree")||q.setAttribute("layoutsubtree","true"),K.parentNode!==q){q.appendChild(K),f.add(S),q.onpaint=ce=>{let de=ce.changedElements;for(let Q of f)de.includes(Q.image)&&(Q.needsUpdate=!0)},q.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,K);else{let de=t.RGBA,Q=t.RGBA,Te=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,de,Q,Te,K)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(De.length>0){if(Ne&&ze){let q=gt(De[0]);n.texStorage2D(t.TEXTURE_2D,se,he,q.width,q.height)}for(let q=0,ce=De.length;q<ce;q++)le=De[q],Ne?L&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,oe,be,le):n.texImage2D(t.TEXTURE_2D,q,he,oe,be,le);S.generateMipmaps=!1}else if(Ne){if(ze){let q=gt(K);n.texStorage2D(t.TEXTURE_2D,se,he,q.width,q.height)}L&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe,be,K)}else n.texImage2D(t.TEXTURE_2D,0,he,oe,be,K);p(S)&&_(H),ie.__version=ne.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Ve(R,S,P){if(S.image.length!==6)return;let H=J(R,S),W=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+P);let ne=i.get(W);if(W.version!==ne.__version||H===!0){n.activeTexture(t.TEXTURE0+P);let ie=et.getPrimaries(et.workingColorSpace),Z=S.colorSpace===ta?null:et.getPrimaries(S.colorSpace),K=S.colorSpace===ta||ie===Z?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let oe=S.isCompressedTexture||S.image[0].isCompressedTexture,be=S.image[0]&&S.image[0].isDataTexture,he=[];for(let Q=0;Q<6;Q++)!oe&&!be?he[Q]=m(S.image[Q],!0,s.maxCubemapSize):he[Q]=be?S.image[Q].image:S.image[Q],he[Q]=Wn(S,he[Q]);let le=he[0],De=a.convert(S.format,S.colorSpace),Ne=a.convert(S.type),ze=v(S.internalFormat,De,Ne,S.normalized,S.colorSpace),L=S.isVideoTexture!==!0,se=ne.__version===void 0||H===!0,q=W.dataReady,ce=E(S,le);pt(t.TEXTURE_CUBE_MAP,S);let de;if(oe){L&&se&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,ze,le.width,le.height);for(let Q=0;Q<6;Q++){de=he[Q].mipmaps;for(let Te=0;Te<de.length;Te++){let _e=de[Te];S.format!==Ss?De!==null?L?q&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te,0,0,_e.width,_e.height,De,_e.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te,ze,_e.width,_e.height,0,_e.data):Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te,0,0,_e.width,_e.height,De,Ne,_e.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te,ze,_e.width,_e.height,0,De,Ne,_e.data)}}}else{if(de=S.mipmaps,L&&se){de.length>0&&ce++;let Q=gt(he[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,ze,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(be){L?q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,he[Q].width,he[Q].height,De,Ne,he[Q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ze,he[Q].width,he[Q].height,0,De,Ne,he[Q].data);for(let Te=0;Te<de.length;Te++){let Pe=de[Te].image[Q].image;L?q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te+1,0,0,Pe.width,Pe.height,De,Ne,Pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te+1,ze,Pe.width,Pe.height,0,De,Ne,Pe.data)}}else{L?q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,De,Ne,he[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ze,De,Ne,he[Q]);for(let Te=0;Te<de.length;Te++){let _e=de[Te];L?q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te+1,0,0,De,Ne,_e.image[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te+1,ze,De,Ne,_e.image[Q])}}}p(S)&&_(t.TEXTURE_CUBE_MAP),ne.__version=W.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function we(R,S,P,H,W,ne){let ie=a.convert(P.format,P.colorSpace),Z=a.convert(P.type),K=v(P.internalFormat,ie,Z,P.normalized,P.colorSpace),oe=i.get(S),be=i.get(P);if(be.__renderTarget=S,!oe.__hasExternalTextures){let he=Math.max(1,S.width>>ne),le=Math.max(1,S.height>>ne);W===t.TEXTURE_3D||W===t.TEXTURE_2D_ARRAY?n.texImage3D(W,ne,K,he,le,S.depth,0,ie,Z,null):n.texImage2D(W,ne,K,he,le,0,ie,Z,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),cn(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,H,W,be.__webglTexture,0,Zt(S)):(W===t.TEXTURE_2D||W>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,H,W,be.__webglTexture,ne),n.bindFramebuffer(t.FRAMEBUFFER,null)}function nn(R,S,P){if(t.bindRenderbuffer(t.RENDERBUFFER,R),S.depthBuffer){let H=S.depthTexture,W=H&&H.isDepthTexture?H.type:null,ne=M(S.stencilBuffer,W),ie=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;cn(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Zt(S),ne,S.width,S.height):P?t.renderbufferStorageMultisample(t.RENDERBUFFER,Zt(S),ne,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ne,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,R)}else{let H=S.textures;for(let W=0;W<H.length;W++){let ne=H[W],ie=a.convert(ne.format,ne.colorSpace),Z=a.convert(ne.type),K=v(ne.internalFormat,ie,Z,ne.normalized,ne.colorSpace);cn(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Zt(S),K,S.width,S.height):P?t.renderbufferStorageMultisample(t.RENDERBUFFER,Zt(S),K,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,K,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function at(R,S,P){let H=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let W=i.get(S.depthTexture);if(W.__renderTarget=S,(!W.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),H){if(W.__webglInit===void 0&&(W.__webglInit=!0,S.depthTexture.addEventListener("dispose",w)),W.__webglTexture===void 0){W.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture),pt(t.TEXTURE_CUBE_MAP,S.depthTexture);let oe=a.convert(S.depthTexture.format),be=a.convert(S.depthTexture.type),he;S.depthTexture.format===Aa?he=t.DEPTH_COMPONENT24:S.depthTexture.format===xo&&(he=t.DEPTH24_STENCIL8);for(let le=0;le<6;le++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,he,S.width,S.height,0,oe,be,null)}}else $(S.depthTexture,0);let ne=W.__webglTexture,ie=Zt(S),Z=H?t.TEXTURE_CUBE_MAP_POSITIVE_X+P:t.TEXTURE_2D,K=S.depthTexture.format===xo?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(S.depthTexture.format===Aa)cn(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,Z,ne,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,K,Z,ne,0);else if(S.depthTexture.format===xo)cn(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,Z,ne,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,K,Z,ne,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ht(R){let S=i.get(R),P=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){let H=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),H){let W=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,H.removeEventListener("dispose",W)};H.addEventListener("dispose",W),S.__depthDisposeCallback=W}S.__boundDepthTexture=H}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(P)for(let H=0;H<6;H++)at(S.__webglFramebuffer[H],R,H);else{let H=R.texture.mipmaps;H&&H.length>0?at(S.__webglFramebuffer[0],R,0):at(S.__webglFramebuffer,R,0)}else if(P){S.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[H]),S.__webglDepthbuffer[H]===void 0)S.__webglDepthbuffer[H]=t.createRenderbuffer(),nn(S.__webglDepthbuffer[H],R,!1);else{let W=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=S.__webglDepthbuffer[H];t.bindRenderbuffer(t.RENDERBUFFER,ne),t.framebufferRenderbuffer(t.FRAMEBUFFER,W,t.RENDERBUFFER,ne)}}else{let H=R.texture.mipmaps;if(H&&H.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),nn(S.__webglDepthbuffer,R,!1);else{let W=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ne),t.framebufferRenderbuffer(t.FRAMEBUFFER,W,t.RENDERBUFFER,ne)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function yt(R,S,P){let H=i.get(R);S!==void 0&&we(H.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),P!==void 0&&Ht(R)}function lt(R){let S=R.texture,P=i.get(R),H=i.get(S);R.addEventListener("dispose",y);let W=R.textures,ne=R.isWebGLCubeRenderTarget===!0,ie=W.length>1;if(ie||(H.__webglTexture===void 0&&(H.__webglTexture=t.createTexture()),H.__version=S.version,r.memory.textures++),ne){P.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(S.mipmaps&&S.mipmaps.length>0){P.__webglFramebuffer[Z]=[];for(let K=0;K<S.mipmaps.length;K++)P.__webglFramebuffer[Z][K]=t.createFramebuffer()}else P.__webglFramebuffer[Z]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){P.__webglFramebuffer=[];for(let Z=0;Z<S.mipmaps.length;Z++)P.__webglFramebuffer[Z]=t.createFramebuffer()}else P.__webglFramebuffer=t.createFramebuffer();if(ie)for(let Z=0,K=W.length;Z<K;Z++){let oe=i.get(W[Z]);oe.__webglTexture===void 0&&(oe.__webglTexture=t.createTexture(),r.memory.textures++)}if(R.samples>0&&cn(R)===!1){P.__webglMultisampledFramebuffer=t.createFramebuffer(),P.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let Z=0;Z<W.length;Z++){let K=W[Z];P.__webglColorRenderbuffer[Z]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,P.__webglColorRenderbuffer[Z]);let oe=a.convert(K.format,K.colorSpace),be=a.convert(K.type),he=v(K.internalFormat,oe,be,K.normalized,K.colorSpace,R.isXRRenderTarget===!0),le=Zt(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,le,he,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Z,t.RENDERBUFFER,P.__webglColorRenderbuffer[Z])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(P.__webglDepthRenderbuffer=t.createRenderbuffer(),nn(P.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ne){n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture),pt(t.TEXTURE_CUBE_MAP,S);for(let Z=0;Z<6;Z++)if(S.mipmaps&&S.mipmaps.length>0)for(let K=0;K<S.mipmaps.length;K++)we(P.__webglFramebuffer[Z][K],R,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,K);else we(P.__webglFramebuffer[Z],R,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);p(S)&&_(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ie){for(let Z=0,K=W.length;Z<K;Z++){let oe=W[Z],be=i.get(oe),he=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(he=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,be.__webglTexture),pt(he,oe),we(P.__webglFramebuffer,R,oe,t.COLOR_ATTACHMENT0+Z,he,0),p(oe)&&_(he)}n.unbindTexture()}else{let Z=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Z=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Z,H.__webglTexture),pt(Z,S),S.mipmaps&&S.mipmaps.length>0)for(let K=0;K<S.mipmaps.length;K++)we(P.__webglFramebuffer[K],R,S,t.COLOR_ATTACHMENT0,Z,K);else we(P.__webglFramebuffer,R,S,t.COLOR_ATTACHMENT0,Z,0);p(S)&&_(Z),n.unbindTexture()}R.depthBuffer&&Ht(R)}function mn(R){let S=R.textures;for(let P=0,H=S.length;P<H;P++){let W=S[P];if(p(W)){let ne=x(R),ie=i.get(W).__webglTexture;n.bindTexture(ne,ie),_(ne),n.unbindTexture()}}}let ln=[],yn=[];function Mn(R){if(R.samples>0){if(cn(R)===!1){let S=R.textures,P=R.width,H=R.height,W=t.COLOR_BUFFER_BIT,ne=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=i.get(R),Z=S.length>1;if(Z)for(let oe=0;oe<S.length;oe++)n.bindFramebuffer(t.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ie.__webglMultisampledFramebuffer);let K=R.texture.mipmaps;K&&K.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ie.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ie.__webglFramebuffer);for(let oe=0;oe<S.length;oe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(W|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(W|=t.STENCIL_BUFFER_BIT)),Z){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ie.__webglColorRenderbuffer[oe]);let be=i.get(S[oe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,be,0)}t.blitFramebuffer(0,0,P,H,0,0,P,H,W,t.NEAREST),l===!0&&(ln.length=0,yn.length=0,ln.push(t.COLOR_ATTACHMENT0+oe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ln.push(ne),yn.push(ne),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,yn)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ln))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Z)for(let oe=0;oe<S.length;oe++){n.bindFramebuffer(t.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.RENDERBUFFER,ie.__webglColorRenderbuffer[oe]);let be=i.get(S[oe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.TEXTURE_2D,be,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ie.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let S=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function Zt(R){return Math.min(s.maxSamples,R.samples)}function cn(R){let S=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function O(R){let S=r.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function Wn(R,S){let P=R.colorSpace,H=R.format,W=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||P!==hi&&P!==ta&&(et.getTransfer(P)===Dt?(H!==Ss||W!==qi)&&Ee("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Fe("WebGLTextures: Unsupported texture color space:",P)),S}function gt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=X,this.getTextureUnits=Y,this.setTextureUnits=F,this.setTexture2D=$,this.setTexture2DArray=te,this.setTexture3D=fe,this.setTextureCube=ge,this.rebindTextures=yt,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=mn,this.updateMultisampleRenderTarget=Mn,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=we,this.useMultisampledRTT=cn,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function RI(t,e){function n(i,s=ta){let a,r=et.getTransfer(s);if(i===qi)return t.UNSIGNED_BYTE;if(i===dm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===pm)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Sy)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===My)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===xy)return t.BYTE;if(i===by)return t.SHORT;if(i===jc)return t.UNSIGNED_SHORT;if(i===fm)return t.INT;if(i===ea)return t.UNSIGNED_INT;if(i===bs)return t.FLOAT;if(i===Da)return t.HALF_FLOAT;if(i===Ey)return t.ALPHA;if(i===Ty)return t.RGB;if(i===Ss)return t.RGBA;if(i===Aa)return t.DEPTH_COMPONENT;if(i===xo)return t.DEPTH_STENCIL;if(i===mm)return t.RED;if(i===gm)return t.RED_INTEGER;if(i===bo)return t.RG;if(i===_m)return t.RG_INTEGER;if(i===vm)return t.RGBA_INTEGER;if(i===tf||i===nf||i===sf||i===af)if(r===Dt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===tf)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===nf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===af)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===tf)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===nf)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sf)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===af)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ym||i===xm||i===bm||i===Sm)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===ym)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xm)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===bm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Sm)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Mm||i===Em||i===Tm||i===Am||i===wm||i===rf||i===Rm)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Mm||i===Em)return r===Dt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Tm)return r===Dt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===Am)return a.COMPRESSED_R11_EAC;if(i===wm)return a.COMPRESSED_SIGNED_R11_EAC;if(i===rf)return a.COMPRESSED_RG11_EAC;if(i===Rm)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Cm||i===Dm||i===Nm||i===Lm||i===Om||i===Um||i===Im||i===Pm||i===Bm||i===Fm||i===zm||i===Hm||i===Gm||i===Vm)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Cm)return r===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Dm)return r===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Nm)return r===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Lm)return r===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Om)return r===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Um)return r===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Im)return r===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Pm)return r===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Bm)return r===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Fm)return r===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===zm)return r===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Hm)return r===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Gm)return r===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Vm)return r===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===km||i===Xm||i===Wm)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===km)return r===Dt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xm)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wm)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===qm||i===Ym||i===of||i===Zm)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===qm)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Ym)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===of)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Zm)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Jc?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}var CI=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,DI=`
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

}`,Jy=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){let i=new Ih(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let n=e.cameras[0].viewport,i=new vs({vertexShader:CI,fragmentShader:DI,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Nt(new fo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Qy=class extends Js{constructor(e,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,g=null,b=typeof XRWebGLBinding<"u",m=new Jy,p={},_=n.getContextAttributes(),x=null,v=null,M=[],E=[],w=new Ce,y=null,A=new Dn;A.viewport=new zt;let C=new Dn;C.viewport=new zt;let N=[A,C],U=new om,X=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let re=M[J];return re===void 0&&(re=new kc,M[J]=re),re.getTargetRaySpace()},this.getControllerGrip=function(J){let re=M[J];return re===void 0&&(re=new kc,M[J]=re),re.getGripSpace()},this.getHand=function(J){let re=M[J];return re===void 0&&(re=new kc,M[J]=re),re.getHandSpace()};function F(J){let re=E.indexOf(J.inputSource);if(re===-1)return;let ee=M[re];ee!==void 0&&(ee.update(J.inputSource,J.frame,c||r),ee.dispatchEvent({type:J.type,data:J.inputSource}))}function V(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",k);for(let J=0;J<M.length;J++){let re=E[J];re!==null&&(E[J]=null,M[J].disconnect(re))}X=null,Y=null,m.reset();for(let J in p)delete p[J];e.setRenderTarget(x),d=null,u=null,f=null,s=null,v=null,pt.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){a=J,i.isPresenting===!0&&Ee("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&Ee("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&b&&(f=new XRWebGLBinding(s,n)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",V),s.addEventListener("inputsourceschange",k),_.xrCompatible!==!0&&await n.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(w),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let ee=null,Ie=null,Ve=null;_.depth&&(Ve=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ee=_.stencil?xo:Aa,Ie=_.stencil?Jc:ea);let we={colorFormat:n.RGBA8,depthFormat:Ve,scaleFactor:a};f=this.getBinding(),u=f.createProjectionLayer(we),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new _s(u.textureWidth,u.textureHeight,{format:Ss,type:qi,depthTexture:new cr(u.textureWidth,u.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let ee={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(s,n,ee),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new _s(d.framebufferWidth,d.framebufferHeight,{format:Ss,type:qi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),pt.setContext(s),pt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k(J){for(let re=0;re<J.removed.length;re++){let ee=J.removed[re],Ie=E.indexOf(ee);Ie>=0&&(E[Ie]=null,M[Ie].disconnect(ee))}for(let re=0;re<J.added.length;re++){let ee=J.added[re],Ie=E.indexOf(ee);if(Ie===-1){for(let we=0;we<M.length;we++)if(we>=E.length){E.push(ee),Ie=we;break}else if(E[we]===null){E[we]=ee,Ie=we;break}if(Ie===-1)break}let Ve=M[Ie];Ve&&Ve.connect(ee)}}let $=new D,te=new D;function fe(J,re,ee){$.setFromMatrixPosition(re.matrixWorld),te.setFromMatrixPosition(ee.matrixWorld);let Ie=$.distanceTo(te),Ve=re.projectionMatrix.elements,we=ee.projectionMatrix.elements,nn=Ve[14]/(Ve[10]-1),at=Ve[14]/(Ve[10]+1),Ht=(Ve[9]+1)/Ve[5],yt=(Ve[9]-1)/Ve[5],lt=(Ve[8]-1)/Ve[0],mn=(we[8]+1)/we[0],ln=nn*lt,yn=nn*mn,Mn=Ie/(-lt+mn),Zt=Mn*-lt;if(re.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Zt),J.translateZ(Mn),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ve[10]===-1)J.projectionMatrix.copy(re.projectionMatrix),J.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{let cn=nn+Mn,O=at+Mn,Wn=ln-Zt,gt=yn+(Ie-Zt),R=Ht*at/O*cn,S=yt*at/O*cn;J.projectionMatrix.makePerspective(Wn,gt,R,S,cn,O),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ge(J,re){re===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(re.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let re=J.near,ee=J.far;m.texture!==null&&(m.depthNear>0&&(re=m.depthNear),m.depthFar>0&&(ee=m.depthFar)),U.near=C.near=A.near=re,U.far=C.far=A.far=ee,(X!==U.near||Y!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),X=U.near,Y=U.far),U.layers.mask=J.layers.mask|6,A.layers.mask=U.layers.mask&-5,C.layers.mask=U.layers.mask&-3;let Ie=J.parent,Ve=U.cameras;ge(U,Ie);for(let we=0;we<Ve.length;we++)ge(Ve[we],Ie);Ve.length===2?fe(U,A,C):U.projectionMatrix.copy(A.projectionMatrix),xe(J,U,Ie)};function xe(J,re,ee){ee===null?J.matrix.copy(re.matrixWorld):(J.matrix.copy(ee.matrixWorld),J.matrix.invert(),J.matrix.multiply(re.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(re.projectionMatrix),J.projectionMatrixInverse.copy(re.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ul*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(J){return p[J]};let dt=null;function en(J,re){if(h=re.getViewerPose(c||r),g=re,h!==null){let ee=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let Ie=!1;ee.length!==U.cameras.length&&(U.cameras.length=0,Ie=!0);for(let at=0;at<ee.length;at++){let Ht=ee[at],yt=null;if(d!==null)yt=d.getViewport(Ht);else{let mn=f.getViewSubImage(u,Ht);yt=mn.viewport,at===0&&(e.setRenderTargetTextures(v,mn.colorTexture,mn.depthStencilTexture),e.setRenderTarget(v))}let lt=N[at];lt===void 0&&(lt=new Dn,lt.layers.enable(at),lt.viewport=new zt,N[at]=lt),lt.matrix.fromArray(Ht.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(Ht.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(yt.x,yt.y,yt.width,yt.height),at===0&&(U.matrix.copy(lt.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ie===!0&&U.cameras.push(lt)}let Ve=s.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){f=i.getBinding();let at=f.getDepthInformation(ee[0]);at&&at.isValid&&at.texture&&m.init(at,s.renderState)}if(Ve&&Ve.includes("camera-access")&&b){e.state.unbindTexture(),f=i.getBinding();for(let at=0;at<ee.length;at++){let Ht=ee[at].camera;if(Ht){let yt=p[Ht];yt||(yt=new Ih,p[Ht]=yt);let lt=f.getCameraImage(Ht);yt.sourceTexture=lt}}}}for(let ee=0;ee<M.length;ee++){let Ie=E[ee],Ve=M[ee];Ie!==null&&Ve!==void 0&&Ve.update(Ie,re,c||r)}dt&&dt(J,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),g=null}let pt=new xw;pt.setAnimationLoop(en),this.setAnimationLoop=function(J){dt=J},this.dispose=function(){}}},NI=new qe,Aw=new Ye;Aw.set(-1,0,0,0,1,0,0,0,1);function LI(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Cy(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,x,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?a(m,p):p.isMeshLambertMaterial?(a(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(a(m,p),f(m,p)):p.isMeshPhongMaterial?(a(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(a(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(a(m,p),g(m,p)):p.isMeshDepthMaterial?a(m,p):p.isMeshDistanceMaterial?(a(m,p),b(m,p)):p.isMeshNormalMaterial?a(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,_,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ci&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ci&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=e.get(p),x=_.envMap,v=_.envMapRotation;x&&(m.envMap.value=x,m.envMapRotation.value.setFromMatrix4(NI.makeRotationFromEuler(v)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Aw),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=x*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ci&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function b(m,p){let _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function OI(t,e,n,i){let s={},a={},r=[],o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){let E=M.program;i.uniformBlockBinding(v,E)}function c(v,M){let E=s[v.id];E===void 0&&(m(v),E=h(v),s[v.id]=E,v.addEventListener("dispose",_));let w=M.program;i.updateUBOMapping(v,w);let y=e.render.frame;a[v.id]!==y&&(u(v),a[v.id]=y)}function h(v){let M=f();v.__bindingPointIndex=M;let E=t.createBuffer(),w=v.__size,y=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,w,y),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,M,E),E}function f(){for(let v=0;v<o;v++)if(r.indexOf(v)===-1)return r.push(v),v;return Fe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let M=s[v.id],E=v.uniforms,w=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,M);for(let y=0,A=E.length;y<A;y++){let C=E[y];if(Array.isArray(C))for(let N=0,U=C.length;N<U;N++)d(C[N],y,N,w);else d(C,y,0,w)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(v,M,E,w){if(b(v,M,E,w)===!0){let y=v.__offset,A=v.value;if(Array.isArray(A)){let C=0;for(let N=0;N<A.length;N++){let U=A[N],X=p(U);g(U,v.__data,C),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(C+=X.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,v.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,y,v.__data)}}function g(v,M,E){typeof v=="number"||typeof v=="boolean"?M[0]=v:v.isMatrix3?(M[0]=v.elements[0],M[1]=v.elements[1],M[2]=v.elements[2],M[3]=0,M[4]=v.elements[3],M[5]=v.elements[4],M[6]=v.elements[5],M[7]=0,M[8]=v.elements[6],M[9]=v.elements[7],M[10]=v.elements[8],M[11]=0):ArrayBuffer.isView(v)?M.set(new v.constructor(v.buffer,v.byteOffset,M.length)):v.toArray(M,E)}function b(v,M,E,w){let y=v.value,A=M+"_"+E;if(w[A]===void 0)return typeof y=="number"||typeof y=="boolean"?w[A]=y:ArrayBuffer.isView(y)?w[A]=y.slice():w[A]=y.clone(),!0;{let C=w[A];if(typeof y=="number"||typeof y=="boolean"){if(C!==y)return w[A]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(C.equals(y)===!1)return C.copy(y),!0}}return!1}function m(v){let M=v.uniforms,E=0,w=16;for(let A=0,C=M.length;A<C;A++){let N=Array.isArray(M[A])?M[A]:[M[A]];for(let U=0,X=N.length;U<X;U++){let Y=N[U],F=Array.isArray(Y.value)?Y.value:[Y.value];for(let V=0,k=F.length;V<k;V++){let $=F[V],te=p($),fe=E%w,ge=fe%te.boundary,xe=fe+ge;E+=ge,xe!==0&&w-xe<te.storage&&(E+=w-xe),Y.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=E,E+=te.storage}}}let y=E%w;return y>0&&(E+=w-y),v.__size=E,v.__cache={},this}function p(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?Ee("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):Ee("WebGLRenderer: Unsupported uniform value type.",v),M}function _(v){let M=v.target;M.removeEventListener("dispose",_);let E=r.indexOf(M.__bindingPointIndex);r.splice(E,1),t.deleteBuffer(s[M.id]),delete s[M.id],delete a[M.id]}function x(){for(let v in s)t.deleteBuffer(s[v]);r=[],s={},a={}}return{bind:l,update:c,dispose:x}}var UI=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Na=null;function II(){return Na===null&&(Na=new Wc(UI,16,16,bo,Da),Na.name="DFG_LUT",Na.minFilter=dn,Na.magFilter=dn,Na.wrapS=Gi,Na.wrapT=Gi,Na.generateMipmaps=!1,Na.needsUpdate=!0),Na}var ng=class{constructor(e={}){let{canvas:n=WA(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=qi}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=r;let b=d,m=new Set([vm,_m,gm]),p=new Set([qi,ea,jc,Jc,dm,pm]),_=new Uint32Array(4),x=new Int32Array(4),v=new D,M=null,E=null,w=[],y=[],A=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$s,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,N=!1,U=null,X=null,Y=null,F=null;this._outputColorSpace=fn;let V=0,k=0,$=null,te=-1,fe=null,ge=new zt,xe=new zt,dt=null,en=new Oe(0),pt=0,J=n.width,re=n.height,ee=1,Ie=null,Ve=null,we=new zt(0,0,J,re),nn=new zt(0,0,J,re),at=!1,Ht=new qc,yt=!1,lt=!1,mn=new qe,ln=new D,yn=new zt,Mn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Zt=!1;function cn(){return $===null?ee:1}let O=i;function Wn(T,I){return n.getContext(T,I)}try{let T={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"185"}`),n.addEventListener("webglcontextlost",Pe,!1),n.addEventListener("webglcontextrestored",St,!1),n.addEventListener("webglcontextcreationerror",Di,!1),O===null){let I="webgl2";if(O=Wn(I,T),O===null)throw Wn(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(T){throw Fe("WebGLRenderer: "+T.message),T}let gt,R,S,P,H,W,ne,ie,Z,K,oe,be,he,le,De,Ne,ze,L,se,q,ce,de,Q;function Te(){gt=new VO(O),gt.init(),ce=new RI(O,gt),R=new UO(O,gt,e,ce),S=new AI(O,gt),R.reversedDepthBuffer&&u&&S.buffers.depth.setReversed(!0),X=O.createFramebuffer(),Y=O.createFramebuffer(),F=O.createFramebuffer(),P=new WO(O),H=new fI,W=new wI(O,gt,S,H,R,ce,P),ne=new GO(C),ie=new KD(O),de=new LO(O,ie),Z=new kO(O,ie,P,de),K=new YO(O,Z,ie,de,P),L=new qO(O,R,W),De=new IO(H),oe=new hI(C,ne,gt,R,de,De),be=new LI(C,H),he=new pI,le=new xI(gt),ze=new NO(C,ne,S,K,g,l),Ne=new TI(C,K,R),Q=new OI(O,P,R,S),se=new OO(O,gt,P),q=new XO(O,gt,P),P.programs=oe.programs,C.capabilities=R,C.extensions=gt,C.properties=H,C.renderLists=he,C.shadowMap=Ne,C.state=S,C.info=P}Te(),b!==qi&&(A=new KO(b,n.width,n.height,o,s,a));let _e=new Qy(C,O);this.xr=_e,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let T=gt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=gt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(T){T!==void 0&&(ee=T,this.setSize(J,re,!1))},this.getSize=function(T){return T.set(J,re)},this.setSize=function(T,I,G=!0){if(_e.isPresenting){Ee("WebGLRenderer: Can't change size while VR device is presenting.");return}J=T,re=I,n.width=Math.floor(T*ee),n.height=Math.floor(I*ee),G===!0&&(n.style.width=T+"px",n.style.height=I+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,T,I)},this.getDrawingBufferSize=function(T){return T.set(J*ee,re*ee).floor()},this.setDrawingBufferSize=function(T,I,G){J=T,re=I,ee=G,n.width=Math.floor(T*G),n.height=Math.floor(I*G),this.setViewport(0,0,T,I)},this.setEffects=function(T){if(b===qi){Fe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let I=0;I<T.length;I++)if(T[I].isOutputPass===!0){Ee("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(ge)},this.getViewport=function(T){return T.copy(we)},this.setViewport=function(T,I,G,B){T.isVector4?we.set(T.x,T.y,T.z,T.w):we.set(T,I,G,B),S.viewport(ge.copy(we).multiplyScalar(ee).round())},this.getScissor=function(T){return T.copy(nn)},this.setScissor=function(T,I,G,B){T.isVector4?nn.set(T.x,T.y,T.z,T.w):nn.set(T,I,G,B),S.scissor(xe.copy(nn).multiplyScalar(ee).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(T){S.setScissorTest(at=T)},this.setOpaqueSort=function(T){Ie=T},this.setTransparentSort=function(T){Ve=T},this.getClearColor=function(T){return T.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(T=!0,I=!0,G=!0){let B=0;if(T){let z=!1;if($!==null){let pe=$.texture.format;z=m.has(pe)}if(z){let pe=$.texture.type,ve=p.has(pe),ue=ze.getClearColor(),Se=ze.getClearAlpha(),Ae=ue.r,Ze=ue.g,Qe=ue.b;ve?(_[0]=Ae,_[1]=Ze,_[2]=Qe,_[3]=Se,O.clearBufferuiv(O.COLOR,0,_)):(x[0]=Ae,x[1]=Ze,x[2]=Qe,x[3]=Se,O.clearBufferiv(O.COLOR,0,x))}else B|=O.COLOR_BUFFER_BIT}I&&(B|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(B|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&O.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),U=T},this.dispose=function(){n.removeEventListener("webglcontextlost",Pe,!1),n.removeEventListener("webglcontextrestored",St,!1),n.removeEventListener("webglcontextcreationerror",Di,!1),ze.dispose(),he.dispose(),le.dispose(),H.dispose(),ne.dispose(),K.dispose(),de.dispose(),Q.dispose(),oe.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",Ua),_e.removeEventListener("sessionend",na),ti.stop()};function Pe(T){T.preventDefault(),Eh("WebGLRenderer: Context Lost."),N=!0}function St(){Eh("WebGLRenderer: Context Restored."),N=!1;let T=P.autoReset,I=Ne.enabled,G=Ne.autoUpdate,B=Ne.needsUpdate,z=Ne.type;Te(),P.autoReset=T,Ne.enabled=I,Ne.autoUpdate=G,Ne.needsUpdate=B,Ne.type=z}function Di(T){Fe("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ki(T){let I=T.target;I.removeEventListener("dispose",Ki),iu(I)}function iu(T){gn(T),H.remove(T)}function gn(T){let I=H.get(T).programs;I!==void 0&&(I.forEach(function(G){oe.releaseProgram(G)}),T.isShaderMaterial&&oe.releaseShaderCache(T))}this.renderBufferDirect=function(T,I,G,B,z,pe){I===null&&(I=Mn);let ve=z.isMesh&&z.matrixWorld.determinantAffine()<0,ue=xl(T,I,G,B,z);S.setMaterial(B,ve);let Se=G.index,Ae=1;if(B.wireframe===!0){if(Se=Z.getWireframeAttribute(G),Se===void 0)return;Ae=2}let Ze=G.drawRange,Qe=G.attributes.position,Re=Ze.start*Ae,wt=(Ze.start+Ze.count)*Ae;pe!==null&&(Re=Math.max(Re,pe.start*Ae),wt=Math.min(wt,(pe.start+pe.count)*Ae)),Se!==null?(Re=Math.max(Re,0),wt=Math.min(wt,Se.count)):Qe!=null&&(Re=Math.max(Re,0),wt=Math.min(wt,Qe.count));let sn=wt-Re;if(sn<0||sn===1/0)return;de.setup(z,B,ue,G,Se);let an,Lt=se;if(Se!==null&&(an=ie.get(Se),Lt=q,Lt.setIndex(an)),z.isMesh)B.wireframe===!0?(S.setLineWidth(B.wireframeLinewidth*cn()),Lt.setMode(O.LINES)):Lt.setMode(O.TRIANGLES);else if(z.isLine){let Un=B.linewidth;Un===void 0&&(Un=1),S.setLineWidth(Un*cn()),z.isLineSegments?Lt.setMode(O.LINES):z.isLineLoop?Lt.setMode(O.LINE_LOOP):Lt.setMode(O.LINE_STRIP)}else z.isPoints?Lt.setMode(O.POINTS):z.isSprite&&Lt.setMode(O.TRIANGLES);if(z.isBatchedMesh)if(gt.get("WEBGL_multi_draw"))Lt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Un=z._multiDrawStarts,ye=z._multiDrawCounts,xi=z._multiDrawCount,ct=Se?ie.get(Se).bytesPerElement:1,Li=H.get(B).currentProgram.getUniforms();for(let Ji=0;Ji<xi;Ji++)Li.setValue(O,"_gl_DrawID",Ji),Lt.render(Un[Ji]/ct,ye[Ji])}else if(z.isInstancedMesh)Lt.renderInstances(Re,sn,z.count);else if(G.isInstancedBufferGeometry){let Un=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,ye=Math.min(G.instanceCount,Un);Lt.renderInstances(Re,sn,ye)}else Lt.render(Re,sn)};function qn(T,I,G){T.transparent===!0&&T.side===On&&T.forceSinglePass===!1?(T.side=Ci,T.needsUpdate=!0,En(T,I,G),T.side=js,T.needsUpdate=!0,En(T,I,G),T.side=On):En(T,I,G)}this.compile=function(T,I,G=null){G===null&&(G=T),E=le.get(G),E.init(I),y.push(E),G.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),T!==G&&T.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),E.setupLights();let B=new Set;return T.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let pe=z.material;if(pe)if(Array.isArray(pe))for(let ve=0;ve<pe.length;ve++){let ue=pe[ve];qn(ue,G,z),B.add(ue)}else qn(pe,G,z),B.add(pe)}),E=y.pop(),B},this.compileAsync=function(T,I,G=null){let B=this.compile(T,I,G);return new Promise(z=>{function pe(){if(B.forEach(function(ve){H.get(ve).currentProgram.isReady()&&B.delete(ve)}),B.size===0){z(T);return}setTimeout(pe,10)}gt.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Be=null;function Eo(T){Be&&Be(T)}function Ua(){ti.stop()}function na(){ti.start()}let ti=new xw;ti.setAnimationLoop(Eo),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(T){Be=T,_e.setAnimationLoop(T),T===null?ti.stop():ti.start()},_e.addEventListener("sessionstart",Ua),_e.addEventListener("sessionend",na),this.render=function(T,I){if(I!==void 0&&I.isCamera!==!0){Fe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;U!==null&&U.renderStart(T,I);let G=_e.enabled===!0&&_e.isPresenting===!0,B=A!==null&&($===null||G)&&A.begin(C,$);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(I),I=_e.getCamera()),T.isScene===!0&&T.onBeforeRender(C,T,I,$),E=le.get(T,y.length),E.init(I),E.state.textureUnits=W.getTextureUnits(),y.push(E),mn.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Ht.setFromProjectionMatrix(mn,Zs,I.reversedDepth),lt=this.localClippingEnabled,yt=De.init(this.clippingPlanes,lt),M=he.get(T,w.length),M.init(),w.push(M),_e.enabled===!0&&_e.isPresenting===!0){let ve=C.xr.getDepthSensingMesh();ve!==null&&ni(ve,I,-1/0,C.sortObjects)}ni(T,I,0,C.sortObjects),M.finish(),C.sortObjects===!0&&M.sort(Ie,Ve,I.reversedDepth),Zt=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,Zt&&ze.addToRenderList(M,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),yt===!0&&De.beginShadows();let z=E.state.shadowsArray;if(Ne.render(z,T,I),yt===!0&&De.endShadows(),(B&&A.hasRenderPass())===!1){let ve=M.opaque,ue=M.transmissive;if(E.setupLights(),I.isArrayCamera){let Se=I.cameras;if(ue.length>0)for(let Ae=0,Ze=Se.length;Ae<Ze;Ae++){let Qe=Se[Ae];At(ve,ue,T,Qe)}Zt&&ze.render(T);for(let Ae=0,Ze=Se.length;Ae<Ze;Ae++){let Qe=Se[Ae];ke(M,T,Qe,Qe.viewport)}}else ue.length>0&&At(ve,ue,T,I),Zt&&ze.render(T),ke(M,T,I)}$!==null&&k===0&&(W.updateMultisampleRenderTarget($),W.updateRenderTargetMipmap($)),B&&A.end(C),T.isScene===!0&&T.onAfterRender(C,T,I),de.resetDefaultState(),te=-1,fe=null,y.pop(),y.length>0?(E=y[y.length-1],W.setTextureUnits(E.state.textureUnits),yt===!0&&De.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,w.pop(),w.length>0?M=w[w.length-1]:M=null,U!==null&&U.renderEnd()};function ni(T,I,G,B){if(T.visible===!1)return;if(T.layers.test(I.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(I);else if(T.isLightProbeGrid)E.pushLightProbeGrid(T);else if(T.isLight)E.pushLight(T),T.castShadow&&E.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ht.intersectsSprite(T)){B&&yn.setFromMatrixPosition(T.matrixWorld).applyMatrix4(mn);let ve=K.update(T),ue=T.material;ue.visible&&M.push(T,ve,ue,G,yn.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ht.intersectsObject(T))){let ve=K.update(T),ue=T.material;if(B&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),yn.copy(T.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),yn.copy(ve.boundingSphere.center)),yn.applyMatrix4(T.matrixWorld).applyMatrix4(mn)),Array.isArray(ue)){let Se=ve.groups;for(let Ae=0,Ze=Se.length;Ae<Ze;Ae++){let Qe=Se[Ae],Re=ue[Qe.materialIndex];Re&&Re.visible&&M.push(T,ve,Re,G,yn.z,Qe)}}else ue.visible&&M.push(T,ve,ue,G,yn.z,null)}}let pe=T.children;for(let ve=0,ue=pe.length;ve<ue;ve++)ni(pe[ve],I,G,B)}function ke(T,I,G,B){let{opaque:z,transmissive:pe,transparent:ve}=T;E.setupLightsView(G),yt===!0&&De.setGlobalState(C.clippingPlanes,G),B&&S.viewport(ge.copy(B)),z.length>0&&mt(z,I,G),pe.length>0&&mt(pe,I,G),ve.length>0&&mt(ve,I,G),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function At(T,I,G,B){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[B.id]===void 0){let Re=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[B.id]=new _s(1,1,{generateMipmaps:!0,type:Re?Da:qi,minFilter:xs,samples:Math.max(4,R.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace})}let pe=E.state.transmissionRenderTarget[B.id],ve=B.viewport||ge;pe.setSize(ve.z*C.transmissionResolutionScale,ve.w*C.transmissionResolutionScale);let ue=C.getRenderTarget(),Se=C.getActiveCubeFace(),Ae=C.getActiveMipmapLevel();C.setRenderTarget(pe),C.getClearColor(en),pt=C.getClearAlpha(),pt<1&&C.setClearColor(16777215,.5),C.clear(),Zt&&ze.render(G);let Ze=C.toneMapping;C.toneMapping=$s;let Qe=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),E.setupLightsView(B),yt===!0&&De.setGlobalState(C.clippingPlanes,B),mt(T,G,B),W.updateMultisampleRenderTarget(pe),W.updateRenderTargetMipmap(pe),gt.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let wt=0,sn=I.length;wt<sn;wt++){let an=I[wt],{object:Lt,geometry:Un,material:ye,group:xi}=an;if(ye.side===On&&Lt.layers.test(B.layers)){let ct=ye.side;ye.side=Ci,ye.needsUpdate=!0,ji(Lt,G,B,Un,ye,xi),ye.side=ct,ye.needsUpdate=!0,Re=!0}}Re===!0&&(W.updateMultisampleRenderTarget(pe),W.updateRenderTargetMipmap(pe))}C.setRenderTarget(ue,Se,Ae),C.setClearColor(en,pt),Qe!==void 0&&(B.viewport=Qe),C.toneMapping=Ze}function mt(T,I,G){let B=I.isScene===!0?I.overrideMaterial:null;for(let z=0,pe=T.length;z<pe;z++){let ve=T[z],{object:ue,geometry:Se,group:Ae}=ve,Ze=ve.material;Ze.allowOverride===!0&&B!==null&&(Ze=B),ue.layers.test(G.layers)&&ji(ue,I,G,Se,Ze,Ae)}}function ji(T,I,G,B,z,pe){T.onBeforeRender(C,I,G,B,z,pe),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(C,I,G,B,T,pe),z.transparent===!0&&z.side===On&&z.forceSinglePass===!1?(z.side=Ci,z.needsUpdate=!0,C.renderBufferDirect(G,I,B,z,T,pe),z.side=js,z.needsUpdate=!0,C.renderBufferDirect(G,I,B,z,T,pe),z.side=On):C.renderBufferDirect(G,I,B,z,T,pe),T.onAfterRender(C,I,G,B,z,pe)}function En(T,I,G){I.isScene!==!0&&(I=Mn);let B=H.get(T),z=E.state.lights,pe=E.state.shadowsArray,ve=z.state.version,ue=oe.getParameters(T,z.state,pe,I,G,E.state.lightProbeGridArray),Se=oe.getProgramCacheKey(ue),Ae=B.programs;B.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?I.environment:null,B.fog=I.fog;let Ze=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;B.envMap=ne.get(T.envMap||B.environment,Ze),B.envMapRotation=B.environment!==null&&T.envMap===null?I.environmentRotation:T.envMapRotation,Ae===void 0&&(T.addEventListener("dispose",Ki),Ae=new Map,B.programs=Ae);let Qe=Ae.get(Se);if(Qe!==void 0){if(B.currentProgram===Qe&&B.lightsStateVersion===ve)return su(T,ue),Qe}else ue.uniforms=oe.getUniforms(T),U!==null&&T.isNodeMaterial&&U.build(T,G,ue),T.onBeforeCompile(ue,C),Qe=oe.acquireProgram(ue,Se),Ae.set(Se,Qe),B.uniforms=ue.uniforms;let Re=B.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Re.clippingPlanes=De.uniform),su(T,ue),B.needsLights=vr(T),B.lightsStateVersion=ve,B.needsLights&&(Re.ambientLightColor.value=z.state.ambient,Re.lightProbe.value=z.state.probe,Re.directionalLights.value=z.state.directional,Re.directionalLightShadows.value=z.state.directionalShadow,Re.spotLights.value=z.state.spot,Re.spotLightShadows.value=z.state.spotShadow,Re.rectAreaLights.value=z.state.rectArea,Re.ltc_1.value=z.state.rectAreaLTC1,Re.ltc_2.value=z.state.rectAreaLTC2,Re.pointLights.value=z.state.point,Re.pointLightShadows.value=z.state.pointShadow,Re.hemisphereLights.value=z.state.hemi,Re.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Re.spotLightMatrix.value=z.state.spotLightMatrix,Re.spotLightMap.value=z.state.spotLightMap,Re.pointShadowMatrix.value=z.state.pointShadowMatrix),B.lightProbeGrid=E.state.lightProbeGridArray.length>0,B.currentProgram=Qe,B.uniformsList=null,Qe}function Ni(T){if(T.uniformsList===null){let I=T.currentProgram.getUniforms();T.uniformsList=eu.seqWithValue(I.seq,T.uniforms)}return T.uniformsList}function su(T,I){let G=H.get(T);G.outputColorSpace=I.outputColorSpace,G.batching=I.batching,G.batchingColor=I.batchingColor,G.instancing=I.instancing,G.instancingColor=I.instancingColor,G.instancingMorph=I.instancingMorph,G.skinning=I.skinning,G.morphTargets=I.morphTargets,G.morphNormals=I.morphNormals,G.morphColors=I.morphColors,G.morphTargetsCount=I.morphTargetsCount,G.numClippingPlanes=I.numClippingPlanes,G.numIntersection=I.numClipIntersection,G.vertexAlphas=I.vertexAlphas,G.vertexTangents=I.vertexTangents,G.toneMapping=I.toneMapping}function au(T,I){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;v.setFromMatrixPosition(I.matrixWorld);for(let G=0,B=T.length;G<B;G++){let z=T[G];if(z.texture!==null&&z.boundingBox.containsPoint(v))return z}return null}function xl(T,I,G,B,z){I.isScene!==!0&&(I=Mn),W.resetTextureUnits();let pe=I.fog,ve=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?I.environment:null,ue=$===null?C.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:et.workingColorSpace,Se=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Ae=ne.get(B.envMap||ve,Se),Ze=B.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Qe=!!G.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Re=!!G.morphAttributes.position,wt=!!G.morphAttributes.normal,sn=!!G.morphAttributes.color,an=$s;B.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(an=C.toneMapping);let Lt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Un=Lt!==void 0?Lt.length:0,ye=H.get(B),xi=E.state.lights;if(yt===!0&&(lt===!0||T!==fe)){let Ot=T===fe&&B.id===te;De.setState(B,T,Ot)}let ct=!1;B.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==xi.state.version||ye.outputColorSpace!==ue||z.isBatchedMesh&&ye.batching===!1||!z.isBatchedMesh&&ye.batching===!0||z.isBatchedMesh&&ye.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&ye.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&ye.instancing===!1||!z.isInstancedMesh&&ye.instancing===!0||z.isSkinnedMesh&&ye.skinning===!1||!z.isSkinnedMesh&&ye.skinning===!0||z.isInstancedMesh&&ye.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&ye.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&ye.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&ye.instancingMorph===!1&&z.morphTexture!==null||ye.envMap!==Ae||B.fog===!0&&ye.fog!==pe||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==De.numPlanes||ye.numIntersection!==De.numIntersection)||ye.vertexAlphas!==Ze||ye.vertexTangents!==Qe||ye.morphTargets!==Re||ye.morphNormals!==wt||ye.morphColors!==sn||ye.toneMapping!==an||ye.morphTargetsCount!==Un||!!ye.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(ct=!0):(ct=!0,ye.__version=B.version);let Li=ye.currentProgram;ct===!0&&(Li=En(B,I,z),U&&B.isNodeMaterial&&U.onUpdateProgram(B,Li,ye));let Ji=!1,ia=!1,yr=!1,Rt=Li.getUniforms(),un=ye.uniforms;if(S.useProgram(Li.program)&&(Ji=!0,ia=!0,yr=!0),B.id!==te&&(te=B.id,ia=!0),ye.needsLights){let Ot=au(E.state.lightProbeGridArray,z);ye.lightProbeGrid!==Ot&&(ye.lightProbeGrid=Ot,ia=!0)}if(Ji||fe!==T){S.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Rt.setValue(O,"projectionMatrix",T.projectionMatrix),Rt.setValue(O,"viewMatrix",T.matrixWorldInverse);let aa=Rt.map.cameraPosition;aa!==void 0&&aa.setValue(O,ln.setFromMatrixPosition(T.matrixWorld)),R.logarithmicDepthBuffer&&Rt.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Rt.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),fe!==T&&(fe=T,ia=!0,yr=!0)}if(ye.needsLights&&(xi.state.directionalShadowMap.length>0&&Rt.setValue(O,"directionalShadowMap",xi.state.directionalShadowMap,W),xi.state.spotShadowMap.length>0&&Rt.setValue(O,"spotShadowMap",xi.state.spotShadowMap,W),xi.state.pointShadowMap.length>0&&Rt.setValue(O,"pointShadowMap",xi.state.pointShadowMap,W)),z.isSkinnedMesh){Rt.setOptional(O,z,"bindMatrix"),Rt.setOptional(O,z,"bindMatrixInverse");let Ot=z.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),Rt.setValue(O,"boneTexture",Ot.boneTexture,W))}z.isBatchedMesh&&(Rt.setOptional(O,z,"batchingTexture"),Rt.setValue(O,"batchingTexture",z._matricesTexture,W),Rt.setOptional(O,z,"batchingIdTexture"),Rt.setValue(O,"batchingIdTexture",z._indirectTexture,W),Rt.setOptional(O,z,"batchingColorTexture"),z._colorsTexture!==null&&Rt.setValue(O,"batchingColorTexture",z._colorsTexture,W));let sa=G.morphAttributes;if((sa.position!==void 0||sa.normal!==void 0||sa.color!==void 0)&&L.update(z,G,Li),(ia||ye.receiveShadow!==z.receiveShadow)&&(ye.receiveShadow=z.receiveShadow,Rt.setValue(O,"receiveShadow",z.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&I.environment!==null&&(un.envMapIntensity.value=I.environmentIntensity),un.dfgLUT!==void 0&&(un.dfgLUT.value=II()),ia){if(Rt.setValue(O,"toneMappingExposure",C.toneMappingExposure),ye.needsLights&&Bs(un,yr),pe&&B.fog===!0&&be.refreshFogUniforms(un,pe),be.refreshMaterialUniforms(un,B,ee,re,E.state.transmissionRenderTarget[T.id]),ye.needsLights&&ye.lightProbeGrid){let Ot=ye.lightProbeGrid;un.probesSH.value=Ot.texture,un.probesMin.value.copy(Ot.boundingBox.min),un.probesMax.value.copy(Ot.boundingBox.max),un.probesResolution.value.copy(Ot.resolution)}eu.upload(O,Ni(ye),un,W)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(eu.upload(O,Ni(ye),un,W),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Rt.setValue(O,"center",z.center),Rt.setValue(O,"modelViewMatrix",z.modelViewMatrix),Rt.setValue(O,"normalMatrix",z.normalMatrix),Rt.setValue(O,"modelMatrix",z.matrixWorld),B.uniformsGroups!==void 0){let Ot=B.uniformsGroups;for(let aa=0,xr=Ot.length;aa<xr;aa++){let ru=Ot[aa];Q.update(ru,Li),Q.bind(ru,Li)}}return Li}function Bs(T,I){T.ambientLightColor.needsUpdate=I,T.lightProbe.needsUpdate=I,T.directionalLights.needsUpdate=I,T.directionalLightShadows.needsUpdate=I,T.pointLights.needsUpdate=I,T.pointLightShadows.needsUpdate=I,T.spotLights.needsUpdate=I,T.spotLightShadows.needsUpdate=I,T.rectAreaLights.needsUpdate=I,T.hemisphereLights.needsUpdate=I}function vr(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(T,I,G){let B=H.get(T);B.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),H.get(T.texture).__webglTexture=I,H.get(T.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:G,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,I){let G=H.get(T);G.__webglFramebuffer=I,G.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(T,I=0,G=0){$=T,V=I,k=G;let B=null,z=!1,pe=!1;if(T){let ue=H.get(T);if(ue.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(O.FRAMEBUFFER,ue.__webglFramebuffer),ge.copy(T.viewport),xe.copy(T.scissor),dt=T.scissorTest,S.viewport(ge),S.scissor(xe),S.setScissorTest(dt),te=-1;return}else if(ue.__webglFramebuffer===void 0)W.setupRenderTarget(T);else if(ue.__hasExternalTextures)W.rebindTextures(T,H.get(T.texture).__webglTexture,H.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Ze=T.depthTexture;if(ue.__boundDepthTexture!==Ze){if(Ze!==null&&H.has(Ze)&&(T.width!==Ze.image.width||T.height!==Ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(T)}}let Se=T.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(pe=!0);let Ae=H.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ae[I])?B=Ae[I][G]:B=Ae[I],z=!0):T.samples>0&&W.useMultisampledRTT(T)===!1?B=H.get(T).__webglMultisampledFramebuffer:Array.isArray(Ae)?B=Ae[G]:B=Ae,ge.copy(T.viewport),xe.copy(T.scissor),dt=T.scissorTest}else ge.copy(we).multiplyScalar(ee).floor(),xe.copy(nn).multiplyScalar(ee).floor(),dt=at;if(G!==0&&(B=X),S.bindFramebuffer(O.FRAMEBUFFER,B)&&S.drawBuffers(T,B),S.viewport(ge),S.scissor(xe),S.setScissorTest(dt),z){let ue=H.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+I,ue.__webglTexture,G)}else if(pe){let ue=I;for(let Se=0;Se<T.textures.length;Se++){let Ae=H.get(T.textures[Se]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Se,Ae.__webglTexture,G,ue)}}else if(T!==null&&G!==0){let ue=H.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ue.__webglTexture,G)}te=-1},this.readRenderTargetPixels=function(T,I,G,B,z,pe,ve,ue=0){if(!(T&&T.isWebGLRenderTarget)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=H.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ve!==void 0&&(Se=Se[ve]),Se){S.bindFramebuffer(O.FRAMEBUFFER,Se);try{let Ae=T.textures[ue],Ze=Ae.format,Qe=Ae.type;if(T.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ue),!R.textureFormatReadable(Ze)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!R.textureTypeReadable(Qe)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=T.width-B&&G>=0&&G<=T.height-z&&O.readPixels(I,G,B,z,ce.convert(Ze),ce.convert(Qe),pe)}finally{let Ae=$!==null?H.get($).__webglFramebuffer:null;S.bindFramebuffer(O.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(T,I,G,B,z,pe,ve,ue=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=H.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ve!==void 0&&(Se=Se[ve]),Se)if(I>=0&&I<=T.width-B&&G>=0&&G<=T.height-z){S.bindFramebuffer(O.FRAMEBUFFER,Se);let Ae=T.textures[ue],Ze=Ae.format,Qe=Ae.type;if(T.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ue),!R.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!R.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Re=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Re),O.bufferData(O.PIXEL_PACK_BUFFER,pe.byteLength,O.STREAM_READ),O.readPixels(I,G,B,z,ce.convert(Ze),ce.convert(Qe),0);let wt=$!==null?H.get($).__webglFramebuffer:null;S.bindFramebuffer(O.FRAMEBUFFER,wt);let sn=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await YA(O,sn,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Re),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,pe),O.deleteBuffer(Re),O.deleteSync(sn),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,I=null,G=0){let B=Math.pow(2,-G),z=Math.floor(T.image.width*B),pe=Math.floor(T.image.height*B),ve=I!==null?I.x:0,ue=I!==null?I.y:0;W.setTexture2D(T,0),O.copyTexSubImage2D(O.TEXTURE_2D,G,0,0,ve,ue,z,pe),S.unbindTexture()},this.copyTextureToTexture=function(T,I,G=null,B=null,z=0,pe=0){let ve,ue,Se,Ae,Ze,Qe,Re,wt,sn,an=T.isCompressedTexture?T.mipmaps[pe]:T.image;if(G!==null)ve=G.max.x-G.min.x,ue=G.max.y-G.min.y,Se=G.isBox3?G.max.z-G.min.z:1,Ae=G.min.x,Ze=G.min.y,Qe=G.isBox3?G.min.z:0;else{let un=Math.pow(2,-z);ve=Math.floor(an.width*un),ue=Math.floor(an.height*un),T.isDataArrayTexture?Se=an.depth:T.isData3DTexture?Se=Math.floor(an.depth*un):Se=1,Ae=0,Ze=0,Qe=0}B!==null?(Re=B.x,wt=B.y,sn=B.z):(Re=0,wt=0,sn=0);let Lt=ce.convert(I.format),Un=ce.convert(I.type),ye;I.isData3DTexture?(W.setTexture3D(I,0),ye=O.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(W.setTexture2DArray(I,0),ye=O.TEXTURE_2D_ARRAY):(W.setTexture2D(I,0),ye=O.TEXTURE_2D),S.activeTexture(O.TEXTURE0),S.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,I.flipY),S.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),S.pixelStorei(O.UNPACK_ALIGNMENT,I.unpackAlignment);let xi=S.getParameter(O.UNPACK_ROW_LENGTH),ct=S.getParameter(O.UNPACK_IMAGE_HEIGHT),Li=S.getParameter(O.UNPACK_SKIP_PIXELS),Ji=S.getParameter(O.UNPACK_SKIP_ROWS),ia=S.getParameter(O.UNPACK_SKIP_IMAGES);S.pixelStorei(O.UNPACK_ROW_LENGTH,an.width),S.pixelStorei(O.UNPACK_IMAGE_HEIGHT,an.height),S.pixelStorei(O.UNPACK_SKIP_PIXELS,Ae),S.pixelStorei(O.UNPACK_SKIP_ROWS,Ze),S.pixelStorei(O.UNPACK_SKIP_IMAGES,Qe);let yr=T.isDataArrayTexture||T.isData3DTexture,Rt=I.isDataArrayTexture||I.isData3DTexture;if(T.isDepthTexture){let un=H.get(T),sa=H.get(I),Ot=H.get(un.__renderTarget),aa=H.get(sa.__renderTarget);S.bindFramebuffer(O.READ_FRAMEBUFFER,Ot.__webglFramebuffer),S.bindFramebuffer(O.DRAW_FRAMEBUFFER,aa.__webglFramebuffer);for(let xr=0;xr<Se;xr++)yr&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,H.get(T).__webglTexture,z,Qe+xr),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,H.get(I).__webglTexture,pe,sn+xr)),O.blitFramebuffer(Ae,Ze,ve,ue,Re,wt,ve,ue,O.DEPTH_BUFFER_BIT,O.NEAREST);S.bindFramebuffer(O.READ_FRAMEBUFFER,null),S.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(z!==0||T.isRenderTargetTexture||H.has(T)){let un=H.get(T),sa=H.get(I);S.bindFramebuffer(O.READ_FRAMEBUFFER,Y),S.bindFramebuffer(O.DRAW_FRAMEBUFFER,F);for(let Ot=0;Ot<Se;Ot++)yr?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,un.__webglTexture,z,Qe+Ot):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,un.__webglTexture,z),Rt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,sa.__webglTexture,pe,sn+Ot):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,sa.__webglTexture,pe),z!==0?O.blitFramebuffer(Ae,Ze,ve,ue,Re,wt,ve,ue,O.COLOR_BUFFER_BIT,O.NEAREST):Rt?O.copyTexSubImage3D(ye,pe,Re,wt,sn+Ot,Ae,Ze,ve,ue):O.copyTexSubImage2D(ye,pe,Re,wt,Ae,Ze,ve,ue);S.bindFramebuffer(O.READ_FRAMEBUFFER,null),S.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Rt?T.isDataTexture||T.isData3DTexture?O.texSubImage3D(ye,pe,Re,wt,sn,ve,ue,Se,Lt,Un,an.data):I.isCompressedArrayTexture?O.compressedTexSubImage3D(ye,pe,Re,wt,sn,ve,ue,Se,Lt,an.data):O.texSubImage3D(ye,pe,Re,wt,sn,ve,ue,Se,Lt,Un,an):T.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,pe,Re,wt,ve,ue,Lt,Un,an.data):T.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,pe,Re,wt,an.width,an.height,Lt,an.data):O.texSubImage2D(O.TEXTURE_2D,pe,Re,wt,ve,ue,Lt,Un,an);S.pixelStorei(O.UNPACK_ROW_LENGTH,xi),S.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ct),S.pixelStorei(O.UNPACK_SKIP_PIXELS,Li),S.pixelStorei(O.UNPACK_SKIP_ROWS,Ji),S.pixelStorei(O.UNPACK_SKIP_IMAGES,ia),pe===0&&I.generateMipmaps&&O.generateMipmap(ye),S.unbindTexture()},this.initRenderTarget=function(T){H.get(T).__webglFramebuffer===void 0&&W.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?W.setTextureCube(T,0):T.isData3DTexture?W.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?W.setTexture2DArray(T,0):W.setTexture2D(T,0),S.unbindTexture()},this.resetState=function(){V=0,k=0,$=null,S.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let n=this.getContext();n.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),n.unpackColorSpace=et._getUnpackColorSpace()}};function $y(t,e){if(e===Ay)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),t;if(e===Qc||e===lf){let n=t.getIndex();if(n===null){let r=[],o=t.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)r.push(l);t.setIndex(r),n=t.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),t}let i=n.count-2,s=[];if(e===Qc)for(let r=1;r<=i;r++)s.push(n.getX(0)),s.push(n.getX(r)),s.push(n.getX(r+1));else for(let r=0;r<i;r++)r%2===0?(s.push(n.getX(r)),s.push(n.getX(r+1)),s.push(n.getX(r+2))):(s.push(n.getX(r+2)),s.push(n.getX(r+1)),s.push(n.getX(r)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let a=t.clone();return a.setIndex(s),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),t}function ww(t){let e=new Map,n=new Map,i=t.clone();return Rw(t,i,function(s,a){e.set(a,s),n.set(s,a)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;let a=s,r=e.get(s),o=r.skeleton.bones;a.skeleton=r.skeleton.clone(),a.bindMatrix.copy(r.bindMatrix),a.skeleton.bones=o.map(function(l){return n.get(l)}),a.bind(a.skeleton,a.bindMatrix)}),i}function Rw(t,e,n){n(t,e);for(let i=0;i<t.children.length;i++)Rw(t.children[i],e.children[i],n)}var ag=class extends Is{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(n){return new rx(n)}),this.register(function(n){return new ox(n)}),this.register(function(n){return new gx(n)}),this.register(function(n){return new _x(n)}),this.register(function(n){return new vx(n)}),this.register(function(n){return new cx(n)}),this.register(function(n){return new ux(n)}),this.register(function(n){return new hx(n)}),this.register(function(n){return new fx(n)}),this.register(function(n){return new ax(n)}),this.register(function(n){return new dx(n)}),this.register(function(n){return new lx(n)}),this.register(function(n){return new mx(n)}),this.register(function(n){return new px(n)}),this.register(function(n){return new ix(n)}),this.register(function(n){return new rg(n,st.EXT_MESHOPT_COMPRESSION)}),this.register(function(n){return new rg(n,st.KHR_MESHOPT_COMPRESSION)}),this.register(function(n){return new yx(n)})}load(e,n,i,s){let a=this,r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){let c=ys.extractUrlBase(e);r=ys.resolveURL(c,this.path)}else r=ys.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),a.manager.itemError(e),a.manager.itemEnd(e)},l=new gr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{a.parse(c,r,function(h){n(h),a.manager.itemEnd(e)},o)}catch(h){o(h)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,n,i,s){let a,r={},o={},l=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Ow){try{r[st.KHR_BINARY_GLTF]=new xx(e)}catch(f){s&&s(f);return}a=JSON.parse(r[st.KHR_BINARY_GLTF].content)}else a=JSON.parse(l.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new wx(a,{path:n||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let f=this.pluginCallbacks[h](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[f.name]=f,r[f.name]=!0}if(a.extensionsUsed)for(let h=0;h<a.extensionsUsed.length;++h){let f=a.extensionsUsed[h],u=a.extensionsRequired||[];switch(f){case st.KHR_MATERIALS_UNLIT:r[f]=new sx;break;case st.KHR_DRACO_MESH_COMPRESSION:r[f]=new bx(a,this.dracoLoader);break;case st.KHR_TEXTURE_TRANSFORM:r[f]=new Sx;break;case st.KHR_MESH_QUANTIZATION:r[f]=new Mx;break;default:u.indexOf(f)>=0&&o[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(r),c.setPlugins(o),c.parse(i,s)}parseAsync(e,n){let i=this;return new Promise(function(s,a){i.parse(e,n,s,a)})}};function BI(){let t={};return{get:function(e){return t[e]},add:function(e,n){t[e]=n},remove:function(e){delete t[e]},removeAll:function(){t={}}}}function Sn(t,e,n){let i=t.json.materials[e];return i.extensions&&i.extensions[n]?i.extensions[n]:null}var st={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},ix=class{constructor(e){this.parser=e,this.name=st.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,n=this.parser.json.nodes||[];for(let i=0,s=n.length;i<s;i++){let a=n[i];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){let n=this.parser,i="light:"+e,s=n.cache.get(i);if(s)return s;let a=n.json,l=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e],c,h=new Oe(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],hi);let f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new pl(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Wh(h),c.distance=f;break;case"spot":c=new Xh(h),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Oa(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=n.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),n.cache.add(i,s),s}getDependency(e,n){if(e==="light")return this._loadLight(n)}createNodeAttachment(e){let n=this,i=this.parser,a=i.json.nodes[e],o=(a.extensions&&a.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(n.cache,o,l)})}},sx=class{constructor(){this.name=st.KHR_MATERIALS_UNLIT}getMaterialType(){return Ln}extendParams(e,n,i){let s=[];e.color=new Oe(1,1,1),e.opacity=1;let a=n.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){let r=a.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],hi),e.opacity=r[3]}a.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",a.baseColorTexture,fn))}return Promise.all(s)}},ax=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,n){let i=Sn(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(n.emissiveIntensity=i.emissiveStrength),Promise.resolve()}},rx=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Sn(this.parser,e,this.name)!==null?Xi:null}extendMaterialParams(e,n){let i=Sn(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(i.clearcoatFactor!==void 0&&(n.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(n,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(n.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(n,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(n,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){let a=i.clearcoatNormalTexture.scale;n.clearcoatNormalScale=new Ce(a,a)}return Promise.all(s)}},ox=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Sn(this.parser,e,this.name)!==null?Xi:null}extendMaterialParams(e,n){let i=Sn(this.parser,e,this.name);return i===null||(n.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}},lx=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Sn(this.parser,e,this.name)!==null?Xi:null}extendMaterialParams(e,n){let i=Sn(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.iridescenceFactor!==void 0&&(n.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(n,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(n.iridescenceIOR=i.iridescenceIor),n.iridescenceThicknessRange===void 0&&(n.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(n,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(s)}},cx=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SHEEN}getMaterialType(e){return Sn(this.parser,e,this.name)!==null?Xi:null}extendMaterialParams(e,n){let i=Sn(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(n.sheenColor=new Oe(0,0,0),n.sheenRoughness=0,n.sheen=1,i.sheenColorFactor!==void 0){let a=i.sheenColorFactor;n.sheenColor.setRGB(a[0],a[1],a[2],hi)}return i.sheenRoughnessFactor!==void 0&&(n.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(n,"sheenColorMap",i.sheenColorTexture,fn)),i.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(n,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(s)}},ux=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Sn(this.parser,e,this.name)!==null?Xi:null}extendMaterialParams(e,n){let i=Sn(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.transmissionFactor!==void 0&&(n.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(n,"transmissionMap",i.transmissionTexture)),Promise.all(s)}},hx=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_VOLUME}getMaterialType(e){return Sn(this.parser,e,this.name)!==null?Xi:null}extendMaterialParams(e,n){let i=Sn(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];n.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(n,"thicknessMap",i.thicknessTexture)),n.attenuationDistance=i.attenuationDistance||1/0;let a=i.attenuationColor||[1,1,1];return n.attenuationColor=new Oe().setRGB(a[0],a[1],a[2],hi),Promise.all(s)}},fx=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IOR}getMaterialType(e){return Sn(this.parser,e,this.name)!==null?Xi:null}extendMaterialParams(e,n){let i=Sn(this.parser,e,this.name);return i===null||(n.ior=i.ior!==void 0?i.ior:1.5,n.ior===0&&(n.ior=1e3)),Promise.resolve()}},dx=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Sn(this.parser,e,this.name)!==null?Xi:null}extendMaterialParams(e,n){let i=Sn(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];n.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&s.push(this.parser.assignTexture(n,"specularIntensityMap",i.specularTexture));let a=i.specularColorFactor||[1,1,1];return n.specularColor=new Oe().setRGB(a[0],a[1],a[2],hi),i.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(n,"specularColorMap",i.specularColorTexture,fn)),Promise.all(s)}},px=class{constructor(e){this.parser=e,this.name=st.EXT_MATERIALS_BUMP}getMaterialType(e){return Sn(this.parser,e,this.name)!==null?Xi:null}extendMaterialParams(e,n){let i=Sn(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return n.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&s.push(this.parser.assignTexture(n,"bumpMap",i.bumpTexture)),Promise.all(s)}},mx=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Sn(this.parser,e,this.name)!==null?Xi:null}extendMaterialParams(e,n){let i=Sn(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.anisotropyStrength!==void 0&&(n.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(n.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(n,"anisotropyMap",i.anisotropyTexture)),Promise.all(s)}},gx=class{constructor(e){this.parser=e,this.name=st.KHR_TEXTURE_BASISU}loadTexture(e){let n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let a=s.extensions[this.name],r=n.options.ktx2Loader;if(!r){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return n.loadTextureImage(e,a.source,r)}},_x=class{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_WEBP}loadTexture(e){let n=this.name,i=this.parser,s=i.json,a=s.textures[e];if(!a.extensions||!a.extensions[n])return null;let r=a.extensions[n],o=s.images[r.source],l=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,r.source,l)}},vx=class{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_AVIF}loadTexture(e){let n=this.name,i=this.parser,s=i.json,a=s.textures[e];if(!a.extensions||!a.extensions[n])return null;let r=a.extensions[n],o=s.images[r.source],l=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,r.source,l)}},rg=class{constructor(e,n){this.name=n,this.parser=e}loadBufferView(e){let n=this.parser.json,i=n.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],a=this.parser.getDependency("buffer",s.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,f=s.byteStride,u=new Uint8Array(o,l,c);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(h,f,u,s.mode,s.filter).then(function(d){return d.buffer}):r.ready.then(function(){let d=new ArrayBuffer(h*f);return r.decodeGltfBuffer(new Uint8Array(d),h,f,u,s.mode,s.filter),d})})}else return null}},yx=class{constructor(e){this.name=st.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let n=this.parser.json,i=n.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=n.meshes[i.mesh];for(let c of s.primitives)if(c.mode!==Ps.TRIANGLES&&c.mode!==Ps.TRIANGLE_STRIP&&c.mode!==Ps.TRIANGLE_FAN&&c.mode!==void 0)return null;let r=i.extensions[this.name].attributes,o=[],l={};for(let c in r)o.push(this.parser.getDependency("accessor",r[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),f=h.isGroup?h.children:[h],u=c[0].count,d=[];for(let g of f){let b=new qe,m=new D,p=new vi,_=new D(1,1,1),x=new Nh(g.geometry,g.material,u);for(let v=0;v<u;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&_.fromBufferAttribute(l.SCALE,v),x.setMatrixAt(v,b.compose(m,p,_));for(let v in l)if(v==="_COLOR_0"){let M=l[v];x.instanceColor=new ho(M.array,M.itemSize,M.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);pn.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),d.push(x)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},Ow="glTF",ff=12,Cw={JSON:1313821514,BIN:5130562},xx=class{constructor(e){this.name=st.KHR_BINARY_GLTF,this.content=null,this.body=null;let n=new DataView(e,0,ff),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:n.getUint32(4,!0),length:n.getUint32(8,!0)},this.header.magic!==Ow)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-ff,a=new DataView(e,ff),r=0;for(;r<s;){let o=a.getUint32(r,!0);r+=4;let l=a.getUint32(r,!0);if(r+=4,l===Cw.JSON){let c=new Uint8Array(e,ff+r,o);this.content=i.decode(c)}else if(l===Cw.BIN){let c=ff+r;this.body=e.slice(c,c+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},bx=class{constructor(e,n){if(!n)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=st.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=n,this.dracoLoader.preload()}decodePrimitive(e,n){let i=this.json,s=this.dracoLoader,a=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},l={},c={};for(let h in r){let f=Tx[h]||h.toLowerCase();o[f]=r[h]}for(let h in e.attributes){let f=Tx[h]||h.toLowerCase();if(r[h]!==void 0){let u=i.accessors[e.attributes[h]],d=nu[u.componentType];c[f]=d.name,l[f]=u.normalized===!0}}return n.getDependency("bufferView",a).then(function(h){return new Promise(function(f,u){s.decodeDracoFile(h,function(d){for(let g in d.attributes){let b=d.attributes[g],m=l[g];m!==void 0&&(b.normalized=m)}f(d)},o,c,hi,u)})})}},Sx=class{constructor(){this.name=st.KHR_TEXTURE_TRANSFORM}extendTexture(e,n){return(n.texCoord===void 0||n.texCoord===e.channel)&&n.offset===void 0&&n.rotation===void 0&&n.scale===void 0||(e=e.clone(),n.texCoord!==void 0&&(e.channel=n.texCoord),n.offset!==void 0&&e.offset.fromArray(n.offset),n.rotation!==void 0&&(e.rotation=n.rotation),n.scale!==void 0&&e.repeat.fromArray(n.scale),e.needsUpdate=!0),e}},Mx=class{constructor(){this.name=st.KHR_MESH_QUANTIZATION}},og=class extends Ra{constructor(e,n,i,s){super(e,n,i,s)}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s*3+s;for(let r=0;r!==s;r++)n[r]=i[a+r];return n}interpolate_(e,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-n,f=(i-n)/h,u=f*f,d=u*f,g=e*c,b=g-c,m=-2*d+3*u,p=d-u,_=1-m,x=p-u+f;for(let v=0;v!==o;v++){let M=r[b+v+o],E=r[b+v+l]*h,w=r[g+v+o],y=r[g+v]*h;a[v]=_*M+x*E+m*w+p*y}return a}},FI=new vi,Ex=class extends og{interpolate_(e,n,i,s){let a=super.interpolate_(e,n,i,s);return FI.fromArray(a).normalize().toArray(a),a}},Ps={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},nu={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Dw={9728:bn,9729:dn,9984:hm,9985:Kc,9986:gl,9987:xs},Nw={33071:Gi,33648:Bc,10497:lo},ex={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Tx={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Mo={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},zI={CUBICSPLINE:void 0,LINEAR:cl,STEP:ll},tx={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function HI(t){return t.DefaultMaterial===void 0&&(t.DefaultMaterial=new Qs({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:js})),t.DefaultMaterial}function yl(t,e,n){for(let i in n.extensions)t[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=n.extensions[i])}function Oa(t,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(t.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function GI(t,e,n){let i=!1,s=!1,a=!1;for(let c=0,h=e.length;c<h;c++){let f=e[c];if(f.POSITION!==void 0&&(i=!0),f.NORMAL!==void 0&&(s=!0),f.COLOR_0!==void 0&&(a=!0),i&&s&&a)break}if(!i&&!s&&!a)return Promise.resolve(t);let r=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let f=e[c];if(i){let u=f.POSITION!==void 0?n.getDependency("accessor",f.POSITION):t.attributes.position;r.push(u)}if(s){let u=f.NORMAL!==void 0?n.getDependency("accessor",f.NORMAL):t.attributes.normal;o.push(u)}if(a){let u=f.COLOR_0!==void 0?n.getDependency("accessor",f.COLOR_0):t.attributes.color;l.push(u)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],f=c[1],u=c[2];return i&&(t.morphAttributes.position=h),s&&(t.morphAttributes.normal=f),a&&(t.morphAttributes.color=u),t.morphTargetsRelative=!0,t})}function VI(t,e){if(t.updateMorphTargets(),e.weights!==void 0)for(let n=0,i=e.weights.length;n<i;n++)t.morphTargetInfluences[n]=e.weights[n];if(e.extras&&Array.isArray(e.extras.targetNames)){let n=e.extras.targetNames;if(t.morphTargetInfluences.length===n.length){t.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++)t.morphTargetDictionary[n[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function kI(t){let e,n=t.extensions&&t.extensions[st.KHR_DRACO_MESH_COMPRESSION];if(n?e="draco:"+n.bufferView+":"+n.indices+":"+nx(n.attributes):e=t.indices+":"+nx(t.attributes)+":"+t.mode,t.targets!==void 0)for(let i=0,s=t.targets.length;i<s;i++)e+=":"+nx(t.targets[i]);return e}function nx(t){let e="",n=Object.keys(t).sort();for(let i=0,s=n.length;i<s;i++)e+=n[i]+":"+t[n[i]]+";";return e}function Ax(t){switch(t){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function XI(t){return t.search(/\.jpe?g($|\?)/i)>0||t.search(/^data\:image\/jpeg/)===0?"image/jpeg":t.search(/\.webp($|\?)/i)>0||t.search(/^data\:image\/webp/)===0?"image/webp":t.search(/\.ktx2($|\?)/i)>0||t.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var WI=new qe,wx=class{constructor(e={},n={}){this.json=e,this.extensions={},this.plugins={},this.options=n,this.cache=new BI,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,a=!1,r=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,a=o.indexOf("Firefox")>-1,r=a?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||a&&r<98?this.textureLoader=new fl(this.options.manager):this.textureLoader=new Yh(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new gr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,n){let i=this,s=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(r){let o={scene:r[0][s.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:s.asset,parser:i,userData:{}};return yl(a,o,s),Oa(o,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(n)}_markDefs(){let e=this.json.nodes||[],n=this.json.skins||[],i=this.json.meshes||[];for(let s=0,a=n.length;s<a;s++){let r=n[s].joints;for(let o=0,l=r.length;o<l;o++)e[r[o]].isBone=!0}for(let s=0,a=e.length;s<a;s++){let r=e[s];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(i[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,n){n!==void 0&&(e.refs[n]===void 0&&(e.refs[n]=e.uses[n]=0),e.refs[n]++)}_getNodeRef(e,n,i){if(e.refs[n]<=1)return i;let s=i.clone(),a=(r,o)=>{let l=this.associations.get(r);l!=null&&this.associations.set(o,l);for(let[c,h]of r.children.entries())a(h,o.children[c])};return a(i,s),s.name+="_instance_"+e.uses[n]++,s}_invokeOne(e){let n=Object.values(this.plugins);n.push(this);for(let i=0;i<n.length;i++){let s=e(n[i]);if(s)return s}return null}_invokeAll(e){let n=Object.values(this.plugins);n.unshift(this);let i=[];for(let s=0;s<n.length;s++){let a=e(n[s]);a&&i.push(a)}return i}getDependency(e,n){let i=e+":"+n,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(n);break;case"node":s=this._invokeOne(function(a){return a.loadNode&&a.loadNode(n)});break;case"mesh":s=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(n)});break;case"accessor":s=this.loadAccessor(n);break;case"bufferView":s=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(n)});break;case"buffer":s=this.loadBuffer(n);break;case"material":s=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(n)});break;case"texture":s=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(n)});break;case"skin":s=this.loadSkin(n);break;case"animation":s=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(n)});break;case"camera":s=this.loadCamera(n);break;default:if(s=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,n)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let n=this.cache.get(e);if(!n){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];n=Promise.all(s.map(function(a,r){return i.getDependency(e,r)})),this.cache.add(e,n)}return n}loadBuffer(e){let n=this.json.buffers[e],i=this.fileLoader;if(n.type&&n.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+n.type+" buffer type is not supported.");if(n.uri===void 0&&e===0)return Promise.resolve(this.extensions[st.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(a,r){i.load(ys.resolveURL(n.uri,s.path),a,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+n.uri+'".'))})})}loadBufferView(e){let n=this.json.bufferViews[e];return this.getDependency("buffer",n.buffer).then(function(i){let s=n.byteLength||0,a=n.byteOffset||0;return i.slice(a,a+s)})}loadAccessor(e){let n=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let r=ex[s.type],o=nu[s.componentType],l=s.normalized===!0,c=new o(s.count*r);return Promise.resolve(new tn(c,r,l))}let a=[];return s.bufferView!==void 0?a.push(this.getDependency("bufferView",s.bufferView)):a.push(null),s.sparse!==void 0&&(a.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(a).then(function(r){let o=r[0],l=ex[s.type],c=nu[s.componentType],h=c.BYTES_PER_ELEMENT,f=h*l,u=s.byteOffset||0,d=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,b,m;if(d&&d!==f){let p=Math.floor(u/d),_="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,x=n.cache.get(_);x||(b=new c(o,p*d,s.count*d/h),x=new co(b,d/h),n.cache.add(_,x)),m=new uo(x,l,u%d/h,g)}else o===null?b=new c(s.count*l):b=new c(o,u,s.count*l),m=new tn(b,l,g);if(s.sparse!==void 0){let p=ex.SCALAR,_=nu[s.sparse.indices.componentType],x=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,M=new _(r[1],x,s.sparse.count*p),E=new c(r[2],v,s.sparse.count*l);o!==null&&(m=new tn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,y=M.length;w<y;w++){let A=M[w];if(m.setX(A,E[w*l]),l>=2&&m.setY(A,E[w*l+1]),l>=3&&m.setZ(A,E[w*l+2]),l>=4&&m.setW(A,E[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let n=this.json,i=this.options,a=n.textures[e].source,r=n.images[a],o=this.textureLoader;if(r.uri){let l=i.manager.getHandler(r.uri);l!==null&&(o=l)}return this.loadTextureImage(e,a,o)}loadTextureImage(e,n,i){let s=this,a=this.json,r=a.textures[e],o=a.images[n],l=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(n,i).then(function(h){h.flipY=!1,h.name=r.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let u=(a.samplers||{})[r.sampler]||{};return h.magFilter=Dw[u.magFilter]||dn,h.minFilter=Dw[u.minFilter]||xs,h.wrapS=Nw[u.wrapS]||lo,h.wrapT=Nw[u.wrapT]||lo,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==bn&&h.minFilter!==dn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,n){let i=this,s=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let r=s.images[e],o=self.URL||self.webkitURL,l=r.uri||"",c=!1;if(r.bufferView!==void 0)l=i.getDependency("bufferView",r.bufferView).then(function(f){c=!0;let u=new Blob([f],{type:r.mimeType});return l=o.createObjectURL(u),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(f){return new Promise(function(u,d){let g=u;n.isImageBitmapLoader===!0&&(g=function(b){let m=new ei(b);m.needsUpdate=!0,u(m)}),n.load(ys.resolveURL(f,a.path),g,void 0,d)})}).then(function(f){return c===!0&&o.revokeObjectURL(l),Oa(f,r),f.userData.mimeType=r.mimeType||XI(r.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=h,h}assignTexture(e,n,i,s){let a=this;return this.getDependency("texture",i.index).then(function(r){if(!r)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(r=r.clone(),r.channel=i.texCoord),a.extensions[st.KHR_TEXTURE_TRANSFORM]){let o=i.extensions!==void 0?i.extensions[st.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=a.associations.get(r);r=a.extensions[st.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),a.associations.set(r,l)}}return s!==void 0&&(r.colorSpace=s),e[n]=r,r})}assignFinalMaterial(e){let n=e.geometry,i=e.material,s=n.attributes.tangent===void 0,a=n.attributes.color!==void 0,r=n.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+i.uuid,l=this.cache.get(o);l||(l=new Yc,ki.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){let o="LineBasicMaterial:"+i.uuid,l=this.cache.get(o);l||(l=new Gn,ki.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(s||a||r){let o="ClonedMaterial:"+i.uuid+":";s&&(o+="derivative-tangents:"),a&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),a&&(l.vertexColors=!0),r&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Qs}loadMaterial(e){let n=this,i=this.json,s=this.extensions,a=i.materials[e],r,o={},l=a.extensions||{},c=[];if(l[st.KHR_MATERIALS_UNLIT]){let f=s[st.KHR_MATERIALS_UNLIT];r=f.getMaterialType(),c.push(f.extendParams(o,a,n))}else{let f=a.pbrMetallicRoughness||{};if(o.color=new Oe(1,1,1),o.opacity=1,Array.isArray(f.baseColorFactor)){let u=f.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],hi),o.opacity=u[3]}f.baseColorTexture!==void 0&&c.push(n.assignTexture(o,"map",f.baseColorTexture,fn)),o.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,o.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(n.assignTexture(o,"metalnessMap",f.metallicRoughnessTexture)),c.push(n.assignTexture(o,"roughnessMap",f.metallicRoughnessTexture))),r=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}a.doubleSided===!0&&(o.side=On);let h=a.alphaMode||tx.OPAQUE;if(h===tx.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===tx.MASK&&(o.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&r!==Ln&&(c.push(n.assignTexture(o,"normalMap",a.normalTexture)),o.normalScale=new Ce(1,1),a.normalTexture.scale!==void 0)){let f=a.normalTexture.scale;o.normalScale.set(f,f)}if(a.occlusionTexture!==void 0&&r!==Ln&&(c.push(n.assignTexture(o,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&r!==Ln){let f=a.emissiveFactor;o.emissive=new Oe().setRGB(f[0],f[1],f[2],hi)}return a.emissiveTexture!==void 0&&r!==Ln&&c.push(n.assignTexture(o,"emissiveMap",a.emissiveTexture,fn)),Promise.all(c).then(function(){let f=new r(o);return a.name&&(f.name=a.name),Oa(f,a),n.associations.set(f,{materials:e}),a.extensions&&yl(s,f,a),f})}createUniqueName(e){let n=Yt.sanitizeNodeName(e||"");return n in this.nodeNamesUsed?n+"_"+ ++this.nodeNamesUsed[n]:(this.nodeNamesUsed[n]=0,n)}loadGeometries(e){let n=this,i=this.extensions,s=this.primitiveCache;function a(o){return i[st.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,n).then(function(l){return Lw(l,o,n)})}let r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=kI(c),f=s[h];if(f)r.push(f.promise);else{let u;c.extensions&&c.extensions[st.KHR_DRACO_MESH_COMPRESSION]?u=a(c):u=Lw(new ft,c,n),s[h]={primitive:c,promise:u},r.push(u)}}return Promise.all(r)}loadMesh(e){let n=this,i=this.json,s=this.extensions,a=i.meshes[e],r=a.primitives,o=[];for(let l=0,c=r.length;l<c;l++){let h=r[l].material===void 0?HI(this.cache):this.getDependency("material",r[l].material);o.push(h)}return o.push(n.loadGeometries(r)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],f=[];for(let d=0,g=h.length;d<g;d++){let b=h[d],m=r[d],p,_=c[d];if(m.mode===Ps.TRIANGLES||m.mode===Ps.TRIANGLE_STRIP||m.mode===Ps.TRIANGLE_FAN||m.mode===void 0)p=a.isSkinnedMesh===!0?new Ch(b,_):new Nt(b,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Ps.TRIANGLE_STRIP?p.geometry=$y(p.geometry,lf):m.mode===Ps.TRIANGLE_FAN&&(p.geometry=$y(p.geometry,Qc));else if(m.mode===Ps.LINES)p=new Ri(b,_);else if(m.mode===Ps.LINE_STRIP)p=new fi(b,_);else if(m.mode===Ps.LINE_LOOP)p=new Lh(b,_);else if(m.mode===Ps.POINTS)p=new Oh(b,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&VI(p,a),p.name=n.createUniqueName(a.name||"mesh_"+e),Oa(p,a),m.extensions&&yl(s,p,m),n.assignFinalMaterial(p),f.push(p)}for(let d=0,g=f.length;d<g;d++)n.associations.set(f[d],{meshes:e,primitives:d});if(f.length===1)return a.extensions&&yl(s,f[0],a),f[0];let u=new Nn;a.extensions&&yl(s,u,a),n.associations.set(u,{meshes:e});for(let d=0,g=f.length;d<g;d++)u.add(f[d]);return u})}loadCamera(e){let n,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?n=new Dn(kt.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(n=new go(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(n.name=this.createUniqueName(i.name)),Oa(n,i),Promise.resolve(n)}loadSkin(e){let n=this.json.skins[e],i=[];for(let s=0,a=n.joints.length;s<a;s++)i.push(this._loadNodeShallow(n.joints[s]));return n.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",n.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let a=s.pop(),r=s,o=[],l=[];for(let c=0,h=r.length;c<h;c++){let f=r[c];if(f){o.push(f);let u=new qe;a!==null&&u.fromArray(a.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',n.joints[c])}return new Dh(o,l)})}loadAnimation(e){let n=this.json,i=this,s=n.animations[e],a=s.name?s.name:"animation_"+e,r=[],o=[],l=[],c=[],h=[];for(let f=0,u=s.channels.length;f<u;f++){let d=s.channels[f],g=s.samplers[d.sampler],b=d.target,m=b.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,_=s.parameters!==void 0?s.parameters[g.output]:g.output;b.node!==void 0&&(r.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",_)),c.push(g),h.push(b))}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(f){let u=f[0],d=f[1],g=f[2],b=f[3],m=f[4],p=[];for(let x=0,v=u.length;x<v;x++){let M=u[x],E=d[x],w=g[x],y=b[x],A=m[x];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let C=i._createAnimationTracks(M,E,w,y,A);if(C)for(let N=0;N<C.length;N++)p.push(C[N])}let _=new Gh(a,void 0,p);return Oa(_,s),_})}createNodeMesh(e){let n=this.json,i=this,s=n.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(a){let r=i._getNodeRef(i.meshCache,s.mesh,a);return s.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),r})}loadNode(e){let n=this.json,i=this,s=n.nodes[e],a=i._loadNodeShallow(e),r=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)r.push(i.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([a,Promise.all(r),l]).then(function(c){let h=c[0],f=c[1],u=c[2];u!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(u,WI)});for(let d=0,g=f.length;d<g;d++)h.add(f[d]);if(h.userData.pivot!==void 0&&f.length>0){let d=h.userData.pivot,g=f[0];h.pivot=new D().fromArray(d),h.position.x-=d[0],h.position.y-=d[1],h.position.z-=d[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let n=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let a=n.nodes[e],r=a.name?s.createUniqueName(a.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),a.camera!==void 0&&o.push(s.getDependency("camera",a.camera).then(function(c){return s._getNodeRef(s.cameraCache,a.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(a.isBone===!0?h=new Xc:c.length>1?h=new Nn:c.length===1?h=c[0]:h=new pn,h!==c[0])for(let f=0,u=c.length;f<u;f++)h.add(c[f]);if(a.name&&(h.userData.name=a.name,h.name=r),Oa(h,a),a.extensions&&yl(i,h,a),a.matrix!==void 0){let f=new qe;f.fromArray(a.matrix),h.applyMatrix4(f)}else a.translation!==void 0&&h.position.fromArray(a.translation),a.rotation!==void 0&&h.quaternion.fromArray(a.rotation),a.scale!==void 0&&h.scale.fromArray(a.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(a.mesh!==void 0&&s.meshCache.refs[a.mesh]>1){let f=s.associations.get(h);s.associations.set(h,{...f})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let n=this.extensions,i=this.json.scenes[e],s=this,a=new Nn;i.name&&(a.name=s.createUniqueName(i.name)),Oa(a,i),i.extensions&&yl(n,a,i);let r=i.nodes||[],o=[];for(let l=0,c=r.length;l<c;l++)o.push(s.getDependency("node",r[l]));return Promise.all(o).then(function(l){for(let h=0,f=l.length;h<f;h++){let u=l[h];u.parent!==null?a.add(ww(u)):a.add(u)}let c=h=>{let f=new Map;for(let[u,d]of s.associations)(u instanceof ki||u instanceof ei)&&f.set(u,d);return h.traverse(u=>{let d=s.associations.get(u);d!=null&&f.set(u,d)}),f};return s.associations=c(a),a})}_createAnimationTracks(e,n,i,s,a){let r=[],o=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}Mo[a.path]===Mo.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(Mo[a.path]){case Mo.weights:h=dr;break;case Mo.rotation:h=pr;break;case Mo.translation:case Mo.scale:h=mo;break;default:switch(i.itemSize){case 1:h=dr;break;case 2:case 3:default:h=mo;break}break}let f=s.interpolation!==void 0?zI[s.interpolation]:cl,u=this._getArrayFromAccessor(i);for(let d=0,g=l.length;d<g;d++){let b=new h(l[d]+"."+Mo[a.path],n.array,u,f);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),r.push(b)}return r}_getArrayFromAccessor(e){let n=e.array;if(e.normalized){let i=Ax(n.constructor),s=new Float32Array(n.length);for(let a=0,r=n.length;a<r;a++)s[a]=n[a]*i;n=s}return n}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof pr?Ex:og;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function qI(t,e,n){let i=e.attributes,s=new wi;if(i.POSITION!==void 0){let o=n.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),o.normalized){let h=Ax(nu[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let a=e.targets;if(a!==void 0){let o=new D,l=new D;for(let c=0,h=a.length;c<h;c++){let f=a[c];if(f.POSITION!==void 0){let u=n.json.accessors[f.POSITION],d=u.min,g=u.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),u.normalized){let b=Ax(nu[u.componentType]);l.multiplyScalar(b)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}t.boundingBox=s;let r=new Vi;s.getCenter(r.center),r.radius=s.min.distanceTo(s.max)/2,t.boundingSphere=r}function Lw(t,e,n){let i=e.attributes,s=[];function a(r,o){return n.getDependency("accessor",r).then(function(l){t.setAttribute(o,l)})}for(let r in i){let o=Tx[r]||r.toLowerCase();o in t.attributes||s.push(a(i[r],o))}if(e.indices!==void 0&&!t.index){let r=n.getDependency("accessor",e.indices).then(function(o){t.setIndex(o)});s.push(r)}return et.workingColorSpace!==hi&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),Oa(t,e),qI(t,e,n),Promise.all(s).then(function(){return e.targets!==void 0?GI(t,e.targets,n):t})}var Rx=new WeakMap,YI=new URL("../libs/draco/draco_decoder.wasm",import.meta.url).toString(),ZI=new URL("../libs/draco/draco_wasm_wrapper.js",import.meta.url).toString(),KI=new URL("../libs/draco/draco_decoder.js",import.meta.url).toString(),Dz={js:new URL("../libs/draco/gltf/draco_wasm_wrapper.js",import.meta.url).toString(),wasm:new URL("../libs/draco/gltf/draco_decoder.wasm",import.meta.url).toString()},lg=class extends Is{constructor(e){super(e),this.decoderPaths={js:ZI,wasm:YI,dep_js:KI},this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){let{decoderPaths:n}=this;return typeof e=="object"?(n.js=e.js,n.wasm=e.wasm,n.dep_js=null):(n.js=ys.resolveURL("draco_wasm_wrapper.js",e),n.wasm=ys.resolveURL("draco_decoder.wasm",e),n.dep_js=ys.resolveURL("draco_decoder.js",e)),this}setDecoderConfig(e){return console.warn("THREE.DRACOLoader: setDecoderConfig to has been deprecated and will be removed in r194."),this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,n,i,s){let a=new gr(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,r=>{this.parse(r,n,s)},i,s)}parse(e,n,i=()=>{}){this.decodeDracoFile(e,n,null,null,fn,i).catch(i)}decodeDracoFile(e,n,i,s,a=hi,r=()=>{}){let o={attributeIDs:i||this.defaultAttributeIDs,attributeTypes:s||this.defaultAttributeTypes,useUniqueIDs:!!i,vertexColorSpace:a};return this.decodeGeometry(e,o).then(n).catch(r)}decodeGeometry(e,n){let i=JSON.stringify(n);if(Rx.has(e)){let l=Rx.get(e);if(l.key===i)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let s,a=this.workerNextTaskID++,r=e.byteLength,o=this._getWorker(a,r).then(l=>(s=l,new Promise((c,h)=>{s._callbacks[a]={resolve:c,reject:h},s.postMessage({type:"decode",id:a,taskConfig:n,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{s&&a&&this._releaseTask(s,a)}),Rx.set(e,{key:i,promise:o}),o}_createGeometry(e){let n=new ft;e.index&&n.setIndex(new tn(e.index.array,1));for(let i=0;i<e.attributes.length;i++){let{name:s,array:a,itemSize:r,stride:o,vertexColorSpace:l}=e.attributes[i],c;if(r===o)c=new tn(a,r);else{let h=new co(a,o);c=new uo(h,r,0)}s==="color"&&(this._assignVertexColorSpace(c,l),c.normalized=!(a instanceof Float32Array)),n.setAttribute(s,c)}return n}_assignVertexColorSpace(e,n){if(n!==fn)return;let i=new Oe;for(let s=0,a=e.count;s<a;s++)i.fromBufferAttribute(e,s),et.colorSpaceToWorking(i,fn),e.setXYZ(s,i.r,i.g,i.b)}_loadLibrary(e,n){let i=new gr(this.manager);return i.setResponseType(n),i.setWithCredentials(this.withCredentials),new Promise((s,a)=>{i.load(e,s,void 0,a)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",n=[],{decoderPaths:i}=this;if(e){if(i.dep_js===null)throw new Error("THREE.DRACOLoader: WebAssembly is required when using a custom decoder paths.");n.push(this._loadLibrary(i.dep_js,"text"))}else n.push(this._loadLibrary(i.js,"text")),n.push(this._loadLibrary(i.wasm,"arraybuffer"));return this.decoderPending=Promise.all(n).then(s=>{let a=s[0];e||(this.decoderConfig.wasmBinary=s[1]);let r=jI.toString(),o=["/* draco decoder */",a,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,n){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let s=new Worker(this.workerSourceURL);s._callbacks={},s._taskCosts={},s._taskLoad=0,s.postMessage({type:"init",decoderConfig:this.decoderConfig}),s.onmessage=function(a){let r=a.data;switch(r.type){case"decode":s._callbacks[r.id].resolve(r);break;case"error":s._callbacks[r.id].reject(r);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+r.type+'"')}},this.workerPool.push(s)}else this.workerPool.sort(function(s,a){return s._taskLoad>a._taskLoad?-1:1});let i=this.workerPool[this.workerPool.length-1];return i._taskCosts[e]=n,i._taskLoad+=n,i})}_releaseTask(e,n){e._taskLoad-=e._taskCosts[n],delete e._callbacks[n],delete e._taskCosts[n]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}};function jI(){let t,e;onmessage=function(r){let o=r.data;switch(o.type){case"init":t=o.decoderConfig,e=new Promise(function(h){t.onModuleLoaded=function(f){h({draco:f})},DracoDecoderModule(t)});break;case"decode":let l=o.buffer,c=o.taskConfig;e.then(h=>{let f=h.draco,u=new f.Decoder;try{let d=n(f,u,new Int8Array(l),c),g=d.attributes.map(b=>b.array.buffer);d.index&&g.push(d.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:d},g)}catch(d){console.error(d),self.postMessage({type:"error",id:o.id,error:d.message})}finally{f.destroy(u)}});break}};function n(r,o,l,c){let h=c.attributeIDs,f=c.attributeTypes,u,d,g=o.GetEncodedGeometryType(l);if(g===r.TRIANGULAR_MESH)u=new r.Mesh,d=o.DecodeArrayToMesh(l,l.byteLength,u);else if(g===r.POINT_CLOUD)u=new r.PointCloud,d=o.DecodeArrayToPointCloud(l,l.byteLength,u);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!d.ok()||u.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+d.error_msg());let b={index:null,attributes:[]};for(let m in h){let p=self[f[m]],_,x;if(c.useUniqueIDs)x=h[m],_=o.GetAttributeByUniqueId(u,x);else{if(x=o.GetAttributeId(u,r[h[m]]),x===-1)continue;_=o.GetAttribute(u,x)}let v=s(r,o,u,m,p,_);m==="color"&&(v.vertexColorSpace=c.vertexColorSpace),b.attributes.push(v)}return g===r.TRIANGULAR_MESH&&(b.index=i(r,o,u)),r.destroy(u),b}function i(r,o,l){let h=l.num_faces()*3,f=h*4,u=r._malloc(f);o.GetTrianglesUInt32Array(l,f,u);let d=new Uint32Array(r.HEAPF32.buffer,u,h).slice();return r._free(u),{array:d,itemSize:1}}function s(r,o,l,c,h,f){let u=l.num_points(),d=f.num_components(),g=a(r,h),b=d*h.BYTES_PER_ELEMENT,m=Math.ceil(b/4)*4,p=m/h.BYTES_PER_ELEMENT,_=u*b,x=u*m,v=r._malloc(_);o.GetAttributeDataArrayForAllPoints(l,f,g,_,v);let M=new h(r.HEAPF32.buffer,v,_/h.BYTES_PER_ELEMENT),E;if(b===m)E=M.slice();else{E=new h(x/h.BYTES_PER_ELEMENT);let w=0;for(let y=0,A=M.length;y<A;y++){for(let C=0;C<d;C++)E[w+C]=M[y*d+C];w+=p}}return r._free(v),{name:c,count:u,itemSize:d,array:E,stride:p}}function a(r,o){switch(o){case Float32Array:return r.DT_FLOAT32;case Int8Array:return r.DT_INT8;case Int16Array:return r.DT_INT16;case Int32Array:return r.DT_INT32;case Uint8Array:return r.DT_UINT8;case Uint16Array:return r.DT_UINT16;case Uint32Array:return r.DT_UINT32}}}var Uw={type:"change"},Dx={type:"start"},Pw={type:"end"},cg=new wa,Iw=new Hi,JI=Math.cos(70*kt.DEG2RAD),Xn=new D,Yi=2*Math.PI,Xt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Cx=1e-6,ug=class extends Jh{constructor(e,n=null){super(e,n),this.state=Xt.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_o.ROTATE,MIDDLE:_o.DOLLY,RIGHT:_o.PAN},this.touches={ONE:vo.ROTATE,TWO:vo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new vi,this._lastTargetPosition=new D,this._quat=new vi().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new _r,this._sphericalDelta=new _r,this._scale=1,this._panOffset=new D,this._rotateStart=new Ce,this._rotateEnd=new Ce,this._rotateDelta=new Ce,this._panStart=new Ce,this._panEnd=new Ce,this._panDelta=new Ce,this._dollyStart=new Ce,this._dollyEnd=new Ce,this._dollyDelta=new Ce,this._dollyDirection=new D,this._mouse=new Ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=$I.bind(this),this._onPointerDown=QI.bind(this),this._onPointerUp=eP.bind(this),this._onContextMenu=oP.bind(this),this._onMouseWheel=iP.bind(this),this._onKeyDown=sP.bind(this),this._onTouchStart=aP.bind(this),this._onTouchMove=rP.bind(this),this._onMouseDown=tP.bind(this),this._onMouseMove=nP.bind(this),this._interceptControlDown=lP.bind(this),this._interceptControlUp=cP.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Uw),this.update(),this.state=Xt.NONE}pan(e,n){this._pan(e,n),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let n=this.object.position;Xn.copy(n).sub(this.target),Xn.applyQuaternion(this._quat),this._spherical.setFromVector3(Xn),this.autoRotate&&this.state===Xt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Yi:i>Math.PI&&(i-=Yi),s<-Math.PI?s+=Yi:s>Math.PI&&(s-=Yi),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=r!=this._spherical.radius}if(Xn.setFromSpherical(this._spherical),Xn.applyQuaternion(this._quatInverse),n.copy(this.target).add(Xn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){let o=Xn.length();r=this._clampDistance(o*this._scale);let l=o-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),a=!!l}else if(this.object.isOrthographicCamera){let o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=l!==this.object.zoom;let c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),r=Xn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(cg.origin.copy(this.object.position),cg.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(cg.direction))<JI?this.object.lookAt(this.target):(Iw.setFromNormalAndCoplanarPoint(this.object.up,this.target),cg.intersectPlane(Iw,this.target))))}else if(this.object.isOrthographicCamera){let r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Cx||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Cx||this._lastTargetPosition.distanceToSquared(this.target)>Cx?(this.dispatchEvent(Uw),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Yi/60*this.autoRotateSpeed*e:Yi/60/60*this.autoRotateSpeed}_getZoomScale(e){let n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Xn.setFromMatrixColumn(n,0),Xn.multiplyScalar(-e),this._panOffset.add(Xn)}_panUp(e,n){this.screenSpacePanning===!0?Xn.setFromMatrixColumn(n,1):(Xn.setFromMatrixColumn(n,0),Xn.crossVectors(this.object.up,Xn)),Xn.multiplyScalar(e),this._panOffset.add(Xn)}_pan(e,n){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Xn.copy(s).sub(this.target);let a=Xn.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/i.clientHeight,this.object.matrix),this._panUp(2*n*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,a=n-i.top,r=i.width,o=i.height;this._mouse.x=s/r*2-1,this._mouse.y=-(a/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let n=this.domElement;this._rotateLeft(Yi*this._rotateDelta.x/n.clientHeight),this._rotateUp(Yi*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Yi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Yi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Yi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Yi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,a=Math.sqrt(i*i+s*s);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),a=.5*(e.pageY+i.y);this._rotateEnd.set(s,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let n=this.domElement;this._rotateLeft(Yi*this._rotateDelta.x/n.clientHeight),this._rotateUp(Yi*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,a=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let r=(e.pageX+n.x)*.5,o=(e.pageY+n.y)*.5;this._updateZoomParameters(r,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Ce,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){let n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function QI(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function $I(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function eP(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Pw),this.state=Xt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function tP(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case _o.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=Xt.DOLLY;break;case _o.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Xt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Xt.ROTATE}break;case _o.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Xt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Xt.PAN}break;default:this.state=Xt.NONE}this.state!==Xt.NONE&&this.dispatchEvent(Dx)}function nP(t){switch(this.state){case Xt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case Xt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case Xt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function iP(t){this.enabled===!1||this.enableZoom===!1||this.state!==Xt.NONE||(t.preventDefault(),this.dispatchEvent(Dx),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(Pw))}function sP(t){this.enabled!==!1&&this._handleKeyDown(t)}function aP(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case vo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=Xt.TOUCH_ROTATE;break;case vo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=Xt.TOUCH_PAN;break;default:this.state=Xt.NONE}break;case 2:switch(this.touches.TWO){case vo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=Xt.TOUCH_DOLLY_PAN;break;case vo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=Xt.TOUCH_DOLLY_ROTATE;break;default:this.state=Xt.NONE}break;default:this.state=Xt.NONE}this.state!==Xt.NONE&&this.dispatchEvent(Dx)}function rP(t){switch(this._trackPointer(t),this.state){case Xt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case Xt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case Xt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case Xt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=Xt.NONE}}function oP(t){this.enabled!==!1&&t.preventDefault()}function lP(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function cP(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Ux=Ro(df(),1),fP=new D(240*Math.sin(kt.degToRad(30)),280,240*Math.cos(kt.degToRad(30))).normalize(),qw=7.07,Nx=fP.clone().multiplyScalar(qw),Lx={pitch:-10.2,yaw:9,roll:-5.5},Hw=1.45,Gw=184,Vw=158,pf=.8,Ox=2,kw=new D(-.183,-.215,.959).normalize(),Xw=4.8,dP=1.06,Ww=t=>Math.max(1,dP/Math.max(t,.2)),Yw=ae.default.forwardRef(function({lighting:e={azimuth:30,elevation:49.398705,intensity:100,ambient:10},modelUrl:n="/images/Matrixtwin_opal.glb",opticalMaps:i,lampMode:s="camera",className:a="",features:r=[],autoRotate:o=!1,activeFeatureId:l=null,instrumentMode:c="observe",sectionEnabled:h=!1,sectionOffset:f=0,onFeaturesProjected:u,onActiveFeatureChange:d,onCameraChange:g,onOrientationChange:b,onOpticalMetricsChange:m,onOpticalBenchProjected:p,onMatrixBenchProjected:_,onFeatureSelect:x,onInteractionStart:v,showInstruments:M=!0,proceduralFallback:E=!0,onReady:w,onLoadError:y,enableZoom:A=!0,touchAction:C="none",fitWidth:N=!1},U){let X=(0,ae.useRef)(e);X.current=e;let Y=(0,ae.useRef)(null),F=(0,ae.useRef)(null),[V,k]=ae.default.useState(6),[$,te]=ae.default.useState(null),[fe,ge]=ae.default.useState(null),xe=(0,ae.useRef)({value:6}),dt=(0,ae.useRef)({value:kw.clone()}),en=(0,ae.useRef)({value:Nx.clone().normalize()}),pt=(0,ae.useRef)({value:1}),J=(0,ae.useRef)({value:new Ce(1/2048,1/2048)}),re=ae.default.useRef(null),ee=(0,ae.useRef)({value:null}),Ie=(0,ae.useRef)({value:null}),Ve=(0,ae.useRef)({value:!1}),we=(0,ae.useRef)(Nx.clone()),nn=(0,ae.useRef)(s);(0,ae.useEffect)(()=>{nn.current=s},[s]);let[at,Ht]=ae.default.useState(!1),[yt,lt]=ae.default.useState({yawDeg:0,pitchDeg:0,rollDeg:0,camAzimuth:0,camElevation:0,camDistance:4.8,camPos:[0,0,4.8],camDir:[0,0,-1],keyLightPos:[4,5,3],L:[.57,.71,.43],V:[0,0,1],H:[.35,.44,.83],flashFactor:0,greenResponse:0,cosThetaI:0,cosThetaV:0,cosHalf:0,lambdaGreen:0,lambdaBlue:0,blueResponse:0,totalResponse:0,activePresetId:"custom"}),mn=(0,ae.useRef)(null);ae.default.useEffect(()=>{xe.current.value=V,ze.current.forEach(gn=>{gn.userData?.shader?.uniforms?.uDebugMode&&(gn.userData.shader.uniforms.uDebugMode.value=V)})},[V]);let ln=(0,ae.useRef)(r),yn=(0,ae.useRef)(l),Mn=(0,ae.useRef)(c),Zt=(0,ae.useRef)(h),cn=(0,ae.useRef)(f),O=(0,ae.useRef)(u),Wn=(0,ae.useRef)(d),gt=(0,ae.useRef)(g),R=(0,ae.useRef)(b),S=(0,ae.useRef)(m),P=(0,ae.useRef)(p),H=(0,ae.useRef)(_),W=(0,ae.useRef)(x),ne=(0,ae.useRef)(v),ie=(0,ae.useRef)(o),Z=(0,ae.useRef)(M),K=(0,ae.useRef)(E),oe=(0,ae.useRef)(w),be=(0,ae.useRef)(y),he=(0,ae.useRef)(A),le=(0,ae.useRef)(C),De=(0,ae.useRef)(N),Ne=(0,ae.useRef)(1),ze=(0,ae.useRef)([]),L=ae.default.useRef(null),se=(0,ae.useRef)(null),q=(0,ae.useRef)({active:!1,startTime:0,duration:650,startPos:new D,targetPos:new D,startTarget:new D,targetTarget:new D,startFov:35,targetFov:35}),ce=(0,ae.useRef)(()=>{});(0,ae.useEffect)(()=>{ln.current=r},[r]),(0,ae.useEffect)(()=>{yn.current=l,ce.current?.(l)},[l]),(0,ae.useEffect)(()=>{Mn.current=c},[c]),(0,ae.useEffect)(()=>{Zt.current=h},[h]),(0,ae.useEffect)(()=>{cn.current=f},[f]),(0,ae.useEffect)(()=>{O.current=u},[u]),(0,ae.useEffect)(()=>{Wn.current=d},[d]),(0,ae.useEffect)(()=>{gt.current=g},[g]),(0,ae.useEffect)(()=>{R.current=b},[b]),(0,ae.useEffect)(()=>{S.current=m},[m]),(0,ae.useEffect)(()=>{P.current=p},[p]),(0,ae.useEffect)(()=>{H.current=_},[_]),(0,ae.useEffect)(()=>{W.current=x},[x]),(0,ae.useEffect)(()=>{ne.current=v},[v]),(0,ae.useEffect)(()=>{ie.current=o},[o]),(0,ae.useEffect)(()=>{Z.current=M,K.current=E,oe.current=w,be.current=y},[M,E,w,y]),(0,ae.useEffect)(()=>{he.current=A,le.current=C,De.current=N,_e.current&&(_e.current.enableZoom=A),F.current&&(F.current.style.touchAction=C)},[A,C,N]);let de=(0,ae.useRef)(null),Q=(0,ae.useRef)(null),Te=(0,ae.useRef)(null),_e=(0,ae.useRef)(null),Pe=(0,ae.useRef)(null),St=(0,ae.useRef)(null),Di=(0,ae.useRef)(null);ae.default.useImperativeHandle(U,()=>({getCamera:()=>Q.current,getScene:()=>de.current,resetView:()=>{_e.current&&Q.current&&(_e.current.reset(),Q.current.position.set(0,0,Xw*Ne.current),_e.current.update())},setCameraDistance:gn=>{if(Q.current&&_e.current){let qn=Q.current.position.clone().normalize();Q.current.position.copy(qn.multiplyScalar(gn)),_e.current.update()}}}));let Ki=(0,ae.useCallback)((gn,qn=!1)=>{gn.customProgramCacheKey=()=>qn?"opal-diffract-seam-v7":"opal-diffract-matrix-v7",gn.onBeforeCompile=Be=>{Be.uniforms.uOpalCenter={value:new D(.35,.45,.65)},Be.uniforms.uOpalRadius={value:.95},Be.uniforms.uLocalBoundsMin={value:new D(-.951144,-.555493,-.546964)},Be.uniforms.uLocalBoundsMax={value:new D(.950102,.554592,.548624)},Be.uniforms.uKeyLightDir=en.current,Be.uniforms.uKeyLightStrength=pt.current,Be.uniforms.uFlashTexelSize=J.current,Be.uniforms.uSpecimenFrontLocal=dt.current,Be.uniforms.uSpecimenUpLocal={value:new D(0,1,0).normalize()},Be.uniforms.uDebugMode=xe.current,Be.uniforms.uPreciousOpalMask=ee.current,Be.uniforms.uDomainMap=Ie.current,Be.uniforms.uHasPreciousOpalMask=Ve.current,Be.uniforms.uNSilica={value:Hw},Be.uniforms.uDGreen={value:Gw},Be.uniforms.uDBlue={value:Vw},Be.uniforms.uFlashGain={value:pf},Be.vertexShader=Be.vertexShader.replace("#include <common>",`#include <common>
        varying vec3 vOpalLocalPos;
        varying vec3 vOpalWorldPos;
        varying vec3 vOpalWorldNormal;
        varying vec3 vOpalLocalNormal;
        varying mat3 vOpalWorldRotation;
`),Be.vertexShader=Be.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
        vOpalLocalPos = position;
        vOpalLocalNormal = normal;
        vOpalWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
        vOpalWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
        vOpalWorldRotation = mat3(modelMatrix);
`),Be.fragmentShader=Be.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vOpalLocalPos;
        varying vec3 vOpalLocalNormal;
        varying vec3 vOpalWorldPos;
        varying vec3 vOpalWorldNormal;
        varying mat3 vOpalWorldRotation;

        uniform vec3 uOpalCenter;
        uniform float uOpalRadius;
        uniform vec3 uLocalBoundsMin;
        uniform vec3 uLocalBoundsMax;
        uniform vec3 uKeyLightDir;
        uniform float uKeyLightStrength;
        uniform vec2 uFlashTexelSize;
        uniform vec3 uSpecimenFrontLocal;
        uniform vec3 uSpecimenUpLocal;
        uniform int uDebugMode;
        uniform sampler2D uPreciousOpalMask;   // R green potential, G blue potential (baked from the video)
        uniform sampler2D uDomainMap;          // RGB = opal-layer direction (local space) * 0.5 + 0.5
        uniform bool uHasPreciousOpalMask;
        uniform float uNSilica;
        uniform float uDGreen;
        uniform float uDBlue;
        uniform float uFlashGain;
        
        // Global mask variables for optical separation
        float g_preciousOpalMask = 0.0;
        float g_greenFireMask = 0.0;
        float g_blueFireMask = 0.0;
        float g_totalFireMask = 0.0;
        vec3 g_opalFire = vec3(0.0);

        // Forensic Occurrence Autopsy Variables (Directive 17B Isolation Diagnostics)
        float g_testGreenLodeRaw = 0.0;
        float g_testBlueShoulderRaw = 0.0;
        float g_testGreenMatrixPass = 0.0;
        float g_testGreenFrontFaceLock = 0.0;
        float g_testGreenBaseCutoff = 0.0;
        float g_testGreenLeftBaseCutoff = 0.0;
        float g_testGreenAllGates = 0.0;
        float g_testBlueMatrixPass = 0.0;
        float g_testBlueFrontFaceLock = 0.0;
        float g_testBlueBaseCutoff = 0.0;
        float g_testBlueLeftBaseCutoff = 0.0;
        float g_testBlueAllGates = 0.0;
        float g_testOutGreenDomain = 0.0;
        float g_testOutBlueDomain = 0.0;
        float g_testGreenLodeRawXY = 0.0;
        float g_testDepthEnvelope = 0.0;
        float g_testFrontFaceLock = 0.0;
        float g_testSpecimenPosZ = 0.0;

        // --- CONTINUOUS 3D NOISE & OPTICAL ORIENTATION FIELD ENGINE ---
        // Developed with Jim Shaw: Replaces discrete Cartesian grid quantization (floor)
        // with smooth, multi-scale C1-continuous domain-warped orientation fields.

        // Fast C1-continuous 3D value-gradient noise with quintic Hermite interpolation
        float opalHash13(vec3 p) {
          p = fract(p * 0.1031);
          p += dot(p, p.zyx + 31.32);
          return fract((p.x + p.y) * p.z);
        }

        vec3 opalHash33(vec3 p) {
          p = fract(p * vec3(443.897, 441.423, 437.195));
          p += dot(p, p.yxz + 19.19);
          return fract((p.xxy + p.yxx) * p.zyx) * 2.0 - 1.0;
        }

        float opalNoise3D(vec3 p) {
          vec3 i = floor(p);
          vec3 f = fract(p);
          // Quintic Hermite interpolation curve (C1 smooth derivatives, zero grid seams)
          vec3 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);

          float n000 = dot(opalHash33(i + vec3(0.0, 0.0, 0.0)), f - vec3(0.0, 0.0, 0.0));
          float n100 = dot(opalHash33(i + vec3(1.0, 0.0, 0.0)), f - vec3(1.0, 0.0, 0.0));
          float n010 = dot(opalHash33(i + vec3(0.0, 1.0, 0.0)), f - vec3(0.0, 1.0, 0.0));
          float n110 = dot(opalHash33(i + vec3(1.0, 1.0, 0.0)), f - vec3(1.0, 1.0, 0.0));
          float n001 = dot(opalHash33(i + vec3(0.0, 0.0, 1.0)), f - vec3(0.0, 0.0, 1.0));
          float n101 = dot(opalHash33(i + vec3(1.0, 0.0, 1.0)), f - vec3(1.0, 0.0, 1.0));
          float n011 = dot(opalHash33(i + vec3(0.0, 1.0, 1.0)), f - vec3(0.0, 1.0, 1.0));
          float n111 = dot(opalHash33(i + vec3(1.0, 1.0, 1.0)), f - vec3(1.0, 1.0, 1.0));

          return mix(
            mix(mix(n000, n100, u.x), mix(n010, n110, u.x), u.y),
            mix(mix(n001, n101, u.x), mix(n011, n111, u.x), u.y),
            u.z
          );
        }

        // Domain warping to organically disrupt all Cartesian XYZ alignment
        vec3 opalDomainWarp(vec3 p) {
          vec3 q = vec3(
            opalNoise3D(p + vec3(0.0, 0.0, 0.0)),
            opalNoise3D(p + vec3(5.2, 1.3, 2.8)),
            opalNoise3D(p + vec3(2.1, 7.8, 4.4))
          );
          return p + q * 0.45;
        }

        // Continuous fractional Brownian motion in warped object space
        float opalFBM(vec3 p) {
          vec3 wp = opalDomainWarp(p);
          float value = 0.0;
          float amp = 0.55;
          float freq = 1.0;
          for (int i = 0; i < 3; i++) {
            value += amp * opalNoise3D(wp * freq);
            freq *= 2.15;
            amp *= 0.48;
          }
          return value;
        }

        // Multi-scale continuous optical orientation field (macro, meso, micro)
        // Produces cohesive organic sheets with subtle internal undulation (max \xB15.5\xB0 deviation)
        vec3 opalOrientationField(vec3 localPos, vec3 baseNormal) {
          vec3 wp = opalDomainWarp(localPos * 4.5);
          
          // Macro domain (low frequency, smooth organic ribbon flow)
          vec3 macroPerturb = vec3(
            opalNoise3D(wp * 2.2 + vec3(0.0, 1.2, 3.4)),
            opalNoise3D(wp * 2.2 + vec3(4.1, 0.5, 1.9)),
            opalNoise3D(wp * 2.2 + vec3(2.3, 3.8, 0.7))
          ) * 0.085;

          // Meso domain (mid frequency, internal facet undulation)
          vec3 mesoPerturb = vec3(
            opalNoise3D(wp * 7.5 + vec3(1.1, 2.3, 0.5)),
            opalNoise3D(wp * 7.5 + vec3(3.2, 0.9, 4.1)),
            opalNoise3D(wp * 7.5 + vec3(0.4, 4.7, 2.2))
          ) * 0.038;

          // Micro domain (subtle high frequency organic microfacet texture, zero pixel glitter)
          vec3 microPerturb = vec3(
            opalNoise3D(localPos * 24.0),
            opalNoise3D(localPos * 24.0 + vec3(5.0, 2.0, 1.0)),
            opalNoise3D(localPos * 24.0 + vec3(2.0, 7.0, 4.0))
          ) * 0.012;

          return normalize(baseNormal + macroPerturb + mesoPerturb + microPerturb);
        }

        // Keep the baked region and its fitted mean direction. A small continuous
        // tangent field breaks up simultaneous flat flashes without inventing new
        // colour locations or sampling across unrelated UV islands.
        vec3 opalBakedOrientation(vec2 uv, vec3 localPos, vec3 surfaceNormal) {
          vec3 bakedDir = texture2D(uDomainMap, uv).rgb * 2.0 - 1.0;
          float bakedLen = length(bakedDir);
          vec3 baseDirection = bakedLen > 0.2 ? bakedDir / bakedLen : normalize(surfaceNormal);
          vec3 organicDirection = opalOrientationField(localPos, baseDirection);
          return normalize(mix(baseDirection, organicDirection, 0.65));
        }

        vec3 opalFilteredPotential(vec2 uv) {
          // One texel footprint rounds sampling edges; keep the centre dominant
          // so the measured mask does not spread into the surrounding matrix.
          vec3 centre = texture2D(uPreciousOpalMask, uv).rgb;
          vec3 neighbours = texture2D(uPreciousOpalMask, uv + vec2(uFlashTexelSize.x, 0.0)).rgb
            + texture2D(uPreciousOpalMask, uv - vec2(uFlashTexelSize.x, 0.0)).rgb
            + texture2D(uPreciousOpalMask, uv + vec2(0.0, uFlashTexelSize.y)).rgb
            + texture2D(uPreciousOpalMask, uv - vec2(0.0, uFlashTexelSize.y)).rgb;
          return mix(centre, neighbours * 0.25, 0.35) * smoothstep(0.02, 0.10, max(centre.r, centre.g));
        }

        // Spatially correlated continuous silica sphere lattice spacing variation (delta d < 0.05nm/pixel)
        float opalSpacingField(vec3 localPos) {
          vec3 wp = opalDomainWarp(localPos * 6.0);
          return opalNoise3D(wp * 3.5);
        }

        vec3 spectralDiffractionRGB(float wl) {
          wl = clamp(wl, 380.0, 700.0);
          float r = 0.0, g = 0.0, b = 0.0;
          if (wl < 440.0) { r = -(wl - 440.0) / 60.0; b = 1.0; }
          else if (wl < 490.0) { g = (wl - 440.0) / 50.0; b = 1.0; }
          else if (wl < 510.0) { g = 1.0; b = -(wl - 510.0) / 20.0; }
          else if (wl < 580.0) { r = (wl - 510.0) / 70.0; g = 1.0; }
          else if (wl < 645.0) { r = 1.0; g = -(wl - 645.0) / 65.0; }
          else { r = 1.0; }
          float factor = 1.0;
          if (wl < 420.0) factor = 0.35 + 0.65 * (wl - 380.0) / 40.0;
          else if (wl > 650.0) factor = 0.35 + 0.65 * (700.0 - wl) / 50.0;
          return vec3(r, g, b) * factor;
        }

        // =========================================================================
        // --- DIRECTIVE 16: FORENSIC VIDEO-DERIVED OCCURRENCE MASK ENGINE ---
        // Defines the physical silica seam path, widths, and geological boundaries
        // completely independent of the GLB albedo texture.
        // =========================================================================

        // Point-to-line-segment Euclidean distance in 2D specimen space (X, Y)
        float opalDistToSegment2D(vec2 p, vec2 a, vec2 b) {
          vec2 ba = b - a;
          vec2 pa = p - a;
          float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
          return length(pa - ba * h);
        }

        // Computes the authoritative precious opal occurrence mask [0.0 - 1.0]
        // and regional domain classification in NORMALIZED SPECIMEN SPACE [-1.0, +1.0]^3:
        // X = -1 (left) to +1 (right)
        // Y = -1 (base) to +1 (top crest)
        // Z = -1 (back) to +1 (front facet)
        void opalEvaluateOccurrence(
          vec3 localPos, 
          vec3 localNormal, 
          out float outPreciousMask, 
          out float outGreenDomain, 
          out float outBlueDomain
        ) {
          // Normalized Specimen Coordinate System [-1, +1]^3
          vec3 specimenPos = clamp(((localPos - uLocalBoundsMin) / (uLocalBoundsMax - uLocalBoundsMin)) * 2.0 - 1.0, -1.0, 1.0);

          // Domain warp for organic geological boundaries
          vec3 wp = opalDomainWarp(specimenPos * 6.0);
          float geoJitter = (opalNoise3D(wp * 4.5) * 0.015) + (opalNoise3D(specimenPos * 24.0) * 0.006);

          // Front-facing depth envelope: precious facets are on front face (Z > 0.0 in specimen space)
          float specimenFrontDepth = dot(specimenPos, normalize(uSpecimenFrontLocal));
          float depthEnvelope = smoothstep(0.0, 0.35, specimenFrontDepth);

          // -------------------------------------------------------------------------
          // 1. DOMAIN A \u2014 PRIMARY GREEN LODE (Right-central facet & right flank)
          // Seam traversing right flank and right-central facet in specimen space
          // -------------------------------------------------------------------------
          vec2 G0 = vec2(0.15, -0.25); // Lower-right matrix entry
          vec2 G1 = vec2(0.35, 0.05);  // Right-central lower wedge
          vec2 G2 = vec2(0.55, 0.35);  // Primary emerald facet core
          vec2 G3 = vec2(0.65, 0.60);  // Right flank crest
          vec2 G4 = vec2(0.50, 0.78);  // Upper right flank taper

          float dG01 = opalDistToSegment2D(specimenPos.xy, G0, G1);
          float dG12 = opalDistToSegment2D(specimenPos.xy, G1, G2);
          float dG23 = opalDistToSegment2D(specimenPos.xy, G2, G3);
          float dG34 = opalDistToSegment2D(specimenPos.xy, G3, G4);

          // Vein widths in normalized specimen space [-1, 1]
          float sG01 = smoothstep(0.20, 0.06, dG01 + geoJitter);
          float sG12 = smoothstep(0.24, 0.07, dG12 + geoJitter);
          float sG23 = smoothstep(0.25, 0.07, dG23 + geoJitter);
          float sG34 = smoothstep(0.18, 0.05, dG34 + geoJitter);

          float greenLodeRawXY = max(max(sG01, sG12), max(sG23, sG34));
          float greenLodeRaw = greenLodeRawXY * depthEnvelope;

          // -------------------------------------------------------------------------
          // 2. DOMAIN B \u2014 COBALT / VIOLET SHOULDER (Upper-left shoulder / bevel)
          // Spatially distinct from green lode, angled bevel orientation
          // -------------------------------------------------------------------------
          vec2 B0 = vec2(-0.45, 0.20); // Lower-left shoulder transition
          vec2 B1 = vec2(-0.30, 0.50); // Cobalt shoulder core
          vec2 B2 = vec2(-0.15, 0.72); // Upper shoulder crest

          float dB01 = opalDistToSegment2D(specimenPos.xy, B0, B1);
          float dB12 = opalDistToSegment2D(specimenPos.xy, B1, B2);

          float sB01 = smoothstep(0.18, 0.06, dB01 + geoJitter);
          float sB12 = smoothstep(0.20, 0.06, dB12 + geoJitter);

          float blueShoulderRawXY = max(sB01, sB12);
          float blueShoulderRaw = blueShoulderRawXY * depthEnvelope;

          // -------------------------------------------------------------------------
          // 3. CENTRAL MATRIX EXCLUSION (Dark notch observed between the two domains)
          // Physical potch/host sandstone notch interrupting upper-central area
          // -------------------------------------------------------------------------
          vec2 notchPos = vec2(0.05, 0.55);
          float notchDist = length(specimenPos.xy - notchPos);
          float matrixPass = smoothstep(0.10, 0.22, notchDist + geoJitter * 0.5);

          // -------------------------------------------------------------------------
          // 4. ORIENTATION & BOUNDARY EXCLUSIONS
          // - Reverse / back face: non-diffractive (normal facing away from front facet)
          // - Lower base (Y < -0.35): non-diffractive finger-grip host matrix
          // - Left flank base (X < -0.50): non-diffractive host matrix
          // -------------------------------------------------------------------------
          float frontFacing = dot(normalize(localNormal), normalize(uSpecimenFrontLocal));
          float frontFaceLock = smoothstep(-0.10, 0.20, frontFacing);
          float baseCutoff = smoothstep(-0.45, -0.25, specimenPos.y);
          float leftBaseCutoff = smoothstep(-0.60, -0.40, specimenPos.x);

          // Gate combinations for Green
          float greenMatrixPass = greenLodeRaw * matrixPass;
          float greenFrontFace = greenLodeRaw * frontFaceLock;
          float greenBaseCutoff = greenLodeRaw * baseCutoff;
          float greenLeftBaseCutoff = greenLodeRaw * leftBaseCutoff;
          float activeGreen = greenLodeRaw * matrixPass * frontFaceLock * baseCutoff * leftBaseCutoff;

          // Gate combinations for Blue
          float blueMatrixPass = blueShoulderRaw * matrixPass;
          float blueFrontFace = blueShoulderRaw * frontFaceLock;
          float blueBaseCutoff = blueShoulderRaw * baseCutoff;
          float blueLeftBaseCutoff = blueShoulderRaw * leftBaseCutoff;
          float activeBlue = blueShoulderRaw * matrixPass * frontFaceLock * baseCutoff * leftBaseCutoff;

          // EXPOSE DIAGNOSTICS FOR 17E
          g_testGreenLodeRawXY = greenLodeRawXY;
          g_testDepthEnvelope = depthEnvelope;
          g_testFrontFaceLock = frontFaceLock;
          g_testSpecimenPosZ = specimenFrontDepth;

          // Assign Forensic Isolation Test Variables (Directive 17B)
          g_testGreenLodeRaw = greenLodeRaw;
          g_testBlueShoulderRaw = blueShoulderRaw;
          g_testGreenMatrixPass = greenMatrixPass;
          g_testGreenFrontFaceLock = greenFrontFace;
          g_testGreenBaseCutoff = greenBaseCutoff;
          g_testGreenLeftBaseCutoff = greenLeftBaseCutoff;
          g_testGreenAllGates = activeGreen;

          g_testBlueMatrixPass = blueMatrixPass;
          g_testBlueFrontFaceLock = blueFrontFace;
          g_testBlueBaseCutoff = blueBaseCutoff;
          g_testBlueLeftBaseCutoff = blueLeftBaseCutoff;
          g_testBlueAllGates = activeBlue;

          // -------------------------------------------------------------------------
          // 5. TOTAL PRECIOUS OPAL OCCURRENCE & SPECTRAL DOMAIN CLASSIFICATION
          // -------------------------------------------------------------------------
          float totalOccurrence = clamp(max(activeGreen, activeBlue), 0.0, 1.0);

          float blueWeight = 0.0;
          if (totalOccurrence > 0.001) {
            blueWeight = clamp(activeBlue / (activeGreen + activeBlue + 0.0001), 0.0, 1.0);
          }
          float greenWeight = clamp(1.0 - blueWeight, 0.0, 1.0);

          outPreciousMask = totalOccurrence;
          outGreenDomain = totalOccurrence * greenWeight;
          outBlueDomain = totalOccurrence * blueWeight;
          
          g_testOutGreenDomain = outGreenDomain;
          g_testOutBlueDomain = outBlueDomain;
        }
        `),Be.fragmentShader=Be.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
        #if defined( USE_MAP )
          // UNIFIED PRECIOUS OPAL OCCURRENCE & DOMAIN CLASSIFICATION
          // Completely decoupled from the GLB texture albedo green coloration
          if (uHasPreciousOpalMask) {
            // Baked from the reference video: where, on the real stone, green
            // (R) and blue/violet (G) play-of-colour was actually seen.
            vec3 flashPotential = opalFilteredPotential(vMapUv);
            // Fine object-space variation restores organic internal detail to the
            // smoothed map. It is fixed in the stone; it never scrolls with time.
            float organicDensity = 0.75 + 0.35 * smoothstep(-0.22, 0.22, opalFBM(vOpalLocalPos * 23.0));
            flashPotential *= organicDensity;
            g_greenFireMask = smoothstep(0.10, 0.62, flashPotential.r);
            g_blueFireMask  = smoothstep(0.10, 0.62, flashPotential.g) * (1.0 - 0.8 * g_greenFireMask);
            g_preciousOpalMask = max(g_greenFireMask, g_blueFireMask);
          } else {
            float tempPrecious = 0.0;
            float tempGreen = 0.0;
            float tempBlue = 0.0;
            opalEvaluateOccurrence(
              vOpalLocalPos, 
              vOpalLocalNormal, 
              tempPrecious, 
              tempGreen, 
              tempBlue
            );
            g_preciousOpalMask = tempPrecious;
            g_greenFireMask = tempGreen;
            g_blueFireMask = tempBlue;
          }
        #else
          // Procedural fallback for geometry testing
          float distToSeam = length(vOpalLocalPos - uOpalCenter);
          float isOpal = ${qn?"1.0":"0.0"};
          float seamWeight = max(isOpal, smoothstep(uOpalRadius, uOpalRadius * 0.4, distToSeam));
          if (seamWeight > 0.01) {
            float pPattern = sin(vOpalLocalPos.x * 6.5 + vOpalLocalPos.z * 5.2);
            g_preciousOpalMask = seamWeight;
            g_greenFireMask = seamWeight * smoothstep(0.1, 0.5, pPattern);
            g_blueFireMask = seamWeight * smoothstep(0.1, 0.5, -pPattern);
          }
        #endif

        g_totalFireMask = clamp(g_greenFireMask + g_blueFireMask, 0.0, 1.0);

        // Neutralise and darken the underlying potch in verified precious opal regions
        #if defined( USE_MAP )
          float linearLuma = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
          // Substrate potch tone: desaturated dark ironstone/potch background (30% luma) providing high optical contrast
          vec3 linearNeutral = vec3(linearLuma * 0.32, linearLuma * 0.30, linearLuma * 0.28);
          if (uDebugMode != 0 && uDebugMode != 1 && uDebugMode != 2) {
            if (uHasPreciousOpalMask) {
              // DE-BAKE. The scan's texture has the green of the video baked into it
              // (the photos were taken with the flash on). Keep its light/dark detail,
              // but replace its colour with the real stone's plain warm-grey body, so the
              // only colour left on the stone is the colour the shader makes.
              float bodyDetail = pow(clamp(linearLuma / 0.055, 0.15, 3.0), 0.55);
              vec3 stoneBody = vec3(0.165, 0.146, 0.126) * bodyDetail;
              // opal-bearing areas sit on a darker, cooler potch
              vec3 opalPotch = stoneBody * vec3(0.62, 0.66, 0.76);
              diffuseColor.rgb = mix(stoneBody, opalPotch, g_totalFireMask);
            } else {
              diffuseColor.rgb = mix(diffuseColor.rgb, linearNeutral, g_totalFireMask * 0.92);
            }
          }
        #endif
        `),Be.fragmentShader=Be.fragmentShader.replace("#include <tonemapping_fragment>",`// SPECIMEN-DRIVEN COMPUTATIONAL OPTICAL MODEL (LINEAR RADIANCE INTEGRATION)
        // Calibrated against physical specimen reference video observations:
        // - Primary face: Broad emerald-to-lime green play-of-colour facet with cyan border shifts
        // - Shoulder bevel: Distinct electric cobalt/violet-blue patch that fires on angled upper edge
        // - Ironstone matrix: Non-diffractive host rock with zero colour bleed

        // Mode 5 (Optical Only): Zero base PBR radiance before accumulating optical radiance
        if (uDebugMode == 5) {
          gl_FragColor.rgb = vec3(0.0);
        }

        // Mode 4 (Orientation Field Diagnostic): Visualises smooth continuous normal gradients
        if (uDebugMode == 4) {
          if (g_totalFireMask > 0.005) {
            vec3 localDomainNormal = opalOrientationField(vOpalLocalPos, vOpalLocalNormal);
            #if defined( USE_MAP )
              if (uHasPreciousOpalMask) {
                localDomainNormal = opalBakedOrientation(vMapUv, vOpalLocalPos, vOpalLocalNormal);
              }
            #endif
            vec3 domainNormal = normalize(vOpalWorldRotation * localDomainNormal);
            gl_FragColor.rgb = domainNormal * 0.5 + 0.5;
          } else {
            gl_FragColor.rgb = vOpalWorldNormal * 0.5 + 0.5;
          }
        }

        // Angle-dependent Bragg-Snell diffraction evaluated on known fire regions in linear radiance space
        if (uDebugMode == 5 || uDebugMode == 6) {
          if (g_totalFireMask > 0.005) {
            vec3 L = normalize(uKeyLightDir);
            vec3 V = normalize(cameraPosition - vOpalWorldPos);
            vec3 H = normalize(L + V);

            // CONTINUOUS OPTICAL DOMAIN ORIENTATION FIELD (Developed with Jim Shaw)
            // Evaluates multi-scale continuous 3D domain-warped perturbation in object space.
            // Eliminates all discrete Cartesian polygon/triangle/diamond cell quantisation.
            // Which way do the opal layers face at this point of the stone?
            //  - with the baked images: read straight from the orientation image,
            //    which was fitted so each patch fires where the video shows it firing
            //  - without them: the original procedural orientation field
            vec3 localDomainNormal;
            localDomainNormal = opalOrientationField(vOpalLocalPos, vOpalLocalNormal);
            #if defined( USE_MAP )
              if (uHasPreciousOpalMask) {
                localDomainNormal = opalBakedOrientation(vMapUv, vOpalLocalPos, vOpalLocalNormal);
              }
            #endif
            vec3 domainNormal = normalize(vOpalWorldRotation * localDomainNormal);
            domainNormal = gl_FrontFacing ? domainNormal : -domainNormal;

            float cosThetaI = clamp(dot(domainNormal, L), 0.0, 1.0);
            float cosThetaV = clamp(dot(domainNormal, V), 0.0, 1.0);
            float cosHalf = clamp(dot(domainNormal, H), 0.0, 1.0);

            if (cosThetaI > 0.01 && cosThetaV > 0.01) {
              // Bragg: wavelength = 2 d sqrt(n^2 - sin^2(theta)). Smaller angle -> longer
              // wavelength, larger angle -> shifts toward blue, as on a real opal.
              float sinThetaSq = 1.0 - cosThetaI * cosThetaI;
              float rootTerm = max(0.0, uNSilica * uNSilica - sinThetaSq);

              // Spatially correlated continuous lattice parameter variation
              float spacingShift = opalSpacingField(vOpalLocalPos);
              float dGreen = uDGreen + spacingShift * 5.0;
              float dBlue = uDBlue + spacingShift * 4.5;
              float lambdaGreen = 2.0 * dGreen * sqrt(rootTerm);
              float lambdaBlue = 2.0 * dBlue * sqrt(rootTerm);

              vec3 spectralGreen = spectralDiffractionRGB(lambdaGreen);
              vec3 spectralBlue = spectralDiffractionRGB(lambdaBlue);

              // Flash profile: a broad shoulder plus a sharp core. It fades out over roughly
              // 25-35 degrees of turning, which is what the video shows. The same function is
              // used to bake the orientation image - keep them in step.
              float lobe = 0.15 * pow(cosHalf, 10.0) + 0.30 * pow(cosHalf, 30.0) + 0.55 * pow(cosHalf, 80.0);
              float flashFactor = lobe * cosThetaI * uFlashGain * uKeyLightStrength;

              // Material reflected play-of-colour (additive strictly to stone surface in linear space)
              vec3 greenFire = spectralGreen * (flashFactor * g_greenFireMask);
              vec3 blueFire = spectralBlue * (flashFactor * g_blueFireMask);
              vec3 totalFire = greenFire + blueFire;

              // COLOUR-OVER-SPECULAR REPLACEMENT:
              // When diffraction fires at direct specular alignment (high cosHalf / flashFactor),
              // the uncoloured broadband white specular reflection is replaced by the resonant spectral radiance,
              // matching physical wave-optics interference where reflected energy is filtered into the Bragg band.
              if (uDebugMode == 6) {
                float specularSuppression = clamp(flashFactor * g_totalFireMask * 0.85, 0.0, 0.90);
                // Suppress white specular glare under the flash so the emerald/cobalt radiance dominates
                gl_FragColor.rgb *= (1.0 - specularSuppression);
              }

              // Held back and composited after tone mapping (below) so it stays a pure colour
              g_opalFire = totalFire;
            }
          }
        }

        #include <tonemapping_fragment>

        // The play of colour is light the stone gives back, not paint on it. Add it after tone
        // mapping (still linear) so ACES does not wash saturated greens and blues toward mint
        // or white. A soft shoulder stops hard clipping at the brightest flash.
        {
          float fireMax = max(max(g_opalFire.r, g_opalFire.g), max(g_opalFire.b, 1e-5));
          vec3 fireHue = pow(g_opalFire / fireMax, vec3(1.35));
          gl_FragColor.rgb += fireHue * (1.0 - exp(-1.6 * fireMax));
        }`),Be.fragmentShader=Be.fragmentShader.replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        if (uHasPreciousOpalMask) { roughnessFactor = max(roughnessFactor, 0.62); }
        `),Be.fragmentShader=Be.fragmentShader.replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
        if (uHasPreciousOpalMask) { metalnessFactor = 0.0; }
        `),Be.fragmentShader=Be.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>

        // Diagnostic Mode 1: PRECIOUS OPAL MASK (Scalar Grayscale: White = Permitted, Black = Host Matrix, Grey = Transition)
        if (uDebugMode == 1) {
          gl_FragColor = vec4(vec3(g_preciousOpalMask), 1.0);
        }

        // Diagnostic Mode 2: MASK OVERLAY (High-contrast white contour over original GLB texture for physical calibration)
        if (uDebugMode == 2) {
          vec3 overlayTint = vec3(1.0, 1.0, 1.0);
          gl_FragColor.rgb = mix(gl_FragColor.rgb, overlayTint, g_preciousOpalMask * 0.85);
        }

        // Diagnostic Mode 7: FORCE MASK COLOUR (Test 2 - Bypasses all optical equations; direct green/blue on masks)
        if (uDebugMode == 7) {
          vec3 forceColour = vec3(0.0, 4.0, 0.2) * g_greenFireMask + vec3(0.15, 0.35, 4.0) * g_blueFireMask;
          gl_FragColor = vec4(forceColour, 1.0);
        }

        // Diagnostic Mode 8: FORCE FULL GREEN (Test 3 - Bypasses mask and physics; turns all fragments bright green)
        if (uDebugMode == 8) {
          gl_FragColor = vec4(0.0, 4.0, 0.2, 1.0);
        }

        // Diagnostic Mode 9: FORCED RESONANCE (Test 4 - Bragg output on masks, bypassing geometry orientation)
        if (uDebugMode == 9) {
          float lambdaGreen = 530.0;
          float lambdaBlue = 460.0;
          vec3 specG = spectralDiffractionRGB(lambdaGreen);
          vec3 specB = spectralDiffractionRGB(lambdaBlue);
          vec3 forcedRes = (specG * g_greenFireMask * 2.8) + (specB * g_blueFireMask * 2.8);
          gl_FragColor = vec4(forcedRes, 1.0);
        }

        // Diagnostic Mode 10: FLASH FACTOR (Test 5 - Grayscale angular response across specimen)
        if (uDebugMode == 10) {
          vec3 L = normalize(uKeyLightDir);
          vec3 V = normalize(cameraPosition - vOpalWorldPos);
          vec3 H = normalize(L + V);
          vec3 localDomainNormal = opalOrientationField(vOpalLocalPos, vOpalLocalNormal);
          vec3 domainNormal = normalize(vOpalWorldRotation * localDomainNormal);
          float cosThetaI = clamp(dot(domainNormal, L), 0.0, 1.0);
          float cosThetaV = clamp(dot(domainNormal, V), 0.0, 1.0);
          float cosHalf = clamp(dot(domainNormal, H), 0.0, 1.0);
          float broadResonance = pow(cosHalf, 12.0) * 1.8;
          float coreResonance = pow(cosHalf, 32.0) * 4.2;
          float peakResonance = pow(cosHalf, 68.0) * 5.5;
          float braggResonance = broadResonance + coreResonance + peakResonance;
          float obliqueGleam = pow(1.0 - cosThetaV, 3.5) * pow(cosThetaI, 1.8) * 0.25;
          float flashFactor = (braggResonance + obliqueGleam) * cosThetaI;
          gl_FragColor = vec4(vec3(clamp(flashFactor * 0.15, 0.0, 1.0)), 1.0);
        }

        // Diagnostic Mode 11: TEST A \u2014 RAW GREEN RIBBON ONLY (No gates, direct white)
        if (uDebugMode == 11) {
          gl_FragColor = vec4(vec3(g_testGreenLodeRaw * 3.0), 1.0);
        }

        // Diagnostic Mode 12: TEST B \u2014 RAW BLUE SHOULDER ONLY (No gates, direct white)
        if (uDebugMode == 12) {
          gl_FragColor = vec4(vec3(g_testBlueShoulderRaw * 3.0), 1.0);
        }

        // Diagnostic Mode 13: TEST C \u2014 GREEN * MATRIX PASS (Excludes notch/pocket)
        if (uDebugMode == 13) {
          gl_FragColor = vec4(vec3(g_testGreenMatrixPass * 3.0), 1.0);
        }

        // Diagnostic Mode 14: TEST D \u2014 GREEN * FRONT FACE LOCK (Excludes reverse face)
        if (uDebugMode == 14) {
          gl_FragColor = vec4(vec3(g_testGreenFrontFaceLock * 3.0), 1.0);
        }

        // Diagnostic Mode 15: TEST E \u2014 GREEN * BASE CUTOFF (Excludes finger grip base)
        if (uDebugMode == 15) {
          gl_FragColor = vec4(vec3(g_testGreenBaseCutoff * 3.0), 1.0);
        }

        // Diagnostic Mode 16: TEST F \u2014 GREEN * LEFT BASE CUTOFF (Excludes left matrix)
        if (uDebugMode == 16) {
          gl_FragColor = vec4(vec3(g_testGreenLeftBaseCutoff * 3.0), 1.0);
        }

        // Diagnostic Mode 17: TEST G \u2014 GREEN * ALL GATES COMBINED (Active green domain)
        if (uDebugMode == 17) {
          gl_FragColor = vec4(vec3(g_testGreenAllGates * 3.0), 1.0);
        }

        // Diagnostic Mode 18: TEST H \u2014 BLUE * MATRIX PASS (Excludes notch/pocket)
        if (uDebugMode == 18) {
          gl_FragColor = vec4(vec3(g_testBlueMatrixPass * 3.0), 1.0);
        }

        // Diagnostic Mode 19: TEST I \u2014 BLUE * FRONT FACE LOCK (Excludes reverse face)
        if (uDebugMode == 19) {
          gl_FragColor = vec4(vec3(g_testBlueFrontFaceLock * 3.0), 1.0);
        }

        // Diagnostic Mode 20: TEST J \u2014 BLUE * BASE CUTOFF (Excludes finger grip base)
        if (uDebugMode == 20) {
          gl_FragColor = vec4(vec3(g_testBlueBaseCutoff * 3.0), 1.0);
        }

        // Diagnostic Mode 21: TEST K \u2014 BLUE * LEFT BASE CUTOFF (Excludes left matrix)
        if (uDebugMode == 21) {
          gl_FragColor = vec4(vec3(g_testBlueLeftBaseCutoff * 3.0), 1.0);
        }

        // Diagnostic Mode 22: TEST L \u2014 BLUE * ALL GATES COMBINED (Active blue domain)
        if (uDebugMode == 22) {
          gl_FragColor = vec4(vec3(g_testBlueAllGates * 3.0), 1.0);
        }

        // Diagnostic Mode 23: TEST M \u2014 RENDER outGreenDomain DIRECTLY
        if (uDebugMode == 23) {
          gl_FragColor = vec4(vec3(g_testOutGreenDomain * 3.0), 1.0);
        }

        // Diagnostic Mode 24: TEST N \u2014 RENDER outBlueDomain DIRECTLY
        if (uDebugMode == 24) {
          gl_FragColor = vec4(vec3(g_testOutBlueDomain * 3.0), 1.0);
        }

        // Diagnostic Mode 25: TEST O \u2014 RENDER GLOBAL g_greenFireMask DIRECTLY
        if (uDebugMode == 25) {
          gl_FragColor = vec4(vec3(g_greenFireMask * 3.0), 1.0);
        }
        
        // Diagnostic Mode 26: TEST P \u2014 RENDER GLOBAL g_blueFireMask DIRECTLY
        if (uDebugMode == 26) {
          gl_FragColor = vec4(vec3(g_blueFireMask * 3.0), 1.0);
        }

        
        // Diagnostic Mode 28: TEST R \u2014 TOTAL MASKED FLASH
        if (uDebugMode == 28) {
          vec3 L = normalize(uKeyLightDir);
          vec3 V = normalize(cameraPosition - vOpalWorldPos);
          vec3 H = normalize(L + V);
          vec3 localDomainNormal = opalOrientationField(vOpalLocalPos, vOpalLocalNormal);
          vec3 domainNormal = normalize(vOpalWorldRotation * localDomainNormal);
          float cosHalf = clamp(dot(domainNormal, H), 0.0, 1.0);
          float flashFactor = pow(cosHalf, 12.0) * 1.8;
          float maskedFlash = flashFactor * g_totalFireMask;
          gl_FragColor = vec4(vec3(clamp(maskedFlash * 2.0, 0.0, 1.0)), 1.0);
        }

        // Diagnostic Mode 29: TEST S \u2014 GREEN MASKED FLASH
        if (uDebugMode == 29) {
          vec3 L = normalize(uKeyLightDir);
          vec3 V = normalize(cameraPosition - vOpalWorldPos);
          vec3 H = normalize(L + V);
          vec3 localDomainNormal = opalOrientationField(vOpalLocalPos, vOpalLocalNormal);
          vec3 domainNormal = normalize(vOpalWorldRotation * localDomainNormal);
          float cosHalf = clamp(dot(domainNormal, H), 0.0, 1.0);
          float flashFactor = pow(cosHalf, 12.0) * 1.8;
          float maskedFlash = flashFactor * g_greenFireMask;
          gl_FragColor = vec4(vec3(clamp(maskedFlash * 2.0, 0.0, 1.0)), 1.0);
        }

        // Diagnostic Mode 30: TEST T \u2014 BLUE MASKED FLASH
        if (uDebugMode == 30) {
          vec3 L = normalize(uKeyLightDir);
          vec3 V = normalize(cameraPosition - vOpalWorldPos);
          vec3 H = normalize(L + V);
          vec3 localDomainNormal = opalOrientationField(vOpalLocalPos, vOpalLocalNormal);
          vec3 domainNormal = normalize(vOpalWorldRotation * localDomainNormal);
          float cosHalf = clamp(dot(domainNormal, H), 0.0, 1.0);
          float flashFactor = pow(cosHalf, 12.0) * 1.8;
          float maskedFlash = flashFactor * g_blueFireMask;
          gl_FragColor = vec4(vec3(clamp(maskedFlash * 2.0, 0.0, 1.0)), 1.0);
        }

        
        // Diagnostic Mode 31: TEST U \u2014 MASKED cosThetaI
        if (uDebugMode == 31) {
          vec3 L = normalize(uKeyLightDir);
          vec3 localDomainNormal = opalOrientationField(vOpalLocalPos, vOpalLocalNormal);
          vec3 domainNormal = normalize(vOpalWorldRotation * localDomainNormal);
          domainNormal = gl_FrontFacing ? domainNormal : -domainNormal;
          float cosThetaI = clamp(dot(domainNormal, L), 0.0, 1.0);
          float test = cosThetaI * g_totalFireMask;
          gl_FragColor = vec4(vec3(test), 1.0);
        }

        // Diagnostic Mode 32: TEST V \u2014 MASKED cosThetaV
        if (uDebugMode == 32) {
          vec3 V = normalize(cameraPosition - vOpalWorldPos);
          vec3 localDomainNormal = opalOrientationField(vOpalLocalPos, vOpalLocalNormal);
          vec3 domainNormal = normalize(vOpalWorldRotation * localDomainNormal);
          domainNormal = gl_FrontFacing ? domainNormal : -domainNormal;
          float cosThetaV = clamp(dot(domainNormal, V), 0.0, 1.0);
          float test = cosThetaV * g_totalFireMask;
          gl_FragColor = vec4(vec3(test), 1.0);
        }

        // Diagnostic Mode 33: TEST W \u2014 OPTICAL VALIDITY GATE
        if (uDebugMode == 33) {
          vec3 L = normalize(uKeyLightDir);
          vec3 V = normalize(cameraPosition - vOpalWorldPos);
          vec3 localDomainNormal = opalOrientationField(vOpalLocalPos, vOpalLocalNormal);
          vec3 domainNormal = normalize(vOpalWorldRotation * localDomainNormal);
          domainNormal = gl_FrontFacing ? domainNormal : -domainNormal;
          float cosThetaI = clamp(dot(domainNormal, L), 0.0, 1.0);
          float cosThetaV = clamp(dot(domainNormal, V), 0.0, 1.0);
          float valid = (cosThetaI > 0.01 && cosThetaV > 0.01) ? 1.0 : 0.0;
          gl_FragColor = vec4(vec3(valid * g_totalFireMask), 1.0);
        }

        // Diagnostic Mode 34: TEST X \u2014 PRODUCTION SPECTRUM WITHOUT VIEW GATE
        if (uDebugMode == 34) {
          vec3 L = normalize(uKeyLightDir);
          vec3 V = normalize(cameraPosition - vOpalWorldPos);
          vec3 H = normalize(L + V);
          vec3 localDomainNormal = opalOrientationField(vOpalLocalPos, vOpalLocalNormal);
          vec3 domainNormal = normalize(vOpalWorldRotation * localDomainNormal);
          domainNormal = gl_FrontFacing ? domainNormal : -domainNormal;
          float cosHalf = clamp(dot(domainNormal, H), 0.0, 1.0);
          float flashFactor = pow(cosHalf, 12.0) * 1.8;
          float nSilica = 1.450;
          float dGreen = 221.0 + opalSpacingField(vOpalLocalPos) * 6.5;
          float dBlue = 188.0 + opalSpacingField(vOpalLocalPos) * 5.5;
          float cosThetaI = clamp(dot(domainNormal, L), 0.0, 1.0);
          float shiftFactor = sqrt(max(0.0, nSilica * nSilica - 1.0 + cosThetaI * cosThetaI));
          float lambdaGreen = 2.0 * dGreen * shiftFactor;
          float lambdaBlue = 2.0 * dBlue * shiftFactor;
          vec3 spectralGreen = spectralDiffractionRGB(lambdaGreen);
          vec3 spectralBlue = spectralDiffractionRGB(lambdaBlue);
          vec3 testFire = spectralGreen * flashFactor * g_greenFireMask + spectralBlue * flashFactor * g_blueFireMask;
          gl_FragColor = vec4(testFire, 1.0);
        }

        // Diagnostic Mode 35: TEST Y \u2014 PRODUCTION SPECTRAL RGB
        if (uDebugMode == 35) {
          vec3 L = normalize(uKeyLightDir);
          vec3 localDomainNormal = opalOrientationField(vOpalLocalPos, vOpalLocalNormal);
          vec3 domainNormal = normalize(vOpalWorldRotation * localDomainNormal);
          domainNormal = gl_FrontFacing ? domainNormal : -domainNormal;
          float cosThetaI = clamp(dot(domainNormal, L), 0.0, 1.0);
          float nSilica = 1.450;
          float dGreen = 221.0 + opalSpacingField(vOpalLocalPos) * 6.5;
          float dBlue = 188.0 + opalSpacingField(vOpalLocalPos) * 5.5;
          float shiftFactor = sqrt(max(0.0, nSilica * nSilica - 1.0 + cosThetaI * cosThetaI));
          float lambdaGreen = 2.0 * dGreen * shiftFactor;
          float lambdaBlue = 2.0 * dBlue * shiftFactor;
          vec3 spectralGreen = spectralDiffractionRGB(lambdaGreen);
          vec3 spectralBlue = spectralDiffractionRGB(lambdaBlue);
          vec3 spectralTest = spectralGreen * g_greenFireMask + spectralBlue * g_blueFireMask;
          gl_FragColor = vec4(spectralTest * 2.0, 1.0);
        }

        // Diagnostic Mode 36: 17E TEST 1 - RAW GREEN WITH NO Z OR NORMAL GATING
        if (uDebugMode == 36) {
          gl_FragColor = vec4(vec3(g_testGreenLodeRawXY), 1.0);
        }

        // Diagnostic Mode 37: 17E TEST 2 - DEPTH ENVELOPE ONLY
        if (uDebugMode == 37) {
          gl_FragColor = vec4(vec3(g_testGreenLodeRawXY * g_testDepthEnvelope), 1.0);
        }

        // Diagnostic Mode 38: 17E TEST 3 - FRONT FACE LOCK ONLY
        if (uDebugMode == 38) {
          gl_FragColor = vec4(vec3(g_testGreenLodeRawXY * g_testFrontFaceLock), 1.0);
        }

        // Diagnostic Mode 39: 17E TEST 4 - VISUALISE specimenPos.z
        if (uDebugMode == 39) {
          float zVis = g_testSpecimenPosZ * 0.5 + 0.5;
          gl_FragColor = vec4(vec3(zVis), 1.0);
        }

        // Diagnostic Mode 40: 17F TEST 1 - PHYSICAL FRONT DEPTH
        if (uDebugMode == 40) {
          gl_FragColor = vec4(vec3(g_testSpecimenPosZ > 0.0 ? 1.0 : 0.0), 1.0);
        }

        // Diagnostic Mode 41: 17F TEST 2 - PHYSICAL FRONT NORMAL
        if (uDebugMode == 41) {
          float frontFacing = dot(normalize(vOpalLocalNormal), normalize(uSpecimenFrontLocal));
          gl_FragColor = vec4(vec3(frontFacing > 0.0 ? 1.0 : 0.0), 1.0);
        }

        // Diagnostic Mode 42: 17F TEST 3 - FRONT LIGHT EXPOSURE
        if (uDebugMode == 42) {
          vec3 L = normalize(uKeyLightDir);
          vec3 localDomainNormal = opalOrientationField(vOpalLocalPos, vOpalLocalNormal);
          vec3 domainNormal = normalize(vOpalWorldRotation * localDomainNormal);
          vec3 correctedWorldNormal = gl_FrontFacing ? domainNormal : -domainNormal;
          float exposure = max(dot(correctedWorldNormal, L), 0.0);
          gl_FragColor = vec4(vec3(exposure * g_totalFireMask), 1.0);
        }

        // Diagnostic Mode 27: TEST Q \u2014 RENDER GLOBAL g_totalFireMask DIRECTLY
        if (uDebugMode == 27) {
          gl_FragColor = vec4(vec3(g_totalFireMask * 3.0), 1.0);
        }`)}},[]),iu=(0,ae.useCallback)(()=>{let gn=new Nn,qn=new Bh(1.6,3),Be=qn.attributes.position;for(let At=0;At<Be.count;At++){let mt=Be.getX(At),ji=Be.getY(At),En=Be.getZ(At),Ni=Math.sqrt(mt*mt+ji*ji+En*En),su=Math.sin(mt*3.2)*Math.cos(ji*2.8)*Math.sin(En*3.5)*.18,au=Math.sin(mt*7.5+1.2)*Math.sin(En*6.8)*.08,xl=ji<-.8?.3:1,Bs=1+(su+au)*(1/(Ni||1));Be.setXYZ(At,mt*Bs*1.35,ji*Bs*.95*xl,En*Bs*.85)}qn.computeVertexNormals();let Eo=new Qs({color:new Oe(1578516),roughness:.88,metalness:.12,flatShading:!1,side:On,clippingPlanes:[],clipShadows:!0}),Ua=new Nt(qn,Eo);Ua.castShadow=!0,Ua.receiveShadow=!0,gn.add(Ua);let na=new Fh(1.45,48,32,0,Math.PI*1.3,0,Math.PI*.65),ti=na.attributes.position;for(let At=0;At<ti.count;At++){let mt=ti.getX(At),ji=ti.getY(At),En=ti.getZ(At),Ni=Math.sin(mt*4)*Math.cos(En*4)*.12;ti.setXYZ(At,mt*1.36+Ni,ji*.96+.08,En*.88+Ni)}na.computeVertexNormals();let ni=new Qs({color:new Oe(1786674),roughness:.22,metalness:.04,side:On,clippingPlanes:[],clipShadows:!0});Ki(ni,!0);let ke=new Nt(na,ni);return ke.position.y=.2,ke.rotation.z=-.15,ke.castShadow=!0,ke.receiveShadow=!0,gn.add(ke),ze.current=[Eo,ni],gn},[]);return(0,ae.useEffect)(()=>{let gn=Y.current,qn=F.current;if(!gn||!qn)return;let Be=!1;Ve.current.value=!1,ee.current.value=null,Ie.current.value=null;let Eo=[],Ua=!0,na=gn.clientWidth||600,ti=gn.clientHeight||500,ni=new Ah;de.current=ni;let ke=new Dn(35,na/ti,.1,100);Ne.current=De.current?Ww(na/ti):1,ke.position.set(0,0,Xw*Ne.current),Q.current=ke;let At;try{At=new ng({canvas:qn,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch(Me){console.warn("[opal] WebGL unavailable",Me),be.current?.();return}At.setSize(na,ti),At.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),At.toneMapping=$h,At.toneMappingExposure=1.15,At.localClippingEnabled=!0,Te.current=At;let mt=new ug(ke,qn);mt.enableDamping=!0,mt.dampingFactor=.05,mt.minDistance=1.4,mt.maxDistance=50,mt.enablePan=!1,mt.enableZoom=he.current,qn.style.touchAction=le.current,_e.current=mt;let ji=new qh(4209977,.1);ni.add(ji);let En=new pl(16447733,Ox);En.position.copy(Nx),ni.add(En);let Ni=new Nn;Ni.visible=!1,[{y:1.8,radius:4.5,color:9341570,label:"Regolith 0m"},{y:.6,radius:4.2,color:7234128,label:"Silcrete Duricrust -4m"},{y:0,radius:3.8,color:13150590,label:"Matrix Sandstone Seam -18m"},{y:-1.2,radius:4,color:3814443,label:"Bulldog Shale Bed -26m"}].forEach(Me=>{let Ke=new po(Me.radius-.02,Me.radius,64),xt=new Ln({color:Me.color,side:On,transparent:!0,opacity:.35}),Gt=new Nt(Ke,xt);Gt.rotation.x=Math.PI/2,Gt.position.y=Me.y,Ni.add(Gt);let je=new ft,Ue=[];for(let $e=0;$e<16;$e++){let _t=$e/16*Math.PI*2,Le=Me.radius-.3,Mt=Me.radius;Ue.push(Math.cos(_t)*Le,Me.y,Math.sin(_t)*Le),Ue.push(Math.cos(_t)*Mt,Me.y,Math.sin(_t)*Mt)}je.setAttribute("position",new vt(Ue,3));let Xe=new Ri(je,new Gn({color:Me.color,transparent:!0,opacity:.25}));Ni.add(Xe)});let au=new ft().setFromPoints([new D(0,3,0),new D(0,-3,0)]),xl=new fi(au,new hr({color:13150590,dashSize:.15,gapSize:.1,transparent:!0,opacity:.4}));xl.computeLineDistances(),Ni.add(xl),ni.add(Ni),St.current=Ni;let Bs=new Nn;Bs.visible=!1;let vr=new jh(30,20,13150590,3354666);vr.position.y=-.5,Array.isArray(vr.material)?vr.material.forEach(Me=>{Me.transparent=!0,Me.opacity=.2}):(vr.material.transparent=!0,vr.material.opacity=.2),Bs.add(vr);let T=new ur(16,.1,16),I=new Ri(new hl(T),new Gn({color:13150590,transparent:!0,opacity:.35}));I.position.y=-.48,Bs.add(I),ni.add(Bs),Di.current=Bs;let G=new Nn,B=new Nn;B.name="opticalBench",B.visible=!1;let z=new ft().setFromPoints([new D,new D]),pe=new hr({color:13150590,dashSize:.08,gapSize:.04,transparent:!0,opacity:.9}),ve=new fi(z,pe);ve.name="incidentLine",B.add(ve);let ue=new Ph(.024,.06,12),Se=new Ln({color:13150590,transparent:!0,opacity:.9}),Ae=new Nt(ue,Se);Ae.name="incidentCone",B.add(Ae);let Ze=new ft().setFromPoints([new D,new D]),Qe=new Gn({color:16118509,transparent:!0,opacity:.95}),Re=new fi(Ze,Qe);Re.name="normalLine",B.add(Re);let wt=new Ln({color:16118509,transparent:!0,opacity:.95}),sn=new Nt(ue,wt);sn.name="normalCone",B.add(sn);let an=new ft,Lt=new Gn({color:16118509,transparent:!0,opacity:.7}),Un=new fi(an,Lt);Un.name="bracketLine",B.add(Un);let ye=new ft().setFromPoints([new D,new D]),xi=new hr({color:8169668,dashSize:.08,gapSize:.04,transparent:!0,opacity:.85}),ct=new fi(ye,xi);ct.name="observerLine",B.add(ct);let Li=new Ln({color:8169668,transparent:!0,opacity:.85}),Ji=new Nt(ue,Li);Ji.name="observerCone",B.add(Ji);let ia=new ft().setFromPoints([new D,new D]),yr=new hr({color:14865859,dashSize:.05,gapSize:.05,transparent:!0,opacity:.5}),Rt=new fi(ia,yr);Rt.name="halfVecLine",B.add(Rt);let un=new po(.04,.052,32),sa=new Ln({color:13150590,side:On,transparent:!0,opacity:.95}),Ot=new Nt(un,sa);Ot.name="surfaceReticle",B.add(Ot);let aa=new ft().setFromPoints([new D(-.06,0,0),new D(.06,0,0),new D(0,-.06,0),new D(0,.06,0)]),xr=new Gn({color:13150590,transparent:!0,opacity:.8}),ru=new Ri(aa,xr);ru.name="crosshairLine",B.add(ru);let jw=28,Jw=new Float32Array(jw*3),Ix=new ft;Ix.setAttribute("position",new tn(Jw,3));let Qw=new Gn({color:13150590,transparent:!0,opacity:.65}),Px=new fi(Ix,Qw);Px.name="angularArc",B.add(Px);let mf=new Nn;mf.name="latticePlanes",mf.visible=!1;for(let Me=0;Me<4;Me++){let Ke=new po(.02,.22,24),xt=new Ln({color:8169668,side:On,transparent:!0,opacity:.35-Me*.06,wireframe:!0}),Gt=new Nt(Ke,xt);Gt.position.y=-Me*.06,mf.add(Gt)}B.add(mf),G.add(B);let Ia=new Nn;Ia.name="matrixSurvey",Ia.visible=!1;let $w=new fo(3.2,3.2,16,16),eR=new zh($w),tR=new Gn({color:9341570,transparent:!0,opacity:.3}),Bx=new Ri(eR,tR);Bx.name="geologicalRefPlane",Ia.add(Bx);let nR=new ft().setFromPoints([new D(0,0,0),new D(0,1.35,0)]),iR=new hr({color:13150590,dashSize:.08,gapSize:.04,transparent:!0,opacity:.85}),Fx=new fi(nR,iR);Fx.name="stratigraphicAxis",Ia.add(Fx);let sR=new Ln({color:13150590,transparent:!0,opacity:.9}),zx=new Nt(ue,sR);zx.name="stratigraphicCone",Ia.add(zx);let aR=new po(.045,.06,32),rR=new Ln({color:9341570,side:On,transparent:!0,opacity:.95}),Hx=new Nt(aR,rR);Hx.name="ifaceReticle",Ia.add(Hx);let oR=new ft().setFromPoints([new D(-.08,0,0),new D(.08,0,0),new D(0,-.08,0),new D(0,.08,0)]),lR=new Gn({color:9341570,transparent:!0,opacity:.85}),Gx=new Ri(oR,lR);Gx.name="ifaceCross",Ia.add(Gx);let cR=new hl(new fo(2.4,2)),uR=new Gn({color:13150590,transparent:!0,opacity:.75}),fg=new Ri(cR,uR);fg.name="sectionFrame",fg.visible=!1,Ia.add(fg),G.add(Ia);let hR=new ur(2.4,1.8,1.6),fR=new hl(hR),dR=new Gn({color:13150590,transparent:!0,opacity:.35}),dg=new Ri(fR,dR);dg.name="custodyBox",dg.visible=!1,G.add(dg),ni.add(G);let Vx=new Hi(new D(0,1,0),0),kx=new lg;kx.setDecoderPath("/draco/");let Xx=new ag;Xx.setDRACOLoader(kx);let pg=Me=>{Be||(Me.rotation.set(kt.degToRad(Lx.pitch),kt.degToRad(Lx.yaw),kt.degToRad(Lx.roll)),Pe.current=Me,ni.add(Me),mn.current=(Ke,xt,Gt,je)=>{Pe.current&&(ie.current&&(ie.current=!1,ne.current?.()),Pe.current.rotation.set(kt.degToRad(xt),kt.degToRad(Ke),kt.degToRad(Gt)),je&&lt(Ue=>({...Ue,activePresetId:je})))})},mg=n||"/images/Matrixtwin_opal.glb";{let Me=mg.replace(/\.glb(\?.*)?$/i,""),Ke=new fl,xt=je=>{Eo.push(je),je.flipY=!1,je.colorSpace=ta,je.wrapS=je.wrapT=Gi,je.anisotropy=4,je.magFilter=dn,je.minFilter=xs,je.needsUpdate=!0},Gt=()=>{ee.current.value&&Ie.current.value&&(Ve.current.value=!0)};Ke.load(i?.flash??`${Me}_flash.png`,je=>{if(Be){je.dispose();return}xt(je),J.current.value.set(1/je.image.width,1/je.image.height),ee.current.value=je,Gt()},void 0,()=>console.warn("[opal] flash mask not found - using procedural masks")),Ke.load(i?.domain??`${Me}_domain.png`,je=>{if(Be){je.dispose();return}xt(je),Ie.current.value=je,Gt()},void 0,()=>console.warn("[opal] orientation map not found - using procedural orientation"))}mg?Xx.load(mg,Me=>{if(Be)return;let Ke=Me.scene,xt=new wi().setFromObject(Ke),Gt=xt.getCenter(new D),je=xt.getSize(new D),Xe=2.4/(Math.max(je.x,je.y,je.z)||1);Ke.position.x=-Gt.x*Xe,Ke.position.y=-Gt.y*Xe,Ke.position.z=-Gt.z*Xe,Ke.scale.setScalar(Xe);let $e=new Nn;$e.add(Ke);let _t=[];Ke.traverse(Le=>{if(Le instanceof Nt&&Le.material){let Mt=Le.material,ut=new Qs({color:Mt.color?Mt.color.clone():new Oe(16777215),map:Mt.map||null,normalMap:Mt.normalMap||null,roughnessMap:Mt.roughnessMap||null,metalnessMap:Mt.metalnessMap||null,roughness:Mt.roughness!==void 0?Mt.roughness:.35,metalness:Mt.metalness!==void 0?Mt.metalness:.05,side:On,clippingPlanes:[],clipShadows:!0});Ki(ut,!1),Le.material=ut,_t.push(ut),Le.castShadow=!0,Le.receiveShadow=!0}}),ze.current=_t,pg($e),oe.current?.()},void 0,Me=>{console.error("GLTF Load Error:",Me),K.current?pg(iu()):be.current?.()}):pg(iu());let Wx,pR=new Kh,br={material:new D(-.65,-.2,.45),diffraction:new D(.35,.45,.65),custody:new D(.1,-.65,.7)};ce.current=Me=>{if(!(Be||!ke||!mt))if(Me){se.current||(se.current={position:ke.position.clone(),target:mt.target.clone(),fov:ke.fov,distance:ke.position.distanceTo(mt.target)});let Ke=new D(0,0,0),xt=3.5,Gt=31;if(Pe.current&&br[Me]){let $e=br[Me].clone().applyMatrix4(Pe.current.matrixWorld);Me==="diffraction"?(Ke=$e.clone().multiplyScalar(.4),xt=3.45,Gt=31):Me==="material"?(Ke=$e.clone().multiplyScalar(.45),xt=3.55,Gt=31):Me==="custody"&&(Ke=$e.clone().multiplyScalar(.2),xt=4.2,Gt=33)}let je=ke.position.clone().sub(mt.target).normalize();je.lengthSq()<.001&&je.set(0,0,1);let Ue=Ke.clone().add(je.multiplyScalar(xt));q.current={active:!0,startTime:performance.now(),duration:650,startPos:ke.position.clone(),targetPos:Ue,startTarget:mt.target.clone(),targetTarget:Ke,startFov:ke.fov,targetFov:Gt}}else{let Ke=se.current,xt=Ke?Ke.distance:4.8,Gt=Ke?Ke.fov:35,je=new D(0,0,0),Ue=ke.position.clone().sub(mt.target).normalize();Ue.lengthSq()<.001&&Ue.set(0,0,1);let Xe=je.clone().add(Ue.multiplyScalar(xt));q.current={active:!0,startTime:performance.now(),duration:650,startPos:ke.position.clone(),targetPos:Xe,startTarget:mt.target.clone(),targetTarget:je,startFov:ke.fov,targetFov:Gt},se.current=null}};let qx=()=>{Wx=requestAnimationFrame(qx);let Me=pR.getDelta();if(!Ua)return;if(q.current.active){let Xe=performance.now()-q.current.startTime,$e=Math.min(1,Xe/q.current.duration),_t=$e*$e*$e*($e*($e*6-15)+10);ke.position.lerpVectors(q.current.startPos,q.current.targetPos,_t),mt.target.lerpVectors(q.current.startTarget,q.current.targetTarget,_t),ke.fov=kt.lerp(q.current.startFov,q.current.targetFov,_t),ke.updateProjectionMatrix(),$e>=1&&(q.current.active=!1)}mt.update();{let Ue=X.current,Xe=kt.degToRad(Ue.azimuth),$e=kt.degToRad(Ue.elevation),_t=new D(Math.sin(Xe)*Math.cos($e),Math.sin($e),Math.cos(Xe)*Math.cos($e));En.intensity=Ox*Ue.intensity/100,ji.intensity=Ue.ambient/100,nn.current==="camera"&&(ke.updateMatrixWorld(),_t.applyQuaternion(ke.quaternion)),_t.normalize(),en.current.value.copy(_t),pt.current.value=En.visible?Math.max(0,En.intensity/Ox):0,we.current.copy(_t).multiplyScalar(qw),En.position.copy(we.current)}let Ke=ke.position.length()/Ne.current;if(St.current){let Ue=kt.clamp((Ke-3.6)/2.5,0,1)*kt.clamp((28-Ke)/8,0,1);St.current.visible=!1,St.current.traverse(Xe=>{(Xe instanceof Nt||Xe instanceof Ri||Xe instanceof fi)&&Xe.material&&"opacity"in Xe.material&&(Xe.material.opacity=kt.clamp(Ue*.4,0,.5))})}if(Di.current){let Ue=kt.clamp((Ke-12)/6,0,1);Di.current.visible=!1}let xt=yn.current,Gt=Mn.current,je=xt==="diffraction"||Gt==="investigate"||Gt==="model";if(G&&Pe.current){let Ue=G.getObjectByName("opticalBench"),Xe=G.getObjectByName("matrixSurvey"),$e=G.getObjectByName("custodyBox");if(Ue&&(Ue.visible=je,Ue.visible)){let Le=(br.diffraction||new D(.35,.45,.65)).clone().applyMatrix4(Pe.current.matrixWorld),Mt=Pe.current.position.clone(),ut=Le.clone().sub(Mt).normalize(),In=we.current.clone().clone().sub(Le).normalize(),ii=ke.position.clone().sub(Le).normalize(),Qi=In.clone().add(ii).normalize(),$i=Ue.getObjectByName("incidentLine"),Tn=Le.clone().add(In.clone().multiplyScalar(1.6));if($i){let Ut=$i.geometry.attributes.position;Ut.setXYZ(0,Tn.x,Tn.y,Tn.z),Ut.setXYZ(1,Le.x,Le.y,Le.z),Ut.needsUpdate=!0,$i.computeLineDistances()}let Kt=Ue.getObjectByName("incidentCone");if(Kt){let Ut=Le.clone().add(In.clone().multiplyScalar(.45));Kt.position.copy(Ut),Kt.quaternion.setFromUnitVectors(new D(0,1,0),In.clone().negate())}let Pn=Ue.getObjectByName("normalLine"),es=Le.clone().add(ut.clone().multiplyScalar(1.05));if(Pn){let Ut=Pn.geometry.attributes.position;Ut.setXYZ(0,Le.x,Le.y,Le.z),Ut.setXYZ(1,es.x,es.y,es.z),Ut.needsUpdate=!0}let Ms=Ue.getObjectByName("normalCone");Ms&&(Ms.position.copy(es),Ms.quaternion.setFromUnitVectors(new D(0,1,0),ut));let Bn=Ue.getObjectByName("bracketLine");if(Bn){let Zn=new D(0,1,0).cross(ut).normalize(),Sr=Le.clone().add(ut.clone().multiplyScalar(.08)),ns=Sr.clone().add(Zn.clone().multiplyScalar(.08)),Mr=Le.clone().add(Zn.clone().multiplyScalar(.08));Bn.geometry.setFromPoints([Sr,ns,Mr])}let ts=Ue.getObjectByName("observerLine"),Pa=Le.clone().add(ii.clone().multiplyScalar(1.5));if(ts){let Ut=ts.geometry.attributes.position;Ut.setXYZ(0,Le.x,Le.y,Le.z),Ut.setXYZ(1,Pa.x,Pa.y,Pa.z),Ut.needsUpdate=!0,ts.computeLineDistances()}let oa=Ue.getObjectByName("observerCone");oa&&(oa.position.copy(Pa),oa.quaternion.setFromUnitVectors(new D(0,1,0),ii));let To=Ue.getObjectByName("halfVecLine");if(To){let Ut=Le.clone().add(Qi.clone().multiplyScalar(.75)),Zn=To.geometry.attributes.position;Zn.setXYZ(0,Le.x,Le.y,Le.z),Zn.setXYZ(1,Ut.x,Ut.y,Ut.z),Zn.needsUpdate=!0,To.computeLineDistances()}let Ba=Ue.getObjectByName("surfaceReticle");Ba&&(Ba.position.copy(Le).add(ut.clone().multiplyScalar(.008)),Ba.quaternion.setFromUnitVectors(new D(0,0,1),ut));let Ao=Ue.getObjectByName("crosshairLine");Ao&&(Ao.position.copy(Le).add(ut.clone().multiplyScalar(.009)),Ao.quaternion.setFromUnitVectors(new D(0,0,1),ut));let cu=Ue.getObjectByName("angularArc"),bl=Le.clone();if(cu){let Ut=cu.geometry.attributes.position,Zn=Ut.count,Sr=.58;for(let ns=0;ns<Zn;ns++){let Mr=ns/(Zn-1),uu=new D().copy(In).lerp(ut,Mr).normalize(),Sl=Le.clone().add(uu.multiplyScalar(Sr));Ut.setXYZ(ns,Sl.x,Sl.y,Sl.z),ns===Math.floor(Zn/2)&&(bl=Sl.clone())}Ut.needsUpdate=!0}let wo=Ue.getObjectByName("latticePlanes");if(wo&&(wo.visible=Gt==="model",wo.visible&&(wo.position.copy(Le),wo.quaternion.setFromUnitVectors(new D(0,1,0),ut))),P.current){let Ut=At.domElement.getBoundingClientRect(),Zn=Sr=>{let ns=Sr.clone().project(ke),Mr=ns.z>1;return{x:(ns.x*.5+.5)*Ut.width,y:(ns.y*-.5+.5)*Ut.height,visible:!Mr}};P.current({anchor:Zn(Le),lightSource:Zn(Tn),normalTip:Zn(es),observerTip:Zn(Pa),arcMid:Zn(bl)})}}if(Xe)if(Xe.visible=xt==="material",Xe.visible){let Le=(br.material||new D(-.65,-.2,.45)).clone().applyMatrix4(Pe.current.matrixWorld),Mt=Pe.current.position.clone(),ut=Le.clone().sub(Mt).normalize(),Yn=Xe.getObjectByName("geologicalRefPlane");Yn&&(Yn.position.copy(Le),Yn.quaternion.setFromUnitVectors(new D(0,0,1),ut));let In=Xe.getObjectByName("stratigraphicAxis"),ii=Le.clone().add(ut.clone().multiplyScalar(1.25));if(In){let Bn=In.geometry.attributes.position;Bn.setXYZ(0,Le.x,Le.y,Le.z),Bn.setXYZ(1,ii.x,ii.y,ii.z),Bn.needsUpdate=!0,In.computeLineDistances()}let Qi=Xe.getObjectByName("stratigraphicCone");Qi&&(Qi.position.copy(ii),Qi.quaternion.setFromUnitVectors(new D(0,1,0),ut));let $i=Xe.getObjectByName("ifaceReticle");$i&&($i.position.copy(Le).add(ut.clone().multiplyScalar(.008)),$i.quaternion.setFromUnitVectors(new D(0,0,1),ut));let Tn=Xe.getObjectByName("ifaceCross");Tn&&(Tn.position.copy(Le).add(ut.clone().multiplyScalar(.009)),Tn.quaternion.setFromUnitVectors(new D(0,0,1),ut));let Kt=Xe.getObjectByName("sectionFrame"),Pn=Zt.current,es=cn.current??0,Ms=Le.clone().add(ut.clone().multiplyScalar(es*.5));if(Pn?(Kt&&(Kt.visible=!0,Kt.position.copy(Ms),Kt.quaternion.setFromUnitVectors(new D(0,0,1),ut)),Vx.setFromNormalAndCoplanarPoint(ut,Ms),ze.current.forEach(Bn=>{Bn.clippingPlanes=[Vx]})):(Kt&&(Kt.visible=!1),ze.current.forEach(Bn=>{Bn.clippingPlanes=[]})),H.current){let Bn=At.domElement.getBoundingClientRect(),ts=To=>{let Ba=To.clone().project(ke),Ao=Ba.z>1;return{x:(Ba.x*.5+.5)*Bn.width,y:(Ba.y*-.5+.5)*Bn.height,visible:!Ao}},Pa=new D(0,1,0).cross(ut).normalize(),oa=Le.clone().add(Pa.multiplyScalar(.8));H.current({anchor:ts(Le),axisTip:ts(ii),planeOrigin:ts(oa),sectionMarker:ts(Ms)})}}else Zt.current||ze.current.forEach(_t=>{_t.clippingPlanes=[]});$e&&($e.visible=xt==="custody"||Gt==="verify",$e.visible&&($e.position.copy(Pe.current.position),$e.rotation.copy(Pe.current.rotation)))}if(Pe.current&&S.current){let Xe=(br.diffraction||new D(.35,.45,.65)).clone().applyMatrix4(Pe.current.matrixWorld),$e=Pe.current.position.clone(),_t=Xe.clone().sub($e).normalize(),Mt=we.current.clone().clone().sub(Xe).normalize(),ut=ke.position.clone().sub(Xe).normalize(),Yn=Mt.clone().add(ut).normalize(),In=Math.max(0,Math.min(1,_t.dot(Mt))),ii=Math.max(0,Math.min(1,_t.dot(ut))),Qi=Math.max(0,Math.min(1,_t.dot(Yn))),$i=Math.round(Math.acos(In)*(180/Math.PI)),Tn=Math.round(Math.acos(ii)*(180/Math.PI)),Kt=Math.round((Math.atan2(Mt.x,Mt.z)*(180/Math.PI)+360)%360),Pn="DIRECT KEY ILLUMINATION";Qi>.85&&In>.1?Pn="SPECULAR HIGHLIGHT REGIME (PEAK)":Qi>.65&&In>.1?Pn="OBLIQUE SPECULAR REGIME":In>.45?Pn="DIRECT KEY ILLUMINATION":In>.08?Pn="GRAZING / OBLIQUE REGIME":Pn="SHADOW / BACKLIT REGIME",S.current({angleOfIncidence:$i,viewAngle:Tn,lightAzimuthDeg:Kt,relativeIllumination:Pn,specularAlignment:Number(Qi.toFixed(3))})}if(Pe.current&&ie.current&&(Pe.current.rotation.y+=Me*.05),O.current&&Pe.current){let Ue=[],Xe=At.domElement.getBoundingClientRect(),$e=null,_t=-1/0;(ln.current.length>0?ln.current:Object.keys(br)).forEach(Mt=>{let ut=br[Mt];if(ut){let Yn=ut.clone().applyMatrix4(Pe.current.matrixWorld),In=Yn.clone().sub(ke.position).normalize(),ii=Yn.clone().sub(Pe.current.position).normalize(),$i=-In.dot(ii),Tn=$i>-.35,Kt=Yn.clone().project(ke);if(Kt.z<=1){let Pn=(Kt.x*.5+.5)*Xe.width,es=(Kt.y*-.5+.5)*Xe.height;if(Ue.push({id:Mt,x:Pn,y:es,visible:Tn,worldX:Yn.x,worldY:Yn.y,worldZ:Yn.z}),Tn){let Ms=Math.sqrt(Kt.x*Kt.x+Kt.y*Kt.y),Bn=$i*2-Ms;Bn>_t&&(_t=Bn,$e=Mt)}}}}),$e&&Wn.current&&Wn.current($e),O.current(Ue)}if(gt.current&&gt.current(Ke),R.current){let Ue=new _r().setFromVector3(ke.position),Xe=Math.round(kt.radToDeg(Ue.theta)),$e=Math.round(kt.radToDeg(Ue.phi-Math.PI/2));R.current(Xe,$e)}if(Z.current&&Pe.current){let Ue=Pe.current.rotation,Xe=Math.round(kt.radToDeg(Ue.x)),$e=Math.round(kt.radToDeg(Ue.y)),_t=Math.round(kt.radToDeg(Ue.z)),Le=new _r().setFromVector3(ke.position),Mt=Math.round(kt.radToDeg(Le.theta)),ut=Math.round(kt.radToDeg(Math.PI/2-Le.phi)),Yn=new D(.008,.268,.963).normalize(),In=new D(-.524,.764,.377).normalize(),ii=Yn.clone().applyEuler(Ue).normalize(),Qi=In.clone().applyEuler(Ue).normalize(),Tn=we.current.clone().clone().normalize(),Kt=ke.position.clone().normalize(),Pn=Tn.clone().add(Kt).normalize(),es=new D(0,0,-1).applyQuaternion(ke.quaternion).normalize(),Ms=is=>.15*Math.pow(is,10)+.3*Math.pow(is,30)+.55*Math.pow(is,80),Bn=Math.max(0,ii.dot(Pn)),ts=Math.max(0,ii.dot(Tn)),Pa=Math.max(0,ii.dot(Kt)),oa=Hw,To=Gw,Ba=Math.sqrt(Math.max(0,oa*oa-1+ts*ts)),Ao=2*To*Ba,cu=Ms(Bn)*ts*pf,bl=Number(Math.min(1,cu/pf).toFixed(3)),wo=Math.max(0,Qi.dot(Pn)),Ut=Math.max(0,Qi.dot(Tn)),Zn=Vw,Sr=Math.sqrt(Math.max(0,oa*oa-1+Ut*Ut)),ns=2*Zn*Sr,Mr=Ms(wo)*Ut*pf,uu=Number(Math.min(1,Mr/pf).toFixed(3)),Sl=Number(Math.max(bl,uu).toFixed(3)),gR=Number(Math.max(cu,Mr).toFixed(3)),gP=Number(ts.toFixed(3)),_P=Number(Pa.toFixed(3)),vP=Number(Bn.toFixed(3)),yP=Number(Ao.toFixed(1)),xP=Number(ns.toFixed(1));lt(is=>is.pitchDeg===Xe&&is.yawDeg===$e&&is.rollDeg===_t&&is.camAzimuth===Mt&&is.camElevation===ut&&Math.abs(is.greenResponse-bl)<.01&&Math.abs(is.blueResponse-uu)<.01?is:{...is,pitchDeg:Xe,yawDeg:$e,rollDeg:_t,camAzimuth:Mt,camElevation:ut,camDistance:Number(Ke.toFixed(2)),camPos:[Number(ke.position.x.toFixed(2)),Number(ke.position.y.toFixed(2)),Number(ke.position.z.toFixed(2))],camDir:[Number(es.x.toFixed(2)),Number(es.y.toFixed(2)),Number(es.z.toFixed(2))],keyLightPos:[Number(we.current.x.toFixed(2)),Number(we.current.y.toFixed(2)),Number(we.current.z.toFixed(2))],L:[Number(Tn.x.toFixed(3)),Number(Tn.y.toFixed(3)),Number(Tn.z.toFixed(3))],V:[Number(Kt.x.toFixed(3)),Number(Kt.y.toFixed(3)),Number(Kt.z.toFixed(3))],H:[Number(Pn.x.toFixed(3)),Number(Pn.y.toFixed(3)),Number(Pn.z.toFixed(3))],flashFactor:gR,greenResponse:bl,blueResponse:uu,totalResponse:Sl})}At.render(ni,ke)};qx();let Yx=new Zh,gg=new Ce,_g={x:0,y:0},ou=()=>{q.current.active&&(q.current.active=!1),ie.current&&(ie.current=!1,ne.current?.())};mt.addEventListener("start",ou),L.current=()=>{if(!Q.current||!Pe.current)return;let Me=Q.current.position.clone().normalize();Pe.current.updateMatrixWorld(!0);let Ke=new qe().extractRotation(Pe.current.matrixWorld).invert(),xt=Me.clone().applyMatrix4(Ke).normalize();ge(Me.clone()),te(xt.clone()),dt.current.value.copy(xt)},re.current=()=>{dt.current.value.copy(kw),ge(null),te(null)};let Zx=Me=>{_g={x:Me.clientX,y:Me.clientY},ou()},Kx=Me=>{let Ke=Me.clientX-_g.x,xt=Me.clientY-_g.y;if(Math.sqrt(Ke*Ke+xt*xt)>6||!F.current||!Pe.current)return;let je=F.current.getBoundingClientRect();gg.x=(Me.clientX-je.left)/je.width*2-1,gg.y=-((Me.clientY-je.top)/je.height)*2+1,Yx.setFromCamera(gg,ke);let Ue=Yx.intersectObjects(Pe.current.children,!0);if(Ue.length>0){let Xe=Ue[0].point,$e="diffraction",_t=1/0;Object.entries(br).forEach(([Le,Mt])=>{let Yn=Mt.clone().applyMatrix4(Pe.current.matrixWorld).distanceTo(Xe);Yn<_t&&(_t=Yn,$e=Le)}),W.current?.($e)}else W.current?.(null)},jx=()=>{ou()},Jx=()=>{ou()},ra=F.current;ra&&(ra.addEventListener("pointerdown",Zx),ra.addEventListener("pointerup",Kx),ra.addEventListener("wheel",jx,{passive:!0}),ra.addEventListener("touchstart",Jx,{passive:!0}));let lu=null,mR=()=>{lu&&cancelAnimationFrame(lu),lu=requestAnimationFrame(()=>{if(!gn||Be)return;let Me=gn.clientWidth,Ke=gn.clientHeight;if(Me===0||Ke===0)return;ke.aspect=Me/Ke,ke.updateProjectionMatrix(),At.setSize(Me,Ke,!1);let xt=De.current?Ww(Me/Ke):1;xt!==Ne.current&&(ke.position.multiplyScalar(xt/Ne.current),Ne.current=xt,mt.update())})},Qx=new ResizeObserver(mR);Qx.observe(gn);let $x=!0,eb=document.visibilityState!=="hidden",tb=()=>{Ua=$x&&eb},nb=typeof IntersectionObserver<"u"?new IntersectionObserver(Me=>{$x=Me[Me.length-1].isIntersecting,tb()},{threshold:0}):null;nb?.observe(gn);let ib=()=>{eb=document.visibilityState!=="hidden",tb()};document.addEventListener("visibilitychange",ib);let sb=Me=>{Me.preventDefault(),console.warn("[opal] WebGL context lost"),be.current?.()};return qn.addEventListener("webglcontextlost",sb),()=>{Be=!0,Eo.forEach(Me=>Me.dispose()),nb?.disconnect(),document.removeEventListener("visibilitychange",ib),qn.removeEventListener("webglcontextlost",sb),lu&&cancelAnimationFrame(lu),mt.removeEventListener("start",ou),ra&&(ra.removeEventListener("pointerdown",Zx),ra.removeEventListener("pointerup",Kx),ra.removeEventListener("wheel",jx),ra.removeEventListener("touchstart",Jx)),Qx.disconnect(),cancelAnimationFrame(Wx),mt.dispose(),At.dispose(),ni.clear()}},[iu,n,i?.flash,i?.domain]),(0,Ux.jsx)("div",{ref:Y,className:`opal-viewer ${a}`,children:(0,Ux.jsx)("canvas",{ref:F,tabIndex:0,"aria-label":"Interactive scanned opal. Drag to rotate; pinch or scroll to zoom."})})});var Ge=Ro(df(),1),Zw={azimuth:30,elevation:Math.atan2(280,240)*180/Math.PI,intensity:100,ambient:10},pP={flash:"/models/Matrixtwin_opal_flash_smooth.png",domain:"/models/Matrixtwin_opal_domain_smooth.png"};function mP(){let t=(0,Zi.useRef)(null),[e,n]=(0,Zi.useState)(Zw),[i,s]=(0,Zi.useState)(!0),[a,r]=(0,Zi.useState)("camera"),[o,l]=(0,Zi.useState)("dark"),[c,h]=(0,Zi.useState)("loading"),f=(0,Zi.useCallback)(()=>h("ready"),[]),u=(0,Zi.useCallback)(()=>h("error"),[]),d=()=>{n(Zw),s(!0),r("camera"),l("dark"),t.current?.resetView()},g=(0,Zi.useRef)({light:e,enabled:i,mode:a,background:o,status:c});g.current={light:e,enabled:i,mode:a,background:o,status:c},(0,Zi.useEffect)(()=>{let m=document.modelContext;if(!m?.registerTool)return;let p=new AbortController,_={name:"configure_opal_lamp",description:"Set the visible opal light-box lamp direction, brightness, and fill light.",inputSchema:{type:"object",properties:{azimuth:{type:"number",minimum:-180,maximum:180},elevation:{type:"number",minimum:-20,maximum:90},intensity:{type:"number",minimum:0,maximum:150},ambient:{type:"number",minimum:0,maximum:50}},additionalProperties:!1},annotations:{readOnlyHint:!1,untrustedContentHint:!1},async execute(x){if(!x||typeof x!="object"||Array.isArray(x))throw new Error("Expected lamp settings");let v={azimuth:[-180,180],elevation:[-20,90],intensity:[0,150],ambient:[0,50]};for(let[M,E]of Object.entries(x))if(!v[M]||typeof E!="number"||!Number.isFinite(E)||E<v[M][0]||E>v[M][1])throw new Error("Invalid lamp setting: "+M);return n(M=>({...M,...x})),await new Promise(M=>requestAnimationFrame(()=>requestAnimationFrame(M))),g.current}};try{Promise.resolve(m.registerTool(_,{signal:p.signal})).catch(()=>{})}catch{}return()=>p.abort()},[]);function b(m,p,_,x,v){return(0,Ge.jsxs)("label",{className:"slider",children:[(0,Ge.jsxs)("span",{children:[p,(0,Ge.jsxs)("output",{children:[Math.round(e[m]),v]})]}),(0,Ge.jsx)("input",{type:"range",min:_,max:x,step:1,value:e[m],onChange:M=>n(E=>({...E,[m]:+M.target.value}))})]})}return(0,Ge.jsxs)("main",{children:[(0,Ge.jsxs)("header",{children:[(0,Ge.jsxs)("div",{className:"brand",children:[(0,Ge.jsx)("span",{className:"brandmark",children:"\u25C8"}),(0,Ge.jsx)("h1",{children:"Opal light box"})]}),(0,Ge.jsx)("span",{className:"specimen",children:"Original scan \xB7 01"})]}),(0,Ge.jsxs)("div",{className:"workspace",children:[(0,Ge.jsxs)("section",{className:"stage "+o,"aria-label":"Opal viewing chamber",children:[(0,Ge.jsx)(Yw,{ref:t,modelUrl:"/models/Matrixtwin_opal.glb",opticalMaps:pP,lighting:{...e,intensity:i?e.intensity:0},lampMode:a,showInstruments:!1,proceduralFallback:!1,fitWidth:!0,onReady:f,onLoadError:u}),c!=="ready"&&(0,Ge.jsx)("div",{className:"status",role:"status",children:c==="loading"?(0,Ge.jsxs)(Ge.Fragment,{children:[(0,Ge.jsx)("span",{className:"spinner"}),"Loading your opal\u2026"]}):(0,Ge.jsxs)(Ge.Fragment,{children:["The scan couldn\u2019t be displayed.",(0,Ge.jsx)("button",{onClick:()=>location.reload(),children:"Try again"})]})}),(0,Ge.jsxs)("div",{className:"stage-top",children:[(0,Ge.jsx)("span",{children:"Viewing chamber"}),(0,Ge.jsx)("button",{onClick:()=>t.current?.resetView(),"aria-label":"Reset camera view",children:"Reset view"})]}),(0,Ge.jsxs)("div",{className:"stage-bottom",children:[(0,Ge.jsx)("span",{children:"Drag to rotate \xB7 Pinch to zoom"}),(0,Ge.jsx)("span",{children:i&&e.intensity>0?"Lamp on":"Lamp off"})]})]}),(0,Ge.jsxs)("aside",{children:[(0,Ge.jsxs)("div",{className:"panel-heading",children:[(0,Ge.jsx)("h2",{children:"Light"}),(0,Ge.jsxs)("label",{className:"toggle",children:[(0,Ge.jsx)("input",{type:"checkbox",checked:i,onChange:m=>s(m.target.checked)}),(0,Ge.jsx)("span",{children:"On"})]})]}),b("azimuth","Around the stone",-180,180,"\xB0"),b("elevation","Lamp height",-20,90,"\xB0"),b("intensity","Brightness",0,150,"%"),b("ambient","Fill light",0,50,"%"),(0,Ge.jsxs)("label",{className:"select-label",children:["Lamp position",(0,Ge.jsxs)("select",{value:a,onChange:m=>r(m.target.value),children:[(0,Ge.jsx)("option",{value:"camera",children:"Moves with the view"}),(0,Ge.jsx)("option",{value:"fixed",children:"Stays in the light box"})]})]}),(0,Ge.jsx)("div",{className:"divider"}),(0,Ge.jsx)("h2",{children:"Background"}),(0,Ge.jsx)("div",{className:"swatches",role:"group","aria-label":"Background colour",children:[["dark","Dark"],["gray","Grey"],["white","White"]].map(([m,p])=>(0,Ge.jsx)("button",{className:"swatch "+m+(o===m?" selected":""),"aria-pressed":o===m,onClick:()=>l(m),children:p},m))}),(0,Ge.jsx)("button",{className:"reset",onClick:d,children:"Reset light box"}),(0,Ge.jsxs)("p",{className:"note",children:["One lamp. Your original stone.",(0,Ge.jsx)("br",{}),"Move the light to explore the green and blue flash."]}),(0,Ge.jsx)("p",{className:"small-note",children:"Visual lighting study"})]})]})]})}(0,Kw.createRoot)(document.getElementById("root")).render((0,Ge.jsx)(mP,{}));
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
