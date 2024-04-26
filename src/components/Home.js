import React from 'react'
import "../CSS/style.css";
import bgimg from "../assets/bgimg.jpeg"
const Home =() =>{
    return(
        <div className='container'> 
            <div className='img-container'>
                <img src={bgimg} className='bg-img' alt='Background'/> 
                <h1 className='overlay-text'>Fresh 
                <span className='foodtext'> Food in the </span> 
               <br/> Morning
               <p className='para'>Hundreds of flavors under one roof </p>
               <button className='getbtn'>Get Yours now</button>
               </h1> 
            </div>
        </div>
    )
} 
export default Home;