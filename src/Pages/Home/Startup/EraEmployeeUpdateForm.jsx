import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EmployeeUpdateForm = () => {
  const { id } = useParams();
  const history = useNavigate();
  const [formData, setFormData] = useState({
    jobTitle: '',
    certifications: '',
    startDate: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipcode: '',
    salary: '',
    training: ''
  });
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await axios.get(`/api/employee/${id}`);
        setFormData(response.data);
      } catch (error) {
        setError('Failed to fetch employee data.');
      }
    };

    fetchEmployeeData();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    //   await axios.put(`/api/employee/${id}`, formData);
      history.push('/employee-dashboard');
    } catch (error) {
      setError('Failed to update employee profile.');
    }
  };

//   if (!formData) {
//     return <div>Loading...</div>;
//   }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Update Employee Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="jobTitle">Job Title</label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="certifications">Certifications</label>
          <input
            type="text"
            id="certifications"
            name="certifications"
            value={formData.certifications}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="startDate">Start Date</label>
          <input
            type="text"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="addressLine1">Address Line 1</label>
          <input
            type="text"
            id="addressLine1"
            name="addressLine1"
            value={formData.addressLine1}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="addressLine2">Address Line 2</label>
          <input
            type="text"
            id="addressLine2"
            name="addressLine2"
            value={formData.addressLine2}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="state">State</label>
          <input
            type="text"            
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="zipcode">Zipcode</label>
          <input
            type="text"
            id="zipcode"
            name="zipcode"
            value={formData.zipcode}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="salary">Salary</label>
          <input
            type="text"
            id="salary"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="training">Training</label>
          <input
            type="text"
            id="training"
            name="training"
            value={formData.training}
            onChange={handleChange}
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default EmployeeUpdateForm;
