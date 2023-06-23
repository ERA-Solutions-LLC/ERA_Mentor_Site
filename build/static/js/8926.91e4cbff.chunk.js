"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[8926],{76337:function(e,t,a){var l=a(29439),i=a(72791),r=a(11087),s=a(34290),n=a(75585),c=a(83992),o=a(19630),d=a(80184),m=o.qm.filter((function(e){return"modern"===e.blogType})),x=function(e){var t=(0,i.useRef)(),o=(0,i.useState)(!0),m=(0,l.Z)(o,2),x=m[0],p=m[1];(0,i.useEffect)((function(){Promise.resolve().then(a.bind(a,38480)).then((function(e){e.initializeIsotop(t.current).on("arrangeComplete",(function(){return p(!1)}))}))}),[]);var g={"--overlay-color":"object"===typeof e.overlay?"linear-gradient(to right top, ".concat(e.overlay.map((function(e,t){return e})),")"):e.overlay};return(0,d.jsxs)("div",{className:"grid-wrapper",children:[(0,d.jsx)(c.Z,{title:e.title,filterData:e.filterData,onFilterChange:function(){t.current.querySelectorAll("li").forEach((function(e){var t;return null===(t=e.childNodes[0])||void 0===t?void 0:t.classList.add("appear")}))}}),(0,d.jsxs)("ul",{ref:t,className:"grid-container".concat(e.grid?" ".concat(e.grid):"").concat(x?" loading":"").concat(!1===e.filter?"":" mt-28 md:mt-[4.5rem] sm:mt-8"),children:[(0,d.jsx)("li",{className:"grid-sizer"}),e.data.map((function(t,a){return(0,d.jsx)("li",{className:"grid-item".concat(t.double_col?" grid-item-double":""," md:p-[10px] ").concat(t.category.map((function(e){return e.split(" ").join("")})).toString().split(",").join(" ").toLowerCase()),children:(0,d.jsxs)(s.m.div,{className:"blog-modern relative",initial:{opacity:0},whileInView:!x&&{opacity:1},viewport:{once:!0},transition:{duration:.6,ease:"easeOut"},children:[(0,d.jsx)("div",{className:"blog-modern-image",style:g,children:(0,d.jsx)(r.rU,{"aria-label":"link",to:"#",className:"text-[#828282]",children:(0,d.jsx)("img",{height:"",width:"",src:t.img,className:"w-full h-full",alt:""})})}),(0,d.jsxs)("div",{className:"blog-details absolute bg-white text-center",children:[(0,d.jsx)(r.rU,{"aria-label":"link",to:"/blogs/category/".concat([t.category[0].toString().split(" ").join("").toLowerCase()]),className:"blog-category text-basecolor text-md font-medium inline-block mb-base tracking-[1px] mb-[15px] uppercase",children:t.category[0]}),(0,d.jsx)(r.rU,{"aria-label":"link",to:"".concat(e.link).concat([t.id]),className:"blog-title font-serif text-lg text-darkgray leading-[26px] inline-block mb-[20px] md:text-xmd xs:block xs:mb-[15px]",children:t.title}),(0,d.jsx)("span",{className:"blog-date font-serif text-[12px] text-[#828282] uppercase tracking-[1px] block hover:text-[#828282]",children:t.date})]})]})},a)}))]}),!0===e.pagination&&(0,d.jsx)("div",{className:"flex justify-center mt-[7.5rem] lg:mt-20 md:mt-[0px]",children:(0,d.jsx)(n.Z,{})})]})};x.defaultProps={filter:!1,data:m,link:"/blog-types/blog-standard-post/"},t.Z=(0,i.memo)(x)},75585:function(e,t,a){a(72791);var l=a(11087),i=a(80184);t.Z=function(){return(0,i.jsxs)("ul",{className:"pagination pagination-style-01 font-sans font-medium items-center",children:[(0,i.jsx)("li",{className:"page-item",children:(0,i.jsx)(l.rU,{"aria-label":"link",className:"page-link",to:"#",children:(0,i.jsx)("i",{className:"feather-arrow-left text-lg"})})}),(0,i.jsx)("li",{className:"page-item",children:(0,i.jsx)(l.rU,{"aria-label":"link",className:"page-link",to:"#",children:" 01 "})}),(0,i.jsx)("li",{className:"page-item active",children:(0,i.jsx)(l.rU,{"aria-label":"link",className:"page-link",to:"#",children:" 02 "})}),(0,i.jsx)("li",{className:"page-item",children:(0,i.jsx)(l.rU,{"aria-label":"link",className:"page-link",to:"#",children:" 03 "})}),(0,i.jsx)("li",{className:"page-item",children:(0,i.jsx)(l.rU,{"aria-label":"link",className:"page-link",to:"#",children:" 04 "})}),(0,i.jsx)("li",{className:"page-item",children:(0,i.jsx)(l.rU,{"aria-label":"link",className:"page-link",to:"#",children:(0,i.jsx)("i",{className:"feather-arrow-right text-lg"})})})]})}},83992:function(e,t,a){a(72791);var l=a(47022),i=a(89743),r=a(2677),s=a(80184);t.Z=function(e){var t=function(){e.onFilterChange&&e.onFilterChange()};return(e.title||e.filterData)&&(0,s.jsx)(l.Z,{className:"mb-24 md:mb-[4.5rem] sm:mb-8",children:(0,s.jsxs)(i.Z,{className:"".concat(e.title?"justify-between":"justify-center"," items-center md:justify-center md:items-center md:text-center md:flex-col"),children:[e.title&&(0,s.jsx)(r.Z,{xs:"auto",className:"md:mb-[30px]",children:(0,s.jsx)("h3",{className:"heading-4 font-serif m-0 p-0 font-semibold text-darkgray tracking-[-1px]",children:e.title})}),(0,s.jsx)(r.Z,{xs:"auto",children:e.filterData&&(0,s.jsx)("ul",{className:"filter-menu items-center justify-center flex flex-wrap uppercase",children:e.filterData.map((function(e,a){return(0,s.jsx)("li",{className:"px-[20px]".concat(0===a?" active":""),children:(0,s.jsx)("span",{"data-filter":e.key,onClick:t,children:e.title})},a)}))})})]})})}},18926:function(e,t,a){a.r(t);a(72791);var l=a(47022),i=a(89743),r=a(2677),s=a(38616),n=a(76337),c=a(19630),o=a(80184),d=c.qm.filter((function(e){return"modern"===e.blogType}));t.default=function(e){return(0,o.jsxs)("div",{style:e.style,children:[(0,o.jsxs)("div",{className:"py-[80px] h-auto overflow-hidden md:relative md:py-[40px]",children:[(0,o.jsx)(s.VS,{className:"lg-no-parallax bg-cover absolute -top-[100px] landscape:md:top-[-20px] left-0 w-full h-[100vh]",translateY:[-40,40],style:{backgroundImage:"url(/assets/img/webp/portfolio-bg2.webp)"}}),(0,o.jsx)(l.Z,{className:"h-full relative",children:(0,o.jsx)(i.Z,{className:"justify-center h-[300px] sm:h-[250px]",children:(0,o.jsxs)(r.Z,{xl:6,lg:6,md:8,className:"text-center flex justify-center flex-col font-serif",children:[(0,o.jsx)("h1",{className:"text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e] mb-[15px] inline-block text-xmd leading-[20px]",children:"Blog modern layout"}),(0,o.jsx)("h2",{className:"text-darkgray font-medium -tracking-[1px] mb-0",children:"Attractive articles updated daily"})]})})})]}),(0,o.jsx)("section",{className:"overflow-hidden relative px-[9%] pb-[130px] bg-lightgray xl:px-0 lg:pb-[90px] md:pb-[75px] sm:pb-[50px]",children:(0,o.jsx)(l.Z,{fluid:!0,children:(0,o.jsx)(i.Z,{children:(0,o.jsx)(r.Z,{xs:12,className:"xs:px-0",children:(0,o.jsx)(n.Z,{overlay:["#0039e3","#5e28dd","#8600d4"],link:"/blog-types/blog-standard-post/",pagination:!0,grid:"grid grid-4col xl-grid-4col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-double-extra-large md:pt-[4.5rem] xs:pt-0",data:d})})})})})]})}}}]);
//# sourceMappingURL=8926.91e4cbff.chunk.js.map