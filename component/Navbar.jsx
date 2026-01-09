import React from 'react'
import './Navbar.css'
import logo from '../assets/atechsole-new-logo.png'

const Navbar = ({ onContactClick }) => {
  return (
    <header className="navbar">
      <div className="nav-left">
        <img src={logo} alt="ATechsole logo" className="nav-logo" />
      </div>
      <nav className="nav-right">
        <a href="#" className="cta" onClick={(e) => { e.preventDefault(); onContactClick(); }}>Contact us</a>
      </nav>
    </header>
  )
}

export default Navbar
