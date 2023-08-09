import React from "react";
import Header from "./component/Header";
import AboutUs from "./component/AboutUs";
import Faq from "./component/Faq";
import AOS from "aos";

import "aos/dist/aos.css";
import AboutGDG from "./component/AboutGDG";
import Events from "./component/Events";

function Home() {
  AOS.init();
  
  return (
    <div>
      <Header />
      <AboutGDG/>
      <Events/>
      <AboutUs />
      <Faq/>
    </div>
  );
}

export default Home;
