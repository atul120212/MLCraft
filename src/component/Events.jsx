import React from "react";
import "../styles/event.scss";
import cloudCatalyst from "../assets/cloudcatalysttt.jpg";

const Events = () => {
  return (
    <section
      className="relative w-full min-h-[80vh] flex flex-col items-center gap-7 bg-white"
      id="event"
    >
      <h1 className="text-5xl font-extrabold m-5 uppercase">Events</h1>
      <div className="container w-[90%]">
        <div className="blog-card">
          <div className="meta">
            <div
              className="photo"
              style={{ backgroundImage: `url(${cloudCatalyst})` }}
            ></div>
          </div>
          <div className="description">
            <h1>MLCraft - Coder Corps Community - Launch Event</h1>
            <h2>Sep 02, 2023 - CONFERENCE</h2>
            <p>
              MLCraft, the inaugural event of Coder Corps Community, is
              a transformative conference exploring Machine Learning, Web3.O, Blockchain, and AI,
              featuring expert speakers, captivating sessions, and abundant
              networking opportunities.
            </p>
            <p className="read-more">
              <a href="/">
                View Details
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
