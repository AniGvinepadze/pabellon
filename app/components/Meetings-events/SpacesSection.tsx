"use client";
import { facilities, sapces, sapces2 } from "@/app";
import { artWork } from "@/app/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { iMeeting } from "./ConferenceSection";
import { axiosInstance } from "@/app/lib/axiosInstance";

export default function SpacesSection() {
  const [data, setData] = useState<iMeeting | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const language = localStorage.getItem("language") || "en";
        const response = await axiosInstance.get(
          `/api/meetings-events?lang=${language}`
        );
        const resData = await response.data;
        if (response.data && response.data.length > 0) {
          setData(response.data[0]);
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
    return <div className="text-center py-10">Loading...</div>;
  }
  if (error) {
    return <div className="text-center py-10 text-red-600">Error: {error}</div>;
  }
  if (!data) {
    return <div className="text-center py-10">No data available.</div>;
  }

  return (
    <div className="max-w-[1250px] w-full m-auto flex flex-col justify-center items-center text-center text-secondaryTextColor">
      <div className="max-w-[1000px] w-full flex flex-col justify-center items-center text-center text-secondaryTextColor font-mono-serif gap-6 max-400:gap-3">
        <h2 className="font-semibold text-[40px] italic  max-600:text-[32px] max-400:text-[26px]">
          {data.spaces_title}
        </h2>
      </div>
      <div className="max-w-[1200px] bg-secondaryTextColor w-full my-20 p-7 max-750:p-2 flex flex-col justify-center items-center">
        <div className=" grid grid-cols-3  max-w-[850px] w-full max-750:grid-cols-1 ">
          <li className="font-light text-xl text-beige max-800:text-lg">
            {data.spaces_meeting_room}
          </li>
          <li className="font-light text-xl text-beige max-800:text-lg">
            {data.spaces_boardroom}
          </li>
          <li className="font-light text-xl text-beige max-800:text-lg">
            {data.spaces_ballroom}
          </li>
        </div>
      </div>
      <Image
        priority={true}
        src={`https://pabellona-admin.s3.us-east-1.amazonaws.com/${data.artWorkImageUrl}`}
        alt="artwork"
        width={1011}
        height={675}
      />
    </div>
  );
}
