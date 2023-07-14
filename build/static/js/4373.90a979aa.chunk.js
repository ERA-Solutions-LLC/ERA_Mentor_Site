"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[4373,2933,4368,3739,5705,9213,7706,1471],{43739:function(e,t,o){o.r(t),o.d(t,{default:function(){return m}});var n=o(1413),a=o(72791),i=o(11087),c=o(43360),l=o(80184),s=function(e){var t=e.themeColor&&e.themeColor[0],o=e.themeColor&&e.themeColor[1],a=e.color&&e.color[0],s=e.color&&e.color[1],m={"--gradient-color":"object"===typeof e.themeColor?"linear-gradient(45deg, ".concat(t,", ").concat(o,", ").concat(t,")"):e.themeColor,"--brand-color":"object"===typeof e.themeColor?"linear-gradient(to right, ".concat(t,", ").concat(o,", ").concat(t,")"):e.themeColor,"--text-color":"object"===typeof e.color?"linear-gradient(to right, ".concat(a,", ").concat(s,", ").concat(a,")"):e.color};return e.href||"submit"===e.type?(0,l.jsx)(c.Z,{as:e.href?"a":"submit"===e.type?"button":"a",type:"submit"===e.type?"submit":void 0,style:m,className:"border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""),href:e.href,onClick:e.onClick,disabled:e.disabled,variant:"secondary","aria-label":e.ariaLabel,target:e.target,children:(0,l.jsx)(r,(0,n.Z)({},e))}):(0,l.jsx)(i.rU,{style:m,target:e.target,className:"btn border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""," "),to:e.to?e.to:"#",onClick:e.onClick,"aria-label":e.ariaLabel,children:(0,l.jsx)(r,(0,n.Z)({},e))})},r=function(e){return(0,l.jsxs)(l.Fragment,{children:[e.icon&&"after"!==e.iconPosition&&(0,l.jsx)("i",{className:"".concat(e.icon," left-icon")}),e.title,e.icon&&"after"===e.iconPosition&&(0,l.jsx)("i",{className:"".concat(e.icon," right-icon")}),"btn-link-gradient"===e.theme&&(0,l.jsx)("span",{})]})};s.defaultProps={size:"lg",style:"primary"};var m=(0,a.memo)(s)},44368:function(e,t,o){o.r(t),o.d(t,{default:function(){return f}});var n=o(1413),a=o(72791),i=o(89743),c=o(34290),l=o(11087),s=o(43739),r=o(98899),m=o(80184),d=function(e){return(0,m.jsx)(i.Z,{className:"".concat(e.grid," md:justify-center"),children:e.data.map((function(t,o){return(0,m.jsx)(c.m.div,(0,n.Z)((0,n.Z)({className:"col".concat(e.theme?" ".concat(e.theme):"").concat(e.className?" ".concat(e.className):"")},(0,n.Z)((0,n.Z)({},e.animation),{},{transition:{delay:o*e.animationDelay,ease:e.animationTransition,duration:e.animationDuration}})),{},{children:(0,m.jsxs)("div",{className:"rounded-md w-full",children:[t.img?(0,m.jsx)("img",{height:42,width:51,className:"inline-block items-center justify-center mb-[30px]",src:t.img,alt:"featurebox"}):t.icon?"icon-with-text-05"===e.theme?(0,m.jsx)(l.rU,{"aria-label":"link for icon",to:"#",children:(0,m.jsx)("i",{className:t.icon})}):(0,m.jsx)("i",{className:t.icon}):t.textIcon?(0,m.jsx)("span",{className:"text-basecolor inline-block icon-text",children:t.textIcon}):(0,m.jsx)("span",{className:"text-basecolor inline-block icon-text",children:"".concat(o<=9?"0":"").concat(o+1)}),(0,m.jsxs)("div",{className:"feature-box-content",children:[t.title&&(0,m.jsx)("span",{className:"font-medium title font-serif",children:t.title}),t.content&&(0,m.jsx)("p",{children:t.content}),"icon-with-text-11"===e.theme?(0,m.jsx)(s.default,{ariaLabel:"iconwithtext",href:"#",className:"font-medium font-serif uppercase btn-link after:h-[2px] after:bg-darkgray md:text-md md:mb-[15px]",size:"xl",color:"#232323",title:"Read more"}):""]}),(t.linkTitle||t.link)&&(0,m.jsx)(s.default,{ariaLabel:"iconwithtext",className:"font-medium font-serif uppercase btn-link after:h-[1px] md:text-md md:mb-[15px] after:bg-basecolor hover:text-basecolor",to:t.link,title:t.linkTitle})]})}),o)}))})};d.defaultProps={data:r.y_,animationDelay:.6,animationDuration:.8,animationTransition:"circOut",theme:"icon-with-text-01"};var f=(0,a.memo)(d)},25705:function(e,t,o){o.r(t);var n=o(1413),a=o(45987),i=o(72791),c=o(92520),l=o(80184),s=["theme","children","className"],r=function(e){var t=e.theme,o=e.children,r=e.className,m=(0,a.Z)(e,s);return(0,i.useEffect)((function(){var e=document.querySelectorAll(".smooth-scrollbar"),t=function(){e.forEach((function(e){setTimeout((function(){var t=e.querySelector(".scroll-content");null!==t&&t.clientHeight>e.clientHeight&&e.classList.add("scrollbar-appear"),null!==t&&t.clientHeight<e.clientHeight&&e.classList.remove("scrollbar-appear")}),500)}))};t(),window.addEventListener("resize",t),document.querySelectorAll(".accordion-button").forEach((function(e){e.addEventListener("click",t)}));var o=document.querySelectorAll(".navbar-nav > .nav-item");"undefined"!=typeof o&&null!=o&&o.forEach((function(e){var o=e.querySelector(".fa");"undefined"!=typeof o&&null!=o&&o.addEventListener("click",t)}))}),[]),(0,l.jsx)(c.Scrollbar,(0,n.Z)((0,n.Z)({},m),{},{className:"smooth-scrollbar ".concat(t).concat(r?" ".concat(r):""),plugins:{overscroll:{effect:"bounce"}},children:o}))};r.defaultProps={theme:"light"},t.default=(0,i.memo)(r)},29213:function(e,t,o){o.r(t),o.d(t,{default:function(){return r}});var n=o(1413),a=o(72791),i=o(34290),c=o(96006),l=o(80184),s=function(e){return(0,l.jsx)("ul",{className:"social-icon flex-wrap gap-y-5 p-0 ".concat(e.theme," ").concat(e.size," ").concat(e.iconColor," ").concat(e.className),children:e.data.map((function(t,o){return"social-icon-style-11"!==e.theme?(0,l.jsx)(i.m.li,(0,n.Z)((0,n.Z)({style:{"--social-icon-color":t.color?t.color:"#000"}},(0,n.Z)((0,n.Z)({},e.animation),{},{transition:{delay:o*e.animationDelay}})),{},{children:(0,l.jsxs)("a",{href:t.link,"aria-label":"social icon",target:"_blank",rel:"noreferrer",children:[t.name&&(0,l.jsx)("span",{className:"flex brand-label",children:t.name?t.name:"icon"}),t.icon&&(0,l.jsx)("i",{className:"".concat(t.icon," brand-icon")}),(0,l.jsx)("span",{})]})}),o):(0,l.jsx)(i.m.li,(0,n.Z)((0,n.Z)({style:{"--social-icon-color":t.color?t.color:"#000"}},(0,n.Z)((0,n.Z)({},e.animation),{},{transition:{delay:o*e.animationDelay}})),{},{children:(0,l.jsxs)("a",{href:t.link,"aria-label":"social icon",target:"_blank",rel:"noreferrer",children:[t.socialback&&(0,l.jsx)("div",{className:"social-back",children:(0,l.jsx)("span",{children:t.socialback})}),(0,l.jsxs)("div",{className:"".concat(t.position," social-front grid"),children:[t.icon&&(0,l.jsx)("i",{className:t.icon}),t.name&&(0,l.jsx)("span",{children:t.name?t.name:"icon"})]})]})}),o)}))})};s.defaultProps={data:c.mc,theme:"social-icon-style-01",size:"lg",iconColor:"light",className:"justify-center",animationDelay:.2};var r=(0,a.memo)(s)},96006:function(e,t,o){o.d(t,{Fg:function(){return l},JV:function(){return h},Q6:function(){return r},Tq:function(){return c},X_:function(){return a},Xy:function(){return m},gE:function(){return f},k9:function(){return s},kJ:function(){return d},mc:function(){return n},y:function(){return i},zm:function(){return b}});var n=[{color:"#0038e3",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#0038e3",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#0038e3",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#0038e3",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0038e3",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#0038e3",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#0038e3",link:"https://www.behance.net/",icon:"fab fa-behance"}],a=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],i=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],c=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],l=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],s=[{color:"#0038e3",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#0038e3",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#0038e3",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#0038e3",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0038e3",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#0038e3",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#0038e3",link:"https://www.behance.net/",icon:"fab fa-behance"}],r=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],m=[{name:"FACEBOOK",color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{name:"DRIBBBLE",color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{name:"BEHANCE",color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"},{name:"INSTAGRAM",color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"}],d=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],f=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#007bb6",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],b=[{position:"top-left",name:"FACEBOOK",color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f",socialback:"LIKE US"},{position:"top",name:"TWITTER",color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter",socialback:"FOLLOW US"},{position:"top-left",name:"LINKEDIN",color:"#007bb6",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in",socialback:"JOIN US"},{position:"top-right",name:"GOOGLE",color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g",socialback:"FOLLOW US"}],h=[{color:"#000",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#000",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#000",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#000",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#000",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#000",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#000",link:"https://www.behance.net/",icon:"fab fa-behance"}]},25308:function(e,t,o){o.d(t,{Z:function(){return b}});var n=o(1413),a=o(72791),i=o(81620),c=o(34290),l=o(89743),s=o(58563),r=o(51496),m=o(80184),d=function(e,t,o){switch(e.theme){case"testimonials-style-01":return(0,m.jsxs)("div",{className:"".concat(e.theme," bg-lightgray relative"),children:[(0,m.jsx)("i",{className:"ti-quote-left absolute -top-[25px] left-[50px] inline-block text-[50px] z-10"}),(0,m.jsx)("p",{className:"text-xmd w-[75%] mb-0 lg:w-[85%] md:w-[80%]",children:t.content}),(0,m.jsxs)("div",{className:"author border-t border-mediumgray flex items-center mt-10 pt-10",children:[t.img&&(0,m.jsx)("img",{width:"",height:"",className:"rounded-circle w-[60px] h-[60px] mr-[19px]",alt:"",src:t.img}),(0,m.jsxs)("div",{className:"inline-block align-middle",children:[t.name&&(0,m.jsx)("span",{className:"font-serif text-md font-medium leading-[20px] text-darkgray block uppercase",children:t.name}),t.designation&&(0,m.jsx)("span",{className:"block text-sm uppercase",children:t.designation})]})]})]});case"testimonials-style-02":return(0,m.jsxs)("div",{className:"".concat(e.theme," "),children:[t.img&&(0,m.jsx)("img",{width:"",height:"",className:"w-full h-auto",src:t.img,alt:""}),(0,m.jsxs)("div",{className:"bg-white p-[49px] text-center relative",children:[(0,m.jsx)("div",{className:"testimonials-rounded-icon absolute -top-[40px] left-1/2 text-[28px] h-[75px] w-[75px] leading-[71px] overflow-hidden bg-white rounded-full flex items-center justify-center",children:(0,m.jsx)("i",{className:"fa fa-quote-left"})}),t.content&&(0,m.jsx)("p",{className:"mb-7",children:t.content}),t.name&&(0,m.jsx)("span",{className:"font-serif font-medium text-center text-darkgray block",children:t.name}),t.designation&&(0,m.jsx)("span",{className:"block font-serif text-sm font-medium",children:t.designation})]})]});case"testimonials-style-03":return(0,m.jsxs)("div",{className:"".concat(e.theme),children:[(0,m.jsx)("div",{className:"testimonials-bubble py-8 px-12 lg:px-8 relative bg-white mb-[35px] rounded",children:t.content&&(0,m.jsx)("p",{className:"mb-0",children:t.content})}),(0,m.jsxs)("div",{className:"px-[20px] flex items-center",children:[t.img&&(0,m.jsx)("img",{width:"",height:"",className:"rounded-circle w-[60px] h-[60px] mr-[19px]",src:t.img,alt:""}),(0,m.jsxs)("div",{className:"inline-block align-middle",children:[t.name&&(0,m.jsx)("span",{className:"font-serif text-md font-medium leading-[24px] text-darkgray block",children:t.name}),t.designation&&(0,m.jsx)("span",{className:"block text-sm",children:t.designation})]})]})]});case"testimonials-style-04":return(0,m.jsxs)("div",{className:"".concat(e.theme),children:[(0,m.jsx)("div",{className:"testimonials-bubble relative rounded-[5px] py-[30px] px-[40px] bg-white mb-[35px]",children:t.content&&(0,m.jsx)("p",{className:"mb-0",children:t.content})}),(0,m.jsxs)("div",{className:"items-center px-[20px] flex",children:[t.img&&(0,m.jsx)("img",{width:"",height:"",className:"rounded-circle w-[60px] h-[60px] mr-[15px]",src:t.img,alt:""}),(0,m.jsxs)("div",{className:"items-center",children:[t.name&&(0,m.jsx)("span",{className:"font-serif text-md leading-[16px] font-medium text-darkgray block",children:t.name}),t.rating&&(0,m.jsx)("div",{className:"star-rating",children:(0,m.jsx)("span",{style:{width:20*"".concat(t.rating)+"%"}})})]})]})]});case"testimonials-style-05":return(0,m.jsx)("div",{className:"".concat(e.theme," bg-white py-[3rem] px-[3.5rem] rounded-lg lg:p-10"),children:(0,m.jsxs)("div",{className:"items-center flex flex-wrap",children:[t&&(0,m.jsx)("img",{width:"",height:"",className:"rounded-circle w-[60px] h-[60px] mr-[20px]",alt:"",src:t.img}),(0,m.jsxs)("div",{children:[t.rating&&(0,m.jsx)("div",{className:"star-rating",children:(0,m.jsx)("span",{style:{width:20*"".concat(t.rating)+"%"}})}),t.name&&(0,m.jsx)("span",{className:"font-serif text-md leading-5 font-medium text-gray-900 block",children:t.name}),t.company&&(0,m.jsx)("span",{className:"text-sm",children:t.company})]}),(0,m.jsx)("div",{className:"testimonials-bubble relative bg-white mt-[25px]",children:t.content&&(0,m.jsx)("p",{className:"mb-0",children:t.content})})]})});default:return(0,m.jsxs)("div",{className:"".concat(e.theme," bg-lightgray relative"),children:[(0,m.jsx)("i",{className:"ti-quote-left"}),(0,m.jsx)("p",{className:"text-xmd w-75 mb-0",children:t.content}),(0,m.jsxs)("div",{className:"author border-t border-mediumgray flex items-center mt-10 pt-10",children:[t.img&&(0,m.jsx)("img",{width:"",height:"",className:"rounded-circle w-[60px] h-[60px] mr-[16px]",alt:"",src:t.img}),(0,m.jsxs)("div",{children:[t.name&&(0,m.jsx)("span",{className:"font-serif text-md font-medium text-darkgray block",children:t.name}),t.designation&&(0,m.jsx)("span",{className:"text-sm",children:t.designation})]})]})]})}},f=function(e){var t=(0,a.useRef)(null);return!0===e.carousel?(0,m.jsx)(s.tq,(0,n.Z)((0,n.Z)({ref:t,modules:[r.W_,r.tl,r.pt,r.N1],className:"testimonials-swiper".concat(e.className?" ".concat(e.className):"")},e.carouselOption),{},{children:e.data.map((function(t,o){return(0,m.jsxs)(s.o5,(0,n.Z)((0,n.Z)({},(0,n.Z)((0,n.Z)({},e.animation),{},{transition:{delay:o*e.animationDelay}})),{},{children:[" ",d(e,t)]}),o)}))})):(0,m.jsx)(l.Z,{className:e.grid,children:e.data.map((function(t,o){return(0,m.jsxs)(c.m.div,(0,n.Z)((0,n.Z)({className:"col flex justify-center".concat(e.className?" ".concat(e.className):"")},(0,n.Z)((0,n.Z)({},e.animation),{},{transition:{delay:o*e.animationDelay}})),{},{children:[" ",d(e,t)]}),o)}))})};f.defaultProps={data:i.W7,animationDelay:.5,theme:"testimonials-style-01",carouselOption:{slidesPerView:1,loop:!0,spaceBetween:20,autoplay:{delay:3e3,disableOnInteraction:!1},navigation:!0,breakpoints:{1200:{slidesPerView:4},992:{slidesPerView:3},768:{slidesPerView:3}}}};var b=(0,a.memo)(f)},81620:function(e,t,o){o.d(t,{A7:function(){return c},J4:function(){return l},Mh:function(){return i},W7:function(){return n},_g:function(){return a}});var n=[{name:"SHOKO MUGIKURA",designation:"GRAPHIC DESIGNER",content:"Their team are easy to work with and helped me make amazing websites in a short amount of time. Thanks guys for all your hard work.",img:"https://via.placeholder.com/125x125"},{name:"JONSAN DONNER",designation:"SALES MANAGER",content:"Trust us we looked for a very long time and wasted thousands of dollars testing other teams, freelancers, and outsource companies.",img:"https://via.placeholder.com/125x125"},{name:"MACKANGY ROSE",designation:"CREATIVE DIRECTOR",content:"This is an excellent company! I personally enjoyed the energy and the professional support the whole team gave to us into creating website.",img:"https://via.placeholder.com/125x125"}],a=[{name:"JEREMY SMITH",designation:"CO FOUNDER",content:"Lorem ipsum dolor amet consectetur do eiusmod tempor incididunt labore ut enim ad minim veniam",img:"https://via.placeholder.com/800x580"},{name:"SHOKO MUGIKURA",designation:"CREATIVE HEAD",content:"Lorem ipsum dolor amet consectetur do eiusmod tempor incididunt labore ut enim ad minim veniam",img:"https://via.placeholder.com/800x580"},{name:"HERMAN MILLER",designation:"HR MANAGER",content:"Lorem ipsum dolor amet consectetur do eiusmod tempor incididunt labore ut enim ad minim veniam",img:"https://via.placeholder.com/800x580"}],i=[{name:"Herman Miller",designation:"ThemeZaa Design",content:"Lorem ipsum dolor amet consectetur do tempor incididunt labore et dolore magna nostrud exercitation ullamco.",img:"https://via.placeholder.com/125x125"},{name:"Jeremy Girard",designation:"Microsoft Corporation",content:"Lorem ipsum dolor amet consectetur do tempor incididunt labore et dolore magna nostrud exercitation ullamco.",img:"https://via.placeholder.com/125x125"},{name:"Alexander Harvard",designation:"ThemeZaa Design",content:"Lorem ipsum dolor amet consectetur do tempor incididunt labore et dolore magna nostrud exercitation ullamco.",img:"https://via.placeholder.com/125x125"}],c=[{name:"Herman Miller",content:"Lorem ipsum dolor amet consectetur do tempor incididunt labore et dolore magna nostrud exercitation ullamco.",img:"https://via.placeholder.com/125x125",rating:5},{name:"Jeremy Girard",content:"Lorem ipsum dolor amet consectetur do tempor incididunt labore et dolore magna nostrud exercitation ullamco.",img:"https://via.placeholder.com/125x125",rating:5},{name:"Alexander Harvard",content:"Lorem ipsum dolor amet consectetur do tempor incididunt labore et dolore magna nostrud exercitation ullamco.",img:"https://via.placeholder.com/125x125",rating:5}],l=[{name:"Herman Miller",content:"Simply superb resort. Management and staff deserve special appreciation and thanks for hospitality.",img:"https://via.placeholder.com/125x125",rating:5},{name:"Loretta Smith",content:"We are back home now and feel that it is only right to write to you to express our warmest gratitude.",img:"https://via.placeholder.com/125x125",rating:5},{name:"Jeremy Girard",content:"Wonderful place to live for holidays. Can\u2019t believe can have such beautiful environment to spend peaceful.",img:"https://via.placeholder.com/125x125",rating:5}]},62752:function(e,t,o){o.d(t,{Z:function(){return a}});var n=o(72791);function a(e,t){(0,n.useEffect)((function(){var o=function(o){e.current&&!e.current.contains(o.target)&&t(o)};return document.addEventListener("mousedown",o),function(){document.removeEventListener("mousedown",o)}}),[e,t])}},10121:function(e,t,o){o.r(t),o.d(t,{default:function(){return j}});var n=o(1413),a=o(72791),i=o(47022),c=o(89743),l=o(2677),s=o(11087),r=o(34290),m=o(29213),d=o(54198),f=o(80184),b=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#007bb6",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],h=function(e){return(0,f.jsx)(d.Footer,{theme:e.theme,parallax:{desktop:!0,lg:!1},className:"".concat(e.className?" ".concat(e.className):""," footer-style-11"),children:(0,f.jsx)(i.Z,{children:(0,f.jsx)(c.Z,{className:"flex justify-center",children:(0,f.jsxs)(l.Z,{lg:8,className:"text-center",children:[(0,f.jsx)("div",{className:"mb-[3.5rem]",children:(0,f.jsx)(m.default,{theme:"social-icon-style-10 justify-center",className:"mb-8 w-full",size:"lg",iconColor:"light",data:b})}),(0,f.jsx)("h4",{className:"font-serif -tracking-[2px] text-slateblue font-light mb-[10px] block",children:"New creative ideas send us an email"}),(0,f.jsx)("h4",{className:"font-serif font-semibold mb-28 text-[2.85rem] leading-[3.4rem]",children:(0,f.jsx)("a",{"aria-label":"mail",rel:"noreferrer",className:"border-none md:mb-[15px] no-underline text-gradient bg-gradient-to-r from-[#5065da] via-[#c557ad] to-[#e66176]",href:"mailto:info@domain.com",children:"info@domain.com"})}),(0,f.jsxs)("p",{className:"mb-0 uppercase text-sm",children:["\xa9 ",(new Date).getFullYear()," Litho is Proudly Powered by ",(0,f.jsx)("a",{"aria-label":"themezaa",rel:"noreferrer",className:"text-themecolor font-serif underline underline-offset-[6px] font-medium text-sm inline-block",href:"https://www.themezaa.com/",target:"_blank",children:" ThemeZaa"})]})]})})})})},p=(0,a.memo)(h),u=o(21240),g=o(44368),x=o(49823),w=o(25308),k=o(98899),v=o(81620),j=function(e){return(0,f.jsxs)("div",{style:e.style,children:[(0,f.jsx)(x.default,{}),(0,f.jsx)("section",{className:"bg-darkgray py-[25px]",children:(0,f.jsx)(i.Z,{children:(0,f.jsxs)(c.Z,{className:"items-center justify-center mb-0",children:[(0,f.jsx)(l.Z,{xl:8,lg:6,children:(0,f.jsx)("h1",{className:"font-serif text-white font-medium mb-0 md:text-center text-lg",children:"Footer style 11"})}),(0,f.jsx)(l.Z,{xl:4,lg:6,className:"breadcrumb justify-end text-xs font-serif md:mt-[10px] mb-0 md:justify-center",children:(0,f.jsxs)("ul",{className:"xs-text-center",children:[(0,f.jsx)("li",{children:(0,f.jsx)(s.rU,{to:"/","aria-label":"footer breadcrumb",className:"hover:text-white",children:"Home"})}),(0,f.jsx)("li",{children:(0,f.jsx)(s.rU,{to:"#","aria-label":"footer breadcrumb",className:"hover:text-white",children:"Features"})}),(0,f.jsx)("li",{children:"Footer"})]})})]})})}),(0,f.jsx)("section",{className:"py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px] bg-white",children:(0,f.jsx)(i.Z,{children:(0,f.jsx)(g.default,{grid:"row-cols-1 row-cols-lg-4 row-cols-sm-2 gap-y-5",theme:"icon-with-text-03 text-center",data:k.RR,animation:u.Ji,animationDelay:0})})}),(0,f.jsx)("section",{className:"bg-[#f7f8fc] py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]",children:(0,f.jsxs)(i.Z,{children:[(0,f.jsx)(c.Z,{className:"justify-center",children:(0,f.jsxs)(r.m.div,(0,n.Z)((0,n.Z)({className:"text-center mb-20 col-xl-5 col-lg-6 col-sm-8"},u.Ji),{},{children:[(0,f.jsx)("span",{className:"text-center font-serif text-md inline-block font-medium text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e] uppercase mb-[20px] sm:mb-[15px]",children:" What people are saying "}),(0,f.jsx)("h5",{className:"font-serif text-[2.3rem] justify-center text-center text-darkgray font-semibold -tracking-[1px]",children:" What our valuable customer are saying about us? "})]}))}),(0,f.jsx)(c.Z,{className:"justify-center",children:(0,f.jsx)(l.Z,{className:"col-12 col-md-12 col-sm-8",children:(0,f.jsx)(w.Z,{grid:"row-cols-1 row-cols-md-2 row-cols-lg-3 gap-y-10 justify-center",theme:"testimonials-style-03",data:v.Mh,animation:u.Ji,animationDelay:.3})})})]})}),(0,f.jsx)(p,{className:"py-[10.5rem] md:py-[8.5rem] bg-darkslateblue",theme:"dark"})]})}},15341:function(e,t,o){o.d(t,{FT:function(){return l}});var n=o(29439),a=o(72791),i=o(80184),c=["as","disabled"];function l(e){var t=e.tagName,o=e.disabled,n=e.href,a=e.target,i=e.rel,c=e.role,l=e.onClick,s=e.tabIndex,r=void 0===s?0:s,m=e.type;t||(t=null!=n||null!=a||null!=i?"a":"button");var d={tagName:t};if("button"===t)return[{type:m||"button",disabled:o},d];var f=function(e){(o||"a"===t&&function(e){return!e||"#"===e.trim()}(n))&&e.preventDefault(),o?e.stopPropagation():null==l||l(e)};return"a"===t&&(n||(n="#"),o&&(n=void 0)),[{role:null!=c?c:"button",disabled:void 0,tabIndex:o?void 0:r,href:n,target:"a"===t?a:void 0,"aria-disabled":o||void 0,rel:"a"===t?i:void 0,onClick:f,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),f(e))}},d]}var s=a.forwardRef((function(e,t){var o=e.as,a=e.disabled,s=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,c),r=l(Object.assign({tagName:o,disabled:a},s)),m=(0,n.Z)(r,2),d=m[0],f=m[1].tagName;return(0,i.jsx)(f,Object.assign({},s,d,{ref:t}))}));s.displayName="Button",t.ZP=s},43360:function(e,t,o){var n=o(1413),a=o(29439),i=o(45987),c=o(81694),l=o.n(c),s=o(72791),r=o(15341),m=o(10162),d=o(80184),f=["as","bsPrefix","variant","size","active","disabled","className"],b=s.forwardRef((function(e,t){var o=e.as,c=e.bsPrefix,s=e.variant,b=void 0===s?"primary":s,h=e.size,p=e.active,u=void 0!==p&&p,g=e.disabled,x=void 0!==g&&g,w=e.className,k=(0,i.Z)(e,f),v=(0,m.vE)(c,"btn"),j=(0,r.FT)((0,n.Z)({tagName:o,disabled:x},k)),N=(0,a.Z)(j,2),y=N[0],F=N[1].tagName;return(0,d.jsx)(F,(0,n.Z)((0,n.Z)((0,n.Z)({},y),k),{},{ref:t,disabled:x,className:l()(w,v,u&&"active",b&&"".concat(v,"-").concat(b),h&&"".concat(v,"-").concat(h),k.href&&x&&"disabled")}))}));b.displayName="Button",t.Z=b}}]);
//# sourceMappingURL=4373.90a979aa.chunk.js.map