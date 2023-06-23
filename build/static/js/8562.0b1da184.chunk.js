"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[8562],{83992:function(e,t,r){r(72791);var l=r(47022),i=r(89743),a=r(2677),s=r(80184);t.Z=function(e){var t=function(){e.onFilterChange&&e.onFilterChange()};return(e.title||e.filterData)&&(0,s.jsx)(l.Z,{className:"mb-24 md:mb-[4.5rem] sm:mb-8",children:(0,s.jsxs)(i.Z,{className:"".concat(e.title?"justify-between":"justify-center"," items-center md:justify-center md:items-center md:text-center md:flex-col"),children:[e.title&&(0,s.jsx)(a.Z,{xs:"auto",className:"md:mb-[30px]",children:(0,s.jsx)("h3",{className:"heading-4 font-serif m-0 p-0 font-semibold text-darkgray tracking-[-1px]",children:e.title})}),(0,s.jsx)(a.Z,{xs:"auto",children:e.filterData&&(0,s.jsx)("ul",{className:"filter-menu items-center justify-center flex flex-wrap uppercase",children:e.filterData.map((function(e,r){return(0,s.jsx)("li",{className:"px-[20px]".concat(0===r?" active":""),children:(0,s.jsx)("span",{"data-filter":e.key,onClick:t,children:e.title})},r)}))})})]})})}},12989:function(e,t,r){var l=r(29439),i=r(72791),a=r(34290),s=r(11087),n=r(83992),c=r(39555),o=r(80184),d=function(e){var t=(0,i.useRef)(),c=(0,i.useState)(!0),d=(0,l.Z)(c,2),f=d[0],m=d[1];(0,i.useEffect)((function(){var e=t.current.querySelectorAll("img");Promise.all(Array.prototype.slice.call(e).filter((function(e){return!e.complete})).map((function(e){return new Promise((function(t){e.onload=e.onerror=t}))}))).then((function(){Promise.resolve().then(r.bind(r,38480)).then((function(e){e.initializeIsotop(t.current).on("arrangeComplete",(function(){return m(!1)}))}))}))}),[]);var u={"--overlay-color":"object"===typeof e.overlay?"linear-gradient(to right top, ".concat(e.overlay.map((function(e,t){return e})),")"):e.overlay};return(0,o.jsxs)("div",{className:"grid-wrapper",children:[(0,o.jsx)(n.Z,{title:e.title,filterData:e.filterData,onFilterChange:function(){t.current.querySelectorAll("li").forEach((function(e){var t;return null===(t=e.childNodes[0])||void 0===t?void 0:t.classList.add("appear")}))}}),(0,o.jsxs)("ul",{ref:t,className:"grid-container text-center".concat(e.grid?" ".concat(e.grid):"").concat(e.className?" ".concat(e.className):"").concat(f?" loading":""),children:[(0,o.jsx)("li",{className:"grid-sizer"}),e.data.map((function(t,r){return(0,o.jsx)("li",{className:"grid-item".concat(t.double_col?" grid-item-double":""," ").concat(t.category.toString().split(",").join(" ").toLowerCase()),children:(0,o.jsx)(s.rU,{"aria-label":"link",target:e.target,to:t.link,children:(0,o.jsx)(a.m.div,{className:"portfolio-bordered",initial:{opacity:0},whileInView:!f&&{opacity:1},viewport:{once:!0},transition:{duration:.6,ease:"easeOut"},children:(0,o.jsxs)("div",{className:"portfolio-image",style:u,children:[t.img&&(0,o.jsx)("img",{className:"w-full",src:t.img,height:470,width:550,alt:"portfolio-bordered"}),(0,o.jsx)("div",{className:"portfolio-border-hover",children:(0,o.jsxs)("div",{className:"scale block font-serif",children:[(0,o.jsx)("div",{className:"text-darkgray font-medium",children:t.title}),(0,o.jsx)("div",{className:"text-spanishgray text-sm uppercase",children:t.subtitle})]})})]})})})},r)}))]})]})};d.defaultProps={data:c.GH},t.Z=(0,i.memo)(d)},8562:function(e,t,r){r.r(t);r(72791);var l=r(47022),i=r(89743),a=r(2677),s=r(38616),n=r(12989),c=r(39555),o=r(80184);t.default=function(e){return(0,o.jsxs)("div",{style:e.style,children:[(0,o.jsxs)("div",{className:"py-[80px] h-auto overflow-hidden md:relative md:py-[40px]",children:[(0,o.jsx)(s.VS,{className:"lg-no-parallax absolute top-[0] w-full h-full bg-no-repeat lg:bg-cover",translateY:[-40,40],style:{backgroundImage:"url(/assets/img/webp/portfolio-bg.webp)"}}),(0,o.jsx)(l.Z,{className:"h-full relative",children:(0,o.jsx)(i.Z,{className:"justify-center h-[300px] sm:h-[250px]",children:(0,o.jsxs)(a.Z,{xl:6,lg:6,sm:8,className:"text-center flex justify-center flex-col font-serif",children:[(0,o.jsx)("h1",{className:"text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e] mb-[15px] inline-block text-xmd leading-[20px]",children:"Portfolio bordered two column"}),(0,o.jsx)("h2",{className:"text-darkgray font-medium -tracking-[1px] mb-0",children:"Portfolio bordered"})]})})})]}),(0,o.jsx)("section",{className:"py-[130px] pt-0 overflow-hidden relative lg:py-[90px] md:py-[75px] sm:py-[50px]",children:(0,o.jsx)(l.Z,{children:(0,o.jsx)(i.Z,{children:(0,o.jsx)(a.Z,{xs:12,className:"xs:px-0",children:(0,o.jsx)(n.Z,{overlay:["#556fff","#b263e4","#e05fc4","#f767a6","#ff798e"],grid:"grid grid-2col xl-grid-2col lg-grid-2col md-grid-2col sm-grid-2col xs-grid-1col gutter-large",filterData:c.ws,data:c.GH})})})})})]})}}}]);
//# sourceMappingURL=8562.0b1da184.chunk.js.map