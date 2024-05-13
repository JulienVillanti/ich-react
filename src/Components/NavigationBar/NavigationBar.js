import React from "react";
import './NavigationBar.css';
import { Link } from "react-router-dom";
import Logo from '../Images/LogoICH.png';

function NavigationBar() {
  return (
    <nav className="NavBar">
      <ul>
        <li>
          <Link to="/"><img src={Logo} alt="Logo" className="logo" />
            <span>Instituto do Corpo Humano </span></Link>
        </li>
        <li><Link to="/about">Sobre nós </Link></li>
        <li><Link to="/contact">Contate-nos</Link></li>
        <li><Link to="/login">Login/Sign-up</Link></li>
        <li><Link to="/services">Serviços</Link></li>
      </ul>
    </nav>
  );
}

export default NavigationBar;

