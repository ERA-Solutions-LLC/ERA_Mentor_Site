import React, { useState } from 'react';

//Libaries 
import { useFormik } from 'formik';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import { Col, Container, Navbar, Row, Tab, Tabs } from "react-bootstrap";
import * as Yup from 'yup';
import axios from 'axios';

//Components
import { Header, HeaderCart, HeaderLanguage, HeaderNav, Menu, SearchBar } from "../../../Components/Header/Header";

//Import Images
import ERALogo from "../../../Assets/img/era-logo-transparent.png"





const SignUpForm = (props) => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      confirmEmail: '',
      phoneNumber: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required('First name is required.'),
      lastName: Yup.string().required('Last name required.'),
      email: Yup.string().email('Invalid email format.').required('Email is required.'),
      confirmEmail: Yup.string()
        .oneOf([Yup.ref('email'), null], 'Emails must match.')
        .required('Confirm email is required.'),
      phoneNumber: Yup.string().required('Phone number is required.'),
      password: Yup.string()
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
          'Invalid password. Please make sure it is 6-16 characters long and contains at least 1 uppercase letter, 1 lowercase letter, 1 special character, and 1 number.'
        )
        .required('Password is required.'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match.')
        .required('Confirm password is required.')
    }),
    onSubmit: async (values) => {
      console.log(values)
      //values.preventDefault();
      try {
        // Make API call to register the user
        let response = await axios.post('http://localhost:4000/company-user', values);
        console.log(response)
        alert("Congratulations, you've successfully created your account!")
        navigate('/login');

        // Redirect to login page or display success message
        /*axios({
          method: 'POST',
          url: 'http://localhost:4000/company-user',
          data: values
        })
          .then(function(res){
            console.log(res)
            alert('Thank you for signing up')
            navigate('./Pages/Home/Startup/EraLoginForm');
          })
          .catch(function(res){
            console.log(res)
          });*/
      } catch (error) {
        setError('An error occurred during sign-up. Please try again.'); // Set error message based on server response
      }
    }
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
      <div className="flex bg-[url('./Assets/img/typing.jpg')] bg-no-repeat bg-cover bg-center justify-center items-center h-screen">
      <form className="w-2/5 bg-white shadow-md rounded px-8 pt-56 pb-8 mb-4" onSubmit={formik.handleSubmit}>
      <p className="text-2xl font-bold mb-4 color-red">**ONLY FOR ERA SOLUTIONS EMPLOYEES AT THIS TIME**</p>
      {/* First Name */}
      <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mt-3 mb-2" htmlFor="firstName">
            First Name
          </label>
          <input
            className={`appearance-none border ${
              formik.touched.firstName && formik.errors.firstName ? 'border-red-500' : 'border-gray-300'
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            id="firstName"
            name="firstName"
            type="firstName"
            placeholder="Enter your first name"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <p className="text-red-500 text-xs italic">{formik.errors.firstName}</p>
          )}
        </div>
      {/* Last name */}
      <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
            Last Name
          </label>
          <input
            className={`appearance-none border ${
              formik.touched.lastName && formik.errors.lastName ? 'border-red-500' : 'border-gray-300'
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            id="lastName"
            name="lastName"
            type="lastName"
            placeholder="Enter your last name"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <p className="text-red-500 text-xs italic">{formik.errors.lastName}</p>
          )}
        </div>
        {/* Email */}
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
        {/* Confirm Email */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmEmail">
            Confirm Email
          </label>
          <input
            className={`appearance-none border ${
              formik.touched.confirmEmail && formik.errors.confirmEmail ? 'border-red-500' : 'border-gray-300'
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
           id="confirmEmail"
            name="confirmEmail"
            type="email"
            placeholder="Confirm your email"
            value={formik.values.confirmEmail}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.confirmEmail && formik.errors.confirmEmail && (
            <p className="text-red-500 text-xs italic">{formik.errors.confirmEmail}</p>
          )}
        </div>
        {/* Phone Number */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
            Phone Number
          </label>
          <input
            className={`appearance-none border ${
              formik.touched.phoneNumber && formik.errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            placeholder="Enter your phone number"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <p className="text-red-500 text-xs italic">{formik.errors.phoneNumber}</p>
          )}
        </div>
        {/* Password */}
        <div className="mb-4">
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
        {/* Confirm Password */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className={`appearance-none border ${
              formik.touched.confirmPassword && formik.errors.confirmPassword
                ? 'border-red-500'
                : 'border-gray-300'
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <p className="text-red-500 text-xs italic">{formik.errors.confirmPassword}</p>
          )}
        </div>
        {error && <p className="text-red-500 text-xs italic">{error}</p>}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default SignUpForm;

