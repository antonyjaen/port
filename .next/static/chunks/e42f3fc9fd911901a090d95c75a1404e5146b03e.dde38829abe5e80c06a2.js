(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=o,t.useAmp=function(){return o(a.default.useContext(i.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},i=n("lwAK");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,i=e.hasQuery,o=void 0!==i&&i;return n||a&&o}},"2W6z":function(e,t,n){"use strict";var r=function(){};e.exports=r},"7j6X":function(e,t,n){"use strict";var r=n("dZvc");function a(e,t){return function(e){var t=Object(r.a)(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var i=/([A-Z])/g;var o=/^ms-/;function c(e){return function(e){return e.replace(i,"-$1").toLowerCase()}(e).replace(o,"-ms-")}var s=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;t.a=function(e,t){var n="",r="";if("string"===typeof t)return e.style.getPropertyValue(c(t))||a(e).getPropertyValue(c(t));Object.keys(t).forEach((function(a){var i=t[a];i||0===i?!function(e){return!(!e||!s.test(e))}(a)?n+=c(a)+": "+i+";":r+=a+"("+i+") ":e.style.removeProperty(c(a))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=r?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),i=(r=n("Xuae"))&&r.__esModule?r:{default:r},o=n("lwAK"),c=n("FYa8"),s=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var i=!0,o=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){o=!0;var c=a.key.slice(a.key.indexOf("$")+1);e.has(c)?i=!1:e.add(c)}switch(a.type){case"title":case"base":t.has(a.type)?i=!1:t.add(a.type);break;case"meta":for(var s=0,u=d.length;s<u;s++){var l=d[s];if(a.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?i=!1:n.add(l);else{var f=a.props[l],p=r[l]||new Set;"name"===l&&o||!p.has(f)?(p.add(f),r[l]=p):i=!1}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function v(e){var t=e.children,n=(0,a.useContext)(o.AmpStateContext),r=(0,a.useContext)(c.HeadManagerContext);return a.default.createElement(i.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}v.rewind=function(){};var b=v;t.default=b},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},Byzb:function(e,t,n){"use strict";var r=n("nKUr"),a=n("q1tI"),i=n.n(a),o=n("W5Y+"),c=n("RAs/"),s=n("hVfy"),u=n("TSYQ"),l=n.n(u),f=n("y8DL"),d=/-(.)/g;var p=n("vUet"),v=function(e){return e[0].toUpperCase()+(t=e,t.replace(d,(function(e,t){return t.toUpperCase()}))).slice(1);var t};var b=i.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,a=e.as,o=Object(s.a)(e,["bsPrefix","className","as"]);n=Object(p.a)(n,"navbar-brand");var u=a||(o.href?"a":"span");return i.a.createElement(u,Object(c.a)({},o,{ref:t,className:l()(r,n)}))}));b.displayName="NavbarBrand";var h,m=b,j=n("7j6X"),y=n("dRu9"),g=n("wsUu"),x=n("Qg85"),O=n("z+q/"),E={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function C(e,t){var n=t["offset"+e[0].toUpperCase()+e.slice(1)],r=E[e];return n+parseInt(Object(j.a)(t,r[0]),10)+parseInt(Object(j.a)(t,r[1]),10)}var w=((h={})[y.c]="collapse",h[y.d]="collapsing",h[y.b]="collapsing",h[y.a]="collapse show",h),N={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:C},S=i.a.forwardRef((function(e,t){var n=e.onEnter,r=e.onEntering,o=e.onEntered,u=e.onExit,f=e.onExiting,d=e.className,p=e.children,v=e.dimension,b=void 0===v?"height":v,h=e.getDimensionValue,m=void 0===h?C:h,j=Object(s.a)(e,["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"]),E="function"===typeof b?b():b,N=Object(a.useMemo)((function(){return Object(x.a)((function(e){e.style[E]="0"}),n)}),[E,n]),S=Object(a.useMemo)((function(){return Object(x.a)((function(e){var t="scroll"+E[0].toUpperCase()+E.slice(1);e.style[E]=e[t]+"px"}),r)}),[E,r]),k=Object(a.useMemo)((function(){return Object(x.a)((function(e){e.style[E]=null}),o)}),[E,o]),P=Object(a.useMemo)((function(){return Object(x.a)((function(e){e.style[E]=m(E,e)+"px",Object(O.a)(e)}),u)}),[u,m,E]),I=Object(a.useMemo)((function(){return Object(x.a)((function(e){e.style[E]=null}),f)}),[E,f]);return i.a.createElement(y.e,Object(c.a)({ref:t,addEndListener:g.a},j,{"aria-expanded":j.role?j.in:null,onEnter:N,onEntering:S,onEntered:k,onExit:P,onExiting:I}),(function(e,t){return i.a.cloneElement(p,Object(c.a)({},t,{className:l()(d,p.props.className,w[e],"width"===E&&"width")}))}))}));S.defaultProps=N;var k=S,P=i.a.createContext(null);P.displayName="NavbarContext";var I=P,M=i.a.forwardRef((function(e,t){var n=e.children,r=e.bsPrefix,a=Object(s.a)(e,["children","bsPrefix"]);return r=Object(p.a)(r,"navbar-collapse"),i.a.createElement(I.Consumer,null,(function(e){return i.a.createElement(k,Object(c.a)({in:!(!e||!e.expanded)},a),i.a.createElement("div",{ref:t,className:r},n))}))}));M.displayName="NavbarCollapse";var R=M,_=n("ZCiN"),L=i.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,o=e.children,u=e.label,f=e.as,d=void 0===f?"button":f,v=e.onClick,b=Object(s.a)(e,["bsPrefix","className","children","label","as","onClick"]);n=Object(p.a)(n,"navbar-toggler");var h=Object(a.useContext)(I)||{},m=h.onToggle,j=h.expanded,y=Object(_.a)((function(e){v&&v(e),m&&m()}));return"button"===d&&(b.type="button"),i.a.createElement(d,Object(c.a)({},b,{ref:t,onClick:y,"aria-label":u,className:l()(r,n,!j&&"collapsed")}),o||i.a.createElement("span",{className:n+"-icon"}))}));L.displayName="NavbarToggle",L.defaultProps={label:"Toggle navigation"};var A=L,T=function(e,t){return void 0===t&&(t=null),null!=e?String(e):t||null},D=i.a.createContext(null),K=function(e,t){var n=void 0===t?{}:t,r=n.displayName,a=void 0===r?v(e):r,o=n.Component,u=n.defaultProps,f=i.a.forwardRef((function(t,n){var r=t.className,a=t.bsPrefix,u=t.as,f=void 0===u?o||"div":u,d=Object(s.a)(t,["className","bsPrefix","as"]),v=Object(p.a)(a,e);return i.a.createElement(f,Object(c.a)({ref:n,className:l()(r,v)},d))}));return f.defaultProps=u,f.displayName=a,f}("navbar-text",{Component:"span"}),U=i.a.forwardRef((function(e,t){var n=Object(f.a)(e,{expanded:"onToggle"}),r=n.bsPrefix,o=n.expand,u=n.variant,d=n.bg,v=n.fixed,b=n.sticky,h=n.className,m=n.children,j=n.as,y=void 0===j?"nav":j,g=n.expanded,x=n.onToggle,O=n.onSelect,E=n.collapseOnSelect,C=Object(s.a)(n,["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"]),w=Object(p.a)(r,"navbar"),N=Object(a.useCallback)((function(){O&&O.apply(void 0,arguments),E&&g&&x&&x(!1)}),[O,E,g,x]);void 0===C.role&&"nav"!==y&&(C.role="navigation");var S=w+"-expand";"string"===typeof o&&(S=S+"-"+o);var k=Object(a.useMemo)((function(){return{onToggle:function(){return x&&x(!g)},bsPrefix:w,expanded:!!g}}),[w,g,x]);return i.a.createElement(I.Provider,{value:k},i.a.createElement(D.Provider,{value:N},i.a.createElement(y,Object(c.a)({ref:t},C,{className:l()(h,w,o&&S,u&&w+"-"+u,d&&"bg-"+d,b&&"sticky-"+b,v&&"fixed-"+v)}),m)))}));U.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},U.displayName="Navbar",U.Brand=m,U.Toggle=A,U.Collapse=R,U.Text=K;var q=U,V=(n("K9S6"),i.a.createContext(null));V.displayName="CardContext";var H=V,W=Function.prototype.bind.call(Function.prototype.call,[].slice);var z=n("lcWJ"),F=i.a.createContext(null);F.displayName="NavContext";var Y=F,Z=i.a.createContext(null),B=function(){},J=i.a.forwardRef((function(e,t){var n,r,o=e.as,u=void 0===o?"ul":o,l=e.onSelect,f=e.activeKey,d=e.role,p=e.onKeyDown,v=Object(s.a)(e,["as","onSelect","activeKey","role","onKeyDown"]),b=Object(a.useReducer)((function(e){return!e}),!1)[1],h=Object(a.useRef)(!1),m=Object(a.useContext)(D),j=Object(a.useContext)(Z);j&&(d=d||"tablist",f=j.activeKey,n=j.getControlledId,r=j.getControllerId);var y=Object(a.useRef)(null),g=function(e){var t=y.current;if(!t)return null;var n,r=(n="[data-rb-event-key]:not(.disabled)",W(t.querySelectorAll(n))),a=t.querySelector(".active");if(!a)return null;var i=r.indexOf(a);if(-1===i)return null;var o=i+e;return o>=r.length&&(o=0),o<0&&(o=r.length-1),r[o]},x=function(e,t){null!=e&&(l&&l(e,t),m&&m(e,t))};Object(a.useEffect)((function(){if(y.current&&h.current){var e=y.current.querySelector("[data-rb-event-key].active");e&&e.focus()}h.current=!1}));var O=Object(z.a)(t,y);return i.a.createElement(D.Provider,{value:x},i.a.createElement(Y.Provider,{value:{role:d,activeKey:T(f),getControlledId:n||B,getControllerId:r||B}},i.a.createElement(u,Object(c.a)({},v,{onKeyDown:function(e){var t;switch(p&&p(e),e.key){case"ArrowLeft":case"ArrowUp":t=g(-1);break;case"ArrowRight":case"ArrowDown":t=g(1);break;default:return}t&&(e.preventDefault(),x(t.dataset.rbEventKey,e),h.current=!0,b())},ref:O,role:d}))))})),X=i.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,a=e.children,o=e.as,u=void 0===o?"div":o,f=Object(s.a)(e,["bsPrefix","className","children","as"]);return n=Object(p.a)(n,"nav-item"),i.a.createElement(u,Object(c.a)({},f,{ref:t,className:l()(r,n)}),a)}));X.displayName="NavItem";var Q=X,G=n("dbZe"),$=(n("2W6z"),i.a.forwardRef((function(e,t){var n=e.active,r=e.className,o=e.eventKey,u=e.onSelect,f=e.onClick,d=e.as,p=Object(s.a)(e,["active","className","eventKey","onSelect","onClick","as"]),v=T(o,p.href),b=Object(a.useContext)(D),h=Object(a.useContext)(Y),m=n;if(h){p.role||"tablist"!==h.role||(p.role="tab");var j=h.getControllerId(v),y=h.getControlledId(v);p["data-rb-event-key"]=v,p.id=j||p.id,p["aria-controls"]=y||p["aria-controls"],m=null==n&&null!=v?h.activeKey===v:n}"tab"===p.role&&(p.disabled&&(p.tabIndex=-1,p["aria-disabled"]=!0),p["aria-selected"]=m);var g=Object(_.a)((function(e){f&&f(e),null!=v&&(u&&u(v,e),b&&b(v,e))}));return i.a.createElement(d,Object(c.a)({},p,{ref:t,onClick:g,className:l()(r,m&&"active")}))})));$.defaultProps={disabled:!1};var ee=$,te={disabled:!1,as:G.a},ne=i.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.disabled,a=e.className,o=e.href,u=e.eventKey,f=e.onSelect,d=e.as,v=Object(s.a)(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return n=Object(p.a)(n,"nav-link"),i.a.createElement(ee,Object(c.a)({},v,{href:o,ref:t,eventKey:u,as:d,disabled:r,onSelect:f,className:l()(a,n,r&&"disabled")}))}));ne.displayName="NavLink",ne.defaultProps=te;var re=ne,ae=i.a.forwardRef((function(e,t){var n,r,o,u=Object(f.a)(e,{activeKey:"onSelect"}),d=u.as,v=void 0===d?"div":d,b=u.bsPrefix,h=u.variant,m=u.fill,j=u.justify,y=u.navbar,g=u.navbarScroll,x=u.className,O=u.children,E=u.activeKey,C=Object(s.a)(u,["as","bsPrefix","variant","fill","justify","navbar","navbarScroll","className","children","activeKey"]),w=Object(p.a)(b,"nav"),N=!1,S=Object(a.useContext)(I),k=Object(a.useContext)(H);return S?(r=S.bsPrefix,N=null==y||y):k&&(o=k.cardHeaderBsPrefix),i.a.createElement(J,Object(c.a)({as:v,ref:t,activeKey:E,className:l()(x,(n={},n[w]=!N,n[r+"-nav"]=N,n[r+"-nav-scroll"]=N&&g,n[o+"-"+h]=!!o,n[w+"-"+h]=!!h,n[w+"-fill"]=m,n[w+"-justified"]=j,n))},C),O)}));ae.displayName="Nav",ae.defaultProps={justify:!1,fill:!1},ae.Item=Q,ae.Link=re;var ie=ae,oe=n("YFqc"),ce=n.n(oe),se=function(){var e=Object(a.useContext)(o.a);return Object(r.jsxs)(q,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(r.jsx)(q.Brand,{children:e.english?Object(r.jsx)("div",{children:" Portfolio"}):Object(r.jsx)("div",{children:"Portafolio"})}),Object(r.jsx)(q.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(r.jsxs)(q.Collapse,{id:"responsive-navbar-nav",children:[Object(r.jsxs)(ie,{className:"mr-auto",children:[Object(r.jsx)(ce.a,{href:"/",children:Object(r.jsxs)("a",{className:"link",children:[" ",e.english?Object(r.jsx)("div",{children:"About Me"}):Object(r.jsx)("div",{children:"Sobre mi"})]})}),Object(r.jsx)(ce.a,{href:"/Skills",children:Object(r.jsxs)("a",{className:"link ",children:[" ",e.english?Object(r.jsx)("div",{children:" Projects"}):Object(r.jsx)("div",{children:"Proyectos"})]})})]}),Object(r.jsxs)(ie,{children:[Object(r.jsx)(ie.Link,{onClick:function(){e.toggleState(!1),console.log(e.english)},children:"Espa\xf1ol"}),Object(r.jsx)(ie.Link,{onClick:function(){e.toggleState(!0),console.log(e.english)},children:" English "})]})]})]})};t.a=function(e){var t=e.children,n=Object(a.useState)(!1),i=n[0],c=n[1];return Object(r.jsxs)(o.a.Provider,{value:{english:i,toggleState:function(e){c(e)}},children:[Object(r.jsx)(se,{}),Object(r.jsx)("main",{children:t})]})}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},GEtZ:function(e,t,n){"use strict";var r=!("undefined"===typeof window||!window.document||!window.document.createElement),a=!1,i=!1;try{var o={get passive(){return a=!0},get once(){return i=a=!0}};r&&(window.addEventListener("test",o,o),window.removeEventListener("test",o,!0))}catch(u){}var c=function(e,t,n,r){if(r&&"boolean"!==typeof r&&!i){var o=r.once,c=r.capture,s=n;!i&&o&&(s=n.__once||function e(r){this.removeEventListener(t,e,c),n.call(this,r)},n.__once=s),e.addEventListener(t,s,a?r:c)}e.addEventListener(t,n,r)};var s=function(e,t,n,r){var a=r&&"boolean"!==typeof r?r.capture:r;e.removeEventListener(t,n,a),n.__once&&e.removeEventListener(t,n.__once,a)};t.a=function(e,t,n,r){return c(e,t,n,r),function(){s(e,t,n,r)}}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},K9S6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];function r(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var a=null;return t.forEach((function(e){if(null==a){var t=e.apply(void 0,n);null!=t&&(a=t)}})),a}return(0,i.default)(r)};var r,a=n("pvIh"),i=(r=a)&&r.__esModule?r:{default:r};e.exports=t.default},QLaP:function(e,t,n){"use strict";e.exports=function(e,t,n,r,a,i,o,c){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,a,i,o,c],l=0;(s=new Error(t.replace(/%s/g,(function(){return u[l++]})))).name="Invariant Violation"}throw s.framesToPop=1,s}}},Qg85:function(e,t,n){"use strict";t.a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(this,r),t.apply(this,r)}}),null)}},"RAs/":function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),i=n("ZhPi"),o=n("Bnag");e.exports=function(e){return r(e)||a(e)||i(e)||o()}},TKxs:function(e,t,n){"use strict";var r=n("nKUr"),a=n("q1tI"),i=n.n(a),o=n("W5Y+"),c=function(e){var t=e.title,n=e.desc,a=e.imgURL,i=e.children;return Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("div",{className:"overflow",children:Object(r.jsx)("img",{className:"Image",src:a})}),Object(r.jsxs)("div",{className:"card-body",children:[Object(r.jsx)("h5",{className:"card-title",children:t}),Object(r.jsx)("div",{children:Object(r.jsx)("p",{class:"card-text",children:n})}),Object(r.jsx)("div",{children:i})]})]})},s=n("RAs/"),u=n("hVfy"),l=n("TSYQ"),f=n.n(l),d=n("vUet"),p=n("dbZe"),v=i.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.variant,a=e.size,o=e.active,c=e.className,l=e.block,v=e.type,b=e.as,h=Object(u.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),m=Object(d.a)(n,"btn"),j=f()(c,m,o&&"active",r&&m+"-"+r,l&&m+"-block",a&&m+"-"+a);if(h.href)return i.a.createElement(p.a,Object(s.a)({},h,{as:b,ref:t,className:f()(j,h.disabled&&"disabled")}));t&&(h.ref=t),v?h.type=v:b||(h.type="button");var y=b||"button";return i.a.createElement(y,Object(s.a)({},h,{className:j}))}));v.displayName="Button",v.defaultProps={variant:"primary",active:!1,disabled:!1};var b=v;t.a=function(){var e=[{title:"Hotel-Angular",descS:"Una aplicaci\xf3n web dise\xf1ada para la gesti\xf3n de un hotel creada con el fin de aprendizaje ",descE:"Is a web application developed to the management of the hotel for educational purposes.",imgURL:"/Hotel-Angular.png",video:"/primera.mp4"},{title:"Venta",descS:"Un sitio web din\xe1mico creado para administraci\xf3n de ventas de una peque\xf1a empresa",descE:"dynamic Website made to manage the sales of a startup business for educational purposes.",imgURL:"/Venta.png",video:"/Ventas.mp4"},{title:"Venta-Ionic",descS:"Adaptaci\xf3n de una aplicaci\xf3n web a aplicaci\xf3n m\xf3vil con tecnolog\xedas diferentes",descE:"using new and innovative technologies i created an a mobile application base on a website",imgURL:"/Venta-ionic.png",video:"/celular1.mp4"}],t=Object(a.useContext)(o.a),n=Object(a.useState)(!1),i=n[0],s=n[1],u=Object(a.useState)(""),l=u[0],f=u[1],d=function(e,t){s(e),f(t)};return Object(r.jsx)("div",{children:i?Object(r.jsxs)("div",{className:"Video-desc",children:[Object(r.jsx)("h1",{onClick:function(){d(!1)},children:"X"}),Object(r.jsx)("div",{className:"ratio ratio-21x9 vid",children:Object(r.jsx)("iframe",{src:l,className:"vid",title:"YouTube video",allowfullscreen:!0})})]}):Object(r.jsx)("div",{className:"container fondo",children:Object(r.jsx)("div",{className:"row",children:t.english?e.map((function(e){return Object(r.jsx)("div",{className:"col-md-4 pt-3 pb-3",children:Object(r.jsx)(c,{title:e.title,desc:e.descE,imgURL:e.imgURL,children:Object(r.jsx)(b,{onClick:function(){d(!0,e.video)},className:"mt-2",variant:"success",children:"Conocer mas"})})})})):e.map((function(e){return Object(r.jsx)("div",{className:"col-md-4 pt-3 pb-3",children:Object(r.jsx)(c,{title:e.title,desc:e.descS,imgURL:e.imgURL,children:Object(r.jsx)(b,{onClick:function(){d(!0,e.video)},className:"mt-2",variant:"success",children:"Conocer mas"})})})}))})})})}},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===i)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},"W5Y+":function(e,t,n){"use strict";var r=n("q1tI"),a=Object(r.createContext)(null);t.a=a},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),i=n("W8MJ"),o=(n("PJYZ"),n("7W2i")),c=n("a1gu"),s=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){o(n,e);var t=u(n);function n(e){var i;return a(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},YFqc:function(e,t,n){e.exports=n("cTJO")},ZCiN:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("q1tI");var a=function(e){var t=Object(r.useRef)(e);return Object(r.useEffect)((function(){t.current=e}),[e]),t};function i(e){var t=a(e);return Object(r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var i=a(n("q1tI")),o=n("elyg"),c=n("nOHt"),s=n("vNVm"),u={};function l(e,t,n,r){if(e&&(0,o.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),a=n&&n.pathname||"/",f=i.default.useMemo((function(){var t=(0,o.resolveHref)(a,e.href,!0),n=r(t,2),i=n[0],c=n[1];return{href:i,as:e.as?(0,o.resolveHref)(a,e.as):c||i}}),[a,e.href,e.as]),d=f.href,p=f.as,v=e.children,b=e.replace,h=e.shallow,m=e.scroll,j=e.locale;"string"===typeof v&&(v=i.default.createElement("a",null,v));var y=i.Children.only(v),g=y&&"object"===typeof y&&y.ref,x=(0,s.useIntersection)({rootMargin:"200px"}),O=r(x,2),E=O[0],C=O[1],w=i.default.useCallback((function(e){E(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,E]);(0,i.useEffect)((function(){var e=C&&t&&(0,o.isLocalURL)(d),r="undefined"!==typeof j?j:n&&n.locale,a=u[d+"%"+p+(r?"%"+r:"")];e&&!a&&l(n,d,p,{locale:r})}),[p,d,C,j,t,n]);var N={ref:w,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,i,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:i,locale:s,scroll:c}).then((function(e){e&&c&&document.body.focus()})))}(e,n,d,p,b,h,m,j)},onMouseEnter:function(e){(0,o.isLocalURL)(d)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),l(n,d,p,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var S="undefined"!==typeof j?j:n&&n.locale,k=n&&n.isLocaleDomain&&(0,o.getDomainLocale)(p,S,n&&n.locales,n&&n.domainLocales);N.href=k||(0,o.addBasePath)((0,o.addLocale)(p,S,n&&n.defaultLocale))}return i.default.cloneElement(y,N)};t.default=f},dI71:function(e,t,n){"use strict";function r(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}n.d(t,"a",(function(){return r}))},dRu9:function(e,t,n){"use strict";n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return v})),n.d(t,"d",(function(){return b}));var r=n("zLVn"),a=n("dI71"),i=(n("17x9"),n("q1tI")),o=n.n(i),c=n("i8i4"),s=n.n(c),u=!1,l=o.a.createContext(null),f="unmounted",d="exited",p="entering",v="entered",b="exiting",h=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var a,i=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?i?(a=d,r.appearStatus=p):a=v:a=t.unmountOnExit||t.mountOnEnter?f:d,r.state={status:a},r.nextCallback=null,r}Object(a.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===f?{status:d}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==p&&n!==v&&(t=p):n!==p&&n!==v||(t=b)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!==typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===p?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===d&&this.setState({status:f})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,a=this.props.nodeRef?[r]:[s.a.findDOMNode(this),r],i=a[0],o=a[1],c=this.getTimeouts(),l=r?c.appear:c.enter;!e&&!n||u?this.safeSetState({status:v},(function(){t.props.onEntered(i)})):(this.props.onEnter(i,o),this.safeSetState({status:p},(function(){t.props.onEntering(i,o),t.onTransitionEnd(l,(function(){t.safeSetState({status:v},(function(){t.props.onEntered(i,o)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:s.a.findDOMNode(this);t&&!u?(this.props.onExit(r),this.safeSetState({status:b},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:d},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:d},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:s.a.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=a[0],o=a[1];this.props.addEndListener(i,o)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===f)return null;var t=this.props,n=t.children,a=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,Object(r.a)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return o.a.createElement(l.Provider,{value:null},"function"===typeof n?n(e,a):o.a.cloneElement(o.a.Children.only(n),a))},t}(o.a.Component);function m(){}h.contextType=l,h.propTypes={},h.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:m,onEntering:m,onEntered:m,onExit:m,onExiting:m,onExited:m},h.UNMOUNTED=f,h.EXITED=d,h.ENTERING=p,h.ENTERED=v,h.EXITING=b;t.e=h},dZvc:function(e,t,n){"use strict";function r(e){return e&&e.ownerDocument||document}n.d(t,"a",(function(){return r}))},dbZe:function(e,t,n){"use strict";var r=n("RAs/"),a=n("hVfy"),i=n("q1tI"),o=n.n(i),c=n("Qg85");function s(e){return!e||"#"===e.trim()}var u=o.a.forwardRef((function(e,t){var n=e.as,i=void 0===n?"a":n,u=e.disabled,l=e.onKeyDown,f=Object(a.a)(e,["as","disabled","onKeyDown"]),d=function(e){var t=f.href,n=f.onClick;(u||s(t))&&e.preventDefault(),u?e.stopPropagation():n&&n(e)};return s(f.href)&&(f.role=f.role||"button",f.href=f.href||"#"),u&&(f.tabIndex=-1,f["aria-disabled"]=!0),o.a.createElement(i,Object(r.a)({ref:t},f,{onClick:d,onKeyDown:Object(c.a)((function(e){" "===e.key&&(e.preventDefault(),d(e))}),l)}))}));u.displayName="SafeAnchor",t.a=u},g4pe:function(e,t,n){e.exports=n("8Kt/")},hVfy:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lcWJ:function(e,t,n){"use strict";var r=n("q1tI"),a=function(e){return e&&"function"!==typeof e?function(t){e.current=t}:e};t.a=function(e,t){return Object(r.useMemo)((function(){return function(e,t){var n=a(e),r=a(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},pvIh:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,a,i,o){var c=a||"<<anonymous>>",s=o||r;if(null==n[r])return t?new Error("Required "+i+" `"+s+"` was not specified in `"+c+"`."):null;for(var u=arguments.length,l=Array(u>6?u-6:0),f=6;f<u;f++)l[f-6]=arguments[f];return e.apply(void 0,[n,r,c,i,s].concat(l))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!o,s=(0,a.useRef)(),u=(0,a.useState)(!1),l=r(u,2),f=l[0],d=l[1],p=(0,a.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,i=r.observer,o=r.elements;return o.set(e,t),i.observe(e),function(){o.delete(e),i.unobserve(e),0===o.size&&(i.disconnect(),c.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,a.useEffect)((function(){if(!o&&!f){var e=(0,i.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[f]),[p,f]};var a=n("q1tI"),i=n("0G5g"),o="undefined"!==typeof IntersectionObserver;var c=new Map},vUet:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("RAs/");var r=n("q1tI"),a=n.n(r),i=a.a.createContext({});i.Consumer,i.Provider;function o(e,t){var n=Object(r.useContext)(i);return e||n[t]||t}},wsUu:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("7j6X"),a=n("GEtZ");function i(e,t,n){void 0===n&&(n=5);var r=!1,i=setTimeout((function(){r||function(e,t,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!0),e){var a=document.createEvent("HTMLEvents");a.initEvent(t,n,r),e.dispatchEvent(a)}}(e,"transitionend",!0)}),t+n),o=Object(a.a)(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(i),o()}}function o(e,t,n,o){null==n&&(n=function(e){var t=Object(r.a)(e,"transitionDuration")||"",n=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*n}(e)||0);var c=i(e,n,o),s=Object(a.a)(e,"transitionend",t);return function(){c(),s()}}function c(e,t){var n=Object(r.a)(e,t)||"",a=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*a}function s(e,t){var n=c(e,"transitionDuration"),r=c(e,"transitionDelay"),a=o(e,(function(n){n.target===e&&(a(),t(n))}),n+r)}},y8DL:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var a=n("zLVn"),i=n("q1tI");n("QLaP");function o(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function c(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function s(e,t,n){var r=Object(i.useRef)(void 0!==e),a=Object(i.useState)(t),o=a[0],c=a[1],s=void 0!==e,u=r.current;return r.current=s,!s&&u&&o!==t&&c(t),[s?e:o,Object(i.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];n&&n.apply(void 0,[e].concat(r)),c(e)}),[n])]}function u(e,t){return Object.keys(t).reduce((function(n,i){var u,l=n,f=l[o(i)],d=l[i],p=Object(a.a)(l,[o(i),i].map(c)),v=t[i],b=s(d,f,e[v]),h=b[0],m=b[1];return r({},p,((u={})[i]=h,u[v]=m,u))}),e)}n("dI71");function l(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function f(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function d(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}l.__suppressDeprecationWarning=!0,f.__suppressDeprecationWarning=!0,d.__suppressDeprecationWarning=!0},"z+q/":function(e,t,n){"use strict";function r(e){e.offsetHeight}n.d(t,"a",(function(){return r}))},zLVn:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))}}]);