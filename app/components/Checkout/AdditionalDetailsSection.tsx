import React from "react";

export default function AdditionalDetailsSection() {
  return (
    <div className="max-w-[1400px] w-full m-auto  text-black ">
      <div className="max-w-[850px] w-full flex flex-col text-black font-mono-serif gap-6 max-400:gap-3 my-20">
        <h2
          className="text-[26px] font-medium
        "
        >
          ADDITIONAL DETAILS
        </h2>
        <div className="w-full grid grid-cols-2 gap-12 my-5">
          <div className="flex flex-col ">
            <label className="text-base font-normal my-4"> Adults</label>
            <input
              type="number"
              placeholder="2"
              className=" placeholder-secondaryTextColor bg-beige outline-none font-serif w-[150px] p-2 max-400:text-base"
            />
            <div className="w-full h-[1px]   bg-[#7f7e7e] " />
          </div> 
          <div className="flex flex-col ">
            <label className="text-base font-normal my-4"> Children</label>
            <input
              type="number"
              placeholder="0"
              className=" placeholder-secondaryTextColor bg-beige outline-none font-serif w-[150px] p-2 max-400:text-base"
            />
            <div className="w-full h-[1px]   bg-[#7f7e7e] " />
          </div>
        <div className="flex flex-col ">
            <label className="text-base font-normal my-4"> Arrival Time</label>
            <input
              type="text"
              placeholder="14:00"
              className=" placeholder-secondaryTextColor bg-beige outline-none font-serif w-[150px] p-2 max-400:text-base"
            />
            <div className="w-full h-[1px]   bg-[#7f7e7e] " />
          </div>
        </div>
      </div>
    </div>
  );
}
