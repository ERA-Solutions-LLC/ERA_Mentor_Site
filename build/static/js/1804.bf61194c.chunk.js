"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[1804,3739,8033,2403,8316,1409,9523],{43739:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var s=n(1413),a=n(72791),r=n(11087),o=n(43360),i=n(80184),l=function(e){var t=e.themeColor&&e.themeColor[0],n=e.themeColor&&e.themeColor[1],a=e.color&&e.color[0],l=e.color&&e.color[1],d={"--gradient-color":"object"===typeof e.themeColor?"linear-gradient(45deg, ".concat(t,", ").concat(n,", ").concat(t,")"):e.themeColor,"--brand-color":"object"===typeof e.themeColor?"linear-gradient(to right, ".concat(t,", ").concat(n,", ").concat(t,")"):e.themeColor,"--text-color":"object"===typeof e.color?"linear-gradient(to right, ".concat(a,", ").concat(l,", ").concat(a,")"):e.color};return e.href||"submit"===e.type?(0,i.jsx)(o.Z,{as:e.href?"a":"submit"===e.type?"button":"a",type:"submit"===e.type?"submit":void 0,style:d,className:"border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""),href:e.href,onClick:e.onClick,disabled:e.disabled,variant:"secondary","aria-label":e.ariaLabel,target:e.target,children:(0,i.jsx)(c,(0,s.Z)({},e))}):(0,i.jsx)(r.rU,{style:d,target:e.target,className:"btn border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""," "),to:e.to?e.to:"#",onClick:e.onClick,"aria-label":e.ariaLabel,children:(0,i.jsx)(c,(0,s.Z)({},e))})},c=function(e){return(0,i.jsxs)(i.Fragment,{children:[e.icon&&"after"!==e.iconPosition&&(0,i.jsx)("i",{className:"".concat(e.icon," left-icon")}),e.title,e.icon&&"after"===e.iconPosition&&(0,i.jsx)("i",{className:"".concat(e.icon," right-icon")}),"btn-link-gradient"===e.theme&&(0,i.jsx)("span",{})]})};l.defaultProps={size:"lg",style:"primary"};var d=(0,a.memo)(l)},34564:function(e,t,n){var s=n(1413),a=n(72791),r=n(97948),o=n.n(r),i=n(52007),l=n(62752),c=n(12734),d=n(80184),u={Close:function(e){var t=(0,a.useContext)(c.Z),n=t.customModal,r=t.setCustomModal;return(0,d.jsx)("div",{className:"inline-block".concat(e.className?" ".concat(e.className):""),onClick:function(e){e.target.closest(".ReactModalPortal").classList.remove("open"),setTimeout((function(){r((0,s.Z)((0,s.Z)({},n),{},{el:null,isOpen:!1}))}),100)},children:e.children})},Wrapper:function(e){var t=(0,a.useRef)(null),r=(0,a.useRef)(null),i=(0,a.useContext)(c.Z),u=i.customModal,m=i.setCustomModal,p=function(){t.current.node.classList.remove("open"),setTimeout((function(){m((0,s.Z)((0,s.Z)({},u),{},{el:null,isOpen:!1}))}),100)},f=function(){m((0,s.Z)((0,s.Z)({},u),{},{el:t.current.node,isOpen:!0})),setTimeout((function(){t.current.node.classList.add("open")}),100)};return(0,a.useEffect)((function(){t.current.node.classList.add("custom_modal");var e=function(e){27===e.keyCode&&p()};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[]),(0,a.useEffect)((function(){!0===e.defaultOpen&&setTimeout((function(){Promise.resolve().then(n.bind(n,38480)).then((function(e){"shown"===e.getCookie("litho-promo-popup")?p():f()}))}),200)}),[]),(0,l.Z)(r,p),o().setAppElement("#modal-outer"),(0,d.jsxs)("div",{className:e.className,children:[(0,d.jsx)("span",{className:e.modalBtn&&"inline-block",onClick:f,children:e.modalBtn}),(0,d.jsx)(o(),{className:e.animation,ref:t,isOpen:null!==u.el&&u.el===t.current.node&&!0===u.isOpen,onRequestClose:p,style:{overlay:{background:"rgba(35,35,35,0.93)"},content:{padding:0,border:"none",background:"transparent",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},contentLabel:"Example Modal",shouldCloseOnEsc:!0,parentSelector:function(){return document.body},children:(0,d.jsxs)("div",{className:"modal-outer w-full text-center py-[40px] px-[15px]",children:[!0===e.closeBtnOuter&&(0,d.jsx)("div",{className:"close-btn absolute top-[30px] text-[30px] right-[30px] w-[44px] h-[44px] flex items-center justify-center cursor-pointer text-white landscape:top-[20px] landscape:right-[20px]",onClick:p,children:"\xd7"}),(0,d.jsx)("div",{className:"modal-inner inline-block w-auto max-w-full",ref:r,children:e.children})]})})]})}};u.Wrapper.defaultProps={closeBtnOuter:!0,defaultOpen:!1},u.Wrapper.propTypes={className:i.PropTypes.string,closeBtnOuter:i.PropTypes.bool,defaultOpen:i.PropTypes.bool,children:i.PropTypes.oneOfType([i.PropTypes.arrayOf(i.PropTypes.node),i.PropTypes.node]).isRequired},u.Close.propTypes={className:i.PropTypes.string,children:i.PropTypes.oneOfType([i.PropTypes.arrayOf(i.PropTypes.node),i.PropTypes.node]).isRequired},t.Z=u},28033:function(e,t,n){n.r(t);var s=n(29439),a=n(72791),r=n(2469),o=n(80184),i=function(e){var t=(0,a.useState)(!0),n=(0,s.Z)(t,2),i=n[0],l=n[1];if(i)return(0,o.jsx)(r.Z,{className:"".concat(e.theme).concat(e.className?" ".concat(e.className):""),variant:e.variant,onClose:function(){return l(!1)},dismissible:e.dismissible,children:e.message})};i.defaultProps={className:"",theme:"message-box01"},t.default=(0,a.memo)(i)},62752:function(e,t,n){n.d(t,{Z:function(){return a}});var s=n(72791);function a(e,t){(0,s.useEffect)((function(){var n=function(n){e.current&&!e.current.contains(n.target)&&t(n)};return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[e,t])}},41804:function(e,t,n){n.r(t);var s=n(1413),a=n(74165),r=n(15861),o=(n(72791),n(47022)),i=n(89743),l=n(2677),c=n(11087),d=n(34290),u=n(71856),m=n(92506),p=n(81724),f=n(43739),x=n(17728),b=n(34564),h=n(28033),v=n(38480),y=n(21240),g=n(80184);t.default=function(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("section",{className:"bg-darkgray py-[25px] page-title-small p-[130px] xxs:px-0",children:(0,g.jsx)(o.Z,{children:(0,g.jsxs)(i.Z,{className:"items-center justify-center",children:[(0,g.jsx)(l.Z,{xl:8,lg:6,children:(0,g.jsx)("h1",{className:"font-serif text-lg text-white font-medium mb-0 md:text-center",children:"Subscription modal"})}),(0,g.jsx)(l.Z,{xl:4,lg:6,className:"breadcrumb justify-end text-sm font-serif mb-0 md:mt-[10px] md:justify-center",children:(0,g.jsxs)("ul",{className:"xs:text-center",children:[(0,g.jsx)("li",{children:(0,g.jsx)(c.rU,{to:"/","aria-label":"breadcrumb",className:"hover:text-white",children:"Home"})}),(0,g.jsx)("li",{children:(0,g.jsx)(c.rU,{to:"#","aria-label":"breadcrumb",className:"hover:text-white",children:"Features"})}),(0,g.jsx)("li",{children:"Subscription"})]})})]})})}),(0,g.jsx)(d.m.section,(0,s.Z)((0,s.Z)({className:"py-[130px] lg:py-[95px] md:py-[75px] sm:py-[50px]"},y.Ji),{},{children:(0,g.jsx)(o.Z,{children:(0,g.jsxs)(i.Z,{className:"justify-center",children:[(0,g.jsx)(l.Z,{md:12,className:"text-center",children:(0,g.jsx)("h6",{className:"font-serif text-darkgray font-medium",children:"Auto open subscription modal"})}),(0,g.jsxs)(l.Z,{xl:5,lg:8,md:10,className:"text-center",children:[(0,g.jsx)("h6",{className:"font-light mb-[8%] sm:mb-[30px]",children:"This is a simple subscription form and it will be showed after the pre-defined delay once the pages is loaded."}),(0,g.jsx)(b.Z.Wrapper,{defaultOpen:!0,closeBtnIn:!0,className:"subscribe-newsletter-modal",modalBtn:(0,g.jsx)(f.default,{type:"submit",className:"btn-fill font-medium font-serif uppercase md:mb-[15px] rounded-[4px]",themeColor:"#0038e3",color:"#fff",size:"md",title:"Show modal again"}),closeBtnOuter:!1,children:(0,g.jsxs)("div",{className:"bg-white text-left relative overflow-hidden",id:"subscribe-popup",children:[(0,g.jsx)("div",{onClick:function(){var e=document.querySelector("#subscribe-popup").querySelector("#newsletter-off");Promise.resolve().then(n.bind(n,38480)).then((function(t){"shown"!==t.getCookie("litho-promo-popup")&&e.checked&&(document.cookie="litho-promo-popup=shown")}))},className:"absolute top-0 right-0 z-10",children:(0,g.jsx)(b.Z.Close,{className:"close-btn text-white",children:(0,g.jsx)("button",{title:"Close (Esc)",type:"button",className:"border-none text-[30px] w-[44px] h-[44px]",children:"\xd7"})})}),(0,g.jsxs)(i.Z,{className:"justify-center",children:[(0,g.jsxs)(l.Z,{className:"p-24 lg:p-16 xs:p-[3rem]",sm:{span:7,order:1},xs:{span:12,order:2},children:[(0,g.jsx)("span",{className:"text-xlg font-medium text-darkgray block mb-[10px]",children:"Subscribe to newsletter"}),(0,g.jsx)("p",{className:"mb-[30px] xs:mb-[20px]",children:"Subscribe to our newsletters and don't miss new arrivals the latest updates and our latest promotions."}),(0,g.jsx)(m.J9,{initialValues:{email:""},validationSchema:p.Ry().shape({email:p.Z_().email("Invalid email.").required("Field is required.")}),onSubmit:function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t,n){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setSubmitting(!0),e.next=3,(0,v.sendEmail)(t);case 3:"success"===e.sent.status&&(0,v.resetForm)(n);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){var t=e.isSubmitting,n=e.status;return(0,g.jsxs)("div",{className:"relative subscribe-style-05",children:[(0,g.jsxs)(m.l0,{className:"relative mb-[25px]",children:[(0,g.jsx)(x.II,{showErrorMsg:!1,type:"email",name:"email",className:"border-[1px] medium-input border-solid border-[#dfdfdf]",placeholder:"Enter your email address"}),(0,g.jsx)("button",{type:"submit",className:"text-xs tracking-[1px] py-[12px] px-[28px] uppercase xs:text-center".concat(t?" loading":""),children:(0,g.jsx)("i",{className:"far fa-envelope text-darkgray text-sm leading-none xs:mr-0"})})]}),(0,g.jsx)(u.M,{children:n&&(0,g.jsx)(d.m.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"mt-[25px] absolute top-[115%] left-0 w-full",children:(0,g.jsx)(h.default,{className:"rounded-[4px] text-md py-[10px] px-[22px] z-10",theme:"message-box01",variant:"success",message:"Your message has been sent successfully subscribed to our email list!"})})})]})}}),(0,g.jsxs)("label",{htmlFor:"newsletter-off",className:"text-sm checkbox-with-label",children:[(0,g.jsx)("input",{type:"checkbox",id:"newsletter-off"}),(0,g.jsx)("span",{className:"inline-block align-middle w-[15px] h-[15px] mr-[10px] border border-[#d9d9d9] rounded-none relative"}),"Don't show this popup again"]})]}),(0,g.jsx)(l.Z,{sm:{span:5,order:2},xs:{span:12,order:1},className:"bg-cover cover-background xs:h-[150px]",style:{backgroundImage:"url('https://via.placeholder.com/600x802')"}})]})]})})]})]})})}))]})}},28633:function(e,t,n){n.d(t,{Z:function(){return a}});var s=n(72791);function a(){return(0,s.useState)(null)}},79392:function(e,t,n){n.d(t,{Z:function(){return r}});var s=n(72791),a=n(39007);function r(e,t,n,r){void 0===r&&(r=!1);var o=(0,a.Z)(n);(0,s.useEffect)((function(){var n="function"===typeof e?e():e;return n.addEventListener(t,o,r),function(){return n.removeEventListener(t,o,r)}}),[e])}},16445:function(e,t,n){n.d(t,{Z:function(){return d}});var s=n(29439),a=n(72791),r=(n(28633),n(47904),n(39007));n(79392);n(55746),n(52803);n(49815),new WeakMap;var o=n(15341),i=n(80184),l=["onKeyDown"];var c=a.forwardRef((function(e,t){var n,a=e.onKeyDown,c=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,l),d=(0,o.FT)(Object.assign({tagName:"a"},c)),u=(0,s.Z)(d,1)[0],m=(0,r.Z)((function(e){u.onKeyDown(e),null==a||a(e)}));return(n=c.href)&&"#"!==n.trim()&&"button"!==c.role?(0,i.jsx)("a",Object.assign({ref:t},c,{onKeyDown:a})):(0,i.jsx)("a",Object.assign({ref:t},c,u,{onKeyDown:m}))}));c.displayName="Anchor";var d=c},15341:function(e,t,n){n.d(t,{FT:function(){return i}});var s=n(29439),a=n(72791),r=n(80184),o=["as","disabled"];function i(e){var t=e.tagName,n=e.disabled,s=e.href,a=e.target,r=e.rel,o=e.role,i=e.onClick,l=e.tabIndex,c=void 0===l?0:l,d=e.type;t||(t=null!=s||null!=a||null!=r?"a":"button");var u={tagName:t};if("button"===t)return[{type:d||"button",disabled:n},u];var m=function(e){(n||"a"===t&&function(e){return!e||"#"===e.trim()}(s))&&e.preventDefault(),n?e.stopPropagation():null==i||i(e)};return"a"===t&&(s||(s="#"),n&&(s=void 0)),[{role:null!=o?o:"button",disabled:void 0,tabIndex:n?void 0:c,href:s,target:"a"===t?a:void 0,"aria-disabled":n||void 0,rel:"a"===t?r:void 0,onClick:m,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),m(e))}},u]}var l=a.forwardRef((function(e,t){var n=e.as,a=e.disabled,l=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,o),c=i(Object.assign({tagName:n,disabled:a},l)),d=(0,s.Z)(c,2),u=d[0],m=d[1].tagName;return(0,r.jsx)(m,Object.assign({},l,u,{ref:t}))}));l.displayName="Button",t.ZP=l},2469:function(e,t,n){var s=n(1413),a=n(45987),r=n(81694),o=n.n(r),i=n(72791),l=n(49807),c=n(39007),d=n(16445),u=n(10162),m=n(72709),p=n(80473),f=n(27472),x=n(66543),b=n(80184),h=["bsPrefix","show","closeLabel","closeVariant","className","children","variant","onClose","dismissible","transition"],v=(0,f.Z)("h4");v.displayName="DivStyledAsH4";var y=(0,x.Z)("alert-heading",{Component:v}),g=(0,x.Z)("alert-link",{Component:d.Z}),j=i.forwardRef((function(e,t){var n=(0,l.Ch)(e,{show:"onClose"}),r=n.bsPrefix,i=n.show,d=void 0===i||i,f=n.closeLabel,x=void 0===f?"Close alert":f,v=n.closeVariant,y=n.className,g=n.children,j=n.variant,N=void 0===j?"primary":j,Z=n.onClose,w=n.dismissible,k=n.transition,C=void 0===k?m.Z:k,O=(0,a.Z)(n,h),P=(0,u.vE)(r,"alert"),T=(0,c.Z)((function(e){Z&&Z(!1,e)})),E=!0===C?m.Z:C,L=(0,b.jsxs)("div",(0,s.Z)((0,s.Z)({role:"alert"},E?void 0:O),{},{ref:t,className:o()(y,P,N&&"".concat(P,"-").concat(N),w&&"".concat(P,"-dismissible")),children:[w&&(0,b.jsx)(p.Z,{onClick:T,"aria-label":x,variant:v}),g]}));return E?(0,b.jsx)(E,(0,s.Z)((0,s.Z)({unmountOnExit:!0},O),{},{ref:void 0,in:d,children:L})):d?L:null}));j.displayName="Alert",t.Z=Object.assign(j,{Link:g,Heading:y})},43360:function(e,t,n){var s=n(1413),a=n(29439),r=n(45987),o=n(81694),i=n.n(o),l=n(72791),c=n(15341),d=n(10162),u=n(80184),m=["as","bsPrefix","variant","size","active","disabled","className"],p=l.forwardRef((function(e,t){var n=e.as,o=e.bsPrefix,l=e.variant,p=void 0===l?"primary":l,f=e.size,x=e.active,b=void 0!==x&&x,h=e.disabled,v=void 0!==h&&h,y=e.className,g=(0,r.Z)(e,m),j=(0,d.vE)(o,"btn"),N=(0,c.FT)((0,s.Z)({tagName:n,disabled:v},g)),Z=(0,a.Z)(N,2),w=Z[0],k=Z[1].tagName;return(0,u.jsx)(k,(0,s.Z)((0,s.Z)((0,s.Z)({},w),g),{},{ref:t,disabled:v,className:i()(y,j,b&&"active",p&&"".concat(j,"-").concat(p),f&&"".concat(j,"-").concat(f),g.href&&v&&"disabled")}))}));p.displayName="Button",t.Z=p}}]);
//# sourceMappingURL=1804.bf61194c.chunk.js.map