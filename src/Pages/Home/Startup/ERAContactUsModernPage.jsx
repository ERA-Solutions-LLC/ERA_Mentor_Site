import React, { useRef } from 'react'

// Libraries
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Keyboard } from "swiper";
import { Formik, Form } from 'formik';
import { AnimatePresence, m } from 'framer-motion';

// Components
import { Header, HeaderCart, HeaderLanguage, HeaderNav, Menu, SearchBar } from "../../../Components/Header/Header";
import Buttons from '../../../Components/Button/Buttons'
import { ContactFormStyle02Schema } from '../../../Components/Form/FormSchema';
import { Input, TextArea } from '../../../Components/Form/Form'
import MessageBox from '../../../Components/MessageBox/MessageBox';
import GoogleMap from '../../../Components/GoogleMap/GoogleMap';
import FooterStyle01 from '../../../Components/Footers/FooterStyle01';
import { fadeIn } from "../../../Functions/GlobalAnimations";
import ReCAPTCHA from 'react-google-recaptcha';
import { sendEmail, resetForm } from "../../../Functions/Utilities";
import SideButtons from "../../../Components/SideButtons";

// Era Img imports
import ITimg8 from "../../../Assets/img/ITimg8.jpg"
import ERALogo from "../../../Assets/img/era-logo-transparent.png"

// Data
const SwiperImgData = [
  {
    img: "https://via.placeholder.com/1920x730"
  },
  {
    img: "https://via.placeholder.com/1920x730"
  },
  {
    img: "https://via.placeholder.com/1920x730"
  }
]

