"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[4859,3739],{43739:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var o=n(1413),r=n(72791),a=n(11087),s=n(43360),i=n(80184),l=function(e){var t=e.themeColor&&e.themeColor[0],n=e.themeColor&&e.themeColor[1],r=e.color&&e.color[0],l=e.color&&e.color[1],d={"--gradient-color":"object"===typeof e.themeColor?"linear-gradient(45deg, ".concat(t,", ").concat(n,", ").concat(t,")"):e.themeColor,"--brand-color":"object"===typeof e.themeColor?"linear-gradient(to right, ".concat(t,", ").concat(n,", ").concat(t,")"):e.themeColor,"--text-color":"object"===typeof e.color?"linear-gradient(to right, ".concat(r,", ").concat(l,", ").concat(r,")"):e.color};return e.href||"submit"===e.type?(0,i.jsx)(s.Z,{as:e.href?"a":"submit"===e.type?"button":"a",type:"submit"===e.type?"submit":void 0,style:d,className:"border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""),href:e.href,onClick:e.onClick,disabled:e.disabled,variant:"secondary","aria-label":e.ariaLabel,target:e.target,children:(0,i.jsx)(c,(0,o.Z)({},e))}):(0,i.jsx)(a.rU,{style:d,target:e.target,className:"btn border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""," "),to:e.to?e.to:"#",onClick:e.onClick,"aria-label":e.ariaLabel,children:(0,i.jsx)(c,(0,o.Z)({},e))})},c=function(e){return(0,i.jsxs)(i.Fragment,{children:[e.icon&&"after"!==e.iconPosition&&(0,i.jsx)("i",{className:"".concat(e.icon," left-icon")}),e.title,e.icon&&"after"===e.iconPosition&&(0,i.jsx)("i",{className:"".concat(e.icon," right-icon")}),"btn-link-gradient"===e.theme&&(0,i.jsx)("span",{})]})};l.defaultProps={size:"lg",style:"primary"};var d=(0,r.memo)(l)},34564:function(e,t,n){var o=n(1413),r=n(72791),a=n(97948),s=n.n(a),i=n(52007),l=n(62752),c=n(12734),d=n(80184),u={Close:function(e){var t=(0,r.useContext)(c.Z),n=t.customModal,a=t.setCustomModal;return(0,d.jsx)("div",{className:"inline-block".concat(e.className?" ".concat(e.className):""),onClick:function(e){e.target.closest(".ReactModalPortal").classList.remove("open"),setTimeout((function(){a((0,o.Z)((0,o.Z)({},n),{},{el:null,isOpen:!1}))}),100)},children:e.children})},Wrapper:function(e){var t=(0,r.useRef)(null),a=(0,r.useRef)(null),i=(0,r.useContext)(c.Z),u=i.customModal,m=i.setCustomModal,p=function(){t.current.node.classList.remove("open"),setTimeout((function(){m((0,o.Z)((0,o.Z)({},u),{},{el:null,isOpen:!1}))}),100)},f=function(){m((0,o.Z)((0,o.Z)({},u),{},{el:t.current.node,isOpen:!0})),setTimeout((function(){t.current.node.classList.add("open")}),100)};return(0,r.useEffect)((function(){t.current.node.classList.add("custom_modal");var e=function(e){27===e.keyCode&&p()};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[]),(0,r.useEffect)((function(){!0===e.defaultOpen&&setTimeout((function(){Promise.resolve().then(n.bind(n,38480)).then((function(e){"shown"===e.getCookie("litho-promo-popup")?p():f()}))}),200)}),[]),(0,l.Z)(a,p),s().setAppElement("#modal-outer"),(0,d.jsxs)("div",{className:e.className,children:[(0,d.jsx)("span",{className:e.modalBtn&&"inline-block",onClick:f,children:e.modalBtn}),(0,d.jsx)(s(),{className:e.animation,ref:t,isOpen:null!==u.el&&u.el===t.current.node&&!0===u.isOpen,onRequestClose:p,style:{overlay:{background:"rgba(35,35,35,0.93)"},content:{padding:0,border:"none",background:"transparent",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},contentLabel:"Example Modal",shouldCloseOnEsc:!0,parentSelector:function(){return document.body},children:(0,d.jsxs)("div",{className:"modal-outer w-full text-center py-[40px] px-[15px]",children:[!0===e.closeBtnOuter&&(0,d.jsx)("div",{className:"close-btn absolute top-[30px] text-[30px] right-[30px] w-[44px] h-[44px] flex items-center justify-center cursor-pointer text-white landscape:top-[20px] landscape:right-[20px]",onClick:p,children:"\xd7"}),(0,d.jsx)("div",{className:"modal-inner inline-block w-auto max-w-full",ref:a,children:e.children})]})})]})}};u.Wrapper.defaultProps={closeBtnOuter:!0,defaultOpen:!1},u.Wrapper.propTypes={className:i.PropTypes.string,closeBtnOuter:i.PropTypes.bool,defaultOpen:i.PropTypes.bool,children:i.PropTypes.oneOfType([i.PropTypes.arrayOf(i.PropTypes.node),i.PropTypes.node]).isRequired},u.Close.propTypes={className:i.PropTypes.string,children:i.PropTypes.oneOfType([i.PropTypes.arrayOf(i.PropTypes.node),i.PropTypes.node]).isRequired},t.Z=u},62752:function(e,t,n){n.d(t,{Z:function(){return r}});var o=n(72791);function r(e,t){(0,o.useEffect)((function(){var n=function(n){e.current&&!e.current.contains(n.target)&&t(n)};return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[e,t])}},74859:function(e,t,n){n.r(t);var o=n(1413),r=(n(72791),n(47022)),a=n(89743),s=n(2677),i=n(11087),l=n(34290),c=n(43739),d=n(34564),u=n(21240),m=n(80184);t.default=function(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("section",{className:"bg-darkgray py-[25px] page-title-small p-[130px] xxs:px-0",children:(0,m.jsx)(r.Z,{children:(0,m.jsxs)(a.Z,{className:"items-center justify-center",children:[(0,m.jsx)(s.Z,{xl:8,lg:6,children:(0,m.jsx)("h1",{className:"font-serif text-lg text-white font-medium mb-0 md:text-center",children:"Vimeo video modal"})}),(0,m.jsx)(s.Z,{xl:4,lg:6,className:"breadcrumb justify-end text-sm font-serif mb-0 md:mt-[10px] md:justify-center",children:(0,m.jsxs)("ul",{className:"xs:text-center",children:[(0,m.jsx)("li",{children:(0,m.jsx)(i.rU,{to:"/","aria-label":"breadcrumb",className:"hover:text-white",children:"Home"})}),(0,m.jsx)("li",{children:(0,m.jsx)(i.rU,{to:"#","aria-label":"breadcrumb",className:"hover:text-white",children:"Features"})}),(0,m.jsx)("li",{children:"Vimeo video"})]})})]})})}),(0,m.jsx)(l.m.section,(0,o.Z)((0,o.Z)({className:"py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]"},u.Ji),{},{children:(0,m.jsx)(r.Z,{children:(0,m.jsxs)(a.Z,{className:"justify-center",children:[(0,m.jsx)(s.Z,{md:12,className:"text-center",children:(0,m.jsx)("h6",{className:"font-medium text-darkgray font-serif mb-[25px] lg:mb-[15px]",children:"Popup with Vimeo video"})}),(0,m.jsxs)(s.Z,{xl:5,lg:8,md:10,className:"text-center",children:[(0,m.jsx)("h6",{className:"mb-[8%] font-light lg:mb-[60px] md:mb-[45px] sm:mb-[30px]",children:"In this example lightboxes are automatically disabled on small screen size and default behavior of link is triggered."}),(0,m.jsx)(d.Z.Wrapper,{modalBtn:(0,m.jsx)(c.default,{type:"submit",className:"btn-fill mx-3 font-medium font-serif rounded-[4px] uppercase",themeColor:"#0038e3",color:"#fff",size:"md",title:"Open Vimeo Video"}),children:(0,m.jsx)("div",{className:"w-[1020px] max-w-full relative rounded mx-auto",children:(0,m.jsx)("div",{className:"fit-video",children:(0,m.jsx)("iframe",{width:"100%",height:"100%",controls:!0,src:"//player.vimeo.com/video/75976293?autoplay=1",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})})})]})]})})}))]})}},15341:function(e,t,n){n.d(t,{FT:function(){return i}});var o=n(29439),r=n(72791),a=n(80184),s=["as","disabled"];function i(e){var t=e.tagName,n=e.disabled,o=e.href,r=e.target,a=e.rel,s=e.role,i=e.onClick,l=e.tabIndex,c=void 0===l?0:l,d=e.type;t||(t=null!=o||null!=r||null!=a?"a":"button");var u={tagName:t};if("button"===t)return[{type:d||"button",disabled:n},u];var m=function(e){(n||"a"===t&&function(e){return!e||"#"===e.trim()}(o))&&e.preventDefault(),n?e.stopPropagation():null==i||i(e)};return"a"===t&&(o||(o="#"),n&&(o=void 0)),[{role:null!=s?s:"button",disabled:void 0,tabIndex:n?void 0:c,href:o,target:"a"===t?r:void 0,"aria-disabled":n||void 0,rel:"a"===t?a:void 0,onClick:m,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),m(e))}},u]}var l=r.forwardRef((function(e,t){var n=e.as,r=e.disabled,l=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,s),c=i(Object.assign({tagName:n,disabled:r},l)),d=(0,o.Z)(c,2),u=d[0],m=d[1].tagName;return(0,a.jsx)(m,Object.assign({},l,u,{ref:t}))}));l.displayName="Button",t.ZP=l},43360:function(e,t,n){var o=n(1413),r=n(29439),a=n(45987),s=n(81694),i=n.n(s),l=n(72791),c=n(15341),d=n(10162),u=n(80184),m=["as","bsPrefix","variant","size","active","disabled","className"],p=l.forwardRef((function(e,t){var n=e.as,s=e.bsPrefix,l=e.variant,p=void 0===l?"primary":l,f=e.size,x=e.active,b=void 0!==x&&x,h=e.disabled,y=void 0!==h&&h,v=e.className,g=(0,a.Z)(e,m),j=(0,d.vE)(s,"btn"),N=(0,c.FT)((0,o.Z)({tagName:n,disabled:y},g)),Z=(0,r.Z)(N,2),C=Z[0],w=Z[1].tagName;return(0,u.jsx)(w,(0,o.Z)((0,o.Z)((0,o.Z)({},C),g),{},{ref:t,disabled:y,className:i()(v,j,b&&"active",p&&"".concat(j,"-").concat(p),f&&"".concat(j,"-").concat(f),g.href&&y&&"disabled")}))}));p.displayName="Button",t.Z=p}}]);
//# sourceMappingURL=4859.f6e1b806.chunk.js.map