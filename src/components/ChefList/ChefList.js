import React from 'react'
import chef1 from "../../assets/chef1.jpg"
import chef2 from "../../assets/chef2.jpg"
import chef3 from "../../assets/chef3.jpg"
import {AiFillStar} from "react-icons/ai"
import "../ChefList/ChefList.css"


function ChefList() {
    return (
        <div className='chef-section-container' id="chefs">
            <h2>Meet our chefs</h2>
            <div className='chef-section-grid-container'>
                <img src={chef1} alt="chefPhoto" loading='lazy'/>
                <div className='chef-description'>
                    <h3>Lisa Quinn</h3>
                    <span>Rating: 4.7<AiFillStar/></span>
                    <p> Based in Toronto, 20 years of experience,  she manages every time to delight her customers with colorful and delicious dishes. 
                        Lisa loves and respects her job and because of that she is using only fresh local products.
                    </p>
                    <a href="/contact">Book a meeting</a>
                </div>
                <img src={chef2} alt="chefPhoto" loading='lazy'/>
                <div className='chef-description'>
                    <h3>Ben Malone</h3>
                    <span>Rating: 4.2 <AiFillStar/></span>
                    <p>Based in Springfield, 8 years of experience,Ben is one of our youngest chefs in our team . He has a special talent and love for Asian food, famous for its combination of  spices,
                        he will make sure that you will enjoy the most amazing culinary experience. 
                    </p>
                    <a href="/contact">Book a meeting</a>
                </div>
                <img src={chef3} alt="chefPhoto" loading='lazy'/>
                <div className='chef-description'>
                    <h3>Liam Pierce</h3>
                    <span>Rating: 4.5 <AiFillStar/></span>
                    <p>Based in Miami, he is best known for his delicious seafood dishes, and not only. His 15 years of experience can prove all his knowledge in culinary arts.
                        Also his platings skills are known to be the best. 
                    </p>
                    <a href="/contact">Book a meeting</a>
                </div>
            </div>
        </div>

    )
}

export default ChefList