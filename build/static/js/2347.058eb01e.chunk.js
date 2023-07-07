"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[2347],{43739:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var l=a(1413),r=a(72791),s=a(11087),n=a(43360),c=a(80184),i=function(e){var t=e.themeColor&&e.themeColor[0],a=e.themeColor&&e.themeColor[1],r=e.color&&e.color[0],i=e.color&&e.color[1],p={"--gradient-color":"object"===typeof e.themeColor?"linear-gradient(45deg, ".concat(t,", ").concat(a,", ").concat(t,")"):e.themeColor,"--brand-color":"object"===typeof e.themeColor?"linear-gradient(to right, ".concat(t,", ").concat(a,", ").concat(t,")"):e.themeColor,"--text-color":"object"===typeof e.color?"linear-gradient(to right, ".concat(r,", ").concat(i,", ").concat(r,")"):e.color};return e.href||"submit"===e.type?(0,c.jsx)(n.Z,{as:e.href?"a":"submit"===e.type?"button":"a",type:"submit"===e.type?"submit":void 0,style:p,className:"border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""),href:e.href,onClick:e.onClick,disabled:e.disabled,variant:"secondary","aria-label":e.ariaLabel,target:e.target,children:(0,c.jsx)(o,(0,l.Z)({},e))}):(0,c.jsx)(s.rU,{style:p,target:e.target,className:"btn border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""," "),to:e.to?e.to:"#",onClick:e.onClick,"aria-label":e.ariaLabel,children:(0,c.jsx)(o,(0,l.Z)({},e))})},o=function(e){return(0,c.jsxs)(c.Fragment,{children:[e.icon&&"after"!==e.iconPosition&&(0,c.jsx)("i",{className:"".concat(e.icon," left-icon")}),e.title,e.icon&&"after"===e.iconPosition&&(0,c.jsx)("i",{className:"".concat(e.icon," right-icon")}),"btn-link-gradient"===e.theme&&(0,c.jsx)("span",{})]})};i.defaultProps={size:"lg",style:"primary"};var p=(0,r.memo)(i)},76267:function(e,t,a){var l=a(72791),r=a(89743),s=a(2677),n=a(43739),c=a(96266),i=a(80184),o=function(e){return(0,i.jsx)(r.Z,{className:"".concat(e.grid," ").concat(e.className),children:e.data.map((function(t,a){return(0,i.jsx)(s.Z,{className:"".concat(e.theme).concat(t.popular&&t.popular.isPopular?" popular":""," ").concat(e.themeColor," flex text-center justify-center rounded-md"),style:t.popular&&t.popular.color&&{"--popular-bg":t.popular.color},children:(0,i.jsxs)("div",{className:"pricing-wrapper",children:[t.popular&&t.popular.isPopular&&(0,i.jsx)("span",{className:"top-head hidden",children:"Popular"}),t.title&&(0,i.jsx)("div",{className:"pricing-head font-medium text-xlg uppercase font-serif",children:t.title}),t.subtitle&&(0,i.jsx)("div",{className:"pricing-sub-head text-sm uppercase mb-[40px]",children:t.subtitle}),t.price&&(0,i.jsx)("h3",{className:"heading-4 price-wrap mb-[5px] -tracking-[1px]",children:t.price}),t.term&&(0,i.jsx)("div",{className:"text-md",children:t.term}),(0,i.jsx)("span",{className:"plans-wrapper block",children:(0,i.jsx)("ul",{className:"pl-0 m-0 list-none py-[30px]",children:t.plans&&t.plans.map((function(e,t){return(0,i.jsx)("li",{dangerouslySetInnerHTML:{__html:e}},t)}))})}),t.buttonLink&&(t.popular&&t.popular.isPopular?(0,i.jsx)(n.default,{ariaLabel:"pricing table",to:t.buttonLink,className:"font-serif font-medium mt-[15px] uppercase rounded-[4px] hover:text-white",size:"md",color:"#fff",themeColor:["#e42564","#fa6259"],title:t.buttonTitle}):(0,i.jsx)(n.default,{ariaLabel:"pricing table",to:t.buttonLink,className:"font-serif font-medium mt-[15px] uppercase rounded-[4px] btn-transparent hover:text-white",size:"sm",color:"#262b35",themeColor:"#262b35",title:t.buttonTitle}))]})},a)}))})};o.defaultProps={data:c.xA},t.Z=(0,l.memo)(o)},7386:function(e,t,a){var l=a(72791),r=a(89743),s=a(2677),n=a(43739),c=a(96266),i=a(80184),o=function(e){return(0,i.jsx)(r.Z,{className:"".concat(e.grid," ").concat(e.className),children:e.data.map((function(t,a){return(0,i.jsx)(s.Z,{className:"".concat(e.theme).concat(t.popular?" popular":""," text-center justify-center"),style:t.popular&&t.popular.color&&{"--popular-bg":t.popular.color},children:(0,i.jsxs)("div",{className:"pricing-wrapper",children:[t.popular&&t.popular.isPopular&&(0,i.jsx)("span",{className:"top-head hidden uppercase",children:"Popular"}),t.icon&&(0,i.jsx)("i",{className:"".concat(t.icon," text-[50px] text-[#ffcc2e] inline-block")}),t.title&&(0,i.jsx)("h3",{className:"font-semibold mt-[5px] text-xmd uppercase font-serif text-[#262b35] mb-[40px] tracking-normal",children:t.title}),t.price&&(0,i.jsx)("h4",{className:"price-wrap text-[#262b35] mb-0 font-semibold tracking-[-2px] font-serif",children:t.price}),t.term&&(0,i.jsx)("div",{className:"mb-[30px] uppercase font-medium tracking-[1px] text-sm text-[#828282] font-serif",children:t.term}),(0,i.jsx)("ul",{className:"mb-[40px] pl-0 mx-0 list-none",children:t.plans&&t.plans.map((function(e,t){return(0,i.jsx)("li",{className:"text-[#828282] mb-[10px] last:mb-0",dangerouslySetInnerHTML:{__html:e}},t)}))}),t.buttonLink&&(t.popular&&t.popular.isPopular?(0,i.jsx)(n.default,{ariaLabel:"pricing table",to:t.buttonLink,className:"btn-fancy font-medium font-serif btn-fill rounded-none uppercase hover:text-black tracking-[0.5px]",color:"#ffffff",size:"sm",themeColor:"#232323",title:t.buttonTitle}):(0,i.jsx)(n.default,{ariaLabel:"pricing table",to:t.buttonLink,className:"btn-fancy font-medium font-serif uppercase btn-transparent rounded-none hover:text-white border-[#dbdbdb]",color:"#232323",size:"sm",themeColor:"#232323",title:t.buttonTitle}))]})},a)}))})};o.defaultProps={data:c.Ts},t.Z=(0,l.memo)(o)},95393:function(e,t,a){a.r(t);var l=a(72791),r=a(89743),s=a(2677),n=a(43739),c=a(80184),i=function(e){return(0,c.jsx)(r.Z,{className:"pt-[7.5rem] sm:pt-[20px] pb-4 justify-center overflow-hidden ".concat(e.className?" ".concat(e.className):"").concat(e.grid?" ".concat(e.grid):""),children:e.data.map((function(t,a){return(0,c.jsx)(s.Z,{className:"".concat(e.theme).concat(t.popular&&t.popular.isPopular?" popular":""," text-center rounded-md p-[0px] sm:px-[10px]"),style:t.popular&&t.popular.color&&{"--popular-bg":t.popular.color},children:(0,c.jsxs)("div",{className:"w-full",children:[t.title&&(0,c.jsx)("h3",{className:"title",children:t.title}),t.icon&&(0,c.jsx)("i",{className:"".concat(t.icon," icon")}),t.price&&(0,c.jsx)("h4",{className:"price",children:t.price}),(0,c.jsx)("ul",{className:"services-wrapper",children:t.plans&&t.plans.map((function(e,t){return(0,c.jsx)("li",{dangerouslySetInnerHTML:{__html:e}},t)}))}),t.buttonLink&&(t.popular&&t.popular.isPopular?(0,c.jsx)(n.default,{ariaLabel:"pricing table",to:t.buttonLink,className:"btn-fill font-medium font-serif uppercase mt-[5px]",color:"#ffffff",size:"md",themeColor:"#232323",title:t.buttonTitle}):(0,c.jsx)(n.default,{ariaLabel:"pricing table",to:t.buttonLink,className:"font-medium font-serif uppercase bg-[#fff] hover:text-white",color:"#000",size:"md",themeColor:"#000",title:t.buttonTitle}))]})},a)}))})};t.default=(0,l.memo)(i)},32546:function(e,t,a){var l=a(72791),r=a(89743),s=a(2677),n=a(43739),c=a(96266),i=a(80184),o=function(e){return(0,i.jsx)(r.Z,{className:"".concat(e.grid),children:e.data.map((function(t,a){return(0,i.jsx)(s.Z,{className:"".concat(e.theme).concat(e.className?" ".concat(e.className):"").concat(t.popular&&t.popular.isPopular?" popular":""," flex text-center justify-center rounded-md"),style:t.popular&&t.popular.color&&{"--popular-bg":t.popular.color},children:(0,i.jsxs)("div",{className:"pricing-wrapper",children:[t.subtitle&&(0,i.jsx)("div",{className:"pricing-sub-head text-md text-[14px] font-serif",children:t.subtitle}),t.title&&(0,i.jsx)("div",{className:"pricing-head font-medium text-[18px] uppercase font-serif md:text-xmd",children:t.title}),t.price&&(0,i.jsx)("h3",{className:"price-wrap font-medium font-serif mb-[8px]",children:t.price}),t.term&&(0,i.jsx)("div",{className:"pricing-terms",children:t.term}),(0,i.jsx)("span",{className:"plans-wrapper block",children:(0,i.jsx)("ul",{className:"py-12 pl-0 m-0 list-none",children:t.plans&&t.plans.map((function(e,t){return(0,i.jsx)("li",{dangerouslySetInnerHTML:{__html:e}},t)}))})}),t.buttonLink&&(t.popular?(0,i.jsx)(n.default,{ariaLabel:"pricing table",to:t.buttonLink,"aria-label":"price page link",className:"font-serif btn-fancy btn-fill rounded-none font-medium uppercase",themeColor:"#fff",color:"#232323",size:"md",title:t.buttonTitle}):(0,i.jsx)(n.default,{ariaLabel:"pricing table",to:t.buttonLink,"aria-label":"price page link",className:"font-medium btn-fancy btn-fill rounded-none font-serif uppercase",themeColor:"#232323",color:"#fff",size:"sm",title:t.buttonTitle}))]})},a)}))})};o.defaultProps={data:c.D3},t.Z=(0,l.memo)(o)},92347:function(e,t,a){a.r(t);var l=a(16140),r=(a(72791),a(47022)),s=a(89743),n=a(2677),c=a(19485),i=a(11087),o=a(76267),p=a(7386),m=a(95393),d=a(32546),x=a(96266),u=a(80184);t.default=function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("section",{className:"bg-darkgray py-[25px]",children:(0,u.jsx)(r.Z,{children:(0,u.jsxs)(s.Z,{className:"items-center justify-center mb-0",children:[(0,u.jsx)(n.Z,{xl:8,lg:6,children:(0,u.jsx)("h1",{className:"font-serif text-white font-medium mb-0 md:text-center text-lg",children:"Pricing table"})}),(0,u.jsx)(n.Z,{xl:4,lg:6,className:"breadcrumb justify-end text-xs font-serif md:mt-[10px] mb-0 md:justify-center",children:(0,u.jsxs)("ul",{className:"xs-text-center",children:[(0,u.jsx)("li",{children:(0,u.jsx)(i.rU,{to:"/","aria-label":"breadcrumb",className:"hover:text-white",children:"Home"})}),(0,u.jsx)("li",{children:(0,u.jsx)(i.rU,{to:"#","aria-label":"breadcrumb",onClick:function(e){return e.preventDefault()},className:"hover:text-white",children:"Elements"})}),(0,u.jsx)("li",{children:"Pricing table"})]})})]})})}),(0,u.jsx)("section",{className:"py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]",children:(0,u.jsxs)(r.Z,{children:[(0,u.jsx)(s.Z,{children:(0,u.jsx)(n.Z,{className:"mb-[7%]",children:(0,u.jsx)("h6",{className:"font-serif text-gray-900 text-center font-medium mb-[25px] lg:mb-[15px]",children:"Pricing table style 01"})})}),(0,u.jsx)(o.Z,{grid:"row-cols-1 row-cols-lg-3 gap-y-10 justify-center items-center",theme:"pricing-table-style-01 col-12 col-lg-4 col-md-8",className:"",data:x.xA,themeColor:"dark"})]})}),(0,u.jsx)("section",{className:"py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] bg-lightgray",children:(0,u.jsxs)(r.Z,{className:"px-[7%] md:px-[15px]",children:[(0,u.jsx)(s.Z,{children:(0,u.jsx)(n.Z,{className:"mb-[7%]",children:(0,u.jsx)("h6",{className:"font-serif text-gray-900 text-center font-medium mb-[25px] lg:mb-[15px]",children:"Pricing table style 02"})})}),(0,u.jsx)(p.Z,{grid:"row-cols-1 row-cols-md-3 gap-y-[30px] sm:mx-0 justify-center items-center",theme:"pricing-table-style-02",className:"",data:x.Ts})]})}),(0,u.jsx)("section",{className:"py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]",children:(0,u.jsxs)(r.Z,{children:[(0,u.jsx)(s.Z,{children:(0,u.jsx)(n.Z,{className:"mb-[7%]",children:(0,u.jsx)("h6",{className:"font-serif text-gray-900 text-center font-medium mb-[25px] lg:mb-[15px]",children:"Pricing table style 03"})})}),(0,u.jsx)(s.Z,{className:"justify-center",children:(0,u.jsx)(n.Z,{xs:12,xl:10,lg:11,className:"switch-tab",children:(0,u.jsxs)(c.Z,{defaultActiveKey:"monthly",children:[(0,u.jsx)(l.OK,{eventKey:"monthly",title:"MONTHLY",children:(0,u.jsx)(m.default,{grid:"row row-cols-1 gap-y-10 row-cols-md-3 items-center",theme:"pricing-table-style-03",className:"",data:x.Zj})}),(0,u.jsx)(l.OK,{eventKey:"yearly",title:"YEARLY",children:(0,u.jsx)(m.default,{grid:"row row-cols-1 row-cols-md-3 gap-y-10 items-center",theme:"pricing-table-style-03",className:"",data:x.Ui})})]})})})]})}),(0,u.jsx)("section",{className:"py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] bg-lightgray",children:(0,u.jsxs)(r.Z,{children:[(0,u.jsx)(s.Z,{children:(0,u.jsx)(n.Z,{className:"mb-[7%]",children:(0,u.jsx)("h6",{className:"font-serif text-gray-900 text-center font-medium mb-[25px] lg:mb-[15px]",children:"Pricing table style 04"})})}),(0,u.jsx)(d.Z,{grid:"row-cols-1 row-cols-lg-3 gap-y-[30px] justify-center items-center",theme:"pricing-table-style-04 col-12 col-lg-4 col-md-8",className:"",data:x.D3})]})})]})}}}]);
//# sourceMappingURL=2347.058eb01e.chunk.js.map