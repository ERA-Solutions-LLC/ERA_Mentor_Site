import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Videos from "../../../Components/Videos/Videos"
import bgVideo from "../../../Assets/video/video.mp4"


const ERABackgroundVid = () => {
    
    return (
    <Videos
      className="py-[160px] pb-0 xl:py-[120px] md:py-[95px] sm:py-[80px] xs:py-0 h-[700px] xl:h-[550px] md:h-[400px] sm:h-auto xs:h-[26vh]"
      src={bgVideo}
      loop={true}
      poster="/assets/img/mfg-close.png"
      //overlay={["#0039e3", "#4132e0", "#4132e0", "#741bd9", "#8600d4"]} 
      //opacity="0.8">
      opacity={.8}>
      <Container className="h-full">
        <Row className="items-end justify-center h-full">
          <Col xl={6} lg={7} md={10} className="relative z-[2] text-center">
            <span className="mb-[5px] font-serif text-white opacity-60 block">HR Solutions and Training</span>
            <h1 className="text-white font-serif font-medium text-[42px] leading-[49px] mb-20 sm:mb-12 sm:text-[30px] sm:leading-[40px] xs:text-[20px]">ERA Solutions</h1>
            <span className="h-[80px] inline-block bg-white mb-20 sm:mb-12 sm:h-[50px]"></span>
          </Col>
        </Row>
      </Container>
    </Videos>
        
    )
}

export default ERABackgroundVid