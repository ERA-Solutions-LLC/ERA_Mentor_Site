"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[6117,3739],{43739:function(e,t,s){s.r(t),s.d(t,{default:function(){return d}});var n=s(1413),o=s(72791),a=s(11087),r=s(43360),i=s(80184),l=function(e){var t=e.themeColor&&e.themeColor[0],s=e.themeColor&&e.themeColor[1],o=e.color&&e.color[0],l=e.color&&e.color[1],d={"--gradient-color":"object"===typeof e.themeColor?"linear-gradient(45deg, ".concat(t,", ").concat(s,", ").concat(t,")"):e.themeColor,"--brand-color":"object"===typeof e.themeColor?"linear-gradient(to right, ".concat(t,", ").concat(s,", ").concat(t,")"):e.themeColor,"--text-color":"object"===typeof e.color?"linear-gradient(to right, ".concat(o,", ").concat(l,", ").concat(o,")"):e.color};return e.href||"submit"===e.type?(0,i.jsx)(r.Z,{as:e.href?"a":"submit"===e.type?"button":"a",type:"submit"===e.type?"submit":void 0,style:d,className:"border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""),href:e.href,onClick:e.onClick,disabled:e.disabled,variant:"secondary","aria-label":e.ariaLabel,target:e.target,children:(0,i.jsx)(c,(0,n.Z)({},e))}):(0,i.jsx)(a.rU,{style:d,target:e.target,className:"btn border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""," "),to:e.to?e.to:"#",onClick:e.onClick,"aria-label":e.ariaLabel,children:(0,i.jsx)(c,(0,n.Z)({},e))})},c=function(e){return(0,i.jsxs)(i.Fragment,{children:[e.icon&&"after"!==e.iconPosition&&(0,i.jsx)("i",{className:"".concat(e.icon," left-icon")}),e.title,e.icon&&"after"===e.iconPosition&&(0,i.jsx)("i",{className:"".concat(e.icon," right-icon")}),"btn-link-gradient"===e.theme&&(0,i.jsx)("span",{})]})};l.defaultProps={size:"lg",style:"primary"};var d=(0,o.memo)(l)},34564:function(e,t,s){var n=s(1413),o=s(72791),a=s(97948),r=s.n(a),i=s(52007),l=s(62752),c=s(12734),d=s(80184),m={Close:function(e){var t=(0,o.useContext)(c.Z),s=t.customModal,a=t.setCustomModal;return(0,d.jsx)("div",{className:"inline-block".concat(e.className?" ".concat(e.className):""),onClick:function(e){e.target.closest(".ReactModalPortal").classList.remove("open"),setTimeout((function(){a((0,n.Z)((0,n.Z)({},s),{},{el:null,isOpen:!1}))}),100)},children:e.children})},Wrapper:function(e){var t=(0,o.useRef)(null),a=(0,o.useRef)(null),i=(0,o.useContext)(c.Z),m=i.customModal,p=i.setCustomModal,x=function(){t.current.node.classList.remove("open"),setTimeout((function(){p((0,n.Z)((0,n.Z)({},m),{},{el:null,isOpen:!1}))}),100)},u=function(){p((0,n.Z)((0,n.Z)({},m),{},{el:t.current.node,isOpen:!0})),setTimeout((function(){t.current.node.classList.add("open")}),100)};return(0,o.useEffect)((function(){t.current.node.classList.add("custom_modal");var e=function(e){27===e.keyCode&&x()};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[]),(0,o.useEffect)((function(){!0===e.defaultOpen&&setTimeout((function(){Promise.resolve().then(s.bind(s,38480)).then((function(e){"shown"===e.getCookie("litho-promo-popup")?x():u()}))}),200)}),[]),(0,l.Z)(a,x),r().setAppElement("#modal-outer"),(0,d.jsxs)("div",{className:e.className,children:[(0,d.jsx)("span",{className:e.modalBtn&&"inline-block",onClick:u,children:e.modalBtn}),(0,d.jsx)(r(),{className:e.animation,ref:t,isOpen:null!==m.el&&m.el===t.current.node&&!0===m.isOpen,onRequestClose:x,style:{overlay:{background:"rgba(35,35,35,0.93)"},content:{padding:0,border:"none",background:"transparent",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},contentLabel:"Example Modal",shouldCloseOnEsc:!0,parentSelector:function(){return document.body},children:(0,d.jsxs)("div",{className:"modal-outer w-full text-center py-[40px] px-[15px]",children:[!0===e.closeBtnOuter&&(0,d.jsx)("div",{className:"close-btn absolute top-[30px] text-[30px] right-[30px] w-[44px] h-[44px] flex items-center justify-center cursor-pointer text-white landscape:top-[20px] landscape:right-[20px]",onClick:x,children:"\xd7"}),(0,d.jsx)("div",{className:"modal-inner inline-block w-auto max-w-full",ref:a,children:e.children})]})})]})}};m.Wrapper.defaultProps={closeBtnOuter:!0,defaultOpen:!1},m.Wrapper.propTypes={className:i.PropTypes.string,closeBtnOuter:i.PropTypes.bool,defaultOpen:i.PropTypes.bool,children:i.PropTypes.oneOfType([i.PropTypes.arrayOf(i.PropTypes.node),i.PropTypes.node]).isRequired},m.Close.propTypes={className:i.PropTypes.string,children:i.PropTypes.oneOfType([i.PropTypes.arrayOf(i.PropTypes.node),i.PropTypes.node]).isRequired},t.Z=m},62752:function(e,t,s){s.d(t,{Z:function(){return o}});var n=s(72791);function o(e,t){(0,n.useEffect)((function(){var s=function(s){e.current&&!e.current.contains(s.target)&&t(s)};return document.addEventListener("mousedown",s),function(){document.removeEventListener("mousedown",s)}}),[e,t])}},82588:function(e,t,s){s.r(t);var n=s(1413),o=(s(72791),s(47022)),a=s(89743),r=s(2677),i=s(11087),l=s(34290),c=s(43739),d=s(34564),m=s(21240),p=s(80184);t.default=function(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(l.m.section,(0,n.Z)((0,n.Z)({className:"bg-darkgray py-[25px] page-title-small p-[130px] xxs:px-0"},m.Ji),{},{children:(0,p.jsx)(o.Z,{children:(0,p.jsxs)(a.Z,{className:"items-center justify-center",children:[(0,p.jsx)(r.Z,{xl:8,lg:6,children:(0,p.jsx)("h1",{className:"font-serif text-lg text-white font-medium mb-0 md:text-center",children:"Simple modal"})}),(0,p.jsx)(r.Z,{xl:4,lg:6,className:"breadcrumb justify-end text-sm font-serif mb-0 md:mt-[10px] md:justify-center",children:(0,p.jsxs)("ul",{className:"xs:text-center",children:[(0,p.jsx)("li",{children:(0,p.jsx)(i.rU,{to:"/","aria-label":"breadcrumb",className:"hover:text-white",children:"Home"})}),(0,p.jsx)("li",{children:(0,p.jsx)(i.rU,{to:"#","aria-label":"breadcrumb",className:"hover:text-white",children:"Features"})}),(0,p.jsx)("li",{children:"Simple modal"})]})})]})})})),(0,p.jsx)(l.m.section,(0,n.Z)((0,n.Z)({className:"py-[130px] overflow-hidden lg:py-[90px] md:py-[75px] sm:py-[50px]"},m.Ji),{},{children:(0,p.jsx)(o.Z,{children:(0,p.jsxs)(a.Z,{className:"justify-center",children:[(0,p.jsx)(r.Z,{md:12,className:"text-center",children:(0,p.jsx)("h6",{className:"font-serif text-darkgray font-medium",children:"Simple modal popup"})}),(0,p.jsxs)(r.Z,{lg:8,xl:4,md:10,xs:12,className:"text-center flex-col",children:[(0,p.jsx)("h6",{className:"font-light mb-[8%] sm:mb-[30px]",children:"A modal popup disables the usual ways to close popups."}),(0,p.jsx)(d.Z.Wrapper,{modalBtn:(0,p.jsx)(c.default,{type:"submit",className:"btn-fill font-medium rounded font-serif uppercase md:mb-[15px] xs:mb-0",themeColor:"#0038e3",color:"#fff",size:"md",title:"Open Modal"}),closeBtnOuter:!1,children:(0,p.jsx)("div",{className:"w-[500px] sm:w-full justify-center",children:(0,p.jsx)("div",{className:"p-[4.5rem] relative bg-white rounded sm:px-10",children:(0,p.jsxs)("div",{className:"mx-auto text-center modal-popup-main rounded-[6px] sm:px-[2.5rem] xs:px-0",children:[(0,p.jsx)(d.Z.Close,{className:"absolute top-[5px] right-[5px]",children:(0,p.jsx)("button",{className:"border-none text-black text-[30px] w-[44px] h-[44px] flex items-center justify-center hover:text-[#333]",children:"\xd7"})}),(0,p.jsx)("span",{className:"text-darkgray uppercase font-serif text-xlg font-semibold mb-[15px] block md:text-lg md:leading-[26px]",children:"Simple Modal Popup"}),(0,p.jsx)("p",{className:"mb-[25px] text-[#828282] xs:mb-[15px]",children:"Lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum has been the industry's standard dummy text ever."}),(0,p.jsx)(d.Z.Close,{children:(0,p.jsx)(c.default,{type:"submit",className:"font-medium font-serif uppercase rounded-none md:mb-[15px] bg-[#fff] hover:text-[#fff]",color:"#000",size:"md",themeColor:"#232323",title:"Dismiss"})})]})})})})]})]})})})),(0,p.jsx)(l.m.section,(0,n.Z)((0,n.Z)({className:"py-[130px] overflow-hidden bg-lightgray md:py-[75px] sm:py-[50px]"},m.Ji),{},{children:(0,p.jsx)(o.Z,{children:(0,p.jsxs)(a.Z,{className:"justify-center",children:[(0,p.jsx)(r.Z,{md:12,className:"text-center",children:(0,p.jsx)("h6",{className:"font-serif text-darkgray font-medium",children:"Dialog with css animation"})}),(0,p.jsxs)(r.Z,{lg:8,xl:6,md:10,xs:12,className:"text-center flex-col",children:[(0,p.jsx)("h6",{className:"font-light mb-[8%] sm:mb-[30px]",children:"Animations are added with simple CSS transitions, you can make them look however you wish."}),(0,p.jsx)(d.Z.Wrapper,{animation:"fade-zoom",closeBtnOuter:!1,modalBtn:(0,p.jsx)(c.default,{type:"submit",className:"btn-fill font-medium rounded font-serif uppercase md:mb-[15px]",themeColor:"#0038e3",color:"#fff",size:"md",title:"Open with fade-zoom animation"}),children:(0,p.jsx)("div",{className:"w-[500px] sm:w-full justify-center",children:(0,p.jsx)("div",{className:"p-[4.5rem] relative bg-white rounded sm:px-10",children:(0,p.jsxs)("div",{className:"mx-auto text-center rounded-[6px] sm:px-[2.5rem] xs:px-0",children:[(0,p.jsx)(d.Z.Close,{className:"absolute top-[5px] right-[5px]",children:(0,p.jsx)("button",{className:"border-none text-black text-[30px] w-[44px] h-[44px] flex items-center justify-center hover:text-[#333]",children:"\xd7"})}),(0,p.jsx)("span",{className:"text-darkgray uppercase font-serif text-xlg font-semibold mb-[15px] block md:text-lg md:leading-[26px]",children:"OPEN WITH FADE-ZOOM ANIMATION "}),(0,p.jsx)("p",{className:"mb-[25px] text-[#828282] xs:px-[15px]",children:"Lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum has been the industry's standard dummy text ever."}),(0,p.jsx)(d.Z.Close,{children:(0,p.jsx)(c.default,{type:"submit",className:"font-medium font-serif uppercase rounded-none md:mb-[15px] bg-[#fff] hover:text-[#fff]",color:"#000",size:"md",themeColor:"#232323",title:"Dismiss"})})]})})})})]})]})})})),(0,p.jsx)(l.m.section,(0,n.Z)((0,n.Z)({className:"py-[130px] overflow-hidden md:py-[75px] sm:py-[50px]"},m.Ji),{},{children:(0,p.jsx)(o.Z,{children:(0,p.jsxs)(a.Z,{className:"justify-center",children:[(0,p.jsx)(r.Z,{md:12,className:"text-center",children:(0,p.jsx)("h6",{className:"font-serif text-darkgray font-medium",children:"Dialog with css animation"})}),(0,p.jsxs)(r.Z,{lg:8,xl:6,md:10,xs:12,className:"text-center flex-col",children:[(0,p.jsx)("h6",{className:"font-light mb-[8%] sm:mb-[30px]",children:"Animations are added with simple CSS transitions, you can make them look however you wish."}),(0,p.jsx)(d.Z.Wrapper,{animation:"rotate-zoom",closeBtnOuter:!1,modalBtn:(0,p.jsx)(c.default,{type:"submit",className:"btn-fill font-medium rounded font-serif uppercase md:mb-[15px]",themeColor:"#0038e3",color:"#fff",size:"md",title:"Open with fade-zoom animation"}),children:(0,p.jsx)("div",{className:"w-[500px] sm:w-full p-[4.5rem] relative bg-white rounded mx-auto sm:px-10",children:(0,p.jsxs)("div",{className:"mx-auto text-center rounded-[6px] sm:px-[2.5rem] xs:px-0",children:[(0,p.jsx)(d.Z.Close,{className:"absolute top-[5px] right-[5px]",children:(0,p.jsx)("button",{className:"border-none text-black text-[30px] w-[44px] h-[44px] flex items-center justify-center hover:text-[#333]",children:"\xd7"})}),(0,p.jsx)("span",{className:"text-darkgray uppercase font-serif text-xlg font-semibold mb-[15px] block md:text-lg md:leading-[26px]",children:"OPEN WITH FADE-ZOOM ANIMATION "}),(0,p.jsx)("p",{className:"mb-[25px] text-[#828282] xs:px-[15px]",children:"Lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum has been the industry's standard dummy text ever."}),(0,p.jsx)(d.Z.Close,{children:(0,p.jsx)(c.default,{type:"submit",className:"font-medium font-serif uppercase rounded-none md:mb-[15px] bg-[#fff] hover:text-[#fff]",color:"#000",size:"md",themeColor:"#232323",title:"Dismiss"})})]})})})]})]})})}))]})}},15341:function(e,t,s){s.d(t,{FT:function(){return i}});var n=s(29439),o=s(72791),a=s(80184),r=["as","disabled"];function i(e){var t=e.tagName,s=e.disabled,n=e.href,o=e.target,a=e.rel,r=e.role,i=e.onClick,l=e.tabIndex,c=void 0===l?0:l,d=e.type;t||(t=null!=n||null!=o||null!=a?"a":"button");var m={tagName:t};if("button"===t)return[{type:d||"button",disabled:s},m];var p=function(e){(s||"a"===t&&function(e){return!e||"#"===e.trim()}(n))&&e.preventDefault(),s?e.stopPropagation():null==i||i(e)};return"a"===t&&(n||(n="#"),s&&(n=void 0)),[{role:null!=r?r:"button",disabled:void 0,tabIndex:s?void 0:c,href:n,target:"a"===t?o:void 0,"aria-disabled":s||void 0,rel:"a"===t?a:void 0,onClick:p,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),p(e))}},m]}var l=o.forwardRef((function(e,t){var s=e.as,o=e.disabled,l=function(e,t){if(null==e)return{};var s,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||(o[s]=e[s]);return o}(e,r),c=i(Object.assign({tagName:s,disabled:o},l)),d=(0,n.Z)(c,2),m=d[0],p=d[1].tagName;return(0,a.jsx)(p,Object.assign({},l,m,{ref:t}))}));l.displayName="Button",t.ZP=l},43360:function(e,t,s){var n=s(1413),o=s(29439),a=s(45987),r=s(81694),i=s.n(r),l=s(72791),c=s(15341),d=s(10162),m=s(80184),p=["as","bsPrefix","variant","size","active","disabled","className"],x=l.forwardRef((function(e,t){var s=e.as,r=e.bsPrefix,l=e.variant,x=void 0===l?"primary":l,u=e.size,f=e.active,h=void 0!==f&&f,b=e.disabled,y=void 0!==b&&b,j=e.className,g=(0,a.Z)(e,p),N=(0,d.vE)(r,"btn"),v=(0,c.FT)((0,n.Z)({tagName:s,disabled:y},g)),Z=(0,o.Z)(v,2),w=Z[0],C=Z[1].tagName;return(0,m.jsx)(C,(0,n.Z)((0,n.Z)((0,n.Z)({},w),g),{},{ref:t,disabled:y,className:i()(j,N,h&&"active",x&&"".concat(N,"-").concat(x),u&&"".concat(N,"-").concat(u),g.href&&y&&"disabled")}))}));x.displayName="Button",t.Z=x}}]);
//# sourceMappingURL=6117.1df5fccf.chunk.js.map