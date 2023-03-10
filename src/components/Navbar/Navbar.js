import React, {useState} from 'react'
import "../Navbar/Navbar.css"
import logo from "../../assets/logo.png"
import {CiHome,CiCircleInfo,CiRollingSuitcase,CiMemoPad} from "react-icons/ci"
import {RxHamburgerMenu} from "react-icons/rx"
import {AiOutlineClose} from "react-icons/ai"
import { Link } from 'react-router-dom'

function Navbar() {
  const [clicked, setClicked]=useState(false)
  return (
    <nav className='navbar'>
      <div className="navbar-logo">
        <img src={logo} alt="logo"/>
      </div>
      <div onClick={()=>setClicked(!clicked)} className="burger-menu">
       {clicked?<AiOutlineClose/>:<RxHamburgerMenu/>}
      </div>
      <ul className={clicked?"navbar-menu mobile":"navbar-menu"}>
        <li>
          <Link to="/"><CiHome/> Home</Link>
        </li>
        <li>
          <Link to="/about"><CiCircleInfo/> About</Link>
        </li>
        <li>
          <Link to="/services"><CiRollingSuitcase/> Services</Link>
        </li>
        <li>
          <Link to="/contact"><CiMemoPad/> Contact</Link>
        </li>
        <button>Sign Up</button>
      </ul>
    </nav>
  )
}

export default Navbar