import React, { useState } from 'react';

//Libaries
import { useFormik } from 'formik';
import { Col, Container, Navbar, Row, Tab, Tabs } from "react-bootstrap";
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

//Components
import { Header, HeaderCart, HeaderLanguage, HeaderNav, Menu, SearchBar } from "../../../Components/Header/Header";
import ComingSoonPage from "../../../Pages/AdditionalPages/ComingSoonPage";
//import ComingSoonV2Page from "../../../Pages/AdditionalPages/ComingSoonV2Page";

//Import Images
import ERALogo from "../../../Assets/img/era-logo-transparent.png"

const HRDashboard = (props) => {
    return(
        <div>
             {/* Header Start */}
            <Header topSpace={{ md: true }} type="reverse-scroll">
            <HeaderNav theme="light" expand="lg" menu="light" className="py-[0px] lg:px-[15px] md:px-0" containerClass="sm:px-0">
                <Col className="col-auto col-sm-6 col-lg-2 me-auto ps-lg-0 xs:px-0">
                    <Link aria-label="header logo" className="flex items-center" to="/">
                    <Navbar.Brand className="inline-block p-0 m-0">
                        <img className="default-logo" width="111" height="36" loading="lazy" src={ERALogo} alt='logo' />
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
                    {/* <SearchBar className="pr-0" /> */}
                    {/*<HeaderLanguage />
                    <HeaderCart />*/}
                </Col>
                </HeaderNav>
            </Header>
            <ComingSoonPage />       
        </div>
    );
};

export default HRDashboard;