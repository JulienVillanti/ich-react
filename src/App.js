import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, PrivateRoute } from "react-router-dom";
import { getAuth } from "firebase/auth";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import HomePage from "./Components/HomePage/HomePage";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Sign-up/SignUp";
import Services from "./Components/Services/Services";
import Profile from "./Components/Profile/Profile";
import PasswordReset from "./Components/PasswordReset/PasswordReset";
import Maps from "./Components/Maps/Maps";
import { AuthProvider } from "./AuthContext";



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
        <Route path="/profile" element={<Profile />} />
        <Route path="/passwordreset" element={<PasswordReset />} />
        <Route path="/Maps" element={<Maps />} />
      </Routes>
    </Router>

  );
}

export default App;

