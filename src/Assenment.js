
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

import './Assenment.css';

const RegistrationForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    email: '',
    password: '',
    // conformpassword:'',
  });




  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    navigate('/FormData',{state:{SubmitedData:formData}});
  };

 

  return (
    <div className="registration-form">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label> 
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />


        </div>



        <div className="form-group">
          <label htmlFor="dateOfBirth">Date-Of-Birth</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
        </div>

        <div className='Gender'>
        <input type="radio" name='gender' value="male" checked={formData.gender==='male'} onChange={handleChange}  />Male
             <input type="radio" name='gender' value="female" checked={formData.gender==='female'} onChange={handleChange}  />Female

             </div>


        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
      

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
