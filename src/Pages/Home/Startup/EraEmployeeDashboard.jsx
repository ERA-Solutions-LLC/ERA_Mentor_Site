import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EmployeeDashboard = () => {
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
  );
};

export default EmployeeDashboard;

