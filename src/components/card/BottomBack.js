import React from "react";
import { dateFormat } from "../../utils/dateFormat";
import { duration } from "../../utils/duration";

function BottomBack({ item }) {
  return (
    <div className="py-5 px-14 h-full grid grid-cols-3 gap-x-5 gap-y-3">
      <div>
        <p className="font-bold text-xl ld:text-2xl">
          {dateFormat(item.src.time).localeTime} -
          {dateFormat(item.dst.time).localeTime}
        </p>
        <p className="text-gray-700">Flight Time</p>
      </div>
      <div>
        <p className="font-bold text-xl lg:text-2xl">
          {duration(item.dst.time, item.src.time)}
        </p>
        <p className="text-gray-700">Duration</p>
      </div>
      <div>
        <p className="font-bold text-xl lg:text-2xl">{item.boarding}</p>
        <p className="text-gray-700">Boarding</p>
      </div>
      <div>
        <p className="font-bold text-xl lg:text-2xl">
          {item.transfer ? "Yes" : "No"}
        </p>
        <p className="text-gray-700">Transfer</p>
      </div>
      <div>
        <p className="font-bold text-xl lg:text-2xl">{item.gates}</p>
        <p className="text-gray-700">Gate</p>
      </div>
      <div>
        <p className="font-bold text-xl lg:text-2xl">{item.seat}</p>
        <p className="text-gray-700">Seat</p>
      </div>
    </div>
  );
}

export default BottomBack;
