import React, { lazy } from 'react'

// Libraries
import { Link } from 'react-router-dom';
import { Col, Container, Navbar, Row, Tab, Tabs } from "react-bootstrap";
import * as Yup from 'yup';
import { AnimatePresence, m } from 'framer-motion';
import { Form, Formik } from 'formik';

// Functions
import { fadeIn, fadeInLeft, fadeInRight, zoomIn } from '../../../Functions/GlobalAnimations';

// Components
import { resetForm, sendEmail } from "../../../Functions/Utilities";
import { Input } from '../../../Components/Form/Form'
import FooterMenu, { Footer } from '../../../Components/Footers/Footer';
import InViewPort from '../../../Components/InViewPort';

// Data
import FooterData from '../../../Components/Footers/FooterData';
import { pricingTable03MonthData, pricingTable03YearData } from "../../../Components/PricingTable/PricingTableData";
import { IconWithTextData_06 } from "../../../Components/IconWithText/IconWithTextData";
import { blogData } from "../../../Components/Blogs/BlogData";

// Import Images
import ITimg2 from "../../../Assets/img/ITimg2.jpg"
import ITimg4 from "../../../Assets/img/ITimg4.jpg"
import ITimg7 from "../../../Assets/img/ITimg7.jpg"
import ITimg8 from "../../../Assets/img/ITimg8.jpg"
import ITimg9 from "../../../Assets/img/ITimg9.jpg"
import CorporatePeople from "../../../Assets/img/corporate.png"

import ERALogo from "../../../Assets/img/era-logo-transparent.png"


const IconWithText = lazy(() => import('../../../Components/IconWithText/IconWithText'))
const HamburgerMenu = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({ default: module.HamburgerMenu })))
const Header = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({ default: module.Header })))
const HeaderNav = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({ default: module.HeaderNav })))
const Menu = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({ default: module.Menu })))
const SearchBar = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({ default: module.SearchBar })))

const Buttons = lazy(() => import('../../../Components/Button/Buttons'))
const InteractiveBanners02 = lazy(() => import('../../../Components/InteractiveBanners/InteractiveBanners02'))
const ProcessStep = lazy(() => import('../../../Components/ProcessStep/ProcessStep'))
const Overlap = lazy(() => import('../../../Components/Overlap/Overlap'))
const PricingTable03 = lazy(() => import('../../../Components/PricingTable/PricingTable03'))
const ReactCustomScrollbar = lazy(() => import("../../../Components/ReactCustomScrollbar"))
const BlogMasonry = lazy(() => import('../../../Components/Blogs/BlogMasonry'))
const MessageBox = lazy(() => import('../../../Components/MessageBox/MessageBox'))
const SocialIcons = lazy(() => import("../../../Components/SocialIcon/SocialIcons"))
const SideButtons = lazy(() => import("../../../Components/SideButtons"))
const StaticInstagram = lazy(() => import('../../../Components/Instagram/StaticInstagram'))
const TiltBox = lazy(() => import('../../../Components/FancyText/FancyText').then(module => ({ default: module.TiltBox })))
const StartupPageBannerSlider = lazy(() => import('./StartupBanner'))
const ERABackgroundVid = lazy(() => import('./ERABackgroundVid'))


// Filter the blog data category wise
const blogMasonryData = blogData.filter((item) => item.blogType === "masonry").filter(item => item.category.includes("startup"));

const iconWithTextData = [
  {
    icon: "line-icon-Cursor-Click2 text-[#27ae60]",
    title: "We Empower Business To Build A Workforce That Delivers Exceptional Results",
    content: "Providing platform opportunities",
  },
  {
    icon: "line-icon-Bakelite text-[#27ae60]",
    title: "Building a Strong workforce for Your Business by Offering Cost-Effective Solutions",
    content: "Advanced technology that simplifies hiring ensures successful hires",
  },
  {
    icon: "line-icon-Boy text-[#27ae60]",
    title: "We Offer Business A Range of Human Resource Solutions To Help Them Find And Hire Top Military Talent",
    content: "Committed to providing top-notch leads and employees",
  },
]

