import React from 'react'
import aboutImg from "../../assets/about.jpg"
import "../About/About.css"

function About() {
  return (
    <section className='about-section'>
        <div className='about-container'>
            <img src={aboutImg} alt="aboutImage"/>
            <div>
                <span>
                    HireChef is a platform that helps you to hire a chef for a personal event. We offer a wide range of services to make your event special. Whether you need a private 
                    chef for a dinner party, or you want to cater an event, we have you covered.
                    We understand that finding the right chef can be daunting, so we've made it easy for you.
                </span>
                <span>
                    We believe that everyone should be able to enjoy a delicious meal, no matter what their budget is. That's why we offer affordable rates for our services.
                    Simply tell us what you're looking for, and we'll match you with a chef who fits your needs. You can then view their profile, read reviews, and book them for your event.
                    HireChef is the easiest way to find a great chef for your next event. Try us today!
                </span>
            </div>
        </div>
    </section>
  )
}

export default About