const ContactUsModernPage = (props) => {
  const form = useRef(null)
  const recaptcha = useRef()

  return (
    <div style={props.style}>
      {/* Header Start */}
      <Header topSpace={{ md: true }} type="reverse-scroll">
        <HeaderNav theme="light" expand="lg" className="py-[0px] border-b !border-b-[#0000001a] lg:px-[15px] md:px-0" containerClass="sm:px-0">
          <Col className="col-auto col-sm-6 col-lg-2 me-auto ps-lg-0">
            <Link aria-label="header logo" className="flex items-center" to="/">
              <Navbar.Brand className="inline-block p-0 m-0">
                <img className="default-logo" width="111" height="36" loading="lazy" src={ERALogo} data-rjs='/assets/img/webp/logo-black@2x.webp' alt='logo' />
                <img className="alt-logo" width="111" height="36" loading="lazy" src={ERALogo}  data-rjs='/assets/img/webp/logo-fast-blue-black@2x.webp' alt='logo' />
                <img className="mobile-logo" width="111" height="36" loading="lazy" src={ERALogo}  data-rjs='/assets/img/webp/logo-fast-blue-black@2x.webp' alt='logo' />
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
            {/* <SearchBar className="pr-0 xs:pl-[15px]" /> */}
            {/*<HeaderLanguage className="xs:pl-[15px]" />
            <HeaderCart className="xs:pl-[15px]" style={{ "--base-color": "#0038e3" }} />*/}
          </Col>
        </HeaderNav>
      </Header>
      {/* Header End */}
      <SideButtons />
      {/* Section Start */}
      <section className="bg-gradient-to-tr from-[#3975f6] via-[#FFF] to-[#f3aaca] py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]">
        <Container className="h-[300px] sm:h-[250px] flex justify-center sm:justify-end">
          <Row xs={1} md={2} className="items-end justify-end sm:flex-col">
            <Col className="p-0 sm:!px-[15px] sm:mb-[20px]">
              <h1 className="text-xmd !leading-[20px] pl-[90px] pr-[15px] text-darkgray font-serif mb-0 relative sm:pl-[55px] md:mb-0 sm:mb-[20px]">
                {/*<span className="h-[1px] absolute top-[12px] left-0 w-[70px] bg-black sm:w-[40px] sm:top-1/2"></span>*/}
                
              </h1>
            </Col>
            <Col className="p-0 sm:!px-[15px]">
              <h4 className="font-medium text-slate-50 bg-black opacity-60  font-serif mb-0">Sounds great, but how do I sign up?</h4>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section End */}

      {/* Section Start */}
      <section className="py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]">
        <Container>
          <Row className="items-end">
            <Col className="col-12 col-lg-6 col-md-4 sm:mb-[30px]">
              <h5 className="font-serif w-[50%] text-darkgray font-medium mb-0 lg:w-[65%] md:w-[95%] xs:w-full">How can we help you today?</h5>
            </Col>
            <Col className="col-12 col-lg-6 col-md-8">
              <Row>
                <Col className="col-12 col-sm-6 xs:mb-[30px]">
                  <span className="font-serif block text-darkgray font-medium mb-[10px]">Headquarters</span>
                  <p className="w-[80%] mb-[5px] lg:w-[90%]">3841 E Danforth Rd. Suite 105 Edmond, OK 73034</p>
                  <span className="block mb-[10px]">Tel: +1.405.494.1237</span>
                  <GoogleMap
          className="grayscale-0 w-[200px] h-[200px] xs:w-[100px] xs:h-[100px]"
          location="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.3879672389376!2d-97.43265918887244!3d35.6674479724774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b220190765597f%3A0xd424f1ce42a820ff!2s3841%20E%20Danforth%20Rd%20%23105%2C%20Edmond%2C%20OK%2073034!5e0!3m2!1sen!2sus!4v1685659622723!5m2!1sen!2sus"
        />
                </Col>
                <Col className="col-12 col-sm-6 xs:mb-[30px]">
                  <span className="font-serif block text-darkgray font-medium mb-[10px]">Remote Office</span>
                  <p className="w-[80%] mb-[5px] lg:w-[90%]">315 Montgomery San Francisco, CA 94104</p>
                  <span className="block mb-[10px]">Tel: +1.405.494.1237</span>
                  <GoogleMap
          className="grayscale-0 w-[200px] h-[200px] xs:w-[100px] xs:h-[100px]"
          location="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.9107170729358!2d-122.4028295!3d37.792132099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808a17929195%3A0xfbda687154d7778c!2s315%20Montgomery%20St%2C%20San%20Francisco%2C%20CA%2094104!5e0!3m2!1sen!2sus!4v1686829850782!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
        />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section End */}

      {/* Section Start */}
     {/* <m.section className="relative h-[700px] md:h-[550px] sm:h-[350px]" {...fadeIn}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]">
          <Buttons to="#" rel="noreferrer" className="btn-fill w-auto z-[2] font-medium !tracking-normal font-serif uppercase rounded-none btn-shadow" size="xl" themeColor="#232323" color="#fff" title="litho design life" />
        </div>
        <Swiper
          modules={[Autoplay, EffectFade, Keyboard]}
          effect="fade"
          className="relative h-[700px] md:h-[550px] sm:h-[350px]"
          loop={true}
          keyboard={{ enabled: true, onlyInViewport: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          fadeEffect={{ crossFade: true }}
          slidesPerView={1}>
          {
            SwiperImgData.map((item, i) => {
              return (
                <SwiperSlide key={i} className="h-full cover-background" style={{ backgroundImage: `url(${item.img})` }}></SwiperSlide>)
            })
          }
        </Swiper>
        </m.section> */}
      {/* Section End */}

      {/* Section Start */}
      <section className="py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
        <Container>
          <Row className="items-end justify-center">
            <Col className="col-12 col-lg-5 col-md-8 md:mb-[50px]">
              <div className="p-16 items-center justify-start text-left z-[1] relative  bg-lightgray overflow-hidden bg-[right_top] bg-no-repeat lg:px-[3rem] md:p-20 xs:p-14" style={{ backgroundImage: 'url(/assets/img/webp/quotes-01.webp)' }}>
                <div className="flex items-center w-[95%]">
                  <div className="mr-[25px] xs:mr-[15px]">
                    <img width="80" height="80" loading="lazy" className="rounded-full w-[80px] md:w-[105px] sm:w-[80px] xs:w-[50px]" src="https://via.placeholder.com/80x80" alt="" />
                  </div>
                  <div>
                    <div className="text-lg text-darkgray font-serif font-medium w-[90%] md:text-xmd md:leading-[22px] xs:w-full">More comfortable talking with us?</div>
                  </div>
                </div>
                <p className="mt-[30px] mb-[15px] w-[80%] lg:w-full md:mb-[10px]">Schedule a 15 minute intro call with us. We'll answer your questions and discuss.</p>
                <div rel="noreferrer" className="text-sm text-darkgray font-medium uppercase text-decoration-line-bottom before:bottom-[-5px]">Tel: +1.405.494.1237</div>
              </div>
            </Col>
            <Col className="col-12 col-lg-6 offset-lg-1 col-md-8">
              <h4 className="font-serif text-black font-semibold">Get in Touch</h4>
              <Row className="justify-center">
                <Col>
                  <Formik
                    initialValues={{ name: '', email: '', phone: '', comment: '' }}
                    validationSchema={ContactFormStyle02Schema}
                    onSubmit={async (values, actions) => {
                      actions.setSubmitting(true)
                      //if (values.recaptcha !== '') {
                        const response = await sendEmail(values)
                        response.status === "success" && resetForm(actions, recaptcha);
                      //} //else {
                       // recaptcha.current.captcha.classList.add("error")
                    //  }
                    }}
                  >
                    {({ isSubmitting, status, setFieldValue }) => (
                      <Form ref={form}>
                        <Input showErrorMsg={false} type="text" name="name" labelClass="mb-[25px]" className="pt-[20px] pr-[36px] pb-[20px] w-full bg-transparent border-b border-solid border-black text-[16px]" placeholder="Your name" />
                        <Input showErrorMsg={false} type="email" name="email" labelClass="mb-[25px]" className="pt-[20px] pr-[36px] pb-[20px] w-full bg-transparent border-b border-solid border-black text-[16px]" placeholder="Your email address" />
                        <Input showErrorMsg={false} type="tel" name="phone" labelClass="mb-[25px]" className="pt-[20px] pr-[36px] pb-[20px] w-full bg-transparent border-b border-solid border-black text-[16px]" placeholder="Mobile no" />
                        <TextArea
                          className="py-[20px] pr-[36px] mb-[32px] w-full bg-transparent border-b border-solid border-black text-[16px] resize-none"
                          name="comment"
                          rows="6"
                          placeholder="How can we help you?"></TextArea>
                        {process.env.REACT_APP_GRECAPTCHA_API_KEY && (
                          <ReCAPTCHA
                            ref={recaptcha}
                            className="mb-[35px]"
                            sitekey={process.env.REACT_APP_GRECAPTCHA_API_KEY}
                            onChange={(response) => { setFieldValue("recaptcha", response) }}
                          />
                        )}
                        <Buttons type="submit" className={`tracking-[0.5px] btn-fill rounded-none font-medium uppercase${isSubmitting ? " loading" : ""}`} themeColor="#232323" size="md" color="#fff" title="Send Message" />
                        <AnimatePresence>
                          {status && <div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><MessageBox className="mt-[20px] py-[10px]" theme="message-box01" variant="success" message="Your message has been sent successfully!" /></div>}
                        </AnimatePresence>
                      </Form>
                    )}
                  </Formik>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section End */}

      {/* Section Start */}
      <m.section {...fadeIn}>
        <GoogleMap
          className="grayscale-0 h-[500px] xs:h-[300px]"
          location="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.3879672389376!2d-97.43265918887244!3d35.6674479724774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b220190765597f%3A0xd424f1ce42a820ff!2s3841%20E%20Danforth%20Rd%20%23105%2C%20Edmond%2C%20OK%2073034!5e0!3m2!1sen!2sus!4v1685659622723!5m2!1sen!2sus"
        />
      </m.section>
      {/* Section End */}

      <section className="py-[80px] md:py-[40px]">
        <Container className="container">
          <Row className="row justify-center">
            <m.div className="col col-12 col-sm-auto sm:mb-[15px]" {...{ ...fadeIn, transition: { delay: 0.2 } }}>
              <div className="flex justify-center items-center px-[15px] h-full">
                <i className="feather-headphones align-middle text-lg text-gradient bg-gradient-to-r from-[#e42464] to-[#ff7357] mr-[10px]"></i>
                <span className="text-darkgray font-serif text-md">+1.405.494.1237</span>
              </div>
            </m.div>
            <m.div className="col col-12 col-sm-auto sm:mb-[15px]" {...{ ...fadeIn, transition: { delay: 0.4 } }}>
              <div className="flex justify-center items-center px-[15px] h-full">
                <i className="feather-mail align-middle text-lg text-gradient bg-gradient-to-r from-[#e42464] to-[#ff7357] mr-[10px]"></i>
                <a href="mailto:support@erasolutions.us" rel="noreferrer" className="text-darkgray font-serif text-md hover:text-fastblue">support@erasolutions.us</a>
              </div>
            </m.div>
            <m.div className="col col-12 col-sm-auto" {...{ ...fadeIn, transition: { delay: 0.6 } }}>
              <div className="flex justify-center items-center px-[15px] h-full">
                <i className="feather-globe align-middle text-lg text-gradient bg-gradient-to-r from-[#e42464] to-[#ff7357] mr-[10px]"></i>
                <Link to="/page/contact-modern" className="text-darkgray font-serif text-md hover:text-fastblue">www.erasolutions.us</Link>
              </div>
            </m.div>
          </Row>
        </Container>
      </section>

      {/* Footer Start */}
      {/* <FooterStyle01 theme="dark" className="bg-[#262b35] text-slateblue" /> */}
      {/* Footer End */}
    </div>
  )
}

export default ContactUsModernPage