const ProcessStepData = [
  {
    title: "Building Your Companies Workforce",
    content: "Building functional teams to meet your requirements and grow your company.",
  },
  {
    title: "Promoting the Right Employees",
    content: "Recognizing talent.  Creating a loyal atmosphere for employees to succeed.",
  },
  {
    title: "Fostering Retention of Employees",
    content: "Keeping Employees that will help the business succeed.",
  }
]

const SocialIconsData = [
  {
    color: "#3b5998",
    link: "https://www.facebook.com/",
    icon: "fab fa-facebook-f"
  },
  {
    color: "#ea4c89",
    link: "https://dribbble.com/",
    icon: "fab fa-dribbble"
  },
  {
    color: "#00aced",
    link: "https://twitter.com/",
    icon: "fab fa-twitter"
  },
  {
    color: "#fe1f49",
    link: "https://www.instagram.com/",
    icon: "fab fa-instagram"
  },
  {
    color: "#0077b5",
    link: "https://www.linkedin.com/",
    icon: "fab fa-linkedin-in"
  },
]

// const InteractiveBannersData = [
//   {
//     subtitle: "BMW",
//     title: "Bundle ",
//     img: BMWLogo,
//     btnTitle: "View information",
//     btnLink: "/page/what-we-offer"
//   },
//   {
//     subtitle: "Kawasaki",
//     title: "We are delivering beautiful products",
//     img: KawasakiLogo,
//     btnTitle: "View information",
//     btnLink: "/page/what-we-offer"
//   },
//   {
//     subtitle: "Triumph",
//     title: "True responsiveness modern responsive",
//     img: TriumphLogo,
//     btnTitle: "View information",
//     btnLink: "/page/what-we-offer"
//   },
//   {
//     subtitle: "Harley Davidson",
//     title: HarleyDLogo,
//     img: "https://via.placeholder.com/915x716",
//     btnTitle: "View information",
//     btnLink: "/page/what-we-offer"
//   },
// ]

const Footer_Data = [FooterData[0], FooterData[1], FooterData[4], FooterData[3]]

