"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[908],{9767:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(7462),o=t(7294),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]},name:"close",theme:"outlined"},a=t(1647),l=o.forwardRef(function(e,n){return o.createElement(a.Z,(0,r.Z)({},e,{ref:n,icon:i}))})},330:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(7462),o=t(7294),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"},a=t(1647),l=o.forwardRef(function(e,n){return o.createElement(a.Z,(0,r.Z)({},e,{ref:n,icon:i}))})},8308:function(e,n,t){t.d(n,{oN:function(){return v}});var r=t(8725),o=t(8978);let i=new r.E4("antSlideUpIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1}}),a=new r.E4("antSlideUpOut",{"0%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0}}),l=new r.E4("antSlideDownIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1}}),u=new r.E4("antSlideDownOut",{"0%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0}}),c=new r.E4("antSlideLeftIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1}}),s=new r.E4("antSlideLeftOut",{"0%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0}}),f=new r.E4("antSlideRightIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1}}),d=new r.E4("antSlideRightOut",{"0%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0}}),m={"slide-up":{inKeyframes:i,outKeyframes:a},"slide-down":{inKeyframes:l,outKeyframes:u},"slide-left":{inKeyframes:c,outKeyframes:s},"slide-right":{inKeyframes:f,outKeyframes:d}},v=(e,n)=>{let{antCls:t}=e,r="".concat(t,"-").concat(n),{inKeyframes:i,outKeyframes:a}=m[n];return[(0,o.R)(r,i,a,e.motionDurationMid),{["\n      ".concat(r,"-enter,\n      ").concat(r,"-appear\n    ")]:{transform:"scale(0)",transformOrigin:"0% 0%",opacity:0,animationTimingFunction:e.motionEaseOutQuint,"&-prepare":{transform:"scale(1)"}},["".concat(r,"-leave")]:{animationTimingFunction:e.motionEaseInQuint}}]}},12:function(e,n,t){t.d(n,{iz:function(){return e2},ck:function(){return ex},BW:function(){return e1},sN:function(){return ex},GP:function(){return e1},Wd:function(){return eH},ZP:function(){return e5},Xl:function(){return W}});var r=t(7462),o=t(4942),i=t(1413),a=t(4902),l=t(7685),u=t(91),c=t(4184),s=t.n(c),f=t(7294),d=t(9220),m=t(8749),v=["prefixCls","invalidate","item","renderItem","responsive","responsiveDisabled","registerSize","itemKey","className","style","children","display","order","component"],p=void 0,y=f.forwardRef(function(e,n){var t,o=e.prefixCls,a=e.invalidate,l=e.item,c=e.renderItem,m=e.responsive,y=e.responsiveDisabled,h=e.registerSize,b=e.itemKey,Z=e.className,g=e.style,E=e.children,C=e.display,w=e.order,I=e.component,M=void 0===I?"div":I,N=(0,u.Z)(e,v),S=m&&!C;f.useEffect(function(){return function(){h(b,null)}},[]);var R=c&&l!==p?c(l):E;a||(t={opacity:S?0:1,height:S?0:p,overflowY:S?"hidden":p,order:m?w:p,pointerEvents:S?"none":p,position:S?"absolute":p});var x={};S&&(x["aria-hidden"]=!0);var K=f.createElement(M,(0,r.Z)({className:s()(!a&&o,Z),style:(0,i.Z)((0,i.Z)({},t),g)},x,N,{ref:n}),R);return m&&(K=f.createElement(d.Z,{onResize:function(e){h(b,e.offsetWidth)},disabled:y},K)),K});y.displayName="Item";var h=t(4661),b=t(3935),Z=t(4206);function g(e,n){var t=f.useState(n),r=(0,l.Z)(t,2),o=r[0],i=r[1];return[o,(0,h.Z)(function(n){e(function(){i(n)})})]}var E=f.createContext(null),C=["component"],w=["className"],I=["className"],M=f.forwardRef(function(e,n){var t=f.useContext(E);if(!t){var o=e.component,i=void 0===o?"div":o,a=(0,u.Z)(e,C);return f.createElement(i,(0,r.Z)({},a,{ref:n}))}var l=t.className,c=(0,u.Z)(t,w),d=e.className,m=(0,u.Z)(e,I);return f.createElement(E.Provider,{value:null},f.createElement(y,(0,r.Z)({ref:n,className:s()(l,d)},c,m)))});M.displayName="RawItem";var N=["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"],S="responsive",R="invalidate";function x(e){return"+ ".concat(e.length," ...")}var K=f.forwardRef(function(e,n){var t,o,a=e.prefixCls,c=void 0===a?"rc-overflow":a,v=e.data,p=void 0===v?[]:v,h=e.renderItem,C=e.renderRawItem,w=e.itemKey,I=e.itemWidth,M=void 0===I?10:I,K=e.ssr,k=e.style,P=e.className,O=e.maxCount,A=e.renderRest,D=e.renderRawRest,T=e.suffix,L=e.component,_=void 0===L?"div":L,z=e.itemComponent,V=e.onVisibleChange,F=(0,u.Z)(e,N),X="full"===K,Y=(t=f.useRef(null),function(e){t.current||(t.current=[],function(e){if("undefined"==typeof MessageChannel)(0,Z.Z)(e);else{var n=new MessageChannel;n.port1.onmessage=function(){return e()},n.port2.postMessage(void 0)}}(function(){(0,b.unstable_batchedUpdates)(function(){t.current.forEach(function(e){e()}),t.current=null})})),t.current.push(e)}),W=g(Y,null),B=(0,l.Z)(W,2),j=B[0],G=B[1],H=j||0,U=g(Y,new Map),q=(0,l.Z)(U,2),Q=q[0],J=q[1],$=g(Y,0),ee=(0,l.Z)($,2),en=ee[0],et=ee[1],er=g(Y,0),eo=(0,l.Z)(er,2),ei=eo[0],ea=eo[1],el=g(Y,0),eu=(0,l.Z)(el,2),ec=eu[0],es=eu[1],ef=(0,f.useState)(null),ed=(0,l.Z)(ef,2),em=ed[0],ev=ed[1],ep=(0,f.useState)(null),ey=(0,l.Z)(ep,2),eh=ey[0],eb=ey[1],eZ=f.useMemo(function(){return null===eh&&X?Number.MAX_SAFE_INTEGER:eh||0},[eh,j]),eg=(0,f.useState)(!1),eE=(0,l.Z)(eg,2),eC=eE[0],ew=eE[1],eI="".concat(c,"-item"),eM=Math.max(en,ei),eN=O===S,eS=p.length&&eN,eR=O===R,ex=eS||"number"==typeof O&&p.length>O,eK=(0,f.useMemo)(function(){var e=p;return eS?e=null===j&&X?p:p.slice(0,Math.min(p.length,H/M)):"number"==typeof O&&(e=p.slice(0,O)),e},[p,M,j,O,eS]),ek=(0,f.useMemo)(function(){return eS?p.slice(eZ+1):p.slice(eK.length)},[p,eK,eS,eZ]),eP=(0,f.useCallback)(function(e,n){var t;return"function"==typeof w?w(e):null!==(t=w&&(null==e?void 0:e[w]))&&void 0!==t?t:n},[w]),eO=(0,f.useCallback)(h||function(e){return e},[h]);function eA(e,n,t){(eh!==e||void 0!==n&&n!==em)&&(eb(e),t||(ew(e<p.length-1),null==V||V(e)),void 0!==n&&ev(n))}function eD(e,n){J(function(t){var r=new Map(t);return null===n?r.delete(e):r.set(e,n),r})}function eT(e){return Q.get(eP(eK[e],e))}(0,m.Z)(function(){if(H&&"number"==typeof eM&&eK){var e=ec,n=eK.length,t=n-1;if(!n){eA(0,null);return}for(var r=0;r<n;r+=1){var o=eT(r);if(X&&(o=o||0),void 0===o){eA(r-1,void 0,!0);break}if(e+=o,0===t&&e<=H||r===t-1&&e+eT(t)<=H){eA(t,null);break}if(e+eM>H){eA(r-1,e-o-ec+ei);break}}T&&eT(0)+ec>H&&ev(null)}},[H,Q,ei,ec,eP,eK]);var eL=eC&&!!ek.length,e_={};null!==em&&eS&&(e_={position:"absolute",left:em,top:0});var ez={prefixCls:eI,responsive:eS,component:z,invalidate:eR},eV=C?function(e,n){var t=eP(e,n);return f.createElement(E.Provider,{key:t,value:(0,i.Z)((0,i.Z)({},ez),{},{order:n,item:e,itemKey:t,registerSize:eD,display:n<=eZ})},C(e,n))}:function(e,n){var t=eP(e,n);return f.createElement(y,(0,r.Z)({},ez,{order:n,key:t,item:e,renderItem:eO,itemKey:t,registerSize:eD,display:n<=eZ}))},eF={order:eL?eZ:Number.MAX_SAFE_INTEGER,className:"".concat(eI,"-rest"),registerSize:function(e,n){ea(n),et(ei)},display:eL};if(D)D&&(o=f.createElement(E.Provider,{value:(0,i.Z)((0,i.Z)({},ez),eF)},D(ek)));else{var eX=A||x;o=f.createElement(y,(0,r.Z)({},ez,eF),"function"==typeof eX?eX(ek):eX)}var eY=f.createElement(_,(0,r.Z)({className:s()(!eR&&c,P),style:k,ref:n},F),eK.map(eV),ex?o:null,T&&f.createElement(y,(0,r.Z)({},ez,{responsive:eN,responsiveDisabled:!eS,order:eZ,className:"".concat(eI,"-suffix"),registerSize:function(e,n){es(n)},display:!0,style:e_}),T));return eN&&(eY=f.createElement(d.Z,{onResize:function(e,n){G(n.clientWidth)},disabled:!eS},eY)),eY});K.displayName="Overflow",K.Item=M,K.RESPONSIVE=S,K.INVALIDATE=R;var k=t(5468),P=t(9443),O=t(4850),A=f.createContext(null);function D(e,n){return void 0===e?null:"".concat(e,"-").concat(n)}function T(e){return D(f.useContext(A),e)}var L=t(1495),_=["children","locked"],z=f.createContext(null);function V(e){var n=e.children,t=e.locked,r=(0,u.Z)(e,_),o=f.useContext(z),a=(0,L.Z)(function(){var e;return e=(0,i.Z)({},o),Object.keys(r).forEach(function(n){var t=r[n];void 0!==t&&(e[n]=t)}),e},[o,r],function(e,n){return!t&&(e[0]!==n[0]||!(0,O.Z)(e[1],n[1],!0))});return f.createElement(z.Provider,{value:a},n)}var F=f.createContext(null);function X(){return f.useContext(F)}var Y=f.createContext([]);function W(e){var n=f.useContext(Y);return f.useMemo(function(){return void 0!==e?[].concat((0,a.Z)(n),[e]):n},[n,e])}var B=f.createContext(null),j=f.createContext({}),G=t(3554),H=t(8559);function U(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if((0,H.Z)(e)){var t=e.nodeName.toLowerCase(),r=["input","select","textarea","button"].includes(t)||e.isContentEditable||"a"===t&&!!e.getAttribute("href"),o=e.getAttribute("tabindex"),i=Number(o),a=null;return o&&!Number.isNaN(i)?a=i:r&&null===a&&(a=0),r&&e.disabled&&(a=null),null!==a&&(a>=0||n&&a<0)}return!1}var q=G.Z.LEFT,Q=G.Z.RIGHT,J=G.Z.UP,$=G.Z.DOWN,ee=G.Z.ENTER,en=G.Z.ESC,et=G.Z.HOME,er=G.Z.END,eo=[J,$,q,Q];function ei(e,n){return(function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=(0,a.Z)(e.querySelectorAll("*")).filter(function(e){return U(e,n)});return U(e,n)&&t.unshift(e),t})(e,!0).filter(function(e){return n.has(e)})}function ea(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if(!e)return null;var o=ei(e,n),i=o.length,a=o.findIndex(function(e){return t===e});return r<0?-1===a?a=i-1:a-=1:r>0&&(a+=1),o[a=(a+i)%i]}var el="__RC_UTIL_PATH_SPLIT__",eu=function(e){return e.join(el)},ec="rc-menu-more";function es(e){var n=f.useRef(e);n.current=e;var t=f.useCallback(function(){for(var e,t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];return null===(e=n.current)||void 0===e?void 0:e.call.apply(e,[n].concat(r))},[]);return e?t:void 0}var ef=Math.random().toFixed(5).toString().slice(2),ed=0,em=t(5671),ev=t(3144),ep=t(2531),ey=t(3568),eh=t(8489),eb=t(2334);function eZ(e,n,t,r){var o=f.useContext(z),i=o.activeKey,a=o.onActive,l=o.onInactive,u={active:i===e};return n||(u.onMouseEnter=function(n){null==t||t({key:e,domEvent:n}),a(e)},u.onMouseLeave=function(n){null==r||r({key:e,domEvent:n}),l(e)}),u}function eg(e){var n=f.useContext(z),t=n.mode,r=n.rtl,o=n.inlineIndent;return"inline"!==t?null:r?{paddingRight:e*o}:{paddingLeft:e*o}}function eE(e){var n=e.icon,t=e.props,r=e.children;return("function"==typeof n?f.createElement(n,(0,i.Z)({},t)):n)||r||null}var eC=["item"];function ew(e){var n=e.item,t=(0,u.Z)(e,eC);return Object.defineProperty(t,"item",{get:function(){return(0,P.ZP)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),n}}),t}var eI=["title","attribute","elementRef"],eM=["style","className","eventKey","warnKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"],eN=["active"],eS=function(e){(0,ep.Z)(t,e);var n=(0,ey.Z)(t);function t(){return(0,em.Z)(this,t),n.apply(this,arguments)}return(0,ev.Z)(t,[{key:"render",value:function(){var e=this.props,n=e.title,t=e.attribute,o=e.elementRef,i=(0,u.Z)(e,eI),a=(0,eh.Z)(i,["eventKey","popupClassName","popupOffset","onTitleClick"]);return(0,P.ZP)(!t,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),f.createElement(K.Item,(0,r.Z)({},t,{title:"string"==typeof n?n:void 0},a,{ref:o}))}}]),t}(f.Component),eR=f.forwardRef(function(e,n){var t,l=e.style,c=e.className,d=e.eventKey,m=(e.warnKey,e.disabled),v=e.itemIcon,p=e.children,y=e.role,h=e.onMouseEnter,b=e.onMouseLeave,Z=e.onClick,g=e.onKeyDown,E=e.onFocus,C=(0,u.Z)(e,eM),w=T(d),I=f.useContext(z),M=I.prefixCls,N=I.onItemClick,S=I.disabled,R=I.overflowDisabled,x=I.itemIcon,K=I.selectedKeys,k=I.onActive,P=f.useContext(j)._internalRenderMenuItem,O="".concat(M,"-item"),A=f.useRef(),D=f.useRef(),L=S||m,_=(0,eb.x1)(n,D),V=W(d),F=function(e){return{key:d,keyPath:(0,a.Z)(V).reverse(),item:A.current,domEvent:e}},X=eZ(d,L,h,b),Y=X.active,B=(0,u.Z)(X,eN),H=K.includes(d),U=eg(V.length),q={};"option"===e.role&&(q["aria-selected"]=H);var Q=f.createElement(eS,(0,r.Z)({ref:A,elementRef:_,role:null===y?"none":y||"menuitem",tabIndex:m?null:-1,"data-menu-id":R&&w?null:w},C,B,q,{component:"li","aria-disabled":m,style:(0,i.Z)((0,i.Z)({},U),l),className:s()(O,(t={},(0,o.Z)(t,"".concat(O,"-active"),Y),(0,o.Z)(t,"".concat(O,"-selected"),H),(0,o.Z)(t,"".concat(O,"-disabled"),L),t),c),onClick:function(e){if(!L){var n=F(e);null==Z||Z(ew(n)),N(n)}},onKeyDown:function(e){if(null==g||g(e),e.which===G.Z.ENTER){var n=F(e);null==Z||Z(ew(n)),N(n)}},onFocus:function(e){k(d),null==E||E(e)}}),p,f.createElement(eE,{props:(0,i.Z)((0,i.Z)({},e),{},{isSelected:H}),icon:v||x}));return P&&(Q=P(Q,e,{selected:H})),Q}),ex=f.forwardRef(function(e,n){var t=e.eventKey,o=X(),i=W(t);return(f.useEffect(function(){if(o)return o.registerPath(t,i),function(){o.unregisterPath(t,i)}},[i]),o)?null:f.createElement(eR,(0,r.Z)({},e,{ref:n}))}),eK=["className","children"],ek=f.forwardRef(function(e,n){var t=e.className,o=e.children,i=(0,u.Z)(e,eK),a=f.useContext(z),l=a.prefixCls,c=a.mode,d=a.rtl;return f.createElement("ul",(0,r.Z)({className:s()(l,d&&"".concat(l,"-rtl"),"".concat(l,"-sub"),"".concat(l,"-").concat("inline"===c?"inline":"vertical"),t),role:"menu"},i,{"data-menu-list":!0,ref:n}),o)});ek.displayName="SubMenuList";var eP=t(1002),eO=t(7438),eA=["label","children","key","type"];function eD(e,n){return(0,eO.Z)(e).map(function(e,t){if(f.isValidElement(e)){var r,o,i=e.key,l=null!==(r=null===(o=e.props)||void 0===o?void 0:o.eventKey)&&void 0!==r?r:i;null==l&&(l="tmp_key-".concat([].concat((0,a.Z)(n),[t]).join("-")));var u={key:l,eventKey:l};return f.cloneElement(e,u)}return e})}var eT=t(9242),eL={adjustX:1,adjustY:1},e_={topLeft:{points:["bl","tl"],overflow:eL},topRight:{points:["br","tr"],overflow:eL},bottomLeft:{points:["tl","bl"],overflow:eL},bottomRight:{points:["tr","br"],overflow:eL},leftTop:{points:["tr","tl"],overflow:eL},leftBottom:{points:["br","bl"],overflow:eL},rightTop:{points:["tl","tr"],overflow:eL},rightBottom:{points:["bl","br"],overflow:eL}},ez={topLeft:{points:["bl","tl"],overflow:eL},topRight:{points:["br","tr"],overflow:eL},bottomLeft:{points:["tl","bl"],overflow:eL},bottomRight:{points:["tr","br"],overflow:eL},rightTop:{points:["tr","tl"],overflow:eL},rightBottom:{points:["br","bl"],overflow:eL},leftTop:{points:["tl","tr"],overflow:eL},leftBottom:{points:["bl","br"],overflow:eL}};function eV(e,n,t){return n||(t?t[e]||t.other:void 0)}var eF={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function eX(e){var n=e.prefixCls,t=e.visible,r=e.children,a=e.popup,u=e.popupClassName,c=e.popupOffset,d=e.disabled,m=e.mode,v=e.onVisibleChange,p=f.useContext(z),y=p.getPopupContainer,h=p.rtl,b=p.subMenuOpenDelay,g=p.subMenuCloseDelay,E=p.builtinPlacements,C=p.triggerSubMenuAction,w=p.forceSubMenuRender,I=p.rootClassName,M=p.motion,N=p.defaultMotions,S=f.useState(!1),R=(0,l.Z)(S,2),x=R[0],K=R[1],k=h?(0,i.Z)((0,i.Z)({},ez),E):(0,i.Z)((0,i.Z)({},e_),E),P=eF[m],O=eV(m,M,N),A=f.useRef(O);"inline"!==m&&(A.current=O);var D=(0,i.Z)((0,i.Z)({},A.current),{},{leavedClassName:"".concat(n,"-hidden"),removeOnLeave:!1,motionAppear:!0}),T=f.useRef();return f.useEffect(function(){return T.current=(0,Z.Z)(function(){K(t)}),function(){Z.Z.cancel(T.current)}},[t]),f.createElement(eT.Z,{prefixCls:n,popupClassName:s()("".concat(n,"-popup"),(0,o.Z)({},"".concat(n,"-rtl"),h),u,I),stretch:"horizontal"===m?"minWidth":null,getPopupContainer:y,builtinPlacements:k,popupPlacement:P,popupVisible:x,popup:a,popupAlign:c&&{offset:c},action:d?[]:[C],mouseEnterDelay:b,mouseLeaveDelay:g,onPopupVisibleChange:v,forceRender:w,popupMotion:D},r)}var eY=t(2225);function eW(e){var n=e.id,t=e.open,o=e.keyPath,a=e.children,u="inline",c=f.useContext(z),s=c.prefixCls,d=c.forceSubMenuRender,m=c.motion,v=c.defaultMotions,p=c.mode,y=f.useRef(!1);y.current=p===u;var h=f.useState(!y.current),b=(0,l.Z)(h,2),Z=b[0],g=b[1],E=!!y.current&&t;f.useEffect(function(){y.current&&g(!1)},[p]);var C=(0,i.Z)({},eV(u,m,v));o.length>1&&(C.motionAppear=!1);var w=C.onVisibleChanged;return(C.onVisibleChanged=function(e){return y.current||e||g(!0),null==w?void 0:w(e)},Z)?null:f.createElement(V,{mode:u,locked:!y.current},f.createElement(eY.ZP,(0,r.Z)({visible:E},C,{forceRender:d,removeOnLeave:!1,leavedClassName:"".concat(s,"-hidden")}),function(e){var t=e.className,r=e.style;return f.createElement(ek,{id:n,className:t,style:r},a)}))}var eB=["style","className","title","eventKey","warnKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"],ej=["active"],eG=function(e){var n,t=e.style,a=e.className,c=e.title,d=e.eventKey,m=(e.warnKey,e.disabled),v=e.internalPopupClose,p=e.children,y=e.itemIcon,h=e.expandIcon,b=e.popupClassName,Z=e.popupOffset,g=e.onClick,E=e.onMouseEnter,C=e.onMouseLeave,w=e.onTitleClick,I=e.onTitleMouseEnter,M=e.onTitleMouseLeave,N=(0,u.Z)(e,eB),S=T(d),R=f.useContext(z),x=R.prefixCls,k=R.mode,P=R.openKeys,O=R.disabled,A=R.overflowDisabled,D=R.activeKey,L=R.selectedKeys,_=R.itemIcon,F=R.expandIcon,X=R.onItemClick,Y=R.onOpenChange,G=R.onActive,H=f.useContext(j)._internalRenderSubMenuItem,U=f.useContext(B).isSubPathKey,q=W(),Q="".concat(x,"-submenu"),J=O||m,$=f.useRef(),ee=f.useRef(),en=h||F,et=P.includes(d),er=!A&&et,eo=U(L,d),ei=eZ(d,J,I,M),ea=ei.active,el=(0,u.Z)(ei,ej),eu=f.useState(!1),ec=(0,l.Z)(eu,2),ef=ec[0],ed=ec[1],em=function(e){J||ed(e)},ev=f.useMemo(function(){return ea||"inline"!==k&&(ef||U([D],d))},[k,ea,D,ef,d,U]),ep=eg(q.length),ey=es(function(e){null==g||g(ew(e)),X(e)}),eh=S&&"".concat(S,"-popup"),eb=f.createElement("div",(0,r.Z)({role:"menuitem",style:ep,className:"".concat(Q,"-title"),tabIndex:J?null:-1,ref:$,title:"string"==typeof c?c:null,"data-menu-id":A&&S?null:S,"aria-expanded":er,"aria-haspopup":!0,"aria-controls":eh,"aria-disabled":J,onClick:function(e){J||(null==w||w({key:d,domEvent:e}),"inline"===k&&Y(d,!et))},onFocus:function(){G(d)}},el),c,f.createElement(eE,{icon:"horizontal"!==k?en:null,props:(0,i.Z)((0,i.Z)({},e),{},{isOpen:er,isSubMenu:!0})},f.createElement("i",{className:"".concat(Q,"-arrow")}))),eC=f.useRef(k);if("inline"!==k&&q.length>1?eC.current="vertical":eC.current=k,!A){var eI=eC.current;eb=f.createElement(eX,{mode:eI,prefixCls:Q,visible:!v&&er&&"inline"!==k,popupClassName:b,popupOffset:Z,popup:f.createElement(V,{mode:"horizontal"===eI?"vertical":eI},f.createElement(ek,{id:eh,ref:ee},p)),disabled:J,onVisibleChange:function(e){"inline"!==k&&Y(d,e)}},eb)}var eM=f.createElement(K.Item,(0,r.Z)({role:"none"},N,{component:"li",style:t,className:s()(Q,"".concat(Q,"-").concat(k),a,(n={},(0,o.Z)(n,"".concat(Q,"-open"),er),(0,o.Z)(n,"".concat(Q,"-active"),ev),(0,o.Z)(n,"".concat(Q,"-selected"),eo),(0,o.Z)(n,"".concat(Q,"-disabled"),J),n)),onMouseEnter:function(e){em(!0),null==E||E({key:d,domEvent:e})},onMouseLeave:function(e){em(!1),null==C||C({key:d,domEvent:e})}}),eb,!A&&f.createElement(eW,{id:eh,open:er,keyPath:q},p));return H&&(eM=H(eM,e,{selected:eo,active:ev,open:er,disabled:J})),f.createElement(V,{onItemClick:ey,mode:"horizontal"===k?"vertical":k,itemIcon:y||_,expandIcon:en},eM)};function eH(e){var n,t=e.eventKey,r=e.children,o=W(t),i=eD(r,o),a=X();return f.useEffect(function(){if(a)return a.registerPath(t,o),function(){a.unregisterPath(t,o)}},[o]),n=a?i:f.createElement(eG,e,i),f.createElement(Y.Provider,{value:o},n)}var eU=["prefixCls","rootClassName","style","className","tabIndex","items","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","overflowedIndicatorPopupClassName","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName","_internalRenderMenuItem","_internalRenderSubMenuItem"],eq=[],eQ=f.forwardRef(function(e,n){var t,c,d,m,v,p,y,h,g,E,C,w,I,M,N,S,R,x,P,T,L,_,z,X,Y,W,G,H=e.prefixCls,U=void 0===H?"rc-menu":H,em=e.rootClassName,ev=e.style,ep=e.className,ey=e.tabIndex,eh=e.items,eb=e.children,eZ=e.direction,eg=e.id,eE=e.mode,eC=void 0===eE?"vertical":eE,eI=e.inlineCollapsed,eM=e.disabled,eN=e.disabledOverflow,eS=e.subMenuOpenDelay,eR=e.subMenuCloseDelay,eK=e.forceSubMenuRender,ek=e.defaultOpenKeys,eO=e.openKeys,eT=e.activeKey,eL=e.defaultActiveFirst,e_=e.selectable,ez=void 0===e_||e_,eV=e.multiple,eF=void 0!==eV&&eV,eX=e.defaultSelectedKeys,eY=e.selectedKeys,eW=e.onSelect,eB=e.onDeselect,ej=e.inlineIndent,eG=e.motion,eQ=e.defaultMotions,eJ=e.triggerSubMenuAction,e$=e.builtinPlacements,e0=e.itemIcon,e5=e.expandIcon,e4=e.overflowedIndicator,e6=void 0===e4?"...":e4,e8=e.overflowedIndicatorPopupClassName,e9=e.getPopupContainer,e7=e.onClick,e3=e.onOpenChange,ne=e.onKeyDown,nn=(e.openAnimation,e.openTransitionName,e._internalRenderMenuItem),nt=e._internalRenderSubMenuItem,nr=(0,u.Z)(e,eU),no=f.useMemo(function(){var e;return e=eb,eh&&(e=function e(n){return(n||[]).map(function(n,t){if(n&&"object"===(0,eP.Z)(n)){var o=n.label,i=n.children,a=n.key,l=n.type,c=(0,u.Z)(n,eA),s=null!=a?a:"tmp-".concat(t);return i||"group"===l?"group"===l?f.createElement(e1,(0,r.Z)({key:s},c,{title:o}),e(i)):f.createElement(eH,(0,r.Z)({key:s},c,{title:o}),e(i)):"divider"===l?f.createElement(e2,(0,r.Z)({key:s},c)):f.createElement(ex,(0,r.Z)({key:s},c),o)}return null}).filter(function(e){return e})}(eh)),eD(e,eq)},[eb,eh]),ni=f.useState(!1),na=(0,l.Z)(ni,2),nl=na[0],nu=na[1],nc=f.useRef(),ns=(t=(0,k.Z)(eg,{value:eg}),d=(c=(0,l.Z)(t,2))[0],m=c[1],f.useEffect(function(){ed+=1;var e="".concat(ef,"-").concat(ed);m("rc-menu-uuid-".concat(e))},[]),d),nf="rtl"===eZ,nd=(0,k.Z)(ek,{value:eO,postState:function(e){return e||eq}}),nm=(0,l.Z)(nd,2),nv=nm[0],np=nm[1],ny=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];function t(){np(e),null==e3||e3(e)}n?(0,b.flushSync)(t):t()},nh=f.useState(nv),nb=(0,l.Z)(nh,2),nZ=nb[0],ng=nb[1],nE=f.useRef(!1),nC=f.useMemo(function(){return("inline"===eC||"vertical"===eC)&&eI?["vertical",eI]:[eC,!1]},[eC,eI]),nw=(0,l.Z)(nC,2),nI=nw[0],nM=nw[1],nN="inline"===nI,nS=f.useState(nI),nR=(0,l.Z)(nS,2),nx=nR[0],nK=nR[1],nk=f.useState(nM),nP=(0,l.Z)(nk,2),nO=nP[0],nA=nP[1];f.useEffect(function(){nK(nI),nA(nM),nE.current&&(nN?np(nZ):ny(eq))},[nI,nM]);var nD=f.useState(0),nT=(0,l.Z)(nD,2),nL=nT[0],n_=nT[1],nz=nL>=no.length-1||"horizontal"!==nx||eN;f.useEffect(function(){nN&&ng(nv)},[nv]),f.useEffect(function(){return nE.current=!0,function(){nE.current=!1}},[]);var nV=(v=f.useState({}),p=(0,l.Z)(v,2)[1],y=(0,f.useRef)(new Map),h=(0,f.useRef)(new Map),g=f.useState([]),C=(E=(0,l.Z)(g,2))[0],w=E[1],I=(0,f.useRef)(0),M=(0,f.useRef)(!1),N=function(){M.current||p({})},S=(0,f.useCallback)(function(e,n){var t=eu(n);h.current.set(t,e),y.current.set(e,t),I.current+=1;var r=I.current;Promise.resolve().then(function(){r===I.current&&N()})},[]),R=(0,f.useCallback)(function(e,n){var t=eu(n);h.current.delete(t),y.current.delete(e)},[]),x=(0,f.useCallback)(function(e){w(e)},[]),P=(0,f.useCallback)(function(e,n){var t=(y.current.get(e)||"").split(el);return n&&C.includes(t[0])&&t.unshift(ec),t},[C]),T=(0,f.useCallback)(function(e,n){return e.some(function(e){return P(e,!0).includes(n)})},[P]),L=(0,f.useCallback)(function(e){var n="".concat(y.current.get(e)).concat(el),t=new Set;return(0,a.Z)(h.current.keys()).forEach(function(e){e.startsWith(n)&&t.add(h.current.get(e))}),t},[]),f.useEffect(function(){return function(){M.current=!0}},[]),{registerPath:S,unregisterPath:R,refreshOverflowKeys:x,isSubPathKey:T,getKeyPath:P,getKeys:function(){var e=(0,a.Z)(y.current.keys());return C.length&&e.push(ec),e},getSubPathKeys:L}),nF=nV.registerPath,nX=nV.unregisterPath,nY=nV.refreshOverflowKeys,nW=nV.isSubPathKey,nB=nV.getKeyPath,nj=nV.getKeys,nG=nV.getSubPathKeys,nH=f.useMemo(function(){return{registerPath:nF,unregisterPath:nX}},[nF,nX]),nU=f.useMemo(function(){return{isSubPathKey:nW}},[nW]);f.useEffect(function(){nY(nz?eq:no.slice(nL+1).map(function(e){return e.key}))},[nL,nz]);var nq=(0,k.Z)(eT||eL&&(null===(W=no[0])||void 0===W?void 0:W.key),{value:eT}),nQ=(0,l.Z)(nq,2),nJ=nQ[0],n$=nQ[1],n0=es(function(e){n$(e)}),n1=es(function(){n$(void 0)});(0,f.useImperativeHandle)(n,function(){return{list:nc.current,focus:function(e){var n,t,r,o,i=null!=nJ?nJ:null===(n=no.find(function(e){return!e.props.disabled}))||void 0===n?void 0:n.key;i&&(null===(t=nc.current)||void 0===t||null===(r=t.querySelector("li[data-menu-id='".concat(D(ns,i),"']")))||void 0===r||null===(o=r.focus)||void 0===o||o.call(r,e))}}});var n2=(0,k.Z)(eX||[],{value:eY,postState:function(e){return Array.isArray(e)?e:null==e?eq:[e]}}),n5=(0,l.Z)(n2,2),n4=n5[0],n6=n5[1],n8=function(e){if(ez){var n,t=e.key,r=n4.includes(t);n6(n=eF?r?n4.filter(function(e){return e!==t}):[].concat((0,a.Z)(n4),[t]):[t]);var o=(0,i.Z)((0,i.Z)({},e),{},{selectedKeys:n});r?null==eB||eB(o):null==eW||eW(o)}!eF&&nv.length&&"inline"!==nx&&ny(eq)},n9=es(function(e){null==e7||e7(ew(e)),n8(e)}),n7=es(function(e,n){var t=nv.filter(function(n){return n!==e});if(n)t.push(e);else if("inline"!==nx){var r=nG(e);t=t.filter(function(e){return!r.has(e)})}(0,O.Z)(nv,t,!0)||ny(t,!0)}),n3=(_=function(e,n){var t=null!=n?n:!nv.includes(e);n7(e,t)},z=f.useRef(),(X=f.useRef()).current=nJ,Y=function(){Z.Z.cancel(z.current)},f.useEffect(function(){return function(){Y()}},[]),function(e){var n=e.which;if([].concat(eo,[ee,en,et,er]).includes(n)){var t=function(){return u=new Set,c=new Map,s=new Map,nj().forEach(function(e){var n=document.querySelector("[data-menu-id='".concat(D(ns,e),"']"));n&&(u.add(n),s.set(n,e),c.set(e,n))}),u};t();var r=function(e,n){for(var t=e||document.activeElement;t;){if(n.has(t))return t;t=t.parentElement}return null}(c.get(nJ),u),i=s.get(r),a=function(e,n,t,r){var i,a,l,u,c="prev",s="next",f="children",d="parent";if("inline"===e&&r===ee)return{inlineTrigger:!0};var m=(i={},(0,o.Z)(i,J,c),(0,o.Z)(i,$,s),i),v=(a={},(0,o.Z)(a,q,t?s:c),(0,o.Z)(a,Q,t?c:s),(0,o.Z)(a,$,f),(0,o.Z)(a,ee,f),a),p=(l={},(0,o.Z)(l,J,c),(0,o.Z)(l,$,s),(0,o.Z)(l,ee,f),(0,o.Z)(l,en,d),(0,o.Z)(l,q,t?f:d),(0,o.Z)(l,Q,t?d:f),l);switch(null===(u=({inline:m,horizontal:v,vertical:p,inlineSub:m,horizontalSub:p,verticalSub:p})["".concat(e).concat(n?"":"Sub")])||void 0===u?void 0:u[r]){case c:return{offset:-1,sibling:!0};case s:return{offset:1,sibling:!0};case d:return{offset:-1,sibling:!1};case f:return{offset:1,sibling:!1};default:return null}}(nx,1===nB(i,!0).length,nf,n);if(!a&&n!==et&&n!==er)return;(eo.includes(n)||[et,er].includes(n))&&e.preventDefault();var l=function(e){if(e){var n=e,t=e.querySelector("a");null!=t&&t.getAttribute("href")&&(n=t);var r=s.get(e);n$(r),Y(),z.current=(0,Z.Z)(function(){X.current===r&&n.focus()})}};if([et,er].includes(n)||a.sibling||!r){var u,c,s,f,d=ei(f=r&&"inline"!==nx?function(e){for(var n=e;n;){if(n.getAttribute("data-menu-list"))return n;n=n.parentElement}return null}(r):nc.current,u);l(n===et?d[0]:n===er?d[d.length-1]:ea(f,u,r,a.offset))}else if(a.inlineTrigger)_(i);else if(a.offset>0)_(i,!0),Y(),z.current=(0,Z.Z)(function(){t();var e=r.getAttribute("aria-controls");l(ea(document.getElementById(e),u))},5);else if(a.offset<0){var m=nB(i,!0),v=m[m.length-2],p=c.get(v);_(v,!1),l(p)}}null==ne||ne(e)});f.useEffect(function(){nu(!0)},[]);var te=f.useMemo(function(){return{_internalRenderMenuItem:nn,_internalRenderSubMenuItem:nt}},[nn,nt]),tn="horizontal"!==nx||eN?no:no.map(function(e,n){return f.createElement(V,{key:e.key,overflowDisabled:n>nL},e)}),tt=f.createElement(K,(0,r.Z)({id:eg,ref:nc,prefixCls:"".concat(U,"-overflow"),component:"ul",itemComponent:ex,className:s()(U,"".concat(U,"-root"),"".concat(U,"-").concat(nx),ep,(G={},(0,o.Z)(G,"".concat(U,"-inline-collapsed"),nO),(0,o.Z)(G,"".concat(U,"-rtl"),nf),G),em),dir:eZ,style:ev,role:"menu",tabIndex:void 0===ey?0:ey,data:tn,renderRawItem:function(e){return e},renderRawRest:function(e){var n=e.length,t=n?no.slice(-n):null;return f.createElement(eH,{eventKey:ec,title:e6,disabled:nz,internalPopupClose:0===n,popupClassName:e8},t)},maxCount:"horizontal"!==nx||eN?K.INVALIDATE:K.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(e){n_(e)},onKeyDown:n3},nr));return f.createElement(j.Provider,{value:te},f.createElement(A.Provider,{value:ns},f.createElement(V,{prefixCls:U,rootClassName:em,mode:nx,openKeys:nv,rtl:nf,disabled:eM,motion:nl?eG:null,defaultMotions:nl?eQ:null,activeKey:nJ,onActive:n0,onInactive:n1,selectedKeys:n4,inlineIndent:void 0===ej?24:ej,subMenuOpenDelay:void 0===eS?.1:eS,subMenuCloseDelay:void 0===eR?.1:eR,forceSubMenuRender:eK,builtinPlacements:e$,triggerSubMenuAction:void 0===eJ?"hover":eJ,getPopupContainer:e9,itemIcon:e0,expandIcon:e5,onItemClick:n9,onOpenChange:n7},f.createElement(B.Provider,{value:nU},tt),f.createElement("div",{style:{display:"none"},"aria-hidden":!0},f.createElement(F.Provider,{value:nH},no)))))}),eJ=["className","title","eventKey","children"],e$=["children"],e0=function(e){var n=e.className,t=e.title,o=(e.eventKey,e.children),i=(0,u.Z)(e,eJ),a=f.useContext(z).prefixCls,l="".concat(a,"-item-group");return f.createElement("li",(0,r.Z)({role:"presentation"},i,{onClick:function(e){return e.stopPropagation()},className:s()(l,n)}),f.createElement("div",{role:"presentation",className:"".concat(l,"-title"),title:"string"==typeof t?t:void 0},t),f.createElement("ul",{role:"group",className:"".concat(l,"-list")},o))};function e1(e){var n=e.children,t=(0,u.Z)(e,e$),r=eD(n,W(t.eventKey));return X()?r:f.createElement(e0,(0,eh.Z)(t,["warnKey"]),r)}function e2(e){var n=e.className,t=e.style,r=f.useContext(z).prefixCls;return X()?null:f.createElement("li",{className:s()("".concat(r,"-item-divider"),n),style:t})}eQ.Item=ex,eQ.SubMenu=eH,eQ.ItemGroup=e1,eQ.Divider=e2;var e5=eQ}}]);