import React from 'react'
import { useLocation } from 'react-router-dom'
import  './Formdata.css'
import { Link } from 'react-router-dom'
import  { useState } from 'react'
import { useNavigate} from 'react-router-dom';

const Formdata = () => {
    const data = useLocation().state.submitteddata;
     

    const Navigate = useNavigate()



    const [input , setInput] = useState({
      Email:' ',
      Password:' ',
      
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
        // console.log("Signinform" , input)
      if(data.Email===input.Email && data.Password===input.Password){
        Navigate('/Assenment2', {state: {submitteddata:input}});
    }

    else {
      alert('Wrong credentials')
    }
  
  }



  return (
    <div className='class1'>
      
      {/* <fieldset className='class2'> */}
        <form className='class3'onSubmit={inputsubmit}>

          <div >
          <h1>Sign In</h1>
          <br/>
          <label  className='class4'>Email</label>
          <br/>
          <input  className='class5' type='text' name='Email'  value={input.Email} onChange={changeinput} required/>
          <br/>
          <br/>
          <label  className='class4'>Password</label>
          <br/>
          <input className='class5' type='text' name='Password' value={input.Password} onChange={changeinput}required/>
          <br/>
          <br/>
         <Link to='/Assenment2'> <button type='submit'>Login</button></Link>
          <br/>
          <br/>
          </div>
        </form>
      {/* </fieldset> */}
    </div>
  )
}

export default Formdata;