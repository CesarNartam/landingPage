import React from "react";
import AboutBackground from "../assets/about-background.png";
import AboutBackgroundImage from "../assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
    return (
        <div className="about-section-container">
            <div className="about-background-image-container">
                <img src={AboutBackground} alt="" />
            </div>
            <div className="about-section-image-container">
                <img src={AboutBackgroundImage} alt="" />
            </div>
            <div className="about-section-text-container">
                <p className="primary-subheading">
                    Descubrir
                </p>
                <h1 className="primary-heading">
                    ¿Qué es Foodie?
                </h1>
                <p className="primary-text">
                Foodie es una plataforma que te permite
                    conocer más sobre comida típica local,
                    nacional e internacional: 
                    un poco de su historia,
                    información nutrimental y dónde puedes adquirir estos
                    platillos.
                </p>
                <div className="about-buttons-container">
                    <a href="/home.jsx">
                        <button className="secondary-button">Descubrir más</button>
                    </a>
                    
                </div>
            </div>
        </div>
    )
}

export default About;