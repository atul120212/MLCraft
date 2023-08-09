import React from "react";
import "../styles/event.scss";
import cloudCatalyst from "../assets/cloudcatalyst.webp";

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
            <h1>Cloud Catalyst - GDG Cloud Noida - Launch Event</h1>
            <h2>JUL 22, 2023 - CONFERENCE</h2>
            <p>
              Cloud Catalyst, the inaugural event of GDG Cloud Noida chapter, is
              a transformative conference exploring Cloud, DevOps, Data, and AI,
              featuring expert speakers, captivating sessions, and abundant
              networking opportunities.
            </p>
            <p className="read-more">
              <a href="https://gdg.community.dev/events/details/google-gdg-cloud-noida-presents-cloud-catalyst-gdg-cloud-noida-launch-event/  ">
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
