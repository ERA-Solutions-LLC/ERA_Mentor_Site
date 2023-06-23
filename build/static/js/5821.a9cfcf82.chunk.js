"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[5821,3739,5705,8033,9213,7706,2403,8316,1409,9523,3850,8571],{43739:function(e,t,o){o.r(t),o.d(t,{default:function(){return f}});var n=o(1413),i=o(72791),a=o(11087),c=o(43360),r=o(80184),s=function(e){var t=e.themeColor&&e.themeColor[0],o=e.themeColor&&e.themeColor[1],i=e.color&&e.color[0],s=e.color&&e.color[1],f={"--gradient-color":"object"===typeof e.themeColor?"linear-gradient(45deg, ".concat(t,", ").concat(o,", ").concat(t,")"):e.themeColor,"--brand-color":"object"===typeof e.themeColor?"linear-gradient(to right, ".concat(t,", ").concat(o,", ").concat(t,")"):e.themeColor,"--text-color":"object"===typeof e.color?"linear-gradient(to right, ".concat(i,", ").concat(s,", ").concat(i,")"):e.color};return e.href||"submit"===e.type?(0,r.jsx)(c.Z,{as:e.href?"a":"submit"===e.type?"button":"a",type:"submit"===e.type?"submit":void 0,style:f,className:"border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""),href:e.href,onClick:e.onClick,disabled:e.disabled,variant:"secondary","aria-label":e.ariaLabel,target:e.target,children:(0,r.jsx)(l,(0,n.Z)({},e))}):(0,r.jsx)(a.rU,{style:f,target:e.target,className:"btn border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""," "),to:e.to?e.to:"#",onClick:e.onClick,"aria-label":e.ariaLabel,children:(0,r.jsx)(l,(0,n.Z)({},e))})},l=function(e){return(0,r.jsxs)(r.Fragment,{children:[e.icon&&"after"!==e.iconPosition&&(0,r.jsx)("i",{className:"".concat(e.icon," left-icon")}),e.title,e.icon&&"after"===e.iconPosition&&(0,r.jsx)("i",{className:"".concat(e.icon," right-icon")}),"btn-link-gradient"===e.theme&&(0,r.jsx)("span",{})]})};s.defaultProps={size:"lg",style:"primary"};var f=(0,i.memo)(s)},47315:function(e,t,o){var n=o(1413),i=o(72791),a=o(34290),c=o(92702),r=o(80184),s=function(e){return(0,r.jsx)(a.m.div,(0,n.Z)((0,n.Z)({className:"".concat(e.theme," countdown flex flex-wrap ").concat(e.className)},e.animation),{},{children:(0,r.jsx)(c.ZP,{date:e.date,renderer:l})}))},l=function(e){var t=e.days,o=e.hours,n=e.minutes,i=e.seconds;return e.completed?(0,r.jsx)("span",{children:"You are good to go!"}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"number",children:(0,c.Bu)(t)}),(0,r.jsx)("span",{className:"unit",children:"Days"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"number",children:(0,c.Bu)(o)}),(0,r.jsx)("span",{className:"unit",children:"Hours"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"number",children:(0,c.Bu)(n)}),(0,r.jsx)("span",{className:"unit",children:"Minutes"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"number",children:(0,c.Bu)(i)}),(0,r.jsx)("span",{className:"unit",children:"Seconds"})]})]})};s.defaultProps={theme:"countdown-style-01"},t.Z=(0,i.memo)(s)},28033:function(e,t,o){o.r(t);var n=o(29439),i=o(72791),a=o(2469),c=o(80184),r=function(e){var t=(0,i.useState)(!0),o=(0,n.Z)(t,2),r=o[0],s=o[1];if(r)return(0,c.jsx)(a.Z,{className:"".concat(e.theme).concat(e.className?" ".concat(e.className):""),variant:e.variant,onClose:function(){return s(!1)},dismissible:e.dismissible,children:e.message})};r.defaultProps={className:"",theme:"message-box01"},t.default=(0,i.memo)(r)},25705:function(e,t,o){o.r(t);var n=o(1413),i=o(45987),a=o(72791),c=o(92520),r=o(80184),s=["theme","children","className"],l=function(e){var t=e.theme,o=e.children,l=e.className,f=(0,i.Z)(e,s);return(0,a.useEffect)((function(){var e=document.querySelectorAll(".smooth-scrollbar"),t=function(){e.forEach((function(e){setTimeout((function(){var t=e.querySelector(".scroll-content");null!==t&&t.clientHeight>e.clientHeight&&e.classList.add("scrollbar-appear"),null!==t&&t.clientHeight<e.clientHeight&&e.classList.remove("scrollbar-appear")}),500)}))};t(),window.addEventListener("resize",t),document.querySelectorAll(".accordion-button").forEach((function(e){e.addEventListener("click",t)}));var o=document.querySelectorAll(".navbar-nav > .nav-item");"undefined"!=typeof o&&null!=o&&o.forEach((function(e){var o=e.querySelector(".fa");"undefined"!=typeof o&&null!=o&&o.addEventListener("click",t)}))}),[]),(0,r.jsx)(c.Scrollbar,(0,n.Z)((0,n.Z)({},f),{},{className:"smooth-scrollbar ".concat(t).concat(l?" ".concat(l):""),plugins:{overscroll:{effect:"bounce"}},children:o}))};l.defaultProps={theme:"light"},t.default=(0,a.memo)(l)},29213:function(e,t,o){o.r(t),o.d(t,{default:function(){return l}});var n=o(1413),i=o(72791),a=o(34290),c=o(96006),r=o(80184),s=function(e){return(0,r.jsx)("ul",{className:"social-icon flex-wrap gap-y-5 p-0 ".concat(e.theme," ").concat(e.size," ").concat(e.iconColor," ").concat(e.className),children:e.data.map((function(t,o){return"social-icon-style-11"!==e.theme?(0,r.jsx)(a.m.li,(0,n.Z)((0,n.Z)({style:{"--social-icon-color":t.color?t.color:"#000"}},(0,n.Z)((0,n.Z)({},e.animation),{},{transition:{delay:o*e.animationDelay}})),{},{children:(0,r.jsxs)("a",{href:t.link,"aria-label":"social icon",target:"_blank",rel:"noreferrer",children:[t.name&&(0,r.jsx)("span",{className:"flex brand-label",children:t.name?t.name:"icon"}),t.icon&&(0,r.jsx)("i",{className:"".concat(t.icon," brand-icon")}),(0,r.jsx)("span",{})]})}),o):(0,r.jsx)(a.m.li,(0,n.Z)((0,n.Z)({style:{"--social-icon-color":t.color?t.color:"#000"}},(0,n.Z)((0,n.Z)({},e.animation),{},{transition:{delay:o*e.animationDelay}})),{},{children:(0,r.jsxs)("a",{href:t.link,"aria-label":"social icon",target:"_blank",rel:"noreferrer",children:[t.socialback&&(0,r.jsx)("div",{className:"social-back",children:(0,r.jsx)("span",{children:t.socialback})}),(0,r.jsxs)("div",{className:"".concat(t.position," social-front grid"),children:[t.icon&&(0,r.jsx)("i",{className:t.icon}),t.name&&(0,r.jsx)("span",{children:t.name?t.name:"icon"})]})]})}),o)}))})};s.defaultProps={data:c.mc,theme:"social-icon-style-01",size:"lg",iconColor:"light",className:"justify-center",animationDelay:.2};var l=(0,i.memo)(s)},96006:function(e,t,o){o.d(t,{Fg:function(){return r},JV:function(){return p},Q6:function(){return l},Tq:function(){return c},X_:function(){return i},Xy:function(){return f},gE:function(){return m},k9:function(){return s},kJ:function(){return u},mc:function(){return n},y:function(){return a},zm:function(){return d}});var n=[{color:"#0038e3",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#0038e3",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#0038e3",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#0038e3",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0038e3",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#0038e3",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#0038e3",link:"https://www.behance.net/",icon:"fab fa-behance"}],i=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],a=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],c=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],r=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],s=[{color:"#0038e3",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#0038e3",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#0038e3",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#0038e3",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0038e3",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#0038e3",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#0038e3",link:"https://www.behance.net/",icon:"fab fa-behance"}],l=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],f=[{name:"FACEBOOK",color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{name:"DRIBBBLE",color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{name:"BEHANCE",color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"},{name:"INSTAGRAM",color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"}],u=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],m=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#007bb6",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],d=[{position:"top-left",name:"FACEBOOK",color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f",socialback:"LIKE US"},{position:"top",name:"TWITTER",color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter",socialback:"FOLLOW US"},{position:"top-left",name:"LINKEDIN",color:"#007bb6",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in",socialback:"JOIN US"},{position:"top-right",name:"GOOGLE",color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g",socialback:"FOLLOW US"}],p=[{color:"#000",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#000",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#000",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#000",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#000",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#000",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#000",link:"https://www.behance.net/",icon:"fab fa-behance"}]},62752:function(e,t,o){o.d(t,{Z:function(){return i}});var n=o(72791);function i(e,t){(0,n.useEffect)((function(){var o=function(o){e.current&&!e.current.contains(o.target)&&t(o)};return document.addEventListener("mousedown",o),function(){document.removeEventListener("mousedown",o)}}),[e,t])}},38943:function(e,t,o){o.r(t);var n=o(74165),i=o(15861),a=o(1413),c=o(29439),r=o(72791),s=o(47022),l=o(89743),f=o(2677),u=o(43360),m=o(11087),d=o(34290),p=o(71856),b=o(92506),h=o(81724),g=o(62752),w=o(43739),v=o(47315),k=o(29213),x=o(17728),y=o(28033),j=o(49823),S=o(21240),N=o(38480),Z=o(80184),T=[{color:"#0038e3",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#0038e3",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0038e3",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#0038e3",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#0038e3",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"}];t.default=function(){var e=(0,r.useState)(!1),t=(0,c.Z)(e,2),o=t[0],F=t[1],C=(0,r.useRef)(),D=function(){F(!1)};return(0,g.Z)(C,D),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(j.default,{animation:!1}),(0,Z.jsxs)("div",{className:"coming-soon-v2",children:[(0,Z.jsx)("section",{className:"cover-background",style:{backgroundImage:"url(https://via.placeholder.com/1920x1080)"},children:(0,Z.jsx)(s.Z,{fluid:!0,children:(0,Z.jsx)(l.Z,{children:(0,Z.jsx)(f.Z,{sm:12,className:"h-[100vh] p-[100px] xl:p-[50px] sm:py-[20px] sm:px-[35px] landscape:md:h-auto",children:(0,Z.jsxs)("div",{className:"flex h-full justify-between flex-col items-start sm:text-center sm:items-center",children:[(0,Z.jsx)(m.rU,{"aria-label":"homepage",className:"inline-block mr-0 landscape:md:mb-[30px]",to:"/",children:(0,Z.jsx)(d.m.img,(0,a.Z)({src:"/assets/img/webp/logo-white-big.webp",className:"xl:w-[100px] sm:w-full",height:"52",width:"160",loading:"lazy",alt:"logo"},S.Ji))}),(0,Z.jsxs)("div",{className:"xs:text-center",children:[(0,Z.jsx)(d.m.h1,(0,a.Z)((0,a.Z)({className:"font-serif text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e] font-semibold mb-[10px] inline-block xl:text-[4rem] xl:leading-none"},(0,a.Z)((0,a.Z)({},S.Ji),{},{transition:{delay:.3}})),{},{children:"Hello Guys!"})),(0,Z.jsx)(d.m.h3,(0,a.Z)((0,a.Z)({className:"font-serif block text-white xl:text-xlg xl:mb-[20px]"},(0,a.Z)((0,a.Z)({},S.Ji),{},{transition:{delay:.5}})),{},{children:"We're coming soon..."})),(0,Z.jsx)(d.m.p,(0,a.Z)((0,a.Z)({className:"text-xmd text-white leading-[28px] font-light mb-[50px] xl:mb-[20px] w-[450px] sm:w-full"},(0,a.Z)((0,a.Z)({},S.Ji),{},{whileInView:{opacity:.5},transition:{delay:.7}})),{},{children:"We're currently working hard on this page. Subscribe our newsletter to get update when it'll be live."})),(0,Z.jsx)(d.m.div,(0,a.Z)((0,a.Z)({},(0,a.Z)((0,a.Z)({},S.Ji),{},{transition:{delay:1}})),{},{children:(0,Z.jsx)(v.Z,{theme:"countdown-style-03",className:"text-white font-semibold !text-[47px] mb-[40px] xl:mb-[20px] row-cols-2 row-cols-sm-4",date:"2023-12-14T15:12:03",animation:S.Ji})})),(0,Z.jsx)(d.m.div,(0,a.Z)((0,a.Z)({},(0,a.Z)((0,a.Z)({},S.Ji),{},{transition:{delay:1.2}})),{},{children:(0,Z.jsx)(w.default,{onClick:function(){F(!0)},className:"btn-fill drop-shadow-md font-medium font-serif uppercase rounded-[50px] btn-shadow text-[15px] md:mb-[15px]",size:"md",themeColor:"#fff",color:"#000",title:"notify me"})}))]}),(0,Z.jsx)(d.m.div,(0,a.Z)((0,a.Z)({},(0,a.Z)((0,a.Z)({},S.Ji),{},{transition:{delay:1.4}})),{},{children:(0,Z.jsx)(k.default,{size:"sm",theme:"social-icon-style-06",className:"justify-center text-center",iconColor:"light",data:T})}))]})})})})}),(0,Z.jsx)("section",{className:"".concat(o?"notify-me":""),children:(0,Z.jsxs)(d.m.div,{className:"fixed left-0 top-0 w-full h-full",initial:{translateY:"100%"},animate:{translateY:o?"0%":"100%"},transition:{ease:"easeIn",duration:.3},children:[(0,Z.jsxs)(u.Z,{onClick:D,className:"btn-close fixed top-[30px] right-[30px] text-[30px] bg-transparent text-white ".concat(o?"inline-block":"hidden"),title:"Close (Esc)",children:[" ","\xd7"," "]}),(0,Z.jsx)(d.m.div,{className:"fixed bottom-0 w-full bg-[#fff]",ref:C,children:(0,Z.jsx)(s.Z,{className:"pt-[100px] md:py-[30px]",children:(0,Z.jsxs)(l.Z,{className:"items-center justify-center sm:text-center gap-x-[15px] gap-y-10",children:[(0,Z.jsx)(f.Z,{md:4,className:"sm:mb-10 md:inline-block sm:hidden",children:(0,Z.jsx)("img",{src:"https://via.placeholder.com/352x359",alt:"coming-soon",width:"352",height:"359"})}),(0,Z.jsxs)(f.Z,{md:7,lg:{span:6,offset:1},className:"pb-20 md:pb-[30px] sm:pb-0",children:[(0,Z.jsx)("h4",{className:"font-serif text-darkgray font-semibold mb-[15px]",children:"Let's get started now"}),(0,Z.jsx)("p",{className:"text-spanishgray mb-[42px] sm:mb-[33px]",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum is simply dummy."}),(0,Z.jsx)(b.J9,{initialValues:{email:""},validationSchema:h.Ry().shape({email:h.Z_().email("Invalid email.").required("Field is required.")}),onSubmit:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t,o){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o.setSubmitting(!0),e.next=3,(0,N.sendEmail)(t);case 3:"success"===e.sent.status&&(0,N.resetForm)(o);case 5:case"end":return e.stop()}}),e)})));return function(t,o){return e.apply(this,arguments)}}(),children:function(e){var t=e.isSubmitting,o=e.status;return(0,Z.jsxs)("div",{className:"relative subscribe-style-07",children:[(0,Z.jsxs)(b.l0,{className:"relative",children:[(0,Z.jsx)(x.II,{showErrorMsg:!1,type:"email",name:"email",className:"border-[1px] extra-large-input border-solid border-transparent",placeholder:"Your email address"}),(0,Z.jsx)("button",{type:"submit",className:"text-xs tracking-[1px] py-[12px] px-[28px] uppercase".concat(t?" loading":""),children:(0,Z.jsx)("i",{className:"fa fa-arrow-right"})})]}),(0,Z.jsx)(p.M,{children:o&&(0,Z.jsx)(d.m.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"mt-[25px] top-[115%] left-0 w-full",children:(0,Z.jsx)(y.default,{className:"rounded-[4px] text-md py-[10px] px-[22px]",theme:"message-box01",variant:"success",message:"Your message has been sent successfully subscribed to our email list!"})})})]})}})]})]})})})]})})]})]})}},28633:function(e,t,o){o.d(t,{Z:function(){return i}});var n=o(72791);function i(){return(0,n.useState)(null)}},79392:function(e,t,o){o.d(t,{Z:function(){return a}});var n=o(72791),i=o(39007);function a(e,t,o,a){void 0===a&&(a=!1);var c=(0,i.Z)(o);(0,n.useEffect)((function(){var o="function"===typeof e?e():e;return o.addEventListener(t,c,a),function(){return o.removeEventListener(t,c,a)}}),[e])}},16445:function(e,t,o){o.d(t,{Z:function(){return f}});var n=o(29439),i=o(72791),a=(o(28633),o(47904),o(39007));o(79392);o(55746),o(52803);o(49815),new WeakMap;var c=o(15341),r=o(80184),s=["onKeyDown"];var l=i.forwardRef((function(e,t){var o,i=e.onKeyDown,l=function(e,t){if(null==e)return{};var o,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,s),f=(0,c.FT)(Object.assign({tagName:"a"},l)),u=(0,n.Z)(f,1)[0],m=(0,a.Z)((function(e){u.onKeyDown(e),null==i||i(e)}));return(o=l.href)&&"#"!==o.trim()&&"button"!==l.role?(0,r.jsx)("a",Object.assign({ref:t},l,{onKeyDown:i})):(0,r.jsx)("a",Object.assign({ref:t},l,u,{onKeyDown:m}))}));l.displayName="Anchor";var f=l},15341:function(e,t,o){o.d(t,{FT:function(){return r}});var n=o(29439),i=o(72791),a=o(80184),c=["as","disabled"];function r(e){var t=e.tagName,o=e.disabled,n=e.href,i=e.target,a=e.rel,c=e.role,r=e.onClick,s=e.tabIndex,l=void 0===s?0:s,f=e.type;t||(t=null!=n||null!=i||null!=a?"a":"button");var u={tagName:t};if("button"===t)return[{type:f||"button",disabled:o},u];var m=function(e){(o||"a"===t&&function(e){return!e||"#"===e.trim()}(n))&&e.preventDefault(),o?e.stopPropagation():null==r||r(e)};return"a"===t&&(n||(n="#"),o&&(n=void 0)),[{role:null!=c?c:"button",disabled:void 0,tabIndex:o?void 0:l,href:n,target:"a"===t?i:void 0,"aria-disabled":o||void 0,rel:"a"===t?a:void 0,onClick:m,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),m(e))}},u]}var s=i.forwardRef((function(e,t){var o=e.as,i=e.disabled,s=function(e,t){if(null==e)return{};var o,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,c),l=r(Object.assign({tagName:o,disabled:i},s)),f=(0,n.Z)(l,2),u=f[0],m=f[1].tagName;return(0,a.jsx)(m,Object.assign({},s,u,{ref:t}))}));s.displayName="Button",t.ZP=s},2469:function(e,t,o){var n=o(1413),i=o(45987),a=o(81694),c=o.n(a),r=o(72791),s=o(49807),l=o(39007),f=o(16445),u=o(10162),m=o(72709),d=o(80473),p=o(27472),b=o(66543),h=o(80184),g=["bsPrefix","show","closeLabel","closeVariant","className","children","variant","onClose","dismissible","transition"],w=(0,p.Z)("h4");w.displayName="DivStyledAsH4";var v=(0,b.Z)("alert-heading",{Component:w}),k=(0,b.Z)("alert-link",{Component:f.Z}),x=r.forwardRef((function(e,t){var o=(0,s.Ch)(e,{show:"onClose"}),a=o.bsPrefix,r=o.show,f=void 0===r||r,p=o.closeLabel,b=void 0===p?"Close alert":p,w=o.closeVariant,v=o.className,k=o.children,x=o.variant,y=void 0===x?"primary":x,j=o.onClose,S=o.dismissible,N=o.transition,Z=void 0===N?m.Z:N,T=(0,i.Z)(o,g),F=(0,u.vE)(a,"alert"),C=(0,l.Z)((function(e){j&&j(!1,e)})),D=!0===Z?m.Z:Z,E=(0,h.jsxs)("div",(0,n.Z)((0,n.Z)({role:"alert"},D?void 0:T),{},{ref:t,className:c()(v,F,y&&"".concat(F,"-").concat(y),S&&"".concat(F,"-dismissible")),children:[S&&(0,h.jsx)(d.Z,{onClick:C,"aria-label":b,variant:w}),k]}));return D?(0,h.jsx)(D,(0,n.Z)((0,n.Z)({unmountOnExit:!0},T),{},{ref:void 0,in:f,children:E})):f?E:null}));x.displayName="Alert",t.Z=Object.assign(x,{Link:k,Heading:v})},43360:function(e,t,o){var n=o(1413),i=o(29439),a=o(45987),c=o(81694),r=o.n(c),s=o(72791),l=o(15341),f=o(10162),u=o(80184),m=["as","bsPrefix","variant","size","active","disabled","className"],d=s.forwardRef((function(e,t){var o=e.as,c=e.bsPrefix,s=e.variant,d=void 0===s?"primary":s,p=e.size,b=e.active,h=void 0!==b&&b,g=e.disabled,w=void 0!==g&&g,v=e.className,k=(0,a.Z)(e,m),x=(0,f.vE)(c,"btn"),y=(0,l.FT)((0,n.Z)({tagName:o,disabled:w},k)),j=(0,i.Z)(y,2),S=j[0],N=j[1].tagName;return(0,u.jsx)(N,(0,n.Z)((0,n.Z)((0,n.Z)({},S),k),{},{ref:t,disabled:w,className:r()(v,x,h&&"active",d&&"".concat(x,"-").concat(d),p&&"".concat(x,"-").concat(p),k.href&&w&&"disabled")}))}));d.displayName="Button",t.Z=d},92702:function(e,t,o){o.d(t,{Bu:function(){return b}});var n=o(72791),i=o(52007);function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t,o){return t&&c(e.prototype,t),o&&c(e,o),e}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}function u(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=l(e);if(t){var i=l(this).constructor;o=Reflect.construct(n,arguments,i)}else o=n.apply(this,arguments);return u(this,o)}}function d(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return p(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return p(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,o=String(e);if(0===t)return o;var n=o.match(/(.*?)([0-9]+)(.*)/),i=n?n[1]:"",a=n?n[3]:"",c=n?n[2]:o,r=c.length>=t?c:(d(Array(t)).map((function(){return"0"})).join("")+c).slice(-1*t);return"".concat(i).concat(r).concat(a)}var h={daysInHours:!1,zeroPadTime:2};function g(e,t){var o=e.days,n=e.hours,i=e.minutes,a=e.seconds,c=Object.assign(Object.assign({},h),t),r=c.daysInHours,s=c.zeroPadTime,l=c.zeroPadDays,f=void 0===l?s:l,u=Math.min(2,s),m=r?b(n+24*o,s):b(n,u);return{days:r?"":b(o,f),hours:m,minutes:b(i,u),seconds:b(a,u)}}var w=function(e){s(o,e);var t=m(o);function o(){var e;return a(this,o),(e=t.apply(this,arguments)).state={count:e.props.count||3},e.startCountdown=function(){e.interval=window.setInterval((function(){0===e.state.count-1?(e.stopCountdown(),e.props.onComplete&&e.props.onComplete()):e.setState((function(e){return{count:e.count-1}}))}),1e3)},e.stopCountdown=function(){clearInterval(e.interval)},e.addTime=function(t){e.stopCountdown(),e.setState((function(e){return{count:e.count+t}}),e.startCountdown)},e}return r(o,[{key:"componentDidMount",value:function(){this.startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return this.props.children?(0,n.cloneElement)(this.props.children,{count:this.state.count}):null}}]),o}(n.Component);w.propTypes={count:i.number,children:i.element,onComplete:i.func};var v=function(e){s(o,e);var t=m(o);function o(e){var i;if(a(this,o),(i=t.call(this,e)).mounted=!1,i.initialTimestamp=i.calcOffsetStartTimestamp(),i.offsetStartTimestamp=i.props.autoStart?0:i.initialTimestamp,i.offsetTime=0,i.legacyMode=!1,i.legacyCountdownRef=(0,n.createRef)(),i.tick=function(){var e=i.calcTimeDelta(),t=e.completed&&!i.props.overtime?void 0:i.props.onTick;i.setTimeDeltaState(e,void 0,t)},i.start=function(){if(!i.isStarted()){var e=i.offsetStartTimestamp;i.offsetStartTimestamp=0,i.offsetTime+=e?i.calcOffsetStartTimestamp()-e:0;var t=i.calcTimeDelta();i.setTimeDeltaState(t,"STARTED",i.props.onStart),i.props.controlled||t.completed&&!i.props.overtime||(i.clearTimer(),i.interval=window.setInterval(i.tick,i.props.intervalDelay))}},i.pause=function(){i.isPaused()||(i.clearTimer(),i.offsetStartTimestamp=i.calcOffsetStartTimestamp(),i.setTimeDeltaState(i.state.timeDelta,"PAUSED",i.props.onPause))},i.stop=function(){i.isStopped()||(i.clearTimer(),i.offsetStartTimestamp=i.calcOffsetStartTimestamp(),i.offsetTime=i.offsetStartTimestamp-i.initialTimestamp,i.setTimeDeltaState(i.calcTimeDelta(),"STOPPED",i.props.onStop))},i.isStarted=function(){return i.isStatus("STARTED")},i.isPaused=function(){return i.isStatus("PAUSED")},i.isStopped=function(){return i.isStatus("STOPPED")},i.isCompleted=function(){return i.isStatus("COMPLETED")},e.date){var c=i.calcTimeDelta();i.state={timeDelta:c,status:c.completed?"COMPLETED":"STOPPED"}}else i.legacyMode=!0;return i}return r(o,[{key:"componentDidMount",value:function(){this.legacyMode||(this.mounted=!0,this.props.onMount&&this.props.onMount(this.calcTimeDelta()),this.props.autoStart&&this.start())}},{key:"componentDidUpdate",value:function(e){this.legacyMode||this.props.date!==e.date&&(this.initialTimestamp=this.calcOffsetStartTimestamp(),this.offsetStartTimestamp=this.initialTimestamp,this.offsetTime=0,this.setTimeDeltaState(this.calcTimeDelta()))}},{key:"componentWillUnmount",value:function(){this.legacyMode||(this.mounted=!1,this.clearTimer())}},{key:"calcTimeDelta",value:function(){var e=this.props,t=e.date,o=e.now,n=e.precision,i=e.controlled,a=e.overtime;return function(e){var t,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=o.now,i=void 0===n?Date.now:n,a=o.precision,c=void 0===a?0:a,r=o.controlled,s=o.offsetTime,l=void 0===s?0:s,f=o.overtime;t="string"===typeof e?new Date(e).getTime():e instanceof Date?e.getTime():e,r||(t+=l);var u=r?t:t-i(),m=Math.min(20,Math.max(0,c)),d=Math.round(1e3*parseFloat(((f?u:Math.max(0,u))/1e3).toFixed(m))),p=Math.abs(d)/1e3;return{total:d,days:Math.floor(p/86400),hours:Math.floor(p/3600%24),minutes:Math.floor(p/60%60),seconds:Math.floor(p%60),milliseconds:Number((p%1*1e3).toFixed()),completed:d<=0}}(t,{now:o,precision:n,controlled:i,offsetTime:this.offsetTime,overtime:a})}},{key:"calcOffsetStartTimestamp",value:function(){return Date.now()}},{key:"addTime",value:function(e){this.legacyCountdownRef.current.addTime(e)}},{key:"clearTimer",value:function(){window.clearInterval(this.interval)}},{key:"isStatus",value:function(e){return this.state.status===e}},{key:"setTimeDeltaState",value:function(e,t,o){var n=this;if(this.mounted){var i=e.completed&&!this.state.timeDelta.completed,a=e.completed&&"STARTED"===t;i&&!this.props.overtime&&this.clearTimer();return this.setState((function(o){var i=t||o.status;return e.completed&&!n.props.overtime?i="COMPLETED":t||"COMPLETED"!==i||(i="STOPPED"),{timeDelta:e,status:i}}),(function(){o&&o(n.state.timeDelta),n.props.onComplete&&(i||a)&&n.props.onComplete(e,a)}))}}},{key:"getApi",value:function(){return this.api=this.api||{start:this.start,pause:this.pause,stop:this.stop,isStarted:this.isStarted,isPaused:this.isPaused,isStopped:this.isStopped,isCompleted:this.isCompleted}}},{key:"getRenderProps",value:function(){var e=this.props,t=e.daysInHours,o=e.zeroPadTime,n=e.zeroPadDays,i=this.state.timeDelta;return Object.assign(Object.assign({},i),{api:this.getApi(),props:this.props,formatted:g(i,{daysInHours:t,zeroPadTime:o,zeroPadDays:n})})}},{key:"render",value:function(){if(this.legacyMode){var e=this.props,t=e.count,o=e.children,i=e.onComplete;return(0,n.createElement)(w,{ref:this.legacyCountdownRef,count:t,onComplete:i},o)}var a=this.props,c=a.className,r=a.overtime,s=a.children,l=a.renderer,f=this.getRenderProps();if(l)return l(f);if(s&&this.state.timeDelta.completed&&!r)return(0,n.cloneElement)(s,{countdown:f});var u=f.formatted,m=u.days,d=u.hours,p=u.minutes,b=u.seconds;return(0,n.createElement)("span",{className:c},f.total<0?"-":"",m,m?":":"",d,":",p,":",b)}}]),o}(n.Component);v.defaultProps=Object.assign(Object.assign({},h),{controlled:!1,intervalDelay:1e3,precision:0,autoStart:!0}),v.propTypes={date:(0,i.oneOfType)([(0,i.instanceOf)(Date),i.string,i.number]),daysInHours:i.bool,zeroPadTime:i.number,zeroPadDays:i.number,controlled:i.bool,intervalDelay:i.number,precision:i.number,autoStart:i.bool,overtime:i.bool,className:i.string,children:i.element,renderer:i.func,now:i.func,onMount:i.func,onStart:i.func,onPause:i.func,onStop:i.func,onTick:i.func,onComplete:i.func},t.ZP=v}}]);
//# sourceMappingURL=5821.a9cfcf82.chunk.js.map