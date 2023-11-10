

import React from 'react';
import '/.About.css';
import {Link} from 'react-router-dom';



import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineYoutube } from 'react-icons/ai';


function About() {
  return (

    <div>

<nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">Cars</li>
        <li className="nav-item">home </li>
        <li className="nav-item"> About us</li>

        <li className="nav-item"> all Car</li>
        <li className="nav-item"> Contact us</li>
        <li className="nav-item"> login</li>





        
      </ul>
    </nav>







   
    <div className="car-info">
      <h1>Tiago</h1>
      <p>Make: Your Car Make</p>
      <p>Model: 2018</p>
      <p>Year: 5year</p>
      <p>Color: orange</p>
    </div>


    <div className="car-info">
      <h1>altroz</h1>
      <p>Make: Your Car Make</p>
      <p>Model: 2020</p>
      <p>Year: 3year</p>
      <p>Color: </p>
    </div>


    <div className="car-info">
      <h1>Nexon</h1>
      <p>Make: Your Car Make</p>
      <p>Model: 2021</p>
      <p>Year: 2year</p>
      <p>Color: blue</p>
    </div>


    <div className="car-info">
      <h1>punch</h1>
      <p>Make: Your Car Make</p>
      <p>Model: 2022</p>
      <p>Year: 1year</p>
      <p>Color: green</p>
    </div>


{/* -------------------------------------------------footer------------- */}

<footer className="footer">
      <div className="contact-info">
        <p>Toll Free Number : 1800 209 8282</p>
        <p>Missed Call Number: 9512127979</p>
        <p>WhatsApp Number: 96430 06652</p>
      </div>
      <div className="terms-and-conditions">
        <a href="/terms">Terms and Conditions</a>  <br></br>
        <a href="/terms">Privecy & policy</a>


      </div>
      <div className="social-iconsss">
        <AiOutlineFacebook/> 
        <AiOutlineInstagram/>
        <AiOutlineYoutube/>
      </div>
    </footer>








    </div>
  );
}

export default About;
