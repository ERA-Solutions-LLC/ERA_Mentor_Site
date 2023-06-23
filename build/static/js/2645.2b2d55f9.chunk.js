"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[2645],{6117:function(e,s,t){t.d(s,{Z:function(){return o}});var a=t(1413),l=t(72791),i=t(34290),r=t(80184),n=function(e){return(0,r.jsxs)(i.m.blockquote,(0,a.Z)((0,a.Z)({className:"".concat(e.theme).concat(e.className?" ".concat(e.className):"")},e.animation),{},{children:[e.icon&&(0,r.jsx)("i",{className:e.icon}),e.title&&(0,r.jsx)("h6",{children:e.title}),e.author&&(0,r.jsx)("span",{className:"text-basecolor",children:e.author})]}))};n.defaultProps={author:"",theme:"blockquote-style-01",title:"",icon:""};var o=(0,l.memo)(n)},8219:function(e,s,t){var a=t(1413),l=(t(72791),t(11087)),i=t(34290),r=t(21240),n=t(43739),o=t(19630),c=t(80184);s.Z=function(e){var s=e.authorId,t=e.className,m=o.tY.filter((function(e){return e.id===s}))[0];return m&&(0,c.jsxs)(i.m.div,(0,a.Z)((0,a.Z)({},r.Ji),{},{className:"flex justify-center items-center w-full shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-[5px] p-16 sm:block".concat(t?" ".concat(t):""),children:[(0,c.jsxs)("div",{className:"w-[130px] mr-[60px] sm:mx-auto text-center",children:[(0,c.jsx)("img",{width:"",height:"",src:m.img,className:"rounded-full w-[110px] mx-auto",alt:m.name}),(0,c.jsx)(l.rU,{"aria-label":"link",to:"/blogs/author/".concat(s),className:"text-darkgray font-serif font-medium mt-[20px] block text-md hover:text-fastblue",children:m.name}),(0,c.jsx)("span",{className:"text-medium block leading-[18px] sm:mb-[25px]",children:m.designation})]}),(0,c.jsxs)("div",{className:"w-[75%] md:text-start sm:w-full sm:text-center",children:[(0,c.jsx)("p",{className:"mb-[25px]",children:m.description}),(0,c.jsx)(n.default,{ariaLabel:"authorbox",to:"/blogs/author/".concat(s),className:"font-medium font-serif after:h-[2px] after:bg-black hover:text-black uppercase btn-link md:mb-[15px]",size:"md",color:"#232323",title:"All author posts"})]})]}))}},79629:function(e,s,t){var a=t(1413),l=t(74165),i=t(15861),r=(t(72791),t(92506)),n=t(81724),o=t(57689),c=t(11087),m=t(34290),x=t(52101),d=t(29213),p=t(17728),h=t(19630),b=t(21240),g=t(80184),u=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"}];s.Z=function(e){var s=(0,o.s0)();return(0,g.jsxs)("aside",{className:"col-12 col-xl-3 offset-xl-1 col-lg-4 col-md-7 md:pl-[15px]",children:[(0,g.jsxs)("div",{className:"inline-block w-full mb-20",children:[(0,g.jsx)("span",{className:"mb-[25px] font-medium text-darkgray text-lg font-serif block",children:"Search posts"}),(0,g.jsx)("div",{className:"relative",children:(0,g.jsx)(r.J9,{initialValues:{search:""},validationSchema:n.Ry().shape({search:n.Z_().required("Field is required.")}),onSubmit:function(){var e=(0,i.Z)((0,l.Z)().mark((function e(t,a){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,500)}));case 2:a.resetForm(),s("/page/search-result",{state:{search:t}});case 4:case"end":return e.stop()}}),e)})));return function(s,t){return e.apply(this,arguments)}}(),children:function(e){var s=e.isSubmitting;e.status;return(0,g.jsx)("div",{className:"relative",children:(0,g.jsxs)(r.l0,{className:"relative",children:[(0,g.jsx)(p.II,{showErrorMsg:!1,type:"text",name:"search",className:"border-[1px] py-[15px] px-[20px] w-full rounded-[5px] border-solidborder-transparent",placeholder:"Enter your keyword..."}),(0,g.jsx)("button",{type:"submit",className:"text-xs tracking-[1px] text-fastblue py-[15px] !absolute top-[8%] right-0 px-[20px] uppercase".concat(s?" loading":""),children:(0,g.jsx)("i",{className:"feather-search"})})]})})}})})]}),(0,g.jsxs)("div",{className:"p-[38px] mb-20 rounded-[4px] border-mediumgray border text-center",children:[h.tY&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(c.rU,{"aria-label":"link",to:"#",children:(0,g.jsx)("img",{height:"",width:"",src:h.tY.filter((function(s){return s.id===e.data[0].author}))[0].img,alt:h.tY.filter((function(s){return s.id===e.data[0].author}))[0].name,className:"mb-[5px] rounded-[50%] block mx-auto w-[100px]"})}),(0,g.jsx)(c.rU,{"aria-label":"link",to:"#",className:"mt-[20px] font-medium text-darkgray text-md font-serif inline-block",children:h.tY.filter((function(s){return s.id===e.data[0].author}))[0].name})]}),(0,g.jsx)("span",{className:"mb-[20px] leading-[18px] text-[14px] block",children:"Co-founder"}),(0,g.jsx)("p",{className:"mb-[25px]",children:"Lorem ipsum is simply dummy text of the printing and industry lorem ipsum has been standard."}),(0,g.jsx)(d.default,{theme:"social-icon-style-01",size:"xs",iconColor:"dark",data:u.slice(0,4)})]}),(0,g.jsxs)("div",{className:"mb-20 xs:mb-[35px]",children:[(0,g.jsx)(m.m.span,(0,a.Z)((0,a.Z)({className:"mb-[35px] font-medium font-serif text-darkgray text-lg block"},b.Ji),{},{children:"Categories"})),(0,g.jsxs)(m.m.ul,(0,a.Z)((0,a.Z)({className:"pl-0"},b.Ji),{},{children:[(0,g.jsxs)("li",{className:"relative inline-block w-full mb-[15px] leading-[18px]",children:[(0,g.jsx)(c.rU,{"aria-label":"link",to:"/blogs/blog-grid",className:"inline-block text-left",children:"Entertainment"}),(0,g.jsx)("span",{className:"text-[14px] absolute top-[1px] right-0 text-right",children:"10"})]}),(0,g.jsxs)("li",{className:"relative inline-block w-full mb-[15px] leading-[18px]",children:[(0,g.jsx)(c.rU,{"aria-label":"link",to:"/blogs/blog-grid",className:"inline-block text-left",children:"Business"}),(0,g.jsx)("span",{className:"text-[14px] absolute top-[1px] right-0 text-right",children:"05"})]}),(0,g.jsxs)("li",{className:"relative inline-block w-full mb-[15px] leading-[18px]",children:[(0,g.jsx)(c.rU,{"aria-label":"link",to:"/blogs/blog-grid",className:"inline-block text-left",children:"Creative"}),(0,g.jsx)("span",{className:"text-[14px] absolute top-[1px] right-0 text-right",children:"03"})]}),(0,g.jsxs)("li",{className:"relative inline-block w-full mb-[15px] leading-[18px]",children:[(0,g.jsx)(c.rU,{"aria-label":"link",to:"/blogs/blog-grid",className:"inline-block text-left",children:"Lifestyle"}),(0,g.jsx)("span",{className:"text-[14px] absolute top-[1px] right-0 text-right",children:"02"})]}),(0,g.jsxs)("li",{className:"relative inline-block w-full mb-[15px] leading-[18px]",children:[(0,g.jsx)(c.rU,{"aria-label":"link",to:"/blogs/blog-grid",className:"inline-block text-left",children:"Fashion"}),(0,g.jsx)("span",{className:"text-[14px] absolute top-[1px] right-0 text-right",children:"19"})]}),(0,g.jsxs)("li",{className:"relative inline-block w-full leading-[18px] mb-0",children:[(0,g.jsx)(c.rU,{"aria-label":"link",to:"/blogs/blog-grid",className:"inline-block text-left",children:"Design"}),(0,g.jsx)("span",{className:"text-[14px] absolute top-[1px] right-0 text-right",children:"21"})]})]}))]}),(0,g.jsxs)("div",{className:"mb-20 xs:mb-[35px]",children:[(0,g.jsx)("span",{className:"mb-[35px] font-medium font-serif text-darkgray text-lg block",children:"Recent posts"}),(0,g.jsxs)("ul",{children:[(0,g.jsxs)(m.m.li,(0,a.Z)((0,a.Z)({className:"flex mb-[45px]"},(0,a.Z)((0,a.Z)({},b.Ji),{},{transition:{delay:.2}})),{},{children:[(0,g.jsx)("figure",{className:"h-[65px] w-[80px] m-0 shrink-0\t",children:(0,g.jsx)(c.rU,{"aria-label":"link",to:"/blogs/blog-post-layout-01",children:(0,g.jsx)("img",{height:"",width:"",src:"https://via.placeholder.com/940x940",alt:"",className:"rounded-[3px]"})})}),(0,g.jsxs)("div",{className:"leading-normal pl-[30px] relative top-[-3px] grow",children:[(0,g.jsx)(c.rU,{"aria-label":"link",to:"/blogs/blog-post-layout-01",className:"mb-[5px] sm:mb-0 font-medium text-darkgray inline-block",children:"Fashion is anything"}),(0,g.jsx)("span",{className:"leading-[22px] text-[14px] block",children:"Lorem ipsum is simply as dummy text of the..."})]})]})),(0,g.jsxs)(m.m.li,(0,a.Z)((0,a.Z)({className:"flex mb-[45px]"},(0,a.Z)((0,a.Z)({},b.Ji),{},{transition:{delay:.4}})),{},{children:[(0,g.jsx)("figure",{className:"h-[65px] w-[80px] m-0 shrink-0\t",children:(0,g.jsx)(c.rU,{"aria-label":"link",to:"/blogs/blog-post-layout-02",children:(0,g.jsx)("img",{height:"",width:"",src:"https://via.placeholder.com/800x800",alt:"",className:"rounded-[3px]"})})}),(0,g.jsxs)("div",{className:"leading-normal pl-[30px] relative top-[-3px] grow",children:[(0,g.jsx)(c.rU,{"aria-label":"link",to:"/blogs/blog-post-layout-02",className:"mb-[5px] sm:mb-0 font-medium text-darkgray inline-block",children:"Design transcends"}),(0,g.jsx)("span",{className:"leading-[22px] text-[14px] block",children:"Lorem ipsum is simply as dummy text of the..."})]})]})),(0,g.jsxs)(m.m.li,(0,a.Z)((0,a.Z)({className:"flex mb-[45px]"},(0,a.Z)((0,a.Z)({},b.Ji),{},{transition:{delay:.6}})),{},{children:[(0,g.jsx)("figure",{className:"h-[65px] w-[80px] m-0 shrink-0\t",children:(0,g.jsx)(c.rU,{"aria-label":"link",to:"/blogs/blog-post-layout-03",children:(0,g.jsx)("img",{src:"https://via.placeholder.com/800x800",alt:"",height:"",width:"",className:"rounded-[3px]"})})}),(0,g.jsxs)("div",{className:"leading-normal pl-[30px] relative top-[-3px] grow",children:[(0,g.jsx)(c.rU,{"aria-label":"link",to:"/blogs/blog-post-layout-03",className:"mb-[5px] sm:mb-0 font-medium text-darkgray inline-block",children:"Never give in except"}),(0,g.jsx)("span",{className:"leading-[22px] text-[14px] block",children:"Lorem ipsum is simply as dummy text of the..."})]})]}))]})]}),(0,g.jsxs)(m.m.div,(0,a.Z)((0,a.Z)({className:"visible mb-20 md:w-[90%] sm:w-full"},b.Ji),{},{children:[(0,g.jsx)("span",{className:"mb-[35px] font-medium font-serif text-darkgray text-lg block",children:"Tags cloud"}),(0,g.jsx)(c.rU,{"aria-label":"tag",to:"/blogs/blog-grid",className:"inline-block text-center text-sm mt-0 ml-[6px] mb-[10px] mr-0 pt-[5px] px-[18px] pb-[6px] rounded-[4px] border-mediumgray border hover:text-[#828282] hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]",children:"Development"}),(0,g.jsx)(c.rU,{"aria-label":"tag",to:"/blogs/blog-grid",className:"inline-block text-center text-sm mt-0 ml-[6px] mb-[10px] mr-0 pt-[5px] px-[18px] pb-[6px] rounded-[4px] border-mediumgray border hover:text-[#828282] hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]",children:"Mountains"}),(0,g.jsx)(c.rU,{"aria-label":"tag",to:"/blogs/blog-grid",className:"inline-block text-center text-sm mt-0 ml-[6px] mb-[10px] mr-0 pt-[5px] px-[18px] pb-[6px] rounded-[4px] border-mediumgray border hover:text-[#828282] hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]",children:"Lifestyle"}),(0,g.jsx)(c.rU,{"aria-label":"tag",to:"/blogs/blog-grid",className:"inline-block text-center text-sm mt-0 ml-[6px] mb-[10px] mr-0 pt-[5px] px-[18px] pb-[6px] rounded-[4px] border-mediumgray border hover:text-[#828282] hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]",children:"Hotel"}),(0,g.jsx)(c.rU,{"aria-label":"tag",to:"/blogs/blog-grid",className:"inline-block text-center text-sm mt-0 ml-[6px] mb-[10px] mr-0 pt-[5px] px-[18px] pb-[6px] rounded-[4px] border-mediumgray border hover:text-[#828282] hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]",children:"Event"}),(0,g.jsx)(c.rU,{"aria-label":"tag",to:"/blogs/blog-grid",className:"inline-block text-center text-sm mt-0 ml-[6px] mb-[10px] mr-0 pt-[5px] px-[18px] pb-[6px] rounded-[4px] border-mediumgray border hover:text-[#828282] hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]",children:"Multimedia "}),(0,g.jsx)(c.rU,{"aria-label":"tag",to:"/blogs/blog-grid",className:"inline-block text-center text-sm mt-0 ml-[6px] mb-[10px] mr-0 pt-[5px] px-[18px] pb-[6px] rounded-[4px] border-mediumgray border hover:text-[#828282] hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]",children:"Fashion"})]})),(0,g.jsxs)(m.m.div,(0,a.Z)((0,a.Z)({},b.Ji),{},{children:[(0,g.jsx)("span",{className:"mb-[35px] font-medium font-serif text-darkgray text-lg block",children:"Instagram"}),(0,g.jsx)(x.default,{})]}))]})}},90325:function(e,s,t){var a=t(1413),l=t(72791),i=t(34290),r=t(80184),n=function(e){return(0,r.jsx)(i.m.div,(0,a.Z)((0,a.Z)({className:"".concat(e.theme," ").concat(e.className," contents")},e.animation),{},{children:(0,r.jsxs)("p",{className:"contents",children:[(0,r.jsx)("span",{className:"text-basecolor",children:e.content&&e.content.charAt(0)}),e.content&&e.content.slice(1)]})}))};n.defaultProps={theme:"dropcaps-style01"},s.Z=(0,l.memo)(n)},23959:function(e,s,t){t.r(s);var a=t(1413),l=t(29439),i=t(72791),r=t(58563),n=t(2677),o=t(24552),c=t(47022),m=t(89743),x=t(57689),d=t(11087),p=t(38392),h=t(29213),b=t(59511),g=t(20057),u=t(5104),f=t(6117),j=t(90325),N=t(8219),k=t(49823),y=t(79629),v=t(19630),w=t(21240),Z=t(80184),U=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"}],_=[{img:"https://via.placeholder.com/800x563"},{img:"https://via.placeholder.com/800x563"},{img:"https://via.placeholder.com/800x563"}];s.default=function(e){var s=i.useRef(null),t=(0,i.useState)(),C=(0,l.Z)(t,2),I=C[0],J=C[1],L=(0,x.UO)().id;return(0,i.useEffect)((function(){var e=v.qm.filter((function(e){return e.id===parseInt(L)}));J(e)}),[L]),(0,Z.jsxs)("div",{style:e.style,children:[(0,Z.jsx)(p.default,{topSpace:{desktop:!0},type:"reverse-scroll",className:"border-b border-b-[#0000001a]",children:(0,Z.jsxs)(p.HeaderNav,{theme:"white",menu:"light",expand:"lg",fluid:"sm",containerClass:"sm:px-0",className:"py-[0px] md:pr-[15px] md:pl-0 md:py-[20px]",children:[(0,Z.jsx)(n.Z,{className:"col-auto col-lg-2 me-auto ps-lg-0",children:(0,Z.jsx)(d.rU,{"aria-label":"header logo",className:"flex items-center",to:"/",children:(0,Z.jsxs)(o.Z.Brand,{className:"inline-block p-0 m-0",children:[(0,Z.jsx)("img",{className:"default-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-fast-blue-black.webp","data-rjs":"/assets/img/webp/logo-fast-blue-black@2x.webp",alt:"logo"}),(0,Z.jsx)("img",{className:"alt-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-fast-blue-black.webp","data-rjs":"/assets/img/webp/logo-fast-blue-black@2x.webp",alt:"logo"}),(0,Z.jsx)("img",{className:"mobile-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-fast-blue-black.webp","data-rjs":"/assets/img/webp/logo-fast-blue-black@2x.webp",alt:"logo"})]})})}),(0,Z.jsxs)(o.Z.Toggle,{className:"order-last md:ml-[8px]",children:[(0,Z.jsx)("span",{className:"navbar-toggler-line"}),(0,Z.jsx)("span",{className:"navbar-toggler-line"}),(0,Z.jsx)("span",{className:"navbar-toggler-line"}),(0,Z.jsx)("span",{className:"navbar-toggler-line"})]}),(0,Z.jsx)(o.Z.Collapse,{className:"col-auto justify-center",children:(0,Z.jsx)(p.Menu,(0,a.Z)({},e))}),(0,Z.jsx)(n.Z,{className:"col-auto col-lg-2 text-end pe-0 md:mr-[10px] xs:hidden",children:(0,Z.jsx)(h.default,{theme:"social-icon-style-01 block text-end",iconColor:"dark",size:"xs",data:U.slice(0,3)})})]})}),(0,Z.jsx)(k.default,{}),I?(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("section",{className:"py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]",children:(0,Z.jsx)(c.Z,{children:(0,Z.jsxs)(m.Z,{className:"justify-center",children:[(0,Z.jsx)(n.Z,{lg:8,className:"right-sidebar md:mb-[60px] sm:mb-[40px]",children:(0,Z.jsxs)(m.Z,{children:[(0,Z.jsxs)(n.Z,{className:"blog-details-text last:mb-0 mb-24",children:[(0,Z.jsxs)("ul",{className:"flex mb-8 xs:block",children:[(0,Z.jsxs)("li",{className:"inline-block align-middle mr-[25px]",children:[(0,Z.jsx)("i",{className:"feather-calendar text-fastblue mr-[10px]"}),(0,Z.jsx)("span",{children:I[0].date})]}),(0,Z.jsxs)("li",{className:"inline-block align-middle mr-[25px] capitalize",children:[(0,Z.jsx)("i",{className:"feather-folder text-fastblue mr-[10px]"}),I[0].category.map((function(e,s){return(0,Z.jsx)(d.rU,{"aria-label":"link",to:"/blogs/category/".concat(e.toString().split(" ").join("").toLowerCase()),children:s===I[0].category.length-1?e:"".concat(e,", ")},s)}))]}),v.tY&&(0,Z.jsxs)("li",{className:"inline-block align-middle",children:[(0,Z.jsx)("i",{className:"feather-user text-fastblue mr-[10px]"}),"By ",(0,Z.jsx)(d.rU,{to:"/blogs/author/".concat(I[0].author),children:v.tY.filter((function(e){return e.id===I[0].author}))[0].name})]})]}),(0,Z.jsx)("h5",{className:"font-serif font-medium text-darkgray mb-[4.5rem]",children:I[0].title}),(0,Z.jsxs)("div",{className:"relative mb-[4.5rem]",children:[(0,Z.jsx)("div",{onClick:function(){return s.current.swiper.slidePrev()},className:"btn-slider-next bg-[#fff] z-[11] text-[#000] w-[40px] h-[40px] left-[0px] leading-[40px] m-0 right-auto absolute top-1/2 flex item-center transition-default justify-center hover:bg-[#000] hover:text-[#fff]",children:(0,Z.jsx)("button",{className:"text-xmd",children:(0,Z.jsx)("i",{className:"feather-arrow-left"})})}),(0,Z.jsx)("div",{onClick:function(){return s.current.swiper.slideNext()},className:"btn-slider-prev btn-slider-next bg-[#fff] z-[11] text-[#000] w-[40px] h-[40px] right-[0px] leading-[40px] m-0 left-auto absolute top-1/2 flex item-center transition-default justify-center hover:bg-[#000] hover:text-[#fff]",children:(0,Z.jsx)("button",{className:"text-xmd",children:(0,Z.jsx)("i",{className:"feather-arrow-right"})})}),(0,Z.jsx)(r.tq,{className:"white-move rounded-[6px] swiper-pagination-medium h-full",ref:s,spaceBetween:30,slidesPerView:1,loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1},children:_.map((function(e,s){return(0,Z.jsx)(r.o5,{children:(0,Z.jsx)("div",{className:"h-full shadow-lg bg-white ",children:(0,Z.jsx)("img",{src:e.img,alt:"",height:"",width:""})})},s)}))})]}),(0,Z.jsx)("p",{className:"mb-[25px]",children:"Lorem ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic."}),(0,Z.jsx)("p",{className:"mb-[25px]",children:"There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of lorem ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."}),(0,Z.jsx)(f.Z,{className:"my-[5.5rem] ml-24 sm:ml-0",theme:"blockquote-style-02",title:"Tomorrow is the most important thing in life. Comes into us at midnight very clean. It's perfect when it arrives and it puts itself in our hands. It hopes we've learned something from yesterday.",author:"JOHN WAYNE"}),(0,Z.jsx)("img",{height:"",width:"",src:"https://via.placeholder.com/780x500",alt:"",className:"w-full rounded-[6px] mb-16"}),(0,Z.jsx)(j.Z,{theme:"dropcaps-style04",content:"Master design is simply dummy text of the printing and typesetting industry. lorem ipsum has been the an industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}),(0,Z.jsx)("p",{className:"my-[25px]",children:"There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."})]}),(0,Z.jsxs)(n.Z,{xs:12,className:"flex items-center justify-between mb-[35px] sm:block",children:[I[0].tags&&(0,Z.jsx)("div",{className:"tag-cloud sm:flex sm:justify-center sm:mb-[10px] sm:flex-wrap gap-y-5",children:I[0].tags.map((function(e,s){return(0,Z.jsx)(d.rU,{"aria-label":"links",to:"/blogs/blog-grid",children:e},s)}))}),I[0].likes&&(0,Z.jsx)("div",{className:"text-center md:text-end px-0 flex justify-end sm:justify-center",children:(0,Z.jsxs)(d.rU,{"aria-label":"link",className:"uppercase text-darkgray text-xs w-auto font-medium inline-block border border-mediumgray rounded pt-[5px] pb-[6px] px-[18px] leading-[20px] hover:text-black transition-default hover:shadow-[0_0_10px_rgba(23,23,23,0.10)] ",to:"#",children:[(0,Z.jsx)("i",{className:"far fa-heart mr-2 text-[#fa5c47]"}),(0,Z.jsxs)("span",{children:[I[0].likes," Likes"]})]})})]}),(0,Z.jsx)(n.Z,{children:(0,Z.jsx)(N.Z,{authorId:I[0].author,className:"mb-[45px]"})}),(0,Z.jsx)(h.default,{animation:w.Ji,theme:"social-icon-style-09 m-auto",className:"justify-center",size:"md",iconColor:"dark",data:U})]})}),(0,Z.jsx)(y.Z,{data:I})]})})}),(0,Z.jsx)("section",{className:"bg-lightgray py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px] overflow-hidden",children:(0,Z.jsxs)(c.Z,{children:[(0,Z.jsx)(m.Z,{className:"justify-center",children:(0,Z.jsxs)(n.Z,{lg:5,md:6,className:"text-center mb-20",children:[(0,Z.jsx)("span",{className:"font-serif font-medium uppercase inline-block",children:"You may also like"}),(0,Z.jsx)("h5",{className:"font-serif font-medium text-darkgray -tracking-[1px]",children:"Related Posts"})]})}),(0,Z.jsx)(u.Z,{filter:!1,overlay:["#0039e3","#4132e0","#5e28dd","#741bd9","#8600d4"],pagination:"false",grid:"grid grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large",data:v.qm.slice(0,3)})]})}),(0,Z.jsx)(g.Z,{}),(0,Z.jsx)(b.Z,{theme:"dark",className:"bg-[#262b35] text-slateblue"})]}):void 0]})}}}]);
//# sourceMappingURL=2645.2b2d55f9.chunk.js.map