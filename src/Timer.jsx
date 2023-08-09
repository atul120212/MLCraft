import React from "react";
import "./styles/register.scss";
function Timer(props) {
  return (
    <div
      className="text-white z-10"
      id="timer"
      data-aos="fade-right"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
    >
      <div className="timer-container flex flex-col justify-center items-center ">
        <h2 className="text-white timer-heading bg-transparent uppercase">
          {props.timerHeading}
        </h2>
        <div className="timer flex justify-center items-center">
          <div className="Days">
            <p>{props.timerDays}</p>
            <small>Days</small>
          </div>
          <div className="Hours">
            <p>{props.timerHours}</p>
            <small>Hours</small>
          </div>
          <div className="Minutes">
            <p>{props.timerMinutes}</p>
            <small>Minutes</small>
          </div>
          <div className="Seconds">
            <p>{props.timerSeconds}</p>
            <small>Seconds</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timer;
