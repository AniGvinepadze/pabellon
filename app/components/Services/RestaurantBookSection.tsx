"use client";
import React, { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";

export default function RestaurantBookSection() {
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
    <div className="w-full m-auto text-secondaryTextColor my-20">
      <div className="max-w-[1300px] w-full m-auto flex flex-col justify-center">
        <div className="flex justify-center my-10 max-500:my-0">
          <h2 className="italic font-semibold text-[40px] max-500:text-[32px]">
            Book Restaurant
          </h2>
        </div>
        <div className="flex gap-10 items-center relative max-w-[1000px] m-auto w-full justify-between mt-6  max-600:px-10 max-450:px-3 max-450:gap-6 max-400:px-0 max-650:flex-col">
          <div className="w-full flex justify-between gap-7 ">
            <div className="flex flex-col w-full cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 ">
              <p className="font-normal text-[17px] my-8 max-500:text-[15px]">
                Select Date
              </p>
              <DatePicker
                selected={checkIn}
                onChange={(date) => setCheckIn(date)}
                selectsStart
                startDate={checkIn}
                endDate={checkOut}
                placeholderText="july 6 ,2025"
                className="border-none max-w-[400px] w-full text-lg bg-beige placeholder-black outline-none font-serif max-400:text-base"
              />
              <div className="w-full h-[1px]  bg-black my-3" />
            </div>

            <div className="flex flex-col w-full  cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 max-600:col-span-2 max-400:-mt-1">
              <p className="font-normal text-[17px] my-8 max-500:text-[15px] ">
                Adults
              </p>
              <input
                type="text"
                placeholder={selectedGuest ? selectedGuest.toString() : "1"}
                onClick={handleInputClick}
                className=" placeholder-black bg-beige outline-none font-serif max-w-[150px] w-full p-2 max-400:text-base"
              />
              <div className="w-full h-[1px] bg-black " />
              {isPopupOpen && (
                <div
                  ref={popupRef}
                  className="absolute top-9  w-full bg-beige shadow-md border rounded-md"
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
          </div>
          <div className="max-w-[150px] w-full max-650:max-w-[650px] mt-16">
            <button className=" w-full px-2 py-2  text-base font-medium cursor-pointer hover:scale-110  transition-all ease-in-out duration-300 max-400:text-base text-beige  bg-secondaryTextColor">
              make an enquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
