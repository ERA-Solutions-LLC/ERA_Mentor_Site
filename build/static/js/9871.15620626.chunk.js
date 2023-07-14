"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[9871,2933,384,60],{6117:function(e,t,s){s.d(t,{Z:function(){return c}});var n=s(1413),i=s(72791),a=s(34290),l=s(80184),r=function(e){return(0,l.jsxs)(a.m.blockquote,(0,n.Z)((0,n.Z)({className:"".concat(e.theme).concat(e.className?" ".concat(e.className):"")},e.animation),{},{children:[e.icon&&(0,l.jsx)("i",{className:e.icon}),e.title&&(0,l.jsx)("h6",{children:e.title}),e.author&&(0,l.jsx)("span",{className:"text-basecolor",children:e.author})]}))};r.defaultProps={author:"",theme:"blockquote-style-01",title:"",icon:""};var c=(0,i.memo)(r)},90325:function(e,t,s){var n=s(1413),i=s(72791),a=s(34290),l=s(80184),r=function(e){return(0,l.jsx)(a.m.div,(0,n.Z)((0,n.Z)({className:"".concat(e.theme," ").concat(e.className," contents")},e.animation),{},{children:(0,l.jsxs)("p",{className:"contents",children:[(0,l.jsx)("span",{className:"text-basecolor",children:e.content&&e.content.charAt(0)}),e.content&&e.content.slice(1)]})}))};r.defaultProps={theme:"dropcaps-style01"},t.Z=(0,i.memo)(r)},20060:function(e,t,s){s.r(t),s.d(t,{TextAnime:function(){return m},TiltBox:function(){return o}});var n=s(29439),i=s(1413),a=s(72791),l=s(62461),r=s(34290),c=s(80184),o=function(e){return(0,c.jsx)(r.m.div,(0,i.Z)((0,i.Z)({className:"justify-center"},e.animation),{},{children:(0,c.jsx)(l.Z,{highlight:!1,stretchX:0,stretchY:0,rotateTouch:!1,className:"my-atropos ".concat(e.className," w-full"),children:e.children})}))},m=function(e){var t=(0,a.useRef)(null),s=(0,a.useState)(0),i=(0,n.Z)(s,2),l=i[0],o=i[1],m=(0,a.useState)(0),d=(0,n.Z)(m,2),x=d[0],p=d[1],h=(0,a.useState)(0),u=(0,n.Z)(h,2),f=u[0],g=u[1],b=(0,a.useRef)({}),y={"--text-color":"object"===typeof e.color?"linear-gradient(to right, ".concat(e.color.map((function(e){return e})),")"):e.color,"--line-color":"object"===typeof e.lineColor?"linear-gradient(to right, ".concat(e.lineColor.map((function(e){return e})),")"):e.lineColor};return(0,a.useEffect)((function(){var t=setInterval((function(){o((function(t){return t!==e.data.length-1?t+1:0}))}),e.duration);return function(){return clearTimeout(t)}}),[]),(0,a.useEffect)((function(){var e=0,s=0;setTimeout((function(){t.current.querySelectorAll(".cd-words-wrapper > .cd-text").forEach((function(t){e=t.clientWidth>e?t.clientWidth:e,s=t.clientHeight>s?t.clientHeight:s})),p(e+10),g(s)}),1e3)}),[]),(0,c.jsx)(r.m.div,{initial:{width:"auto"},animate:{width:x,height:f},ref:t,className:"cd-words-wrapper".concat(l?" is-loading":"").concat(e.animation?" ".concat(e.animation):"").concat(e.className?" ".concat(e.className):""),style:y,children:e.data.map((function(t,s){return(0,c.jsx)("span",{className:"cd-text".concat(l===s?" is-visible":" is-hidden"),ref:function(e){return b.current[s]=e},children:"type"===e.animation||"flip"===e.animation?t.split("").map((function(n,i){return(0,c.jsx)("i",{className:l===s?"in":"out",style:{transitionDelay:"".concat(e.charSpeed/t.split("").length/2e3*i,"s")},children:n},i)})):t},s)}))})};o.defaultProps={className:"font-serif"}},78564:function(e,t,s){var n=s(1413),i=s(72791),a=s(80678),l=s(34290),r=s(80184),c=function(e){return(0,r.jsx)("ul",{className:"".concat(e.theme).concat(e.className?" ".concat(e.className):""),children:e.data.map((function(t,s){return(0,r.jsxs)(l.m.li,(0,n.Z)((0,n.Z)({},(0,n.Z)((0,n.Z)({},e.animation),{},{transition:{delay:(s+1)*e.animationDelay,initial:{opacity:0,x:"100%"},ease:[.25,1,.5,1],duration:1.2}})),{},{children:[t.icon&&(0,r.jsx)("i",{className:t.icon}),t.linkTitle&&(0,r.jsx)("a",{"aria-label":"list",href:t.link,children:t.linkTitle}),t.title?(0,r.jsxs)("div",{className:"block",children:[t.title&&(0,r.jsx)("span",{className:"block list-title",children:t.title}),(0,r.jsx)("span",{className:"list-content",children:t.content})]}):(0,r.jsx)("span",{children:t.content}),t.number&&(0,r.jsx)("span",{className:"list-number",children:t.number})]}),s)}))})};c.defaultProps={data:a.I_,theme:"list-style-01",animationDelay:.1},t.Z=(0,i.memo)(c)},80678:function(e,t,s){s.d(t,{BZ:function(){return o},I6:function(){return r},I_:function(){return n},Lm:function(){return a},Vt:function(){return m},X7:function(){return l},kZ:function(){return c},x$:function(){return i}});var n=[{icon:"fas fa-check",content:"Advanced customization theme options"},{icon:"fas fa-check",content:"Manage and share your workspace"},{icon:"fas fa-check",content:"Powerful theme for creatives designer"},{icon:"fas fa-check",content:"Browse amazing popular social features"}],i=[{icon:"feather-arrow-right-circle",content:"Let's collaborate make an impact in the business"},{icon:"feather-arrow-right-circle",content:"A satisfied customer is the best business starts"},{icon:"feather-arrow-right-circle",content:"Expertise to build the things that matter for you"},{icon:"feather-arrow-right-circle",content:"Expertise to build the things that matter for you"}],a=[{icon:"feather-check",content:"GREAT ENVIRONMENT"},{icon:"feather-check",content:"FREE BREAKFAST"},{icon:"feather-check",content:"CLEAN ROOM EVERYDAY"},{icon:"feather-check",content:"NO BOOKING FEE"}],l=[{content:"Do I need a regular license or an extended license"},{content:"Any plugins that bundled with the theme I bought?"},{content:"Buyers guide to youtube content notices?"},{content:"Browse amazing social media features"}],r=[{icon:"far fa-dot-circle",content:"We take this information to build the blueprint"},{icon:"far fa-dot-circle",content:"We're proud of every project we ship will be as well"},{icon:"far fa-dot-circle",content:"We're proud of every project we ship will be as well"}],c=[{content:"Beautiful and easy to understand UI, professional animations"},{content:"Theme advantages are pixel perfect design and clear code"},{content:"Present your services with flexible, convenient and multipurpose"},{content:"Find more creative ideas for your projects"},{content:"Unlimited power and customization possibilities"}],o=[{icon:"fas fa-check",title:"Healthy profits for long term",content:"Lorem ipsum consectetur adipiscing eiusmod tempor incididunt labore."},{icon:"fas fa-check",title:"Working towards your business",content:"Lorem ipsum consectetur adipiscing eiusmod tempor incididunt labore."},{icon:"fas fa-check",title:"Advanced customization options",content:"Lorem ipsum consectetur adipiscing eiusmod tempor incididunt labore."}],m=[{linkTitle:"Entertainment",link:"#",number:"10"},{linkTitle:"Business",link:"#",number:"05"},{linkTitle:"Creative",link:"#",number:"03"},{linkTitle:"Lifestyle",link:"#",number:"02"},{linkTitle:"Fashion",link:"#",number:"19"},{linkTitle:"Design",link:"#",number:"21"}]},384:function(e,t,s){s.r(t);var n=s(72791),i=s(80184),a=function(e){var t=(0,n.useRef)(null);return(0,n.useEffect)((function(){function s(){if(t.current){var s=null===t||void 0===t?void 0:t.current.clientHeight,n=window.innerWidth>=768?s*e.value/100:0;null===t||void 0===t||t.current.style.setProperty("--overlapheight","-".concat(n,"px"))}}window.addEventListener("resize",s);var n=t.current.querySelectorAll("img");n.length>0?n.forEach((function(e){e.addEventListener("load",s)})):s()}),[]),(0,i.jsx)("div",{ref:t,className:"overlap-section".concat(e.className?" ".concat(e.className):""),children:e.children})};a.defaultProps={value:50},t.default=(0,n.memo)(a)},14436:function(e,t,s){s.r(t);var n=s(1413),i=(s(72791),s(34290)),a=s(2677),l=s(24552),r=s(47022),c=s(89743),o=s(11087),m=s(90325),d=s(6117),x=s(20060),p=s(384),h=s(21240),u=s(78564),f=s(29213),g=s(43739),b=s(5104),y=s(38392),j=s(59511),N=s(49823),w=s(20057),v=s(19630),k=s(80184),Z=[{color:"#828282",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#828282",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#828282",link:"https://twitter.com/",icon:"fab fa-twitter"}],T=[{icon:"feather-arrow-right-circle",content:"Beautiful and easy to understand animations"},{icon:"feather-arrow-right-circle",content:"Theme advantages are pixel perfect design"},{icon:"feather-arrow-right-circle",content:"Theme advantages are pixel perfect design"}],L=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],E=v.qm.filter((function(e){return"clean"===e.blogType}));t.default=function(e){return(0,k.jsxs)("div",{style:e.style,children:[(0,k.jsx)(y.default,{topSpace:{md:!0},type:"reverse-scroll",theme:"light",bg:"light",menu:"light",children:(0,k.jsxs)(y.HeaderNav,{fluid:"fluid",theme:"dark",menu:"light",expand:"lg",containerClass:"sm:px-0",className:"py-[0px] px-[35px] md:py-[18px] md:px-0",children:[(0,k.jsx)(a.Z,{sm:6,lg:2,className:"col-auto me-auto ps-lg-0",children:(0,k.jsx)(o.rU,{"aria-label":"header logo",className:"flex items-center",to:"/",children:(0,k.jsxs)(l.Z.Brand,{className:"inline-block p-0 m-0",children:[(0,k.jsx)("img",{className:"default-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-white.webp","data-rjs":"/assets/img/webp/logo-white@2x.webp",alt:"logo"}),(0,k.jsx)("img",{className:"alt-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-black.webp","data-rjs":"/assets/img/webp/logo-black@2x.webp",alt:"logo"}),(0,k.jsx)("img",{className:"mobile-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-black.webp","data-rjs":"/assets/img/webp/logo-black@2x.webp",alt:"logo"})]})})}),(0,k.jsx)("div",{className:"order-last px-[15px] md:ml-[10px] sm:ml-0 hidden md:block",children:(0,k.jsxs)(l.Z.Toggle,{className:"ml-[10px]",children:[(0,k.jsx)("span",{className:"navbar-toggler-line"}),(0,k.jsx)("span",{className:"navbar-toggler-line"}),(0,k.jsx)("span",{className:"navbar-toggler-line"}),(0,k.jsx)("span",{className:"navbar-toggler-line"})]})}),(0,k.jsx)(l.Z.Collapse,{className:"col-auto col-lg-8 justify-center",children:(0,k.jsx)(y.Menu,(0,n.Z)({},e))}),(0,k.jsx)(a.Z,{className:"col-auto col-lg-2 text-end pe-0",children:(0,k.jsx)(f.default,{theme:"social-icon-style-01",size:"xs",iconColor:"light",data:Z,className:"justify-end"})})]})}),(0,k.jsx)(N.default,{}),(0,k.jsx)("section",{className:"h-[700px] sm:h-[400px] xs:h-[300px] cover-background",style:{backgroundImage:"url(https://via.placeholder.com/1920x730)"}}),(0,k.jsx)("section",{className:"pb-0 sm:py-[50px] xs:overflow-hidden",children:(0,k.jsx)(r.Z,{className:"xs:p-0",children:(0,k.jsx)(c.Z,{className:"justify-center z-10",children:(0,k.jsx)(p.default,{className:"!px-0",children:(0,k.jsx)(x.TiltBox,{className:"p-0",children:(0,k.jsxs)(a.Z,{lg:10,className:"font-serif text-center bg-[#ca7741] text-white py-[7rem] px-[15px] relative mx-auto",style:{backgroundImage:"url('/assets/img/webp/blog-post-layout-02-img-pattern.webp')"},children:[(0,k.jsx)("div",{className:"w-[1px] h-[90px] bg-white mx-auto absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"}),(0,k.jsxs)("div",{className:"uppercase text-md font-medium mb-[25px] font-serif",children:[(0,k.jsx)("div",{className:"text-white bg-black"}),(0,k.jsx)(o.rU,{"aria-label":"link",to:"/blogs/blog-grid",className:"text-white inline-block",children:"Creative"}),(0,k.jsx)("span",{className:"mx-[20px] w-[1px] h-[10px] bg-white inline-block"}),(0,k.jsx)(o.rU,{"aria-label":"link",to:"/blogs/blog-grid",className:"inline-block text-white",children:"Freebies"}),(0,k.jsx)("span",{className:"mx-[20px] w-[1px] h-[10px] bg-white inline-block"}),(0,k.jsx)(o.rU,{"aria-label":"link",to:"/blogs/blog-grid",className:"inline-block text-white",children:"Events"})]}),(0,k.jsx)("h3",{className:"font-semibold w-1/2 mx-auto md:w-[70%] xs:w-[90%]",children:"we are a creative pottery studio"}),(0,k.jsxs)("div",{className:"inline-block text-[#ffffffb3]  mt-[5px]",children:["By ",(0,k.jsx)(o.rU,{"aria-label":"link",to:"/blogs/blog-grid",className:"inline-block text-[#e6dfdf] hover:text-[#fff] cursor-pointer",children:"Shane smith "})," on ",(0,k.jsx)("span",{className:"inline-block text-[#e6dfdf]",children:"26 November 2019 "})," "]})]})})})})})}),(0,k.jsx)("section",{className:"py-[160px] overflow-hidden lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]",children:(0,k.jsx)(r.Z,{children:(0,k.jsx)(c.Z,{className:"row justify-center",children:(0,k.jsx)(a.Z,{lg:10,className:"px-0",children:(0,k.jsxs)(c.Z,{className:"items-center",children:[(0,k.jsx)(i.m.div,(0,n.Z)((0,n.Z)({},h.Ji),{},{className:"col-12 col-md-6 sm:mb-[30px] sm:px-[30px]",children:(0,k.jsx)("img",{width:"",height:"",src:"https://via.placeholder.com/800x917",alt:""})})),(0,k.jsxs)(i.m.div,(0,n.Z)((0,n.Z)({},(0,n.Z)((0,n.Z)({},h.Ji),{},{transition:{delay:.6}})),{},{className:"col-12 col-lg-5 offset-lg-1 col-md-6 sm:px-[30px]",children:[(0,k.jsx)("span",{className:"text-[#ca7741] font-serif uppercase font-medium mb-[25px] sm:mb-[15px] block xs:mb-base",children:"The decorative arts"}),(0,k.jsxs)("h5",{className:"font-serif text-darkgray mb-[35px] font-medium xs:mb-[25px]",children:["Pottery is the process and the products of ",(0,k.jsx)("span",{className:"font-semibold",children:"forming vessels"})]}),(0,k.jsx)("p",{children:"Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged."})]}))]})})})})}),(0,k.jsx)("section",{className:"bg-[#ca7741] py-[130px] overflow-hidden lg:py-[90px] md:py-[75px] sm:py-[50px] mx-auto h-[700px] lg:h-[635px] md:h-[571px] sm:h-auto",style:{backgroundImage:"url('/assets/img/webp/blog-post-layout-02-img-pattern.webp')"},children:(0,k.jsx)(r.Z,{children:(0,k.jsx)(i.m.div,(0,n.Z)((0,n.Z)({},h.Ji),{},{className:"row justify-center",children:(0,k.jsxs)(a.Z,{xl:7,lg:8,md:10,className:"text-center",children:[(0,k.jsx)("span",{className:"font-serif block text-white text-uppercase font-medium mb-[25px]",children:"These artists are masters at pottery"}),(0,k.jsx)("h5",{className:"font-serif font-medium text-white inline-block w-[90%] mb-[7%] sm:mb-[10px]",children:"Pottery, one of the oldest and most widespread of the decorative arts"})]})}))})}),(0,k.jsx)("section",{className:"md:pt-0 xs:overflow-hidden pb-0 sm:py-[50px]",children:(0,k.jsx)(r.Z,{children:(0,k.jsx)(c.Z,{className:"justify-center",children:(0,k.jsx)(a.Z,{className:"col-12 col-md-10 px-0",children:(0,k.jsx)(p.default,{children:(0,k.jsxs)(c.Z,{className:"gap-y-5",children:[(0,k.jsxs)(i.m.div,(0,n.Z)((0,n.Z)({},h.Ji),{},{className:"col-12 col-md-6 sm:mb-base xs:px-[30px]",children:[(0,k.jsx)("img",{width:"",height:"",src:"https://via.placeholder.com/800x600",alt:""}),(0,k.jsxs)("div",{className:"p-[63px] lg:p-[58px] bg-darkgray md:p-[3rem]",children:[(0,k.jsx)("h6",{className:"font-serif text-xlg lg:text-lg lg:leading-[24px] md:leading-[26px] text-white",children:"Architecture tends to everything else has become enjoying life"}),(0,k.jsx)("p",{children:"Lorem ipsum has been the industry's standard dummy text ever since when an unknown printer the  took of  the galley of type and scram bled it to make on type in specimen book."})]})]})),(0,k.jsx)(i.m.div,(0,n.Z)((0,n.Z)({},(0,n.Z)((0,n.Z)({},h.Ji),{},{transition:{delay:.6}})),{},{className:"col-12 col-md-6 flex xs:px-[30px]",children:(0,k.jsx)("div",{className:"cover-background w-full sm:h-[450px]",style:{backgroundImage:"url('https://via.placeholder.com/800x1100')"}})}))]})})})})})}),(0,k.jsx)(i.m.section,(0,n.Z)((0,n.Z)({className:"py-[130px] overflow-hidden lg:py-[90px] md:py-[75px] sm:py-[50px]"},h.Ji),{},{children:(0,k.jsx)(r.Z,{children:(0,k.jsx)(c.Z,{className:"justify-center",children:(0,k.jsx)(a.Z,{xs:12,md:10,children:(0,k.jsx)(m.Z,{theme:"dropcaps-style04",content:"Mlorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has suvived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."})})})})})),(0,k.jsx)("section",{children:(0,k.jsx)(r.Z,{fluid:!0,children:(0,k.jsxs)(c.Z,{children:[(0,k.jsx)(i.m.div,(0,n.Z)((0,n.Z)({},h.Ji),{},{className:"col-12 col-xl-4 col-md-6 order-md-2 order-xl-1 text-white flex px-0 justify-center",children:(0,k.jsx)(d.Z,{className:"bg-[#ca7741] p-[8.5rem] xl:p-[5.5rem] md:p-[4.5rem] font-light flex flex-col justify-center",theme:"blockquote-style-01",title:"Architecture tends to consume everything else it has become one's entire life.",icon:"ti-quote-left",author:"- ARNE JACOBSEN"})})),(0,k.jsx)(i.m.div,(0,n.Z)((0,n.Z)({},(0,n.Z)((0,n.Z)({},h.Ji),{},{transition:{delay:.6}})),{},{className:"col-12 col-xl-4 order-md-1 order-xl-2 bg-cover bg-center lg:h-[500px]",style:{backgroundImage:"url('https://via.placeholder.com/800x800')"}})),(0,k.jsxs)(i.m.div,(0,n.Z)((0,n.Z)({},(0,n.Z)((0,n.Z)({},h.Ji),{},{transition:{delay:.8}})),{},{className:"col-12 col-xl-4 col-md-6 order-md-3 bg-darkgray p-[8.5rem] xl:p-[5.5rem] md:p-[4.5rem]",children:[(0,k.jsx)("h5",{className:"font-serif text-white",children:"Pottery is one of the most relaxing things you can watch!"}),(0,k.jsx)("p",{children:"Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been standard dummy text ever since. Lorem ipsum has been book on industry lorem ipsum has been."})]}))]})})}),(0,k.jsx)("section",{className:"py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]",children:(0,k.jsx)(r.Z,{children:(0,k.jsx)(c.Z,{className:"justify-center",children:(0,k.jsx)(a.Z,{lg:10,children:(0,k.jsxs)(i.m.div,(0,n.Z)((0,n.Z)({},h.Ji),{},{className:"row",children:[(0,k.jsx)(a.Z,{md:6,children:(0,k.jsx)("h6",{className:"font-serif text-darkgray w-[80%] font-medium lg:w-[90%] md:w-full",children:"You have to be in tune with the clay and react to what state it\u2019s in to work with it"})}),(0,k.jsx)(a.Z,{md:6,children:(0,k.jsx)("p",{children:"Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been standard dummy text ever since. Lorem ipsum been the industry consectetur eiusmod tempor. Lorem ipsum been the industry tempor."})})]}))})})})}),(0,k.jsx)("section",{className:"cover-background py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]",style:{backgroundImage:"url('https://via.placeholder.com/1920x1100')"},children:(0,k.jsx)(r.Z,{children:(0,k.jsx)(c.Z,{className:"justify-center",children:(0,k.jsx)(i.m.div,(0,n.Z)((0,n.Z)({className:"col-sn-10 col-11"},h.Ji),{},{children:(0,k.jsx)(c.Z,{className:"justify-center flex landscape:lg:justify-center",children:(0,k.jsxs)(a.Z,{xl:7,lg:8,className:"p-24 bg-white drop-shadow-2xl shadow-darkgray xs:p-[3rem]",children:[(0,k.jsx)("h5",{className:"font-serif text-darkgray font-medium",children:"To create, one must first question everything"}),(0,k.jsx)("p",{className:"mb-[25px]",children:"With years of experience in the website design and development industry ThemeZaa pride ourselves on creating unique, creative & quality designs that are developed upon the latest coding."}),(0,k.jsx)(u.Z,{theme:"list-style-02",className:"text-darkgray",data:T,animation:h.Ji,animationDelay:.3})]})})}))})})}),(0,k.jsx)("section",{className:"py-[130px] overflow-hidden lg:py-[90px] md:py-[75px] sm:py-[50px]",children:(0,k.jsx)(r.Z,{children:(0,k.jsx)(c.Z,{className:"row justify-center",children:(0,k.jsx)(a.Z,{xl:10,lg:11,children:(0,k.jsxs)(c.Z,{children:[(0,k.jsx)(i.m.div,(0,n.Z)((0,n.Z)({},h.Ji),{},{className:"col-12 col-md-6 mb-[4.5rem] sm:mb-[8.5rem]",children:(0,k.jsx)("div",{className:"cover-background h-[450px] flex items-end px-[30px] overflow-visible xs:px-[15px]",style:{backgroundImage:"url('https://via.placeholder.com/800x750')"},children:(0,k.jsxs)("div",{className:"text-center bg-white px-[45px] py-[55px] bottom-[-50px] relative shadow-[0_0_20px_rgba(0,0,0,0.08)] lg:px-[35px] xs:px-5 xs:py-[35px]",children:[(0,k.jsx)("span",{className:"text-xmd text-darkgray font-serif mb-[5px] font-medium inline-block",children:"The great building must begin"}),(0,k.jsx)("p",{children:"Lorem ipsum is simply dummy text of the printing and typesetting industry"})]})})})),(0,k.jsx)(i.m.div,(0,n.Z)((0,n.Z)({},(0,n.Z)((0,n.Z)({},h.Ji),{},{transition:{delay:.6}})),{},{className:"col-12 col-md-6 mb-[4.5rem]",children:(0,k.jsx)("div",{className:"cover-background h-[450px] flex items-end px-[30px] overflow-visible xs:px-[15px]",style:{backgroundImage:"url('https://via.placeholder.com/800x750')"},children:(0,k.jsxs)("div",{className:"text-center bg-white px-[45px] py-[55px] bottom-[-50px] relative shadow-[0_0_20px_rgba(0,0,0,0.08)] lg:px-[35px] xs:px-5 xs:py-[35px]",children:[(0,k.jsx)("span",{className:"text-xmd text-darkgray font-serif mb-[5px] font-medium inline-block",children:"There are no rules of architecture"}),(0,k.jsx)("p",{children:"Lorem ipsum is simply dummy text of the on printing and typesetting industry"})]})})}))]})})})})}),(0,k.jsx)(i.m.section,(0,n.Z)((0,n.Z)({},h.Ji),{},{className:"pb-[130px] overflow-hidden lg:pb-[90px] md:pb-[75px] sm:pb-[50px]",children:(0,k.jsxs)(r.Z,{children:[(0,k.jsx)(c.Z,{children:(0,k.jsxs)(a.Z,{lg:10,className:"flex flex-wrap items-center mx-auto mb-[35px] sm:block",children:[(0,k.jsx)(a.Z,{md:9,className:"md:text-start sm:mb-[10px] xs:text-center px-0 sm:justify-center",children:(0,k.jsxs)("div",{className:"tag-cloud flex flex-wrap sm:justify-center gap-y-5",children:[(0,k.jsx)(o.rU,{"aria-label":"tag",className:"!mr-[8px] mb-[10px]",to:"/blogs/blog-grid",children:"Development"}),(0,k.jsx)(o.rU,{"aria-label":"tag",className:"!mr-[8px] mb-[10px]",to:"/blogs/blog-grid",children:"Events"}),(0,k.jsx)(o.rU,{"aria-label":"tag",className:"!mr-[8px] mb-[10px]",to:"/blogs/blog-grid",children:"Media"}),(0,k.jsx)(o.rU,{"aria-label":"tag",className:"!mr-[8px] mb-[10px]",to:"/blogs/blog-grid",children:"Mountains"})]})}),(0,k.jsx)(a.Z,{md:3,className:"text-center md:text-end px-0 flex justify-end sm:justify-center",children:(0,k.jsxs)(o.rU,{"aria-label":"link",className:"uppercase text-darkgray text-xs w-auto font-medium inline-block border border-mediumgray rounded pt-[5px] pb-[6px] px-[18px] mb-[10px] leading-[20px] hover:text-black hover:shadow-[0_0_10px_rgba(23,23,23,0.10)] transition-default",to:"#",children:[(0,k.jsx)("i",{className:"far fa-heart mr-2 text-[#fa5c47]"}),(0,k.jsx)("span",{children:"05 Likes"})]})})]})}),(0,k.jsx)(c.Z,{children:(0,k.jsx)(a.Z,{lg:10,className:"mx-auto mb-[60px] md:mb-[30px] ",children:(0,k.jsxs)("div",{className:"flex items-center w-full bg-white rounded-[5px] p-16 sm:block shadow-[0_0_15px_rgba(0,0,0,0.1)]",children:[(0,k.jsxs)("div",{className:"w-[130px] mr-[60px] sm:mx-auto text-center",children:[(0,k.jsx)("img",{width:"",height:"",src:"https://via.placeholder.com/125x125",className:"rounded-full w-[110px] mx-auto",alt:""}),(0,k.jsx)(o.rU,{"aria-label":"link",to:"/blogs/blog-grid",className:"text-darkgray font-serif font-medium mt-[20px] inline-block text-md hover:text-fastblue",children:"Colene Landin"}),(0,k.jsx)("span",{className:"text-md block leading-[18px] sm:mb-[15px]",children:"Co-founder"})]}),(0,k.jsxs)("div",{className:"w-[75%] md:text-start sm:w-full sm:text-center",children:[(0,k.jsx)("p",{className:"mb-[25px]",children:"Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}),(0,k.jsx)(g.default,{to:"/blogs/blog-grid",className:"font-medium font-serif after:bg-black after:h-[2px] pt-0 hover:text-black uppercase btn-link md:mb-[15px]",color:"#232323",size:"lg",title:"All author posts"})]})]})})}),(0,k.jsx)(c.Z,{children:(0,k.jsx)(a.Z,{className:"col-12 col-lg-10 text-center justify-center mx-auto",children:(0,k.jsx)(f.default,{animation:h.Ji,theme:"social-icon-style-09",className:"mt-auto justify-center",size:"md",iconColor:"dark",data:L})})})]})})),(0,k.jsx)("section",{className:"bg-lightgray py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px] overflow-hidden",children:(0,k.jsxs)(r.Z,{className:"sm:px-0",children:[(0,k.jsx)(c.Z,{className:"justify-center",children:(0,k.jsxs)(a.Z,{lg:5,md:6,className:"text-center mb-20",children:[(0,k.jsx)("span",{className:"font-serif font-medium uppercase inline-block",children:"You may also like"}),(0,k.jsx)("h5",{className:"font-serif font-medium text-darkgray -tracking-[1px]",children:"Related posts"})]})}),(0,k.jsx)(b.Z,{filter:!1,overlay:["#0039e3","#4132e0","#5e28dd","#741bd9","#8600d4"],pagination:"false",grid:"grid grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large",data:E.slice(0,3)})]})}),(0,k.jsx)(w.Z,{}),(0,k.jsx)(j.Z,{theme:"dark",className:"text-slateblue bg-[#262b35]"})]})}}}]);
//# sourceMappingURL=9871.15620626.chunk.js.map