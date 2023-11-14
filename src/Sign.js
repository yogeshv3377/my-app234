import  { useState } from 'react'
import { useNavigate} from 'react-router-dom';
import './Sign.css'








const Sign = () => {
    const Navigate = useNavigate()



  const [input , setInput] = useState({
    Email:' ',
    Password:' ',
    RepeatPassword:' ',
    gender:' '
    
  });

  let changeinput = (e) =>{
    const {name , value} = e.target;
    setInput({
      ...input,
      [name]:value
    })
  }

  let inputsubmit = (e) =>{
      e.preventDefault()
      console.log("Signinform" , input)
    
      Navigate('/Formdata', {state: {submitteddata:input}});
  }

  return (
    <div className='Signinpage'>
      
      <fieldset className='Text1'>
        
        <div className='S-Body'>

        <form onSubmit={inputsubmit}>
          
             <div className='Signin'> Sign Up</div>
            <br/> <br/>
            <label className='Text5'>Email:</label>
            <br/>

            
            <input required className='Text2' type='text' placeholder='Email' name='Email' value={input.Email} onChange={changeinput}  />
            <br/>
            <br/>
            <label  className='Text5'>Password:</label>
            <br/>
            
            <input required className='Text2' type='text' placeholder='Password' name='Password'   value={input.Password}  onChange={changeinput}  />
            <br/>
            <br/>
              <label  className='Text5'>Conform Password:</label>
              <br/>
            
            <input required className='Text2' type='text' placeholder='Repeat Password' name='RepeatPassword' value={input.RepeatPassword} onChange={changeinput} />
            <br/> <br/>
            <input  required  type='radio' value='male' name='gender' checked={input.gender==="male"} onChange={changeinput}  />&nbsp;<b>Male</b>
            &nbsp; 
            <input  required  type='radio' value='female' name='gender' checked={input.gender==="female"} onChange={changeinput}  />&nbsp;<b>Female</b>
            <br/> 
            <p required className='Text5'>Forgot Password? &nbsp;<span>Login</span></p>
            <br/>
          <button type='Submit' className='Text4'>Sign Up</button> 
        <br/>
        <br/>
        </form>
      </div>

      </fieldset>
    </div>
  )
}

export default Sign


// import React, { useState } from 'react';

// const RegistrationPage = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     let isValid = true;
//     const newErrors = {};

//     if (!formData.username.trim()) {
//       newErrors.username = 'Username is required';
//       isValid = false;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
//       newErrors.email = 'Valid email is required';
//       isValid = false;
//     }

//     const validatePassword = (password) => {
//       if (password.length < 6) {
//         return 'Password must be at least 6 characters';
//       }
    
//       if (!/[a-z]/.test(password)) {
//         return 'Password must include at least one lowercase letter';
//       }
    
//       if (!/[A-Z]/.test(password)) {
//         return 'Password must include at least one uppercase letter';
//       }
    
//       if (!/\d/.test(password)) {
//         return 'Password must include at least one digit';
//       }
    
//       if (!/[@$!%*?&]/.test(password)) {
//         return 'Password must include at least one special character';
//       }
    
//       return null;
//     };
    
//     // ...
    
//     const passwordError = validatePassword(formData.password);
//     if (passwordError) {
//       newErrors.password = passwordError;
//       isValid = false;
//     }
    

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
//     }
//   };


//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   return (
//     <div>
//       <div className='Signinpage'>



//       <form onSubmit={handleSubmit}>
//         <div>
//           <div className='Username'>
//           <label htmlFor="Username1">Registration</label>
//           </div>
          
//           <div

//             type="text"
//             id="username"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             style={{ borderColor: errors.username ? 'red' : '' }}
//           />
//           {errors.username && (
//             <span style={{ color: 'red' }}>{errors.username}</span>
//           )}
//         </div>

//         <div className='First'>
//           <label htmlFor="email">Email:</label><div/>
//               <div className='Input'>
//             <input
//             type="text"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             style={{ borderColor: errors.email ? 'red' : '' }}
//           />

          
//           </div>
//           {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
//         </div>

//         <div className='Password1'>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             style={{ borderColor: errors.password ? 'red' : '' }}
//           />
//           {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
//         </div>

//         <div className='Password2'>
        
//           <label htmlFor="confirmPassword">Confirm Password:</label>
//           <input
//             type="password"
//             id="confirmPassword"
//             name="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             style={{ borderColor: errors.confirmPassword ? 'red' : '' }}
//           />
//           {errors.confirmPassword && (
//             <span style={{ color: 'red' }}>{errors.confirmPassword}</span>
//           )}
//         </div>
//               <div className='ok'>
//         <button type="submit">Register</button>
//         </div>
//       </form>
//     </div>
    // </div>
  // );
// };
// 
// export default RegistrationPage;
