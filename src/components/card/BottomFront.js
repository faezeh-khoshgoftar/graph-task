import React from "react";
import { dateFormat } from "../../utils/dateFormat";
import airplane from "../../assets/images/airplane.png";
import "./Card.css";

function BottomFront({ item }) {
  return (
    <div className="h-full flex flex-col justify-between overflow-hidden relative">
      <div className="bg-red-700 w-32 pl-2 skew-y-[-25deg] text-white absolute">
        Economy
      </div>
      <div className="grid grid-cols-4 gap-x-5 pt-5 px-14">
        <img
          src={item.logoSrc}
          alt="logoSrc"
          /* height="51px" */
          className="col-span-1 self-center"
        />
        <div className="grid grid-cols-3 gap-x-1 col-span-3">
          <div className="text-center">
            <p className="text-gray-700">{item.src.country}</p>
            <p className="font-bold text-xl lg:text-2xl">
              {dateFormat(item.src.time).localeTime}
            </p>
            <p className="text-gray-700">
              {dateFormat(item.src.time).localeDate}
            </p>
          </div>
          <img src={airplane} alt="airplane" width="77px" height="67px" />
          <div className="text-center">
            <p className="text-gray-700">{item.dst.country}</p>
            <p className="font-bold text-xl lg:text-2xl">
              {dateFormat(item.dst.time).localeTime}
            </p>
            <p className="text-gray-700">
              {dateFormat(item.dst.time).localeDate}
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto p-2 border-dashed border-2 border-slate-500	w-24 text-center rounded">
        ${item.price}
      </div>
    </div>
  );
}

export default BottomFront;
