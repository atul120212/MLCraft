import React from "react";
import {BsPeople} from "react-icons/bs"
import {AiFillLinkedin,AiOutlineInstagram,AiFillGoogleCircle} from "react-icons/ai"

import "../styles/aboutgdg.scss";

const AboutGDG = () => {
  return (
    <section
      className="min-h-[80vh] w-full flex justify-center items-center"
      id="aboutGDG"
    >
      <div className="about-section">
        <div className="inner-container">
          <h1>About Us</h1>
          <div className="text flex flex-col items-start gap-2">
            <h2>“Alone we can do so little; together we can do so much.”</h2>
            
            <p>And so here we present Coder Corps Community. We are a
            community for developers who are interested in new domains of
            technology especially but not limited to any single technology. We are a
            Group for everyone to learn everything from the AI,ML,Web Development
            Web3.0, and BlockChain, to product APIs like the
            Cast API, Maps API, and YouTube API.</p>
            <ul>
              <h2 className="text-lg font-bold">
                "Our aim is to Connect, Learn and Grow."
              </h2>
              <li>
                <span className="text-lg font-semibold">• Connect</span> - with
                professionals and like-minded developers to know how the world
                is growing using different technologies.
              </li>
              <li>
                <span className="text-lg font-black">• Learn</span> - about
                what's the next big thing to strive for and learn the approaches
                that are 'Zara Hatke'. Learn about various technologies that are
                making the world a better place to live.
              </li>
              <li>
                <span className="text-lg font-black">• Grow</span> - as an
                individual, both personally and professionally. Grow with the
                community of enthusiasts and help the other members to grow as
                well.
              </li>
            </ul>
            <p>And all that too in an unconventional way, that is through hands-on
            workshops, training, events, talks, and meet-ups, both online and in
            person.</p>
            
            <p>Join our dynamic community now to explore more potential to
            make this world a better place.</p>
          </div>
          <div className="skills">
            <a href="https://www.commudle.com/users/CoderCorps"  className="text-4xl hover:text-purple-500"><BsPeople/></a>
            <a href="https://www.linkedin.com/in/coder-corps-831b59237/"  className="text-4xl hover:text-blue-500"><AiFillLinkedin/></a>
            <a href="https://www.instagram.com/coder_corps/"  className="text-4xl hover:text-red-500"><AiOutlineInstagram/></a>
            <a href="https://www.coder-corps.tech/#/"  className="text-4xl hover:text-green-500"><AiFillGoogleCircle/></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGDG;
