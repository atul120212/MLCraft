import React from "react";
import Div from "../assets/div.png";
import Manya from "../assets/Manya.jpg";
import Jeeya from "../assets/jeeyaa.png";
import atul from "../assets/atul.jpg";
import CoordinatorCard from "./CoordinatorCard";
import FacultyCoordinatorCard from "./FacultyCoordinatorCard";
import "../styles/aboutus.scss";

function AboutUs() {
  const TeamData = [
    
    {
      image: Manya,
      name: "Manya Gupta",
      team: "Management Team",
      link: "https://www.linkedin.com/in/manya-gupta-b9448322a",
      delay:"3000"
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
          Organizers
        </h1>
        <div className="flex justify-center items-center bg-transparent flex-wrap gap-10">
          <FacultyCoordinatorCard
            name="Atul Sharma"
            position="Organizer / WebApp Team"
            img={atul}
            linkedin="https://www.linkedin.com/in/atul-sharma-11735b1b3/"
            delay="0.5s"
          />
          <FacultyCoordinatorCard
            name="Divakar Singh"
            position="Organizer / WebApp Team"
            img={Div}
            linkedin="https://www.linkedin.com/in/divakar-singh/"
            delay="1.25s"
          />
          <FacultyCoordinatorCard
            name="Jeeya Agrawal"
            position="Design and Content Team"
            img={Jeeya}
            linkedin="https://www.linkedin.com/in/jeeya-agrawal-068114228/"
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
          
        </h1>

        <div className="flex justify-center items-center bg-transparent flex-wrap gap-[10rem]">
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


 {/*
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
    */}