const HomeStartupPage = (props) => {
  return (
    <div style={props.style}>
      {/* Header Start */}
      {/* Header Start */}
      <Header topSpace={{ md: true }} type="reverse-scroll">
        <HeaderNav theme="light" expand="lg" className="py-[0px] border-b !border-b-[#fff] lg:px-[15px] md:px-0" containerClass="sm:px-0">
          <Col className="col-auto col-sm-6 col-lg-2 me-auto ps-lg-0">
            <Link aria-label="header logo" className="flex items-center" to="/">
              <Navbar.Brand className="inline-block p-0 m-0">
                <img className="default-logo" width="111" height="36" loading="lazy" src={ERALogo}  alt='logo' />
                <img className="alt-logo" width="111" height="36" loading="lazy" src={ERALogo} alt='logo' />
                <img className="mobile-logo" width="111" height="36" loading="lazy" src={ERALogo} alt='logo' />
              </Navbar.Brand>
            </Link>
          </Col>
          <div className="col-auto hidden order-last md:block">
            <Navbar.Toggle className="md:ml-[10px] sm:ml-0">
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
            </Navbar.Toggle>
          </div>
          <Navbar.Collapse className="col-auto px-0 justify-end">
            <Menu {...props} />
          </Navbar.Collapse>
          <Col className="col-auto text-right pe-0">
            <SearchBar className="pr-0 xs:pl-[15px]" />
            {/*<HeaderLanguage className="xs:pl-[15px]" />
            <HeaderCart className="xs:pl-[15px]" style={{ "--base-color": "#0038e3" }} />*/}
          </Col>
        </HeaderNav>
      </Header>
      {/* Header End */}

      <SideButtons />

      {/* Section Start */}
      {/*<StartupPageBannerSlider /> */}
      <ERABackgroundVid />
      {/* Section End */}

      {/* Section Start */}
      <section className="bg-cover bg-center pb-[200px] lg:pb-[160px] md:py-[110px] sm:py-[50px] startup-iconwithtext" style={{ backgroundColor: "lightgray" }}>
        <Container>
          <div className="mb-[105px] md:mb-[70px] sm:mb-[50px]">
            <Overlap className="md:mt-0">
              <Row className="justify-center">
                <Col xs={12} sm={9} lg={12} md={12}>
                  <IconWithText grid="row-cols-1 row-cols-lg-3 row-cols-md-2 justify-center gap-y-10 z-10 relative" className="rounded-[4px] flex" theme="icon-with-text-04" data={iconWithTextData} />
                </Col>
              </Row>
            </Overlap>
          </div>
          <Row className="items-end overflow-hidden">
            <m.div className="col-12 col-lg-3 col-md-6 order-1 text-right md:mb-[50px] md:text-center" {...fadeInRight}>
              <div className="text-[70px] text-erablue font-serif leading-[70px] tracking-[-3px] font-semibold">10+</div>
              <span className="font-serif text-erablue font-medium uppercase tracking-[2px] block mb-[15px] sm:mb-[5px]">Training Programs</span>
              <p className="w-[90%] inline-block sm:w-[60%] xs:w-full"></p>
            </m.div>
            <m.div className="col col-lg-6 order-lg-2 order-3 z-0 py-[10px]" {...{ ...fadeIn, transition: { duration: 0.6 } }}>
              <TiltBox>
                <h1
                  className="title cover-background inline-block font-serif mb-0 uppercase bg-erablue font-semibold tracking-[-10px] text-[300px] lg:text-[300px] leading-[260px] xs:text-[160px] xs:leading-[150px]"
                  style={{ backgroundColor: "#3975f6" }}>
                  20
                </h1>
                <span className="font-serif text-xlg text-erablue tracking-[4px] font-semibold uppercase block xs:text-md">Years of experience</span>
              </TiltBox>
            </m.div>
            <m.div className="col-12 col-lg-3 col-md-6 order-2 md:mb-[50px] md:text-center" {...fadeInLeft}>
              <div className="text-[70px] text-erablue font-serif leading-[70px] tracking-[-3px] font-semibold">20+</div>
              <span className="font-serif text-erablue font-medium uppercase tracking-[2px] block mb-[15px] sm:mb-[5px]">Highly skilled employees</span>
              <p className="w-[90%] inline-block sm:w-[60%] xs:w-full"></p>
            </m.div>
          </Row>
        </Container>
      </section>
      {/* Section End */}

      {/* Lazy Load HTML */}
      <InViewPort>
        {/* Section Start */}
        {/* <section className="sm:pt-[50px] mb-[130px] md:mb-[50px] sm:mb-0 inline-block w-full">
          <Overlap>
            <m.img
              {...{ ...zoomIn, transition: { duration: .8 } }}
              className="mx-auto border-[10px] rounded-full p-0 shadow-black w-[170px] h-[170px] border-white box-shadow-large" src={ITimg4} alt="startup" />
          </Overlap>
        </section> */}
        {/* Section End */}

        {/* Section Start */}
        <section className="mt-5 pb-[130px] lg:pb-[90px] md:pb-[75px] sm:py-[50px] overflow-hidden">
          <Container>
            <m.div className="row justify-center" {...fadeIn}>
              <Col lg={5} sm={9} className="md:text-center md:mb-[40px] sm:mb[15px] xs:mb-[20px]">
                <h2 className="heading-5 font-serif leading-[3rem] text-darkgray font-semibold w-[85%] lg:w-full">We provide qualified veterans for hire and offer training programs to assist transitioning military members</h2>
              </Col>
              <Col lg={{ span: 6, offset: 1 }}>
                <Row sm={2} xs={1} className="gap-y-10">
                  <Col className="xs:text-center">
                    <span className="font-serif font-medium mb-[10px] block text-darkgray xs:mb-[5px]">Hiring</span>
                    <p className="w-[85%] lg:w-full xs:w-[75%] sm:mx-auto">Placement of highly trained veterans.  Let us help you grow your business with qualified and trained personel.</p>
                  </Col>
                  <Col className="xs:text-center">
                    <div className="">
                      <span className="font-serif font-medium mb-[10px] block text-darkgray xs:mb-[5px]">Training</span>
                      <p className="w-[85%] lg:w-full xs:w-[75%] sm:mx-auto">Online courses and certifications keeping up with the latest technologies and practices.</p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </m.div>
          {/* COMMENTED OUT FOR NOW <Row>
              <m.div className="col mt-32 w-full md:mt-24 home-startup-interactivebanner" {...fadeIn}>
                <InteractiveBanners02
                  grid="opacity-100"
                  carousalOption={{
                    slidesPerView: 1,
                    spaceBetween: 30,
                    loop: true,
                    keyboard: { enabled: true, onlyInViewport: true },
                    autoplay: { delay: 3000, disableOnInteraction: false },
                    breakpoints: { 992: { slidesPerView: 4 }, 768: { slidesPerView: 2 } }
                  }}
                  data={InteractiveBannersData}
                />
              </m.div>
                </Row> */}
          </Container>
        </section>
        {/* Section End */}

        {/* Section Start */}
        {/* COMMENTED OUT NO NEED FOR THIS SECTION <section className="bg-lightgray py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px] text-center">
          <Container>
            <m.div className="text-center justify-center row" {...fadeIn}>
              <span className="font-serif text-xmd text-basecolor block mb-[20px] font-medium sm:m-[10px]"></span>
              <h2 className="heading-5 font-serif w-[65%] text-[2.3rem] mb-[95px] font-semibold text-darkgray inline-block md:w-[80%] md:mb-[50px] xs:w-full">Our Offerings </h2>
            </m.div>
            <Row className="justify-center">
              <Col lg={12} sm={8} xs={12} md={12}>
                <IconWithText grid="row-cols-1 row-cols-lg-3 row-cols-md-2 row-col-sm-8 justify-center gap-y-10" theme="icon-with-text-06" data={IconWithTextData_06} animation={fadeIn} />
              </Col>
            </Row>
            <m.div className="row mt-24 inline-block" {...{ ...fadeIn, transition: { delay: 1 } }}>
              <Buttons aria-label="our-services-page" to="/page/our-services/" className="btn-fill shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-[4px] text-xs tracking-[1px] font-medium font-serif uppercase btn-shadow text-[15px] md:mb-[15px]" size="md" themeColor="#fff" color="#000" title="see all services" />
            </m.div>
          </Container>
              </section> */}
        {/* Section End */}

        {/* Section Start */}
        <section className="py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px] overflow-hidden startup-processstep">
          <Container>
            <Row className="items-center justify-center">
              <Col xl={5} lg={6} md={10}>
                <span className="font-serif text-xmd font-medium text-erablue inline-block mb-[20px] sm:mb-[10px]">Business process</span>
                <h2 className="heading-5 font-serif font-semibold text-darkgray block -tracking-[.5px] mb-20 w-[85%] lg:mb-[80px] md:mb-12 md:w-[80%] sm:w-full">Understanding How We Work</h2>
                <ProcessStep grid="row-cols-1" theme='process-step-style-02' data={ProcessStepData} animation={fadeIn} />
              </Col>
              <m.div className="offset-xl-1 col-lg-6 md:mt-[50px]" {...fadeInLeft}>
                <div className="-mr-[30vw] relative md:mr-0" >
                  <img src={CorporatePeople} width={1109} height={638} className="overflow-hidden rounded-md" alt=""  />
                </div>
              </m.div>
            </Row>
          </Container>
        </section>
        {/* Section End */}

        {/* Section Start */}
       {/* COMMENTED OUT NO NEED FOR PRICING <section className="pb-[105px] pt-[40px] lg:pb-[90px] md:pb-[75px] md:pt-0 sm:py-[50px] text-center">
          <Container>
            <Row className="justify-center">
              <Col xl={5} lg={6} sm={7}>
                <span className="font-serif font-medium text-basecolor text-xmd block mb-[20px] sm:mb-[10px]">Simple pricing packages</span>
                <h2 className="heading-5 font-serif text-darkgray text-center inline-block font-semibold mb-28 tracking-[-1px] md:mb-16">Choose one of our plans get access to plugins for free</h2>
              </Col>
            </Row>
            <Container fluid className="switch-tab">
              <Tabs defaultActiveKey="monthly">
                <Tab eventKey="monthly" title="MONTHLY" className="mr-[-2px]">
                  <Container fluid>
                    <Row className="justify-center">
                      <Col className="col-12 col-xl-10 col-lg-11 tab-style-04">
                        <PricingTable03 grid="row row-cols-1 gap-y-10 row-cols-md-3 items-center" theme="pricing-table-style-03" className="pb-[15px]" data={pricingTable03MonthData} />
                      </Col>
                    </Row>
                  </Container>
                </Tab>
                <Tab eventKey="yearly" title="YEARLY">
                  <Container fluid>
                    <Row className="justify-center">
                      <Col className="col-12 col-xl-10 col-lg-11 tab-style-04">
                        <PricingTable03 grid="row row-cols-1 row-cols-md-3 gap-y-10 items-center" theme="pricing-table-style-03" className="pb-[15px]" data={pricingTable03YearData} />
                      </Col>
                    </Row>
                  </Container>
                </Tab>
              </Tabs>
            </Container>
          </Container>
              </section> */}
        {/* Section End */}

        {/* Section Start */}
        {/* COMMENTED OUT NO NEED FOR BLOGS <section className="py-32 p-[130px] bg-lightgray lg:px-[2%] lg:py-[95px] md:py-[75px] sm:py-[50px] sm:px-0 xs:px-0">
          <Container>
            <Row className="justify-center">
              <Col lg={4} sm={6} className="text-center mb-12 md:mb-8">
                <span className="font-serif font-medium text-basecolor text-xmd block mb-[20px] sm:mb-[10px]">Latest blogs</span>
                <h2 className="heading-5 font-serif font-semibold text-darkgray inline-block tracking-[-1px]">Attractive articles updated daily basis</h2>
              </Col>
            </Row>
          </Container>
          <Container fluid="xs" className="mx-auto">
            <BlogMasonry pagination={false} filter={false} grid="grid grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-double-extra-large" data={blogMasonryData} />
          </Container>
            </section> */}
        {/* Section End */}

        {/* Section Start */}
        <m.section className="py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px] cover-background overflow-visible" style={{ backgroundImage: "url(/assets/img/webp/home-startup-footer-top-bg.webp)" }} {...fadeIn}>
          <Container>
            <Row className="justify-center">
              <Col md={10} lg={7} className="text-center">
                <span className="font-serif font-medium text-darkgray text-xmd mb-[20px] inline-block sm:mb-[10px]">Love to work together</span>
                <h2 className="heading-4 font-serif font-semibold text-darkgray inline-block text-center mb-[65px] xs:mb-[30px]">Are you ready to work with us? Let's grow your business.</h2>
                <Formik
                  initialValues={{ email: '' }}
                  validationSchema={Yup.object().shape({ email: Yup.string().email("Invalid email.").required("Field is required."), })}
                  onSubmit={async (values, actions) => {
                    actions.setSubmitting(true)
                    const response = await sendEmail(values)
                    response.status === "success" && resetForm(actions)
                  }}
                >
                  {({ isSubmitting, status }) => (
                    <div className="relative subscribe-style-04 w-[93%] mx-auto xs:w-full">
                      <Form className="relative">
                        <Input showErrorMsg={false} type="email" name="email" className="border-[1px] border-solid border-transparent large-input xs:mb-[60px] pr-[190px]" placeholder="Enter your email address" />
                        <button aria-label="submit" type="submit" className={`text-xs tracking-[1px] py-[12px] px-[28px] xs:!block uppercase${isSubmitting ? " loading" : ""}`}>Subscribe Now</button>
                      </Form>
                      <AnimatePresence>
                        {status && <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="font-serif absolute top-[115%] left-0 w-full"><MessageBox className="py-[5px] rounded-[4px] z-[2]" theme="message-box01" variant="success" message="Your message has been sent successfully subscribed to our email list!" /></m.div>}
                      </AnimatePresence>
                    </div>
                  )}
                </Formik>
              </Col>
            </Row>
          </Container>
        </m.section>
        {/* Section End */}

        {/* Footer Start */}
        <Footer className="startup-footer bg-no-repeat bg-right" theme="light" style={{ backgroundImage: "url(/assets/img/webp/home-startup-footer-down-bg.webp)" }}>
          {/*<Container fluid className="xs:opacity-0 xs:hidden">
            <Row>
              <Col className="h-[65px] lg:h-[30px] bg-top bg-no-repeat" style={{ backgroundImage: "url(/assets/img/webp/home-startup-footer-shadow.webp)" }}>
              </Col>
            </Row>
          </Container>
          <div className="py-[4%] lg:py-[7%] md:py-[50px]">
            <Container>
              <Row md={4} className="justify-center gap-y-[25px]">
                <FooterMenu data={Footer_Data} md={3} sm={6} className="xl:px-[15px]" titleClass="capitalize text-dark" />
              </Row>
            </Container>
          </div>
          <div className="pt-[1%] pb-[6%] border-t border-[#ffffff1a]">
            <Container>
              <Row>
                <Link to="/" className="col-sm-4 col-12 sm:mb-[20px] flex justify-start xs:justify-center">
                  <img src="/assets/img/webp/logo-green-dark.webp" alt="logo" width="111" height="36" />
                </Link>
                <p className="col-sm-8 col-12 flex justify-end items-center sm:mb-[20px] xs:text-center xs:justify-center mb-0">© {new Date().getFullYear()} Litho is Proudly Powered by&nbsp;<a aria-label="ThemeZaa link" className="text-darkgray font-sans underline underline-offset-4 font-medium text-base inline-block hover:text-basecolor" href="https://www.themezaa.com/" target="_blank" rel="noreferrer">ThemeZaa</a></p>
                  </Row>
            </Container>
          </div>*/}
          {/* <Container fluid className="xs:opacity-0 xs:hidden">
            <Row>
            <h2 className="heading-4 font-serif font-semibold text-darkgray inline-block text-center mb-[65px] xs:mb-[30px]">Our Partners</h2>
              <m.div className="col mt-32 w-full md:mt-24 home-startup-interactivebanner" {...fadeIn}>
                <InteractiveBanners02
                  grid="opacity-100"
                  carousalOption={{
                    slidesPerView: 1,
                    spaceBetween: 30,
                    loop: true,
                    keyboard: { enabled: true, onlyInViewport: true },
                    autoplay: { delay: 3000, disableOnInteraction: false },
                    breakpoints: { 992: { slidesPerView: 4 }, 768: { slidesPerView: 2 } }
                  }}
                  data={InteractiveBannersData}
                />
              </m.div>
                </Row> 
          </Container> */}
        </Footer>
        {/* Footer End */}
      </InViewPort>
    </div>
  )
}

export default HomeStartupPage