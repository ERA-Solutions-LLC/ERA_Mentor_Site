"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[5892],{83992:function(e,t,i){i(72791);var a=i(47022),r=i(89743),l=i(2677),n=i(80184);t.Z=function(e){var t=function(){e.onFilterChange&&e.onFilterChange()};return(e.title||e.filterData)&&(0,n.jsx)(a.Z,{className:"mb-24 md:mb-[4.5rem] sm:mb-8",children:(0,n.jsxs)(r.Z,{className:"".concat(e.title?"justify-between":"justify-center"," items-center md:justify-center md:items-center md:text-center md:flex-col"),children:[e.title&&(0,n.jsx)(l.Z,{xs:"auto",className:"md:mb-[30px]",children:(0,n.jsx)("h3",{className:"heading-4 font-serif m-0 p-0 font-semibold text-darkgray tracking-[-1px]",children:e.title})}),(0,n.jsx)(l.Z,{xs:"auto",children:e.filterData&&(0,n.jsx)("ul",{className:"filter-menu items-center justify-center flex flex-wrap uppercase",children:e.filterData.map((function(e,i){return(0,n.jsx)("li",{className:"px-[20px]".concat(0===i?" active":""),children:(0,n.jsx)("span",{"data-filter":e.key,onClick:t,children:e.title})},i)}))})})]})})}},35892:function(e,t,i){i.r(t);var a=i(29439),r=i(72791),l=i(34290),n=i(83992),s=i(39555),c=i(11087),o=i(80184),d=function(e){var t=(0,r.useRef)(),s=(0,r.useState)(!0),d=(0,a.Z)(s,2),u=d[0],m=d[1];(0,r.useEffect)((function(){var e=t.current.querySelectorAll("img");Promise.all(Array.prototype.slice.call(e).filter((function(e){return!e.complete})).map((function(e){return new Promise((function(t){e.onload=e.onerror=t}))}))).then((function(){Promise.resolve().then(i.bind(i,38480)).then((function(e){e.initializeIsotop(t.current).on("arrangeComplete",(function(){return m(!1)}))}))}))}),[]);return(0,o.jsxs)("div",{className:"grid-wrapper",children:[(0,o.jsx)(n.Z,{title:e.title,filterData:e.filterData,onFilterChange:function(){t.current.querySelectorAll("li").forEach((function(e){var t;return null===(t=e.childNodes[0])||void 0===t?void 0:t.classList.add("appear")}))}}),(0,o.jsxs)("ul",{ref:t,className:"grid-container text-center".concat(e.grid?" ".concat(e.grid):"").concat(e.className?" ".concat(e.className):"").concat(u?" loading":""),children:[(0,o.jsx)("li",{className:"grid-sizer"}),e.data.map((function(t,i){return(0,o.jsx)("li",{className:"grid-item".concat(t.double_col?" grid-item-double":""," ").concat(t.category?t.category.toString().split(",").join(" ").toLowerCase():""),children:(0,o.jsx)(c.rU,{to:t.link,target:e.target,"aria-label":"link",children:(0,o.jsx)(l.m.div,{className:"portfolio-boxed overflow-hidden",initial:{opacity:0},whileInView:!u&&{opacity:1},viewport:{once:!0},transition:{duration:.6,ease:"easeOut"},children:(0,o.jsxs)("div",{className:"portfolio-image relative",children:[t.img&&(0,o.jsx)("img",{className:"w-full",src:t.img,height:447,width:550,alt:"portfolio-boxed"}),(0,o.jsx)("div",{className:"porfolio-hover absolute bg-white rounded-[3px]",children:(0,o.jsxs)("div",{className:"flex px-[30px] py-[15px] text-left self-end items-center w-full landscape:xl:px-[20px]",children:[(t.subtitle||t.title)&&(0,o.jsxs)("div",{className:"mr-auto",children:[t.subtitle&&(0,o.jsx)("div",{className:"mt-[5px] text-spanishgray text-sm font-serif uppercase",children:t.subtitle}),t.title&&(0,o.jsx)("div",{className:"font-medium text-darkgray font-serif uppercase",children:t.title})]}),(0,o.jsx)("div",{className:"ml-auto",children:(0,o.jsx)("i",{className:"line-icon-Arrow-OutRight text-[32px] inline-block top-[3px] text-darkgray relative"})})]})})]})})})},i)}))]})]})};d.defaultProps={data:s.w_},t.default=(0,r.memo)(d)}}]);
//# sourceMappingURL=5892.d432a9bc.chunk.js.map