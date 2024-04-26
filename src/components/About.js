import React from "react";
import "../CSS/style.css";
import about from "../assets/about.jpg";

const About= () =>{
    return(
        <>
        <div className="about" id="about">
            <h1 className="heading">
                <span>ABOUT</span> 
               <p>US</p>
            </h1>
            <div className="row">

                <div >
                    <img src={about} alt="about" className="img"/>
                </div>
                <div className="content">
                    <h3>What Makes Our Food Special?</h3>
                    <br/>
                    <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Voluptatibus Qui Ea Ullam, Enim Tempora Ipsum Fuga Alias Quae Ratione A Officiis Id Temporibus Autem? Quod Nemo Facilis Cupiditate. Ex, Vel?
                    <br/>
                    <br/>
                    Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Odit Amet Enim Quod Veritatis, Nihil Voluptas Culpa! Neque Consectetur Obcaecati Sapiente?
                    </p>
                    <br/>
                    <button className="aboutbtn">Learn More</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default About;