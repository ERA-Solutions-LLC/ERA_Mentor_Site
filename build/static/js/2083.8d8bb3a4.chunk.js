"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[2083,384,9213,2101],{34564:function(e,t,s){var o=s(1413),l=s(72791),a=s(97948),i=s.n(a),n=s(52007),c=s(62752),r=s(12734),m=s(80184),p={Close:function(e){var t=(0,l.useContext)(r.Z),s=t.customModal,a=t.setCustomModal;return(0,m.jsx)("div",{className:"inline-block".concat(e.className?" ".concat(e.className):""),onClick:function(e){e.target.closest(".ReactModalPortal").classList.remove("open"),setTimeout((function(){a((0,o.Z)((0,o.Z)({},s),{},{el:null,isOpen:!1}))}),100)},children:e.children})},Wrapper:function(e){var t=(0,l.useRef)(null),a=(0,l.useRef)(null),n=(0,l.useContext)(r.Z),p=n.customModal,d=n.setCustomModal,f=function(){t.current.node.classList.remove("open"),setTimeout((function(){d((0,o.Z)((0,o.Z)({},p),{},{el:null,isOpen:!1}))}),100)},x=function(){d((0,o.Z)((0,o.Z)({},p),{},{el:t.current.node,isOpen:!0})),setTimeout((function(){t.current.node.classList.add("open")}),100)};return(0,l.useEffect)((function(){t.current.node.classList.add("custom_modal");var e=function(e){27===e.keyCode&&f()};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[]),(0,l.useEffect)((function(){!0===e.defaultOpen&&setTimeout((function(){Promise.resolve().then(s.bind(s,38480)).then((function(e){"shown"===e.getCookie("litho-promo-popup")?f():x()}))}),200)}),[]),(0,c.Z)(a,f),i().setAppElement("#modal-outer"),(0,m.jsxs)("div",{className:e.className,children:[(0,m.jsx)("span",{className:e.modalBtn&&"inline-block",onClick:x,children:e.modalBtn}),(0,m.jsx)(i(),{className:e.animation,ref:t,isOpen:null!==p.el&&p.el===t.current.node&&!0===p.isOpen,onRequestClose:f,style:{overlay:{background:"rgba(35,35,35,0.93)"},content:{padding:0,border:"none",background:"transparent",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},contentLabel:"Example Modal",shouldCloseOnEsc:!0,parentSelector:function(){return document.body},children:(0,m.jsxs)("div",{className:"modal-outer w-full text-center py-[40px] px-[15px]",children:[!0===e.closeBtnOuter&&(0,m.jsx)("div",{className:"close-btn absolute top-[30px] text-[30px] right-[30px] w-[44px] h-[44px] flex items-center justify-center cursor-pointer text-white landscape:top-[20px] landscape:right-[20px]",onClick:f,children:"\xd7"}),(0,m.jsx)("div",{className:"modal-inner inline-block w-auto max-w-full",ref:a,children:e.children})]})})]})}};p.Wrapper.defaultProps={closeBtnOuter:!0,defaultOpen:!1},p.Wrapper.propTypes={className:n.PropTypes.string,closeBtnOuter:n.PropTypes.bool,defaultOpen:n.PropTypes.bool,children:n.PropTypes.oneOfType([n.PropTypes.arrayOf(n.PropTypes.node),n.PropTypes.node]).isRequired},p.Close.propTypes={className:n.PropTypes.string,children:n.PropTypes.oneOfType([n.PropTypes.arrayOf(n.PropTypes.node),n.PropTypes.node]).isRequired},t.Z=p},59511:function(e,t,s){var o=s(72791),l=s(11087),a=s(47022),i=s(89743),n=s(2677),c=s(29213),r=s(54198),m=s(52101),p=s(90013),d=s(80184),f=[{color:"#828282",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#828282",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#828282",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#828282",link:"https://www.instagram.com/",icon:"fab fa-instagram"}],x=function(e){return(0,d.jsxs)(r.Footer,{theme:e.theme,className:"".concat(e.className?" ".concat(e.className):""),children:[(0,d.jsx)("div",{className:"py-[5%] lg:py-[95px] md:py-[50px]",children:(0,d.jsx)(a.Z,{children:(0,d.jsxs)(i.Z,{children:[(0,d.jsx)(r.default,{data:p.Z.slice(0,2),lg:3,sm:6,className:"xl:px-[15px] md:mb-[40px] xs:mb-[25px]",titleClass:"capitalize"}),(0,d.jsxs)(n.Z,{lg:3,sm:6,className:"xs:mb-[25px]",children:[(0,d.jsx)("span",{className:"mb-[20px] font-serif block font-medium text-themecolor xs:mb-[10px]",children:"Get in touch"}),(0,d.jsx)("p",{className:"w-[85%] mb-[15px]",children:"27 Eden walk eden centre, Orchard view, Paris, France"}),(0,d.jsxs)("div",{children:[(0,d.jsx)("i",{className:"feather-phone-call text-sm mr-[10px] text-themecolor"}),"+1 234 567 8910"]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("i",{className:"feather-mail text-sm mr-[10px] text-themecolor"}),(0,d.jsx)("a",{"aria-label":"mail",href:"mailTo:info@yourdomain.com",children:"info@yourdomain.com"})]})]}),(0,d.jsxs)(n.Z,{lg:3,sm:6,children:[(0,d.jsx)("span",{className:"mb-[20px] font-medium font-serif text-themecolor block xs:mb-[20px]",children:"Follow us on Instagram"}),(0,d.jsxs)("div",{className:"w-full inline-block",children:[(0,d.jsx)(m.default,{total_posts:3}),(0,d.jsxs)("a",{"aria-label":"link",rel:"noreferrer",href:"https://www.instagram.com/",target:"_blank",className:"flex justify-start text-slateblue font-medium text-xs font-serif uppercase mt-[20px] items-center hover:text-white",children:[(0,d.jsx)("i",{className:"fab fa-instagram text-lg mr-[10px] text-gradient bg-gradient-to-r from-[#ff85a6] to-[#b783ff]"}),(0,d.jsx)("span",{className:"inline-block hover:text-white",children:"Follow instagram"})]})]})]})]})})}),(0,d.jsx)("div",{className:"py-[40px] border-t border-[#ffffff1a]",children:(0,d.jsx)(a.Z,{children:(0,d.jsxs)(i.Z,{children:[(0,d.jsx)(n.Z,{md:3,className:"sm:mb-[20px]",children:(0,d.jsx)(l.rU,{"aria-label":"homepage",to:"/",className:"sm:flex sm:justify-center",children:(0,d.jsx)("img",{alt:"logo",src:e.logo,width:"111",height:"36"})})}),(0,d.jsx)(n.Z,{md:6,className:"flex justify-center items-center text-center sm:mb-[20px]",children:(0,d.jsxs)("p",{className:"mb-0",children:["\xa9 ",(new Date).getFullYear()," Litho is Proudly Powered by ",(0,d.jsx)("a",{"aria-label":"themezaa",rel:"noreferrer",href:"https://www.themezaa.com/",className:"hover:text-white",target:"_blank",children:" ThemeZaa"})]})}),(0,d.jsx)(n.Z,{md:3,className:"text-right sm:text-center",children:(0,d.jsx)(c.default,{size:"xs",theme:"social-icon-style-01",className:"justify-end sm:justify-center",iconColor:"dark"===e.theme?"light":"dark",data:f})})]})})})]})};x.defaultProps={data:p.Z,className:"bg-darkgray text-[#828282]",logo:"/assets/img/webp/logo-white.webp",theme:"light"},t.Z=(0,o.memo)(x)},52101:function(e,t,s){s.r(t);var o=s(29439),l=s(72791),a=s(80184),i=function(e){var t=(0,l.useRef)(),i=(0,l.useState)(!0),n=(0,o.Z)(i,2),c=n[0],r=n[1];return(0,l.useEffect)((function(){Promise.resolve().then(s.bind(s,38480)).then((function(e){e.initializeIsotop(t.current).on("arrangeComplete",(function(){return r(!1)}))}))}),[]),(0,a.jsx)("div",{className:"grid-wrapper mt-[10px]",children:(0,a.jsxs)("ul",{ref:t,className:"instagram-posts grid-container grid grid-3col mx-[-5px] gutter-small".concat(c?" loading":""),children:[(0,a.jsx)("li",{className:"grid-sizer"}),e.data.slice(0,e.total_posts).map((function(e,t){return(0,a.jsx)("li",{className:"grid-item rounded",children:(0,a.jsx)("figure",{className:"relative overflow-hidden rounded-[3px]",children:(0,a.jsxs)("a",{href:e.link,target:"_blank","aria-label":"instagram image",rel:"noreferrer",children:[(0,a.jsx)("img",{height:"112px",width:"112px",alt:"instagram-img",className:"w-full rounded-[3px]",src:e.img}),(0,a.jsx)("i",{className:"fab fa-instagram"})]})})},t)}))]})})};i.defaultProps={data:[{link:"https://www.instagram.com/p/CSMapatMNo8/",img:"https://via.placeholder.com/112x112"},{link:"https://www.instagram.com/p/CSMapatMNo8/",img:"https://via.placeholder.com/112x112"},{link:"https://www.instagram.com/p/CSMapatMNo8/",img:"https://via.placeholder.com/112x112"},{link:"https://www.instagram.com/p/CSMapatMNo8/",img:"https://via.placeholder.com/112x112"},{link:"https://www.instagram.com/p/CSMapatMNo8/",img:"https://via.placeholder.com/112x112"},{link:"https://www.instagram.com/p/CSMapatMNo8/",img:"https://via.placeholder.com/112x112"}],total_posts:6},t.default=(0,l.memo)(i)},384:function(e,t,s){s.r(t);var o=s(72791),l=s(80184),a=function(e){var t=(0,o.useRef)(null);return(0,o.useEffect)((function(){function s(){if(t.current){var s=null===t||void 0===t?void 0:t.current.clientHeight,o=window.innerWidth>=768?s*e.value/100:0;null===t||void 0===t||t.current.style.setProperty("--overlapheight","-".concat(o,"px"))}}window.addEventListener("resize",s);var o=t.current.querySelectorAll("img");o.length>0?o.forEach((function(e){e.addEventListener("load",s)})):s()}),[]),(0,l.jsx)("div",{ref:t,className:"overlap-section".concat(e.className?" ".concat(e.className):""),children:e.children})};a.defaultProps={value:50},t.default=(0,o.memo)(a)},29213:function(e,t,s){s.r(t),s.d(t,{default:function(){return r}});var o=s(1413),l=s(72791),a=s(34290),i=s(96006),n=s(80184),c=function(e){return(0,n.jsx)("ul",{className:"social-icon flex-wrap gap-y-5 p-0 ".concat(e.theme," ").concat(e.size," ").concat(e.iconColor," ").concat(e.className),children:e.data.map((function(t,s){return"social-icon-style-11"!==e.theme?(0,n.jsx)(a.m.li,(0,o.Z)((0,o.Z)({style:{"--social-icon-color":t.color?t.color:"#000"}},(0,o.Z)((0,o.Z)({},e.animation),{},{transition:{delay:s*e.animationDelay}})),{},{children:(0,n.jsxs)("a",{href:t.link,"aria-label":"social icon",target:"_blank",rel:"noreferrer",children:[t.name&&(0,n.jsx)("span",{className:"flex brand-label",children:t.name?t.name:"icon"}),t.icon&&(0,n.jsx)("i",{className:"".concat(t.icon," brand-icon")}),(0,n.jsx)("span",{})]})}),s):(0,n.jsx)(a.m.li,(0,o.Z)((0,o.Z)({style:{"--social-icon-color":t.color?t.color:"#000"}},(0,o.Z)((0,o.Z)({},e.animation),{},{transition:{delay:s*e.animationDelay}})),{},{children:(0,n.jsxs)("a",{href:t.link,"aria-label":"social icon",target:"_blank",rel:"noreferrer",children:[t.socialback&&(0,n.jsx)("div",{className:"social-back",children:(0,n.jsx)("span",{children:t.socialback})}),(0,n.jsxs)("div",{className:"".concat(t.position," social-front grid"),children:[t.icon&&(0,n.jsx)("i",{className:t.icon}),t.name&&(0,n.jsx)("span",{children:t.name?t.name:"icon"})]})]})}),s)}))})};c.defaultProps={data:i.mc,theme:"social-icon-style-01",size:"lg",iconColor:"light",className:"justify-center",animationDelay:.2};var r=(0,l.memo)(c)},96006:function(e,t,s){s.d(t,{Fg:function(){return n},JV:function(){return x},Q6:function(){return r},Tq:function(){return i},X_:function(){return l},Xy:function(){return m},gE:function(){return d},k9:function(){return c},kJ:function(){return p},mc:function(){return o},y:function(){return a},zm:function(){return f}});var o=[{color:"#0038e3",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#0038e3",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#0038e3",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#0038e3",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0038e3",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#0038e3",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#0038e3",link:"https://www.behance.net/",icon:"fab fa-behance"}],l=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],a=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],i=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],n=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],c=[{color:"#0038e3",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#0038e3",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#0038e3",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#0038e3",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0038e3",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#0038e3",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#0038e3",link:"https://www.behance.net/",icon:"fab fa-behance"}],r=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],m=[{name:"FACEBOOK",color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{name:"DRIBBBLE",color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{name:"BEHANCE",color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"},{name:"INSTAGRAM",color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"}],p=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],d=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#007bb6",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],f=[{position:"top-left",name:"FACEBOOK",color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f",socialback:"LIKE US"},{position:"top",name:"TWITTER",color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter",socialback:"FOLLOW US"},{position:"top-left",name:"LINKEDIN",color:"#007bb6",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in",socialback:"JOIN US"},{position:"top-right",name:"GOOGLE",color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g",socialback:"FOLLOW US"}],x=[{color:"#000",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#000",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#000",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#000",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#000",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#000",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#000",link:"https://www.behance.net/",icon:"fab fa-behance"}]},2083:function(e,t,s){s.r(t);var o=s(1413),l=(s(72791),s(2677)),a=s(24552),i=s(47022),n=s(89743),c=s(11087),r=s(34290),m=s(38616),p=s(38392),d=s(43739),f=s(384),x=s(34564),h=s(59511),b=s(49823),g=s(21240),u=s(80184);t.default=function(e){return(0,u.jsxs)("div",{style:e.style,children:[(0,u.jsx)(p.Header,{topSpace:{md:!0},type:"reverse-scroll",children:(0,u.jsxs)(p.HeaderNav,{theme:"dark",expand:"lg",className:"px-[35px] py-[0px] lg:px-[15px] md:px-0",containerClass:"sm:px-0",children:[(0,u.jsx)(l.Z,{className:"col-auto col-sm-6 col-lg-2 me-auto ps-lg-0",children:(0,u.jsx)(c.rU,{"aria-label":"header logo",className:"flex items-center",to:"/",children:(0,u.jsxs)(a.Z.Brand,{className:"inline-block p-0 m-0",children:[(0,u.jsx)("img",{className:"default-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-white.webp","data-rjs":"/assets/img/webp/logo-white@2x.webp",alt:"logo"}),(0,u.jsx)("img",{className:"alt-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-black.webp","data-rjs":"/assets/img/webp/logo-black@2x.webp",alt:"logo"}),(0,u.jsx)("img",{className:"mobile-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-black.webp","data-rjs":"/assets/img/webp/logo-black@2x.webp",alt:"logo"})]})})}),(0,u.jsx)("div",{className:"col-auto hidden order-last md:block",children:(0,u.jsxs)(a.Z.Toggle,{className:"md:ml-[10px] sm:ml-0",children:[(0,u.jsx)("span",{className:"navbar-toggler-line"}),(0,u.jsx)("span",{className:"navbar-toggler-line"}),(0,u.jsx)("span",{className:"navbar-toggler-line"}),(0,u.jsx)("span",{className:"navbar-toggler-line"})]})}),(0,u.jsx)(a.Z.Collapse,{className:"col-auto pe-0 justify-end",children:(0,u.jsx)(p.Menu,(0,o.Z)({},e))}),(0,u.jsxs)(l.Z,{className:"col-auto text-right pe-0",children:[(0,u.jsx)(p.SearchBar,{className:"pr-0 xs:pl-[15px]"}),(0,u.jsx)(p.HeaderLanguage,{className:"xs:pl-[15px]"}),(0,u.jsx)(p.HeaderCart,{className:"xs:pl-[15px]",style:{"--base-color":"#0038e3"}})]})]})}),(0,u.jsx)(b.default,{}),(0,u.jsx)("section",{className:"p-0 h-[900px] lg:h-[750px] sm:h-[450px] xs:h-[350px] bg-cover flex items-end overflow-hidden relative bg-center",style:{backgroundImage:"url('https://via.placeholder.com/1920x915')"},children:(0,u.jsx)(i.Z,{children:(0,u.jsx)(n.Z,{className:"justify-center",children:(0,u.jsxs)(l.Z,{lg:12,className:"text-center",children:[(0,u.jsx)("img",{height:"",width:"",src:"https://via.placeholder.com/318x500",alt:"",className:"w-25 inline-block"}),(0,u.jsx)("h5",{className:"font-serif text-white mt-20 mb-36 font-semibold uppercase block xs:mt-12 xs:mb-20",children:"Gents club identity"}),(0,u.jsx)("span",{className:"w-[100px] h-[1px] inline-block align-middle bg-[#ff6437] xs:w-[60px] rotate-90"})]})})})}),(0,u.jsx)("section",{className:"overflow-hidden py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]",children:(0,u.jsx)(i.Z,{children:(0,u.jsx)(n.Z,{className:"justify-center",children:(0,u.jsx)(l.Z,{xl:10,children:(0,u.jsxs)(r.m.div,(0,o.Z)((0,o.Z)({},g.Ji),{},{className:"row items-center",children:[(0,u.jsx)(l.Z,{lg:5,md:4,className:"text-center md:text-start sm:mb-[30px]",children:(0,u.jsx)("img",{height:"",width:"",className:"sm:mx-auto",src:"https://via.placeholder.com/291x286",alt:""})}),(0,u.jsxs)(l.Z,{lg:6,md:8,className:"text-center md:text-start",children:[(0,u.jsx)("span",{className:"text-darkgray text-[30px] text-left tracking-[-0.5px] leading-[40px] sm:text-center font-serif inline-block sm:leading-[30px] font-medium mb-[40px] sm:mb-[30px] sm:text-[20px]",children:"Gents club is a eCommerce brand based on London. One of our latest projects."}),(0,u.jsx)(x.Z.Wrapper,{className:"flex sm:justify-center",modalBtn:(0,u.jsxs)("div",{className:"flex items-center",children:[(0,u.jsx)(d.default,{type:"submit",size:"sm",className:"btn-sonar",themeColor:["#232323","#232323"],color:"#ff6437",title:(0,u.jsx)("i",{className:"icon-control-play !ml-[4px]"})}),(0,u.jsx)("span",{className:"font-medium font-serif text-md text-darkgray uppercase cursor-pointer border-b border-solid border-darkgray no-underline ml-[15px] hover:text-darkgray",children:"WATCH A PROJECTS"})]}),children:(0,u.jsx)("div",{className:"w-[1020px] max-w-full relative rounded mx-auto",children:(0,u.jsx)("div",{className:"fit-video",children:(0,u.jsx)("iframe",{width:"100%",height:"100%",className:"shadow-[0_0_8px_rgba(0,0,0,0.06)]",controls:!0,src:"https://www.youtube.com/embed/g0f_BRYJLJE?autoplay=1",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})})})]}),(0,u.jsx)(l.Z,{lg:12,children:(0,u.jsx)("div",{className:"w-full h-[1px] bg-mediumgray opacity-70 my-[6.5rem] sm:my-[5rem]"})}),(0,u.jsx)(l.Z,{className:"font-serif uppercase leading-[12px]",children:(0,u.jsxs)(n.Z,{children:[(0,u.jsxs)(r.m.div,(0,o.Z)((0,o.Z)({},g.Ji),{},{className:"col-12 col-md-3 col-sm-6 text-center font-medium uppercase text-sm leading-[12px] border-r border-mediumgray sm:mb-[30px] xs:border-none",children:[(0,u.jsx)("span",{className:"inline-block md:mb-[10px] md:block font-serif",children:"Date:"}),(0,u.jsx)("span",{className:"text-darkgray font-medium uppercase font-serif",children:" 08 January 2020"})]})),(0,u.jsxs)(r.m.div,(0,o.Z)((0,o.Z)({},(0,o.Z)((0,o.Z)({},g.Ji),{},{transition:{delay:.5}})),{},{className:"col-12 col-md-3 col-sm-6 text-center border-r font-medium uppercase text-sm leading-[12px] border-mediumgray sm:border-none sm:mb-[30px]",children:[(0,u.jsx)("span",{className:"inline-block md:mb-[10px] md:block font-serif",children:"client:"}),(0,u.jsx)("span",{className:"text-darkgray font-medium uppercase font-serif",children:" syrona jarabe de"})]})),(0,u.jsxs)(r.m.div,(0,o.Z)((0,o.Z)({},(0,o.Z)((0,o.Z)({},g.Ji),{},{transition:{delay:.6}})),{},{className:"col-12 col-md-3 col-sm-6 text-center border-r font-medium uppercase text-sm leading-[12px] border-mediumgray xs:border-none xs:mb-[30px]",children:[(0,u.jsx)("span",{className:"inline-block md:mb-[10px] md:block font-serif",children:"industry:"}),(0,u.jsx)("span",{className:"text-darkgray font-medium uppercase font-serif",children:" fashion shoes"})]})),(0,u.jsxs)(r.m.div,(0,o.Z)((0,o.Z)({},(0,o.Z)((0,o.Z)({},g.Ji),{},{transition:{delay:.7}})),{},{className:"col-12 col-md-3 col-sm-6 text-center font-medium uppercase text-sm leading-[12px]",children:[(0,u.jsx)("span",{className:"inline-block md:mb-[10px] font-serif md:block",children:"website:"}),(0,u.jsx)("a",{"aria-label":"themezaa",className:"text-darkgray text-sm font-medium uppercase leading-[0] font-serif hover:text-[#fd961e]",href:"https://www.themezaa.com/",target:"_blank",rel:"noreferrer",children:" www.themezaa.com"})]}))]})})]}))})})})}),(0,u.jsx)("section",{className:"p-0",children:(0,u.jsx)(i.Z,{fluid:!0,children:(0,u.jsxs)(n.Z,{children:[(0,u.jsx)(l.Z,{md:6,className:"bg-cover h-[700px] overflow-hidden relative bg-center bg-no-repeat md:h-[550px] sm:h-[350px] sm:mb-[15px]",style:{backgroundImage:"url(https://via.placeholder.com/960x830)"}}),(0,u.jsx)(l.Z,{md:6,className:"bg-cover h-[700px] overflow-hidden relative bg-center bg-no-repeat md:h-[550px] sm:h-[350px]",style:{backgroundImage:"url(https://via.placeholder.com/960x830)"}})]})})}),(0,u.jsx)("section",{className:"py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]",children:(0,u.jsx)(i.Z,{children:(0,u.jsxs)(n.Z,{className:"justify-between",children:[(0,u.jsx)(r.m.div,(0,o.Z)((0,o.Z)({},g.Ji),{},{className:"col-12 col-lg-4 col-md-7 col-sm-9 md:mb-[35px]",children:(0,u.jsx)("h6",{className:"font-serif text-darkgray font-medium m-0",children:"Running allows me to set my mind free. Nothing seems impossible."})})),(0,u.jsxs)(r.m.div,(0,o.Z)((0,o.Z)({},(0,o.Z)((0,o.Z)({},g.Ji),{},{transition:{delay:.5}})),{},{className:"col-12 col-xl-3 col-lg-4 col-md-6 sm:mb-[30px]",children:[(0,u.jsxs)("div",{className:"flex font-serif text-darkgray mb-[15px] font-medium",children:[(0,u.jsx)("span",{className:"flex-shrink-0 self-center h-[1px] w-[40px] bg-[#ff6437] mr-[20px]"}),(0,u.jsx)("div",{className:"grow",children:"The Challenge"})]}),(0,u.jsx)("p",{className:"md:w-[80%] xs:w-full",children:"Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been."})]})),(0,u.jsxs)(r.m.div,(0,o.Z)((0,o.Z)({},(0,o.Z)((0,o.Z)({},g.Ji),{},{transition:{delay:.6}})),{},{className:"col-12 col-xl-3 col-lg-4 col-md-6",children:[(0,u.jsxs)("div",{className:"flex font-serif text-darkgray mb-[15px] font-medium",children:[(0,u.jsx)("span",{className:"flex-shrink-0 self-center h-[1px] w-[40px] bg-[#ff6437] mr-[20px]"}),(0,u.jsx)("div",{className:"grow",children:"The Approach"})]}),(0,u.jsx)("p",{className:"md:w-[80%] xs:w-full",children:"Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been."})]}))]})})}),(0,u.jsx)("section",{className:"relative bg-cover overflow-hidden bg-fixed h-[750px] md:h-[550px] sm:h-[350px]",children:(0,u.jsx)(m.VS,{className:"lg-no-parallax h-[750px] relative bg-cover bg-fixed lg:bg-inherit lg:bg-center md:h-[550px] sm:h-[350px]",translateY:[-20,20],style:{backgroundImage:"url(https://via.placeholder.com/1920x1180)"}})}),(0,u.jsx)("section",{className:"py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]",children:(0,u.jsx)(i.Z,{children:(0,u.jsxs)(n.Z,{className:"justify-center items-center md:items-start mb-[35%] md:mb-[43%] sm:mb-0",children:[(0,u.jsx)(r.m.div,(0,o.Z)((0,o.Z)({},g.Ji),{},{className:"col-12 col-lg-2 text-left md:text-center md:mb-[35px]",children:(0,u.jsx)("img",{height:"",width:"",src:"https://via.placeholder.com/130x130",alt:"",className:"inline-block"})})),(0,u.jsx)(r.m.div,(0,o.Z)((0,o.Z)({},(0,o.Z)((0,o.Z)({},g.Ji),{},{transition:{delay:.5}})),{},{className:"col-12 col-xl-5 col-md-6 col-sm-11 sm:text-start sm:mb-[30px] xs:text-center",children:(0,u.jsx)("span",{className:"font-serif text-darkgray text-[30px] tracking-[-0.5px] leading-[40px] font-medium inline-block xs:w-[95%] xs:mx-auto sm:text-[20px] sm:leading-[30px] sm:text-center",children:"For men shoes are the most important. Good shoes take you good places"})})),(0,u.jsxs)(r.m.div,(0,o.Z)((0,o.Z)({},(0,o.Z)((0,o.Z)({},g.Ji),{},{transition:{delay:.6}})),{},{className:"col-12 col-lg-4 offset-xl-1 col-md-6 col-sm-10 sm:text-center",children:[(0,u.jsx)("span",{className:"font-serif text-darkgray text-base font-medium mb-[15px] inline-block",children:"Design and style above average"}),(0,u.jsx)("p",{children:"Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum is simply dummy text of the printing and typesetting industry."})]}))]})})}),(0,u.jsx)("section",{className:"bg-lightgray pb-[130px] lg:pb-[90px] md:pb-[75px] sm:py-[50px]",children:(0,u.jsx)(i.Z,{className:"sm:mb-[50px]",children:(0,u.jsxs)(n.Z,{className:"justify-center",children:[(0,u.jsx)(f.default,{children:(0,u.jsxs)(l.Z,{xl:12,className:"text-center mb-[100px] relative",children:[(0,u.jsx)("img",{height:"",width:"",src:"https://via.placeholder.com/1110x700",alt:"",className:"border-[10px] border-white w-full shadow-[0_0_25px_rgba(0,0,0,0.08)]"}),(0,u.jsx)(x.Z.Wrapper,{className:"flex absolute top-0 left-0 w-full h-full items-center justify-center",modalBtn:(0,u.jsx)(d.default,{type:"submit",size:"lg",className:"btn-sonar",themeColor:["#fff","#fff"],color:"#ff6437",title:(0,u.jsx)("i",{className:"icon-control-play !ml-[4px]"})}),children:(0,u.jsx)("div",{className:"w-[1020px] max-w-full relative rounded mx-auto",children:(0,u.jsx)("div",{className:"fit-video",children:(0,u.jsx)("iframe",{width:"100%",height:"100%",className:"shadow-[0_0_8px_rgba(0,0,0,0.06)]",controls:!0,src:"https://www.youtube.com/embed/g0f_BRYJLJE?autoplay=1",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})})})]})}),(0,u.jsxs)(r.m.div,(0,o.Z)((0,o.Z)({},g.Ji),{},{className:"col-12 col-xl-5 col-lg-6 col-md-8 col-sm-10 text-center",children:[(0,u.jsx)("i",{className:"ti-quote-left text-[#ff6437] text-[50px] mb-[25px] block"}),(0,u.jsx)("span",{className:"text-xlg text-darkgray leading-[34px] font-serif block mb-[25px] lg:text-[18px] lg:leading-[24px] md:leading-[26px]",children:"A shoe that is too large is apt to trip one and when too small to pinch the feet so it is with those whose fortune does not suit them."}),(0,u.jsx)("span",{className:"font-serif uppercase text-sm font-medium tracking-[4px]",children:"James nichols"})]}))]})})}),(0,u.jsx)(r.m.section,(0,o.Z)((0,o.Z)({},g.Ji),{},{className:"py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]",children:(0,u.jsx)(i.Z,{children:(0,u.jsx)(n.Z,{children:(0,u.jsx)(l.Z,{children:(0,u.jsx)("img",{height:"",width:"",src:"https://via.placeholder.com/1140x612",className:"w-full h-auto",alt:""})})})})})),(0,u.jsx)("section",{className:"p-0 bg-cover bg-no-repeat h-[900px] overflow-hidden bg-center lg:h-[700px] md:h-[550px] xs:h-[300px]",style:{backgroundImage:"url('https://via.placeholder.com/1919x917')"}}),(0,u.jsx)("section",{className:"py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]",children:(0,u.jsx)(i.Z,{children:(0,u.jsxs)(n.Z,{className:"items-center justify-center",children:[(0,u.jsx)(l.Z,{lg:7,md:10,className:"flex justify-end lg:pl-[40px] md:mb-[50px]",children:(0,u.jsxs)("figure",{className:"relative m-0",children:[(0,u.jsx)("img",{height:"",width:"",src:"https://via.placeholder.com/570x389",alt:""}),(0,u.jsxs)("figcaption",{className:"absolute bg-[#ff6437] bottom-[-20px] left-[-50px] text-white p-[49px] lg:p-[45px] md:p-[42px] sm:p-[38px] w-[50%] xs:w-full xs:left-[-25px]",children:[(0,u.jsx)("span",{className:"uppercase text-sm tracking-[1px] text-darkgray font-serif font-medium mb-[10px] inline-block",children:"Different design"}),(0,u.jsx)("h6",{className:"font-serif uppercase font-medium mb-0",children:"Branding strategy and innovation"})]})]})}),(0,u.jsxs)(l.Z,{xl:{span:4,offset:1},lg:5,md:9,children:[(0,u.jsx)("span",{className:"font-serif text-[30px] text-darkgray leading-[40px] tracking-[-0.5px] font-medium inline-block mb-[25px] sm:text-[20px] sm:leading-[30px]",children:"We design experiences that make a difference"}),(0,u.jsx)("p",{className:"mb-[25px] md:mb-[20px] sm:mb-[15px]",children:"When an unknown printer took a galley of scrambled only five centuries, but also electronic typesetting. Lorem ipsum is simply dummy text of the printing and typesetting industry."}),(0,u.jsx)(d.default,{href:"#",className:"font-medium font-serif after:h-[2px] after:bg-black hover:text-black uppercase btn-link text-md md:mb-0",size:"xl",color:"#232323",title:"Explore Website"})]})]})})}),(0,u.jsx)("section",{className:"relative z-[1] bg-lightgray p-0 overflow-hidden",children:(0,u.jsx)(i.Z,{fluid:!0,className:"px-0",children:(0,u.jsxs)(n.Z,{sm:2,className:"row-cols-1 justify-center xs:text-center gx-0",children:[(0,u.jsx)(l.Z,{className:"relative",children:(0,u.jsxs)(c.rU,{to:"/portfolio/single-project-page-02",className:"portfolio_btn h-full px-28 py-16 justify-between items-center flex xl:p-12 md:inline-flex",children:[(0,u.jsx)("div",{className:"portfolio_img absolute top-0 left-0 h-full w-full -z-[1] duration-150\tbg-no-repeat bg-cover overflow-hidden bg-center",style:{backgroundImage:"url(https://via.placeholder.com/955x185)"}}),(0,u.jsxs)("div",{className:"btn_icon font-medium text-darkgray font-serif mr-uto uppercase",children:[(0,u.jsx)("i",{className:"line-icon-Arrow-OutLeft duration-100\ttext-[40px] inline-block mr-[20px] align-middle\t"}),(0,u.jsx)("span",{className:"text-sm inline-block md:hidden",children:"Prev project"})]}),(0,u.jsx)("span",{className:"portfolio_disc font-medium text-darkgray text-xlg font-serif block lg:text-[18px] lg:leading-[26px] md:text-left",children:"Model photography"})]})}),(0,u.jsx)(l.Z,{className:"relative md:flex md:justify-end xs:block",children:(0,u.jsxs)(c.rU,{to:"/portfolio/single-project-page-04",className:"portfolio_btn h-full px-28 py-16 justify-between items-center flex xl:p-12 md:inline-flex",children:[(0,u.jsx)("span",{className:"portfolio_disc font-medium text-darkgray text-xlg font-serif block lg:text-[18px] lg:leading-[26px] md:text-right",children:"Daimler financial"}),(0,u.jsx)("div",{className:"portfolio_img absolute top-0 left-0 h-full w-full -z-[1] duration-150\tbg-no-repeat bg-cover overflow-hidden bg-center",style:{backgroundImage:"url(https://via.placeholder.com/955x185)"}}),(0,u.jsxs)("div",{className:"btn_icon font-medium text-darkgray font-serif mr-uto uppercase",children:[(0,u.jsx)("span",{className:"text-sm inline-block md:hidden",children:"Next project "}),(0,u.jsx)("i",{className:"line-icon-Arrow-OutRight duration-100\ttext-[40px] inline-block ml-[20px] align-middle\t"})]})]})})]})})}),(0,u.jsx)(h.Z,{theme:"dark",className:"text-slateblue bg-[#262b35]"})]})}}}]);
//# sourceMappingURL=2083.8d8bb3a4.chunk.js.map