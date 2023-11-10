import React from 'react';
import  './Assenment2.css';
import {Link} from 'react-router-dom';








const Assenment2 = () => {
  
  return (
    <div className='Homebody'>
    <div className='wallpaper'>
        <nav className="navbar">
          <ul className="nav-list">
           
    
          
            <li className="nav-item">Home</li>
         
    
            <li className="nav-item">About</li>
            
          
            <Link to='/MapFunction' ><li className="nav-item"> All Cars</li></Link>
    
           
             <li className="nav-item"> Registartion </li>
       
    
    
             {/* <Link to='/' ><li className="nav-item"> </li></Link> */}
     
    
    
           
            <li className="nav-item"> login</li>
    
    
          </ul>
        </nav>      
   
        </div>
        </div>
   
  );
};

export default  Assenment2;
