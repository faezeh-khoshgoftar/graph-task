import React, { useState } from "react";
import "./Card.css";
import Top from "./Top";
import BottomFront from "./BottomFront";
import BottomBack from "./BottomBack";

function Card({ item }) {
  console.log("item", item);
  const [bottomOpen, setBottomOpen] = useState(false);
  const bottomHandler = () => {
    setBottomOpen(!bottomOpen);
  };
  return (
    <div
      className={`cursor-pointer relative h-[180px] shadow-md lg:mb-[180px] ${
        bottomOpen ? "margin" : "no-margin"
      }`}
      onClick={bottomHandler}
    >
      <div className="w-full h-full bg-white absolute top-0 rounded-lg">
        <Top item={item} />
      </div>
      <div
        className={`rounded-lg bg-white w-full h-full absolute top-0 ${
          bottomOpen ? "bottom-open" : "bottom-close"
        }`}
      >
        {bottomOpen ? (
          <div className="bottom-back border-dashed border-slate-300 border-t-2 h-full">
            <BottomBack item={item} />
          </div>
        ) : (
          <div className="bottom-front h-full">
            <BottomFront item={item} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
