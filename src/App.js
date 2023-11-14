import React from "react";


import {BrowserRouter as Router, Routes,Route } from "react-router-dom";
// import MapFuction from "./MapFunction";
// import Sign from "./Sign";
// import FormData from './Formdata';
// import Assenment2 from "./Assenment2";
// import Chatgbt from "./Chatgbt";
// import Tabel from "./Tabel";
// import PlayerList from "./PlayerList";
// import Nsir1 from "./Nsir1";
// import Favoritecolor from "./Wschools"
// import Chatgbt  from"./Chatgbt"
// import Chatgbt from"./Chatgbt"
// import Rejx from "./Rejx";
import RegistrationForm from"./RegistrationForm";

function App() {
  return (
    <div>
 

            <Router>
      <Routes>

        
     {/* <Route path='/' element={ <Sign/>}/>
      <Route path="/Formdata" element={<FormData/>}/> 
      <Route path="/Assenment2" element={<Assenment2/>}/>
      <Route path="/MapFunction"element={<MapFuction/>}/>  
       <Route path="/ Chatgbt" element={< Chatgbt/>}/> */}
       <Route path="/RegistrationForm" element={<RegistrationForm/>}/>


        
      </Routes>
      </Router>           


       <RegistrationForm/>


    </div>
  );
}

export default App;
