(this["webpackJsonpopen-react-template"]=this["webpackJsonpopen-react-template"]||[]).push([[0],{13:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-06.6a177696.svg"},23:function(e,t,a){e.exports=a(40)},33:function(e,t,a){e.exports=a.p+"static/media/logo.2810a88b.svg"},34:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-01.0f9928d7.svg"},35:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-02.bd39f304.svg"},36:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-03.66f37ba5.svg"},37:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-04.836acd10.svg"},38:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-05.fa9ba00b.svg"},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),n=a(21),c=a.n(n),l=a(3),s=a(6),o=a(4),m=["component","layout"],d=function(e){var t=e.component,a=e.layout,r=Object(o.a)(e,m);return a=void 0===a?function(e){return i.a.createElement(i.a.Fragment,null,e.children)}:a,i.a.createElement(l.a,Object.assign({},r,{render:function(e){return i.a.createElement(a,null,i.a.createElement(t,e))}}))},u=a(11),v=a(1),b=a.n(v),h=a(16),E=i.a.forwardRef((function(e,t){var a=Object(r.useState)(window.innerHeight),n=Object(u.a)(a,2),c=n[0],l=n[1],s=Object(r.useState)([]),o=Object(u.a)(s,2),m=o[0],d=o[1],v=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},b=function(){if(!v())for(var e=function(){var e=m[t],a=e.getAttribute("data-reveal-delay"),r=e.getAttribute("data-reveal-offset")?e.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=c-t})(e.getAttribute("data-reveal-container")?e.closest(e.getAttribute("data-reveal-container")):e,r)&&!e.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){e.classList.add("is-revealed")}),a):e.classList.add("is-revealed"))},t=0;t<m.length;t++)e()};Object(r.useImperativeHandle)(t,(function(){return{init:function(){d(document.querySelectorAll("[class*=reveal-]"))}}})),Object(r.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(v()||(window.addEventListener("scroll",f),window.addEventListener("resize",g)),b())}),[m]);var E=function(){v()&&(window.removeEventListener("scroll",f),window.removeEventListener("resize",g))},f=Object(h.throttle)((function(){E(),b()}),30),g=Object(h.throttle)((function(){l(window.innerHeight)}),30);return Object(r.useEffect)((function(){E(),b()}),[c]),i.a.createElement(i.a.Fragment,null,e.children())}));E.propTypes={children:b.a.func.isRequired};var f=E,g=a(14),p=a(2),N=a.n(p),w=a(10),O=["className","src","width","height","alt"],y=function(e){var t=e.className,a=e.src,n=e.width,c=e.height,l=e.alt,s=Object(o.a)(e,O),m=Object(r.useState)(!1),d=Object(u.a)(m,2),v=d[0],b=d[1],h=Object(r.useRef)(null);Object(r.useEffect)((function(){E(h.current)}),[]);var E=function(e){var t,a,r=document.createElement("img");v||(e.style.display="none",e.before(r),r.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),r.width=e.getAttribute("width"),r.height=e.getAttribute("height"),r.style.opacity="0",e.className&&r.classList.add(e.className),r.remove(),e.style.display="")};return i.a.createElement("img",Object.assign({},s,{ref:h,className:t,src:a,width:n,height:c,alt:l,onLoad:function(){b(!0)}}))};y.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var k=y,j=["className"],x=function(e){var t=e.className,r=Object(o.a)(e,j),n=N()("brand",t);return i.a.createElement("div",Object.assign({},r,{className:n}),i.a.createElement("h1",{className:"m-0"},i.a.createElement(w.a,{to:"/"},i.a.createElement(k,{src:a(33),alt:"Open",width:32,height:32}))))},C=["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"],D=function(e){var t=e.className,a=(e.navPosition,e.hideNav),n=e.hideSignin,c=e.bottomOuterDivider,l=e.bottomDivider,s=Object(o.a)(e,C),m=Object(r.useState)(!1),d=Object(u.a)(m,2),v=d[0],b=d[1],h=Object(r.useRef)(null),E=Object(r.useRef)(null);Object(r.useEffect)((function(){return v&&f(),document.addEventListener("keydown",p),document.addEventListener("click",w),function(){document.removeEventListener("keydown",p),document.removeEventListener("click",w),g()}}));var f=function(){document.body.classList.add("off-nav-is-active"),h.current.style.maxHeight=h.current.scrollHeight+"px",b(!0)},g=function(){document.body.classList.remove("off-nav-is-active"),h.current&&(h.current.style.maxHeight=null),b(!1)},p=function(e){v&&27===e.keyCode&&g()},w=function(e){h.current&&v&&!h.current.contains(e.target)&&e.target!==E.current&&g()},O=N()("site-header",c&&"has-bottom-divider",t);return i.a.createElement("header",Object.assign({},s,{className:O}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:N()("site-header-inner",l&&"has-bottom-divider")},i.a.createElement(x,null),!a&&i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{ref:E,className:"header-nav-toggle",onClick:v?g:f},i.a.createElement("span",{className:"screen-reader"},"Menu"),i.a.createElement("span",{className:"hamburger"},i.a.createElement("span",{className:"hamburger-inner"}))),i.a.createElement("nav",{ref:h,className:N()("header-nav",v&&"is-active")},i.a.createElement("div",{className:"header-nav-inner"},!n&&i.a.createElement("ul",{className:"list-reset header-nav-right"},i.a.createElement("li",null,i.a.createElement("a",{target:"_blank",href:"https://t.me/huancapital",className:"button button-primary button-wide-mobile button-sm"},"Contact")))))))))};D.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var S=D,A=["className"],F=function(e){var t=e.className,a=Object(o.a)(e,A),r=N()("footer-nav",t);return i.a.createElement("nav",Object.assign({},a,{className:r}),i.a.createElement("ul",{className:"list-reset"},i.a.createElement("li",null,i.a.createElement(w.a,{to:"#0"},"Contact")),i.a.createElement("li",null,i.a.createElement(w.a,{to:"#0"},"About us")),i.a.createElement("li",null,i.a.createElement(w.a,{to:"#0"},"FAQ's")),i.a.createElement("li",null,i.a.createElement(w.a,{to:"#0"},"Support"))))},L=["className"],M=function(e){var t=e.className,a=Object(o.a)(e,L),r=N()("footer-social",t);return i.a.createElement("div",Object.assign({},a,{className:r}),i.a.createElement("ul",{className:"list-reset"},i.a.createElement("li",null,i.a.createElement("a",{href:"https://www.facebook.com/stockinvestingacademy"},i.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("title",null,"Facebook"),i.a.createElement("path",{d:"M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"})))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://www.facebook.com/stockinvestingacademy"},i.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("title",null,"Twitter"),i.a.createElement("path",{d:"M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"})))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://www.facebook.com/stockinvestingacademy"},i.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("title",null,"Instagram"),i.a.createElement("g",null,i.a.createElement("circle",{cx:"12.145",cy:"3.892",r:"1"}),i.a.createElement("path",{d:"M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"}),i.a.createElement("path",{d:"M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z"})))))))},_=["className","topOuterDivider","topDivider"],T=function(e){var t=e.className,a=e.topOuterDivider,r=e.topDivider,n=Object(o.a)(e,_),c=N()("site-footer center-content-mobile",a&&"has-top-divider",t);return i.a.createElement("footer",Object.assign({},n,{className:c}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:N()("site-footer-inner",r&&"has-top-divider")},i.a.createElement("div",{className:"footer-top space-between text-xxs"},i.a.createElement(x,null),i.a.createElement(M,null)),i.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},i.a.createElement(F,null),i.a.createElement("div",{className:"footer-copyright"},"Made by ",i.a.createElement("a",{href:"https://hocvienstock.com"},"Stock Investing Academy"),". All right reserved")))))};T.defaultProps={topOuterDivider:!1,topDivider:!1};var P=T,B=function(e){var t=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(S,{navPosition:"right",className:"reveal-from-bottom"}),i.a.createElement("main",{className:"site-content"},t),i.a.createElement(P,null))},H=a(8),R={types:{topOuterDivider:b.a.bool,bottomOuterDivider:b.a.bool,topDivider:b.a.bool,bottomDivider:b.a.bool,hasBgColor:b.a.bool,invertColor:b.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},z=(Object(H.a)({},R.types),Object(H.a)({},R.defaults),Object(H.a)(Object(H.a)({},R.types),{},{invertMobile:b.a.bool,invertDesktop:b.a.bool,alignTop:b.a.bool,imageFill:b.a.bool}),Object(H.a)(Object(H.a)({},R.defaults),{},{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1}),{types:Object(H.a)(Object(H.a)({},R.types),{},{pushLeft:b.a.bool}),defaults:Object(H.a)(Object(H.a)({},R.defaults),{},{pushLeft:!1})}),I=["className","data","children","tag"],V=function(e){var t=e.className,a=e.data,r=e.children,n=e.tag,c=Object(o.a)(e,I),l=N()("section-header",t),s=n;return i.a.createElement(i.a.Fragment,null,(a.title||a.paragraph)&&i.a.createElement("div",Object.assign({},c,{className:l}),i.a.createElement("div",{className:"container-xs"},r,a.title&&i.a.createElement(s,{className:N()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&i.a.createElement("p",{className:"m-0"},a.paragraph))))};V.defaultProps={children:null,tag:"h2"};var W=V,U=["className","tag","color","size","loading","wide","wideMobile","disabled"],q=function(e){var t=e.className,a=e.tag,r=e.color,n=e.size,c=e.loading,l=e.wide,s=e.wideMobile,m=e.disabled,d=Object(o.a)(e,U),u=N()("button",r&&"button-".concat(r),n&&"button-".concat(n),c&&"is-loading",l&&"button-block",s&&"button-wide-mobile",t),v=a;return i.a.createElement(v,Object.assign({},d,{className:u,disabled:m}))};q.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var K=q,G=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"],J=Object(H.a)({},z.defaults),Q=function(e){var t=e.className,r=e.topOuterDivider,n=e.bottomOuterDivider,c=e.topDivider,l=e.bottomDivider,s=e.hasBgColor,m=e.invertColor,d=e.pushLeft,u=Object(o.a)(e,G),v=N()("features-tiles section",r&&"has-top-divider",n&&"has-bottom-divider",s&&"has-bg-color",m&&"invert-color",t),b=N()("features-tiles-inner section-inner pt-0",c&&"has-top-divider",l&&"has-bottom-divider"),h=N()("tiles-wrap center-content",d&&"push-left");return i.a.createElement("section",Object.assign({},u,{className:v}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:b},i.a.createElement(W,{data:{title:"OVERVIEW ABOUT LARGE PICTURE",paragraph:"Stock Investing Academy Ecosystem."},className:"center-content"}),i.a.createElement("div",{className:h},i.a.createElement("div",{className:"tiles-item reveal-from-bottom"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(k,{src:a(34),alt:"Features tile icon 01",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement(K,{tag:"a",target:"_blank",color:"dark",wideMobile:!0,href:"https://hocvienstock.com/",className:"mt-0 mb-8"},"Stock Investing Academy"),i.a.createElement("p",{className:"m-0 text-sm"},"Stock Investing Academy. A education flatform about stocks, crypto and forex.")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(k,{src:a(35),alt:"Features tile icon 02",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement(K,{tag:"a",target:"_blank",color:"dark",wideMobile:!0,href:"https://copytrade.hocvienstock.com/",className:"mt-0 mb-8"},"CopyTrading"),i.a.createElement("p",{className:"m-0 text-sm"},"Platform for investors want to copy our Trading.")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(k,{src:a(36),alt:"Features tile icon 03",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement(K,{tag:"a",target:"_blank",color:"dark",wideMobile:!0,href:"https://app.bscexchange.finance/",className:"mt-0 mb-8"},"BscExchange Finance"),i.a.createElement("p",{className:"m-0 text-sm"},"Financial flatform about news, tool, copy trading,....")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(k,{src:a(37),alt:"Features tile icon 04",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement(K,{tag:"a",target:"_blank",color:"dark",wideMobile:!0,href:"http://bandocoin.com/",className:"mt-0 mb-8"},"Blog Social Crypto"),i.a.createElement("p",{className:"m-0 text-sm"},"Blog Social Crypto, sharinng knowledge about crypto, bitcoin, stock and finances.")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(k,{src:a(38),alt:"Features tile icon 05",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement(K,{tag:"a",target:"_blank",color:"dark",wideMobile:!0,href:"https://fimarketcap.com",className:"mt-0 mb-8"},"CoinmarketCap"),i.a.createElement("p",{className:"m-0 text-sm"},"Coin Marketcap, help users can check price coin.")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(k,{src:a(13),alt:"Features tile icon 06",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement(K,{tag:"a",target:"_blank",color:"dark",wideMobile:!0,href:"https://cryptocurrencies.ventures/",className:"mt-0 mb-8"},"Cryptocurrency Ventures"),i.a.createElement("p",{className:"m-0 text-sm"},"Cryptocurrency Ventures")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(k,{src:a(13),alt:"Features tile icon 06",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement(K,{tag:"a",target:"_blank",color:"dark",wideMobile:!0,href:"https://devteam.hocvienstock.com/",className:"mt-0 mb-8"},"Software Company"),i.a.createElement("p",{className:"m-0 text-sm"},"Software Company, we support business to develop their products and get success.")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(k,{src:a(13),alt:"Features tile icon 06",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement(K,{tag:"a",target:"_blank",color:"dark",wideMobile:!0,href:"https://futuretradingcourse.hocvienstock.com/",className:"mt-0 mb-8"},"Future Trading Course"),i.a.createElement("p",{className:"m-0 text-sm"},"Future Trading Course, we provide Courses about coin trading.")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(k,{src:a(13),alt:"Features tile icon 06",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement(K,{tag:"a",target:"_blank",color:"dark",wideMobile:!0,href:"https://www.facebook.com/stockinvestingacademy",className:"mt-0 mb-8"},"Fanpage"),i.a.createElement("p",{className:"m-0 text-sm"},"Stock investing Academy Fanpage.")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(k,{src:a(13),alt:"Features tile icon 06",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement(K,{tag:"a",target:"_blank",color:"dark",wideMobile:!0,href:"#",className:"mt-0 mb-8"},"Exchange Coin"),i.a.createElement("p",{className:"m-0 text-sm"},"Comming Soon"))))))))};Q.defaultProps=J;var $=Q,X=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement($,null))};g.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var Y=function(){var e=Object(r.useRef)(),t=Object(l.f)();return Object(r.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){g.a.set({page:e}),g.a.pageview(e)}(a)}),[t]),i.a.createElement(f,{ref:e,children:function(){return i.a.createElement(l.c,null,i.a.createElement(d,{exact:!0,path:"/",component:X,layout:B}))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(39);var Z=Object(s.a)();c.a.render(i.a.createElement(l.b,{history:Z},i.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.f983c0ae.chunk.js.map