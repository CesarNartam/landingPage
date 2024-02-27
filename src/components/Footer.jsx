import React from "react";
import Logo from "../assets/Logo.svg";
import { BsTwitterX } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer-section-one">
               <div className="footer-logo-container">
                    <img src={Logo} alt="" />
                </div> 
                <div className="footer-icons">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        < BsTwitterX />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <SiLinkedin/>
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <BsYoutube/>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF/>
                    </a>
                    
                </div>
            </div>
            <div className="footer-section-two">
                <div className="footer-section-columns">
                    <span>Calidad</span>
                    <span>Ayuda</span>
                    <span>Compartir</span>
                    <span>Carreras</span>
                    <span>Testimonio</span>
                    <span>Nuestro trabajo</span>
                </div>
                <div className="footer-section-columns">
                    <span>961-249-1239</span>
                    <span>cesarnarcia@gmail.com</span>
                    <span>sirsen2418@gmail.com</span>
                    <span>cent1802@hotmail.com</span>
                </div>
                <div className="footer-section-columns">
                    <span>Términos & Condiciones</span>
                    <span>Política de privacidad</span>
                </div>
            </div>
            
        </div>
    )
}

export default Footer;