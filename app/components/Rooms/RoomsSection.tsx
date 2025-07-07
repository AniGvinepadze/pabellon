"use client"
import { artWork, meetingImg, roomImg } from "@/app/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IHomeRooms } from "../Home/RoomsSection";
import { axiosInstance } from "@/app/lib/axiosInstance";

export interface IRooms {
  rooms_title: string;
  rooms_section_little_description: string;
  rooms_section_description: string;
  imageUrl: string;
}

export default function RoomsSection() {
  const [roomMainData, setRoomMainData] = useState<IRooms | null>(null);
  const [roomData, setRoomData] = useState<IHomeRooms[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const language = "en";

  useEffect(() => {
    const fetchData = async () => {
      const language = localStorage.getItem("language") || "en";

      try {
        const response = await axiosInstance.get(`/api/rooms?lang=${language}`);
        setRoomData(response.data);

        // Set roomMainData from the first room in the roomData array
        if (response.data && response.data.length > 0) {
          setRoomMainData(response.data[0]); // Assume you're showing the first room
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

  if (!roomMainData) {
    return <div>No data available.</div>;
  }

  return (
    <div className="max-w-[1400px] w-full m-auto flex flex-col justify-center items-center text-center text-secondaryTextColor my-14 p-16 max-1000:p-10 max-600:p-5 max-450:p-2">
      <div className="max-w-[750px] w-full flex flex-col justify-center items-center text-center text-secondaryTextColor font-mono-serif gap-6 max-400:gap-3">
        <h2 className="font-semibold text-[40px] italic  max-600:text-[32px] max-400:text-[26px]">
          {/* {language === "en"
            ? roomMainData.rooms_title_en
            : roomMainData.rooms_title_ge} */}
            {roomMainData.rooms_title}
        </h2>
        <h2 className="font-normal custom-font text-[30px] italic max-600:text-[22px] max-400:text-[18px]">
          {/* {language === "en"
            ? roomMainData.rooms_section_little_description_en
            : roomMainData.rooms_section_little_description_ge} */}
                {roomMainData.rooms_section_little_description}
        </h2>
        <p className="text-[17px] font-light  max-600:text-[15px] max-400:text-[13px]">
          {/* {language === "en"
            ? roomMainData.rooms_section_description_en
            : roomMainData.rooms_section_description_ge} */}
                {roomMainData.rooms_section_description}
        </p>
      </div>

      <div className=" mt-20 flex flex-col gap-14 justify-center items-center ">
        <Image
          priority={true}
          src={`https://pabellona-admin.s3.us-east-1.amazonaws.com/${roomMainData.imageUrl}`}
          alt="meetingImg"
          width={1420}
          height={877}
        />
      </div>
    </div>
  );
}
