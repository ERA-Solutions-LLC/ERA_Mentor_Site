"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[6029,60],{20060:function(t,e,i){i.r(e),i.d(e,{TextAnime:function(){return m},TiltBox:function(){return c}});var a=i(29439),n=i(1413),o=i(72791),l=i(62461),s=i(34290),r=i(80184),c=function(t){return(0,r.jsx)(s.m.div,(0,n.Z)((0,n.Z)({className:"justify-center"},t.animation),{},{children:(0,r.jsx)(l.Z,{highlight:!1,stretchX:0,stretchY:0,rotateTouch:!1,className:"my-atropos ".concat(t.className," w-full"),children:t.children})}))},m=function(t){var e=(0,o.useRef)(null),i=(0,o.useState)(0),n=(0,a.Z)(i,2),l=n[0],c=n[1],m=(0,o.useState)(0),d=(0,a.Z)(m,2),p=d[0],f=d[1],g=(0,o.useState)(0),h=(0,a.Z)(g,2),u=h[0],b=h[1],x=(0,o.useRef)({}),w={"--text-color":"object"===typeof t.color?"linear-gradient(to right, ".concat(t.color.map((function(t){return t})),")"):t.color,"--line-color":"object"===typeof t.lineColor?"linear-gradient(to right, ".concat(t.lineColor.map((function(t){return t})),")"):t.lineColor};return(0,o.useEffect)((function(){var e=setInterval((function(){c((function(e){return e!==t.data.length-1?e+1:0}))}),t.duration);return function(){return clearTimeout(e)}}),[]),(0,o.useEffect)((function(){var t=0,i=0;setTimeout((function(){e.current.querySelectorAll(".cd-words-wrapper > .cd-text").forEach((function(e){t=e.clientWidth>t?e.clientWidth:t,i=e.clientHeight>i?e.clientHeight:i})),f(t+10),b(i)}),1e3)}),[]),(0,r.jsx)(s.m.div,{initial:{width:"auto"},animate:{width:p,height:u},ref:e,className:"cd-words-wrapper".concat(l?" is-loading":"").concat(t.animation?" ".concat(t.animation):"").concat(t.className?" ".concat(t.className):""),style:w,children:t.data.map((function(e,i){return(0,r.jsx)("span",{className:"cd-text".concat(l===i?" is-visible":" is-hidden"),ref:function(t){return x.current[i]=t},children:"type"===t.animation||"flip"===t.animation?e.split("").map((function(a,n){return(0,r.jsx)("i",{className:l===i?"in":"out",style:{transitionDelay:"".concat(t.charSpeed/e.split("").length/2e3*n,"s")},children:a},n)})):e},i)}))})};c.defaultProps={className:"font-serif"}},4356:function(t,e,i){i.d(e,{Z:function(){return A}});var a=i(1413),n=i(72791),o=i(89743),l=i(66543),s=i(45987),r=i(81694),c=i.n(r),m=i(52007),d=i.n(m),p=i(10162),f=i(80184),g=["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"],h={bsPrefix:d().string,fluid:d().bool,rounded:d().bool,roundedCircle:d().bool,thumbnail:d().bool},u=n.forwardRef((function(t,e){var i=t.bsPrefix,n=t.className,o=t.fluid,l=void 0!==o&&o,r=t.rounded,m=void 0!==r&&r,d=t.roundedCircle,h=void 0!==d&&d,u=t.thumbnail,b=void 0!==u&&u,x=(0,s.Z)(t,g);return i=(0,p.vE)(i,"img"),(0,f.jsx)("img",(0,a.Z)((0,a.Z)({ref:e},x),{},{className:c()(n,l&&"".concat(i,"-fluid"),m&&"rounded",h&&"rounded-circle",b&&"".concat(i,"-thumbnail"))}))}));u.displayName="Image";var b=u,x=["className","fluid"],w=n.forwardRef((function(t,e){var i=t.className,n=t.fluid,o=void 0===n||n,l=(0,s.Z)(t,x);return(0,f.jsx)(b,(0,a.Z)((0,a.Z)({ref:e},l),{},{fluid:o,className:c()(i,"figure-img")}))}));w.displayName="FigureImage",w.propTypes=h;var k=w,v=(0,l.Z)("figure-caption",{Component:"figcaption"}),N=(0,l.Z)("figure",{Component:"figure"}),j=Object.assign(N,{Image:k,Caption:v}),y=i(11087),L=i(34290),T=i(86298),E=function(t){return(0,f.jsx)(o.Z,{className:"".concat(t.grid).concat(t.className?" ".concat(t.className):""),lg:3,md:2,children:t.data.map((function(e,i){return(0,f.jsx)(L.m.div,(0,a.Z)((0,a.Z)({className:"col interactive-banners-style-05"},(0,a.Z)((0,a.Z)({},t.animation),{},{transition:{delay:i*t.animationDelay}})),{},{children:(0,f.jsxs)(j,{className:"relative m-0",children:[(0,f.jsxs)("div",{className:"interactive-banners-image relative overflow-hidden rounded-[6px] bg-darkgray",children:[e.img&&(0,f.jsx)("img",{width:"",height:"",alt:"",src:e.img}),(0,f.jsx)("div",{className:"interactive-banners-details absolute top-0 left-0 w-full h-full items-center justify-center flex-col flex",children:(e.btnTitle||e.btnLink)&&(0,f.jsxs)(y.rU,{"aria-label":"link",className:"no-underline h-[100px] w-[100px] p-[20px] rounded-full bg-[#fff] items-center justify-center flex-col flex",to:e.btnLink,children:[(0,f.jsx)("i",{className:"".concat(e.icon," mb-[10px] text-basecolor text-lg block")}),(0,f.jsx)("span",{className:"button-name w-full leading-[14px] font-medium font-serif text-darkgray text-sm uppercase text-center",children:e.btnTitle})]})})]}),(0,f.jsx)("figcaption",{className:"text-center",children:(0,f.jsxs)("div",{className:"bg-white inline-block rounded-[4px] py-[3%] px-[20px] w-[76%] shadow-[0_0_20px_rgba(0,0,0,0.08)] font-serif font-medium uppercase",children:[(0,f.jsx)("span",{className:"text-darkgray uppercase text-md",children:e.title}),(0,f.jsx)("span",{className:"font-serif text-xs block mb-[5px]",children:e.subtitle})]})})]})}),i)}))})};E.defaultProps={data:T.Ht,animationDelay:.2};var A=(0,n.memo)(E)},86298:function(t,e,i){i.d(e,{IE:function(){return l},Yn:function(){return s},o_:function(){return r},W$:function(){return c},Ht:function(){return m},xZ:function(){return d},lW:function(){return p},XD:function(){return f},qk:function(){return g},sw:function(){return h},uy:function(){return u},Iy:function(){return b},pQ:function(){return x},M_:function(){return w}});var a=i.p+"static/media/Advisor.327ca4132f51707b3284.png",n=i.p+"static/media/TeamImg4.9848ff7bb4c9e1293754.png",o=i.p+"static/media/ItCollab.bcf60cbdab90ccc96d17.png",l=[{subtitle:"Branding",title:"Leading branding agency based in washington",btnLink:"/blogs/blog-post-layout-01",img:"https://via.placeholder.com/798x577",icon:"line-icon-Arrow-OutRight"},{subtitle:"Designing",title:"Creative design agency working for huge brands",btnLink:"/blogs/blog-post-layout-02",img:"https://via.placeholder.com/798x577",icon:"line-icon-Arrow-OutRight"},{subtitle:"Development",title:"Development is the process of build websites",btnLink:"/blogs/blog-post-layout-03",img:"https://via.placeholder.com/798x577",icon:"line-icon-Arrow-OutRight"},{subtitle:"Marketing",title:"Reach your ideal customers on the largest network",btnLink:"/blogs/blog-post-layout-04",img:"https://via.placeholder.com/798x577",icon:"line-icon-Arrow-OutRight"}],s=[{subtitle:"Flexible",title:"Bundle of layout type different layout",img:"https://via.placeholder.com/915x716",btnTitle:"Learn more",btnLink:"/page/about-us"},{subtitle:"Unique",title:"We are delivering beautiful products",img:"https://via.placeholder.com/915x716",btnTitle:"Learn more",btnLink:"/page/about-us"},{subtitle:"Responsive",title:"True responsiveness modern responsive",img:"https://via.placeholder.com/915x716",btnTitle:"Learn more",btnLink:"/page/about-us"},{subtitle:"Modern",title:"Beautiful and modern latest page builder",img:"https://via.placeholder.com/915x716",btnTitle:"Learn more",btnLink:"/page/about-us"}],r=[{title:"Build perfect websites",subtitle:"Custom shortcodes",img:"https://via.placeholder.com/800x920",imgLink:"/page/pricing-packages",btnTitle:"Get started now",btnLink:"/page/contact-classic",titleLink:"#",icon:"fas fa-arrow-right"},{title:"Online website builder",subtitle:"Modern framework",img:"https://via.placeholder.com/800x920",imgLink:"/page/pricing-packages",btnTitle:"Get started now",titleLink:"#",btnLink:"/page/contact-classic",icon:"fas fa-arrow-right"},{title:"Different layout type",subtitle:"Different layout",img:"https://via.placeholder.com/800x920",imgLink:"/page/pricing-packages",btnTitle:"Get started now",titleLink:"#",btnLink:"/page/contact-classic",icon:"fas fa-arrow-right"},{title:"Elegant Unique design",subtitle:"True responsiveness",img:"https://via.placeholder.com/800x920",imgLink:"/page/pricing-packages",btnTitle:"Get started now",titleLink:"#",btnLink:"/page/contact-classic",icon:"fas fa-arrow-right"}],c=[{title:"Website design",content:"Lorem ipsum dolor consectetur adipiscing elit do eiusmod tempor incididunt ut labore dolore",img:"https://via.placeholder.com/464x610",btnTitle:"Explore services",btnLink:"/page/our-services",icon:"line-icon-Add-Window"},{title:"eCommerce experience",content:"Lorem ipsum dolor consectetur adipiscing elit do eiusmod tempor incididunt ut labore dolore",img:"https://via.placeholder.com/464x610",btnTitle:"Explore services",btnLink:"/page/our-services",icon:"line-icon-Add-Bag"},{title:"Digital platform",content:"Lorem ipsum dolor consectetur adipiscing elit do eiusmod tempor incididunt ut labore dolore",img:"https://via.placeholder.com/464x610",btnTitle:"Explore services",btnLink:"/page/our-services",icon:"line-icon-Android-Store"},{title:"Interface design",content:"Lorem ipsum dolor consectetur adipiscing elit do eiusmod tempor incididunt ut labore dolore",img:"https://via.placeholder.com/464x610",btnTitle:"Explore services",btnLink:"/page/our-services",icon:"line-icon-Cursor-Click2"}],m=[{title:"Transition Advisor",subtitle:"position open",img:a,btnTitle:"Apply now",btnLink:"/contact",icon:"ti-user"},{title:"Technical Sales Apprentice",subtitle:"position open",img:n,btnTitle:"Apply now",btnLink:"/contact",icon:"ti-user"},{title:"Software Dev Apprentice",subtitle:"position open",img:o,btnTitle:"Apply now",btnLink:"/contact",icon:"ti-user"}],d=[{title:"wedding",img:"https://via.placeholder.com/600x816",btnTitle:"Portfolio",btnLink:"/portfolio/portfolio-justified-gallery",imgLink:"#"},{title:"product",img:"https://via.placeholder.com/600x816",btnTitle:"Portfolio",btnLink:"/portfolio/portfolio-justified-gallery",imgLink:"#"},{title:"outdoor",img:"https://via.placeholder.com/600x816",btnTitle:"Portfolio",btnLink:"/portfolio/portfolio-justified-gallery",imgLink:"#"}],p=[{country:"India",img:"https://via.placeholder.com/525x525",btnTitle:"Explore tours",btnLink:"#",imgLink:"#"},{country:"London",img:"https://via.placeholder.com/525x525",btnTitle:"Explore tours",btnLink:"#",imgLink:"#"},{country:"Australia",img:"https://via.placeholder.com/525x525",btnTitle:"Explore tours",btnLink:"#",imgLink:"#"},{country:"Portugal",img:"https://via.placeholder.com/525x525",btnTitle:"Explore tours",btnLink:"#",imgLink:"#"},{country:"Africa",img:"https://via.placeholder.com/525x525",btnTitle:"Explore tours",btnLink:"#",imgLink:"#"},{country:"Italy",img:"https://via.placeholder.com/525x525",btnTitle:"Explore tours",btnLink:"#",imgLink:"#"},{country:"Nepal",img:"https://via.placeholder.com/525x525",btnTitle:"Explore tours",btnLink:"#",imgLink:"#"},{country:"Indonesia",img:"https://via.placeholder.com/525x525",btnTitle:"Explore tours",btnLink:"#",imgLink:"#"}],f=[{img:"https://via.placeholder.com/868x674",title:"The trescoat spa resort",country:"Africa",btnLink:"#",imgLink:"#"},{img:"https://via.placeholder.com/868x674",country:"Thailand",title:"Moongo spa resort",btnLink:"#",imgLink:"#"},{img:"https://via.placeholder.com/868x674",title:"Grand canyon baloon",country:"Singapore",btnLink:"#",imgLink:"#"}],g=[{img:"https://via.placeholder.com/266x266",title:"Discover forest",subtitle:"+990 Destinations",btnTitle:"Explore all tour",btnLink:"#"},{img:"https://via.placeholder.com/266x266",title:"Mountain madness",subtitle:"+650 Destinations",btnTitle:"Explore all tour",btnLink:"#"},{img:"https://via.placeholder.com/266x266",title:"Unexplored beaches",subtitle:"+250 Destinations",btnTitle:"Explore all tour",btnLink:"#"},{img:"https://via.placeholder.com/266x266",title:"Romantic getaways",subtitle:"+350 Destinations",btnTitle:"Explore all tour",btnLink:"#"}],h=[{img:"https://via.placeholder.com/800x1105",title:"RUNNING HAPPINESS",subtitle:"CREATED TO SUPPORT",btnTitle:"Explore more",btnLink:"#"},{img:"https://via.placeholder.com/800x1105",title:"FITNESS JOURNEY",subtitle:"FEMINIST OVER POWER",btnTitle:"Explore more",btnLink:"#"},{img:"https://via.placeholder.com/800x1105",title:"MAINTAIN FITNESS",subtitle:"SPORT HAPPINESS FANTASY",btnTitle:"Explore more",btnLink:"#"},{img:"https://via.placeholder.com/800x1105",title:"POSSIBLE EXERCISE",subtitle:"POWER OVERWHELMING",btnTitle:"Explore more",btnLink:"#"}],u=[{title:"Design solutions",content:"Lorem ipsum dolor sit consectetur adipiscing sed eiusmod tempor.",img:"https://via.placeholder.com/700x972",btnTitle:"View more",btnLink:"#",icon:"fas fa-angle-right"},{title:"Walls painting",content:"Lorem ipsum dolor sit consectetur adipiscing sed eiusmod tempor.",img:"https://via.placeholder.com/700x972",btnTitle:"View more",btnLink:"#",icon:"fas fa-angle-right"},{title:"Interior decoration",content:"Lorem ipsum dolor sit consectetur adipiscing sed eiusmod tempor.",img:"https://via.placeholder.com/700x972",btnTitle:"View more",btnLink:"#",icon:"fas fa-angle-right"}],b=[{title:"Scott armchair",img:"https://via.placeholder.com/200x193",icon:"line-icon-Arrow-OutRight"},{title:"Portable table",img:"https://via.placeholder.com/200x193",icon:"line-icon-Arrow-OutRight"},{title:"Seating stool",img:"https://via.placeholder.com/200x193",icon:"line-icon-Arrow-OutRight"},{title:"Rocking chair",img:"https://via.placeholder.com/200x193",icon:"line-icon-Arrow-OutRight"}],x=[{img:"https://via.placeholder.com/600x660",title:"Honeymoon package",subtitle:"GET 50% OFF",content:"Lorem ipsum dolor amet adipiscing tempor",btnTitle:"Book Now",btnLink:"#"},{img:"https://via.placeholder.com/600x660",title:"Cocktail package",subtitle:"GET 30% OFF",content:"Lorem ipsum dolor amet adipiscing tempor",btnTitle:"Book Now",btnLink:"#"},{img:"https://via.placeholder.com/600x660",title:"Massage package",subtitle:"GET 50% OFF",content:"Lorem ipsum dolor amet adipiscing tempor",btnTitle:"Book Now",btnLink:"#"}],w=[{img:"https://via.placeholder.com/800x1113",title:"Architecture design",content:"Lorem ipsum is simply dummy text of the printing and typesetting.",btnTitle:"See Portfolio",btnLink:"/portfolio/portfolio-boxed-metro"},{img:"https://via.placeholder.com/800x1113",title:"Structure design",content:"Lorem ipsum is simply dummy text of the printing and typesetting.",btnTitle:"See Portfolio",btnLink:"/portfolio/portfolio-boxed-metro"},{img:"https://via.placeholder.com/800x1113",title:"Furnitures design",content:"Lorem ipsum is simply dummy text of the printing and typesetting.",btnTitle:"See Portfolio",btnLink:"/portfolio/portfolio-boxed-metro"},{img:"https://via.placeholder.com/800x1113",title:"Landscape design",content:"Lorem ipsum is simply dummy text of the printing and typesetting.",btnTitle:"See Portfolio",btnLink:"/portfolio/portfolio-boxed-metro"}]},47790:function(t,e,i){i.d(e,{Z:function(){return j}});var a=i(1413),n=i(72791),o=i(89743),l=i(58563),s=i(51496),r=i(34290),c=i(80184),m=function(t){var e=t.item;return(0,c.jsxs)("figure",{children:[(0,c.jsx)("div",{className:"team-member-image",children:(0,c.jsx)("img",{width:"266",height:"320",loading:"lazy",src:e.img,alt:"images"})}),(0,c.jsxs)("figcaption",{children:[(0,c.jsx)("span",{className:"title",children:e.name}),(0,c.jsx)("span",{className:"sub-title",children:e.designation}),e.social_links&&(0,c.jsx)("div",{className:"social-icon",children:e.social_links.map((function(t,e){return(0,c.jsx)("a",{"aria-label":"team",href:t.link,target:"_blank",rel:"noreferrer",className:"hover:opacity-70",children:(0,c.jsx)("i",{className:t.icon})},e)}))})]})]})},d=(0,n.memo)(m),p=function(t){var e=t.item;return(0,c.jsxs)("figure",{children:[(0,c.jsx)("div",{className:"team-member-image",children:(0,c.jsx)("img",{width:"367",height:"452",loading:"lazy",src:e.img,alt:"images"})}),(0,c.jsxs)("figcaption",{children:[(0,c.jsxs)("div",{className:"team-member-details",children:[(0,c.jsx)("span",{className:"title",children:e.name}),(0,c.jsx)("span",{className:"sub-title",children:e.designation})]}),e.social_links&&(0,c.jsx)("div",{className:"social-icon",children:e.social_links.map((function(t,e){return(0,c.jsx)("a",{"aria-label":"team",href:t.link,target:"_blank",rel:"noopener noreferrer",className:"hover:opacity-70",children:(0,c.jsx)("i",{className:t.icon})},e)}))})]})]})},f=(0,n.memo)(p),g=function(t){var e=t.item;return(0,c.jsxs)("figure",{children:[(0,c.jsx)("div",{className:"team-member-image",children:(0,c.jsx)("img",{width:"auto",height:"444",loading:"lazy",src:e.img,alt:"images"})}),(0,c.jsxs)("figcaption",{children:[(0,c.jsx)("span",{className:"title",children:e.name}),(0,c.jsx)("span",{className:"sub-title",children:e.designation}),e.social_links&&(0,c.jsx)("div",{className:"social-icon",children:e.social_links.map((function(t,e){return(0,c.jsx)("a",{"aria-label":"team",href:t.link,target:"_blank",rel:"noopener noreferrer",className:"hover:opacity-70",children:(0,c.jsx)("i",{className:t.icon})},e)}))})]})]})},h=(0,n.memo)(g),u=function(t){var e=t.item;return(0,c.jsxs)("figure",{children:[(0,c.jsxs)("div",{className:"team-member-image",children:[(0,c.jsx)("img",{width:"370",height:"450",loading:"lazy",src:e.img,alt:"images"}),(0,c.jsxs)("div",{className:"team-member-details",children:[e.title&&(0,c.jsx)("span",{className:"quote",children:e.title}),e.subtitle&&(0,c.jsx)("span",{className:"text-center text-white opacity-70 w-[70%] md:w-full",children:e.subtitle}),e.social_links&&(0,c.jsx)("div",{className:"social-icon",children:e.social_links.map((function(t,e){return(0,c.jsx)("a",{"aria-label":"team",href:t.link,target:"_blank",rel:"noopener noreferrer",children:(0,c.jsx)("i",{className:t.icon})},e)}))})]})]}),(0,c.jsx)("figcaption",{children:(0,c.jsxs)("div",{className:"title-bottom",children:[(0,c.jsx)("span",{className:"title",children:e.name}),(0,c.jsx)("span",{className:"sub-title",children:e.designation})]})})]})},b=(0,n.memo)(u),x=function(t){var e=t.item;return(0,c.jsxs)("figure",{className:"rounded-[6px] shadow-[0_0_20px_rgba(0,0,0,0.08)] overflow-hidden",children:[(0,c.jsx)("div",{className:"team-member-image",children:(0,c.jsx)("img",{width:"370",height:"460",alt:"",loading:"lazy",src:e.img})}),(0,c.jsxs)("figcaption",{className:"bg-[#fff] py-[40px] text-center lg:py-[30px] relative",children:[(0,c.jsx)("div",{className:"team-title text-base font-medium font-serif text-[#262b35] text-uppercase",children:e.name}),(0,c.jsx)("span",{className:"sub-title text-sm font-sans uppercase block mb-[20px] text-[#828282] lg:mb-[10px]",children:e.designation}),e.social_links&&(0,c.jsx)("div",{className:"social-icon font-sans text-[#262b35] text-[15px]",children:e.social_links.map((function(t,e){return(0,c.jsx)("a",{"aria-label":"team",href:t.link,rel:"noreferrer",target:"_blank",className:"mx-[15px]",children:(0,c.jsx)("i",{className:t.icon})},e)}))})]})]})},w=(0,n.memo)(x),k=i(71676),v=function(t,e,i){switch(t.theme){case"team-style-01":default:return(0,c.jsx)(d,{item:e});case"team-style-02":return(0,c.jsx)(f,{item:e});case"team-style-03":return(0,c.jsx)(h,{item:e});case"team-style-04":return(0,c.jsx)(b,{item:e});case"team-style-05":return(0,c.jsx)(w,{item:e})}},N=function(t){var e=n.useRef(null),i={"--brand-color":"object"===typeof t.overlay?"linear-gradient(to right top, ".concat(t.overlay.map((function(t){return t})),")"):t.overlay};return!0===t.carousel?(0,c.jsxs)(r.m.div,(0,a.Z)((0,a.Z)({className:"team-slider-wrapper relative ".concat(t.theme," ").concat(t.themeColor," ").concat(t.className)},t.animation),{},{children:[(0,c.jsx)(l.tq,(0,a.Z)((0,a.Z)({slidesPerView:3,className:"swiper-pagination-dark pb-[50px] black-move",ref:e,modules:[s.W_,s.tl,s.pt]},t.carouselOption),{},{children:t.data.map((function(e,a){return(0,c.jsx)(l.o5,{style:i,className:t.theme,children:v(t,e)},a)}))})),t.carouselOption.navigation&&(0,c.jsxs)("div",{className:"flex",children:[(0,c.jsx)("div",{onClick:function(){return e.current.swiper.slidePrev()},className:"btn-slider-next rounded-full flex justify-center items-center text-darkgray bg-white border-[1px] border-solid border-mediumgray h-[40px] w-[40px] cursor-pointer hover:shadow-xl transition-all duration-800 absolute top-[38%] left-[-90px] right-auto",children:(0,c.jsx)("i",{className:"feather-arrow-left text-xmd"})}),(0,c.jsx)("div",{onClick:function(){return e.current.swiper.slideNext()},className:"btn-slider-prev rounded-full border-[1px] border-solid border-mediumgray bg-white text-darkgray flex justify-center items-center h-[40px] w-[40px] ml-[10px] cursor-pointer hover:shadow-xl transition-all duration-800 absolute top-[38%] right-[-90px] left-auto",children:(0,c.jsx)("i",{className:"feather-arrow-right text-xmd"})})]})]})):(0,c.jsx)(o.Z,{className:"".concat(t.grid?t.grid:"").concat(t.className?" ".concat(t.className):""),children:t.data.map((function(e,n){return(0,c.jsx)(r.m.div,(0,a.Z)((0,a.Z)({style:i,className:"col ".concat(t.theme," ").concat(t.themeColor)},(0,a.Z)((0,a.Z)({},t.animation),{},{transition:{delay:n*t.animationDelay}})),{},{children:v(t,e)}),n)}))})};N.defaultProps={theme:"team-style-01",data:k.Ye,overlay:["#556fffcc","#b263e4cc","#e05fc4cc","#f767a6cc","#ff798ecc"],animationDelay:.5,carouselOption:{slidesPerView:1,spaceBetween:30,loop:!0,navigation:!0,autoplay:{delay:3e3,disableOnInteraction:!1},pagination:{dynamicBullets:!0,clickable:!0},breakpoints:{1200:{slidesPerView:4},992:{slidesPerView:3},768:{slidesPerView:2}}}};var j=(0,n.memo)(N)},71676:function(t,e,i){i.d(e,{O3:function(){return s},Ye:function(){return a},fr:function(){return o},rl:function(){return l},tp:function(){return n}});var a=[{img:"https://via.placeholder.com/525x639",name:"Alexander Harvard",designation:"CO FOUNDER",social_links:[{title:"facebook",link:"https://www.facebook.com",icon:"fab fa-facebook-f"},{title:"instagram",link:"https://www.instagram.com",icon:"fa-brands fa-instagram"},{title:"twitter",link:"https://www.twitter.com",icon:"fa-brands fa-twitter"}]},{img:"https://via.placeholder.com/525x639",name:"Bryan Jonhson",designation:"MANAGER",social_links:[{title:"facebook",link:"https://www.facebook.com",icon:"fab fa-facebook-f"},{title:"instagram",link:"https://www.instagram.com",icon:"fa-brands fa-instagram"},{title:"twitter",link:"https://www.twitter.com",icon:"fa-brands fa-twitter"}]},{img:"https://via.placeholder.com/525x639",name:"Jemmy Watson",designation:"DESIGNER",social_links:[{title:"facebook",link:"https://www.facebook.com",icon:"fab fa-facebook-f"},{title:"instagram",link:"https://www.instagram.com",icon:"fa-brands fa-instagram"},{title:"twitter",link:"https://www.twitter.com",icon:"fa-brands fa-twitter"}]},{img:"https://via.placeholder.com/525x639",name:"Jeremy Dupont",designation:"MANAGER",social_links:[{title:"facebook",link:"https://www.facebook.com",icon:"fab fa-facebook-f"},{title:"instagram",link:"https://www.instagram.com",icon:"fa-brands fa-instagram"},{title:"twitter",link:"https://www.twitter.com",icon:"fa-brands fa-twitter"}]}],n=[{img:"https://via.placeholder.com/721x902",name:"Alexander Harvard",designation:"Operations officer",social_links:[{title:"facebook",link:"https://www.facebook.com",icon:"fab fa-facebook-f"},{title:"instagram",link:"https://www.instagram.com",icon:"fa-brands fa-instagram"},{title:"twitter",link:"https://www.twitter.com",icon:"fa-brands fa-twitter"}]},{img:"https://via.placeholder.com/721x902",name:"Bryan Jonhson",designation:"Graphic designer",social_links:[{title:"facebook",link:"https://www.facebook.com",icon:"fab fa-facebook-f"},{title:"instagram",link:"https://www.instagram.com",icon:"fa-brands fa-instagram"},{title:"twitter",link:"https://www.twitter.com",icon:"fa-brands fa-twitter"}]},{img:"https://via.placeholder.com/721x902",name:"Jeremy Dupont",designation:"Web developer",social_links:[{title:"facebook",link:"https://www.facebook.com",icon:"fab fa-facebook-f"},{title:"instagram",link:"https://www.instagram.com",icon:"fa-brands fa-instagram"},{title:"twitter",link:"https://www.twitter.com",icon:"fa-brands fa-twitter"}]}],o=[{img:"https://via.placeholder.com/375x460",name:"Alexander Harvard",designation:"GENERALIST CONSULTANT",social_links:[{title:"facebook",link:"https://www.facebook.com",icon:"fab fa-facebook-f"},{title:"twitter",link:"https://www.twitter.com",icon:"fa-brands fa-twitter"},{title:"instagram",link:"https://www.instagram.com",icon:"fa-brands fa-instagram"}]},{img:"https://via.placeholder.com/375x460",name:"Bryan Jonhson",designation:"SPECIALIST CONSULTANT",social_links:[{title:"facebook",link:"https://www.facebook.com",icon:"fab fa-facebook-f"},{title:"twitter",link:"https://www.twitter.com",icon:"fa-brands fa-twitter"},{title:"instagram",link:"https://www.instagram.com",icon:"fa-brands fa-instagram"}]},{img:"https://via.placeholder.com/375x460",name:"Jemmy Watson",designation:"FINANCIAL CONSULTANT",social_links:[{title:"facebook",link:"https://www.facebook.com",icon:"fab fa-facebook-f"},{title:"twitter",link:"https://www.twitter.com",icon:"fa-brands fa-twitter"},{title:"instagram",link:"https://www.instagram.com",icon:"fa-brands fa-instagram"}]},{img:"https://via.placeholder.com/375x460",name:"Jeremy Dupont",designation:"BUSINESS CONSULTANT",social_links:[{title:"facebook",link:"https://www.facebook.com",icon:"fab fa-facebook-f"},{title:"twitter",link:"https://www.twitter.com",icon:"fa-brands fa-twitter"},{title:"instagram",link:"https://www.instagram.com",icon:"fa-brands fa-instagram"}]}],l=[{img:"https://via.placeholder.com/800x1000",name:"JEMMY WATSON",designation:"GRAPHIC DESIGNER",title:"I AM CREATIVE",social_links:[{title:"facebook",link:"https://www.facebook.com",icon:"fab fa-facebook-f"},{title:"twitter",link:"https://www.twitter.com",icon:"fa-brands fa-twitter"},{title:"dribbble",link:"https://www.dribbble.com",icon:"fa-brands fa-dribbble"},{title:"linkedin",link:"https://www.linkedin.com",icon:"fa-brands fa-linkedin-in"}]},{img:"https://via.placeholder.com/800x1000",name:"JEREMY DUPONT",designation:"WEB DEVELOPER",title:"I AM TRENDY",social_links:[{title:"facebook",link:"https://www.facebook.com",icon:"fab fa-facebook-f"},{title:"twitter",link:"https://www.twitter.com",icon:"fa-brands fa-twitter"},{title:"dribbble",link:"https://www.dribbble.com",icon:"fa-brands fa-dribbble"},{title:"linkedin",link:"https://www.linkedin.com",icon:"fa-brands fa-linkedin-in"}]},{img:"https://via.placeholder.com/800x1000",name:"BRYAN JONHSON",designation:"OPERATIONS OFFICER",title:"I AM PANCTUAL",social_links:[{title:"facebook",link:"https://www.facebook.com",icon:"fab fa-facebook-f"},{title:"twitter",link:"https://www.twitter.com",icon:"fa-brands fa-twitter"},{title:"dribbble",link:"https://www.dribbble.com",icon:"fa-brands fa-dribbble"},{title:"linkedin",link:"https://www.linkedin.com",icon:"fa-brands fa-linkedin-in"}]}],s=[{img:"https://via.placeholder.com/800x1005",name:"JEMMY WATSON",designation:"BOOTCAMP TRAINER",social_links:[{title:"facebook",link:"https://www.facebook.com",icon:"fab fa-facebook-f"},{title:"instagram",link:"https://www.instagram.com",icon:"fa-brands fa-instagram"},{title:"twitter",link:"https://www.twitter.com",icon:"fa-brands fa-twitter"}]},{img:"https://via.placeholder.com/800x1005",name:"BRYAN JONHSON",designation:"CROSSFIT TRAINER",social_links:[{title:"facebook",link:"https://www.facebook.com",icon:"fab fa-facebook-f"},{title:"instagram",link:"https://www.instagram.com",icon:"fa-brands fa-instagram"},{title:"twitter",link:"https://www.twitter.com",icon:"fa-brands fa-twitter"}]},{img:"https://via.placeholder.com/800x1005",name:"JEREMY DUPONT",designation:"SPINNING TRAINER",social_links:[{title:"facebook",link:"https://www.facebook.com",icon:"fab fa-facebook-f"},{title:"instagram",link:"https://www.instagram.com",icon:"fa-brands fa-instagram"},{title:"twitter",link:"https://www.twitter.com",icon:"fa-brands fa-twitter"}]}]},17305:function(t,e,i){i.r(e),i.d(e,{default:function(){return N}});var a=i(1413),n=i(72791),o=i(11087),l=i(2677),s=i(24552),r=i(47022),c=i(89743),m=i(34290),d=i(35667),p=i(20060),f=i(38392),g=i(21240),h=(i(47790),i(4356)),u=i(43739),b=i(49823),x=i.p+"static/media/TeamImg1.fc27001366a7290ac9e9.jpg",w=(i(19545),i(20681)),k=i(86298),v=i(80184),N=function(t){n.useRef(null);return(0,v.jsxs)("div",{style:t.style,children:[(0,v.jsx)(f.Header,{topSpace:{desktop:!0},type:"reverse-scroll",children:(0,v.jsxs)(f.HeaderNav,{theme:"light",expand:"lg",menu:"light",className:"py-[0px] lg:px-[15px] md:px-0",containerClass:"sm:px-0",children:[(0,v.jsx)(l.Z,{className:"col-auto col-sm-6 col-lg-2 me-auto ps-lg-0",children:(0,v.jsx)(o.rU,{"aria-label":"header logo",className:"flex items-center",to:"/home",children:(0,v.jsxs)(s.Z.Brand,{className:"inline-block p-0 m-0",children:[(0,v.jsx)("img",{className:"default-logo",width:"111",height:"36",loading:"lazy",src:w,alt:"logo"}),(0,v.jsx)("img",{className:"alt-logo",width:"111",height:"36",loading:"lazy",src:w,alt:"logo"}),(0,v.jsx)("img",{className:"mobile-logo",width:"111",height:"36",loading:"lazy",src:w,alt:"logo"})]})})}),(0,v.jsx)("div",{className:"col-auto hidden order-last md:block",children:(0,v.jsxs)(s.Z.Toggle,{className:"md:ml-[10px] sm:ml-0",children:[(0,v.jsx)("span",{className:"navbar-toggler-line"}),(0,v.jsx)("span",{className:"navbar-toggler-line"}),(0,v.jsx)("span",{className:"navbar-toggler-line"}),(0,v.jsx)("span",{className:"navbar-toggler-line"})]})}),(0,v.jsx)(s.Z.Collapse,{className:"col-auto px-0 justify-end",children:(0,v.jsx)(f.Menu,(0,a.Z)({},t))})]})}),(0,v.jsx)(b.default,{}),(0,v.jsx)(m.m.section,(0,a.Z)((0,a.Z)({className:"overflow-hidden pt-[130px] pb-[100px] lg:py-[90px] md:py-[70px] sm:py-[50px] relative bg-cover bg-center bg-no-repeat bg-fixed lg:bg-local",style:{backgroundImage:"url(/assets/img/webp/our-team-bg2.webp)"}},g.Ji),{},{children:(0,v.jsx)(r.Z,{fluid:!0,className:"text-center",children:(0,v.jsxs)(c.Z,{children:[(0,v.jsx)(l.Z,{className:"text-center mb-28 z-0 lg:mb-12 md:mb-20",children:(0,v.jsxs)(p.TiltBox,{children:[(0,v.jsx)("div",{className:"mb-[20px] block",children:(0,v.jsx)("span",{className:"font-serif font-medium text-white uppercase tracking-[1px] text-sm bg-darkgray inline-block px-[20px] py-[5px]",children:"We are Era Solutions. A highly creative team"})}),(0,v.jsx)("span",{className:"font-serif title cover-background font-bold text-center text-[80px] leading-[230px] -tracking-[5px] uppercase bg-darkgray lg:text-[80px] lg:leading-[80px] md:text-[70px] md:leading-[70px] sm:text-[60px] sm:leading-[60px] xs:text-[55px] xs:leading-[55px] xs:-tracking-[1px]",children:"WE ADVANCE, GROW, AND CULTIVATE TOGETHER"})]})}),(0,v.jsx)(d.rU,{to:"position-open",offset:0,delay:0,spy:!0,smooth:!0,duration:800,className:"absolute justify-center bottom-[50px] left-1/2 w-[45px] px-0 flex h-[45px] -translate-x-1/2 sm:bottom-7 box-shadow-small rounded-full cursor-pointer",children:(0,v.jsx)("i",{className:"feather-arrow-down text-lg leading-[1] text-[#e05fc4] bg-white xs:p-[10px] rounded-full flex justify-center items-center"})})]})})})),(0,v.jsx)("section",{className:"pt-0 px-[7%] xl:px-[3%] md:px-[30px] sm:px-0 xs:px-0",children:(0,v.jsx)("div",{className:"bg-slate-50 overflow-hidden pt-36 md:pt-[72px] sm:pt-24",style:{borderRadius:"8%"},children:(0,v.jsx)(r.Z,{children:(0,v.jsxs)(c.Z,{className:"justify-center items-center",children:[(0,v.jsxs)(m.m.div,(0,a.Z)((0,a.Z)({className:"font-medium text-darkgray font-serif pb-[100px] lg:pb-[70px] ml-[97px] lg:ml-[0px] md:text-center col-xl-5 col-lg-6 col-md-7 order-lg-2"},(0,a.Z)((0,a.Z)({},g.Ji),{},{transition:{delay:.5}})),{},{children:[(0,v.jsx)("span",{className:" mb-[35px] text-lg inline-block relative whitespace-nowrap md:text-xmd",children:"Looking to elevate your career? Join Era Solutions."}),(0,v.jsxs)("h4",{className:"-tracking-[.5px] mb-[45px] xs:w-[99%]",children:["Discover our current job openings, connect with our dedicated team, and ",(0,v.jsx)("span",{className:"font-semibold",children:"embark on a transformative journey with us."})]}),(0,v.jsx)(d.rU,{to:"position-open",offset:0,delay:0,spy:!0,smooth:!0,duration:800,children:(0,v.jsx)(u.default,{type:"submit",ariaLabel:"button",className:"font-medium font-Poppins uppercase hover:text-white btn-expand",size:"lg",color:"#3975f6",themeColor:"#232323",title:"Open Jobs",style:{borderRadius:"5%"}})})]})),(0,v.jsx)(l.Z,{xl:{offset:1,span:5},lg:{span:6,order:1,offset:0},children:(0,v.jsx)(m.m.img,(0,a.Z)((0,a.Z)({loading:"lazy",src:x,width:"80%",height:"80%",alt:"Team photo placeholder",className:"mx-auto"},g.Ji),{},{style:{borderRadius:"5%",margin:"4%"}}))})]})})})}),(0,v.jsx)("section",{id:"position-open",className:"py-[130px] lg:pt-[90px] lg:pb-[80px] md:pt-[75px] md:pb-[100px] sm:pt-[50px]",children:(0,v.jsxs)(r.Z,{className:"",children:[(0,v.jsx)(m.m.div,(0,a.Z)((0,a.Z)({className:"row justify-center"},(0,a.Z)((0,a.Z)({},g.Ji),{},{transition:{delay:.2}})),{},{children:(0,v.jsxs)(l.Z,{lg:5,sm:7,className:"col-12  text-center mb-20 sm:mb-12",children:[(0,v.jsx)("span",{className:"font-serif font-medium text-fastblue  block mb-[15px]",children:"Ready to jump-start your career?"}),(0,v.jsx)("h5",{className:"font-serif font-medium text-darkgray inline-block -tracking-[.5px]",children:"If you\u2019re looking for rapid career growth and a positive, encouraging work enviroment, come join us! We are one of the fastest growing companies, who want to advance their careers while helping America\u2019s service members, veterans, and military spouses."})]})})),(0,v.jsx)(c.Z,{className:"justify-center",children:(0,v.jsx)(l.Z,{children:(0,v.jsx)(h.Z,{className:"object-contain h-800 w-610",grid:"row-cols-1 justify-center gap-y-[5.5rem] xs:px-0",data:k.Ht,animation:g.Ji,animationDelay:.3})})})]})})]})}},19545:function(t,e,i){t.exports=i.p+"static/media/TeamImg2.d2c8f394d49e14c48349.jpg"},20681:function(t,e,i){t.exports=i.p+"static/media/era-logo-transparent.45baf6ed0917eac2e841.png"}}]);
//# sourceMappingURL=6029.48acd598.chunk.js.map