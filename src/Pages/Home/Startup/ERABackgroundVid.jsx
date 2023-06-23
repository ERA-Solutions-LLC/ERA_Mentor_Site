import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Videos from "../../../Components/Videos/Videos"
import bgVideo from "../../../Assets/video/Dark_City.mov"


const ERABackgroundVid = () => {
    
    return (
    <Videos
      className=" w-full h-full backdrop-brightness-50 py-[160px] pb-0 xl:py-[120px] md:py-[95px] sm:py-[80px] xs:py-0 h-[700px] xl:h-[550px] md:h-[400px] sm:h-auto xs:h-[26vh]"
      src={bgVideo}
      loop={true}
      poster="/assets/img/mfg-close.png">
      <Container className="h-full mx-lg">
        <Row className="items-end justify-center h-full w-full">
          <Col xl={6} lg={7} md={10} className="relative z-[2] text-center">
            {/* <span className="mb-[5px] font-serif text-white  block">Talent Solutions and Training</span> */}
            <h1 className="text-white font-Poppins font-black font-medium tracking-widest text-[70px] leading-[72px] mb-28 sm:mb-12 sm:text-[30px] sm:leading-[40px] xs:text-[20px]">Era Solutions</h1>
            <span className="h-[80px] inline-block bg-white mb-20 sm:mb-12 sm:h-[50px]"></span>
          </Col>
        </Row>
      </Container>
    </Videos>
        
    )
}

export default ERABackgroundVid