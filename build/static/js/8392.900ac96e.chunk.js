"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[8392,5705],{43739:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var a=t(1413),s=t(72791),l=t(11087),c=t(43360),r=t(80184),i=function(e){var n=e.themeColor&&e.themeColor[0],t=e.themeColor&&e.themeColor[1],s=e.color&&e.color[0],i=e.color&&e.color[1],d={"--gradient-color":"object"===typeof e.themeColor?"linear-gradient(45deg, ".concat(n,", ").concat(t,", ").concat(n,")"):e.themeColor,"--brand-color":"object"===typeof e.themeColor?"linear-gradient(to right, ".concat(n,", ").concat(t,", ").concat(n,")"):e.themeColor,"--text-color":"object"===typeof e.color?"linear-gradient(to right, ".concat(s,", ").concat(i,", ").concat(s,")"):e.color};return e.href||"submit"===e.type?(0,r.jsx)(c.Z,{as:e.href?"a":"submit"===e.type?"button":"a",type:"submit"===e.type?"submit":void 0,style:d,className:"border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""),href:e.href,onClick:e.onClick,disabled:e.disabled,variant:"secondary","aria-label":e.ariaLabel,target:e.target,children:(0,r.jsx)(o,(0,a.Z)({},e))}):(0,r.jsx)(l.rU,{style:d,target:e.target,className:"btn border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""," "),to:e.to?e.to:"#",onClick:e.onClick,"aria-label":e.ariaLabel,children:(0,r.jsx)(o,(0,a.Z)({},e))})},o=function(e){return(0,r.jsxs)(r.Fragment,{children:[e.icon&&"after"!==e.iconPosition&&(0,r.jsx)("i",{className:"".concat(e.icon," left-icon")}),e.title,e.icon&&"after"===e.iconPosition&&(0,r.jsx)("i",{className:"".concat(e.icon," right-icon")}),"btn-link-gradient"===e.theme&&(0,r.jsx)("span",{})]})};i.defaultProps={size:"lg",style:"primary"};var d=(0,s.memo)(i)},38392:function(e,n,t){t.r(n),t.d(n,{CollapsibleMenu:function(){return A},HamburgerMenu:function(){return U},Header:function(){return Z},HeaderCart:function(){return P},HeaderLanguage:function(){return q},HeaderNav:function(){return L},Menu:function(){return C},MobileMenu:function(){return E},SearchBar:function(){return H},Topbar:function(){return S},default:function(){return D}});var a=t(74165),s=t(15861),l=t(45987),c=t(1413),r=t(29439),i=t(72791),o=t(81724),d=t(92506),m=t(22804),u=t(57689),p=t(11087),h=t(24552),f=t(47022),x=t(28949),g=t(62752),b=t(17728),j=t(43739),v=t(25705),N=t(12734),k=t(91917),w=t(80184),y=["className"],Z=(0,i.memo)((function(e){var n=(0,i.useContext)(N.Z).setHeaderHeight,t=(0,m.v)().scrollY,a=(0,i.useState)({y:0,prevY:-1,directionDown:!0}),s=(0,r.Z)(a,2),l=s[0],o=s[1],d=(0,u.TH)();return(0,i.useEffect)((function(){var t=document.querySelector("header");function a(){var a=window.innerWidth,s=e.topSpace.desktop&&!0===e.topSpace.desktop?t.offsetHeight:0;a<=1199&&e.topSpace.lg&&(s=!0===e.topSpace.lg?t.offsetHeight:0),a<=991&&e.topSpace.md&&(s=!0===e.topSpace.md?t.offsetHeight:0),a<=767&&e.topSpace.sm&&(s=!0===e.topSpace.sm?t.offsetHeight:0),a<=575&&e.topSpace.xs&&(s=!0===e.topSpace.xs?t.offsetHeight:0),n(s)}a(),window.addEventListener("load",a),window.addEventListener("resize",a),document.body.classList.contains("mobile-menu")&&(document.body.classList.remove("navbar-collapse-show"),document.body.classList.remove("menu-modern"),document.body.classList.remove("menu-full"),document.body.style.removeProperty("overflow"))}),[d]),(0,i.useEffect)((function(){var e=0;t.onChange((function(n){o(n>e?(0,c.Z)((0,c.Z)({},l),{},{y:n,prevY:n-1,directionDown:!0}):(0,c.Z)((0,c.Z)({},l),{},{y:n,prevY:n-1,directionDown:!1})),0===n&&o((0,c.Z)((0,c.Z)({},l),{},{directionDown:!0})),e=n}))}),[]),(0,w.jsx)("header",{className:"".concat(e.className?e.className:"").concat(l.y>5?" sticky-header":"").concat(!1===l.directionDown?" header-appear":"").concat(e.type?" ".concat(e.type):""),children:e.children})})),L=function(e){return(0,w.jsx)(h.Z,{collapseOnSelect:!0,id:"headerbar",expand:e.expand,bg:e.bg?e.bg:"light",variant:e.theme,className:"".concat(e.menu&&"menu-".concat(e.menu)).concat(e.className?" ".concat(e.className):"").concat(e.bg?"":"light"),onToggle:function(){var e=document.querySelector("header").querySelector(".navbar-nav").querySelectorAll(".nav-item");document.body.classList.contains("navbar-collapse-show")?document.body.classList.remove("navbar-collapse-show"):document.body.classList.add("navbar-collapse-show"),e.forEach((function(e){e.classList.contains("open")&&setTimeout((function(){e.classList.remove("open")}),200)}))},children:(0,w.jsx)(f.Z,{fluid:e.fluid,className:e.containerClass?e.containerClass:"",children:e.children})})},S=function(e){var n=e.className,t=(0,l.Z)(e,y);return(0,i.useEffect)((function(){var e=document.querySelector(".top-bar");if("undefined"!=typeof e&&null!=e){var n="".concat(e.clientHeight,"px");e.style.setProperty("--topbar-height",n)}}),[]),(0,w.jsx)("div",(0,c.Z)((0,c.Z)({className:"top-bar".concat(n?" ".concat(n):"")},t),{},{children:t.children}))},C=(0,i.memo)((function(e){var n=(0,i.useRef)(null),a=(0,i.useState)(null),s=(0,r.Z)(a,2),l=s[0],c=s[1],o=(0,i.useState)(!1),d=(0,r.Z)(o,2),m=d[0],h=d[1],f=(0,u.TH)();return(0,i.useEffect)((function(){var e=document.querySelector("header").querySelectorAll(".nav-link"),n=Array.from(e).find((function(e){return e.getAttribute("href")===f.pathname}));n&&Promise.resolve().then(t.bind(t,38480)).then((function(e){var t=e.getParents(n).filter((function(e){return e.classList.contains("simple-dropdown")})),a=e.getParents(n).filter((function(e){return e.classList.contains("nav-item")}));t.forEach((function(e){return e.classList.add("active")})),a.forEach((function(e){return e.classList.add("active")}))}))}),[f,m]),(0,i.useEffect)((function(){document.querySelector("header").querySelectorAll(".navbar-nav > .nav-item").forEach((function(e){return e.addEventListener("mouseover",(function(){return h(!0)}))}))}),[]),(0,w.jsx)("div",{className:"".concat(e.mobileMenu?"mobile-menu-".concat(e.mobileMenu):"").concat(e.className?" ".concat(e.className):""),children:(0,w.jsx)("ul",{className:"navbar-nav",children:e.data.map((function(e,t){return(0,w.jsxs)("li",{className:"nav-item".concat(e.dropdown||e.megamenu?" dropdown":"").concat(l===t?" open":""),children:[e.link?(0,w.jsx)(p.rU,{className:"nav-link",to:e.link,children:e.title}):(0,w.jsx)("span",{className:"nav-link",children:e.title}),(0,w.jsx)("i",{className:"fa fa-angle-down",onClick:function(e){return c((n=t)!==l?n:null);var n}}),e.dropdown&&(0,w.jsx)("ul",{className:"simple-dropdown-menu",children:e.dropdown.map((function(e,n){return(0,w.jsxs)("li",{className:"simple-dropdown",children:[e.link?(0,w.jsxs)(p.rU,{className:"nav-link",to:e.link,children:[e.title,e.dropdown&&(0,w.jsx)("i",{className:"fas fa-angle-right"})]}):(0,w.jsxs)("span",{className:"nav-link",children:[e.title,e.dropdown&&(0,w.jsx)("i",{className:"fas fa-angle-right"})]}),e.dropdown&&(0,w.jsx)("ul",{className:"simple-dropdown-menu",children:e.dropdown.map((function(e,n){return(0,w.jsxs)("li",{className:"simple-dropdown",children:[e.link?(0,w.jsxs)(p.rU,{className:"nav-link".concat(e.dropdown?" md:text-black md:mt-[15px] md:mb-[7px]":""),to:e.link,children:[e.title,e.dropdown&&(0,w.jsx)("i",{className:"fas fa-angle-right"})]}):(0,w.jsxs)("span",{className:"nav-link",children:[e.title,e.dropdown&&(0,w.jsx)("i",{className:"fas fa-angle-right"})]}),e.dropdown&&(0,w.jsx)("ul",{className:"simple-dropdown-menu",children:e.dropdown.map((function(e,n){return(0,w.jsx)("li",{className:"simple-dropdown",children:(0,w.jsx)(p.rU,{className:"nav-link",to:e.link,children:e.title})},n)}))})]},n)}))})]},n)}))}),e.megamenu&&(0,w.jsx)("div",{className:"flex megamenu",ref:n,children:e.megamenu.map((function(e,n){return(0,w.jsxs)("ul",{className:"".concat(e.dropdown.filter((function(e){return e.img})).length>0?"!pr-[30px] img-wrapper inline-block last:!pr-[0px]":"inline-block"),children:[e.title&&(0,w.jsx)("li",{className:"title md:text-black text-md font-medium mb-[15px] whitespace-nowrap",children:e.title}),e.dropdown&&e.dropdown.map((function(e,n){return(0,w.jsxs)("li",{className:"nav-item",children:[e.title&&(0,w.jsxs)(p.rU,{className:"nav-link",to:e.link?e.link:"#",children:[" ",e.icon&&(0,w.jsx)("i",{className:"".concat(e.icon," md:text-black mr-[10px]")})," ",e.title]}),e.img&&e.link&&(0,w.jsx)(p.rU,{to:e.link,children:(0,w.jsx)("img",{height:"235",alt:"menu-banner",width:"210",className:"inline-block max-w-[210px] md:text-black",src:e.img})})]},n)}))]},n)}))})]},t)}))})})})),E=function(e){var n=(0,i.useRef)(null),t=(0,i.useState)(null),a=(0,r.Z)(t,2),s=a[0],l=a[1],c=(0,i.useState)(!1),o=(0,r.Z)(c,2),d=o[0],m=o[1],f=(0,u.TH)();return(0,i.useEffect)((function(){function e(e){for(var n=[];e.parentNode&&"body"!==e.parentNode.nodeName.toLowerCase();)e=e.parentNode,n.push(e);return n}document.querySelector("header").querySelectorAll(".nav-link").forEach((function(n){var t=n.getAttribute("href");if(n.classList.remove("active"),t===f.pathname){n.closest(".simple-dropdown")&&n.closest(".simple-dropdown").querySelectorAll(".nav-link").forEach((function(e){return e.classList.remove("active")})),n.classList.add("active");var a=e(n).filter((function(e){return e.classList.contains("simple-dropdown")})),s=e(n).filter((function(e){return e.classList.contains("nav-item")}));a.forEach((function(e){return e.classList.add("active")})),s.forEach((function(e){return e.classList.add("active")}))}}))}),[f]),(0,i.useEffect)((function(){document.body.classList.add("mobile-menu");var e=function(e){27===e.keyCode&&(document.body.classList.contains("menu-modern")||document.body.classList.contains("menu-full"))&&document.querySelector("#close-btn").click()};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[]),(0,i.useEffect)((function(){var n=window.matchMedia("(max-width: 991px)");function t(n){n.matches&&!0===d?(document.body.style.overflow="hidden",document.body.classList.add("menu-".concat(e.type))):(document.body.style.removeProperty("overflow"),document.body.classList.remove("menu-".concat(e.type)))}t(n),n.addListener(t)}),[d]),(0,w.jsxs)("div",{className:e.className?" ".concat(e.className):"",children:[(0,w.jsxs)(h.Z.Toggle,{id:"toggle-bar",className:"order-last md:px-[25px] sm:ml-0",onClick:function(){return m(!d)},children:[(0,w.jsx)("span",{className:"navbar-toggler-line"}),(0,w.jsx)("span",{className:"navbar-toggler-line"}),(0,w.jsx)("span",{className:"navbar-toggler-line"}),(0,w.jsx)("span",{className:"navbar-toggler-line"})]}),(0,w.jsxs)(h.Z.Collapse,{id:"myCollapsible",className:"col-auto justify-center mobile-menu-".concat(e.type),children:[(0,w.jsxs)(h.Z.Toggle,{id:"close-btn",onClick:function(){return m(!d)},children:[(0,w.jsx)("span",{className:"navbar-toggler-line bg-white"}),(0,w.jsx)("span",{className:"navbar-toggler-line bg-white"}),(0,w.jsx)("span",{className:"navbar-toggler-line bg-white"}),(0,w.jsx)("span",{className:"navbar-toggler-line bg-white"})]}),(0,w.jsx)(v.default,{className:"pr-[15px]",theme:"light",autoHide:!0,children:(0,w.jsx)("div",{className:"",children:(0,w.jsx)("ul",{className:"navbar-nav",children:e.data.map((function(e,t){return(0,w.jsxs)("li",{className:"nav-item".concat(e.dropdown||e.megamenu?" dropdown":"").concat(s===t?" open":""),children:[e.link?(0,w.jsx)(p.rU,{className:"nav-link",to:e.link,children:e.title}):(0,w.jsx)("span",{className:"nav-link",children:e.title}),(0,w.jsx)("i",{className:"fa fa-angle-down",onClick:function(e){return l((n=t)!==s?n:null);var n}}),e.dropdown&&(0,w.jsx)("ul",{className:"simple-dropdown-menu",children:e.dropdown.map((function(e,n){return(0,w.jsxs)("li",{className:"simple-dropdown",children:[e.link?(0,w.jsxs)(p.rU,{className:"nav-link",to:e.link,children:[e.title,e.dropdown&&(0,w.jsx)("i",{className:"fas fa-angle-right"})]}):(0,w.jsxs)("span",{className:"nav-link",children:[e.title,e.dropdown&&(0,w.jsx)("i",{className:"fas fa-angle-right"})]}),e.dropdown&&(0,w.jsx)("ul",{className:"simple-dropdown-menu",children:e.dropdown.map((function(e,n){return(0,w.jsxs)("li",{className:"simple-dropdown",children:[e.link?(0,w.jsxs)(p.rU,{className:"nav-link".concat(e.dropdown?" md:text-black md:mt-[15px] md:mb-[7px]":""),to:e.link,children:[e.title,e.dropdown&&(0,w.jsx)("i",{className:"fas fa-angle-right"})]}):(0,w.jsxs)("span",{className:"nav-link",children:[e.title,e.dropdown&&(0,w.jsx)("i",{className:"fas fa-angle-right"})]}),e.dropdown&&(0,w.jsx)("ul",{className:"simple-dropdown-menu",children:e.dropdown.map((function(e,n){return(0,w.jsx)("li",{className:"simple-dropdown",children:(0,w.jsx)(p.rU,{className:"nav-link",to:e.link,children:e.title})},n)}))})]},n)}))})]},n)}))}),e.megamenu&&(0,w.jsx)("div",{className:"megamenu",ref:n,children:(0,w.jsx)("div",{className:"flex",children:e.megamenu.map((function(e,n){return(0,w.jsxs)("ul",{className:"".concat(e.dropdown.filter((function(e){return e.img})).length>0?"img-wrapper":"inline-block"),children:[(0,w.jsx)("li",{className:"title text-md font-medium mb-[10px] whitespace-nowrap",children:e.title}),e.dropdown&&e.dropdown.map((function(e,n){return(0,w.jsx)("li",{className:"nav-item",children:(0,w.jsxs)(p.rU,{className:"nav-link",to:e.link?e.link:"#",children:[e.icon&&(0,w.jsx)("i",{className:"".concat(e.icon," mr-[10px]")})," ",e.title]})},n)}))]},n)}))})})]},t)}))})})})]})]})},U=(0,i.memo)((function(e){var n=(0,i.useRef)(null),t=(0,i.useState)(!1),a=(0,r.Z)(t,2),s=a[0],l=a[1];return(0,g.Z)(n,(function(e){return l(!1)})),(0,i.useEffect)((function(){var e=function(e){27===e.keyCode&&l(!1)};return!0===s?(document.querySelector("body").classList.add("overflow-hidden"),document.querySelector(".push-button").classList.remove("collapsed")):(document.querySelector("body").classList.remove("overflow-hidden"),document.querySelector(".push-button").classList.add("collapsed")),window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[s]),(0,w.jsx)(w.Fragment,{children:[!1].map((function(t){return(0,w.jsxs)(h.Z,{expand:t,className:"header-push-button bg-transparent inline-block ".concat(e.theme),children:[(0,w.jsx)(h.Z.Toggle,{className:"push-button",onClick:function(){return l(!0)},children:(0,w.jsxs)("div",{className:"nav-icon",children:[(0,w.jsx)("span",{className:"navbar-toggler-line"}),(0,w.jsx)("span",{className:"navbar-toggler-line"}),(0,w.jsx)("span",{className:"navbar-toggler-line"}),(0,w.jsx)("span",{className:"navbar-toggler-line"})]})}),(0,w.jsx)("div",{className:"".concat(s?"block h-[100vh] left-0 overflow-hidden fixed top-0 w-full z-[999]":""),children:(0,w.jsxs)("div",{ref:n,className:"hamburger-menu-wrapper pos-".concat(e.position).concat(s?" show":"").concat(e.className?" ".concat(e.className):""),children:[e.closeBtn&&(0,w.jsx)("button",{"aria-label":"hamburger menu close button",className:"close-btn",onClick:function(){return l(!1)},children:(0,w.jsx)("i",{className:"fas fa-times"})}),s&&e.children]})})]},t)}))})})),H=(0,i.memo)((function(e){var n=(0,i.useContext)(N.Z).setIsModalOpen,t=(0,i.useRef)(null),l=(0,i.useState)(!1),c=(0,r.Z)(l,2),m=c[0],h=c[1],f=(0,u.s0)();return(0,g.Z)(t,(function(){return h(!1)})),(0,i.useEffect)((function(){!0===m&&n(!0),!1===m&&n(!1)}),[m]),(0,i.useEffect)((function(){var e=function(e){27===e.keyCode&&h(!1)};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[]),(0,w.jsxs)("div",{className:"header-search-iconbar inline-block align-middle pl-[17px] text-[17px] leading-none".concat(e.className?" ".concat(e.className):""),style:e.style,children:[(0,w.jsx)(p.rU,{to:"#","aria-label":"search",className:"search-form-icon leading-[20px]",onClick:function(e){return e.preventDefault()},children:(0,w.jsx)("i",{className:"feather-search px-0 inline-block".concat(e.className?" ".concat(e.className):""),onClick:function(){return h(!0)}})}),(0,w.jsxs)("div",{className:"form-wrapper ".concat(m?" show":""),children:[(0,w.jsxs)("button",{title:"Close",type:"button",className:"search-close font-serif",onClick:function(){return h(!1)},children:["\xd7"," "]}),m&&(0,w.jsx)(d.J9,{initialValues:{search:""},validationSchema:o.Ry().shape({search:o.Z_().required("Field is required.")}),onSubmit:function(){var e=(0,s.Z)((0,a.Z)().mark((function e(n,t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,500)}));case 2:t.resetForm(),h(!1),f("/page/search-result",{state:{search:n}});case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),children:(0,w.jsx)(d.l0,{role:"search",method:"get",id:"search-form",className:"search-form text-start",ref:t,children:(0,w.jsxs)("div",{className:"search-form-box",children:[(0,w.jsx)(b.II,{showErrorMsg:!1,className:"search-input font-serif text-darkgray relative border-b border-solid border-darkgray",name:"search",type:"text",label:(0,w.jsxs)("span",{className:"search-label font-medium text-spanishgray text-sm font-serif uppercase block",children:["What are you looking for?"," "]}),placeholder:"Enter your keywords..."}),(0,w.jsx)("button",{type:"submit",className:"search-button absolute top-1/2 right-0",children:(0,w.jsx)("i",{className:"feather-search text-darkgray","aria-hidden":"true"})})]})})})]})]})})),q=function(e){return(0,w.jsxs)("div",{className:"header-language dropdown inline-block align-middle pl-[17px] text-[17px]".concat(e.className?" ".concat(e.className):""),style:e.style,children:[(0,w.jsx)(p.rU,{to:"#","aria-label":"language",onClick:function(e){return e.preventDefault()},children:(0,w.jsx)("i",{className:"feather-globe py-[30px] px-0 inline-block ".concat(e.className)})}),(0,w.jsxs)("ul",{className:"dropdown-menu block absolute font-serif left-auto right-0 p-15px rounded-[6px] border-0 m-0 min-w-[140px]",children:[(0,w.jsx)("li",{children:(0,w.jsxs)(p.rU,{"aria-label":"link",onClick:function(e){return e.preventDefault()},to:"#",title:"English",children:[(0,w.jsx)("span",{className:"icon-country block py-[2px] px-0 text-xs text-[#828282]",children:(0,w.jsx)("img",{src:"/assets/img/country-flag-16X16/usa.png",alt:"usa",width:"16",height:"16"})}),"English"]})}),(0,w.jsx)("li",{children:(0,w.jsxs)(p.rU,{"aria-label":"link",onClick:function(e){return e.preventDefault()},to:"#",title:"England",children:[(0,w.jsx)("span",{className:"icon-country block py-[2px] px-0 text-xs text-[#828282]",children:(0,w.jsx)("img",{src:"/assets/img/country-flag-16X16/england.png",alt:"england",width:"16",height:"16"})}),"England"]})}),(0,w.jsx)("li",{children:(0,w.jsxs)(p.rU,{"aria-label":"link",onClick:function(e){return e.preventDefault()},to:"#",title:"France",children:[(0,w.jsx)("span",{className:"icon-country block py-[2px] px-0 text-xs text-[#828282]",children:(0,w.jsx)("img",{src:"/assets/img/country-flag-16X16/france.png",alt:"france",width:"16",height:"16"})}),"France"]})}),(0,w.jsx)("li",{children:(0,w.jsxs)(p.rU,{"aria-label":"link",onClick:function(e){return e.preventDefault()},to:"#",title:"Russian",children:[(0,w.jsx)("span",{className:"icon-country block py-[2px] px-0 text-xs text-[#828282]",children:(0,w.jsx)("img",{src:"/assets/img/country-flag-16X16/russian.png",alt:"russian",width:"16",height:"16"})}),"Russian"]})}),(0,w.jsx)("li",{children:(0,w.jsxs)(p.rU,{"aria-label":"link",onClick:function(e){return e.preventDefault()},to:"#",title:"Spain",children:[(0,w.jsx)("span",{className:"icon-country block py-[2px] px-0 text-xs text-[#828282]",children:(0,w.jsx)("img",{src:"/assets/img/country-flag-16X16/spain.png",alt:"spain",width:"16",height:"16"})}),"Spain"]})})]})]})},P=function(e){return(0,w.jsxs)("div",{className:"header-cart-icon dropdown mr-[10px] inline-block align-middle pl-[17px] text-[17px]".concat(e.className?" ".concat(e.className):""),style:e.style,children:[(0,w.jsxs)(p.rU,{"aria-label":"link",to:"#",className:"relative inline-block",children:[(0,w.jsx)("i",{className:"feather-shopping-bag px-0 py-[30px] inline-block ".concat(e.className)}),(0,w.jsx)("span",{className:"cart-count font-serif bg-basecolor text-white absolute top-[20px] right-[-10px] w-[16px] h-[16px] text-center text-[9px] leading-[16px] rounded-full",children:"2"})]}),(0,w.jsxs)("ul",{id:"myTable",className:"dropdown-menu block cart-item-list",children:[(0,w.jsxs)("li",{className:"cart-item items-center",children:[(0,w.jsx)(p.rU,{"aria-label":"link",to:"#",className:"font-serif close",children:" \xd7 "}),(0,w.jsx)("div",{className:"product-image",children:(0,w.jsx)(p.rU,{"aria-label":"link",to:"#",children:(0,w.jsx)("img",{src:"https://via.placeholder.com/150x191",className:"cart-thumb",alt:"cart-product",width:50,height:67})})}),(0,w.jsxs)("div",{className:"product-detail font-serif",children:[(0,w.jsx)(p.rU,{"aria-label":"link",to:"#",children:"Delica omtantur"}),(0,w.jsx)("span",{className:"item-ammount",children:"$100.00"})]})]}),(0,w.jsxs)("li",{className:"cart-item items-center",children:[(0,w.jsx)(p.rU,{"aria-label":"link",to:"#",className:"font-serif close",children:" \xd7 "}),(0,w.jsx)("div",{className:"product-image",children:(0,w.jsx)(p.rU,{"aria-label":"link",to:"#",children:(0,w.jsx)("img",{src:"https://via.placeholder.com/150x191",className:"cart-thumb",alt:"cart-product",width:50,height:67})})}),(0,w.jsxs)("div",{className:"product-detail font-serif",children:[(0,w.jsx)(p.rU,{"aria-label":"link",to:"#",children:"Gianvito rossi"}),(0,w.jsx)("span",{className:"item-ammount",children:"$99.99"})]})]}),(0,w.jsxs)("li",{className:"cart-item cart-total",children:[(0,w.jsxs)("div",{className:"font-serif mb-[15px] w-full",children:[(0,w.jsx)("span",{className:"w-[50%] inline-block text-md uppercase",children:"Subtotal:"}),(0,w.jsx)("span",{className:"w-[50%] inline-block text-right text-md font-medium",children:"$199.99"})]}),(0,w.jsx)(j.default,{to:"/shop/shopping-cart",className:"btn-fill rounded-none font-medium font-serif uppercase md:mb-[15px]",themeColor:"#232323",color:"#fff",size:"sm",title:"view cart"}),(0,w.jsx)(j.default,{to:"/shop/checkout",className:"btn-fill rounded-none font-medium font-serif mb-0 uppercase sm:mb-[15px]",themeColor:"#0038e3",color:"#fff",size:"sm",title:"checkout"})]})]})]})},A=function(e){var n=(0,i.useRef)(null),t=(0,u.TH)();return(0,i.useEffect)((function(){n.current.querySelectorAll("a").forEach((function(e){var n=e.getAttribute("href");if(e.closest(".menu-list-item")&&e.closest(".menu-list-item").classList.remove("active"),n===t.pathname){e.closest(".menu-list-item")&&e.closest(".menu-list-item").classList.add("active"),e.closest(".megamenu")&&e.closest(".menu-list-item")&&e.closest(".menu-list-item").classList.add("active"),e.closest(".accordion")&&e.closest(".accordion").querySelectorAll(".accordion-item").forEach((function(e){return e.classList.remove("active")}));var a=function(e){for(var n=[];e.parentNode&&"body"!==e.parentNode.nodeName.toLowerCase();)e=e.parentNode,n.push(e);return n}(e).filter((function(e){return e.classList.contains("accordion-item")}));a.forEach((function(e){return e.classList.add("active")}))}}))}),[t]),(0,w.jsx)(x.Z,{ref:n,className:"collapsible-menu".concat(e.theme?" ".concat(e.theme):"").concat(e.className?" ".concat(e.className):""),children:k.Z&&k.Z.map((function(e,n){return(0,w.jsxs)(x.Z.Item,{eventKey:n,children:[(0,w.jsxs)(x.Z.Header,{children:[e.link?(0,w.jsxs)(p.rU,{"aria-label":"link",className:"menu-link",to:e.link,children:[" ",e.title," "]}):(0,w.jsxs)("span",{className:"menu-link",children:[" ",e.title," "]}),(e.dropdown||e.megamenu)&&(0,w.jsx)("span",{className:"icon"})]}),(e.dropdown||e.megamenu)&&(0,w.jsxs)(x.Z.Body,{children:[e.dropdown&&(0,w.jsx)("div",{className:"single-dropdown",children:(0,w.jsx)(x.Z,{children:e.dropdown.map((function(e,n){return(0,w.jsxs)(x.Z.Item,{eventKey:n,children:[(0,w.jsxs)(x.Z.Header,{children:[e.link?(0,w.jsxs)(p.rU,{"aria-label":"link",className:"menu-link",to:e.link,children:[" ",e.title," "]}):(0,w.jsxs)("span",{className:"menu-link",children:[" ",e.title," "]}),e.dropdown&&(0,w.jsx)("span",{className:"icon"})]}),e.dropdown&&(0,w.jsx)(x.Z.Body,{children:(0,w.jsx)(x.Z,{children:e.dropdown.map((function(e,n){return(0,w.jsxs)(x.Z.Item,{eventKey:n,children:[(0,w.jsxs)(x.Z.Header,{children:[e.link?(0,w.jsxs)(p.rU,{"aria-label":"link",className:"menu-link",to:e.link,children:[" ",e.title," "]}):(0,w.jsxs)("span",{className:"menu-link",children:[" ",e.title," "]}),e.dropdown&&(0,w.jsx)("span",{className:"icon"})]}),e.dropdown&&(0,w.jsx)(x.Z.Body,{children:(0,w.jsx)("ul",{className:"menu-list",children:e.dropdown.map((function(e,n){return(0,w.jsx)("li",{className:"menu-list-item",children:e.link?(0,w.jsxs)(p.rU,{"aria-label":"link",className:"menu-link",to:e.link,children:[" ",e.title," "]}):(0,w.jsxs)("span",{className:"menu-link",children:[" ",e.title," "]})},n)}))})})]},n)}))})})]},n)}))})}),e.megamenu&&(0,w.jsx)("div",{className:"megamenu",children:(0,w.jsx)(x.Z,{children:e.megamenu.map((function(e,n){return(0,w.jsxs)(x.Z.Item,{eventKey:n,className:"".concat(e.dropdown.filter((function(e){return e.img})).length>0?"img-wrapper":""),children:[(0,w.jsxs)(x.Z.Header,{children:[(0,w.jsx)("span",{className:"menu-link",children:e.title}),e.dropdown&&(0,w.jsx)("span",{className:"icon"})]}),e.dropdown&&(0,w.jsx)(x.Z.Body,{children:(0,w.jsx)("ul",{className:"menu-list",children:e.dropdown.map((function(e,n){return(0,w.jsx)("li",{className:"menu-list-item",children:(0,w.jsxs)(p.rU,{"aria-label":"link",className:"menu-link",to:e.link,children:[e.icon&&(0,w.jsx)("i",{className:"".concat(e.icon," mr-[10px]")}),e.title]})},n)}))})})]},n)}))})})]})]},n)}))})};Z.defaultProps={topSpace:{desktop:!1}},L.defaultProps={fluid:"lg",theme:"dark",menu:"light",expand:"lg"},U.defaultProps={theme:"light",position:"right",closeBtn:!0},C.defaultProps={data:k.Z},E.defaultProps={type:"full",data:k.Z};var D=Z},91917:function(e,n){n.Z=[{title:"Home",link:"/"},{title:"About",link:"/about"},{title:"Upskill/Reskill",link:"/upskill"},{title:"Careers",link:"/careers"},{title:"Contact Us",link:"/contact"},{title:"Login",link:"/login"},{title:"Sign Up",link:"/sign-up"}]},25705:function(e,n,t){t.r(n);var a=t(1413),s=t(45987),l=t(72791),c=t(92520),r=t(80184),i=["theme","children","className"],o=function(e){var n=e.theme,t=e.children,o=e.className,d=(0,s.Z)(e,i);return(0,l.useEffect)((function(){var e=document.querySelectorAll(".smooth-scrollbar"),n=function(){e.forEach((function(e){setTimeout((function(){var n=e.querySelector(".scroll-content");null!==n&&n.clientHeight>e.clientHeight&&e.classList.add("scrollbar-appear"),null!==n&&n.clientHeight<e.clientHeight&&e.classList.remove("scrollbar-appear")}),500)}))};n(),window.addEventListener("resize",n),document.querySelectorAll(".accordion-button").forEach((function(e){e.addEventListener("click",n)}));var t=document.querySelectorAll(".navbar-nav > .nav-item");"undefined"!=typeof t&&null!=t&&t.forEach((function(e){var t=e.querySelector(".fa");"undefined"!=typeof t&&null!=t&&t.addEventListener("click",n)}))}),[]),(0,r.jsx)(c.Scrollbar,(0,a.Z)((0,a.Z)({},d),{},{className:"smooth-scrollbar ".concat(n).concat(o?" ".concat(o):""),plugins:{overscroll:{effect:"bounce"}},children:t}))};o.defaultProps={theme:"light"},n.default=(0,l.memo)(o)},62752:function(e,n,t){t.d(n,{Z:function(){return s}});var a=t(72791);function s(e,n){(0,a.useEffect)((function(){var t=function(t){e.current&&!e.current.contains(t.target)&&n(t)};return document.addEventListener("mousedown",t),function(){document.removeEventListener("mousedown",t)}}),[e,n])}}}]);
//# sourceMappingURL=8392.900ac96e.chunk.js.map