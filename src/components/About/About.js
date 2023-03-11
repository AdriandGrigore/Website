import React from 'react'
import "./About.css"
import {MdOutlineRestaurantMenu,MdDashboardCustomize, MdMenuBook, MdChat, MdBookmarkAdd, MdThumbUp} from "react-icons/md"

function About() {
  return (
    <section id="about" className='about-section'>
        <h2>How it works</h2>
        <div className='about-section-container'>
            <div className='about-section-grid-container'>
                <div className='card'>
                    <MdDashboardCustomize/>
                    <h3>Personalize your request.</h3>
                    <p>
                        Share with us the details of your dreamed meal, 
                        including type of cuisine, preferences and intolerances.
                    </p>
                </div>
                <div className='card'>
                    <MdMenuBook/>
                    <h3>Receive menu proposals</h3>
                    <p>
                        Our chefs will design menus based solely on your wants and needs.
                    </p>
                </div>
                <div className='card'>
                    <MdChat/>
                    <h3>Get chatty with your chefs</h3>
                    <p>
                        Dont be shy to exchange some messages with your chefs until your 
                        perfect menu is ready!
                    </p>
                </div>
                <div className='card'>
                    <MdOutlineRestaurantMenu/>
                    <h3>Choose Menu</h3>
                    <p>Select a preset menu from our page or talk with the chefs about your own!</p>                
                </div>
                <div className='card'>
                    <MdBookmarkAdd/>
                    <h3>Book your experience</h3>
                    <p> 
                        Once you are happy with your choice, submit your payment to secure your experience.
                    </p>
                </div>
                <div className='card'>
                    <MdThumbUp/>
                    <h3>Enjoy!</h3>
                    <p>  
                        All there is left to do is counting down the days till your culinary experience begins!    
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
} 

export default About