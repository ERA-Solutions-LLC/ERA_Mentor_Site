"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[75,3739],{43739:function(e,t,i){i.r(t),i.d(t,{default:function(){return m}});var s=i(1413),r=i(72791),a=i(11087),n=i(43360),o=i(80184),l=function(e){var t=e.themeColor&&e.themeColor[0],i=e.themeColor&&e.themeColor[1],r=e.color&&e.color[0],l=e.color&&e.color[1],m={"--gradient-color":"object"===typeof e.themeColor?"linear-gradient(45deg, ".concat(t,", ").concat(i,", ").concat(t,")"):e.themeColor,"--brand-color":"object"===typeof e.themeColor?"linear-gradient(to right, ".concat(t,", ").concat(i,", ").concat(t,")"):e.themeColor,"--text-color":"object"===typeof e.color?"linear-gradient(to right, ".concat(r,", ").concat(l,", ").concat(r,")"):e.color};return e.href||"submit"===e.type?(0,o.jsx)(n.Z,{as:e.href?"a":"submit"===e.type?"button":"a",type:"submit"===e.type?"submit":void 0,style:m,className:"border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""),href:e.href,onClick:e.onClick,disabled:e.disabled,variant:"secondary","aria-label":e.ariaLabel,target:e.target,children:(0,o.jsx)(c,(0,s.Z)({},e))}):(0,o.jsx)(a.rU,{style:m,target:e.target,className:"btn border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""," "),to:e.to?e.to:"#",onClick:e.onClick,"aria-label":e.ariaLabel,children:(0,o.jsx)(c,(0,s.Z)({},e))})},c=function(e){return(0,o.jsxs)(o.Fragment,{children:[e.icon&&"after"!==e.iconPosition&&(0,o.jsx)("i",{className:"".concat(e.icon," left-icon")}),e.title,e.icon&&"after"===e.iconPosition&&(0,o.jsx)("i",{className:"".concat(e.icon," right-icon")}),"btn-link-gradient"===e.theme&&(0,o.jsx)("span",{})]})};l.defaultProps={size:"lg",style:"primary"};var m=(0,r.memo)(l)},47952:function(e,t,i){i.d(t,{Z:function(){return d}});var s=i(1413),r=i(72791),a=i(11087),n=i(89743),o=i(34290),l=i(82307),c=i(80184),m=function(e){return(0,c.jsx)(n.Z,{className:e.grid,children:e.data.map((function(t,i){return(0,c.jsx)(o.m.div,(0,s.Z)((0,s.Z)({className:"col px-[15px]".concat(e.className?" ".concat(e.className):"")},(0,s.Z)((0,s.Z)({},e.animation),{},{transition:{delay:i*e.animationDelay}})),{},{children:(0,c.jsxs)("div",{className:e.theme,children:[(0,c.jsxs)("div",{className:"img-wrapper",children:["service-style-05"===e.theme&&(0,c.jsxs)("span",{className:"text-xmd",children:[i+1>=10?"":"0",i+1]}),t.img&&(0,c.jsx)("img",{height:238,width:360,className:"w-full max-w-full align-middle",src:t.img,alt:"service-style-5"}),"service-style-01"===e.theme&&(0,c.jsx)("div",{className:"services-box-hover",children:(t.icon||t.link)&&(0,c.jsx)(a.rU,{"aria-label":"services",to:t.link?t.link:"#",children:(0,c.jsx)("i",{className:t.icon})})})]}),(0,c.jsxs)("div",{className:"service-style",children:["service-style-03"===e.theme&&(0,c.jsx)("span",{className:"verticalline"}),t.title&&(0,c.jsx)("span",{className:"title font-medium text-darkgray block font-serif mb-[10px]",children:t.title}),t.content&&(0,c.jsx)("p",{children:t.content}),("service-style-02"===e.theme||"service-style-05"===e.theme)&&(0,c.jsx)("div",{className:"info-service",children:(t.linkTitle||t.icon)&&(0,c.jsxs)(a.rU,{"aria-label":"services",to:t.link?t.link:"#",className:"no-underline font-serif font-medium text-gray-900 text-sm uppercase block",children:[t.linkTitle,(0,c.jsx)("i",{className:t.icon})]})})]})]})}),i)}))})};m.defaultProps={data:l.pq,theme:"service-style-01",animationDelay:.2};var d=(0,r.memo)(m)},82307:function(e,t,i){i.d(t,{N2:function(){return o},Qs:function(){return r},ZI:function(){return a},_R:function(){return n},dT:function(){return c},pq:function(){return s},q_:function(){return l}});var s=[{img:"https://via.placeholder.com/800x618",icon:"fas fa-arrow-right",title:"FINANCE SERVICES",content:"Lorem ipsum consectetur adipiscing elit do eiusmod tempor incididunt.",link:"/page/our-story"},{img:"https://via.placeholder.com/800x618",icon:"fas fa-arrow-right",title:"BUSINESS PLANNING",content:"Lorem ipsum consectetur adipiscing elit do eiusmod tempor incididunt.",link:"/page/our-story"},{img:"https://via.placeholder.com/800x618",icon:"fas fa-arrow-right",title:"MARKETING STRATEGY",content:"Lorem ipsum consectetur adipiscing elit do eiusmod tempor incididunt.",link:"/page/our-story"}],r=[{img:"https://via.placeholder.com/800x548",icon:"ti-arrow-right",title:"Professional liability",content:"Lorem ipsum dolor sit amet, adipiscing elit sed do eiusmod incididunt.",linkTitle:"More info",link:"/page/what-we-offer"},{img:"https://via.placeholder.com/800x548",icon:"ti-arrow-right",title:"Dedicated to our clients",content:"Lorem ipsum dolor sit amet, adipiscing elit sed do eiusmod incididunt.",linkTitle:"More info",link:"/page/what-we-offer"},{img:"https://via.placeholder.com/800x548",icon:"ti-arrow-right",title:"Outstanding services",content:"Lorem ipsum dolor sit amet, adipiscing elit sed do eiusmod incididunt.",linkTitle:"More info",link:"/page/what-we-offer"}],a=[{img:"https://via.placeholder.com/800x560",title:"Real time analytics",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"},{img:"https://via.placeholder.com/800x560",title:"Google advertising",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"},{img:"https://via.placeholder.com/800x560",title:"Pixel perfect design",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"}],n=[{img:"https://via.placeholder.com/197x197",title:"CONSTRUCTION",content:"Lorem elit simply dummy text and typesetting."},{img:"https://via.placeholder.com/197x197",title:"ENTERTAINMENT",content:"Lorem elit simply dummy text and typesetting."},{img:"https://via.placeholder.com/197x197",title:"CROCKERY",content:"Lorem elit simply dummy text and typesetting."},{img:"https://via.placeholder.com/197x197",title:"AGRICULTURE",content:"Lorem elit simply dummy text and typesetting."},{img:"https://via.placeholder.com/197x197",title:"RETAILERS",content:"Lorem elit simply dummy text and typesetting."},{img:"https://via.placeholder.com/197x197",title:"PHARMACEUTICAL",content:"Lorem elit simply dummy text and typesetting."}],o=[{title:"Developing strategy",icon:"feather-arrow-right",content:"Lorem ipsum is simply dummy text of the printing typesetting lorem ipsum been dummy text.",link:"/page/about-me",linkTitle:"More Info"},{title:"Blazing performance",icon:"feather-arrow-right",content:"Lorem ipsum is simply dummy text of the printing typesetting lorem ipsum been dummy text.",link:"/page/about-me",linkTitle:"More Info"},{title:"Customer satisfaction",icon:"feather-arrow-right",content:"Lorem ipsum is simply dummy text of the printing typesetting lorem ipsum been dummy text.",link:"/page/about-me",linkTitle:"More Info"}],l=[{img:"https://via.placeholder.com/337x337",title:"Daily healthy tips",content:"Lorem dolor amet consectetur adipiscing eiusmod tempor"},{img:"https://via.placeholder.com/337x337",title:"Professional trainers",content:"Lorem dolor amet consectetur adipiscing eiusmod tempor"},{img:"https://via.placeholder.com/337x337",title:"Physical activity",content:"Lorem dolor amet consectetur adipiscing eiusmod tempor"},{img:"https://via.placeholder.com/337x337",title:"Natural environment",content:"Lorem dolor amet consectetur adipiscing eiusmod tempor"}],c=[{img:"https://via.placeholder.com/600x625",title:"Cardio",content:"Lorem ipsum dolor amet consectetur adipiscing eiusmod tempor.",btnName:"Join classes",btnLink:"#"},{img:"https://via.placeholder.com/600x625",title:"Crossfit",content:"Lorem ipsum dolor amet consectetur adipiscing eiusmod tempor.",btnName:"Join classes",btnLink:"#"},{img:"https://via.placeholder.com/600x625",title:"Sculpturing",content:"Lorem ipsum dolor amet consectetur adipiscing eiusmod tempor.",btnName:"Join classes",btnLink:"#"},{img:"https://via.placeholder.com/600x625",title:"Cycling",content:"Lorem ipsum dolor amet consectetur adipiscing eiusmod tempor.",btnName:"Join classes",btnLink:"#"}]},70075:function(e,t,i){i.r(t),i.d(t,{default:function(){return b}});var s=i(1413),r=i(72791),a=i(47022),n=i(89743),o=i(2677),l=i(34290),c=i(11087),m=i(21240),d=i(47952),p=i(58563),x=i(51496),u=i(43739),h=i(82307),f=i(80184),g=function(e){var t=r.useRef(null);return(0,f.jsxs)("div",{className:"".concat(e.className?"".concat(e.className):""," relative"),children:[(0,f.jsx)("div",{onClick:function(){return t.current.swiper.slidePrev()},className:"btn-slider-next absolute top-1/2 left-[-85px] -translate-y-1/2  rounded-full flex justify-center items-center text-darkgray shadow-[0_0_15px_rgba(0,0,0,0.1)] bg-[#fff] right-inherit h-[40px] w-[40px] hover:bg-darkgray hover:text-[#fff] transition-default cursor-pointer xl:left-[-11px] xl:z-[2] xs:-left-[15px]",children:(0,f.jsx)("i",{className:"feather-arrow-left text-xmd"})}),(0,f.jsx)(p.tq,(0,s.Z)((0,s.Z)({},e.carouselOption),{},{className:"h-full black-move",ref:t,modules:[x.tl,x.pt,x.N1,x.W_],children:e.data.map((function(e,t){return(0,f.jsx)(p.o5,{children:(0,f.jsxs)(n.Z,{className:"m-0 h-full",children:[(0,f.jsx)(o.Z,{sm:6,className:"col-12 bg-cover xs:h-[200px] bg-no-repeat overflow-hidden relative bg-center ",style:{backgroundImage:"url(".concat(e.img,")")}}),(0,f.jsx)(o.Z,{sm:6,className:"col-12 flex p-16 bg-white lg:p-10 xs:p-16",children:(0,f.jsxs)("div",{className:"self-center",children:[(0,f.jsxs)("span",{className:"font-serif font-medium uppercase text-[#262b35] mb-[10px] block",children:[" ",e.title," "]}),(0,f.jsxs)("p",{className:"mb-[25px] xs:mb-[15px]",children:[" ",e.content]}),(0,f.jsx)(u.default,{ariaLabel:"Join classes",to:e.btnLink,className:"btn-fill btn-fancy font-medium font-serif rounded-none uppercase",themeColor:"#262b35",color:"#fff",size:"xs",title:e.btnName})]})})]})},t)}))})),(0,f.jsx)("div",{onClick:function(){return t.current.swiper.slideNext()},className:"btn-slider-prev absolute top-1/2 right-[-85px] -translate-y-1/2 bg-[#fff] rounded-full flex justify-center items-center text-darkgray right-inherit h-[40px] w-[40px] hover:bg-darkgray hover:text-[#fff] transition-default shadow-[0_0_15px_rgba(0,0,0,0.1)] ml-[10px] cursor-pointer xl:right-[-11px] xl:z-[2] xs:-right-[15px]",children:(0,f.jsx)("i",{className:"feather-arrow-right text-xmd"})})]})};g.defaultProps={data:h.dT};var y=(0,r.memo)(g),b=function(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("section",{className:"bg-darkgray py-[25px]",children:(0,f.jsx)(a.Z,{children:(0,f.jsxs)(n.Z,{className:"items-center justify-center mb-0",children:[(0,f.jsx)(o.Z,{xl:8,lg:6,children:(0,f.jsx)("h1",{className:"font-serif text-white font-medium mb-0 md:text-center text-lg",children:"Services"})}),(0,f.jsx)(o.Z,{xl:4,lg:6,className:"breadcrumb justify-end text-xs font-serif md:mt-[10px] mb-0 md:justify-center",children:(0,f.jsxs)("ul",{className:"xs-text-center",children:[(0,f.jsx)("li",{children:(0,f.jsx)(c.rU,{to:"/","aria-label":"breadcrumb",className:"hover:text-white",children:"Home"})}),(0,f.jsx)("li",{children:(0,f.jsx)(c.rU,{to:"#","aria-label":"breadcrumb",onClick:function(e){return e.preventDefault()},className:"hover:text-white",children:"Elements"})}),(0,f.jsx)("li",{children:"Services"})]})})]})})}),(0,f.jsx)(l.m.section,(0,s.Z)((0,s.Z)({className:"py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]"},m.Ji),{},{children:(0,f.jsxs)(a.Z,{children:[(0,f.jsx)(n.Z,{className:"justify-center",children:(0,f.jsx)(o.Z,{md:12,className:"text-center mb-[6%]",children:(0,f.jsx)("h6",{className:"font-serif text-darkgray font-medium",children:"Services style 01"})})}),(0,f.jsx)(d.Z,{grid:"row-cols-1 row-cols-lg-3 row-cols-sm-2 gap-y-10 justify-center text-center",theme:"service-style-01",className:"",data:h.pq,animation:m.Ji})]})})),(0,f.jsx)(l.m.section,(0,s.Z)((0,s.Z)({className:"bg-lightgray py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]"},m.Ji),{},{children:(0,f.jsxs)(a.Z,{children:[(0,f.jsx)(n.Z,{className:"justify-center",children:(0,f.jsx)(o.Z,{md:12,className:"text-center mb-[7%]",children:(0,f.jsx)("h6",{className:"font-serif text-darkgray font-medium",children:"Services style 02"})})}),(0,f.jsx)(d.Z,{grid:"row-cols-1 row-cols-lg-3 row-cols-md-2 gap-y-10 justify-center",theme:"service-style-02",className:"",data:h.Qs,animation:m.Ji})]})})),(0,f.jsx)(l.m.section,(0,s.Z)((0,s.Z)({className:"bg-darkgray py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]"},m.Ji),{},{children:(0,f.jsxs)(a.Z,{children:[(0,f.jsx)(n.Z,{className:"justify-center",children:(0,f.jsx)(o.Z,{md:12,className:"text-center mb-[7%]",children:(0,f.jsx)("h6",{className:"font-serif text-white font-medium",children:"Services style 03"})})}),(0,f.jsx)(d.Z,{grid:"row-cols-1 row-cols-lg-3 row-cols-md-2 gap-y-10 justify-center",theme:"service-style-03",className:"",data:h.ZI,animation:m.Ji})]})})),(0,f.jsx)(l.m.section,(0,s.Z)((0,s.Z)({className:"py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:pt-[50px] xs:pb-0"},m.Ji),{},{children:(0,f.jsxs)(a.Z,{children:[(0,f.jsx)(n.Z,{className:"justify-center",children:(0,f.jsx)(o.Z,{md:12,className:"text-center mb-[6%]",children:(0,f.jsx)("h6",{className:"font-serif text-darkgray font-medium",children:"Services style 04"})})}),(0,f.jsx)(d.Z,{grid:"row-cols-1 row-cols-lg-3 row-cols-sm-2 gap-y-24 md:gap-y-[4rem] justify-center",theme:"service-style-04",className:"",data:h._R,animation:m.Ji})]})})),(0,f.jsx)(l.m.section,(0,s.Z)((0,s.Z)({className:"bg-lightgray border-t py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]"},m.Ji),{},{children:(0,f.jsxs)(a.Z,{children:[(0,f.jsx)(n.Z,{className:"justify-center",children:(0,f.jsx)(o.Z,{md:12,className:"text-center mb-[7%]",children:(0,f.jsx)("h6",{className:"font-serif text-darkgray font-medium",children:"Services style 05"})})}),(0,f.jsx)(n.Z,{className:"justify-center",children:(0,f.jsx)(o.Z,{lg:12,md:11,xs:12,className:"md:px-0",children:(0,f.jsx)(d.Z,{grid:"row-cols-lg-3 row-cols-1 md:my-0 md:mx-auto gap-y-10 justify-center",theme:"service-style-05",className:"col-md-10",data:h.N2,animation:m.Ji})})})]})})),(0,f.jsx)(l.m.section,(0,s.Z)((0,s.Z)({className:"py-[160px] overflow-hidden lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]"},m.Ji),{},{children:(0,f.jsxs)(a.Z,{children:[(0,f.jsx)(n.Z,{className:"justify-center",children:(0,f.jsx)(o.Z,{md:12,className:"text-center mb-[5%]",children:(0,f.jsx)("h6",{className:"font-serif text-darkgray font-medium",children:"Services style 06"})})}),(0,f.jsx)(n.Z,{className:"justify-center",children:(0,f.jsx)(o.Z,{lg:12,md:11,xs:12,className:"md:px-0",children:(0,f.jsx)(d.Z,{grid:"row row-cols-1 row-cols-lg-4 row-cols-sm-2 gap-y-[40px] justify-center",theme:"service-style-06",data:h.q_,animation:m.Ji})})})]})})),(0,f.jsx)(l.m.section,{className:"bg-darkslateblue py-[160px] relative overflow-hidden lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]",children:(0,f.jsxs)(a.Z,{children:[(0,f.jsx)(n.Z,{className:"justify-center",children:(0,f.jsx)(o.Z,{md:12,className:"text-center mb-[7%]",children:(0,f.jsx)("h6",{className:"font-serif text-white font-medium",children:"Services style 07"})})}),(0,f.jsx)(n.Z,{className:"justify-center",children:(0,f.jsx)(o.Z,{lg:12,md:9,xs:12,className:"md:px-0 xs:!px-[15px]",children:(0,f.jsx)(y,{className:"",data:h.dT,carouselOption:{spaceBetween:30,slidesPerView:1,observer:!0,observeParents:!0,loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{992:{slidesPerView:2}}}})})})]})})]})}},15341:function(e,t,i){i.d(t,{FT:function(){return o}});var s=i(29439),r=i(72791),a=i(80184),n=["as","disabled"];function o(e){var t=e.tagName,i=e.disabled,s=e.href,r=e.target,a=e.rel,n=e.role,o=e.onClick,l=e.tabIndex,c=void 0===l?0:l,m=e.type;t||(t=null!=s||null!=r||null!=a?"a":"button");var d={tagName:t};if("button"===t)return[{type:m||"button",disabled:i},d];var p=function(e){(i||"a"===t&&function(e){return!e||"#"===e.trim()}(s))&&e.preventDefault(),i?e.stopPropagation():null==o||o(e)};return"a"===t&&(s||(s="#"),i&&(s=void 0)),[{role:null!=n?n:"button",disabled:void 0,tabIndex:i?void 0:c,href:s,target:"a"===t?r:void 0,"aria-disabled":i||void 0,rel:"a"===t?a:void 0,onClick:p,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),p(e))}},d]}var l=r.forwardRef((function(e,t){var i=e.as,r=e.disabled,l=function(e,t){if(null==e)return{};var i,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)i=a[s],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n),c=o(Object.assign({tagName:i,disabled:r},l)),m=(0,s.Z)(c,2),d=m[0],p=m[1].tagName;return(0,a.jsx)(p,Object.assign({},l,d,{ref:t}))}));l.displayName="Button",t.ZP=l},43360:function(e,t,i){var s=i(1413),r=i(29439),a=i(45987),n=i(81694),o=i.n(n),l=i(72791),c=i(15341),m=i(10162),d=i(80184),p=["as","bsPrefix","variant","size","active","disabled","className"],x=l.forwardRef((function(e,t){var i=e.as,n=e.bsPrefix,l=e.variant,x=void 0===l?"primary":l,u=e.size,h=e.active,f=void 0!==h&&h,g=e.disabled,y=void 0!==g&&g,b=e.className,j=(0,a.Z)(e,p),v=(0,m.vE)(n,"btn"),N=(0,c.FT)((0,s.Z)({tagName:i,disabled:y},j)),Z=(0,r.Z)(N,2),k=Z[0],w=Z[1].tagName;return(0,d.jsx)(w,(0,s.Z)((0,s.Z)((0,s.Z)({},k),j),{},{ref:t,disabled:y,className:o()(b,v,f&&"active",x&&"".concat(v,"-").concat(x),u&&"".concat(v,"-").concat(u),j.href&&y&&"disabled")}))}));x.displayName="Button",t.Z=x}}]);
//# sourceMappingURL=75.55896463.chunk.js.map