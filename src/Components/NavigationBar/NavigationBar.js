import React from "react";
import './NavigationBar.css';
import { Link } from "react-router-dom";
import Logo from '../Images/LogoICH.png';



function NavigationBar() {
  return(

    <nav className="NavBar"> 
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo" />
        <div className="logo-text">
          <Link to="/">Instituto do Corpo Humano</Link>
        </div>
      </div>
    <ul> 
      <li><Link to="/about">Sobre nós </Link></li>
      <li><Link to="/contact">Contate-nos</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/services">Serviços</Link></li>
    </ul>
  </nav>
  
    
  );   
}

export default NavigationBar;

