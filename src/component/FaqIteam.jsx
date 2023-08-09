// import { PhoneCallback } from '@mui/icons-material'
import React from "react";
import { Collapse } from "react-collapse";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function FaqIteam({ open, toggle, question, answer, point1, point2, point3 }) {
  const style={
    "list-style-type": "disc",
  }
  const list= (data)=>{
    return (
      <li className="bg-transparent">{data}</li>
    )
  }
  return (
    <div
      className="pt-[10px] bg-transparent text-white"
      id="question-container"
      data-aos="zoom-in"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
    >
      <div
        className="flex justify-between items-center cursor-pointer bg-transparent"
        id="question"
        onClick={toggle}
      >
        <p className="text-[16px] font-semibold bg-transparent">{question}</p>
        <div className="text-[30px] bg-transparent">
          {open ? (
            <AiOutlineMinus className="bg-transparent" />
          ) : (
            <AiOutlinePlus className="bg-transparent" />
          )}
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className="bg-transparent text-left px-10">
          {answer}
          <ul className={"bg-transparent"} style={style}>
          {point1 ? list(point1): null}
          {point2 ? list(point2): null}
          {point3 ? list(point3): null}

          </ul>
        </div>
      </Collapse>
    </div>
  );
}

export default FaqIteam;
