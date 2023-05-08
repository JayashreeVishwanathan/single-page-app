import About from './Pages/About';
import Careers from './Pages/Careers';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Services from './Pages/Services';
import {NavLink} from "react-router-dom";


function Header(){
  return (
    <div>
      <h1> My Single Page Application </h1>
      <ul className="header">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/careers">Careers </NavLink> </li>
        <li><NavLink to="/services">Services</NavLink> </li>
        <li><NavLink to="/about">About Me</NavLink> </li>
    </ul>
  </div>


);
}

export default Header;
