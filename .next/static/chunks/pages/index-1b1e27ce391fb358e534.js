_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"BO/t":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n,r,o,i){var a=r||"<<anonymous>>",c=i||n;if(null==t[n])return new Error("The "+o+" `"+c+"` is required to make `"+a+"` accessible for users of assistive technologies such as screen readers.");for(var s=arguments.length,l=Array(s>5?s-5:0),u=5;u<s;u++)l[u-5]=arguments[u];return e.apply(void 0,[t,n,r,o,i].concat(l))}},e.exports=t.default},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Ut}));var r=n("nKUr"),o=n("g4pe"),i=n.n(o),a=n("Byzb"),c=(n("YFqc"),n("TKxs"),n("RAs/")),s=n("hVfy"),l=n("TSYQ"),u=n.n(l),f=n("q1tI"),p=n.n(f),d=(n("BO/t"),n("vUet")),m=p.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.placement,o=e.className,i=e.style,a=e.children,l=e.arrowProps,f=(e.popper,e.show,Object(s.a)(e,["bsPrefix","placement","className","style","children","arrowProps","popper","show"]));n=Object(d.a)(n,"tooltip");var m=((null==r?void 0:r.split("-"))||[])[0];return p.a.createElement("div",Object(c.a)({ref:t,style:i,role:"tooltip","x-placement":m,className:u()(o,n,"bs-tooltip-"+m)},f),p.a.createElement("div",Object(c.a)({className:"arrow"},l)),p.a.createElement("div",{className:n+"-inner"},a))}));m.defaultProps={placement:"right"},m.displayName="Tooltip";var h=m;function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}function g(){var e=Object(f.useRef)(!0),t=Object(f.useRef)((function(){return e.current}));return Object(f.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}function y(e){var t=function(e){var t=Object(f.useRef)(e);return t.current=e,t}(e);Object(f.useEffect)((function(){return function(){return t.current()}}),[])}var O=Math.pow(2,31)-1;function j(e,t,n){var r=n-Date.now();e.current=r<=O?setTimeout(t,r):setTimeout((function(){return j(e,t,n)}),O)}function w(){var e=g(),t=Object(f.useRef)();return y((function(){return clearTimeout(t.current)})),Object(f.useMemo)((function(){var n=function(){return clearTimeout(t.current)};return{set:function(r,o){void 0===o&&(o=0),e()&&(n(),o<=O?t.current=setTimeout(r,o):j(t,r,Date.now()+o))},clear:n}}),[])}var x=n("i8i4"),E=n.n(x);function N(e){return e&&"setState"in e?E.a.findDOMNode(e):null!=e?e:null}var C=n("2W6z"),k=n.n(C),R=n("y8DL");function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function L(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var D=n("17x9"),P=n.n(D);function M(){return Object(f.useState)(null)}var T=n("lcWJ"),S="top",U="bottom",B="right",_="left",q="auto",H=[S,U,B,_],W="start",I="end",F="viewport",V="popper",K=H.reduce((function(e,t){return e.concat([t+"-"+W,t+"-"+I])}),[]),z=[].concat(H,[q]).reduce((function(e,t){return e.concat([t,t+"-"+W,t+"-"+I])}),[]),J=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];var Y=function(e){var t=g();return[e[0],Object(f.useCallback)((function(n){if(t())return e[1](n)}),[t,e[1]])]};function Q(e){return e.split("-")[0]}function X(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function Z(e){var t=X(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function G(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function $(e){return e instanceof G(e).Element||e instanceof Element}function ee(e){return e instanceof G(e).HTMLElement||e instanceof HTMLElement}function te(e){return"undefined"!==typeof ShadowRoot&&(e instanceof G(e).ShadowRoot||e instanceof ShadowRoot)}function ne(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&te(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function re(e){return e?(e.nodeName||"").toLowerCase():null}function oe(e){return G(e).getComputedStyle(e)}function ie(e){return["table","td","th"].indexOf(re(e))>=0}function ae(e){return(($(e)?e.ownerDocument:e.document)||window.document).documentElement}function ce(e){return"html"===re(e)?e:e.assignedSlot||e.parentNode||(te(e)?e.host:null)||ae(e)}function se(e){return ee(e)&&"fixed"!==oe(e).position?e.offsetParent:null}function le(e){for(var t=G(e),n=se(e);n&&ie(n)&&"static"===oe(n).position;)n=se(n);return n&&("html"===re(n)||"body"===re(n)&&"static"===oe(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&ee(e)&&"fixed"===oe(e).position)return null;for(var n=ce(e);ee(n)&&["html","body"].indexOf(re(n))<0;){var r=oe(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}function ue(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}var fe=Math.max,pe=Math.min,de=Math.round;function me(e,t,n){return fe(e,pe(t,n))}function he(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function ve(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var be={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,c=Q(n.placement),s=ue(c),l=[_,B].indexOf(c)>=0?"height":"width";if(i&&a){var u=function(e,t){return he("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:ve(e,H))}(o.padding,n),f=Z(i),p="y"===s?S:_,d="y"===s?U:B,m=n.rects.reference[l]+n.rects.reference[s]-a[s]-n.rects.popper[l],h=a[s]-n.rects.reference[s],v=le(i),b=v?"y"===s?v.clientHeight||0:v.clientWidth||0:0,g=m/2-h/2,y=u[p],O=b-f[l]-u[d],j=b/2-f[l]/2+g,w=me(y,j,O),x=s;n.modifiersData[r]=((t={})[x]=w,t.centerOffset=w-j,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r)))&&ne(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},ge={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ye(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.offsets,a=e.position,c=e.gpuAcceleration,s=e.adaptive,l=e.roundOffsets,u=!0===l?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:de(de(t*r)/r)||0,y:de(de(n*r)/r)||0}}(i):"function"===typeof l?l(i):i,f=u.x,p=void 0===f?0:f,d=u.y,m=void 0===d?0:d,h=i.hasOwnProperty("x"),v=i.hasOwnProperty("y"),b=_,g=S,y=window;if(s){var O=le(n),j="clientHeight",w="clientWidth";O===G(n)&&"static"!==oe(O=ae(n)).position&&(j="scrollHeight",w="scrollWidth"),O=O,o===S&&(g=U,m-=O[j]-r.height,m*=c?1:-1),o===_&&(b=B,p-=O[w]-r.width,p*=c?1:-1)}var x,E=Object.assign({position:a},s&&ge);return c?Object.assign({},E,((x={})[g]=v?"0":"",x[b]=h?"0":"",x.transform=(y.devicePixelRatio||1)<2?"translate("+p+"px, "+m+"px)":"translate3d("+p+"px, "+m+"px, 0)",x)):Object.assign({},E,((t={})[g]=v?m+"px":"",t[b]=h?p+"px":"",t.transform="",t))}var Oe={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,c=n.roundOffsets,s=void 0===c||c,l={placement:Q(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,ye(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:s})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,ye(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},je={passive:!0};var we={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,c=void 0===a||a,s=G(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&l.forEach((function(e){e.addEventListener("scroll",n.update,je)})),c&&s.addEventListener("resize",n.update,je),function(){i&&l.forEach((function(e){e.removeEventListener("scroll",n.update,je)})),c&&s.removeEventListener("resize",n.update,je)}},data:{}},xe={left:"right",right:"left",bottom:"top",top:"bottom"};function Ee(e){return e.replace(/left|right|bottom|top/g,(function(e){return xe[e]}))}var Ne={start:"end",end:"start"};function Ce(e){return e.replace(/start|end/g,(function(e){return Ne[e]}))}function ke(e){var t=G(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Re(e){return X(ae(e)).left+ke(e).scrollLeft}function Ae(e){var t=oe(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function Le(e){return["html","body","#document"].indexOf(re(e))>=0?e.ownerDocument.body:ee(e)&&Ae(e)?e:Le(ce(e))}function De(e,t){var n;void 0===t&&(t=[]);var r=Le(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=G(r),a=o?[i].concat(i.visualViewport||[],Ae(r)?r:[]):r,c=t.concat(a);return o?c:c.concat(De(ce(a)))}function Pe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Me(e,t){return t===F?Pe(function(e){var t=G(e),n=ae(e),r=t.visualViewport,o=n.clientWidth,i=n.clientHeight,a=0,c=0;return r&&(o=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=r.offsetLeft,c=r.offsetTop)),{width:o,height:i,x:a+Re(e),y:c}}(e)):ee(t)?function(e){var t=X(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):Pe(function(e){var t,n=ae(e),r=ke(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=fe(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=fe(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),c=-r.scrollLeft+Re(e),s=-r.scrollTop;return"rtl"===oe(o||n).direction&&(c+=fe(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:c,y:s}}(ae(e)))}function Te(e,t,n){var r="clippingParents"===t?function(e){var t=De(ce(e)),n=["absolute","fixed"].indexOf(oe(e).position)>=0&&ee(e)?le(e):e;return $(n)?t.filter((function(e){return $(e)&&ne(e,n)&&"body"!==re(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],a=o.reduce((function(t,n){var r=Me(e,n);return t.top=fe(r.top,t.top),t.right=pe(r.right,t.right),t.bottom=pe(r.bottom,t.bottom),t.left=fe(r.left,t.left),t}),Me(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Se(e){return e.split("-")[1]}function Ue(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?Q(o):null,a=o?Se(o):null,c=n.x+n.width/2-r.width/2,s=n.y+n.height/2-r.height/2;switch(i){case S:t={x:c,y:n.y-r.height};break;case U:t={x:c,y:n.y+n.height};break;case B:t={x:n.x+n.width,y:s};break;case _:t={x:n.x-r.width,y:s};break;default:t={x:n.x,y:n.y}}var l=i?ue(i):null;if(null!=l){var u="y"===l?"height":"width";switch(a){case W:t[l]=t[l]-(n[u]/2-r[u]/2);break;case I:t[l]=t[l]+(n[u]/2-r[u]/2)}}return t}function Be(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.boundary,a=void 0===i?"clippingParents":i,c=n.rootBoundary,s=void 0===c?F:c,l=n.elementContext,u=void 0===l?V:l,f=n.altBoundary,p=void 0!==f&&f,d=n.padding,m=void 0===d?0:d,h=he("number"!==typeof m?m:ve(m,H)),v=u===V?"reference":V,b=e.elements.reference,g=e.rects.popper,y=e.elements[p?v:u],O=Te($(y)?y:y.contextElement||ae(e.elements.popper),a,s),j=X(b),w=Ue({reference:j,element:g,strategy:"absolute",placement:o}),x=Pe(Object.assign({},g,w)),E=u===V?x:j,N={top:O.top-E.top+h.top,bottom:E.bottom-O.bottom+h.bottom,left:O.left-E.left+h.left,right:E.right-O.right+h.right},C=e.modifiersData.offset;if(u===V&&C){var k=C[o];Object.keys(N).forEach((function(e){var t=[B,U].indexOf(e)>=0?1:-1,n=[S,U].indexOf(e)>=0?"y":"x";N[e]+=k[n]*t}))}return N}var _e={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,c=void 0===a||a,s=n.fallbackPlacements,l=n.padding,u=n.boundary,f=n.rootBoundary,p=n.altBoundary,d=n.flipVariations,m=void 0===d||d,h=n.allowedAutoPlacements,v=t.options.placement,b=Q(v),g=s||(b===v||!m?[Ee(v)]:function(e){if(Q(e)===q)return[];var t=Ee(e);return[Ce(e),t,Ce(t)]}(v)),y=[v].concat(g).reduce((function(e,n){return e.concat(Q(n)===q?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,c=n.flipVariations,s=n.allowedAutoPlacements,l=void 0===s?z:s,u=Se(r),f=u?c?K:K.filter((function(e){return Se(e)===u})):H,p=f.filter((function(e){return l.indexOf(e)>=0}));0===p.length&&(p=f);var d=p.reduce((function(t,n){return t[n]=Be(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[Q(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:u,rootBoundary:f,padding:l,flipVariations:m,allowedAutoPlacements:h}):n)}),[]),O=t.rects.reference,j=t.rects.popper,w=new Map,x=!0,E=y[0],N=0;N<y.length;N++){var C=y[N],k=Q(C),R=Se(C)===W,A=[S,U].indexOf(k)>=0,L=A?"width":"height",D=Be(t,{placement:C,boundary:u,rootBoundary:f,altBoundary:p,padding:l}),P=A?R?B:_:R?U:S;O[L]>j[L]&&(P=Ee(P));var M=Ee(P),T=[];if(i&&T.push(D[k]<=0),c&&T.push(D[P]<=0,D[M]<=0),T.every((function(e){return e}))){E=C,x=!1;break}w.set(C,T)}if(x)for(var I=function(e){var t=y.find((function(t){var n=w.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return E=t,"break"},F=m?3:1;F>0;F--){if("break"===I(F))break}t.placement!==E&&(t.modifiersData[r]._skip=!0,t.placement=E,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function qe(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function He(e){return[S,B,U,_].some((function(t){return e[t]>=0}))}var We={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=Be(t,{elementContext:"reference"}),c=Be(t,{altBoundary:!0}),s=qe(a,r),l=qe(c,o,i),u=He(s),f=He(l);t.modifiersData[n]={referenceClippingOffsets:s,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":f})}};var Ie={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=z.reduce((function(e,n){return e[n]=function(e,t,n){var r=Q(e),o=[_,S].indexOf(r)>=0?-1:1,i="function"===typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],c=i[1];return a=a||0,c=(c||0)*o,[_,B].indexOf(r)>=0?{x:c,y:a}:{x:a,y:c}}(n,t.rects,i),e}),{}),c=a[t.placement],s=c.x,l=c.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=l),t.modifiersData[r]=a}};var Fe={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=Ue({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}};var Ve={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,c=void 0!==a&&a,s=n.boundary,l=n.rootBoundary,u=n.altBoundary,f=n.padding,p=n.tether,d=void 0===p||p,m=n.tetherOffset,h=void 0===m?0:m,v=Be(t,{boundary:s,rootBoundary:l,padding:f,altBoundary:u}),b=Q(t.placement),g=Se(t.placement),y=!g,O=ue(b),j="x"===O?"y":"x",w=t.modifiersData.popperOffsets,x=t.rects.reference,E=t.rects.popper,N="function"===typeof h?h(Object.assign({},t.rects,{placement:t.placement})):h,C={x:0,y:0};if(w){if(i||c){var k="y"===O?S:_,R="y"===O?U:B,A="y"===O?"height":"width",L=w[O],D=w[O]+v[k],P=w[O]-v[R],M=d?-E[A]/2:0,T=g===W?x[A]:E[A],q=g===W?-E[A]:-x[A],H=t.elements.arrow,I=d&&H?Z(H):{width:0,height:0},F=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},V=F[k],K=F[R],z=me(0,x[A],I[A]),J=y?x[A]/2-M-z-V-N:T-z-V-N,Y=y?-x[A]/2+M+z+K+N:q+z+K+N,X=t.elements.arrow&&le(t.elements.arrow),G=X?"y"===O?X.clientTop||0:X.clientLeft||0:0,$=t.modifiersData.offset?t.modifiersData.offset[t.placement][O]:0,ee=w[O]+J-$-G,te=w[O]+Y-$;if(i){var ne=me(d?pe(D,ee):D,L,d?fe(P,te):P);w[O]=ne,C[O]=ne-L}if(c){var re="x"===O?S:_,oe="x"===O?U:B,ie=w[j],ae=ie+v[re],ce=ie-v[oe],se=me(d?pe(ae,ee):ae,ie,d?fe(ce,te):ce);w[j]=se,C[j]=se-ie}}t.modifiersData[r]=C}},requiresIfExists:["offset"]};function Ke(e,t,n){void 0===n&&(n=!1);var r=ae(t),o=X(e),i=ee(t),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(i||!i&&!n)&&(("body"!==re(t)||Ae(r))&&(a=function(e){return e!==G(e)&&ee(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:ke(e);var t}(t)),ee(t)?((c=X(t)).x+=t.clientLeft,c.y+=t.clientTop):r&&(c.x=Re(r))),{x:o.left+a.scrollLeft-c.x,y:o.top+a.scrollTop-c.y,width:o.width,height:o.height}}function ze(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function Je(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var Ye={placement:"bottom",modifiers:[],strategy:"absolute"};function Qe(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function Xe(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?Ye:o;return function(e,t,n){void 0===n&&(n=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},Ye,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],c=!1,s={state:o,setOptions:function(n){l(),o.options=Object.assign({},i,o.options,n),o.scrollParents={reference:$(e)?De(e):e.contextElement?De(e.contextElement):[],popper:De(t)};var c=function(e){var t=ze(e);return J.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=c.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var c=i({state:o,name:t,instance:s,options:r}),l=function(){};a.push(c||l)}})),s.update()},forceUpdate:function(){if(!c){var e=o.elements,t=e.reference,n=e.popper;if(Qe(t,n)){o.rects={reference:Ke(t,le(n),"fixed"===o.options.strategy),popper:Z(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,l=i.options,u=void 0===l?{}:l,f=i.name;"function"===typeof a&&(o=a({state:o,options:u,name:f,instance:s})||o)}else o.reset=!1,r=-1}}},update:Je((function(){return new Promise((function(e){s.forceUpdate(),e(o)}))})),destroy:function(){l(),c=!0}};if(!Qe(e,t))return s;function l(){a.forEach((function(e){return e()})),a=[]}return s.setOptions(n).then((function(e){!c&&n.onFirstUpdate&&n.onFirstUpdate(e)})),s}}var Ze=Xe({defaultModifiers:[We,Fe,Oe,we,Ie,_e,Ve,be]}),Ge=function(e){return{position:e,top:"0",left:"0",opacity:"0",pointerEvents:"none"}},$e={name:"applyStyles",enabled:!1},et={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:function(e){var t=e.state;return function(){var e=t.elements,n=e.reference,r=e.popper;if("removeAttribute"in n){var o=(n.getAttribute("aria-describedby")||"").split(",").filter((function(e){return e.trim()!==r.id}));o.length?n.setAttribute("aria-describedby",o.join(",")):n.removeAttribute("aria-describedby")}}},fn:function(e){var t,n=e.state.elements,r=n.popper,o=n.reference,i=null==(t=r.getAttribute("role"))?void 0:t.toLowerCase();if(r.id&&"tooltip"===i&&"setAttribute"in o){var a=o.getAttribute("aria-describedby");if(a&&-1!==a.split(",").indexOf(r.id))return;o.setAttribute("aria-describedby",a?a+","+r.id:r.id)}}},tt=[];var nt=function(e,t,n){var r=void 0===n?{}:n,o=r.enabled,i=void 0===o||o,a=r.placement,c=void 0===a?"bottom":a,s=r.strategy,l=void 0===s?"absolute":s,u=r.modifiers,p=void 0===u?tt:u,d=L(r,["enabled","placement","strategy","modifiers"]),m=Object(f.useRef)(),h=Object(f.useCallback)((function(){var e;null==(e=m.current)||e.update()}),[]),v=Object(f.useCallback)((function(){var e;null==(e=m.current)||e.forceUpdate()}),[]),b=Y(Object(f.useState)({placement:c,update:h,forceUpdate:v,attributes:{},styles:{popper:Ge(l),arrow:{}}})),g=b[0],y=b[1],O=Object(f.useMemo)((function(){return{name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:function(e){var t=e.state,n={},r={};Object.keys(t.elements).forEach((function(e){n[e]=t.styles[e],r[e]=t.attributes[e]})),y({state:t,styles:n,attributes:r,update:h,forceUpdate:v,placement:t.placement})}}}),[h,v,y]);return Object(f.useEffect)((function(){m.current&&i&&m.current.setOptions({placement:c,strategy:l,modifiers:[].concat(p,[O,$e])})}),[l,c,O,i]),Object(f.useEffect)((function(){if(i&&null!=e&&null!=t)return m.current=Ze(e,t,A({},d,{placement:c,strategy:l,modifiers:[].concat(p,[et,O])})),function(){null!=m.current&&(m.current.destroy(),m.current=void 0,y((function(e){return A({},e,{attributes:{},styles:{popper:Ge(l)}})})))}}),[i,e,t]),g},rt=n("GEtZ"),ot=n("ZCiN"),it=n("dZvc"),at=function(){};var ct=function(e){return e&&("current"in e?e.current:e)};var st=function(e,t,n){var r=void 0===n?{}:n,o=r.disabled,i=r.clickTrigger,a=void 0===i?"click":i,c=Object(f.useRef)(!1),s=t||at,l=Object(f.useCallback)((function(t){var n,r=ct(e);k()(!!r,"RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"),c.current=!r||!!((n=t).metaKey||n.altKey||n.ctrlKey||n.shiftKey)||!function(e){return 0===e.button}(t)||!!b(r,t.target)}),[e]),u=Object(ot.a)((function(e){c.current||s(e)})),p=Object(ot.a)((function(e){27===e.keyCode&&s(e)}));Object(f.useEffect)((function(){if(!o&&null!=e){var t,n=window.event,r=(t=ct(e),Object(it.a)(N(t))),i=Object(rt.a)(r,a,l,!0),c=Object(rt.a)(r,a,(function(e){e!==n?u(e):n=void 0})),s=Object(rt.a)(r,"keyup",(function(e){e!==n?p(e):n=void 0})),f=[];return"ontouchstart"in r.documentElement&&(f=[].slice.call(r.body.children).map((function(e){return Object(rt.a)(e,"mousemove",at)}))),function(){i(),c(),s(),f.forEach((function(e){return e()}))}}}),[e,o,a,l,u,p])},lt=function(e){var t;return"undefined"===typeof document?null:null==e?Object(it.a)().body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),null!=(t=e)&&t.nodeType&&e||null)};function ut(e,t){var n=Object(f.useState)((function(){return lt(e)})),r=n[0],o=n[1];if(!r){var i=lt(e);i&&o(i)}return Object(f.useEffect)((function(){t&&r&&t(r)}),[t,r]),Object(f.useEffect)((function(){var t=lt(e);t!==r&&o(t)}),[e,r]),r}function ft(e){var t,n,r,o,i,a=e.enabled,c=e.enableEvents,s=e.placement,l=e.flip,u=e.offset,f=e.fixed,p=e.containerPadding,d=e.arrowElement,m=e.popperConfig,h=void 0===m?{}:m,v=function(e){var t={};return Array.isArray(e)?(null==e||e.forEach((function(e){t[e.name]=e})),t):e||t}(h.modifiers);return A({},h,{placement:s,enabled:a,strategy:f?"fixed":h.strategy,modifiers:(i=A({},v,{eventListeners:{enabled:c},preventOverflow:A({},v.preventOverflow,{options:p?A({padding:p},null==(t=v.preventOverflow)?void 0:t.options):null==(n=v.preventOverflow)?void 0:n.options}),offset:{options:A({offset:u},null==(r=v.offset)?void 0:r.options)},arrow:A({},v.arrow,{enabled:!!d,options:A({},null==(o=v.arrow)?void 0:o.options,{element:d})}),flip:A({enabled:!!l},v.flip)}),void 0===i&&(i={}),Array.isArray(i)?i:Object.keys(i).map((function(e){return i[e].name=e,i[e]})))})}var pt=p.a.forwardRef((function(e,t){var n=e.flip,r=e.offset,o=e.placement,i=e.containerPadding,a=void 0===i?5:i,c=e.popperConfig,s=void 0===c?{}:c,l=e.transition,u=M(),d=u[0],m=u[1],h=M(),v=h[0],b=h[1],g=Object(T.a)(m,t),y=ut(e.container),O=ut(e.target),j=Object(f.useState)(!e.show),w=j[0],x=j[1],N=nt(O,d,ft({placement:o,enableEvents:!!e.show,containerPadding:a||5,flip:n,offset:r,arrowElement:v,popperConfig:s})),C=N.styles,k=N.attributes,R=L(N,["styles","attributes"]);e.show?w&&x(!1):e.transition||w||x(!0);var D=e.show||l&&!w;if(st(d,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!D)return null;var P=e.children(A({},R,{show:!!e.show,props:A({},k.popper,{style:C.popper,ref:g}),arrowProps:A({},k.arrow,{style:C.arrow,ref:b})}));if(l){var S=e.onExit,U=e.onExiting,B=e.onEnter,_=e.onEntering,q=e.onEntered;P=p.a.createElement(l,{in:e.show,appear:!0,onExit:S,onExiting:U,onExited:function(){x(!0),e.onExited&&e.onExited.apply(e,arguments)},onEnter:B,onEntering:_,onEntered:q},P)}return y?E.a.createPortal(P,y):null}));pt.displayName="Overlay",pt.propTypes={show:P.a.bool,placement:P.a.oneOf(z),target:P.a.any,container:P.a.any,flip:P.a.bool,children:P.a.func.isRequired,containerPadding:P.a.number,popperConfig:P.a.object,rootClose:P.a.bool,rootCloseEvent:P.a.oneOf(["click","mousedown"]),rootCloseDisabled:P.a.bool,onHide:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o;return e.rootClose?(o=P.a.func).isRequired.apply(o,[e].concat(n)):P.a.func.apply(P.a,[e].concat(n))},transition:P.a.elementType,onEnter:P.a.func,onEntering:P.a.func,onEntered:P.a.func,onExit:P.a.func,onExiting:P.a.func,onExited:P.a.func};var dt=pt;function mt(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}function ht(e){var t=window.getComputedStyle(e);return{top:parseFloat(t.marginTop)||0,right:parseFloat(t.marginRight)||0,bottom:parseFloat(t.marginBottom)||0,left:parseFloat(t.marginLeft)||0}}var vt,bt=n("dRu9"),gt=n("wsUu"),yt=n("z+q/"),Ot=((vt={})[bt.b]="show",vt[bt.a]="show",vt),jt=p.a.forwardRef((function(e,t){var n=e.className,r=e.children,o=Object(s.a)(e,["className","children"]),i=Object(f.useCallback)((function(e){Object(yt.a)(e),o.onEnter&&o.onEnter(e)}),[o]);return p.a.createElement(bt.e,Object(c.a)({ref:t,addEndListener:gt.a},o,{onEnter:i}),(function(e,t){return p.a.cloneElement(r,Object(c.a)({},t,{className:u()("fade",n,r.props.className,Ot[e])}))}))}));jt.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},jt.displayName="Fade";var wt=jt,xt={transition:wt,rootClose:!1,show:!1,placement:"top"};function Et(e){var t=e.children,n=e.transition,r=e.popperConfig,o=void 0===r?{}:r,i=Object(s.a)(e,["children","transition","popperConfig"]),a=Object(f.useRef)({}),l=function(){var e=Object(f.useRef)(null),t=Object(f.useRef)(null),n=Object(f.useRef)(null),r=Object(d.a)(void 0,"popover"),o=Object(d.a)(void 0,"dropdown-menu");return[Object(f.useCallback)((function(n){n&&(mt(n,r)||mt(n,o))&&(t.current=ht(n),n.style.margin="0",e.current=n)}),[r,o]),[Object(f.useMemo)((function(){return{name:"offset",options:{offset:function(e){var n=e.placement;if(!t.current)return[0,0];var r=t.current,o=r.top,i=r.left,a=r.bottom,c=r.right;switch(n.split("-")[0]){case"top":return[0,a];case"left":return[0,c];case"bottom":return[0,o];case"right":return[0,i];default:return[0,0]}}}}}),[t]),Object(f.useMemo)((function(){return{name:"arrow",options:{padding:function(){if(!n.current)return 0;var e=n.current,t=e.top,r=e.right,o=t||r;return{top:o,left:o,right:o,bottom:o}}}}}),[n]),Object(f.useMemo)((function(){return{name:"popoverArrowMargins",enabled:!0,phase:"main",requiresIfExists:["arrow"],effect:function(t){var o=t.state;if(e.current&&o.elements.arrow&&mt(e.current,r)){if(o.modifiersData["arrow#persistent"]){var i=ht(o.elements.arrow),a=i.top,c=i.right,s=a||c;o.modifiersData["arrow#persistent"].padding={top:s,left:s,right:s,bottom:s}}else n.current=ht(o.elements.arrow);return o.elements.arrow.style.margin="0",function(){o.elements.arrow&&(o.elements.arrow.style.margin="")}}}}}),[r])]]}(),m=l[0],h=l[1],v=!0===n?wt:n||null;return p.a.createElement(dt,Object(c.a)({},i,{ref:m,popperConfig:Object(c.a)({},o,{modifiers:h.concat(o.modifiers||[])}),transition:v}),(function(e){var r,o=e.props,i=e.arrowProps,l=e.show,f=e.update,d=(e.forceUpdate,e.placement),m=e.state,h=Object(s.a)(e,["props","arrowProps","show","update","forceUpdate","placement","state"]);!function(e,t){var n=e.ref,r=t.ref;e.ref=n.__wrapped||(n.__wrapped=function(e){return n(N(e))}),t.ref=r.__wrapped||(r.__wrapped=function(e){return r(N(e))})}(o,i);var v=Object.assign(a.current,{state:m,scheduleUpdate:f,placement:d,outOfBoundaries:(null==m||null==(r=m.modifiersData.hide)?void 0:r.isReferenceHidden)||!1});return"function"===typeof t?t(Object(c.a)({},h,o,{placement:d,show:l},!n&&l&&{className:"show"},{popper:v,arrowProps:i})):p.a.cloneElement(t,Object(c.a)({},h,o,{placement:d,arrowProps:i,popper:v,className:u()(t.props.className,!n&&l&&"show"),style:Object(c.a)({},t.props.style,o.style)}))}))}Et.defaultProps=xt;var Nt=Et,Ct=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,v(t,n),r.prototype.render=function(){return this.props.children},r}(p.a.Component);function kt(e,t,n){var r=t[0],o=r.currentTarget,i=r.relatedTarget||r.nativeEvent[n];i&&i===o||b(o,i)||e.apply(void 0,t)}function Rt(e){var t=e.trigger,n=e.overlay,r=e.children,o=e.popperConfig,i=void 0===o?{}:o,a=e.show,l=e.defaultShow,u=void 0!==l&&l,d=e.onToggle,m=e.delay,h=e.placement,v=e.flip,b=void 0===v?h&&-1!==h.indexOf("auto"):v,g=Object(s.a)(e,["trigger","overlay","children","popperConfig","show","defaultShow","onToggle","delay","placement","flip"]),y=Object(f.useRef)(null),O=w(),j=Object(f.useRef)(""),x=Object(R.b)(a,u,d),E=x[0],C=x[1],k=function(e){return e&&"object"===typeof e?e:{show:e,hide:e}}(m),A="function"!==typeof r?p.a.Children.only(r).props:{},L=A.onFocus,D=A.onBlur,P=A.onClick,M=Object(f.useCallback)((function(){return N(y.current)}),[]),T=Object(f.useCallback)((function(){O.clear(),j.current="show",k.show?O.set((function(){"show"===j.current&&C(!0)}),k.show):C(!0)}),[k.show,C,O]),S=Object(f.useCallback)((function(){O.clear(),j.current="hide",k.hide?O.set((function(){"hide"===j.current&&C(!1)}),k.hide):C(!1)}),[k.hide,C,O]),U=Object(f.useCallback)((function(){T();for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];null==L||L.apply(void 0,t)}),[T,L]),B=Object(f.useCallback)((function(){S();for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];null==D||D.apply(void 0,t)}),[S,D]),_=Object(f.useCallback)((function(){C(!E),P&&P.apply(void 0,arguments)}),[P,C,E]),q=Object(f.useCallback)((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];kt(T,t,"fromElement")}),[T]),H=Object(f.useCallback)((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];kt(S,t,"toElement")}),[S]),W=null==t?[]:[].concat(t),I={};return-1!==W.indexOf("click")&&(I.onClick=_),-1!==W.indexOf("focus")&&(I.onFocus=U,I.onBlur=B),-1!==W.indexOf("hover")&&(I.onMouseOver=q,I.onMouseOut=H),p.a.createElement(p.a.Fragment,null,"function"===typeof r?r(Object(c.a)({},I,{ref:y})):p.a.createElement(Ct,{ref:y},Object(f.cloneElement)(r,I)),p.a.createElement(Nt,Object(c.a)({},g,{show:E,onHide:S,flip:b,placement:h,popperConfig:i,target:M}),n))}Rt.defaultProps={defaultShow:!1,trigger:["hover","focus"]};var At=Rt,Lt=function(e){var t=e.name,n=e.imgURL;return Object(r.jsx)("div",{className:"skill col-3-md mx-4 my-3 skills",children:Object(r.jsx)(At,{placement:"top",overlay:Object(r.jsx)(h,{id:"tooltip-top",children:t}),children:Object(r.jsx)("img",{src:n})})})},Dt=function(){return Object(r.jsx)("div",{className:"container skills",children:Object(r.jsx)("div",{className:"row",children:[{name:"HTML5",imgURL:"http://www.oscarblancarteblog.com/wp-content/uploads/2016/11/html5-e1479600257146.png"},{name:"CSS3",imgURL:"https://lenguajecss.com/assets/logo.svg"},{name:"Bootstrap",imgURL:"https://avatars.githubusercontent.com/u/2918581?s=280&v=4"},{name:"ECMAScript 6",imgURL:"https://miro.medium.com/max/640/1*kCD_6R3UkMHkpS_YgFoU9w.jpeg"},{name:"Typescript",imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu3LfC23p48aUZxgRUduLn-H8ayt5g64D7bOWNBaTkLU3Aaj4K61KvIklTCOw6mXQAwVM&usqp=CAU"},{name:"Angular",imgURL:"https://coryrylan.com/assets/images/posts/types/angular-1280x960.png"},{name:"React",imgURL:"https://res.cloudinary.com/codier/image/upload/v1530614273/jqxbwxmnrkjq0mxhnvjn.png"},{name:"Python",imgURL:"https://4.bp.blogspot.com/-NNF6wg11eKQ/V-BL3PRvsUI/AAAAAAAAGPw/AtqUtauHxJ4_N2KAuhb1_InjrglDy1L0wCPcB/s1600/Other-python-icon.png"},{name:"MongoDB",imgURL:"https://img.icons8.com/color/452/mongodb.png"},{name:"MySQL",imgURL:"https://www.cunix.net/wp-content/uploads/2016/01/mysql.png"},{name:"Flask",imgURL:"https://fireprotocol.com/wp-content/uploads/2017/01/flask-oauth.png"},{name:"Java",imgURL:"https://www.logolynx.com/images/logolynx/59/59984caffdabd9293e40048281e35d79.jpeg"}].map((function(e){return Object(r.jsx)(Lt,{name:e.name,imgURL:e.imgURL},e.name)}))})})},Pt=n("W5Y+"),Mt=function(){var e=Object(f.useContext)(Pt.a);return Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row  ",children:Object(r.jsxs)("div",{className:"col-md-12",children:[Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-md-4",children:Object(r.jsxs)("div",{className:"content",children:[Object(r.jsx)("div",{className:"content-overlay"})," ",Object(r.jsx)("img",{class:"content-image",src:"yo.jpg"}),Object(r.jsxs)("div",{className:"content-details fadeIn-bottom",children:[e.english?Object(r.jsx)("h3",{className:"content-title",children:"18 years"}):Object(r.jsx)("h3",{className:"content-title",children:"18 a\xf1os"}),Object(r.jsxs)("p",{className:"content-text",children:[Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-geo-alt-fill",viewBox:"0 0 16 16",children:Object(r.jsx)("path",{d:"M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"})})," Heredia, San Joaquin"]})]})]})}),Object(r.jsxs)("div",{className:"col-md-8",children:[Object(r.jsx)("h1",{children:"Antony Ja\xe9n V\xedquez"}),e.english?Object(r.jsx)("p",{children:"I\u2019m going through my senior year at professional technical high school of Mercedes Norte, where I learned programming tools like Python, C++, HTML.CSS, JavaScript, MySQL y java. Besides that, self-studies like Angular, React, C#, typescript, MongoDB, flask y node.js. I have the ability to understand and speak english, I completed the BELT (business english language test) test and I got a result of B1"}):Object(r.jsx)("p",{className:"fs",children:"Actualmente en me encuentro en Duod\xe9cimo grado en la especialidad de inform\xe1tica en desarrollo de software en el colegio t\xe9cnico profesional Mercedes Norte en la cual  he tenido experiencia con las herramientas o lenguajes de programaci\xf3n  como lo son python, C++,  HTML.CSS, JavaScrip,MySql y java. Adem\xe1s de varios estudios autodidactas por ejemplo Angular,React, C#,typescript,MongoDB, flask y node.js."})]})]}),Object(r.jsx)("div",{className:"col-md-8 "})]})})})},Tt=(n("lPHp"),function(e){var t=e.url,n=e.info,o=e.action;return Object(r.jsx)("div",{className:"container  hover-overlay contact-method",children:Object(r.jsxs)("div",{onClick:function(){o&&(window.location.href=o)},className:"row py-2",children:[Object(r.jsx)("div",{className:"col-4",children:Object(r.jsx)("div",{className:"cont",children:Object(r.jsx)("img",{src:t,alt:""})})}),Object(r.jsx)("div",{className:"col-8",children:Object(r.jsx)("h5",{className:"text-contact",children:n})})]})})}),St=function(){return Object(r.jsx)("div",{className:"container my-5",children:[{url:"https://img.icons8.com/office/50/000000/whatsapp--v3.png",info:"+506 6179 7265",action:"https://api.whatsapp.com/send?phone=50661797265"},{url:"https://img.icons8.com/fluent/50/000000/gmail--v2.png",info:"Tonyjaen0@gmail.com",action:"mailto:tonyjaen0@gmail.com"},{url:"https://img.icons8.com/color/50/000000/linkedin.png",info:"Linkedin",action:"https://www.linkedin.com/in/antony-jaen/"}].map((function(e){return Object(r.jsx)("div",{className:"row",children:Object(r.jsx)(Tt,{url:e.url,info:e.info,action:e.action})},e.url)}))})};function Ut(){return Object(r.jsxs)("div",{children:[Object(r.jsxs)(i.a,{children:[Object(r.jsx)("title",{children:"Portfolio"}),Object(r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),Object(r.jsx)(a.a,{children:Object(r.jsxs)("div",{className:"bgr",children:[Object(r.jsx)("div",{className:"container fondo",children:Object(r.jsx)(Mt,{})}),Object(r.jsx)("div",{className:"container fondo",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-md-4 container-contact",children:Object(r.jsx)(St,{})}),Object(r.jsx)("div",{className:"col-md-8 container-skill",children:Object(r.jsx)(Dt,{})})]})})]})})]})}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,2,5,1,3]]]);