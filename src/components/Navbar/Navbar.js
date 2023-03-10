import React, {useEffect, useState} from 'react'
import "../Navbar/Navbar.css"
import logo from "../../assets/logo.png"
import {CiHome,CiCircleInfo,CiMemoPad} from "react-icons/ci"
import {RxHamburgerMenu} from "react-icons/rx"
import {AiOutlineClose} from "react-icons/ai"
import {MdOutlineRestaurantMenu} from "react-icons/md"
import { Link } from 'react-router-dom'

function Navbar() {
  const [clicked, setClicked]=useState(false)
  const [scrollPosition,setScrollPosition]=useState({position:0, prevPosition:0})
  const isVisibile= scrollPosition.position<=scrollPosition.prevPosition
  
  useEffect(() => {
    const onScroll = () => {
      setScrollPosition(prevState => {
        return { position: window.scrollY, prevPosition: prevState.position }
      })
    }
    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])
  
  console.log(scrollPosition)
  return (
    <nav className={isVisibile? "navbar" : "navbar navbar-hidden"}>
      <div className="navbar-logo-container">
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
          <Link to="/menu"><MdOutlineRestaurantMenu/> Menu</Link>
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