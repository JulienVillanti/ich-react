import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import HomePage from "./Components/HomePage/HomePage";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Sign-up/SignUp";
import Services from "./Components/Services/Services";
import Calendar from './Components/Calendar/Calendar.js';


function App() {
  
  return (
    <Router>
      <NavigationBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/calendar" element={<Calendar />} />


      </Routes>
    </Router>
  );
}


// function Calendar() {

//   return (

//     <App />
//   );
// }

export default App;

