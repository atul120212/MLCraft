import React, { useState } from "react";
import FaqIteam from "./FaqIteam";

import "../styles/faq.scss";

function Faq() {
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };
  const faqData = [
    {
      question: "Are Registration/Ticket for the Event(s) paid?",
      answer:
        "Absolutely NO. The Tickets solely depend on your yes to RSVP mail. And the way to get RSVP mail goes through filling out the registration form.",
    },
    {
      question: "Is GDG Cloud Noida for only Cloud enthusiasts?",
      answer:
        "Umm, Not entirely. We are a Developer Group for everyone to learn everything from the Android, Chrome, Drive, and Google Cloud platforms, to product APIs like the Cast API, Maps API, and YouTube API.",
    },
    {
      question:
        "How should I stay updated with the Upcoming events of GDG Cloud Noida?",
      answer:
        "It’s very simple, just click on the ‘+Join’ button by visiting: https://www.commudle.com/communities/gdg-cloud-noida and you’re good to go to receive all the updates from GDG Cloud Noida through emails.",
    },
    {
      question: "What does GDG Cloud Noida Do?",
      answer:
        "GDG Cloud is a community of developers who are dedicated to helping others learn and connect. GDG organizers plan and host meet-up events on a wide range of technical topics typically on a monthly basis in a location near them.",
    },
    {
      question: "What do we will get by attending GDG Cloud Noida events?",
      answer:
        "Besides the knowledge and networking with professionals and like-minded folks, there are some extra goodies for our audience in our time-to-time events.",
    },
    {
      question: "Who can join GDG Cloud Noida Community as a community member?",
      answer:
        "Anyone who is interested in learning about Google's technologies, connecting with other developers, and growing their skillset is encouraged to join GDG Cloud Noida.",
    },
  ];
  return (
    <div
      className="flex justify-center items-center bg-transparent flex-col py-[20px]"
      id="FAQ"
    >
      <h1
        className="text-white bg-transparent text-center mb-1"
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        Frequently Asked Questions
      </h1>
      <div className="flex justify-center items-center bg-transparent flex-col">
        {faqData.map((data, index) => {
          return (
            <FaqIteam
              key={index}
              open={index === open}
              question={data.question}
              answer={data.answer}
              point1={data.point1}
              point2={data.point2}
              point3={data.point3}
              toggle={() => toggle(index)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Faq;
