import React from 'react'
import "../CSS/style.css";
import {menu} from "../Data";
const Menu =() =>{
    return(
        <div className='menu' id="menu"> 
            <h1 className='heading'>
                <span>OUR</span>MENU
            </h1>
            <div className='box-container'>
                {
                    menu.map((item,index) =>{
                        <div className='box'>
                            <img src={item.img} alt="" className='image'/>
                            <h3>Tastey and Healthy</h3>
                            <div className='price'>
                                $15.99<span>20.99</span>
                            </div>
                            <a href="" className='btn'>Add To Cart</a>
                        </div>
                    })
                }
            </div>
        </div>
    )
} 
export default Menu;


