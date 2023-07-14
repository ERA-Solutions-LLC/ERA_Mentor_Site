import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
//Components
import { Header, HeaderCart, HeaderLanguage, HeaderNav, Menu, SearchBar } from "../../../Components/Header/Header";
import { Col, Container, Navbar, Row, Tab, Tabs } from "react-bootstrap";
import ERALogo from "../../../Assets/img/era-logo-transparent.png";

const EmployeeDashboard = (props) => {
  const history = useNavigate();
  const [employeeData, setEmployeeData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await axios.get('/api/employee-details');
        setEmployeeData(response.data);
        console.log(response);
      } catch (error) {
        setError('Failed to fetch employee data.');
      }
    };

    fetchEmployeeData();
  }, []);

  const handleUpdateClick = () => {
    history.push('/update');
  };

//   if (!employeeData) {
//     return <div>Loading...</div>;
//   }

  return (
    <div style={props.style}>
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
      <br></br>
      <br></br>
      <br></br>
      <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Employee Dashboard</h1>
      <div className="bg-white p-4 rounded shadow">
        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2">Job Title</h2>
          {/* <p>{employeeData.jobTitle}</p> */}
          <p>Software Developer</p>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2">Certifications</h2>
          {/* <p>{employeeData.certifications}</p> */}
          <p>JavaScript Specialist</p>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2">Start Date</h2>
          {/* <p>{employeeData.startDate}</p> */}
          <p>01/01/2023</p>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2">Address</h2>
          {/* <p>{employeeData.addressLine1}</p>
          <p>{employeeData.addressLine2}</p> */}
          <p>123 main st</p>
          {/* <p>
            {employeeData.city}, {employeeData.state} {employeeData.zipcode}
          </p> */}
          <p>Small Town, OK, USA, 123456</p>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2">Salary</h2>
          {/* <p>{employeeData.salary}</p> */}
          <p>$99,000</p>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2">Training</h2>
          {/* <p>{employeeData.training}</p> */}
          <p>ReactJs</p>
        </div>
        <div>
          <Link to="/update" className="text-blue-500 hover:underline" >
            Update
          </Link>
        </div>
      </div>
    </div>
  </div>
  );
};

export default EmployeeDashboard;

