"use client";
import { axiosInstance } from "@/app/lib/axiosInstance";
import React, { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";

type BookResData = {
  book_title: string;
  check_in: string;
  check_out: string;
  bookBtn: string;
  select_date: string;
  adults: string;
};

function Spinner({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-block h-5 w-5 animate-spin rounded-full border-2 border-current border-r-transparent ${className}`}
      aria-hidden="true"
    />
  );
}

export default function RestaurantBookSection() {
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedGuest, setSelectedGuest] = useState<number | null>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  const [data, setData] = useState<BookResData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // for backend payload clarity (string ISO date + numeric guests)
  const [date, setDate] = useState<string>("");

  // submit UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const language = localStorage.getItem("language") || "en";
        const response = await axiosInstance.get(`/api/bookServices?lang=${language}`);
        const resData = await response.data;
        setData(resData);
      } catch (err: any) {
        setError(err.message ?? "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setIsPopupOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputClick = () => setIsPopupOpen(true);

  const handleSelect = (value: number) => {
    setSelectedGuest(value);
    setIsPopupOpen(false);
  };

  const handleSubmit = async () => {
    // make sure we always send a defined number for guests and a real date string
    const guestsNum = selectedGuest ?? 0;
    if (!date || guestsNum <= 0) {
      // optional: surface a tiny inline error; for now just stop submit
      return;
    }

    setIsSubmitting(true);
    setSubmitSuccess(false);
    setError(null);

    try {
      const response = await axiosInstance.post("/contact", {
        guests: Number(guestsNum),       // <-- ensure number (no undefined)
        date,                            // <-- ISO string from DatePicker
        restaurant: "Pabellón Restaurant",
      });

      if (response.status === 200) {
        setSubmitSuccess(true);
        // reset form
        setCheckIn(null);
        setCheckOut(null);
        setSelectedGuest(null);
        setDate("");
        // hide success after a moment
        setTimeout(() => setSubmitSuccess(false), 2200);
      }
      console.log("Email sent successfully", response);
    } catch (err: any) {
      console.error("Error sending email", err);
      setError(err?.message ?? "Failed to send. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-600">Error: {error}</div>;
  if (!data) return <div className="text-center py-10">No data available.</div>;

  return (
    <div className="w-full m-auto text-secondaryTextColor my-40 max-700:my-0">
      <div className="max-w-[1250px] w-full m-auto flex flex-col justify-center">
        <div className="flex justify-center my-10 max-500:my-0">
          <h2 className="italic font-semibold text-[40px] max-500:text-[32px]">
            {submitSuccess ? "Booked!" : data.book_title}
          </h2>
        </div>

        <div className="flex gap-10 items-center relative max-w-[1000px] m-auto w-full justify-between mt-6  max-600:px-10 max-450:px-3 max-450:gap-6 max-400:px-0 max-650:flex-col">
          <div className="w-full flex justify-between gap-7 ">
            <div className="flex flex-col w-full cursor-pointer transition-all ease-in-out duration-300 ">
              <p className="font-normal text-[17px] my-8 max-500:text-[15px]">
                {data.select_date}
              </p>
              <DatePicker
                selected={checkIn}
                onChange={(d: Date | null) => {
                  setCheckIn(d);
                  setDate(d ? d.toISOString() : "");
                }}
                selectsStart
                startDate={checkIn}
                endDate={checkOut}
                placeholderText={data.check_in}
                className="border-none max-w-[400px] w-full text-lg bg-beige placeholder-black outline-none font-serif max-400:text-base cursor-pointer"
                isClearable
              />
              <div className="w-full h-[1px] bg-black my-3" />
            </div>

            <div className="flex flex-col w-full cursor-pointer transition-all ease-in-out duration-300 max-600:col-span-2 max-400:-mt-1">
              <p className="font-normal text-[17px] my-8 max-500:text-[15px] ">
                {data.adults}
              </p>
              <input
                type="text"
                placeholder={selectedGuest ? `${selectedGuest} Guests` : "Guests"}
                onClick={handleInputClick}
                readOnly
                className="placeholder-black bg-beige outline-none font-serif max-w-[150px] w-full p-2 max-400:text-base cursor-pointer"
              />
              <div className="w-full h-[1px] bg-black " />
              {isPopupOpen && (
                <div
                  ref={popupRef}
                  className="absolute top-36 w-full bg-beige shadow-md border rounded-md "
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
                    <div
                      key={number}
                      className="p-[5px] hover:bg-[#d7cebd] cursor-pointer"
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
            <button
              className="w-full px-2 py-2 text-base font-medium cursor-pointer hover:scale-110 transition-all ease-in-out duration-300 max-400:text-base text-beige bg-secondaryTextColor disabled:opacity-60 disabled:hover:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              onClick={handleSubmit}
              disabled={isSubmitting || !date || !selectedGuest}
              aria-busy={isSubmitting}
              aria-live="polite"
            >
              {isSubmitting ? (
                <>
                  <Spinner className="h-4 w-4" />
                  Sending…
                </>
              ) : (
                data.bookBtn
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
