(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{2779:function(e,t){var n; /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ !function(){"use strict";var l={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var o=r.apply(null,n);o&&e.push(o)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var s in n)l.call(n,s)&&n[s]&&e.push(s)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0!==(n=(function(){return r}).apply(t,[]))&&(e.exports=n)}()},6570:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(2302)}])},2219:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,l){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1088:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(3903).Z,r=n(5154).Z,i=l(n(2784)),o=n(4e3),s=n(4588),a=n(7003),c=n(7858),u=n(7826),f=n(8599),d=n(2219),p=n(2484);let h=new Set;function x(e,t,n,l){if(o.isLocalURL(t)){if(!l.bypassPrefetchedCheck){let r=void 0!==l.locale?l.locale:"locale"in e?e.locale:void 0,i=t+"%"+n+"%"+r;if(h.has(i))return;h.add(i)}Promise.resolve(e.prefetch(t,n,l)).catch(e=>{})}}function m(e){return"string"==typeof e?e:s.formatUrl(e)}let v=i.default.forwardRef(function(e,t){let n,l;let{href:s,as:h,children:v,prefetch:j,passHref:g,replace:y,shallow:b,scroll:w,locale:_,onClick:M,onMouseEnter:N,onTouchStart:L,legacyBehavior:E=!1}=e,S=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=v,E&&("string"==typeof n||"number"==typeof n)&&(n=i.default.createElement("a",null,n));let C=!1!==j,P=i.default.useContext(c.RouterContext),O=i.default.useContext(u.AppRouterContext),T=null!=P?P:O,k=!P,{href:H,as:R}=i.default.useMemo(()=>{if(!P){let e=m(s);return{href:e,as:h?m(h):e}}let[t,n]=o.resolveHref(P,s,!0);return{href:t,as:h?o.resolveHref(P,h):n||t}},[P,s,h]),I=i.default.useRef(H),z=i.default.useRef(R);E&&(l=i.default.Children.only(n));let A=E?l&&"object"==typeof l&&l.ref:t,[D,G,K]=f.useIntersection({rootMargin:"200px"}),U=i.default.useCallback(e=>{(z.current!==R||I.current!==H)&&(K(),z.current=R,I.current=H),D(e),A&&("function"==typeof A?A(e):"object"==typeof A&&(A.current=e))},[R,A,H,K,D]);i.default.useEffect(()=>{T&&G&&C&&x(T,H,R,{locale:_})},[R,H,G,_,C,null==P?void 0:P.locale,T]);let B={ref:U,onClick(e){E||"function"!=typeof M||M(e),E&&l.props&&"function"==typeof l.props.onClick&&l.props.onClick(e),T&&!e.defaultPrevented&&function(e,t,n,l,r,s,a,c,u,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!o.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[r?"replace":"push"](n,l,{shallow:s,locale:c,scroll:a}):t[r?"replace":"push"](l||n,{forceOptimisticNavigation:!f})};u?i.default.startTransition(h):h()}(e,T,H,R,y,b,w,_,k,C)},onMouseEnter(e){E||"function"!=typeof N||N(e),E&&l.props&&"function"==typeof l.props.onMouseEnter&&l.props.onMouseEnter(e),T&&(C||!k)&&x(T,H,R,{locale:_,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){E||"function"!=typeof L||L(e),E&&l.props&&"function"==typeof l.props.onTouchStart&&l.props.onTouchStart(e),T&&(C||!k)&&x(T,H,R,{locale:_,priority:!0,bypassPrefetchedCheck:!0})}};if(!E||g||"a"===l.type&&!("href"in l.props)){let F=void 0!==_?_:null==P?void 0:P.locale,V=(null==P?void 0:P.isLocaleDomain)&&d.getDomainLocale(R,F,null==P?void 0:P.locales,null==P?void 0:P.domainLocales);B.href=V||p.addBasePath(a.addLocale(R,F,null==P?void 0:P.defaultLocale))}return E?i.default.cloneElement(l,B):i.default.createElement("a",Object.assign({},S,B),n)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8599:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:a}=e,c=a||!i,[u,f]=l.useState(!1),[d,p]=l.useState(null);l.useEffect(()=>{if(i){if(!c&&!u&&d&&d.tagName){let e=function(e,t,n){let{id:l,observer:r,elements:i}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},l=s.find(e=>e.root===n.root&&e.margin===n.margin);if(l&&(t=o.get(l)))return t;let r=new Map,i=new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:i,elements:r},s.push(n),o.set(n,t),t}(n);return i.set(e,t),r.observe(e),function(){if(i.delete(e),r.unobserve(e),0===i.size){r.disconnect(),o.delete(l);let t=s.findIndex(e=>e.root===l.root&&e.margin===l.margin);t>-1&&s.splice(t,1)}}}(d,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!u){let l=r.requestIdleCallback(()=>f(!0));return()=>r.cancelIdleCallback(l)}},[d,c,n,t,u]);let h=l.useCallback(()=>{f(!1)},[]);return[p,u,h]};var l=n(2784),r=n(1424);let i="function"==typeof IntersectionObserver,o=new Map,s=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2302:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var l=n(2322);n(6656),n(3615),n(7381);let r=e=>{let{width:t,height:n}=e;return(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",style:{width:t,height:n},children:[(0,l.jsx)("path",{fill:"#5229cb",d:"M512.21 180.5h-295.6l26.64 551.73L512.21 843.5l268.96-111.27 26.64-551.73z"}),(0,l.jsx)("path",{d:"M678.89 395.46L519.3 302.19a14.032 14.032 0 00-14.17 0l-159.59 93.27a10.797 10.797 0 00-5.35 9.33v183.32c0 3.84 2.04 7.39 5.35 9.33l159.59 93.27c4.38 2.56 9.79 2.56 14.17 0l159.59-93.27c3.32-1.94 5.35-5.49 5.35-9.33V404.79c0-3.84-2.03-7.39-5.35-9.33z",fill:"#fff"}),(0,l.jsx)("path",{d:"M623.16 429.23l-106.24-62.09a9.356 9.356 0 00-9.43 0l-106.24 62.09a7.178 7.178 0 00-3.56 6.21v122.03a7.2 7.2 0 003.56 6.21l106.24 62.09c2.91 1.7 6.52 1.7 9.43 0l106.24-62.09a7.178 7.178 0 003.56-6.21V435.44a7.157 7.157 0 00-3.56-6.21z",fill:"#827dfa"})]})};var i=n(9097),o=n.n(i),s=n(2779),a=n.n(s);let c=e=>{let{isActive:t,children:n,href:r,className:i}=e;return(0,l.jsx)(o(),{href:r,className:a()("hover:text-white",t?"text-white":"text-slate-400",i),children:n})};var u=n(5632);let f=[{path:"/docs/getting-started",title:"Getting Started"},{path:"/docs/rules",title:"Rules"},{path:"/playground",title:"Playground"},{path:"https://github.com/yeonjuan/html-eslint",title:"GitHub"}],d=()=>{let{asPath:e}=(0,u.useRouter)();return(0,l.jsxs)("header",{className:"bg-slate-900 text-white flex py-3 pl-3 pr-6 items-center fixed w-full z-50 flex-col text-sm md:flex-row md:text-base",children:[(0,l.jsxs)(o(),{href:"/",className:"flex flex-row items-center",children:[(0,l.jsx)(r,{width:"35px",height:"35px"}),(0,l.jsx)("h2",{children:"HTML ESLint"})]}),(0,l.jsx)("nav",{className:"w-full md:w-auto md:ml-auto",children:(0,l.jsx)("ul",{className:"flex gap-4 justify-around ",children:f.map(t=>(0,l.jsx)("li",{children:(0,l.jsx)(c,{href:t.path,isActive:-1!==e.indexOf(t.path),children:t.title})},t.path))})})]})},p=e=>(0,l.jsx)(c,{href:e.href,className:"text-xs",children:e.children}),h=()=>(0,l.jsx)("footer",{className:"bg-slate-900 text-slate-400 py-4 px-4 md:px-16",children:(0,l.jsxs)("section",{className:"flex justify-between my-4",children:[(0,l.jsxs)("div",{className:"flex-1",children:[(0,l.jsx)("h5",{className:"text-white text-sm",children:"Docs"}),(0,l.jsx)("div",{className:"pl-1",children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(p,{href:"/docs/getting-started",children:"Getting Started"})}),(0,l.jsx)("li",{children:(0,l.jsx)(p,{href:"/docs/rules",children:"Rules"})})]})})]}),(0,l.jsxs)("div",{className:"flex-1",children:[(0,l.jsx)("h5",{className:"text-white text-sm",children:"Playground"}),(0,l.jsx)("div",{className:"pl-1",children:(0,l.jsx)(p,{href:"/playground",children:"Playground"})})]}),(0,l.jsxs)("div",{className:"flex-1",children:[(0,l.jsx)("h5",{className:"text-white text-sm",children:"More"}),(0,l.jsx)("div",{className:"pl-1",children:(0,l.jsx)(p,{href:"/docs/getting-started",children:"GitHub"})})]})]})}),x=e=>{let{children:t}=e;return(0,l.jsxs)("div",{className:"min-h-[100%]",children:[(0,l.jsx)(d,{}),(0,l.jsx)("main",{className:"pt-[60px] px-2 md:px-8",style:{minHeight:"calc(100vh - 132px)"},children:t}),(0,l.jsx)(h,{})]})};var m=n(7729),v=n.n(m);function j(e){let{Component:t,pageProps:n}=e;return(0,l.jsxs)(x,{children:[(0,l.jsxs)(v(),{children:[(0,l.jsx)("title",{children:"HTML ESLint"}),(0,l.jsx)("link",{rel:"shortcut icon",href:"/favicon.png"}),(0,l.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,l.jsx)("meta",{name:"description",content:"ESLint plugin for linting HTML. Find and fix problems in your HTML code"}),(0,l.jsx)("meta",{name:"og:title",content:"ESLint plugin for linting HTML."}),(0,l.jsx)("meta",{name:"og:description",content:"Find and fix problems in your HTML code"}),(0,l.jsx)("meta",{name:"twitter:title",content:"ESLint plugin for linting HTML."}),(0,l.jsx)("meta",{name:"twitter:description",content:"Find and fix problems in your HTML code"})]}),(0,l.jsx)(t,{...n})]})}},7381:function(){},6656:function(){},3615:function(){},7729:function(e,t,n){e.exports=n(7016)},9097:function(e,t,n){e.exports=n(1088)},5632:function(e,t,n){e.exports=n(2203)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6570),t(2203)}),_N_E=e.O()}]);