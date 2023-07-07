"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[627],{6117:function(e,s,a){a.d(s,{Z:function(){return o}});var t=a(1413),l=a(72791),i=a(34290),r=a(80184),n=function(e){return(0,r.jsxs)(i.m.blockquote,(0,t.Z)((0,t.Z)({className:"".concat(e.theme).concat(e.className?" ".concat(e.className):"")},e.animation),{},{children:[e.icon&&(0,r.jsx)("i",{className:e.icon}),e.title&&(0,r.jsx)("h6",{children:e.title}),e.author&&(0,r.jsx)("span",{className:"text-basecolor",children:e.author})]}))};n.defaultProps={author:"",theme:"blockquote-style-01",title:"",icon:""};var o=(0,l.memo)(n)},8219:function(e,s,a){var t=a(1413),l=(a(72791),a(11087)),i=a(34290),r=a(21240),n=a(43739),o=a(19630),c=a(80184);s.Z=function(e){var s=e.authorId,a=e.className,m=o.tY.filter((function(e){return e.id===s}))[0];return m&&(0,c.jsxs)(i.m.div,(0,t.Z)((0,t.Z)({},r.Ji),{},{className:"flex justify-center items-center w-full shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-[5px] p-16 sm:block".concat(a?" ".concat(a):""),children:[(0,c.jsxs)("div",{className:"w-[130px] mr-[60px] sm:mx-auto text-center",children:[(0,c.jsx)("img",{width:"",height:"",src:m.img,className:"rounded-full w-[110px] mx-auto",alt:m.name}),(0,c.jsx)(l.rU,{"aria-label":"link",to:"/blogs/author/".concat(s),className:"text-darkgray font-serif font-medium mt-[20px] block text-md hover:text-fastblue",children:m.name}),(0,c.jsx)("span",{className:"text-medium block leading-[18px] sm:mb-[25px]",children:m.designation})]}),(0,c.jsxs)("div",{className:"w-[75%] md:text-start sm:w-full sm:text-center",children:[(0,c.jsx)("p",{className:"mb-[25px]",children:m.description}),(0,c.jsx)(n.default,{ariaLabel:"authorbox",to:"/blogs/author/".concat(s),className:"font-medium font-serif after:h-[2px] after:bg-black hover:text-black uppercase btn-link md:mb-[15px]",size:"md",color:"#232323",title:"All author posts"})]})]}))}},79629:function(e,s,a){var t=a(1413),l=a(74165),i=a(15861),r=(a(72791),a(92506)),n=a(81724),o=a(57689),c=a(11087),m=a(34290),d=a(52101),x=a(29213),p=a(17728),b=a(19630),h=a(21240),u=a(80184),g=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"}];s.Z=function(e){var s=(0,o.s0)();return(0,u.jsxs)("aside",{className:"col-12 col-xl-3 offset-xl-1 col-lg-4 col-md-7 md:pl-[15px]",children:[(0,u.jsxs)("div",{className:"inline-block w-full mb-20",children:[(0,u.jsx)("span",{className:"mb-[25px] font-medium text-darkgray text-lg font-serif block",children:"Search posts"}),(0,u.jsx)("div",{className:"relative",children:(0,u.jsx)(r.J9,{initialValues:{search:""},validationSchema:n.Ry().shape({search:n.Z_().required("Field is required.")}),onSubmit:function(){var e=(0,i.Z)((0,l.Z)().mark((function e(a,t){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,500)}));case 2:t.resetForm(),s("/page/search-result",{state:{search:a}});case 4:case"end":return e.stop()}}),e)})));return function(s,a){return e.apply(this,arguments)}}(),children:function(e){var s=e.isSubmitting;e.status;return(0,u.jsx)("div",{className:"relative",children:(0,u.jsxs)(r.l0,{className:"relative",children:[(0,u.jsx)(p.II,{showErrorMsg:!1,type:"text",name:"search",className:"border-[1px] py-[15px] px-[20px] w-full rounded-[5px] border-solidborder-transparent",placeholder:"Enter your keyword..."}),(0,u.jsx)("button",{type:"submit",className:"text-xs tracking-[1px] text-fastblue py-[15px] !absolute top-[8%] right-0 px-[20px] uppercase".concat(s?" loading":""),children:(0,u.jsx)("i",{className:"feather-search"})})]})})}})})]}),(0,u.jsxs)("div",{className:"p-[38px] mb-20 rounded-[4px] border-mediumgray border text-center",children:[b.tY&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(c.rU,{"aria-label":"link",to:"#",children:(0,u.jsx)("img",{height:"",width:"",src:b.tY.filter((function(s){return s.id===e.data[0].author}))[0].img,alt:b.tY.filter((function(s){return s.id===e.data[0].author}))[0].name,className:"mb-[5px] rounded-[50%] block mx-auto w-[100px]"})}),(0,u.jsx)(c.rU,{"aria-label":"link",to:"#",className:"mt-[20px] font-medium text-darkgray text-md font-serif inline-block",children:b.tY.filter((function(s){return s.id===e.data[0].author}))[0].name})]}),(0,u.jsx)("span",{className:"mb-[20px] leading-[18px] text-[14px] block",children:"Co-founder"}),(0,u.jsx)("p",{className:"mb-[25px]",children:"Lorem ipsum is simply dummy text of the printing and industry lorem ipsum has been standard."}),(0,u.jsx)(x.default,{theme:"social-icon-style-01",size:"xs",iconColor:"dark",data:g.slice(0,4)})]}),(0,u.jsxs)("div",{className:"mb-20 xs:mb-[35px]",children:[(0,u.jsx)(m.m.span,(0,t.Z)((0,t.Z)({className:"mb-[35px] font-medium font-serif text-darkgray text-lg block"},h.Ji),{},{children:"Categories"})),(0,u.jsxs)(m.m.ul,(0,t.Z)((0,t.Z)({className:"pl-0"},h.Ji),{},{children:[(0,u.jsxs)("li",{className:"relative inline-block w-full mb-[15px] leading-[18px]",children:[(0,u.jsx)(c.rU,{"aria-label":"link",to:"/blogs/blog-grid",className:"inline-block text-left",children:"Entertainment"}),(0,u.jsx)("span",{className:"text-[14px] absolute top-[1px] right-0 text-right",children:"10"})]}),(0,u.jsxs)("li",{className:"relative inline-block w-full mb-[15px] leading-[18px]",children:[(0,u.jsx)(c.rU,{"aria-label":"link",to:"/blogs/blog-grid",className:"inline-block text-left",children:"Business"}),(0,u.jsx)("span",{className:"text-[14px] absolute top-[1px] right-0 text-right",children:"05"})]}),(0,u.jsxs)("li",{className:"relative inline-block w-full mb-[15px] leading-[18px]",children:[(0,u.jsx)(c.rU,{"aria-label":"link",to:"/blogs/blog-grid",className:"inline-block text-left",children:"Creative"}),(0,u.jsx)("span",{className:"text-[14px] absolute top-[1px] right-0 text-right",children:"03"})]}),(0,u.jsxs)("li",{className:"relative inline-block w-full mb-[15px] leading-[18px]",children:[(0,u.jsx)(c.rU,{"aria-label":"link",to:"/blogs/blog-grid",className:"inline-block text-left",children:"Lifestyle"}),(0,u.jsx)("span",{className:"text-[14px] absolute top-[1px] right-0 text-right",children:"02"})]}),(0,u.jsxs)("li",{className:"relative inline-block w-full mb-[15px] leading-[18px]",children:[(0,u.jsx)(c.rU,{"aria-label":"link",to:"/blogs/blog-grid",className:"inline-block text-left",children:"Fashion"}),(0,u.jsx)("span",{className:"text-[14px] absolute top-[1px] right-0 text-right",children:"19"})]}),(0,u.jsxs)("li",{className:"relative inline-block w-full leading-[18px] mb-0",children:[(0,u.jsx)(c.rU,{"aria-label":"link",to:"/blogs/blog-grid",className:"inline-block text-left",children:"Design"}),(0,u.jsx)("span",{className:"text-[14px] absolute top-[1px] right-0 text-right",children:"21"})]})]}))]}),(0,u.jsxs)("div",{className:"mb-20 xs:mb-[35px]",children:[(0,u.jsx)("span",{className:"mb-[35px] font-medium font-serif text-darkgray text-lg block",children:"Recent posts"}),(0,u.jsxs)("ul",{children:[(0,u.jsxs)(m.m.li,(0,t.Z)((0,t.Z)({className:"flex mb-[45px]"},(0,t.Z)((0,t.Z)({},h.Ji),{},{transition:{delay:.2}})),{},{children:[(0,u.jsx)("figure",{className:"h-[65px] w-[80px] m-0 shrink-0\t",children:(0,u.jsx)(c.rU,{"aria-label":"link",to:"/blogs/blog-post-layout-01",children:(0,u.jsx)("img",{height:"",width:"",src:"https://via.placeholder.com/940x940",alt:"",className:"rounded-[3px]"})})}),(0,u.jsxs)("div",{className:"leading-normal pl-[30px] relative top-[-3px] grow",children:[(0,u.jsx)(c.rU,{"aria-label":"link",to:"/blogs/blog-post-layout-01",className:"mb-[5px] sm:mb-0 font-medium text-darkgray inline-block",children:"Fashion is anything"}),(0,u.jsx)("span",{className:"leading-[22px] text-[14px] block",children:"Lorem ipsum is simply as dummy text of the..."})]})]})),(0,u.jsxs)(m.m.li,(0,t.Z)((0,t.Z)({className:"flex mb-[45px]"},(0,t.Z)((0,t.Z)({},h.Ji),{},{transition:{delay:.4}})),{},{children:[(0,u.jsx)("figure",{className:"h-[65px] w-[80px] m-0 shrink-0\t",children:(0,u.jsx)(c.rU,{"aria-label":"link",to:"/blogs/blog-post-layout-02",children:(0,u.jsx)("img",{height:"",width:"",src:"https://via.placeholder.com/800x800",alt:"",className:"rounded-[3px]"})})}),(0,u.jsxs)("div",{className:"leading-normal pl-[30px] relative top-[-3px] grow",children:[(0,u.jsx)(c.rU,{"aria-label":"link",to:"/blogs/blog-post-layout-02",className:"mb-[5px] sm:mb-0 font-medium text-darkgray inline-block",children:"Design transcends"}),(0,u.jsx)("span",{className:"leading-[22px] text-[14px] block",children:"Lorem ipsum is simply as dummy text of the..."})]})]})),(0,u.jsxs)(m.m.li,(0,t.Z)((0,t.Z)({className:"flex mb-[45px]"},(0,t.Z)((0,t.Z)({},h.Ji),{},{transition:{delay:.6}})),{},{children:[(0,u.jsx)("figure",{className:"h-[65px] w-[80px] m-0 shrink-0\t",children:(0,u.jsx)(c.rU,{"aria-label":"link",to:"/blogs/blog-post-layout-03",children:(0,u.jsx)("img",{src:"https://via.placeholder.com/800x800",alt:"",height:"",width:"",className:"rounded-[3px]"})})}),(0,u.jsxs)("div",{className:"leading-normal pl-[30px] relative top-[-3px] grow",children:[(0,u.jsx)(c.rU,{"aria-label":"link",to:"/blogs/blog-post-layout-03",className:"mb-[5px] sm:mb-0 font-medium text-darkgray inline-block",children:"Never give in except"}),(0,u.jsx)("span",{className:"leading-[22px] text-[14px] block",children:"Lorem ipsum is simply as dummy text of the..."})]})]}))]})]}),(0,u.jsxs)(m.m.div,(0,t.Z)((0,t.Z)({className:"visible mb-20 md:w-[90%] sm:w-full"},h.Ji),{},{children:[(0,u.jsx)("span",{className:"mb-[35px] font-medium font-serif text-darkgray text-lg block",children:"Tags cloud"}),(0,u.jsx)(c.rU,{"aria-label":"tag",to:"/blogs/blog-grid",className:"inline-block text-center text-sm mt-0 ml-[6px] mb-[10px] mr-0 pt-[5px] px-[18px] pb-[6px] rounded-[4px] border-mediumgray border hover:text-[#828282] hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]",children:"Development"}),(0,u.jsx)(c.rU,{"aria-label":"tag",to:"/blogs/blog-grid",className:"inline-block text-center text-sm mt-0 ml-[6px] mb-[10px] mr-0 pt-[5px] px-[18px] pb-[6px] rounded-[4px] border-mediumgray border hover:text-[#828282] hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]",children:"Mountains"}),(0,u.jsx)(c.rU,{"aria-label":"tag",to:"/blogs/blog-grid",className:"inline-block text-center text-sm mt-0 ml-[6px] mb-[10px] mr-0 pt-[5px] px-[18px] pb-[6px] rounded-[4px] border-mediumgray border hover:text-[#828282] hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]",children:"Lifestyle"}),(0,u.jsx)(c.rU,{"aria-label":"tag",to:"/blogs/blog-grid",className:"inline-block text-center text-sm mt-0 ml-[6px] mb-[10px] mr-0 pt-[5px] px-[18px] pb-[6px] rounded-[4px] border-mediumgray border hover:text-[#828282] hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]",children:"Hotel"}),(0,u.jsx)(c.rU,{"aria-label":"tag",to:"/blogs/blog-grid",className:"inline-block text-center text-sm mt-0 ml-[6px] mb-[10px] mr-0 pt-[5px] px-[18px] pb-[6px] rounded-[4px] border-mediumgray border hover:text-[#828282] hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]",children:"Event"}),(0,u.jsx)(c.rU,{"aria-label":"tag",to:"/blogs/blog-grid",className:"inline-block text-center text-sm mt-0 ml-[6px] mb-[10px] mr-0 pt-[5px] px-[18px] pb-[6px] rounded-[4px] border-mediumgray border hover:text-[#828282] hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]",children:"Multimedia "}),(0,u.jsx)(c.rU,{"aria-label":"tag",to:"/blogs/blog-grid",className:"inline-block text-center text-sm mt-0 ml-[6px] mb-[10px] mr-0 pt-[5px] px-[18px] pb-[6px] rounded-[4px] border-mediumgray border hover:text-[#828282] hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]",children:"Fashion"})]})),(0,u.jsxs)(m.m.div,(0,t.Z)((0,t.Z)({},h.Ji),{},{children:[(0,u.jsx)("span",{className:"mb-[35px] font-medium font-serif text-darkgray text-lg block",children:"Instagram"}),(0,u.jsx)(d.default,{})]}))]})}},90325:function(e,s,a){var t=a(1413),l=a(72791),i=a(34290),r=a(80184),n=function(e){return(0,r.jsx)(i.m.div,(0,t.Z)((0,t.Z)({className:"".concat(e.theme," ").concat(e.className," contents")},e.animation),{},{children:(0,r.jsxs)("p",{className:"contents",children:[(0,r.jsx)("span",{className:"text-basecolor",children:e.content&&e.content.charAt(0)}),e.content&&e.content.slice(1)]})}))};n.defaultProps={theme:"dropcaps-style01"},s.Z=(0,l.memo)(n)},91063:function(e,s,a){a.r(s);var t=a(1413),l=a(29439),i=a(72791),r=a(2677),n=a(24552),o=a(47022),c=a(89743),m=a(57689),d=a(11087),x=a(38392),p=a(29213),b=a(59511),h=a(20057),u=a(5104),g=a(6117),f=a(90325),j=a(8219),k=a(49823),N=a(79629),y=a(21240),w=a(19630),v=a(80184),Z=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"}];s.default=function(e){var s=(0,i.useState)(),a=(0,l.Z)(s,2),_=a[0],U=a[1],C=(0,m.UO)().id;return(0,i.useEffect)((function(){var e=w.qm.filter((function(e){return e.id===parseInt(C)}));U(e)}),[C]),(0,v.jsxs)("div",{style:e.style,children:[(0,v.jsx)(x.default,{topSpace:{desktop:!0},type:"reverse-scroll",className:"border-b border-b-[#0000001a]",children:(0,v.jsxs)(x.HeaderNav,{theme:"white",menu:"light",expand:"lg",fluid:"sm",containerClass:"sm:px-0",className:"py-[0px] md:pr-[15px] md:pl-0 md:py-[20px]",children:[(0,v.jsx)(r.Z,{className:"col-auto col-lg-2 me-auto ps-lg-0",children:(0,v.jsx)(d.rU,{"aria-label":"header logo",className:"flex items-center",to:"/",children:(0,v.jsxs)(n.Z.Brand,{className:"inline-block p-0 m-0",children:[(0,v.jsx)("img",{className:"default-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-fast-blue-black.webp","data-rjs":"/assets/img/webp/logo-fast-blue-black@2x.webp",alt:"logo"}),(0,v.jsx)("img",{className:"alt-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-fast-blue-black.webp","data-rjs":"/assets/img/webp/logo-fast-blue-black@2x.webp",alt:"logo"}),(0,v.jsx)("img",{className:"mobile-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-fast-blue-black.webp","data-rjs":"/assets/img/webp/logo-fast-blue-black@2x.webp",alt:"logo"})]})})}),(0,v.jsxs)(n.Z.Toggle,{className:"order-last md:ml-[8px]",children:[(0,v.jsx)("span",{className:"navbar-toggler-line"}),(0,v.jsx)("span",{className:"navbar-toggler-line"}),(0,v.jsx)("span",{className:"navbar-toggler-line"}),(0,v.jsx)("span",{className:"navbar-toggler-line"})]}),(0,v.jsx)(n.Z.Collapse,{className:"col-auto justify-center",children:(0,v.jsx)(x.Menu,(0,t.Z)({},e))}),(0,v.jsx)(r.Z,{className:"col-auto col-lg-2 text-end pe-0 md:mr-[10px] xs:hidden",children:(0,v.jsx)(p.default,{theme:"social-icon-style-01 block text-end",iconColor:"dark",size:"xs",data:Z.slice(0,3)})})]})}),(0,v.jsx)(k.default,{}),_?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("section",{className:"py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]",children:(0,v.jsx)(o.Z,{children:(0,v.jsxs)(c.Z,{className:"justify-center",children:[(0,v.jsx)(r.Z,{lg:8,className:"right-sidebar md:mb-[60px] sm:mb-[40px]",children:(0,v.jsxs)(c.Z,{children:[(0,v.jsxs)(r.Z,{className:"blog-details-text last:mb-0 mb-24",children:[(0,v.jsxs)("ul",{className:"flex mb-8 xs:block",children:[(0,v.jsxs)("li",{className:"inline-block align-middle mr-[25px]",children:[(0,v.jsx)("i",{className:"feather-calendar text-fastblue mr-[10px]"}),(0,v.jsx)("span",{children:_[0].date})]}),(0,v.jsxs)("li",{className:"inline-block align-middle mr-[25px] capitalize",children:[(0,v.jsx)("i",{className:"feather-folder text-fastblue mr-[10px]"}),_[0].category.map((function(e,s){return(0,v.jsx)(d.rU,{"aria-label":"link",to:"/blogs/category/".concat(e.toString().split(" ").join("").toLowerCase()),children:s===_[0].category.length-1?e:"".concat(e,", ")},s)}))]}),w.tY&&(0,v.jsxs)("li",{className:"inline-block align-middle",children:[(0,v.jsx)("i",{className:"feather-user text-fastblue mr-[10px]"}),"By ",(0,v.jsx)(d.rU,{to:"/blogs/author/".concat(_[0].author),children:w.tY.filter((function(e){return e.id===_[0].author}))[0].name})]})]}),(0,v.jsx)("h5",{className:"font-serif font-medium text-darkgray mb-[4.5rem]",children:_[0].title}),(0,v.jsx)("div",{className:"mb-[4.5rem]",children:(0,v.jsx)("iframe",{title:"myframe",className:"h-[400px] w-full",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/3005344&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&visual=true"})}),(0,v.jsx)("p",{className:"mb-[25px]",children:"Lorem ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic."}),(0,v.jsx)("p",{className:"mb-[25px]",children:"There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of lorem ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."}),(0,v.jsx)(g.Z,{className:"my-[5.5rem] ml-24 sm:ml-0",theme:"blockquote-style-02",title:"Tomorrow is the most important thing in life. Comes into us at midnight very clean. It's perfect when it arrives and it puts itself in our hands. It hopes we've learned something from yesterday.",author:"JOHN WAYNE"}),(0,v.jsx)("img",{height:"",width:"",src:"https://via.placeholder.com/780x500",alt:"",className:"w-full rounded-[6px] mb-16"}),(0,v.jsx)(f.Z,{theme:"dropcaps-style04",content:"Master design is simply dummy text of the printing and typesetting industry. lorem ipsum has been the an industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}),(0,v.jsx)("p",{className:"my-[25px]",children:"There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."})]}),(0,v.jsxs)(r.Z,{xs:12,className:"flex items-center justify-between mb-[35px] sm:block",children:[_[0].tags&&(0,v.jsx)("div",{className:"tag-cloud sm:flex sm:justify-center sm:mb-[10px] sm:flex-wrap gap-y-5",children:_[0].tags.map((function(e,s){return(0,v.jsx)(d.rU,{"aria-label":"links",to:"/blogs/blog-grid",children:e},s)}))}),_[0].likes&&(0,v.jsx)("div",{className:"text-center md:text-end px-0 flex justify-end sm:justify-center",children:(0,v.jsxs)(d.rU,{"aria-label":"link",className:"uppercase text-darkgray text-xs w-auto font-medium inline-block border border-mediumgray rounded pt-[5px] pb-[6px] px-[18px] leading-[20px] hover:text-black transition-default hover:shadow-[0_0_10px_rgba(23,23,23,0.10)] ",to:"#",children:[(0,v.jsx)("i",{className:"far fa-heart mr-2 text-[#fa5c47]"}),(0,v.jsxs)("span",{children:[_[0].likes," Likes"]})]})})]}),(0,v.jsx)(r.Z,{children:(0,v.jsx)(j.Z,{authorId:_[0].author,className:"mb-[45px]"})}),(0,v.jsx)(p.default,{theme:"social-icon-style-09",className:"justify-center m-auto",size:"md",iconColor:"dark",data:Z,animation:y.Ji})]})}),(0,v.jsx)(N.Z,{data:_})]})})}),(0,v.jsx)("section",{className:"bg-lightgray py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px] overflow-hidden",children:(0,v.jsxs)(o.Z,{children:[(0,v.jsx)(c.Z,{className:"justify-center",children:(0,v.jsxs)(r.Z,{lg:5,md:6,className:"text-center mb-20",children:[(0,v.jsx)("span",{className:"font-serif font-medium uppercase inline-block",children:"You may also like"}),(0,v.jsx)("h5",{className:"font-serif font-medium text-darkgray -tracking-[1px]",children:"Related Posts"})]})}),(0,v.jsx)(u.Z,{filter:!1,overlay:["#0039e3","#4132e0","#5e28dd","#741bd9","#8600d4"],pagination:"false",grid:"grid grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large",data:w.qm.slice(0,3)})]})}),(0,v.jsx)(h.Z,{}),(0,v.jsx)(b.Z,{theme:"dark",className:"bg-[#262b35] text-slateblue"})]}):void 0]})}}}]);
//# sourceMappingURL=627.13cd8e68.chunk.js.map