import React from "react";
import NavBar from "./NavBar";
import BannerBackground from "../assets/home-banner-background.png";
import BannerImage from "../assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
        <NavBar />
        <div className="home-banner-container">
          <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="" />
          </div>
          <div className="home-text-section">
            <h1 className="primary-heading">
              Tus platillos favoritos
            </h1>
            <p className="primary-text">
              ¡Descubre cómo se preparan tus platillos
              favoritos, un poco de su origen y
              dónde puedes conseguirlos!
            </p>
            <button className="secondary-button">
              <a href="/About.jsx">
                Descubrir <FiArrowRight />
              </a>
            </button>
          </div>
          <div className="home-image-container">
            <img src={BannerImage} alt="" />
          </div>
        </div>
    </div>
  );
};

export default Home;