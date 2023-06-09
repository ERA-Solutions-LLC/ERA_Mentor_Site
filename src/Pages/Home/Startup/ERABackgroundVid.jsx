import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Videos from "../../../Components/Videos/Videos"
import bgVideo from "../../../Assets/video/Dark_City.mov"
import Era1 from '../../../Assets/img/erasolutions-black.svg';
import Era2 from '../../../Assets/img/erasolutions-blue.svg';
import Era3 from '../../../Assets/img/erasolutions-white.svg'


const ERABackgroundVid = () => {
    
    return (
    <Videos
      className=" w-full h-full py-[550px] pb-0 xl:py-[120px] md:py-[75px] sm:py-[11px] xs:py-0 h-[700px] xl:h-[700px] md:h-[556px] sm:h-auto xs:h-[26vh]"
      src={bgVideo}
      loop={true}
      poster="/assets/img/mfg-close.png">
      <Container className="h-full xl:h-[400px] mx-lg ">
        <Row className="items-end justify-center h-full w-full">
          <Col xl={6} lg={7} md={10} className="relative z-[2] text-center">
            {/* <span className="mb-[5px] font-serif text-white  block">Talent Solutions and Training</span> */}
            {/* <h1 className="text-white font-Poppins font-black font-medium tracking-widest text-[70px] leading-[72px] mb-28 sm:mb-12 sm:text-[30px] sm:leading-[40px] xs:text-[20px]">Era Solutions</h1> */}
           <div className="flex justify-center text-center">
            <img className='xs:my-0 sm:py-[150px] flex justify-center xs:py-[80px]  xs:pl-[30px]' alt='era svg text' src={Era3} />
            </div>
            <span className="h-[80px] inline-block bg-white mb-20 sm:mb-12 sm:h-[500px]"></span>
          </Col>
        </Row>
      </Container>
    </Videos>
        
    )
}

export default ERABackgroundVid