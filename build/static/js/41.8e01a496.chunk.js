"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[41,3739,8033,2403,8316,1409,9523],{43739:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(1413),a=n(72791),o=n(11087),s=n(43360),i=n(80184),l=function(e){var t=e.themeColor&&e.themeColor[0],n=e.themeColor&&e.themeColor[1],a=e.color&&e.color[0],l=e.color&&e.color[1],d={"--gradient-color":"object"===typeof e.themeColor?"linear-gradient(45deg, ".concat(t,", ").concat(n,", ").concat(t,")"):e.themeColor,"--brand-color":"object"===typeof e.themeColor?"linear-gradient(to right, ".concat(t,", ").concat(n,", ").concat(t,")"):e.themeColor,"--text-color":"object"===typeof e.color?"linear-gradient(to right, ".concat(a,", ").concat(l,", ").concat(a,")"):e.color};return e.href||"submit"===e.type?(0,i.jsx)(s.Z,{as:e.href?"a":"submit"===e.type?"button":"a",type:"submit"===e.type?"submit":void 0,style:d,className:"border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""),href:e.href,onClick:e.onClick,disabled:e.disabled,variant:"secondary","aria-label":e.ariaLabel,target:e.target,children:(0,i.jsx)(c,(0,r.Z)({},e))}):(0,i.jsx)(o.rU,{style:d,target:e.target,className:"btn border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""," "),to:e.to?e.to:"#",onClick:e.onClick,"aria-label":e.ariaLabel,children:(0,i.jsx)(c,(0,r.Z)({},e))})},c=function(e){return(0,i.jsxs)(i.Fragment,{children:[e.icon&&"after"!==e.iconPosition&&(0,i.jsx)("i",{className:"".concat(e.icon," left-icon")}),e.title,e.icon&&"after"===e.iconPosition&&(0,i.jsx)("i",{className:"".concat(e.icon," right-icon")}),"btn-link-gradient"===e.theme&&(0,i.jsx)("span",{})]})};l.defaultProps={size:"lg",style:"primary"};var d=(0,a.memo)(l)},34564:function(e,t,n){var r=n(1413),a=n(72791),o=n(97948),s=n.n(o),i=n(52007),l=n(62752),c=n(12734),d=n(80184),u={Close:function(e){var t=(0,a.useContext)(c.Z),n=t.customModal,o=t.setCustomModal;return(0,d.jsx)("div",{className:"inline-block".concat(e.className?" ".concat(e.className):""),onClick:function(e){e.target.closest(".ReactModalPortal").classList.remove("open"),setTimeout((function(){o((0,r.Z)((0,r.Z)({},n),{},{el:null,isOpen:!1}))}),100)},children:e.children})},Wrapper:function(e){var t=(0,a.useRef)(null),o=(0,a.useRef)(null),i=(0,a.useContext)(c.Z),u=i.customModal,m=i.setCustomModal,p=function(){t.current.node.classList.remove("open"),setTimeout((function(){m((0,r.Z)((0,r.Z)({},u),{},{el:null,isOpen:!1}))}),100)},f=function(){m((0,r.Z)((0,r.Z)({},u),{},{el:t.current.node,isOpen:!0})),setTimeout((function(){t.current.node.classList.add("open")}),100)};return(0,a.useEffect)((function(){t.current.node.classList.add("custom_modal");var e=function(e){27===e.keyCode&&p()};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[]),(0,a.useEffect)((function(){!0===e.defaultOpen&&setTimeout((function(){Promise.resolve().then(n.bind(n,38480)).then((function(e){"shown"===e.getCookie("litho-promo-popup")?p():f()}))}),200)}),[]),(0,l.Z)(o,p),s().setAppElement("#modal-outer"),(0,d.jsxs)("div",{className:e.className,children:[(0,d.jsx)("span",{className:e.modalBtn&&"inline-block",onClick:f,children:e.modalBtn}),(0,d.jsx)(s(),{className:e.animation,ref:t,isOpen:null!==u.el&&u.el===t.current.node&&!0===u.isOpen,onRequestClose:p,style:{overlay:{background:"rgba(35,35,35,0.93)"},content:{padding:0,border:"none",background:"transparent",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},contentLabel:"Example Modal",shouldCloseOnEsc:!0,parentSelector:function(){return document.body},children:(0,d.jsxs)("div",{className:"modal-outer w-full text-center py-[40px] px-[15px]",children:[!0===e.closeBtnOuter&&(0,d.jsx)("div",{className:"close-btn absolute top-[30px] text-[30px] right-[30px] w-[44px] h-[44px] flex items-center justify-center cursor-pointer text-white landscape:top-[20px] landscape:right-[20px]",onClick:p,children:"\xd7"}),(0,d.jsx)("div",{className:"modal-inner inline-block w-auto max-w-full",ref:o,children:e.children})]})})]})}};u.Wrapper.defaultProps={closeBtnOuter:!0,defaultOpen:!1},u.Wrapper.propTypes={className:i.PropTypes.string,closeBtnOuter:i.PropTypes.bool,defaultOpen:i.PropTypes.bool,children:i.PropTypes.oneOfType([i.PropTypes.arrayOf(i.PropTypes.node),i.PropTypes.node]).isRequired},u.Close.propTypes={className:i.PropTypes.string,children:i.PropTypes.oneOfType([i.PropTypes.arrayOf(i.PropTypes.node),i.PropTypes.node]).isRequired},t.Z=u},7984:function(e,t,n){n.d(t,{rs:function(){return i},sD:function(){return o},ye:function(){return s}});var r=n(81724),a=RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/),o=r.Ry().shape({name:r.Z_().required("Field is required."),email:r.Z_().email("Invalid email.").required("Field is required."),phone:r.Z_().required().matches(a,"Invalid phone")}),s=r.Ry().shape({name:r.Z_().required("Field is required."),email:r.Z_().email("Invalid email.").required("Field is required.")}),i=r.Ry().shape({name:r.Z_().required("Field is required."),email:r.Z_().email("Invalid email.").required("Field is required."),terms_condition:r.O7().oneOf([!0],"Message").required()});r.Ry().shape({name:r.Z_().required("Field is required."),email:r.Z_().email("Invalid email.").required("Field is required."),phone:r.Z_().required().matches(a,"Invalid phone"),comment:r.Z_().required("Field is required.")})},28033:function(e,t,n){n.r(t);var r=n(29439),a=n(72791),o=n(2469),s=n(80184),i=function(e){var t=(0,a.useState)(!0),n=(0,r.Z)(t,2),i=n[0],l=n[1];if(i)return(0,s.jsx)(o.Z,{className:"".concat(e.theme).concat(e.className?" ".concat(e.className):""),variant:e.variant,onClose:function(){return l(!1)},dismissible:e.dismissible,children:e.message})};i.defaultProps={className:"",theme:"message-box01"},t.default=(0,a.memo)(i)},62752:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(72791);function a(e,t){(0,r.useEffect)((function(){var n=function(n){e.current&&!e.current.contains(n.target)&&t(n)};return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[e,t])}},60041:function(e,t,n){n.r(t);var r=n(74165),a=n(15861),o=n(1413),s=(n(72791),n(47022)),i=n(89743),l=n(2677),c=n(92506),d=n(11087),u=n(34290),m=n(71856),p=n(43739),f=n(34564),x=n(17728),b=n(7984),h=n(28033),v=n(21240),y=n(38480),g=n(80184);t.default=function(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(u.m.section,(0,o.Z)((0,o.Z)({className:"bg-darkgray py-[25px] page-title-small p-[130px] xxs:px-0"},v.Ji),{},{children:(0,g.jsx)(s.Z,{children:(0,g.jsxs)(i.Z,{className:"items-center justify-center",children:[(0,g.jsx)(l.Z,{xl:8,lg:6,children:(0,g.jsx)("h1",{className:"font-serif text-lg text-white font-medium mb-0 md:text-center",children:"Contact form modal"})}),(0,g.jsx)(l.Z,{xl:4,lg:6,className:"breadcrumb justify-end text-sm font-serif mb-0 md:mt-[10px] md:justify-center",children:(0,g.jsxs)("ul",{className:"xs:text-center",children:[(0,g.jsx)("li",{children:(0,g.jsx)(d.rU,{to:"/","aria-label":"breadcrumb",className:"hover:text-white",children:"Home"})}),(0,g.jsx)("li",{children:(0,g.jsx)(d.rU,{to:"#","aria-label":"breadcrumb",className:"hover:text-white",children:"Features"})}),(0,g.jsx)("li",{children:"Contact form"})]})})]})})})),(0,g.jsx)("section",{className:"py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]",children:(0,g.jsx)(s.Z,{children:(0,g.jsxs)(i.Z,{className:"justify-center",children:[(0,g.jsx)(l.Z,{md:12,className:"text-center",children:(0,g.jsx)("h6",{className:"font-medium text-darkgray font-serif mb-[25px] lg:mb-[15px]",children:"Contact form modal"})}),(0,g.jsxs)(l.Z,{xl:4,lg:8,md:10,className:"text-center",children:[(0,g.jsx)("h6",{className:"mb-[8%] font-light lg:mb-[60px] md:mb-[45px] sm:mb-[30px]",children:"We would love to hear about start your new project."}),(0,g.jsx)(f.Z.Wrapper,{modalBtn:(0,g.jsx)(p.default,{type:"submit",className:"btn-fill font-medium rounded font-serif uppercase md:mb-[15px] xs:mb-0",themeColor:"#0038e3",color:"#fff",size:"md",title:"Start New Projects"}),children:(0,g.jsx)("div",{className:"w-[640px] sm:w-full p-[15%] xs:p-[6%] relative bg-white rounded mx-auto",children:(0,g.jsxs)("div",{className:"mx-auto px-0 rounded-[6px] sm:px-[2.5rem]",children:[(0,g.jsx)("h6",{className:"text-darkgray font-medium mb-[35px] xs:text-left xs:mb-[15px]",children:"Looking for a excellent business idea?"}),(0,g.jsx)(c.J9,{initialValues:{name:"",email:"",phone:"",comment:""},validationSchema:b.ye,onSubmit:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setSubmitting(!0),e.next=3,(0,y.sendEmail)(t);case 3:"success"===e.sent.status&&(0,y.resetForm)(n);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){var t=e.isSubmitting,n=e.status;return(0,g.jsxs)(c.l0,{className:"text-left",children:[(0,g.jsx)(x.II,{showErrorMsg:!1,name:"name",type:"text",className:"py-[15px] px-[20px] w-full border-[1px] border-solid border-[#dfdfdf]",placeholder:"Your name",labelClass:"mb-[25px] xs:mb-[10px]"}),(0,g.jsx)(x.II,{showErrorMsg:!1,name:"email",type:"email",className:"py-[15px] px-[20px] w-full border-[1px] border-solid border-[#dfdfdf]",placeholder:"Your email address",labelClass:"mb-[25px] xs:mb-[10px]"}),(0,g.jsx)(x.II,{showErrorMsg:!1,name:"phone",type:"tel",className:"py-[15px] px-[20px] w-full border-[1px] border-solid border-[#dfdfdf]",placeholder:"Mobile number",labelClass:"mb-[25px] xs:mb-[10px]"}),(0,g.jsx)("textarea",{className:"mb-[25px] py-[15px] px-[20px] w-full border-[1px] border-solid border-[#dfdfdf] resize-none xs:mb-[10px]",name:"comment",rows:"5",placeholder:"How can we help you?"}),(0,g.jsx)(p.default,{type:"submit",className:"font-medium font-serif rounded-none uppercase text-[11px]".concat(t?" loading":""),themeColor:["#556fff","#ff798e"],size:"md",color:"#fff",title:"send message"}),(0,g.jsx)(m.M,{children:n&&(0,g.jsx)(u.m.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,g.jsx)(h.default,{className:"mt-[35px] py-[10px]",theme:"message-box01",variant:"success",message:"Your message has been sent successfully!"})})})]})}})]})})})]})]})})})]})}},28633:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(72791);function a(){return(0,r.useState)(null)}},79392:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(72791),a=n(39007);function o(e,t,n,o){void 0===o&&(o=!1);var s=(0,a.Z)(n);(0,r.useEffect)((function(){var n="function"===typeof e?e():e;return n.addEventListener(t,s,o),function(){return n.removeEventListener(t,s,o)}}),[e])}},16445:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(29439),a=n(72791),o=(n(28633),n(47904),n(39007));n(79392);n(55746),n(52803);n(49815),new WeakMap;var s=n(15341),i=n(80184),l=["onKeyDown"];var c=a.forwardRef((function(e,t){var n,a=e.onKeyDown,c=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,l),d=(0,s.FT)(Object.assign({tagName:"a"},c)),u=(0,r.Z)(d,1)[0],m=(0,o.Z)((function(e){u.onKeyDown(e),null==a||a(e)}));return(n=c.href)&&"#"!==n.trim()&&"button"!==c.role?(0,i.jsx)("a",Object.assign({ref:t},c,{onKeyDown:a})):(0,i.jsx)("a",Object.assign({ref:t},c,u,{onKeyDown:m}))}));c.displayName="Anchor";var d=c},15341:function(e,t,n){n.d(t,{FT:function(){return i}});var r=n(29439),a=n(72791),o=n(80184),s=["as","disabled"];function i(e){var t=e.tagName,n=e.disabled,r=e.href,a=e.target,o=e.rel,s=e.role,i=e.onClick,l=e.tabIndex,c=void 0===l?0:l,d=e.type;t||(t=null!=r||null!=a||null!=o?"a":"button");var u={tagName:t};if("button"===t)return[{type:d||"button",disabled:n},u];var m=function(e){(n||"a"===t&&function(e){return!e||"#"===e.trim()}(r))&&e.preventDefault(),n?e.stopPropagation():null==i||i(e)};return"a"===t&&(r||(r="#"),n&&(r=void 0)),[{role:null!=s?s:"button",disabled:void 0,tabIndex:n?void 0:c,href:r,target:"a"===t?a:void 0,"aria-disabled":n||void 0,rel:"a"===t?o:void 0,onClick:m,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),m(e))}},u]}var l=a.forwardRef((function(e,t){var n=e.as,a=e.disabled,l=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,s),c=i(Object.assign({tagName:n,disabled:a},l)),d=(0,r.Z)(c,2),u=d[0],m=d[1].tagName;return(0,o.jsx)(m,Object.assign({},l,u,{ref:t}))}));l.displayName="Button",t.ZP=l},2469:function(e,t,n){var r=n(1413),a=n(45987),o=n(81694),s=n.n(o),i=n(72791),l=n(49807),c=n(39007),d=n(16445),u=n(10162),m=n(72709),p=n(80473),f=n(27472),x=n(66543),b=n(80184),h=["bsPrefix","show","closeLabel","closeVariant","className","children","variant","onClose","dismissible","transition"],v=(0,f.Z)("h4");v.displayName="DivStyledAsH4";var y=(0,x.Z)("alert-heading",{Component:v}),g=(0,x.Z)("alert-link",{Component:d.Z}),j=i.forwardRef((function(e,t){var n=(0,l.Ch)(e,{show:"onClose"}),o=n.bsPrefix,i=n.show,d=void 0===i||i,f=n.closeLabel,x=void 0===f?"Close alert":f,v=n.closeVariant,y=n.className,g=n.children,j=n.variant,Z=void 0===j?"primary":j,N=n.onClose,w=n.dismissible,C=n.transition,k=void 0===C?m.Z:C,O=(0,a.Z)(n,h),P=(0,u.vE)(o,"alert"),q=(0,c.Z)((function(e){N&&N(!1,e)})),T=!0===k?m.Z:k,E=(0,b.jsxs)("div",(0,r.Z)((0,r.Z)({role:"alert"},T?void 0:O),{},{ref:t,className:s()(y,P,Z&&"".concat(P,"-").concat(Z),w&&"".concat(P,"-dismissible")),children:[w&&(0,b.jsx)(p.Z,{onClick:q,"aria-label":x,variant:v}),g]}));return T?(0,b.jsx)(T,(0,r.Z)((0,r.Z)({unmountOnExit:!0},O),{},{ref:void 0,in:d,children:E})):d?E:null}));j.displayName="Alert",t.Z=Object.assign(j,{Link:g,Heading:y})},43360:function(e,t,n){var r=n(1413),a=n(29439),o=n(45987),s=n(81694),i=n.n(s),l=n(72791),c=n(15341),d=n(10162),u=n(80184),m=["as","bsPrefix","variant","size","active","disabled","className"],p=l.forwardRef((function(e,t){var n=e.as,s=e.bsPrefix,l=e.variant,p=void 0===l?"primary":l,f=e.size,x=e.active,b=void 0!==x&&x,h=e.disabled,v=void 0!==h&&h,y=e.className,g=(0,o.Z)(e,m),j=(0,d.vE)(s,"btn"),Z=(0,c.FT)((0,r.Z)({tagName:n,disabled:v},g)),N=(0,a.Z)(Z,2),w=N[0],C=N[1].tagName;return(0,u.jsx)(C,(0,r.Z)((0,r.Z)((0,r.Z)({},w),g),{},{ref:t,disabled:v,className:i()(y,j,b&&"active",p&&"".concat(j,"-").concat(p),f&&"".concat(j,"-").concat(f),g.href&&v&&"disabled")}))}));p.displayName="Button",t.Z=p}}]);
//# sourceMappingURL=41.8e01a496.chunk.js.map