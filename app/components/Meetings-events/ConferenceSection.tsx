"use client";
import { meetingImg, resImg } from "@/app/assets";
import { axiosInstance } from "@/app/lib/axiosInstance";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export interface iMeeting {
  conference_ballroom_title: string;
  conference_ballroom_section_little_description: string;
  conference_ballroom_section_description: string;
  spaces_title: string;
  spaces_meeting_room: string;
  spaces_boardroom: string;
  spaces_ballroom: string;
  conference_rooms_title: string;
  conference_rooms_section_description: string;
  conference_rooms_section_little_description: string;
  meeting_room_iliauri: string;
  meeting_room_kamara: string;
  kamara_iliauri: string;

  boardroom_krebuli_room: string;
  ballroom_alazani_hall: string;
  conferenceImageUrl: string;
  artWorkImageUrl: string;
  conferenceRoomsImageUrl: string;
}
export default function ConferenceSection() {
  const [data, setData] = useState<iMeeting | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // if (!isClient) return;

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
    <div className="max-w-[1250px] w-full m-auto flex flex-col justify-center items-center text-center text-secondaryTextColor mt-20">
      <div className="max-w-[1250px] w-full flex flex-col justify-center items-center text-center text-secondaryTextColor font-mono-serif gap-6 max-400:gap-3">
        <h2 className="font-semibold text-[40px] italic  max-600:text-[32px] max-400:text-[26px]">
          {data.conference_ballroom_title}
        </h2>
        <h2 className="font-normal text-[30px] italic max-600:text-[22px] max-400:text-[18px] custom-font">
          {data.conference_ballroom_section_little_description}
        </h2>
        <p className="text-[17px] font-light max-w-[1030px] max-600:text-[15px] max-400:text-[13px]">
          {data.conference_ballroom_section_description}
        </p>
      </div>
      <div className="my-20">
        <Image
          priority={true}
          src={`https://pabellona-admin.s3.us-east-1.amazonaws.com/${data.conferenceImageUrl}`}
          alt="icon"
          width={1540}
          height={940}
          className="max-w-[1600px] w-full "
        />
      </div>
    </div>
  );
}
