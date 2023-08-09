import React from "react";
import Dev from "../assets/Dev.png";
import swati from "../assets/swati.jpg";
import arifa from "../assets/arifa.jpg";
import javed from "../assets/javed.jpg";
import zaid from "../assets/zaid.jpg";
import shekhar from "../assets/shekhar.jpg";
import gautam from "../assets/Gautam.jpeg";
import ashu from "../assets/ashu.jpg";
import harshit from "../assets/harshit.jpg";
import vishesh from "../assets/vishesh.jpg";
import Satakshi from "../assets/Satakshi.jpeg";
import Ashutosh from "../assets/Ashutosh.jpeg";
import nikhil from "../assets/nikhil.jpeg";
import kirtika from "../assets/kirtika.jpg";

import aniketa from "../assets/aniketa.jpg";
import ashish from "../assets/Ashish.jpg";
import atul from "../assets/atul.jpg";
import shushilSir from "../assets/shushil-sir.jpeg";
import pushkarSir from "../assets/pushkar-sir.jpeg";
import pulkitaMam from "../assets/pulkita-mam.jpeg";
import CoordinatorCard from "./CoordinatorCard";
import FacultyCoordinatorCard from "./FacultyCoordinatorCard";
import "../styles/aboutus.scss";

function AboutUs() {
  const TeamData = [
    {
      image: zaid,
      name: "MOHD ZAID KHAN",
      team: "Management Team",
      link: "https://www.linkedin.com/in/zeddkhan03/",
      delay:"500"
    },
    {
      image: ashish,
      name: "Ashish chanchal",
      team: "Management Team",
      link: "https://www.linkedin.com/in/ashish2002",
      delay:"1300"
    },
    {
      image: gautam,
      name: "Gautam Manak",
      team: "Management Team",
      link: "https://www.linkedin.com/in/gautammanak1/",
      delay:"2000"
    },
    {
      image: Dev,
      name: "Dev Chauhan",
      team: "WebApp Team",
      link: "https://www.linkedin.com/in/dev-chauhan-44ba15247/",
      delay:"3000"
    },
    {
      image: atul,
      name: "Atul Sharma",
      team: "WebApp Team",
      link: "https://www.linkedin.com/in/atul-sharma-11735b1b3/",
      delay:"500"
    },
    {
      image: ashu,
      name: "Ashu",
      team: "Graphic Design Team",
      link: "https://www.linkedin.com/in/ashu-kr/",
      delay:"1300"
    },
    {
      image: aniketa,
      name: "Aniketa",
      team: "Design and Social Media Team",
      link: "https://www.linkedin.com/in/aniketakumari/",
      delay:"2000"
    },
    {
      image: swati,
      name: "SWATI PALIWAL",
      team: "Graphic Design Team",
      link: "https://www.linkedin.com/in/swati-paliwal-65b4471a2/",
      delay:"3000"
    },
    {
      image: Ashutosh,
      name: "Ashutosh Rana ",
      team: "Content Writer Team",
      link: "https://www.linkedin.com/in/ashu-kr/",
      delay:"500"
    },
    {
      image: Satakshi,
      name: "Satakshi Jain ",
      team: "Management Team",
      link: "https://www.linkedin.com/in/satakshi-jain-6b9306203",
      delay:"1300"
    },
    {
      image: javed,
      name: "Javed Ahmed Khan",
      team: "Management Team",
      link: "https://www.linkedin.com/in/javedakhan2010",
      delay:"2000"
    },
    {
      image: harshit,
      name: "Harshit Goel ",
      team: "Social Media Team",
      link: "https://www.linkedin.com/in/harshit-goel-3880a022b",
      delay:"3000"
    },
    {
      image: shekhar,
      name: "Shekhar Patel ",
      team:  "Video Editing Team",
      link: "https://www.linkedin.com/in/shekhar-patel-149bb0224",
      delay:"500"
    },
    {
      image: arifa,
      name: "Aarifa",
      team:  "Sponsorship and Management team ",
      link: "https://www.linkedin.com/in/aarifa-839a62222",
      delay:"1300"
    },
    {
      image: vishesh,
      name: "Vishesh Rai ",
      team:  "Sponsorship and Management team ",
      link: "https://www.linkedin.com/in/vishesh-rai-btech-cse/",
      delay:"2000"
    },
    {
      image: nikhil,
      name: "NIKHIL VERMA ",
      team:  "Sponsorship and Management team ",
      link: "https://www.linkedin.com/in/nikhil-verma-578212189",
      delay:"3000"
    },
    {
      image: kirtika,
      name: "Kirtika goyal  ",
      team:  "Social media Team ",
      link: "https://www.linkedin.com/in/kirtika-goyal",
      delay:"500"
    },
    
  ];
  return (
    <div
      className="flex items-center justify-center min-h-screen flex-col gap-10 py-[50px]"
      id="About-us"
    >
      
      <div className="bg-transparent w-full flex justify-center items-center flex-col gap-10 py-[20px]">
        <h1
          className="text-3xl text-white bg-transparent w-full text-center z-10 uppercase"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          Event Organizers
        </h1>
        <div className="flex justify-center items-center bg-transparent flex-wrap gap-10">
          <FacultyCoordinatorCard
            name="Pushkar Sharan"
            position="Publicis Sapient, Senior Manager, Cloud COE
            NOIDA"
            img={pushkarSir}
            delay="0.5s"
          />
          <FacultyCoordinatorCard
            name="Sushil Kumar"
            position="Wayfair, Staff Software Engineer NOIDA"
            img={shushilSir}
            delay="1.25s"
          />
          <FacultyCoordinatorCard
            name="Pulkita Marwah"
            position="Searce, Cloud Consultant
            GURGAON"
            img={pulkitaMam}
            delay="1.5s"
          />
        </div>
      </div>
      <div className="bg-transparent w-full flex justify-center items-center flex-col gap-10 py-[20px]">
        <h1
          className="text-3xl text-white bg-transparent w-full text-center z-10 uppercase"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          Meet our Team
        </h1>

        <div className="flex justify-center items-center bg-transparent flex-wrap gap-10">
          {TeamData.map(data=>{
            return(
              <CoordinatorCard
            name={data.name}
            position={data.team}
            year=""
            img={data.image}
            linkedin={data.link}
            delay={data.delay}
          />
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
