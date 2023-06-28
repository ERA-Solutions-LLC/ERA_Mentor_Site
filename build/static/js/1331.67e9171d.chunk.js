"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[1331,3739,8033,2403,8316,1409,9523],{43739:function(e,s,t){t.r(s),t.d(s,{default:function(){return m}});var a=t(1413),r=t(72791),i=t(11087),n=t(43360),l=t(80184),c=function(e){var s=e.themeColor&&e.themeColor[0],t=e.themeColor&&e.themeColor[1],r=e.color&&e.color[0],c=e.color&&e.color[1],m={"--gradient-color":"object"===typeof e.themeColor?"linear-gradient(45deg, ".concat(s,", ").concat(t,", ").concat(s,")"):e.themeColor,"--brand-color":"object"===typeof e.themeColor?"linear-gradient(to right, ".concat(s,", ").concat(t,", ").concat(s,")"):e.themeColor,"--text-color":"object"===typeof e.color?"linear-gradient(to right, ".concat(r,", ").concat(c,", ").concat(r,")"):e.color};return e.href||"submit"===e.type?(0,l.jsx)(n.Z,{as:e.href?"a":"submit"===e.type?"button":"a",type:"submit"===e.type?"submit":void 0,style:m,className:"border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""),href:e.href,onClick:e.onClick,disabled:e.disabled,variant:"secondary","aria-label":e.ariaLabel,target:e.target,children:(0,l.jsx)(o,(0,a.Z)({},e))}):(0,l.jsx)(i.rU,{style:m,target:e.target,className:"btn border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""," "),to:e.to?e.to:"#",onClick:e.onClick,"aria-label":e.ariaLabel,children:(0,l.jsx)(o,(0,a.Z)({},e))})},o=function(e){return(0,l.jsxs)(l.Fragment,{children:[e.icon&&"after"!==e.iconPosition&&(0,l.jsx)("i",{className:"".concat(e.icon," left-icon")}),e.title,e.icon&&"after"===e.iconPosition&&(0,l.jsx)("i",{className:"".concat(e.icon," right-icon")}),"btn-link-gradient"===e.theme&&(0,l.jsx)("span",{})]})};c.defaultProps={size:"lg",style:"primary"};var m=(0,r.memo)(c)},7984:function(e,s,t){t.d(s,{rs:function(){return c},sD:function(){return n},ye:function(){return l}});var a=t(81724),r=RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/),i=RegExp(/^\(?(=.*\d)(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/),n=a.Ry().shape({name:a.Z_().required("Field is required."),email:a.Z_().email("Invalid email.").required("Field is required."),phone:a.Z_().required().matches(r,"Invalid phone")}),l=a.Ry().shape({name:a.Z_().required("Field is required."),email:a.Z_().email("Invalid email.").required("Field is required.")}),c=a.Ry().shape({name:a.Z_().required("Field is required."),email:a.Z_().email("Invalid email.").required("Field is required."),terms_condition:a.O7().oneOf([!0],"Message").required()});a.Ry().shape({name:a.Z_().required("Field is required."),email:a.Z_().email("Invalid email.").required("Field is required."),phone:a.Z_().required().matches(r,"Invalid phone"),comment:a.Z_().required("Field is required.")}),a.Ry().shape({email:a.Z_().email("Invalid email.").required("Field is required."),phone:a.Z_().required().matches(r,"Invalid phone"),terms_condition:a.O7().oneOf([!0],"Message").required()}),a.Ry().shape({email:a.Z_().email("Invalid email.").required("Field is required."),password:a.Z_().required().matches(i,"Invalid password please make sure to make a password that is 6-16 characters long and contains as least 1 uppercase letter, 1 lowercase letter, 1 special character, and 1 number.")})},28033:function(e,s,t){t.r(s);var a=t(29439),r=t(72791),i=t(2469),n=t(80184),l=function(e){var s=(0,r.useState)(!0),t=(0,a.Z)(s,2),l=t[0],c=t[1];if(l)return(0,n.jsx)(i.Z,{className:"".concat(e.theme).concat(e.className?" ".concat(e.className):""),variant:e.variant,onClose:function(){return c(!1)},dismissible:e.dismissible,children:e.message})};l.defaultProps={className:"",theme:"message-box01"},s.default=(0,r.memo)(l)},51331:function(e,s,t){t.r(s);var a=t(1413),r=t(74165),i=t(15861),n=(t(72791),t(47022)),l=t(89743),c=t(2677),o=t(11087),m=t(34290),d=t(71856),u=t(92506),x=t(81724),p=t(38616),b=t(17728),h=t(28033),f=t(43739),y=t(21240),g=t(7984),j=t(38480),v=t(80184);s.default=function(){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("section",{className:"bg-darkgray py-[25px]",children:(0,v.jsx)(n.Z,{children:(0,v.jsxs)(l.Z,{className:"items-center justify-center mb-0",children:[(0,v.jsx)(c.Z,{xl:8,lg:6,children:(0,v.jsx)("h1",{className:"font-serif text-white font-medium mb-0 md:text-center text-lg",children:"Subscribe"})}),(0,v.jsx)(c.Z,{xl:4,lg:6,className:"breadcrumb justify-end text-xs font-serif md:mt-[10px] mb-0 md:justify-center",children:(0,v.jsxs)("ul",{className:"xs-text-center",children:[(0,v.jsx)("li",{children:(0,v.jsx)(o.rU,{to:"/","aria-label":"breadcrumb",className:"hover:text-white",children:"Home"})}),(0,v.jsx)("li",{children:(0,v.jsx)(o.rU,{to:"/elements/subscribe","aria-label":"breadcrumb",onClick:function(e){return e.preventDefault()},className:"hover:text-white",children:"Elements"})}),(0,v.jsx)("li",{children:"Subscribe"})]})})]})})}),(0,v.jsx)(m.m.section,(0,a.Z)((0,a.Z)({className:"py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] bg-lightgray overflow-hidden"},y.Ji),{},{children:(0,v.jsxs)(n.Z,{children:[(0,v.jsx)(l.Z,{children:(0,v.jsx)(c.Z,{className:"mb-[6%]",children:(0,v.jsx)("h6",{className:"text-darkgray font-medium font-serif mb-[25px] sm:mb-[15px] text-center",children:"Subscribe style 01"})})}),(0,v.jsx)(l.Z,{className:"justify-center",children:(0,v.jsxs)(c.Z,{xl:6,md:8,lg:7,className:"px-md-0",children:[(0,v.jsx)("h4",{className:"font-bold text-darkgray tracking-[-1px] mb-16 text-center font-serif",children:"GET LATEST UPDATE FOR OUR TRUSTED APPLICATIONS"}),(0,v.jsx)(u.J9,{initialValues:{email:""},validationSchema:x.Ry().shape({email:x.Z_().email("Invalid email.").required("Field is required.")}),onSubmit:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(s,t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setSubmitting(!0),e.next=3,(0,j.sendEmail)(s);case 3:"success"===e.sent.status&&(0,j.resetForm)(t);case 5:case"end":return e.stop()}}),e)})));return function(s,t){return e.apply(this,arguments)}}(),children:function(e){var s=e.isSubmitting,t=e.status;return(0,v.jsxs)("div",{className:"relative mb-16 xs:mb-8 subscribe-style-01",children:[(0,v.jsxs)(u.l0,{className:"relative",children:[(0,v.jsx)(b.II,{showErrorMsg:!1,type:"email",name:"email",className:"border-[1px] pl-[50px] extra-large-input border-solid border-transparent",placeholder:"Enter your email address"}),(0,v.jsxs)("button",{"aria-label":"subscribe",type:"submit",className:"text-[14px] tracking-[1px] py-[12px] px-[28px] uppercase".concat(s?" loading":""),children:[(0,v.jsx)("i",{className:"far fa-envelope"}),"Subscribe"]})]}),(0,v.jsx)(d.M,{children:t&&(0,v.jsx)(m.m.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"absolute top-[115%] left-0 w-full",children:(0,v.jsx)(h.default,{className:"mt-[15px] py-[13px] px-[20px] text-md rounded-[100px] text-center",theme:"message-box01",variant:"success",message:"Your message has been sent successfully subscribed to our email list!"})})})]})}}),(0,v.jsx)("p",{className:"text-center text-[#828282] leading-[24px] text-sm m-auto w-[70%] lg:w-[60%] md:w-3/4 xs:w-full",children:"We are committed to protecting your privacy. We will never collect information about you without your explicit consent."})]})})]})})),(0,v.jsxs)(m.m.section,(0,a.Z)((0,a.Z)({className:"py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] overflow-hidden"},y.Ji),{},{children:[(0,v.jsx)(n.Z,{children:(0,v.jsx)(l.Z,{children:(0,v.jsx)(c.Z,{className:"mb-[6%]",children:(0,v.jsx)("h6",{className:"mb-[25px] text-darkgray font-medium font-serif text-center xs:mb-[15px]",children:"Subscribe style 02"})})})}),(0,v.jsxs)(n.Z,{children:[(0,v.jsx)(l.Z,{className:"justify-center",children:(0,v.jsxs)(c.Z,{className:"text-center",lg:6,md:7,sm:12,children:[(0,v.jsx)("span",{className:"text-basecolor text-lg mb-[15px] inline-block",children:"Love to work together"}),(0,v.jsx)("h5",{className:"font-serif font-medium -tracking-[0.5px] text-darkgray inline-block mb-[60px] sm:mb-[30px] w-[99%]",children:"Are you ready to work with us? Let's grow your business."})]})}),(0,v.jsx)(l.Z,{className:"justify-center",children:(0,v.jsx)(c.Z,{md:8,children:(0,v.jsx)(u.J9,{initialValues:{email:""},validationSchema:x.Ry().shape({email:x.Z_().email("Invalid email.").required("Field is required.")}),onSubmit:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(s,t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setSubmitting(!0),e.next=3,(0,j.sendEmail)(s);case 3:"success"===e.sent.status&&(0,j.resetForm)(t);case 5:case"end":return e.stop()}}),e)})));return function(s,t){return e.apply(this,arguments)}}(),children:function(e){var s=e.isSubmitting,t=e.status;return(0,v.jsxs)("div",{className:"relative mb-16 subscribe-style-02 w-4/5 my-0 mx-auto md:w-full",children:[(0,v.jsxs)(u.l0,{className:"relative",children:[(0,v.jsx)(b.II,{showErrorMsg:!1,type:"email",name:"email",className:"border-[1px] medium-input border-solid border-transparent !pr-[175px] xs:!pr-[32px]",placeholder:"Enter your email address"}),(0,v.jsx)("button",{"aria-label":"subscribe",type:"submit",className:"text-xs py-[12px] px-[28px] uppercase".concat(s?" loading":""),children:"Start a project"})]}),(0,v.jsx)(d.M,{children:t&&(0,v.jsx)(m.m.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"absolute top-[115%] left-0 w-full",children:(0,v.jsx)(h.default,{className:"py-[5px] rounded-[100px] text-center",theme:"message-box01",variant:"success",message:"Your message has been sent successfully subscribed to our email list!"})})})]})}})})})]})]})),(0,v.jsx)(m.m.section,(0,a.Z)((0,a.Z)({className:"py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] bg-lightgray overflow-hidden"},y.Ji),{},{children:(0,v.jsxs)(n.Z,{children:[(0,v.jsx)(l.Z,{children:(0,v.jsx)(c.Z,{className:"mb-[6%]",children:(0,v.jsx)("h6",{className:"text-darkgray font-medium font-serif mb-[25px] sm:mb-[15px] text-center",children:"Subscribe style 03"})})}),(0,v.jsxs)(l.Z,{className:"justify-center",children:[(0,v.jsxs)(c.Z,{md:8,lg:7,className:"text-center",children:[(0,v.jsx)("span",{className:"block text-xmd font-serif font-medium text-basecolor mb-[20px]",children:"Love to work together"}),(0,v.jsx)("h4",{className:"font-serif font-semibold text-darkgray inline-block mb-[72px] text-center sm:mb-[33px] xs:mb-[50px]",children:"Beautifully simple handcrafted templates for your website"})]}),(0,v.jsx)(c.Z,{md:8,lg:6,children:(0,v.jsx)(u.J9,{initialValues:{email:""},validationSchema:x.Ry().shape({email:x.Z_().email("Invalid email.").required("Field is required.")}),onSubmit:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(s,t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setSubmitting(!0),e.next=3,(0,j.sendEmail)(s);case 3:"success"===e.sent.status&&(0,j.resetForm)(t);case 5:case"end":return e.stop()}}),e)})));return function(s,t){return e.apply(this,arguments)}}(),children:function(e){var s=e.isSubmitting,t=e.status;return(0,v.jsxs)("div",{className:"relative mb-16 subscribe-style-03",children:[(0,v.jsxs)(u.l0,{className:"relative",children:[(0,v.jsx)(b.II,{showErrorMsg:!1,type:"email",name:"email",className:"large-input border-[1px] border-solid border-transparent",placeholder:"Your email address"}),(0,v.jsx)("button",{"aria-label":"subscribe",type:"submit",className:"text-xs tracking-[1px] py-[12px] px-[28px] uppercase".concat(s?" loading":""),children:"Notify Me"})]}),(0,v.jsx)(d.M,{children:t&&(0,v.jsx)(m.m.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"absolute top-[115%] left-0 w-full",children:(0,v.jsx)(h.default,{className:"py-[5px] rounded-[4px]",theme:"message-box01",variant:"success",message:"Your message has been sent successfully subscribed to our email list!"})})})]})}})})]})]})})),(0,v.jsx)(m.m.section,(0,a.Z)((0,a.Z)({className:"py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] overflow-hidden"},y.Ji),{},{children:(0,v.jsxs)(n.Z,{children:[(0,v.jsx)(l.Z,{children:(0,v.jsx)(c.Z,{className:"mb-[6%]",children:(0,v.jsx)("h6",{className:"text-darkgray font-medium font-serif mb-[25px] xs:mb-[15px] text-center",children:"Subscribe style 04"})})}),(0,v.jsx)(l.Z,{className:"justify-center",children:(0,v.jsxs)(c.Z,{md:10,lg:7,className:"text-center",children:[(0,v.jsx)("span",{className:"font-serif font-medium text-basecolor text-xmd uppercase mb-[20px] inline-block sm:mb-[10px]",children:"Love to work together"}),(0,v.jsx)("h4",{className:"font-serif font-semibold text-darkgray inline-block mb-[72px] text-center sm:mb-[33px]",children:"Are you ready to work with us? Let's grow your business."})]})}),(0,v.jsx)(l.Z,{className:"justify-center",children:(0,v.jsx)(c.Z,{md:9,children:(0,v.jsx)(u.J9,{initialValues:{email:""},validationSchema:x.Ry().shape({email:x.Z_().email("Invalid email.").required("Field is required.")}),onSubmit:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(s,t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setSubmitting(!0),e.next=3,(0,j.sendEmail)(s);case 3:"success"===e.sent.status&&(0,j.resetForm)(t);case 5:case"end":return e.stop()}}),e)})));return function(s,t){return e.apply(this,arguments)}}(),children:function(e){var s=e.isSubmitting,t=e.status;return(0,v.jsxs)("div",{className:"relative mb-16 subscribe-style-04 w-4/5 my-0 mx-auto md:w-full",children:[(0,v.jsxs)(u.l0,{className:"relative",children:[(0,v.jsx)(b.II,{showErrorMsg:!1,type:"email",name:"email",className:"border-[1px] border-solid border-transparent large-input",placeholder:"Enter your email address"}),(0,v.jsx)("button",{"aria-label":"subscribe",type:"submit",className:"text-xs tracking-[1px] py-[12px] px-[28px] uppercase".concat(s?" loading":""),children:"Subscribe Now"})]}),(0,v.jsx)(d.M,{children:t&&(0,v.jsx)(m.m.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"absolute top-[115%] left-0 w-full",children:(0,v.jsx)(h.default,{className:"py-[5px] rounded-[4px] text-center",theme:"message-box01",variant:"success",message:"Your message has been sent successfully subscribed to our email list!"})})})]})}})})})]})})),(0,v.jsxs)(m.m.section,(0,a.Z)((0,a.Z)({className:"py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px] relative bg-cover bg-fixed bg-center overflow-hidden lg:bg-local",style:{backgroundImage:"url('https://via.placeholder.com/1920x677')"}},y.Ji),{},{children:[(0,v.jsx)("div",{className:"absolute top-0 left-0 h-full w-full bg-darkpurple2 opacity-80 z-[1]"}),(0,v.jsx)(n.Z,{className:"relative z-[2]",children:(0,v.jsxs)(l.Z,{className:"justify-center",children:[(0,v.jsx)(c.Z,{xl:5,lg:6,sm:8,className:"lg:text-center md:mb-[30px]",children:(0,v.jsx)("h6",{className:"font-serif font-medium text-white mb-0 text-left md:text-center",children:"Don't miss this amazing big events conference and opportunities!"})}),(0,v.jsx)(c.Z,{xl:{span:5,offset:2},lg:{span:5,offset:1},sm:9,children:(0,v.jsx)(u.J9,{initialValues:{email:""},validationSchema:x.Ry().shape({email:x.Z_().email("Invalid email.").required("Field is required.")}),onSubmit:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(s,t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setSubmitting(!0),e.next=3,(0,j.sendEmail)(s);case 3:"success"===e.sent.status&&(0,j.resetForm)(t);case 5:case"end":return e.stop()}}),e)})));return function(s,t){return e.apply(this,arguments)}}(),children:function(e){var s=e.isSubmitting,t=e.status;return(0,v.jsxs)("div",{className:"relative subscribe-style-05",children:[(0,v.jsxs)(u.l0,{className:"relative",children:[(0,v.jsx)(b.II,{showErrorMsg:!1,type:"email",name:"email",className:"border-[1px] border-solid border-transparent rounded-[4px] large-input",placeholder:"Enter your email address"}),(0,v.jsxs)("button",{"aria-label":"subscribe",type:"submit",className:"text-xs py-[12px] px-[28px] uppercase font-semibold xs:text-center".concat(s?" loading":""),children:[(0,v.jsx)("i",{className:"far fa-envelope text-neonorange text-sm leading-none mr-[10px] xs:mr-0"}),"Subscribe"]})]}),(0,v.jsx)(d.M,{children:t&&(0,v.jsx)(m.m.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"mt-[25px] absolute left-0 w-full",children:(0,v.jsx)(h.default,{className:"rounded-[4px] text-md py-[10px] px-[22px] z-10",theme:"message-box01",variant:"success",message:"Your message has been sent successfully subscribed to our email list!"})})})]})}})})]})})]})),(0,v.jsx)(m.m.section,(0,a.Z)((0,a.Z)({className:"py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]"},y.Ji),{},{children:(0,v.jsx)(n.Z,{children:(0,v.jsxs)(l.Z,{className:"justify-center",children:[(0,v.jsx)(c.Z,{md:10,className:"text-center mb-[6%]",children:(0,v.jsx)("h6",{className:"text-darkgray font-medium font-serif text-center xs:mb-[15px]",children:"Subscribe style 06"})}),(0,v.jsx)(c.Z,{className:"col-12",children:(0,v.jsx)("div",{className:"bg-gradient-to-tr from-[#ec606c] via-[#ee6757] to-[#eb7242] rounded-[5px] py-[55px] md:py-[40px]",children:(0,v.jsxs)(l.Z,{className:"justify-center items-center mx-0",children:[(0,v.jsx)(c.Z,{lg:2,className:"md:mb-[30px] pl-0 sm:mb-[20px]",children:(0,v.jsx)("h6",{className:"font-serif font-medium text-white mb-0 text-right md:text-center",children:"Get your free quote today?"})}),(0,v.jsx)(c.Z,{lg:7,md:9,className:"col-11 xs:px-0",children:(0,v.jsx)(u.J9,{initialValues:{email:""},validationSchema:x.Ry().shape({email:x.Z_().email("Invalid email.").required("Field is required.")}),onSubmit:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(s,t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,500)}));case 2:(0,j.resetForm)(t);case 3:case"end":return e.stop()}}),e)})));return function(s,t){return e.apply(this,arguments)}}(),children:function(e){var s=e.isSubmitting,t=e.status;return(0,v.jsxs)("div",{className:"relative subscribe-style-06",children:[(0,v.jsxs)(u.l0,{className:"relative",children:[(0,v.jsx)(b.II,{showErrorMsg:!1,type:"email",name:"email",labelClass:"sm:w-full pr-[30px] sm:pr-0 flex-1 sm:flex-none",className:"border-[1px] large-input border-solid border-transparent w-full",placeholder:"Enter your email address"}),(0,v.jsxs)("button",{"aria-label":"subscribe",type:"submit",className:"text-xs tracking-[1px] py-[12px] px-[28px] uppercase".concat(s?" loading":""),children:[(0,v.jsx)("i",{className:"far fa-envelope mr-[10px]"}),"get started"]})]}),(0,v.jsx)(d.M,{children:t&&(0,v.jsx)(m.m.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"absolute top-[115%] left-0 w-full",children:(0,v.jsx)(h.default,{className:"rounded-[4px] text-md py-[10px] px-[22px]",theme:"message-box01",variant:"success",message:"Your message has been sent successfully subscribed to our email list!"})})})]})}})})]})})})]})})})),(0,v.jsx)(m.m.section,(0,a.Z)((0,a.Z)({className:"bg-lightgray py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] overflow-hidden"},y.Ji),{},{children:(0,v.jsxs)(n.Z,{children:[(0,v.jsx)(l.Z,{children:(0,v.jsx)(c.Z,{className:"mb-[6%]",children:(0,v.jsx)("h6",{className:"mb-[25px] xs:mb-[15px] text-darkgray font-medium font-serif text-center",children:"Subscribe style 07"})})}),(0,v.jsxs)(l.Z,{className:"justify-center items-center flex-col",children:[(0,v.jsx)(c.Z,{md:10,lg:7,className:"text-center",children:(0,v.jsxs)("h5",{className:"font-light text-darkgray inline-block text-center mb-[46px]",children:["Are you ready to work with us? ",(0,v.jsx)("span",{className:"block font-semibold bg-gradient-to-r text-gradient from-[#556fff] via-[#e05fc4] to-[#ff798e] sm:inline",children:"Let's grow your business."})]})}),(0,v.jsx)(c.Z,{md:6,className:"subscription-from w-[45%] sm:w-full",children:(0,v.jsx)(u.J9,{initialValues:{email:""},validationSchema:x.Ry().shape({email:x.Z_().email("Invalid email.").required("Field is required.")}),onSubmit:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(s,t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setSubmitting(!0),e.next=3,(0,j.sendEmail)(s);case 3:"success"===e.sent.status&&(0,j.resetForm)(t);case 5:case"end":return e.stop()}}),e)})));return function(s,t){return e.apply(this,arguments)}}(),children:function(e){var s=e.isSubmitting,t=e.status;return(0,v.jsxs)("div",{className:"relative subscribe-style-07",children:[(0,v.jsxs)(u.l0,{className:"relative",children:[(0,v.jsx)(b.II,{showErrorMsg:!1,type:"email",name:"email",className:"border-[1px] extra-large-input border-solid border-transparent",placeholder:"Your email address"}),(0,v.jsx)("button",{"aria-label":"subscribe",type:"submit",className:"text-xs tracking-[1px] py-[12px] px-[28px] uppercase".concat(s?" loading":""),children:(0,v.jsx)("i",{className:"fa fa-arrow-right"})})]}),(0,v.jsx)(d.M,{children:t&&(0,v.jsx)(m.m.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"mt-[25px] absolute top-[115%] left-0 w-full",children:(0,v.jsx)(h.default,{className:"rounded-[4px] text-md py-[10px] px-[22px]",theme:"message-box01",variant:"success",message:"Your message has been sent successfully subscribed to our email list!"})})})]})}})})]})]})})),(0,v.jsxs)(m.m.div,(0,a.Z)((0,a.Z)({className:"relative overflow-hidden py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px] sm:px-[15px]"},y.Ji),{},{children:[(0,v.jsx)(p.VS,{className:"lg-no-parallax bg-cover cover-background absolute top-[-30px] left-0 h-[100vh] lg:h-[64vh] lg:top-[-75px] lg:!translate-y-0 md:h-[60vh] md:-top-[30px] sm:top-0 sm:h-[56vh] xs:h-[50vh] w-full",translateY:[-40,40],style:{backgroundImage:"url(https://via.placeholder.com/1920x1100)"}}),(0,v.jsx)("div",{className:"absolute top-0 left-0 w-full h-full opacity-75 bg-gradient-to-tr from-[#0039e3] via-[#5e28dd] to-[#8600d4]"}),(0,v.jsx)(n.Z,{className:"relative",children:(0,v.jsx)(l.Z,{className:"justify-center",children:(0,v.jsx)(c.Z,{xl:7,lg:8,md:10,className:"xs:px-0",children:(0,v.jsxs)("div",{className:"text-center font-serif font-medium bg-white rounded-[6px] p-28 sm:p-20 xs:p-16",children:[(0,v.jsx)("span",{className:"text-basecolor block uppercase mb-[10px]",children:"Let's get started now"}),(0,v.jsx)("h6",{className:"inline-block text-darkgray -tracking-[1px] w-[80%] mb-14 lg:w-[85%] sm:w-[55%] xs:w-full",children:"Don't miss this amazing latest news and opportunities!"}),(0,v.jsx)(u.J9,{initialValues:{email:""},validationSchema:x.Ry().shape({email:x.Z_().email("Invalid email.").required("Field is required.")}),onSubmit:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(s,t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,500)}));case 2:(0,j.resetForm)(t);case 3:case"end":return e.stop()}}),e)})));return function(s,t){return e.apply(this,arguments)}}(),children:function(e){var s=e.isSubmitting,t=e.status;return(0,v.jsxs)("div",{className:"relative subscribe-style-08",children:[(0,v.jsxs)(u.l0,{className:"relative",children:[(0,v.jsx)(b.II,{showErrorMsg:!1,type:"text",name:"name",className:"border-[1px] medium-input border-solid border-transparent font-sans",placeholder:"Your name"}),(0,v.jsx)(b.II,{showErrorMsg:!1,type:"email",name:"email",className:"border-[1px] medium-input border-solid border-transparent font-sans",placeholder:"Your email address"}),(0,v.jsx)("button",{"aria-label":"subscribe",type:"submit",className:"text-xs py-[12px] px-[28px] uppercase".concat(s?" loading":""),children:"Subscribe Newsletter"})]}),(0,v.jsx)(d.M,{children:t&&(0,v.jsx)(m.m.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"w-full absolute mt-[15px]",children:(0,v.jsx)(h.default,{className:"rounded-[4px] text-md py-[10px] px-[22px]",theme:"message-box01",variant:"success",message:"Your message has been sent successfully subscribed to our email list!"})})})]})}})]})})})})]})),(0,v.jsx)(m.m.section,(0,a.Z)((0,a.Z)({className:"py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] bg-darkgray overflow-hidden"},y.Ji),{},{children:(0,v.jsxs)(n.Z,{children:[(0,v.jsx)(l.Z,{children:(0,v.jsx)(c.Z,{className:"mb-[6%]",children:(0,v.jsx)("h6",{className:"text-white font-medium font-serif mb-[25px] sm:mb-[15px] text-center",children:"Subscribe style 09"})})}),(0,v.jsx)(l.Z,{className:"justify-center",children:(0,v.jsx)(c.Z,{md:10,lg:7,className:"text-center mb-[20px]",children:(0,v.jsx)("h4",{className:"font-serif font-semibold inline-block text-center mb-[25px] -tracking-[.5px] text-transparent bg-clip-text bg-gradient-to-r from-[#975ade] via-[#d473c0] to-[#e6686f]",children:"Subscribe to newsletter"})})}),(0,v.jsx)(l.Z,{className:"justify-center",children:(0,v.jsx)(c.Z,{md:6,children:(0,v.jsx)(u.J9,{initialValues:{email:""},validationSchema:x.Ry().shape({email:x.Z_().email("Invalid email.").required("Field is required.")}),onSubmit:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(s,t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setSubmitting(!0),e.next=3,(0,j.sendEmail)(s);case 3:"success"===e.sent.status&&(0,j.resetForm)(t);case 5:case"end":return e.stop()}}),e)})));return function(s,t){return e.apply(this,arguments)}}(),children:function(e){var s=e.isSubmitting,t=e.status;return(0,v.jsxs)("div",{className:"relative mb-16 subscribe-style-09 my-0 mx-auto",children:[(0,v.jsxs)(u.l0,{className:"relative",children:[(0,v.jsx)(b.II,{showErrorMsg:!1,type:"email",name:"email",className:"border-[1px] border-solid border-transparent large-input",placeholder:"Enter your email address"}),(0,v.jsx)("button",{"aria-label":"subscribe",type:"submit",className:"text-lg tracking-[1px] py-[12px] px-[28px] btn-gradient uppercase".concat(s?" loading":""),children:(0,v.jsx)("i",{className:"far fa-envelope m-0"})})]}),(0,v.jsx)(d.M,{children:t&&(0,v.jsx)(m.m.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"absolute top-[115%] left-0 w-full",children:(0,v.jsx)(h.default,{className:"py-[5px] rounded-[4px]",theme:"message-box01",variant:"success",message:"Your message has been sent successfully subscribed to our email list!"})})})]})}})})})]})})),(0,v.jsx)("section",{className:"py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] bg-cover bg-no-repeat overflow-hidden relative bg-center",style:{backgroundImage:"url(https://via.placeholder.com/1920x745)"},children:(0,v.jsx)(n.Z,{children:(0,v.jsx)(l.Z,{className:"m-0 justify-center",children:(0,v.jsx)(c.Z,{xl:10,lg:11,className:"col-12 relative bg-white overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.1)]",children:(0,v.jsxs)(m.m.div,(0,a.Z)((0,a.Z)({className:"row"},y.Ji),{},{children:[(0,v.jsx)(c.Z,{md:6,className:"col-12 bg-no-repeat bg-cover overflow-hidden relative bg-center sm:h-[350px]",style:{backgroundImage:"url(https://via.placeholder.com/800x838)"}}),(0,v.jsxs)(c.Z,{md:6,className:"col-12 p-24 lg:p-20 md:p-12 sm:20 xs:p-14",children:[(0,v.jsx)("h5",{className:"font-serif font-bold text-[#262b35] uppercase tracking-[-.5px] mb-[20px]",children:"GET BOOK YOUR SPA APPOINTMENT"}),(0,v.jsx)("p",{className:"w-[90%] lg:w-full mb-[35px]",children:"Lorem ipsum is simply dummy text of the printing and typesetting industry"}),(0,v.jsx)(u.J9,{initialValues:{name:"",email:""},validationSchema:g.ye,onSubmit:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(s,t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,500)}));case 2:(0,j.resetForm)(t);case 3:case"end":return e.stop()}}),e)})));return function(s,t){return e.apply(this,arguments)}}(),children:function(e){var s=e.isSubmitting,t=e.status;return(0,v.jsxs)(u.l0,{children:[(0,v.jsx)(b.II,{showErrorMsg:!1,type:"text",name:"name",labelclass:"mb-[25px]",className:"rounded-[5px] py-[15px] px-[20px] border-[1px] border-transparent w-full bg-lightgray mb-[20px]",placeholder:"Your name"}),(0,v.jsx)(b.II,{showErrorMsg:!1,type:"email",name:"email",labelclass:"mb-[30px]",className:"rounded-[5px] py-[15px] px-[20px] border-[1px] border-transparent w-full bg-lightgray mb-[20px]",placeholder:"Your email address"}),(0,v.jsx)(f.default,{ariaLabel:"link for subscribe",type:"submit",className:"text-sm leading-none font-serif font-medium rounded-[4px] w-full uppercase".concat(s?" loading":""),themeColor:["#fd7f87","#f7aa80"],color:"#fff",size:"lg",title:"Get started now"}),(0,v.jsx)(d.M,{children:t&&(0,v.jsx)(m.m.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,v.jsx)(h.default,{className:"mt-[20px] mb-0 text-md leading-[22px] py-[10px] relative",theme:"message-box01",variant:"success",message:"Your message has been sent successfully subscribed to our email list!"})})})]})}})]})]}))})})})})]})}},28633:function(e,s,t){t.d(s,{Z:function(){return r}});var a=t(72791);function r(){return(0,a.useState)(null)}},79392:function(e,s,t){t.d(s,{Z:function(){return i}});var a=t(72791),r=t(39007);function i(e,s,t,i){void 0===i&&(i=!1);var n=(0,r.Z)(t);(0,a.useEffect)((function(){var t="function"===typeof e?e():e;return t.addEventListener(s,n,i),function(){return t.removeEventListener(s,n,i)}}),[e])}},16445:function(e,s,t){t.d(s,{Z:function(){return m}});var a=t(29439),r=t(72791),i=(t(28633),t(47904),t(39007));t(79392);t(55746),t(52803);t(49815),new WeakMap;var n=t(15341),l=t(80184),c=["onKeyDown"];var o=r.forwardRef((function(e,s){var t,r=e.onKeyDown,o=function(e,s){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],s.indexOf(t)>=0||(r[t]=e[t]);return r}(e,c),m=(0,n.FT)(Object.assign({tagName:"a"},o)),d=(0,a.Z)(m,1)[0],u=(0,i.Z)((function(e){d.onKeyDown(e),null==r||r(e)}));return(t=o.href)&&"#"!==t.trim()&&"button"!==o.role?(0,l.jsx)("a",Object.assign({ref:s},o,{onKeyDown:r})):(0,l.jsx)("a",Object.assign({ref:s},o,d,{onKeyDown:u}))}));o.displayName="Anchor";var m=o},15341:function(e,s,t){t.d(s,{FT:function(){return l}});var a=t(29439),r=t(72791),i=t(80184),n=["as","disabled"];function l(e){var s=e.tagName,t=e.disabled,a=e.href,r=e.target,i=e.rel,n=e.role,l=e.onClick,c=e.tabIndex,o=void 0===c?0:c,m=e.type;s||(s=null!=a||null!=r||null!=i?"a":"button");var d={tagName:s};if("button"===s)return[{type:m||"button",disabled:t},d];var u=function(e){(t||"a"===s&&function(e){return!e||"#"===e.trim()}(a))&&e.preventDefault(),t?e.stopPropagation():null==l||l(e)};return"a"===s&&(a||(a="#"),t&&(a=void 0)),[{role:null!=n?n:"button",disabled:void 0,tabIndex:t?void 0:o,href:a,target:"a"===s?r:void 0,"aria-disabled":t||void 0,rel:"a"===s?i:void 0,onClick:u,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),u(e))}},d]}var c=r.forwardRef((function(e,s){var t=e.as,r=e.disabled,c=function(e,s){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],s.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n),o=l(Object.assign({tagName:t,disabled:r},c)),m=(0,a.Z)(o,2),d=m[0],u=m[1].tagName;return(0,i.jsx)(u,Object.assign({},c,d,{ref:s}))}));c.displayName="Button",s.ZP=c},2469:function(e,s,t){var a=t(1413),r=t(45987),i=t(81694),n=t.n(i),l=t(72791),c=t(49807),o=t(39007),m=t(16445),d=t(10162),u=t(72709),x=t(80473),p=t(27472),b=t(66543),h=t(80184),f=["bsPrefix","show","closeLabel","closeVariant","className","children","variant","onClose","dismissible","transition"],y=(0,p.Z)("h4");y.displayName="DivStyledAsH4";var g=(0,b.Z)("alert-heading",{Component:y}),j=(0,b.Z)("alert-link",{Component:m.Z}),v=l.forwardRef((function(e,s){var t=(0,c.Ch)(e,{show:"onClose"}),i=t.bsPrefix,l=t.show,m=void 0===l||l,p=t.closeLabel,b=void 0===p?"Close alert":p,y=t.closeVariant,g=t.className,j=t.children,v=t.variant,N=void 0===v?"primary":v,Z=t.onClose,w=t.dismissible,k=t.transition,S=void 0===k?u.Z:k,I=(0,r.Z)(t,f),q=(0,d.vE)(i,"alert"),E=(0,o.Z)((function(e){Z&&Z(!1,e)})),F=!0===S?u.Z:S,C=(0,h.jsxs)("div",(0,a.Z)((0,a.Z)({role:"alert"},F?void 0:I),{},{ref:s,className:n()(g,q,N&&"".concat(q,"-").concat(N),w&&"".concat(q,"-dismissible")),children:[w&&(0,h.jsx)(x.Z,{onClick:E,"aria-label":b,variant:y}),j]}));return F?(0,h.jsx)(F,(0,a.Z)((0,a.Z)({unmountOnExit:!0},I),{},{ref:void 0,in:m,children:C})):m?C:null}));v.displayName="Alert",s.Z=Object.assign(v,{Link:j,Heading:g})},43360:function(e,s,t){var a=t(1413),r=t(29439),i=t(45987),n=t(81694),l=t.n(n),c=t(72791),o=t(15341),m=t(10162),d=t(80184),u=["as","bsPrefix","variant","size","active","disabled","className"],x=c.forwardRef((function(e,s){var t=e.as,n=e.bsPrefix,c=e.variant,x=void 0===c?"primary":c,p=e.size,b=e.active,h=void 0!==b&&b,f=e.disabled,y=void 0!==f&&f,g=e.className,j=(0,i.Z)(e,u),v=(0,m.vE)(n,"btn"),N=(0,o.FT)((0,a.Z)({tagName:t,disabled:y},j)),Z=(0,r.Z)(N,2),w=Z[0],k=Z[1].tagName;return(0,d.jsx)(k,(0,a.Z)((0,a.Z)((0,a.Z)({},w),j),{},{ref:s,disabled:y,className:l()(g,v,h&&"active",x&&"".concat(v,"-").concat(x),p&&"".concat(v,"-").concat(p),j.href&&y&&"disabled")}))}));x.displayName="Button",s.Z=x}}]);
//# sourceMappingURL=1331.67e9171d.chunk.js.map