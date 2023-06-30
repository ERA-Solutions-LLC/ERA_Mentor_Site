"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[1321],{83992:function(e,t,a){a(72791);var l=a(47022),i=a(89743),r=a(2677),s=a(80184);t.Z=function(e){var t=function(){e.onFilterChange&&e.onFilterChange()};return(e.title||e.filterData)&&(0,s.jsx)(l.Z,{className:"mb-24 md:mb-[4.5rem] sm:mb-8",children:(0,s.jsxs)(i.Z,{className:"".concat(e.title?"justify-between":"justify-center"," items-center md:justify-center md:items-center md:text-center md:flex-col"),children:[e.title&&(0,s.jsx)(r.Z,{xs:"auto",className:"md:mb-[30px]",children:(0,s.jsx)("h3",{className:"heading-4 font-serif m-0 p-0 font-semibold text-darkgray tracking-[-1px]",children:e.title})}),(0,s.jsx)(r.Z,{xs:"auto",children:e.filterData&&(0,s.jsx)("ul",{className:"filter-menu items-center justify-center flex flex-wrap uppercase",children:e.filterData.map((function(e,a){return(0,s.jsx)("li",{className:"px-[20px]".concat(0===a?" active":""),children:(0,s.jsx)("span",{"data-filter":e.key,onClick:t,children:e.title})},a)}))})})]})})}},85433:function(e,t,a){var l=a(29439),i=a(72791),r=a(48559),s=a(11087),n=a(34290),c=a(83992),o=a(39555),d=a(80184),m=function(e){var t=(0,i.useRef)(),o=(0,i.useState)(!0),m=(0,l.Z)(o,2),u=m[0],f=m[1],x=(0,i.useState)(!1),h=(0,l.Z)(x,2),g=h[0],p=h[1],j=(0,i.useState)(0),v=(0,l.Z)(j,2),b=v[0],N=v[1];(0,i.useEffect)((function(){var e=t.current.querySelectorAll("img");Promise.all(Array.prototype.slice.call(e).filter((function(e){return!e.complete})).map((function(e){return new Promise((function(t){e.onload=e.onerror=t}))}))).then((function(){Promise.resolve().then(a.bind(a,38480)).then((function(e){e.initializeIsotop(t.current).on("arrangeComplete",(function(){return f(!1)}))}))}))}),[]);var y={"--overlay-color":"object"===typeof e.overlay?"linear-gradient(to right top, ".concat(e.overlay,")"):e.overlay};return(0,d.jsxs)("div",{className:"grid-wrapper",children:[(0,d.jsx)(c.Z,{title:e.title,filterData:e.filterData,onFilterChange:function(){t.current.querySelectorAll("li").forEach((function(e){var t;return null===(t=e.childNodes[0])||void 0===t?void 0:t.classList.add("appear")}))}}),(0,d.jsxs)("ul",{ref:t,className:"grid-container text-center".concat(e.grid?" ".concat(e.grid):"").concat(e.className?" ".concat(e.className):"").concat(u?" loading":""),children:[(0,d.jsx)("li",{className:"grid-sizer"}),e.data.map((function(t,a){return(0,d.jsx)("li",{className:"grid-item p-[15px]".concat(t.double_col?" grid-item-double":""," ").concat(t.category.toString().split(",").join(" ").toLowerCase()),children:(0,d.jsxs)(n.m.div,{initial:{opacity:0},whileInView:!u&&{opacity:1},viewport:{once:!0},transition:{duration:1.5,ease:"easeOut"},className:"portfolio-classic",children:[(0,d.jsxs)("div",{className:"portfolio-image",style:y,children:[t.img&&(0,d.jsx)("img",{className:"w-full",src:t.img,height:440,width:540,alt:"portfolio-classic"}),(0,d.jsxs)("div",{className:"portfolio-icon",children:[(0,d.jsxs)("div",{onClick:function(){return function(e){p(!0),N(e)}(a)},children:[(0,d.jsx)("i",{className:"fas fa-search"})," "]}),(0,d.jsxs)(s.rU,{to:t.link,target:e.target,"aria-label":"link",children:[" ",(0,d.jsx)("i",{className:"fas fa-link"})]})]})]}),(t.title||t.subtitle)&&(0,d.jsxs)("div",{className:"portfolio-caption",children:[t.title&&(0,d.jsx)(s.rU,{"aria-label":"link",to:t.link,children:(0,d.jsx)("span",{children:t.title})}),t.subtitle&&(0,d.jsx)("span",{className:"text-md block mb-[1%]",children:t.subtitle})]})]})},a)}))]}),g&&(0,d.jsx)(r.Z,{mainSrc:e.data[b].img,onCloseRequest:function(){return p(!1)},nextSrc:e.data[(b+1)%e.data.length].img,prevSrc:e.data[(b+e.data.length-1)%e.data.length].img,onMovePrevRequest:function(){return N((b+e.data.length-1)%e.data.length)},onMoveNextRequest:function(){return N((b+1)%e.data.length)}})]})};m.defaultProps={data:o.RL},t.Z=(0,i.memo)(m)},1321:function(e,t,a){a.r(t);a(72791);var l=a(47022),i=a(89743),r=a(2677),s=a(38616),n=a(85433),c=a(39555),o=a(80184);t.default=function(e){return(0,o.jsxs)("div",{style:e.style,children:[(0,o.jsxs)("div",{className:"py-[80px] h-auto overflow-hidden md:relative md:py-[40px]",children:[(0,o.jsx)(s.VS,{className:"lg-no-parallax absolute top-[0] w-full h-full lg:bg-cover",translateY:[-40,40],style:{backgroundImage:"url(/assets/img/webp/portfolio-bg2.webp)"}}),(0,o.jsx)(l.Z,{className:"h-full relative",children:(0,o.jsx)(i.Z,{className:"justify-center h-[300px] sm:h-[250px]",children:(0,o.jsxs)(r.Z,{xl:6,lg:6,sm:8,className:"text-center flex justify-center flex-col font-serif",children:[(0,o.jsx)("h1",{className:"text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e] mb-[15px] inline-block text-xmd leading-[20px]",children:"Portfolio classic three column"}),(0,o.jsx)("h2",{className:"text-darkgray font-medium -tracking-[1px] mb-0",children:"Portfolio classic"})]})})})]}),(0,o.jsx)("section",{className:"pb-[130px] lg:pb-[90px] md:pb-[75px] sm:pb-[50px] bg-lightgray relative",children:(0,o.jsx)(l.Z,{children:(0,o.jsx)(i.Z,{children:(0,o.jsx)(r.Z,{xs:12,className:"xs:px-0",children:(0,o.jsx)(n.Z,{overlay:["#0039e3","#4132e0","#5e28dd","#741bd9","#8600d4"],grid:"grid grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large",filterData:c.ws,data:c.RL})})})})})]})}}}]);
//# sourceMappingURL=1321.8fe36673.chunk.js.map