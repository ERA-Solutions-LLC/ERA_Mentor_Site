"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[656,9213,2101],{76270:function(e,a,o){var i=o(29439),t=o(72791),l=o(11087),n=o(34290),s=o(75585),c=o(83992),r=o(19630),f=o(80184),m=r.qm.filter((function(e){return"grid"===e.blogType})),p=function(e){var a=(0,t.useRef)(),m=(0,t.useState)(!0),p=(0,i.Z)(m,2),d=p[0],b=p[1];(0,t.useEffect)((function(){Promise.resolve().then(o.bind(o,38480)).then((function(e){e.initializeIsotop(a.current).on("arrangeComplete",(function(){return b(!1)}))}))}),[]);var g={"--overlay-color":"object"===typeof e.overlay?"linear-gradient(to right top, ".concat(e.overlay.map((function(e,a){return e})),")"):e.overlay};return(0,f.jsxs)("div",{className:"grid-wrapper",children:[(0,f.jsx)(c.Z,{title:e.title,filterData:e.filterData,onFilterChange:function(){a.current.querySelectorAll("li").forEach((function(e){var a;return null===(a=e.childNodes[0])||void 0===a?void 0:a.classList.add("appear")}))}}),(0,f.jsxs)("ul",{ref:a,className:"grid-container".concat(e.grid?" ".concat(e.grid):"").concat(d?" loading":"").concat(!1===e.filter?"":" mt-28 md:mt-[4.5rem] sm:mt-8"),children:[(0,f.jsx)("li",{className:"grid-sizer"}),e.data.map((function(a,o){return(0,f.jsx)("li",{className:"grid-item".concat(a.double_col?" grid-item-double":""," ").concat(a.category.map((function(e){return e.split(" ").join("")})).toString().split(",").join(" ").toLowerCase()),children:(0,f.jsxs)(n.m.div,{className:"blog-grid rounded-[5px] overflow-hidden",initial:{opacity:0},whileInView:!d&&{opacity:1},viewport:{once:!0},transition:{duration:.9,ease:"easeOut"},children:[(0,f.jsxs)("div",{className:"blog-post relative overflow-hidden",style:g,children:[(a.link||a.img)&&(0,f.jsx)(l.rU,{"aria-label":"link",to:"".concat(e.link).concat([a.id]),children:(0,f.jsx)("img",{height:245,width:350,src:a.img,alt:"blog"})}),(a.link||a.category)&&(0,f.jsx)(l.rU,{"aria-label":"link",to:"/blogs/category/".concat([a.category[0].toString().split(" ").join("").toLowerCase()]),className:"blog-grid-catagory bg-[#171717bf] font-serif text-white text-xxs uppercase px-[13px] py-[6px] rounded-[2px] absolute top-[23px] right-[23px]",children:a.category[0]})]}),(0,f.jsxs)("div",{className:"px-12 py-10 bg-white sm:px-8 xs:px-12",children:[a.date&&(0,f.jsxs)("span",{className:"mb-[10px] text-sm font-serif inline-block",children:[" ",a.date," "]}),(a.link||a.title)&&(0,f.jsxs)(l.rU,{"aria-label":"link",to:"".concat(e.link).concat([a.id]),className:"font-serif mb-[15px] text-xmd block font-medium text-darkgray hover:text-basecolor",children:[" ",a.title," "]}),a.content&&(0,f.jsxs)("p",{className:"mb-[25px] md:mb-[20px] sm:mb-[15px]",children:[" ",a.content," "]}),(0,f.jsxs)("div",{className:"flex items-center",children:[r.tY.filter((function(e){return e.id===a.author}))&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("img",{width:30,height:30,className:"w-[30px] rounded-full mr-[10px]",src:r.tY.filter((function(e){return e.id===a.author}))[0].img,alt:r.tY.filter((function(e){return e.id===a.author}))[0].name}),(0,f.jsxs)("span",{className:"font-serif text-sm mr-auto",children:["By ",(0,f.jsx)(l.rU,{"aria-label":"link",to:"/blogs/author/".concat(a.author),className:"hover:text-basecolor",children:r.tY.filter((function(e){return e.id===a.author}))[0].name})]})]}),(a.link||a.likes)&&(0,f.jsxs)(l.rU,{"aria-label":"link",to:"#",className:"items-center flex justify-center text-xs font-serif hover:text-basecolor",children:[(0,f.jsx)("i",{className:"far fa-heart mr-[4px]"}),(0,f.jsx)("span",{className:"text-xs font-serif",children:a.likes})]})]})]})]})},o)}))]}),!0===e.pagination&&(0,f.jsx)("div",{className:"flex justify-center mt-[7.5rem] md:mt-20",children:(0,f.jsx)(s.Z,{})})]})};p.defaultProps={filter:!1,data:m,link:"/blog-types/blog-standard-post/"},a.Z=(0,t.memo)(p)},75585:function(e,a,o){o(72791);var i=o(11087),t=o(80184);a.Z=function(){return(0,t.jsxs)("ul",{className:"pagination pagination-style-01 font-sans font-medium items-center",children:[(0,t.jsx)("li",{className:"page-item",children:(0,t.jsx)(i.rU,{"aria-label":"link",className:"page-link",to:"#",children:(0,t.jsx)("i",{className:"feather-arrow-left text-lg"})})}),(0,t.jsx)("li",{className:"page-item",children:(0,t.jsx)(i.rU,{"aria-label":"link",className:"page-link",to:"#",children:" 01 "})}),(0,t.jsx)("li",{className:"page-item active",children:(0,t.jsx)(i.rU,{"aria-label":"link",className:"page-link",to:"#",children:" 02 "})}),(0,t.jsx)("li",{className:"page-item",children:(0,t.jsx)(i.rU,{"aria-label":"link",className:"page-link",to:"#",children:" 03 "})}),(0,t.jsx)("li",{className:"page-item",children:(0,t.jsx)(i.rU,{"aria-label":"link",className:"page-link",to:"#",children:" 04 "})}),(0,t.jsx)("li",{className:"page-item",children:(0,t.jsx)(i.rU,{"aria-label":"link",className:"page-link",to:"#",children:(0,t.jsx)("i",{className:"feather-arrow-right text-lg"})})})]})}},59511:function(e,a,o){var i=o(72791),t=o(11087),l=o(47022),n=o(89743),s=o(2677),c=o(29213),r=o(54198),f=o(52101),m=o(90013),p=o(80184),d=[{color:"#828282",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#828282",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#828282",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#828282",link:"https://www.instagram.com/",icon:"fab fa-instagram"}],b=function(e){return(0,p.jsxs)(r.Footer,{theme:e.theme,className:"".concat(e.className?" ".concat(e.className):""),children:[(0,p.jsx)("div",{className:"py-[5%] lg:py-[95px] md:py-[50px]",children:(0,p.jsx)(l.Z,{children:(0,p.jsxs)(n.Z,{children:[(0,p.jsx)(r.default,{data:m.Z.slice(0,2),lg:3,sm:6,className:"xl:px-[15px] md:mb-[40px] xs:mb-[25px]",titleClass:"capitalize"}),(0,p.jsxs)(s.Z,{lg:3,sm:6,className:"xs:mb-[25px]",children:[(0,p.jsx)("span",{className:"mb-[20px] font-serif block font-medium text-themecolor xs:mb-[10px]",children:"Get in touch"}),(0,p.jsx)("p",{className:"w-[85%] mb-[15px]",children:"27 Eden walk eden centre, Orchard view, Paris, France"}),(0,p.jsxs)("div",{children:[(0,p.jsx)("i",{className:"feather-phone-call text-sm mr-[10px] text-themecolor"}),"+1 234 567 8910"]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("i",{className:"feather-mail text-sm mr-[10px] text-themecolor"}),(0,p.jsx)("a",{"aria-label":"mail",href:"mailTo:info@yourdomain.com",children:"info@yourdomain.com"})]})]}),(0,p.jsxs)(s.Z,{lg:3,sm:6,children:[(0,p.jsx)("span",{className:"mb-[20px] font-medium font-serif text-themecolor block xs:mb-[20px]",children:"Follow us on Instagram"}),(0,p.jsxs)("div",{className:"w-full inline-block",children:[(0,p.jsx)(f.default,{total_posts:3}),(0,p.jsxs)("a",{"aria-label":"link",rel:"noreferrer",href:"https://www.instagram.com/",target:"_blank",className:"flex justify-start text-slateblue font-medium text-xs font-serif uppercase mt-[20px] items-center hover:text-white",children:[(0,p.jsx)("i",{className:"fab fa-instagram text-lg mr-[10px] text-gradient bg-gradient-to-r from-[#ff85a6] to-[#b783ff]"}),(0,p.jsx)("span",{className:"inline-block hover:text-white",children:"Follow instagram"})]})]})]})]})})}),(0,p.jsx)("div",{className:"py-[40px] border-t border-[#ffffff1a]",children:(0,p.jsx)(l.Z,{children:(0,p.jsxs)(n.Z,{children:[(0,p.jsx)(s.Z,{md:3,className:"sm:mb-[20px]",children:(0,p.jsx)(t.rU,{"aria-label":"homepage",to:"/",className:"sm:flex sm:justify-center",children:(0,p.jsx)("img",{alt:"logo",src:e.logo,width:"111",height:"36"})})}),(0,p.jsx)(s.Z,{md:6,className:"flex justify-center items-center text-center sm:mb-[20px]",children:(0,p.jsxs)("p",{className:"mb-0",children:["\xa9 ",(new Date).getFullYear()," Litho is Proudly Powered by ",(0,p.jsx)("a",{"aria-label":"themezaa",rel:"noreferrer",href:"https://www.themezaa.com/",className:"hover:text-white",target:"_blank",children:" ThemeZaa"})]})}),(0,p.jsx)(s.Z,{md:3,className:"text-right sm:text-center",children:(0,p.jsx)(c.default,{size:"xs",theme:"social-icon-style-01",className:"justify-end sm:justify-center",iconColor:"dark"===e.theme?"light":"dark",data:d})})]})})})]})};b.defaultProps={data:m.Z,className:"bg-darkgray text-[#828282]",logo:"/assets/img/webp/logo-white.webp",theme:"light"},a.Z=(0,i.memo)(b)},52101:function(e,a,o){o.r(a);var i=o(29439),t=o(72791),l=o(80184),n=function(e){var a=(0,t.useRef)(),n=(0,t.useState)(!0),s=(0,i.Z)(n,2),c=s[0],r=s[1];return(0,t.useEffect)((function(){Promise.resolve().then(o.bind(o,38480)).then((function(e){e.initializeIsotop(a.current).on("arrangeComplete",(function(){return r(!1)}))}))}),[]),(0,l.jsx)("div",{className:"grid-wrapper mt-[10px]",children:(0,l.jsxs)("ul",{ref:a,className:"instagram-posts grid-container grid grid-3col mx-[-5px] gutter-small".concat(c?" loading":""),children:[(0,l.jsx)("li",{className:"grid-sizer"}),e.data.slice(0,e.total_posts).map((function(e,a){return(0,l.jsx)("li",{className:"grid-item rounded",children:(0,l.jsx)("figure",{className:"relative overflow-hidden rounded-[3px]",children:(0,l.jsxs)("a",{href:e.link,target:"_blank","aria-label":"instagram image",rel:"noreferrer",children:[(0,l.jsx)("img",{height:"112px",width:"112px",alt:"instagram-img",className:"w-full rounded-[3px]",src:e.img}),(0,l.jsx)("i",{className:"fab fa-instagram"})]})})},a)}))]})})};n.defaultProps={data:[{link:"https://www.instagram.com/p/CSMapatMNo8/",img:"https://via.placeholder.com/112x112"},{link:"https://www.instagram.com/p/CSMapatMNo8/",img:"https://via.placeholder.com/112x112"},{link:"https://www.instagram.com/p/CSMapatMNo8/",img:"https://via.placeholder.com/112x112"},{link:"https://www.instagram.com/p/CSMapatMNo8/",img:"https://via.placeholder.com/112x112"},{link:"https://www.instagram.com/p/CSMapatMNo8/",img:"https://via.placeholder.com/112x112"},{link:"https://www.instagram.com/p/CSMapatMNo8/",img:"https://via.placeholder.com/112x112"}],total_posts:6},a.default=(0,t.memo)(n)},29213:function(e,a,o){o.r(a),o.d(a,{default:function(){return r}});var i=o(1413),t=o(72791),l=o(34290),n=o(96006),s=o(80184),c=function(e){return(0,s.jsx)("ul",{className:"social-icon flex-wrap gap-y-5 p-0 ".concat(e.theme," ").concat(e.size," ").concat(e.iconColor," ").concat(e.className),children:e.data.map((function(a,o){return"social-icon-style-11"!==e.theme?(0,s.jsx)(l.m.li,(0,i.Z)((0,i.Z)({style:{"--social-icon-color":a.color?a.color:"#000"}},(0,i.Z)((0,i.Z)({},e.animation),{},{transition:{delay:o*e.animationDelay}})),{},{children:(0,s.jsxs)("a",{href:a.link,"aria-label":"social icon",target:"_blank",rel:"noreferrer",children:[a.name&&(0,s.jsx)("span",{className:"flex brand-label",children:a.name?a.name:"icon"}),a.icon&&(0,s.jsx)("i",{className:"".concat(a.icon," brand-icon")}),(0,s.jsx)("span",{})]})}),o):(0,s.jsx)(l.m.li,(0,i.Z)((0,i.Z)({style:{"--social-icon-color":a.color?a.color:"#000"}},(0,i.Z)((0,i.Z)({},e.animation),{},{transition:{delay:o*e.animationDelay}})),{},{children:(0,s.jsxs)("a",{href:a.link,"aria-label":"social icon",target:"_blank",rel:"noreferrer",children:[a.socialback&&(0,s.jsx)("div",{className:"social-back",children:(0,s.jsx)("span",{children:a.socialback})}),(0,s.jsxs)("div",{className:"".concat(a.position," social-front grid"),children:[a.icon&&(0,s.jsx)("i",{className:a.icon}),a.name&&(0,s.jsx)("span",{children:a.name?a.name:"icon"})]})]})}),o)}))})};c.defaultProps={data:n.mc,theme:"social-icon-style-01",size:"lg",iconColor:"light",className:"justify-center",animationDelay:.2};var r=(0,t.memo)(c)},96006:function(e,a,o){o.d(a,{Fg:function(){return s},JV:function(){return b},Q6:function(){return r},Tq:function(){return n},X_:function(){return t},Xy:function(){return f},gE:function(){return p},k9:function(){return c},kJ:function(){return m},mc:function(){return i},y:function(){return l},zm:function(){return d}});var i=[{color:"#0038e3",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#0038e3",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#0038e3",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#0038e3",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0038e3",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#0038e3",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#0038e3",link:"https://www.behance.net/",icon:"fab fa-behance"}],t=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],l=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],n=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],s=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],c=[{color:"#0038e3",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#0038e3",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#0038e3",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#0038e3",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0038e3",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#0038e3",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#0038e3",link:"https://www.behance.net/",icon:"fab fa-behance"}],r=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],f=[{name:"FACEBOOK",color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{name:"DRIBBBLE",color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{name:"BEHANCE",color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"},{name:"INSTAGRAM",color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"}],m=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],p=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#007bb6",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],d=[{position:"top-left",name:"FACEBOOK",color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f",socialback:"LIKE US"},{position:"top",name:"TWITTER",color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter",socialback:"FOLLOW US"},{position:"top-left",name:"LINKEDIN",color:"#007bb6",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in",socialback:"JOIN US"},{position:"top-right",name:"GOOGLE",color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g",socialback:"FOLLOW US"}],b=[{color:"#000",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#000",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#000",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#000",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#000",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#000",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#000",link:"https://www.behance.net/",icon:"fab fa-behance"}]},31705:function(e,a,o){o.r(a);var i=o(1413),t=(o(72791),o(57689)),l=o(11087),n=o(2677),s=o(24552),c=o(47022),r=o(89743),f=o(76270),m=o(38392),p=o(59511),d=o(49823),b=o(19630),g=o(80184);a.default=function(e){var a=(0,t.TH)();return(0,g.jsxs)("div",{style:e.style,children:[(0,g.jsx)(m.default,{topSpace:{desktop:!0},type:"reverse-scroll",children:(0,g.jsxs)(m.HeaderNav,{fluid:"fluid",theme:"ligt",bg:"white",menu:"light",className:"px-[35px] py-[0px] md:px-0",containerClass:"sm:px-0",children:[(0,g.jsx)(n.Z,{className:"col-auto col-sm-6 col-lg-2 me-auto ps-lg-0",children:(0,g.jsx)(l.rU,{"aria-label":"header logo",className:"flex items-center",to:"/",children:(0,g.jsxs)(s.Z.Brand,{className:"inline-block p-0 m-0",children:[(0,g.jsx)("img",{className:"default-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-fast-blue-black.webp","data-rjs":"/assets/img/webp/logo-fast-blue-black@2x.webp",alt:"logo"}),(0,g.jsx)("img",{className:"alt-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-fast-blue-black.webp","data-rjs":"/assets/img/webp/logo-fast-blue-black@2x.webp",alt:"logo"}),(0,g.jsx)("img",{className:"mobile-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-fast-blue-black.webp","data-rjs":"/assets/img/webp/logo-fast-blue-black@2x.webp",alt:"logo"})]})})}),(0,g.jsx)("div",{className:"col-auto hidden order-last md:block",children:(0,g.jsxs)(s.Z.Toggle,{className:"md:ml-[10px] sm:ml-0",children:[(0,g.jsx)("span",{className:"navbar-toggler-line"}),(0,g.jsx)("span",{className:"navbar-toggler-line"}),(0,g.jsx)("span",{className:"navbar-toggler-line"}),(0,g.jsx)("span",{className:"navbar-toggler-line"})]})}),(0,g.jsx)(s.Z.Collapse,{className:"col-auto px-0 justify-end",children:(0,g.jsx)(m.Menu,(0,i.Z)({},e))}),(0,g.jsxs)(n.Z,{className:"col-auto text-right pe-0",children:[(0,g.jsx)(m.SearchBar,{className:"xs:pl-[15px] pr-0"}),(0,g.jsx)(m.HeaderLanguage,{className:"xs:pl-[15px]"}),(0,g.jsx)(m.HeaderCart,{className:"xs:pl-[15px]",style:{"--base-color":"#0038e3"}})]})]})}),(0,g.jsx)(d.default,{}),(0,g.jsx)("section",{className:"bg-darkgray py-[25px] page-title-small",children:(0,g.jsx)(c.Z,{children:(0,g.jsxs)(r.Z,{className:"items-center justify-center",children:[(0,g.jsx)(n.Z,{xl:8,lg:6,children:(0,g.jsxs)("h1",{className:"font-serif text-lg text-white font-medium mb-0 md:text-center",children:['Search results for "',a.state?a.state.search.search:"Blog",'"']})}),(0,g.jsx)(n.Z,{xl:4,lg:6,className:"breadcrumb justify-end text-sm font-serif mb-0 md:mt-[10px] md:justify-center",children:(0,g.jsxs)("ul",{className:"xs:text-center",children:[(0,g.jsx)("li",{children:(0,g.jsx)(l.rU,{"aria-label":"homepage",to:"/",className:"hover:text-white",children:"Home"})}),(0,g.jsx)("li",{children:(0,g.jsx)(l.rU,{"aria-label":"pages",to:"#",className:"hover:text-white",children:"Pages"})}),(0,g.jsx)("li",{children:"Blog"})]})})]})})}),(0,g.jsx)("section",{className:"px-[11%] xl:px-[2%] xs:px-0 bg-lightgray py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]",children:(0,g.jsx)(c.Z,{fluid:!0,children:(0,g.jsx)(r.Z,{children:(0,g.jsx)(n.Z,{xs:12,className:"xs:px-0",children:(0,g.jsx)(f.Z,{overlay:"#374162",pagination:!0,grid:"grid grid-4col xl-grid-4col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large",data:b.qm.slice(0,12)})})})})}),(0,g.jsx)(p.Z,{theme:"dark",className:"text-slateblue bg-[#262b35]"})]})}}}]);
//# sourceMappingURL=656.fee09dae.chunk.js.map