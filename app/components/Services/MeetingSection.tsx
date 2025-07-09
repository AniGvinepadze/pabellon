"use client";
import { artWork, meetingImg } from "@/app/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IRestauramt } from "./RestaurantSection";
import { axiosInstance } from "@/app/lib/axiosInstance";

export default function MeetingSection() {
  const [restaurantData, setRestaurantData] = useState<IRestauramt | null>(
    null
  );

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const language = "en";

  useEffect(() => {
    const fetchData = async () => {
      const language = localStorage.getItem("language") || "en";

      try {
        const response = await axiosInstance.get(
          `/api/services?lang=${language}`
        );
        setRestaurantData(response.data);

        if (response.data && response.data.length > 0) {
          setRestaurantData(response.data[0]);
        }
      } catch (err: any) {
        setError(err.message ?? "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!restaurantData) {
    return <div>No data available.</div>;
  }
  return (
    <div className="max-w-[1250px] w-full m-auto flex flex-col justify-center items-center text-center text-secondaryTextColor my-20">
      <div className="max-w-[1000px] w-full flex flex-col justify-center items-center text-center text-secondaryTextColor font-mono-serif gap-6 max-400:gap-3">
        <h2 className="font-semibold text-[40px] italic  max-600:text-[32px] max-400:text-[26px]">
          {restaurantData.meetings_and_events_title}
        </h2>
        <h2 className="font-normal text-[30px] italic max-600:text-[22px] max-400:text-[18px] custom-font">
          {restaurantData.meetings_and_events_section_little_description}
        </h2>
        <p className="text-[17px] font-light  max-600:text-[15px] max-400:text-[13px]">
          {restaurantData.meetings_and_events_section_description}
        </p>
      </div>

      <div className=" my-20 flex flex-col gap-14 justify-center items-center">
        <Image
          priority={true}
          src={`https://pabellona-admin.s3.us-east-1.amazonaws.com/${restaurantData.meetingsAndEventsImageUrl}`}
          alt="meetingImg"
          width={1420}
          height={877}
        />
        <Image
          priority={true}
          src={`https://pabellona-admin.s3.us-east-1.amazonaws.com/${restaurantData.artImageUrl}`}
          alt="artwork"
          width={1011}
          height={675}
        />
      </div>
    </div>
  );
}
