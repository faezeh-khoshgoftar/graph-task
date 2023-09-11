import React from "react";
import airplane from "../../assets/images/airplane.png";
import "./Card.css";

function BottomFront({ item }) {
  return (
    <div className="h-full overflow-hidden relative">
      <div className="bg-red-700 w-32 pl-2 skew-y-[-25deg] text-white absolute">
        Economy
      </div>

      <div className="grid grid-cols-3 gap-x-5 py-5 px-14 h-full">
        <div className=" items-center flex flex-col justify-between ">
          <p>From</p>
          <p className="font-bold text-xl lg:text-2xl">{item.src.iso3}</p>
          <p className="text-center">{item.src.airline}</p>
        </div>

        <div className=" items-center flex flex-col justify-end">
          <div className="flex items-center">
            <div className="rounded w-2 h-2 bg-gray-700 circle"></div>
            <img src={airplane} alt="airplane" className="mr-5" />
            <div className="rounded w-2 h-2 bg-gray-700 circle"></div>
          </div>
          <div className="mt-2 mx-auto p-2 	w-24 text-center rounded bg-gray-400">
            ${item.price}
          </div>
        </div>

        <div className=" items-center flex flex-col justify-between ">
          <p>To</p>
          <p className="font-bold text-xl lg:text-2xl">{item.dst.iso3}</p>
          <p className="text-center">{item.dst.airline}</p>
        </div>
      </div>
    </div>
  );
}

export default BottomFront;
