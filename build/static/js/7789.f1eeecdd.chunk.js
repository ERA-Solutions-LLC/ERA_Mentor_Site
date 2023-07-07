"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[7789,5705,9213,1471],{43739:function(e,t,o){o.r(t),o.d(t,{default:function(){return m}});var n=o(1413),i=o(72791),a=o(11087),c=o(43360),l=o(80184),s=function(e){var t=e.themeColor&&e.themeColor[0],o=e.themeColor&&e.themeColor[1],i=e.color&&e.color[0],s=e.color&&e.color[1],m={"--gradient-color":"object"===typeof e.themeColor?"linear-gradient(45deg, ".concat(t,", ").concat(o,", ").concat(t,")"):e.themeColor,"--brand-color":"object"===typeof e.themeColor?"linear-gradient(to right, ".concat(t,", ").concat(o,", ").concat(t,")"):e.themeColor,"--text-color":"object"===typeof e.color?"linear-gradient(to right, ".concat(i,", ").concat(s,", ").concat(i,")"):e.color};return e.href||"submit"===e.type?(0,l.jsx)(c.Z,{as:e.href?"a":"submit"===e.type?"button":"a",type:"submit"===e.type?"submit":void 0,style:m,className:"border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""),href:e.href,onClick:e.onClick,disabled:e.disabled,variant:"secondary","aria-label":e.ariaLabel,target:e.target,children:(0,l.jsx)(r,(0,n.Z)({},e))}):(0,l.jsx)(a.rU,{style:m,target:e.target,className:"btn border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""," "),to:e.to?e.to:"#",onClick:e.onClick,"aria-label":e.ariaLabel,children:(0,l.jsx)(r,(0,n.Z)({},e))})},r=function(e){return(0,l.jsxs)(l.Fragment,{children:[e.icon&&"after"!==e.iconPosition&&(0,l.jsx)("i",{className:"".concat(e.icon," left-icon")}),e.title,e.icon&&"after"===e.iconPosition&&(0,l.jsx)("i",{className:"".concat(e.icon," right-icon")}),"btn-link-gradient"===e.theme&&(0,l.jsx)("span",{})]})};s.defaultProps={size:"lg",style:"primary"};var m=(0,i.memo)(s)},60904:function(e,t,o){var n=o(74165),i=o(15861),a=o(72791),c=o(47022),l=o(89743),s=o(2677),r=o(11087),m=o(71856),d=o(34290),f=o(81724),p=o(92506),h=o(28033),b=o(29213),u=o(17728),g=o(54198),x=o(38480),w=o(90013),k=o(80184),j=[{color:"#828282",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#828282",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#828282",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#828282",link:"https://www.instagram.com/",icon:"fab fa-instagram"}],y=[w.Z[0],w.Z[1],w.Z[3]],N=function(e){return(0,k.jsxs)(g.Footer,{className:"footer-style-05".concat(e.className?" ".concat(e.className):""),theme:e.theme,children:[(0,k.jsx)("div",{className:"py-[40px] border-b border-[#ffffff1a]",children:(0,k.jsx)(c.Z,{children:(0,k.jsxs)(l.Z,{className:"justify-between items-center sm:justify-center",children:[(0,k.jsx)(s.Z,{className:"col-12 col-md-3 text-center text-md-start sm:mb-[20px] sm:justify-center sm:flex sm:p-0",children:(0,k.jsx)(r.rU,{"aria-label":"link",to:"/",children:(0,k.jsx)("img",{src:e.logo,alt:"logo",width:"111",height:"36"})})}),(0,k.jsx)(s.Z,{className:"col-12 col-md-6 text-center sm:mb-[20px]",children:(0,k.jsxs)("p",{className:"font-serif font-medium block align-middle uppercase xs:pl-0",children:["ARE YOU READY TO WORK WITH US? ",(0,k.jsx)(r.rU,{"aria-label":"themezaa",to:"/page/contact-classic",className:"underline underline-offset-[6px] text-themecolor font-serif font-medium text-sm inline-block uppercase ml-[5px]",children:"START A PROJECT"})]})}),(0,k.jsx)(s.Z,{className:"col-12 col-md-3",children:(0,k.jsx)(b.default,{size:"xs",className:"justify-end sm:!text-center sm:!justify-center",theme:"social-icon-style-01",iconColor:"dark"===e.theme?"light":"dark",data:j})})]})})}),(0,k.jsx)(c.Z,{children:(0,k.jsxs)(l.Z,{lg:4,sm:3,xs:1,className:"py-[95px] md:py-[50px] justify-center md:gap-y-[50px] sm:gap-y-[40px] xs:gap-y-[30px]",children:[(0,k.jsx)(g.default,{data:y,className:"",titleClass:"capitalize !mb-[20px]"}),(0,k.jsxs)(s.Z,{lg:3,sm:8,className:"xs:pb-0 md:text-center xs:text-left",children:[(0,k.jsx)("span",{className:"font-serif font-medium block text-themecolor mb-[28px]",children:"Subscribe to newsletter"}),(0,k.jsx)(p.J9,{initialValues:{email:""},validationSchema:f.Ry().shape({email:f.Z_().email("Invalid email.").required("Field is required.")}),onSubmit:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t,o){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o.setSubmitting(!0),e.next=3,(0,x.sendEmail)(t);case 3:"success"===e.sent.status&&(0,x.resetForm)(o);case 5:case"end":return e.stop()}}),e)})));return function(t,o){return e.apply(this,arguments)}}(),ss:!0,children:function(e){var t=e.isSubmitting,o=e.status;return(0,k.jsxs)("div",{className:"relative my-[30px] subscribe-style-09 mx-auto",children:[(0,k.jsxs)(p.l0,{className:"relative",children:[(0,k.jsx)(u.II,{showErrorMsg:!1,type:"email",name:"email",labelClass:"w-full",className:"border-[1px] border-solid border-mediumgray py-[13px] pl-[15px] pr-[60px] w-full small-input placeholder-[#A6A6A6]",placeholder:"Enter your email address"}),(0,k.jsx)("button",{"aria-label":"subscribe",type:"submit",className:"text-lg tracking-[1px] py-[12px] px-[28px] btn-gradient uppercase".concat(t?" loading":""),children:(0,k.jsx)("i",{className:"feather-mail text-lg m-0"})})]}),(0,k.jsx)(m.M,{children:o&&(0,k.jsx)(d.m.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"absolute top-[115%] left-0 w-full",children:(0,k.jsx)(h.default,{className:"py-[5px] rounded-[4px]",theme:"message-box01",variant:"success",message:"Your message has been sent successfully subscribed to our email list!"})})})]})}}),(0,k.jsxs)("p",{children:["\xa9 Copyright ",(new Date).getFullYear()," ",(0,k.jsx)(r.rU,{"aria-label":"link",to:"/",className:"underline underline-offset-4 text-themecolor font-normal",children:"Litho"})]})]})]})})]})};N.defaultProps={data:w.Z,logo:"/assets/img/webp/logo-white.webp"},t.Z=(0,a.memo)(N)},44368:function(e,t,o){o.r(t),o.d(t,{default:function(){return f}});var n=o(1413),i=o(72791),a=o(89743),c=o(34290),l=o(11087),s=o(43739),r=o(98899),m=o(80184),d=function(e){return(0,m.jsx)(a.Z,{className:"".concat(e.grid," md:justify-center"),children:e.data.map((function(t,o){return(0,m.jsx)(c.m.div,(0,n.Z)((0,n.Z)({className:"col".concat(e.theme?" ".concat(e.theme):"").concat(e.className?" ".concat(e.className):"")},(0,n.Z)((0,n.Z)({},e.animation),{},{transition:{delay:o*e.animationDelay,ease:e.animationTransition,duration:e.animationDuration}})),{},{children:(0,m.jsxs)("div",{className:"rounded-md w-full",children:[t.img?(0,m.jsx)("img",{height:42,width:51,className:"inline-block items-center justify-center mb-[30px]",src:t.img,alt:"featurebox"}):t.icon?"icon-with-text-05"===e.theme?(0,m.jsx)(l.rU,{"aria-label":"link for icon",to:"#",children:(0,m.jsx)("i",{className:t.icon})}):(0,m.jsx)("i",{className:t.icon}):t.textIcon?(0,m.jsx)("span",{className:"text-basecolor inline-block icon-text",children:t.textIcon}):(0,m.jsx)("span",{className:"text-basecolor inline-block icon-text",children:"".concat(o<=9?"0":"").concat(o+1)}),(0,m.jsxs)("div",{className:"feature-box-content",children:[t.title&&(0,m.jsx)("span",{className:"font-medium title font-serif",children:t.title}),t.content&&(0,m.jsx)("p",{children:t.content}),"icon-with-text-11"===e.theme?(0,m.jsx)(s.default,{ariaLabel:"iconwithtext",href:"#",className:"font-medium font-serif uppercase btn-link after:h-[2px] after:bg-darkgray md:text-md md:mb-[15px]",size:"xl",color:"#232323",title:"Read more"}):""]}),(t.linkTitle||t.link)&&(0,m.jsx)(s.default,{ariaLabel:"iconwithtext",className:"font-medium font-serif uppercase btn-link after:h-[1px] md:text-md md:mb-[15px] after:bg-basecolor hover:text-basecolor",to:t.link,title:t.linkTitle})]})}),o)}))})};d.defaultProps={data:r.y_,animationDelay:.6,animationDuration:.8,animationTransition:"circOut",theme:"icon-with-text-01"};var f=(0,i.memo)(d)},28033:function(e,t,o){o.r(t);var n=o(29439),i=o(72791),a=o(2469),c=o(80184),l=function(e){var t=(0,i.useState)(!0),o=(0,n.Z)(t,2),l=o[0],s=o[1];if(l)return(0,c.jsx)(a.Z,{className:"".concat(e.theme).concat(e.className?" ".concat(e.className):""),variant:e.variant,onClose:function(){return s(!1)},dismissible:e.dismissible,children:e.message})};l.defaultProps={className:"",theme:"message-box01"},t.default=(0,i.memo)(l)},25705:function(e,t,o){o.r(t);var n=o(1413),i=o(45987),a=o(72791),c=o(92520),l=o(80184),s=["theme","children","className"],r=function(e){var t=e.theme,o=e.children,r=e.className,m=(0,i.Z)(e,s);return(0,a.useEffect)((function(){var e=document.querySelectorAll(".smooth-scrollbar"),t=function(){e.forEach((function(e){setTimeout((function(){var t=e.querySelector(".scroll-content");null!==t&&t.clientHeight>e.clientHeight&&e.classList.add("scrollbar-appear"),null!==t&&t.clientHeight<e.clientHeight&&e.classList.remove("scrollbar-appear")}),500)}))};t(),window.addEventListener("resize",t),document.querySelectorAll(".accordion-button").forEach((function(e){e.addEventListener("click",t)}));var o=document.querySelectorAll(".navbar-nav > .nav-item");"undefined"!=typeof o&&null!=o&&o.forEach((function(e){var o=e.querySelector(".fa");"undefined"!=typeof o&&null!=o&&o.addEventListener("click",t)}))}),[]),(0,l.jsx)(c.Scrollbar,(0,n.Z)((0,n.Z)({},m),{},{className:"smooth-scrollbar ".concat(t).concat(r?" ".concat(r):""),plugins:{overscroll:{effect:"bounce"}},children:o}))};r.defaultProps={theme:"light"},t.default=(0,a.memo)(r)},29213:function(e,t,o){o.r(t),o.d(t,{default:function(){return r}});var n=o(1413),i=o(72791),a=o(34290),c=o(96006),l=o(80184),s=function(e){return(0,l.jsx)("ul",{className:"social-icon flex-wrap gap-y-5 p-0 ".concat(e.theme," ").concat(e.size," ").concat(e.iconColor," ").concat(e.className),children:e.data.map((function(t,o){return"social-icon-style-11"!==e.theme?(0,l.jsx)(a.m.li,(0,n.Z)((0,n.Z)({style:{"--social-icon-color":t.color?t.color:"#000"}},(0,n.Z)((0,n.Z)({},e.animation),{},{transition:{delay:o*e.animationDelay}})),{},{children:(0,l.jsxs)("a",{href:t.link,"aria-label":"social icon",target:"_blank",rel:"noreferrer",children:[t.name&&(0,l.jsx)("span",{className:"flex brand-label",children:t.name?t.name:"icon"}),t.icon&&(0,l.jsx)("i",{className:"".concat(t.icon," brand-icon")}),(0,l.jsx)("span",{})]})}),o):(0,l.jsx)(a.m.li,(0,n.Z)((0,n.Z)({style:{"--social-icon-color":t.color?t.color:"#000"}},(0,n.Z)((0,n.Z)({},e.animation),{},{transition:{delay:o*e.animationDelay}})),{},{children:(0,l.jsxs)("a",{href:t.link,"aria-label":"social icon",target:"_blank",rel:"noreferrer",children:[t.socialback&&(0,l.jsx)("div",{className:"social-back",children:(0,l.jsx)("span",{children:t.socialback})}),(0,l.jsxs)("div",{className:"".concat(t.position," social-front grid"),children:[t.icon&&(0,l.jsx)("i",{className:t.icon}),t.name&&(0,l.jsx)("span",{children:t.name?t.name:"icon"})]})]})}),o)}))})};s.defaultProps={data:c.mc,theme:"social-icon-style-01",size:"lg",iconColor:"light",className:"justify-center",animationDelay:.2};var r=(0,i.memo)(s)},96006:function(e,t,o){o.d(t,{Fg:function(){return l},JV:function(){return h},Q6:function(){return r},Tq:function(){return c},X_:function(){return i},Xy:function(){return m},gE:function(){return f},k9:function(){return s},kJ:function(){return d},mc:function(){return n},y:function(){return a},zm:function(){return p}});var n=[{color:"#0038e3",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#0038e3",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#0038e3",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#0038e3",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0038e3",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#0038e3",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#0038e3",link:"https://www.behance.net/",icon:"fab fa-behance"}],i=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],a=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],c=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],l=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],s=[{color:"#0038e3",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#0038e3",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#0038e3",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#0038e3",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0038e3",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#0038e3",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#0038e3",link:"https://www.behance.net/",icon:"fab fa-behance"}],r=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],m=[{name:"FACEBOOK",color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{name:"DRIBBBLE",color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{name:"BEHANCE",color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"},{name:"INSTAGRAM",color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"}],d=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],f=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#007bb6",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],p=[{position:"top-left",name:"FACEBOOK",color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f",socialback:"LIKE US"},{position:"top",name:"TWITTER",color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter",socialback:"FOLLOW US"},{position:"top-left",name:"LINKEDIN",color:"#007bb6",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in",socialback:"JOIN US"},{position:"top-right",name:"GOOGLE",color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g",socialback:"FOLLOW US"}],h=[{color:"#000",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#000",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#000",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#000",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#000",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#000",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#000",link:"https://www.behance.net/",icon:"fab fa-behance"}]},25308:function(e,t,o){o.d(t,{Z:function(){return p}});var n=o(1413),i=o(72791),a=o(81620),c=o(34290),l=o(89743),s=o(58563),r=o(51496),m=o(80184),d=function(e,t,o){switch(e.theme){case"testimonials-style-01":return(0,m.jsxs)("div",{className:"".concat(e.theme," bg-lightgray relative"),children:[(0,m.jsx)("i",{className:"ti-quote-left absolute -top-[25px] left-[50px] inline-block text-[50px] z-10"}),(0,m.jsx)("p",{className:"text-xmd w-[75%] mb-0 lg:w-[85%] md:w-[80%]",children:t.content}),(0,m.jsxs)("div",{className:"author border-t border-mediumgray flex items-center mt-10 pt-10",children:[t.img&&(0,m.jsx)("img",{width:"",height:"",className:"rounded-circle w-[60px] h-[60px] mr-[19px]",alt:"",src:t.img}),(0,m.jsxs)("div",{className:"inline-block align-middle",children:[t.name&&(0,m.jsx)("span",{className:"font-serif text-md font-medium leading-[20px] text-darkgray block uppercase",children:t.name}),t.designation&&(0,m.jsx)("span",{className:"block text-sm uppercase",children:t.designation})]})]})]});case"testimonials-style-02":return(0,m.jsxs)("div",{className:"".concat(e.theme," "),children:[t.img&&(0,m.jsx)("img",{width:"",height:"",className:"w-full h-auto",src:t.img,alt:""}),(0,m.jsxs)("div",{className:"bg-white p-[49px] text-center relative",children:[(0,m.jsx)("div",{className:"testimonials-rounded-icon absolute -top-[40px] left-1/2 text-[28px] h-[75px] w-[75px] leading-[71px] overflow-hidden bg-white rounded-full flex items-center justify-center",children:(0,m.jsx)("i",{className:"fa fa-quote-left"})}),t.content&&(0,m.jsx)("p",{className:"mb-7",children:t.content}),t.name&&(0,m.jsx)("span",{className:"font-serif font-medium text-center text-darkgray block",children:t.name}),t.designation&&(0,m.jsx)("span",{className:"block font-serif text-sm font-medium",children:t.designation})]})]});case"testimonials-style-03":return(0,m.jsxs)("div",{className:"".concat(e.theme),children:[(0,m.jsx)("div",{className:"testimonials-bubble py-8 px-12 lg:px-8 relative bg-white mb-[35px] rounded",children:t.content&&(0,m.jsx)("p",{className:"mb-0",children:t.content})}),(0,m.jsxs)("div",{className:"px-[20px] flex items-center",children:[t.img&&(0,m.jsx)("img",{width:"",height:"",className:"rounded-circle w-[60px] h-[60px] mr-[19px]",src:t.img,alt:""}),(0,m.jsxs)("div",{className:"inline-block align-middle",children:[t.name&&(0,m.jsx)("span",{className:"font-serif text-md font-medium leading-[24px] text-darkgray block",children:t.name}),t.designation&&(0,m.jsx)("span",{className:"block text-sm",children:t.designation})]})]})]});case"testimonials-style-04":return(0,m.jsxs)("div",{className:"".concat(e.theme),children:[(0,m.jsx)("div",{className:"testimonials-bubble relative rounded-[5px] py-[30px] px-[40px] bg-white mb-[35px]",children:t.content&&(0,m.jsx)("p",{className:"mb-0",children:t.content})}),(0,m.jsxs)("div",{className:"items-center px-[20px] flex",children:[t.img&&(0,m.jsx)("img",{width:"",height:"",className:"rounded-circle w-[60px] h-[60px] mr-[15px]",src:t.img,alt:""}),(0,m.jsxs)("div",{className:"items-center",children:[t.name&&(0,m.jsx)("span",{className:"font-serif text-md leading-[16px] font-medium text-darkgray block",children:t.name}),t.rating&&(0,m.jsx)("div",{className:"star-rating",children:(0,m.jsx)("span",{style:{width:20*"".concat(t.rating)+"%"}})})]})]})]});case"testimonials-style-05":return(0,m.jsx)("div",{className:"".concat(e.theme," bg-white py-[3rem] px-[3.5rem] rounded-lg lg:p-10"),children:(0,m.jsxs)("div",{className:"items-center flex flex-wrap",children:[t&&(0,m.jsx)("img",{width:"",height:"",className:"rounded-circle w-[60px] h-[60px] mr-[20px]",alt:"",src:t.img}),(0,m.jsxs)("div",{children:[t.rating&&(0,m.jsx)("div",{className:"star-rating",children:(0,m.jsx)("span",{style:{width:20*"".concat(t.rating)+"%"}})}),t.name&&(0,m.jsx)("span",{className:"font-serif text-md leading-5 font-medium text-gray-900 block",children:t.name}),t.company&&(0,m.jsx)("span",{className:"text-sm",children:t.company})]}),(0,m.jsx)("div",{className:"testimonials-bubble relative bg-white mt-[25px]",children:t.content&&(0,m.jsx)("p",{className:"mb-0",children:t.content})})]})});default:return(0,m.jsxs)("div",{className:"".concat(e.theme," bg-lightgray relative"),children:[(0,m.jsx)("i",{className:"ti-quote-left"}),(0,m.jsx)("p",{className:"text-xmd w-75 mb-0",children:t.content}),(0,m.jsxs)("div",{className:"author border-t border-mediumgray flex items-center mt-10 pt-10",children:[t.img&&(0,m.jsx)("img",{width:"",height:"",className:"rounded-circle w-[60px] h-[60px] mr-[16px]",alt:"",src:t.img}),(0,m.jsxs)("div",{children:[t.name&&(0,m.jsx)("span",{className:"font-serif text-md font-medium text-darkgray block",children:t.name}),t.designation&&(0,m.jsx)("span",{className:"text-sm",children:t.designation})]})]})]})}},f=function(e){var t=(0,i.useRef)(null);return!0===e.carousel?(0,m.jsx)(s.tq,(0,n.Z)((0,n.Z)({ref:t,modules:[r.W_,r.tl,r.pt,r.N1],className:"testimonials-swiper".concat(e.className?" ".concat(e.className):"")},e.carouselOption),{},{children:e.data.map((function(t,o){return(0,m.jsxs)(s.o5,(0,n.Z)((0,n.Z)({},(0,n.Z)((0,n.Z)({},e.animation),{},{transition:{delay:o*e.animationDelay}})),{},{children:[" ",d(e,t)]}),o)}))})):(0,m.jsx)(l.Z,{className:e.grid,children:e.data.map((function(t,o){return(0,m.jsxs)(c.m.div,(0,n.Z)((0,n.Z)({className:"col flex justify-center".concat(e.className?" ".concat(e.className):"")},(0,n.Z)((0,n.Z)({},e.animation),{},{transition:{delay:o*e.animationDelay}})),{},{children:[" ",d(e,t)]}),o)}))})};f.defaultProps={data:a.W7,animationDelay:.5,theme:"testimonials-style-01",carouselOption:{slidesPerView:1,loop:!0,spaceBetween:20,autoplay:{delay:3e3,disableOnInteraction:!1},navigation:!0,breakpoints:{1200:{slidesPerView:4},992:{slidesPerView:3},768:{slidesPerView:3}}}};var p=(0,i.memo)(f)},81620:function(e,t,o){o.d(t,{A7:function(){return c},J4:function(){return l},Mh:function(){return a},W7:function(){return n},_g:function(){return i}});var n=[{name:"SHOKO MUGIKURA",designation:"GRAPHIC DESIGNER",content:"Their team are easy to work with and helped me make amazing websites in a short amount of time. Thanks guys for all your hard work.",img:"https://via.placeholder.com/125x125"},{name:"JONSAN DONNER",designation:"SALES MANAGER",content:"Trust us we looked for a very long time and wasted thousands of dollars testing other teams, freelancers, and outsource companies.",img:"https://via.placeholder.com/125x125"},{name:"MACKANGY ROSE",designation:"CREATIVE DIRECTOR",content:"This is an excellent company! I personally enjoyed the energy and the professional support the whole team gave to us into creating website.",img:"https://via.placeholder.com/125x125"}],i=[{name:"JEREMY SMITH",designation:"CO FOUNDER",content:"Lorem ipsum dolor amet consectetur do eiusmod tempor incididunt labore ut enim ad minim veniam",img:"https://via.placeholder.com/800x580"},{name:"SHOKO MUGIKURA",designation:"CREATIVE HEAD",content:"Lorem ipsum dolor amet consectetur do eiusmod tempor incididunt labore ut enim ad minim veniam",img:"https://via.placeholder.com/800x580"},{name:"HERMAN MILLER",designation:"HR MANAGER",content:"Lorem ipsum dolor amet consectetur do eiusmod tempor incididunt labore ut enim ad minim veniam",img:"https://via.placeholder.com/800x580"}],a=[{name:"Herman Miller",designation:"ThemeZaa Design",content:"Lorem ipsum dolor amet consectetur do tempor incididunt labore et dolore magna nostrud exercitation ullamco.",img:"https://via.placeholder.com/125x125"},{name:"Jeremy Girard",designation:"Microsoft Corporation",content:"Lorem ipsum dolor amet consectetur do tempor incididunt labore et dolore magna nostrud exercitation ullamco.",img:"https://via.placeholder.com/125x125"},{name:"Alexander Harvard",designation:"ThemeZaa Design",content:"Lorem ipsum dolor amet consectetur do tempor incididunt labore et dolore magna nostrud exercitation ullamco.",img:"https://via.placeholder.com/125x125"}],c=[{name:"Herman Miller",content:"Lorem ipsum dolor amet consectetur do tempor incididunt labore et dolore magna nostrud exercitation ullamco.",img:"https://via.placeholder.com/125x125",rating:5},{name:"Jeremy Girard",content:"Lorem ipsum dolor amet consectetur do tempor incididunt labore et dolore magna nostrud exercitation ullamco.",img:"https://via.placeholder.com/125x125",rating:5},{name:"Alexander Harvard",content:"Lorem ipsum dolor amet consectetur do tempor incididunt labore et dolore magna nostrud exercitation ullamco.",img:"https://via.placeholder.com/125x125",rating:5}],l=[{name:"Herman Miller",content:"Simply superb resort. Management and staff deserve special appreciation and thanks for hospitality.",img:"https://via.placeholder.com/125x125",rating:5},{name:"Loretta Smith",content:"We are back home now and feel that it is only right to write to you to express our warmest gratitude.",img:"https://via.placeholder.com/125x125",rating:5},{name:"Jeremy Girard",content:"Wonderful place to live for holidays. Can\u2019t believe can have such beautiful environment to spend peaceful.",img:"https://via.placeholder.com/125x125",rating:5}]},62752:function(e,t,o){o.d(t,{Z:function(){return i}});var n=o(72791);function i(e,t){(0,n.useEffect)((function(){var o=function(o){e.current&&!e.current.contains(o.target)&&t(o)};return document.addEventListener("mousedown",o),function(){document.removeEventListener("mousedown",o)}}),[e,t])}},9352:function(e,t,o){o.r(t);var n=o(1413),i=(o(72791),o(47022)),a=o(89743),c=o(2677),l=o(11087),s=o(34290),r=o(60904),m=o(21240),d=o(44368),f=o(49823),p=o(25308),h=o(98899),b=o(81620),u=o(80184);t.default=function(e){return(0,u.jsxs)("div",{style:e.style,children:[(0,u.jsx)(f.default,{}),(0,u.jsx)("section",{className:"bg-darkgray py-[25px]",children:(0,u.jsx)(i.Z,{children:(0,u.jsxs)(a.Z,{className:"items-center justify-center mb-0",children:[(0,u.jsx)(c.Z,{xl:8,lg:6,children:(0,u.jsx)("h1",{className:"font-serif text-white font-medium mb-0 md:text-center text-lg",children:"Footer style 05"})}),(0,u.jsx)(c.Z,{xl:4,lg:6,className:"breadcrumb justify-end text-xs font-serif md:mt-[10px] mb-0 md:justify-center",children:(0,u.jsxs)("ul",{className:"xs-text-center",children:[(0,u.jsx)("li",{children:(0,u.jsx)(l.rU,{to:"/","aria-label":"footer breadcrumb",className:"hover:text-white",children:"Home"})}),(0,u.jsx)("li",{children:(0,u.jsx)(l.rU,{to:"#","aria-label":"footer breadcrumb",className:"hover:text-white",children:"Features"})}),(0,u.jsx)("li",{children:"Footer"})]})})]})})}),(0,u.jsx)("section",{className:"py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px] bg-white",children:(0,u.jsx)(i.Z,{children:(0,u.jsx)(d.default,{grid:"row-cols-1 row-cols-lg-4 row-cols-sm-2 gap-y-5",theme:"icon-with-text-03 text-center",data:h.RR,animation:m.Ji,animationDelay:0})})}),(0,u.jsx)("section",{className:"bg-[#f7f8fc] py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]",children:(0,u.jsxs)(i.Z,{children:[(0,u.jsx)(a.Z,{className:"justify-center",children:(0,u.jsxs)(s.m.div,(0,n.Z)((0,n.Z)({className:"text-center mb-20 col-xl-5 col-lg-6 col-sm-8"},m.Ji),{},{children:[(0,u.jsx)("span",{className:"text-center font-serif text-md inline-block font-medium text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e] uppercase mb-[20px] sm:mb-[15px]",children:" What people are saying "}),(0,u.jsx)("h5",{className:"font-serif text-[2.3rem] justify-center text-center text-darkgray font-semibold -tracking-[1px]",children:" What our valuable customer are saying about us? "})]}))}),(0,u.jsx)(a.Z,{className:"justify-center",children:(0,u.jsx)(c.Z,{className:"col-12 col-md-12 col-sm-8",children:(0,u.jsx)(p.Z,{grid:"row-cols-1 row-cols-md-2 row-cols-lg-3 gap-y-10 justify-center",theme:"testimonials-style-03",data:b.Mh,animation:m.Ji,animationDelay:.3})})})]})}),(0,u.jsx)(r.Z,{className:"bg-[#262b35] text-slateblue",logo:"/assets/img/webp/logo-white.webp",theme:"dark"})]})}}}]);
//# sourceMappingURL=7789.f1eeecdd.chunk.js.map