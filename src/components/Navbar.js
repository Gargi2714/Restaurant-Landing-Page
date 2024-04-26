import React, {useRef}from 'react'
import "../CSS/style.css";
import logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import {cart} from "../Data";


const Navbar = () =>{
    const searchRef=useRef();
    const cartRef=useRef();
    const navbarRef=useRef();

    const searchHandle = () =>{
        const searchElement = searchRef.current;
        searchElement.classList.toggle("active");
    }
    const cartHandle= ()=>{
        const cartContainer = cartRef.current;
        cartContainer.classList.toggle("active");
        if (cartContainer.classList.contains("active")) {
            cartContainer.style.right = "0"; 
        } else {
            cartContainer.style.right = "-100%";
        }
    }

    const navbarHandler=() =>{
        const navbar = navbarRef.current;
        navbar.classList.toggle("active");
        if( navbar.classList.contains("active")){
            navbar.style.right="0";
        }
        else{
            navbar.style.right="-100%";
        }
    }
    return(
        <div>
            <header className='header' >
                <div>
                   <img src={logo} className='logo'/>
                </div>
                <nav className='navbar' ref={navbarRef}>
                    <a href='#'>Home</a>
                    <a href='#about'>About</a>
                    <a href='#menu'>Menu</a>
                    <a href='#products'>Products</a>
                    <a href='#review'>Review</a>
                    <a href='#contact'>Contact</a>
                    <a href='#blogs'>Blogs</a>
                </nav>
                <div className='icons'>
                    <div><CiSearch  className='search' onClick={searchHandle}/></div>
                    <div ><FaShoppingCart className='cart' onClick={cartHandle}/></div>
                    <div><TiThMenu  className="menu-bar"
                    id='menu-btn' onClick={navbarHandler}/></div>
                </div>
                <div className='search-bar' ref={searchRef}>
                    <input type="text" 
                    placeholder="Search here.." 
                    id="search-box"
                    />
                   <label htmlFor='search-box'>
                     <CiSearch className='search-icon' />
                  </label>
                </div>
                <div  className='cart-item-container' ref={cartRef}> 
                {
                   cart.map((item, index) => (
                    <div className='cart-item'>
                        <img src={item.img} className='itemimage' />
                        <div className='content'>
                            <h2>Cart item 01</h2>
                            <div className='price'>$20.00</div>
                        </div>
                        <span >
                            <IoMdClose className='close'  />
                        </span>
                    </div>
                    ))
                }
                <a className="btn" href='#'>
                    CheckOut Now
                </a>
                </div>
            </header>
        </div>
    )
}
export default Navbar;