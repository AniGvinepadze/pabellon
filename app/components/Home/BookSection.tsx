"use client";
import React, { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function BookSection() {
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedGuest, setSelectedGuest] = useState<number | null>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setIsPopupOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputClick = () => {
    setIsPopupOpen(true);
  };

  const handleSelect = (value: number) => {
    setSelectedGuest(value);
    setIsPopupOpen(false);
  };
  return (
    <div className=" max-w-[1600px] w-full m-auto my-7 p-5">
      <div className=" max-w-[1600px] w-full flex flex-col justify-center items-center text-center">
        <h2 className="text-[40px] font-normal my-10 max-500:my-4 max-550:text-[34px] max-450:text-[30px] max-400:text-[25px] max-350:text-[21px] max-300:text-[18px] max-300:my-1">
          Book Your Stay At Pabellon
        </h2>
        <div className="grid grid-cols-4 gap-10 items-center relative max-w-[800px] m-auto w-full justify-between mt-6 max-600:grid-cols-2 max-600:px-10 max-450:px-3 max-450:gap-6 max-400:px-0">

        <div className="flex flex-col w-full cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 ">
            <DatePicker
              selected={checkIn}
              onChange={(date) => setCheckIn(date)}
              selectsStart
              startDate={checkIn}
              endDate={checkOut}
              placeholderText="Check-in"
              className="border-none text-lg  placeholder-black outline-none font-serif max-400:text-base"
            />
            <div className="w-full h-[1px] bg-black my-3" />
          </div>

          <div className="flex flex-col  w-full mt-1 cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 ">
            <DatePicker
              selected={checkOut}
              onChange={(date) => setCheckOut(date)}
              selectsEnd
              startDate={checkIn}
              endDate={checkOut}
              placeholderText="Check-Out"
              className="border-none  placeholder-black  outline-none font-serif w-[150px] max-400:text-base"
            />
            <div className="w-full h-[1px] bg-black my-3" />
          </div>
          <div className="flex flex-col  w-full -mt-3 cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 max-600:col-span-2">
            <input
              type="text"
              placeholder={selectedGuest ? selectedGuest.toString() : "1"}
              onClick={handleInputClick}
              className=" placeholder-black outline-none font-serif w-[150px] p-2 max-400:text-base"
            />
            <div className="w-full h-[1px] bg-black " />
            {isPopupOpen && (
              <div
                ref={popupRef}
                className="absolute top-9  w-full bg-white shadow-md border rounded-md"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
                  <div
                    key={number}
                    className="p-[5px] hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleSelect(number)}
                  >
                    <p>{number} People</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="max-600:col-span-2">
            <button className="max-w-[140px] w-full text-lg font-medium cursor-pointer hover:scale-110  transition-all ease-in-out duration-300 max-400:text-base">
              Book
            </button>
            <div className="hidden w-full h-[1px] bg-black my-3 max-600:flex" />
          </div>
        </div>
      </div>
    </div>
  );
}
