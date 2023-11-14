import React, { useState } from 'react';

const Chatgbt = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate username
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
      isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Valid email is required';
      isValid = false;
    }

    const validatePassword = (password) => {
      // Minimum length of 6 characters
      if (password.length < 6) {
        return 'Password must be at least 6 characters';
      }
    
      // At least one lowercase letter
      if (!/[a-z]/.test(password)) {
        return 'Password must include at least one lowercase letter';
      }
    
      // At least one uppercase letter
      if (!/[A-Z]/.test(password)) {
        return 'Password must include at least one uppercase letter';
      }
    
      // At least one digit
      if (!/\d/.test(password)) {
        return 'Password must include at least one digit';
      }
    
      // At least one special character
      if (!/[@$!%*?&]/.test(password)) {
        return 'Password must include at least one special character';
      }
    
      // If all conditions pass, return null (indicating no error)
      return null;
    };
    
    // ...
    
    // Inside your validation logic:
    const passwordError = validatePassword(formData.password);
    if (passwordError) {
      newErrors.password = passwordError;
      isValid = false;
    }
    

  // Validate confirmPassword
  if (formData.password !== formData.confirmPassword) {
    newErrors.confirmPassword = 'Passwords do not match';
    isValid = false;
  }

  setErrors(newErrors);
  return isValid;
};

const handleSubmit = (e) => {
  e.preventDefault();

  if (validateForm()) {
    // Perform registration logic here
    console.log('Registration successful!', formData);
    // You can send the form data to the server or perform other actions as needed
  } else {
    console.log('Form validation failed');
    }
  };

  //   // Validate password
  //   const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
  //   if (!passwordRegex.test(formData.password)) {
  //     newErrors.password =
  //       'Password must be at least 8 characters and include at least one uppercase letter, one lowercase letter, one digit, and one special character';
  //     isValid = false;
  //   }

  //   // Validate confirmPassword
  //   if (formData.password !== formData.confirmPassword) {
  //     newErrors.confirmPassword = 'Passwords do not match';
  //     isValid = false;
  //   }

  //   setErrors(newErrors);
  //   return isValid;
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (validateForm()) {
  //     console.log('Registration successful!', formData);
  //   } else {
  //     console.log('Form validation failed');
  //   }
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={{ borderColor: errors.username ? 'red' : '' }}
          />
          {errors.username && (
            <span style={{ color: 'red' }}>{errors.username}</span>
          )}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ borderColor: errors.email ? 'red' : '' }}
          />
          {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ borderColor: errors.password ? 'red' : '' }}
          />
          {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={{ borderColor: errors.confirmPassword ? 'red' : '' }}
          />
          {errors.confirmPassword && (
            <span style={{ color: 'red' }}>{errors.confirmPassword}</span>
          )}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Chatgbt;
