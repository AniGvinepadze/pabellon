"use client";
import { axiosInstance } from "@/app/lib/axiosInstance";
import { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
interface EmailDetails {
  date: string;
  guests: number;
  userName: string;
}
export default function MakrineRestaurantBookSection() {
  const [routerReady, setRouterReady] = useState(false);
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedGuest, setSelectedGuest] = useState<number>(1);
  const popupRef = useRef<HTMLDivElement>(null);

  const [name, setName] = useState<string>("");
  const [guests, setGuests] = useState<number>(0);
  const [date, setDate] = useState<string>("");
  const [data, setData] = useState<EmailDetails | null>(null);

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
  const handleSubmit = async () => {
    try {
      const response = await axiosInstance.post("/contact", {
        name,
        guests: selectedGuest,
        date,
        restaurant: "Pabellón Restaurant",
      });
      const data = await response.data;
      setData(data);

      if (response.status === 200) {
        setName("");
        setGuests(0);
        setDate("");
        setCheckIn(null);
        setSelectedGuest(1);
      }
      console.log("Email sent successfully", response);
    } catch (error) {
      console.error("Error sending email", error);
    }
  };

  return (
    <div className="w-full m-auto text-secondaryTextColor my-20 max-700:my-0">
      <div className="max-w-[1250px] w-full m-auto flex flex-col justify-center">
        <div className="flex justify-center my-10 max-500:my-0">
          <h2 className="italic font-semibold text-[40px] max-500:text-[32px]">
            Book Restaurant
          </h2>
        </div>
        <div className="flex gap-10 items-center relative max-w-[1000px] m-auto w-full justify-between mt-6  max-600:px-5 max-450:px-3 max-450:gap-6 max-400:px-0 ">
          
          <div className="w-full grid grid-cols-4 gap-7 max-750:grid-cols-2 mb-10 max-350:grid-cols-1">
            <div className="flex flex-col w-full">
              <p className="font-normal text-[17px] my-8 max-500:text-[15px] max-500:mb-3 ">
                Select Date
              </p>
              <DatePicker
                selected={checkIn}
                onChange={(date: Date | null) => {
                  setCheckIn(date);
                  if (date) {
                    setDate(date.toISOString());
                  }
                }}
                className="border-none max-w-[400px] w-full text-lg bg-beige placeholder-black outline-none font-serif max-400:text-base cursor-pointer"
                dateFormat="MMMM d, yyyy"
              />
              <div className="w-full h-[1px] bg-black my-3 max-500:my-0" />
            </div>

            <div className="flex flex-col w-full transition-all ease-in-out duration-300  max-400:-mt-1">
              <p className="font-normal text-[17px] my-8 max-500:text-[15px] max-500:mb-0">
                Adults
              </p>
              <input
                type="text"
                value={selectedGuest}
                onClick={handleInputClick}
                className="placeholder-black bg-beige outline-none font-serif max-w-[150px] w-full p-2 max-400:text-base cursor-pointer"
              />
              <div className="w-full h-[1px] bg-black max-500:my-0" />
              {isPopupOpen && (
                <div
                  ref={popupRef}
                  className="absolute top-36 z-50 max-w-[250px] w-full bg-beige shadow-md border rounded-md"
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
            <div className="flex flex-col w-full transition-all ease-in-out duration-300  max-400:-mt-1">
              {" "}
              <p className="font-normal text-[17px] my-8 max-500:text-[15px] max-500:mb-0">
                Name
              </p>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}

                className="placeholder-black bg-beige outline-none font-serif max-w-[150px] w-full p-2 max-400:text-base cursor-pointer"
              />
              <div className="w-full h-[1px] bg-black" />
            </div>
             <div className="w-full  mt-[90px] max-500:mt-[60px]">
            <button
              className="w-full px-2 py-2 text-base font-medium cursor-pointer hover:scale-110 transition-all ease-in-out duration-300 max-400:text-base text-beige bg-secondaryTextColor"
              onClick={handleSubmit}
            >
              Make an Enquiry
            </button>
          </div>
          </div>

         
        </div>
      </div>
    </div>
  );
}
