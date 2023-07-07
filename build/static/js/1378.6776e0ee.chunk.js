"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[1378,384,9213,2101],{34564:function(e,a,o){var t=o(1413),i=o(72791),s=o(97948),n=o.n(s),l=o(52007),c=o(62752),r=o(12734),m=o(80184),d={Close:function(e){var a=(0,i.useContext)(r.Z),o=a.customModal,s=a.setCustomModal;return(0,m.jsx)("div",{className:"inline-block".concat(e.className?" ".concat(e.className):""),onClick:function(e){e.target.closest(".ReactModalPortal").classList.remove("open"),setTimeout((function(){s((0,t.Z)((0,t.Z)({},o),{},{el:null,isOpen:!1}))}),100)},children:e.children})},Wrapper:function(e){var a=(0,i.useRef)(null),s=(0,i.useRef)(null),l=(0,i.useContext)(r.Z),d=l.customModal,f=l.setCustomModal,p=function(){a.current.node.classList.remove("open"),setTimeout((function(){f((0,t.Z)((0,t.Z)({},d),{},{el:null,isOpen:!1}))}),100)},b=function(){f((0,t.Z)((0,t.Z)({},d),{},{el:a.current.node,isOpen:!0})),setTimeout((function(){a.current.node.classList.add("open")}),100)};return(0,i.useEffect)((function(){a.current.node.classList.add("custom_modal");var e=function(e){27===e.keyCode&&p()};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[]),(0,i.useEffect)((function(){!0===e.defaultOpen&&setTimeout((function(){Promise.resolve().then(o.bind(o,38480)).then((function(e){"shown"===e.getCookie("litho-promo-popup")?p():b()}))}),200)}),[]),(0,c.Z)(s,p),n().setAppElement("#modal-outer"),(0,m.jsxs)("div",{className:e.className,children:[(0,m.jsx)("span",{className:e.modalBtn&&"inline-block",onClick:b,children:e.modalBtn}),(0,m.jsx)(n(),{className:e.animation,ref:a,isOpen:null!==d.el&&d.el===a.current.node&&!0===d.isOpen,onRequestClose:p,style:{overlay:{background:"rgba(35,35,35,0.93)"},content:{padding:0,border:"none",background:"transparent",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},contentLabel:"Example Modal",shouldCloseOnEsc:!0,parentSelector:function(){return document.body},children:(0,m.jsxs)("div",{className:"modal-outer w-full text-center py-[40px] px-[15px]",children:[!0===e.closeBtnOuter&&(0,m.jsx)("div",{className:"close-btn absolute top-[30px] text-[30px] right-[30px] w-[44px] h-[44px] flex items-center justify-center cursor-pointer text-white landscape:top-[20px] landscape:right-[20px]",onClick:p,children:"\xd7"}),(0,m.jsx)("div",{className:"modal-inner inline-block w-auto max-w-full",ref:s,children:e.children})]})})]})}};d.Wrapper.defaultProps={closeBtnOuter:!0,defaultOpen:!1},d.Wrapper.propTypes={className:l.PropTypes.string,closeBtnOuter:l.PropTypes.bool,defaultOpen:l.PropTypes.bool,children:l.PropTypes.oneOfType([l.PropTypes.arrayOf(l.PropTypes.node),l.PropTypes.node]).isRequired},d.Close.propTypes={className:l.PropTypes.string,children:l.PropTypes.oneOfType([l.PropTypes.arrayOf(l.PropTypes.node),l.PropTypes.node]).isRequired},a.Z=d},59511:function(e,a,o){var t=o(72791),i=o(11087),s=o(47022),n=o(89743),l=o(2677),c=o(29213),r=o(54198),m=o(52101),d=o(90013),f=o(80184),p=[{color:"#828282",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#828282",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#828282",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#828282",link:"https://www.instagram.com/",icon:"fab fa-instagram"}],b=function(e){return(0,f.jsxs)(r.Footer,{theme:e.theme,className:"".concat(e.className?" ".concat(e.className):""),children:[(0,f.jsx)("div",{className:"py-[5%] lg:py-[95px] md:py-[50px]",children:(0,f.jsx)(s.Z,{children:(0,f.jsxs)(n.Z,{children:[(0,f.jsx)(r.default,{data:d.Z.slice(0,2),lg:3,sm:6,className:"xl:px-[15px] md:mb-[40px] xs:mb-[25px]",titleClass:"capitalize"}),(0,f.jsxs)(l.Z,{lg:3,sm:6,className:"xs:mb-[25px]",children:[(0,f.jsx)("span",{className:"mb-[20px] font-serif block font-medium text-themecolor xs:mb-[10px]",children:"Get in touch"}),(0,f.jsx)("p",{className:"w-[85%] mb-[15px]",children:"27 Eden walk eden centre, Orchard view, Paris, France"}),(0,f.jsxs)("div",{children:[(0,f.jsx)("i",{className:"feather-phone-call text-sm mr-[10px] text-themecolor"}),"+1 234 567 8910"]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("i",{className:"feather-mail text-sm mr-[10px] text-themecolor"}),(0,f.jsx)("a",{"aria-label":"mail",href:"mailTo:info@yourdomain.com",children:"info@yourdomain.com"})]})]}),(0,f.jsxs)(l.Z,{lg:3,sm:6,children:[(0,f.jsx)("span",{className:"mb-[20px] font-medium font-serif text-themecolor block xs:mb-[20px]",children:"Follow us on Instagram"}),(0,f.jsxs)("div",{className:"w-full inline-block",children:[(0,f.jsx)(m.default,{total_posts:3}),(0,f.jsxs)("a",{"aria-label":"link",rel:"noreferrer",href:"https://www.instagram.com/",target:"_blank",className:"flex justify-start text-slateblue font-medium text-xs font-serif uppercase mt-[20px] items-center hover:text-white",children:[(0,f.jsx)("i",{className:"fab fa-instagram text-lg mr-[10px] text-gradient bg-gradient-to-r from-[#ff85a6] to-[#b783ff]"}),(0,f.jsx)("span",{className:"inline-block hover:text-white",children:"Follow instagram"})]})]})]})]})})}),(0,f.jsx)("div",{className:"py-[40px] border-t border-[#ffffff1a]",children:(0,f.jsx)(s.Z,{children:(0,f.jsxs)(n.Z,{children:[(0,f.jsx)(l.Z,{md:3,className:"sm:mb-[20px]",children:(0,f.jsx)(i.rU,{"aria-label":"homepage",to:"/",className:"sm:flex sm:justify-center",children:(0,f.jsx)("img",{alt:"logo",src:e.logo,width:"111",height:"36"})})}),(0,f.jsx)(l.Z,{md:6,className:"flex justify-center items-center text-center sm:mb-[20px]",children:(0,f.jsxs)("p",{className:"mb-0",children:["\xa9 ",(new Date).getFullYear()," Litho is Proudly Powered by ",(0,f.jsx)("a",{"aria-label":"themezaa",rel:"noreferrer",href:"https://www.themezaa.com/",className:"hover:text-white",target:"_blank",children:" ThemeZaa"})]})}),(0,f.jsx)(l.Z,{md:3,className:"text-right sm:text-center",children:(0,f.jsx)(c.default,{size:"xs",theme:"social-icon-style-01",className:"justify-end sm:justify-center",iconColor:"dark"===e.theme?"light":"dark",data:p})})]})})})]})};b.defaultProps={data:d.Z,className:"bg-darkgray text-[#828282]",logo:"/assets/img/webp/logo-white.webp",theme:"light"},a.Z=(0,t.memo)(b)},7984:function(e,a,o){o.d(a,{rs:function(){return c},sD:function(){return n},ye:function(){return l}});var t=o(81724),i=RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/),s=RegExp(/^\(?(=.*\d)(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/),n=t.Ry().shape({name:t.Z_().required("Field is required."),email:t.Z_().email("Invalid email.").required("Field is required."),phone:t.Z_().required().matches(i,"Invalid phone")}),l=t.Ry().shape({name:t.Z_().required("Field is required."),email:t.Z_().email("Invalid email.").required("Field is required.")}),c=t.Ry().shape({name:t.Z_().required("Field is required."),email:t.Z_().email("Invalid email.").required("Field is required."),terms_condition:t.O7().oneOf([!0],"Message").required()});t.Ry().shape({name:t.Z_().required("Field is required."),email:t.Z_().email("Invalid email.").required("Field is required."),phone:t.Z_().required().matches(i,"Invalid phone"),comment:t.Z_().required("Field is required.")}),t.Ry().shape({email:t.Z_().email("Invalid email.").required("Field is required."),phone:t.Z_().required().matches(i,"Invalid phone"),terms_condition:t.O7().oneOf([!0],"Message").required()}),t.Ry().shape({email:t.Z_().email("Invalid email.").required("Field is required."),password:t.Z_().required().matches(s,"Invalid password please make sure to make a password that is 6-16 characters long and contains as least 1 uppercase letter, 1 lowercase letter, 1 special character, and 1 number.")})},52101:function(e,a,o){o.r(a);var t=o(29439),i=o(72791),s=o(80184),n=function(e){var a=(0,i.useRef)(),n=(0,i.useState)(!0),l=(0,t.Z)(n,2),c=l[0],r=l[1];return(0,i.useEffect)((function(){Promise.resolve().then(o.bind(o,38480)).then((function(e){e.initializeIsotop(a.current).on("arrangeComplete",(function(){return r(!1)}))}))}),[]),(0,s.jsx)("div",{className:"grid-wrapper mt-[10px]",children:(0,s.jsxs)("ul",{ref:a,className:"instagram-posts grid-container grid grid-3col mx-[-5px] gutter-small".concat(c?" loading":""),children:[(0,s.jsx)("li",{className:"grid-sizer"}),e.data.slice(0,e.total_posts).map((function(e,a){return(0,s.jsx)("li",{className:"grid-item rounded",children:(0,s.jsx)("figure",{className:"relative overflow-hidden rounded-[3px]",children:(0,s.jsxs)("a",{href:e.link,target:"_blank","aria-label":"instagram image",rel:"noreferrer",children:[(0,s.jsx)("img",{height:"112px",width:"112px",alt:"instagram-img",className:"w-full rounded-[3px]",src:e.img}),(0,s.jsx)("i",{className:"fab fa-instagram"})]})})},a)}))]})})};n.defaultProps={data:[{link:"https://www.instagram.com/p/CSMapatMNo8/",img:"https://via.placeholder.com/112x112"},{link:"https://www.instagram.com/p/CSMapatMNo8/",img:"https://via.placeholder.com/112x112"},{link:"https://www.instagram.com/p/CSMapatMNo8/",img:"https://via.placeholder.com/112x112"},{link:"https://www.instagram.com/p/CSMapatMNo8/",img:"https://via.placeholder.com/112x112"},{link:"https://www.instagram.com/p/CSMapatMNo8/",img:"https://via.placeholder.com/112x112"},{link:"https://www.instagram.com/p/CSMapatMNo8/",img:"https://via.placeholder.com/112x112"}],total_posts:6},a.default=(0,i.memo)(n)},28033:function(e,a,o){o.r(a);var t=o(29439),i=o(72791),s=o(2469),n=o(80184),l=function(e){var a=(0,i.useState)(!0),o=(0,t.Z)(a,2),l=o[0],c=o[1];if(l)return(0,n.jsx)(s.Z,{className:"".concat(e.theme).concat(e.className?" ".concat(e.className):""),variant:e.variant,onClose:function(){return c(!1)},dismissible:e.dismissible,children:e.message})};l.defaultProps={className:"",theme:"message-box01"},a.default=(0,i.memo)(l)},384:function(e,a,o){o.r(a);var t=o(72791),i=o(80184),s=function(e){var a=(0,t.useRef)(null);return(0,t.useEffect)((function(){function o(){if(a.current){var o=null===a||void 0===a?void 0:a.current.clientHeight,t=window.innerWidth>=768?o*e.value/100:0;null===a||void 0===a||a.current.style.setProperty("--overlapheight","-".concat(t,"px"))}}window.addEventListener("resize",o);var t=a.current.querySelectorAll("img");t.length>0?t.forEach((function(e){e.addEventListener("load",o)})):o()}),[]),(0,i.jsx)("div",{ref:a,className:"overlap-section".concat(e.className?" ".concat(e.className):""),children:e.children})};s.defaultProps={value:50},a.default=(0,t.memo)(s)},29213:function(e,a,o){o.r(a),o.d(a,{default:function(){return r}});var t=o(1413),i=o(72791),s=o(34290),n=o(96006),l=o(80184),c=function(e){return(0,l.jsx)("ul",{className:"social-icon flex-wrap gap-y-5 p-0 ".concat(e.theme," ").concat(e.size," ").concat(e.iconColor," ").concat(e.className),children:e.data.map((function(a,o){return"social-icon-style-11"!==e.theme?(0,l.jsx)(s.m.li,(0,t.Z)((0,t.Z)({style:{"--social-icon-color":a.color?a.color:"#000"}},(0,t.Z)((0,t.Z)({},e.animation),{},{transition:{delay:o*e.animationDelay}})),{},{children:(0,l.jsxs)("a",{href:a.link,"aria-label":"social icon",target:"_blank",rel:"noreferrer",children:[a.name&&(0,l.jsx)("span",{className:"flex brand-label",children:a.name?a.name:"icon"}),a.icon&&(0,l.jsx)("i",{className:"".concat(a.icon," brand-icon")}),(0,l.jsx)("span",{})]})}),o):(0,l.jsx)(s.m.li,(0,t.Z)((0,t.Z)({style:{"--social-icon-color":a.color?a.color:"#000"}},(0,t.Z)((0,t.Z)({},e.animation),{},{transition:{delay:o*e.animationDelay}})),{},{children:(0,l.jsxs)("a",{href:a.link,"aria-label":"social icon",target:"_blank",rel:"noreferrer",children:[a.socialback&&(0,l.jsx)("div",{className:"social-back",children:(0,l.jsx)("span",{children:a.socialback})}),(0,l.jsxs)("div",{className:"".concat(a.position," social-front grid"),children:[a.icon&&(0,l.jsx)("i",{className:a.icon}),a.name&&(0,l.jsx)("span",{children:a.name?a.name:"icon"})]})]})}),o)}))})};c.defaultProps={data:n.mc,theme:"social-icon-style-01",size:"lg",iconColor:"light",className:"justify-center",animationDelay:.2};var r=(0,i.memo)(c)},96006:function(e,a,o){o.d(a,{Fg:function(){return l},JV:function(){return b},Q6:function(){return r},Tq:function(){return n},X_:function(){return i},Xy:function(){return m},gE:function(){return f},k9:function(){return c},kJ:function(){return d},mc:function(){return t},y:function(){return s},zm:function(){return p}});var t=[{color:"#0038e3",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#0038e3",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#0038e3",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#0038e3",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0038e3",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#0038e3",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#0038e3",link:"https://www.behance.net/",icon:"fab fa-behance"}],i=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],s=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],n=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],l=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],c=[{color:"#0038e3",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#0038e3",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#0038e3",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#0038e3",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0038e3",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#0038e3",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#0038e3",link:"https://www.behance.net/",icon:"fab fa-behance"}],r=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],m=[{name:"FACEBOOK",color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{name:"DRIBBBLE",color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{name:"BEHANCE",color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"},{name:"INSTAGRAM",color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"}],d=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],f=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#007bb6",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],p=[{position:"top-left",name:"FACEBOOK",color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f",socialback:"LIKE US"},{position:"top",name:"TWITTER",color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter",socialback:"FOLLOW US"},{position:"top-left",name:"LINKEDIN",color:"#007bb6",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in",socialback:"JOIN US"},{position:"top-right",name:"GOOGLE",color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g",socialback:"FOLLOW US"}],b=[{color:"#000",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#000",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#000",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#000",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#000",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#000",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#000",link:"https://www.behance.net/",icon:"fab fa-behance"}]},51378:function(e,a,o){o.r(a);var t=o(74165),i=o(15861),s=o(1413),n=o(72791),l=o(2677),c=o(24552),r=o(47022),m=o(89743),d=o(11087),f=o(71856),p=o(92506),b=o(34290),x=o(38392),h=o(17728),u=o(43739),g=o(7984),w=o(28033),k=o(384),j=o(29213),y=o(59511),v=o(34564),N=o(21240),Z=o(38480),F=o(49823),S=o(80184),C=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"}];a.default=function(e){var a=(0,n.useRef)(null);return(0,S.jsxs)("div",{style:e.style,children:[(0,S.jsx)(x.Header,{topSpace:{desktop:!0},type:"reverse-scroll",children:(0,S.jsxs)(x.HeaderNav,{theme:"light",expand:"lg",menu:"light",className:"py-[0px] lg:px-[15px] md:px-0",containerClass:"sm:px-0",children:[(0,S.jsx)(l.Z,{className:"col-auto col-sm-6 col-lg-2 me-auto ps-lg-0",children:(0,S.jsx)(d.rU,{"aria-label":"header logo",className:"flex items-center",to:"/",children:(0,S.jsxs)(c.Z.Brand,{className:"inline-block p-0 m-0",children:[(0,S.jsx)("img",{className:"default-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-fast-blue-black.webp","data-rjs":"/assets/img/webp/logo-fast-blue-black@2x.webp",alt:"logo"}),(0,S.jsx)("img",{className:"alt-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-fast-blue-black.webp","data-rjs":"/assets/img/webp/logo-fast-blue-black@2x.webp",alt:"logo"}),(0,S.jsx)("img",{className:"mobile-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-fast-blue-black.webp","data-rjs":"/assets/img/webp/logo-fast-blue-black@2x.webp",alt:"logo"})]})})}),(0,S.jsx)("div",{className:"col-auto hidden order-last md:block",children:(0,S.jsxs)(c.Z.Toggle,{className:"md:ml-[10px] sm:ml-0",children:[(0,S.jsx)("span",{className:"navbar-toggler-line"}),(0,S.jsx)("span",{className:"navbar-toggler-line"}),(0,S.jsx)("span",{className:"navbar-toggler-line"}),(0,S.jsx)("span",{className:"navbar-toggler-line"})]})}),(0,S.jsx)(c.Z.Collapse,{className:"col-auto px-0 justify-end",children:(0,S.jsx)(x.Menu,(0,s.Z)({},e))}),(0,S.jsxs)(l.Z,{className:"col-auto text-right pe-0",children:[(0,S.jsx)(x.SearchBar,{className:"pr-0 xs:pl-[15px]"}),(0,S.jsx)(x.HeaderLanguage,{className:"xs:pl-[15px]"}),(0,S.jsx)(x.HeaderCart,{className:"xs:pl-[15px]",style:{"--base-color":"#0038e3"}})]})]})}),(0,S.jsx)(F.default,{}),(0,S.jsx)("section",{className:"bg-lightgray py-[40px] sm:py-[30px]",children:(0,S.jsx)(r.Z,{children:(0,S.jsxs)(m.Z,{className:"xs:text-center",children:[(0,S.jsxs)(l.Z,{xl:8,lg:6,className:"flex md:justify-center md:mb-[15px] sm:block sm:text-center sm:mb-[9px]",children:[(0,S.jsx)("h1",{className:"text-lg leading-[28px] text-darkgray font-medium mb-0 font-serif inline-block",children:"Contact us"}),(0,S.jsx)("span",{className:"font-serif text-md leading-[28px] relative pl-[25px] ml-[30px] block sm:p-0 before:absolute before:bg-darkgray before:content-[''] before:h-[12px] before:top-[8px] before:w-[2px] before:left-0 sm:before:hidden sm:ml-0",children:"Short tagline goes here"})]}),(0,S.jsx)(l.Z,{xl:4,lg:6,className:"breadcrumb justify-end px-[15px] text-sm font-serif m-0 md:justify-center",children:(0,S.jsxs)("ul",{children:[(0,S.jsx)("li",{className:"!leading-[30px]",children:(0,S.jsx)(d.rU,{"aria-label":"link for",to:"/",children:"Home"})}),(0,S.jsx)("li",{className:"!leading-[30px]",children:(0,S.jsx)(d.rU,{"aria-label":"link for",to:"#",children:"Pages"})}),(0,S.jsx)("li",{className:"!leading-[30px]",children:"Contact us"})]})})]})})}),(0,S.jsx)("section",{className:"py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]",children:(0,S.jsx)(r.Z,{children:(0,S.jsxs)(m.Z,{className:"row-cols-1 row-cols-lg-4 row-cols-sm-2 md:gap-y-[50px] sm:gap-y-[30px] text-center",children:[(0,S.jsxs)(l.Z,{children:[(0,S.jsx)("i",{className:"line-icon-Geo2-Love text-gradient bg-fastblue text-[32px] mb-[30px] sm:mb-[10px] inline-block md:mb-[15px]"}),(0,S.jsx)("div",{className:"text-darkgray uppercase text-sm font-medium font-serif mb-[10px]",children:"LITHO DESIGN"}),(0,S.jsx)("p",{className:"w-[75%] lg:w-[90%] md:w-[60%] sm:w-[75%] xs:w-full mx-auto",children:"401 Broadway, 24th Floor New York, NY 10013"})]}),(0,S.jsxs)(l.Z,{children:[(0,S.jsx)("i",{className:"line-icon-Headset text-gradient bg-fastblue text-[32px] mb-[30px] sm:mb-[10px] inline-block md:mb-[15px]"}),(0,S.jsx)("div",{className:"text-darkgray uppercase text-sm font-medium font-serif mb-[10px]",children:"Let's Talk"}),(0,S.jsxs)("p",{className:"w-[70%] lg:w-full mx-auto",children:["Phone: 1-800-222-000",(0,S.jsx)("br",{}),"Fax: 1-800-222-002"]})]}),(0,S.jsxs)(l.Z,{children:[(0,S.jsx)("i",{className:"line-icon-Mail-Read text-gradient bg-fastblue text-[32px] mb-[30px] sm:mb-[10px] inline-block md:mb-[15px]"}),(0,S.jsx)("div",{className:"text-darkgray uppercase text-sm font-medium font-serif mb-[10px]",children:"E-MAIL US"}),(0,S.jsxs)("p",{className:"w-[70%] lg:w-full mx-auto",children:[(0,S.jsx)("a",{"aria-label":"mail",href:"mailto:info@yourdomain.com",className:"hover:text-basecolor",children:"info@yourdomain.com"}),(0,S.jsx)("br",{}),(0,S.jsx)("a",{"aria-label":"mail",href:"mailto:hr@yourdomain.com",className:"hover:text-basecolor",children:"hr@yourdomain.com"})]})]}),(0,S.jsxs)(l.Z,{children:[(0,S.jsx)("i",{className:"line-icon-Information text-gradient bg-fastblue text-[32px] mb-[30px] sm:mb-[10px] inline-block md:mb-[15px]"}),(0,S.jsx)("div",{className:"text-darkgray uppercase text-sm font-medium font-serif mb-[10px]",children:"CUSTOMER SERVICES"}),(0,S.jsx)("p",{className:"w-[75%] lg:w-full md:w-[60%] sm:w-[75%] mx-auto",children:"Lorem ipsum is simply dummy text printing"})]})]})})}),(0,S.jsxs)("section",{className:"pt-[160px] pb-[250px] lg:pt-[120px] md:pt-[95px] md:pb-[220px] sm:py-[80px] xs:py-[50px] relative bg-cover overflow-hidden bg-center bg-no-repeat bg-fixed lg:bg-local",style:{backgroundImage:"url(https://via.placeholder.com/1920x1099)"},children:[(0,S.jsx)("div",{className:"absolute h-full w-full opacity-80 top-0 left-0 bg-gradient-to-tr from-[#0039e3] via-[#5e28dd] to-[#8600d4]"}),(0,S.jsx)(v.Z.Wrapper,{className:"flex relative h-full w-full items-center justify-center",modalBtn:(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(u.default,{type:"submit",ariaLabel:"information",className:"btn-sonar border-0 my-0 mx-auto",themeColor:"#fff",color:"#5e28dd",size:"lg",title:(0,S.jsx)("i",{className:"icon-control-play"})}),(0,S.jsx)("span",{className:"w-full font-serif font-medium text-xmd block uppercase text-white mt-[30px]",children:"Be information"})]}),children:(0,S.jsx)("div",{className:"w-[1020px] max-w-full relative rounded mx-auto",children:(0,S.jsx)("div",{className:"fit-video",children:(0,S.jsx)("iframe",{width:"100%",height:"100%",className:"shadow-[0_0_8px_rgba(0,0,0,0.06)]",controls:!0,src:"https://www.youtube.com/embed/g0f_BRYJLJE?autoplay=1",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})})})]}),(0,S.jsx)("section",{className:"bg-lightgray pb-[130px] lg:pb-[90px] md:pb-[75px] sm:py-[50px]",children:(0,S.jsxs)(r.Z,{children:[(0,S.jsx)(b.m.div,(0,s.Z)((0,s.Z)({},N.Ji),{},{transitionDelay:.5,children:(0,S.jsx)(k.default,{value:20,className:"relative p-32 lg:p-[104px] md:p-[60px] sm:p-[55px] xs:px-[22px] xs:py-[44px] shadow-[0_0_30px_rgba(0,0,0,0.1)] bg-white",children:(0,S.jsxs)(m.Z,{className:"justify-center",children:[(0,S.jsxs)(l.Z,{xl:6,lg:7,className:"col-12 text-center mb-[4.5rem] md:mb-12",children:[(0,S.jsx)("span",{className:"font-serif mb-[5px] -tracking-[.5px] text-xmd block",children:"Fill out the form and we'll be in touch soon!"}),(0,S.jsx)("h4",{className:"font-serif font-semibold text-darkgray",children:"How we can help you?"})]}),(0,S.jsx)(l.Z,{className:"col-12",children:(0,S.jsx)(p.J9,{initialValues:{name:"",email:"",phone:"",comment:"",terms_condition:!1},validationSchema:g.rs,onSubmit:function(){var e=(0,i.Z)((0,t.Z)().mark((function e(a,o){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o.setSubmitting(!0),e.next=3,(0,Z.sendEmail)(a);case 3:"success"===e.sent.status&&(0,Z.resetForm)(o);case 5:case"end":return e.stop()}}),e)})));return function(a,o){return e.apply(this,arguments)}}(),children:function(e){var o=e.isSubmitting,t=e.status;return(0,S.jsxs)(p.l0,{ref:a,children:[(0,S.jsxs)(m.Z,{className:"row-cols-1 row-cols-md-2",children:[(0,S.jsxs)(l.Z,{className:"mb-16 sm:mb-[25px]",children:[(0,S.jsx)(h.II,{showErrorMsg:!1,type:"text",name:"name",className:"py-[15px] px-[20px] text-md w-full border-[1px] border-solid border-[#dfdfdf]",labelClass:"mb-[25px]",placeholder:"Your name"}),(0,S.jsx)(h.II,{showErrorMsg:!1,type:"email",name:"email",className:"py-[15px] px-[20px] w-full text-md border-[1px] border-solid border-[#dfdfdf]",labelClass:"mb-[25px]",placeholder:"Your email address"}),(0,S.jsx)(h.II,{showErrorMsg:!1,type:"tel",name:"phone",className:"py-[15px] px-[20px] w-full text-md border-[1px] border-solid border-[#dfdfdf]",placeholder:"Mobile number"})]}),(0,S.jsx)(l.Z,{className:"mb-16 sm:mb-[20px]",children:(0,S.jsx)(h.Kx,{className:"border-[1px] border-solid border-[#dfdfdf] w-full py-[15px] px-[20px] text-md h-[210px] resize-none",rows:"6",name:"comment",placeholder:"Your message"})}),(0,S.jsx)(l.Z,{className:"text-left sm:mb-[20px]",children:(0,S.jsx)(h.XZ,{type:"checkbox",name:"terms_condition",className:"inline-block mt-[4px]",labelClass:"flex items-start",children:(0,S.jsxs)("span",{className:"ml-[10px] text-sm inline-block w-[85%]",children:["I accept the terms & conditions and I understand that my data will be hold securely in accordance with the",(0,S.jsx)(d.rU,{"aria-label":"checkbox",to:"/privacy",target:"_blank",className:"text-darkgray underline hover:text-fastblue",children:" privacy policy"}),"."]})})}),(0,S.jsx)(l.Z,{className:"text-right sm:text-center",children:(0,S.jsx)(u.default,{type:"submit",className:"text-xs tracking-[1px] rounded-none py-[12px] px-[28px] uppercase".concat(o?" loading":""),themeColor:["#b884fd","#fe73a8","b884fd"],size:"md",color:"#fff",title:"Send Message"})})]}),(0,S.jsx)(f.M,{children:t&&(0,S.jsx)(m.Z,{children:(0,S.jsx)(l.Z,{xs:12,children:(0,S.jsx)("div",{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,S.jsx)(w.default,{className:"mt-[20px] py-[10px]",theme:"message-box01",variant:"success",message:"Your message has been sent successfully!"})})})})})]})}})})]})})})),(0,S.jsx)(m.Z,{className:"justify-center",children:(0,S.jsxs)(l.Z,{lg:10,className:"flex flex-row items-center justify-center text-center mt-[7.5rem]",children:[(0,S.jsx)("span",{className:"col-auto w-[40px] h-[1px] bg-darkgray opacity-30"}),(0,S.jsx)("div",{className:"font-serif font-medium text-lg text-darkgray px-[20px] md:text-xmd sm:leading-[22px]",children:"We like to talk and on the strength of that you are invited for a coffee"}),(0,S.jsx)("span",{className:"col-auto w-[40px] h-[1px] bg-darkgray opacity-30"})]})})]})}),(0,S.jsx)("section",{className:"py-[80px] md:py-[40px]",children:(0,S.jsx)(r.Z,{children:(0,S.jsxs)(m.Z,{className:"items-center",children:[(0,S.jsxs)(l.Z,{lg:6,md:7,sm:6,className:"xl:text-start xs:text-center sm:my-[25px] xs:mb-[30px]",children:[(0,S.jsx)("h6",{className:"font-serif text-darkgray font-medium mb-[10px]",children:"Are you ready to work with us?"}),(0,S.jsx)(u.default,{to:"/page/contact-classic",className:"font-medium after:bg-fastblue !leading-[25px] font-serif uppercase btn-link after:h-[2px] md:text-md hover:opacity-50",color:"#0038e3",size:"xl",title:"Start a Project"})]}),(0,S.jsxs)(l.Z,{lg:6,md:5,sm:6,className:"sm:my-[25px] xs:mt-0",children:[(0,S.jsx)("span",{className:"font-serif text-md text-right xs:text-center block mb-[10px]",children:"Connect with social media"}),(0,S.jsx)(j.default,{theme:"social-icon-style-01",size:"sm",iconColor:"dark",className:"justify-end text-end xs:justify-center xs:!text-center",data:C.slice(0,4)})]})]})})}),(0,S.jsx)(y.Z,{theme:"dark",className:"bg-[#262b35] text-slateblue"})]})}},28633:function(e,a,o){o.d(a,{Z:function(){return i}});var t=o(72791);function i(){return(0,t.useState)(null)}},79392:function(e,a,o){o.d(a,{Z:function(){return s}});var t=o(72791),i=o(39007);function s(e,a,o,s){void 0===s&&(s=!1);var n=(0,i.Z)(o);(0,t.useEffect)((function(){var o="function"===typeof e?e():e;return o.addEventListener(a,n,s),function(){return o.removeEventListener(a,n,s)}}),[e])}},16445:function(e,a,o){o.d(a,{Z:function(){return m}});var t=o(29439),i=o(72791),s=(o(28633),o(47904),o(39007));o(79392);o(55746),o(52803);o(49815),new WeakMap;var n=o(15341),l=o(80184),c=["onKeyDown"];var r=i.forwardRef((function(e,a){var o,i=e.onKeyDown,r=function(e,a){if(null==e)return{};var o,t,i={},s=Object.keys(e);for(t=0;t<s.length;t++)o=s[t],a.indexOf(o)>=0||(i[o]=e[o]);return i}(e,c),m=(0,n.FT)(Object.assign({tagName:"a"},r)),d=(0,t.Z)(m,1)[0],f=(0,s.Z)((function(e){d.onKeyDown(e),null==i||i(e)}));return(o=r.href)&&"#"!==o.trim()&&"button"!==r.role?(0,l.jsx)("a",Object.assign({ref:a},r,{onKeyDown:i})):(0,l.jsx)("a",Object.assign({ref:a},r,d,{onKeyDown:f}))}));r.displayName="Anchor";var m=r},2469:function(e,a,o){var t=o(1413),i=o(45987),s=o(81694),n=o.n(s),l=o(72791),c=o(49807),r=o(39007),m=o(16445),d=o(10162),f=o(72709),p=o(80473),b=o(27472),x=o(66543),h=o(80184),u=["bsPrefix","show","closeLabel","closeVariant","className","children","variant","onClose","dismissible","transition"],g=(0,b.Z)("h4");g.displayName="DivStyledAsH4";var w=(0,x.Z)("alert-heading",{Component:g}),k=(0,x.Z)("alert-link",{Component:m.Z}),j=l.forwardRef((function(e,a){var o=(0,c.Ch)(e,{show:"onClose"}),s=o.bsPrefix,l=o.show,m=void 0===l||l,b=o.closeLabel,x=void 0===b?"Close alert":b,g=o.closeVariant,w=o.className,k=o.children,j=o.variant,y=void 0===j?"primary":j,v=o.onClose,N=o.dismissible,Z=o.transition,F=void 0===Z?f.Z:Z,S=(0,i.Z)(o,u),C=(0,d.vE)(s,"alert"),E=(0,r.Z)((function(e){v&&v(!1,e)})),I=!0===F?f.Z:F,L=(0,h.jsxs)("div",(0,t.Z)((0,t.Z)({role:"alert"},I?void 0:S),{},{ref:a,className:n()(w,C,y&&"".concat(C,"-").concat(y),N&&"".concat(C,"-dismissible")),children:[N&&(0,h.jsx)(p.Z,{onClick:E,"aria-label":x,variant:g}),k]}));return I?(0,h.jsx)(I,(0,t.Z)((0,t.Z)({unmountOnExit:!0},S),{},{ref:void 0,in:m,children:L})):m?L:null}));j.displayName="Alert",a.Z=Object.assign(j,{Link:k,Heading:w})}}]);
//# sourceMappingURL=1378.6776e0ee.chunk.js.map