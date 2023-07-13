import React, { useState } from 'react';

//Libaries
import { useFormik } from 'formik';
import { Col, Container, Navbar, Row, Tab, Tabs } from "react-bootstrap";
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

//Components
import { Header, HeaderCart, HeaderLanguage, HeaderNav, Menu, SearchBar } from "../../../Components/Header/Header";

//Import Images
import ERALogo from "../../../Assets/img/era-logo-transparent.png"


const LoginForm = (props) => {
  const history = useNavigate();
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email('Invalid email format.').required('Email is required.'),
      password: Yup.string()
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
          'Invalid password. Please make sure it is 6-16 characters long and contains at least 1 uppercase letter, 1 lowercase letter, 1 special character, and 1 number.'
        )
        .required('Password is required.')
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post('http://localhost:4000/login', values);
        console.log(response);
        const is_hr = response.data.is_hr;
        const validationMessage = response.data.authenticated;
        console.log(is_hr)

        if (validationMessage) {
          if(is_hr){
            alert("You will be logged in as HR")
            navigate('/hr-dashboard'); // Redirect to HrDashboard component
          } else{
          alert("You will be signed in as an employee")
          navigate('/employee-dashboard'); // Redirect to EmployeeDashboard component
          }
        }
        else{
          setError('Email or password incorrect. Please verify and try again.');
        }
      } catch (error) {
        setError('Invalid email or password.'); // Set error message based on server response
      }
    },
   
  });

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
      {/* Header End */}
      <div className="flex bg-[url('./Assets/img/lady-typing.jpg')] bg-no-repeat bg-cover bg-center justify-center items-center h-screen">
      <form className="w-2/5 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className={`appearance-none border ${
              formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-xs italic">{formik.errors.email}</p>
          )}
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className={`appearance-none border ${
              formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-300'
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-red-500 text-xs italic">{formik.errors.password}</p>
          )}
        </div>
        {error && <p className="text-red-500 text-xs italic">{error}</p>}
        <div className="flex items-center justify-between">
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
           
          >
           <Link to={'/'}> Back</Link>
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <p class="mb-0 mt-2 pt-1 text-sm font-semibold">
              Don't have an account?<br></br>
              <Link
              to={'/sign-up'}
                className="mx-[.75%] text-erablue transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                >Register - Employees</Link>
          </p>
        </div>
      </form>
    </div>
    </div>
  );
};

export default LoginForm;

