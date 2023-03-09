import React, {useState} from 'react'
import "../Navbar/Navbar.css"
import logo from "../../images/logo.png"
import {CiHome,CiCircleInfo,CiRollingSuitcase,CiMemoPad} from "react-icons/ci"
import {RxHamburgerMenu} from "react-icons/rx"
import {AiOutlineClose} from "react-icons/ai"

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
          <a href="/"><CiHome/> Home</a>
        </li>
        <li>
          <a href="/"><CiCircleInfo/> About</a>
        </li>
        <li>
          <a href="/"><CiRollingSuitcase/> Services</a>
        </li>
        <li>
          <a href="/"><CiMemoPad/> Contact</a>
        </li>
        <button>Sign Up</button>
      </ul>
    </nav>
  )
}

export default Navbar