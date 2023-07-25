import React from 'react'
import "./Navbar.css";
import {RiMenu3Line,RiCloseLin} from "react-icons";
const Navbar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navabar-links_logo">
          <img src={logo} alt="logo"/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
