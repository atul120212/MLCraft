import React from "react";


import "../styles/header.scss";


import logo from "../assets/2.gif";
import ParticlesBg from "./Particles";


function Header() {
  return (
    <div className="flex justify-center items-center text-white" id="header">
      <ParticlesBg/>
      {/* <img src={sketch} className="image" alt="" /> */}
      <div className="header-container relative flex justify-center items-center flex-wrap">
        <div
          className="header-text w-[500px] bg-transparent uppercase flex items-center justify-center flex-col gap-3"
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <img src={logo} alt="" className="w-[200px]" />
          <h1 className="frontend-text text-center text-gray-800 capitalize">
          MLCraft <br/>Coder Corps
          </h1>
        </div>
      </div>
      <div class="arrow">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Header;
