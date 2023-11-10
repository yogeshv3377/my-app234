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