"use client";
import {
  artWork,
  conferencee,
  meetingImg,
  meetingImg1,
  meetingImg3,
  meetingImg4,
} from "@/app/assets";
import Image from "next/image";

import React, { useEffect, useState } from "react";
import { meeting } from "@/app";
import ContactUsSection from "../Home/ContactUsSection";
import m1 from "../../../public/assets/meeting1 (1).png";
import m2 from "../../../public/assets/meeting1 (2).png";
import m3 from "../../../public/assets/meeting1 (3).png";
import m4 from "../../../public/assets/meeting1 (4).png";
import { iMeeting } from "./ConferenceSection";
import { axiosInstance } from "@/app/lib/axiosInstance";
export interface iImageData {
  imageUrl: string;
  secondImageUrl: string;
  thirdImageUrl: string;
  fourthImageUrl: string;
}
export default function ConferenceRoomsSection() {
  const [data, setData] = useState<iMeeting | null>(null);
  const [imageData, setImageData] = useState<iImageData | null>(null);
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
    const fetchDataImg = async () => {
      try {
        const language = localStorage.getItem("language") || "en";
        const response = await axiosInstance.get(
          `/api/meetings-eventsImg?lang=${language}`
        );
        const resData = await response.data;
        if (response.data && response.data.length > 0) {
          setImageData(response.data[0]);
        }
      } catch (err: any) {
        setError(err.message ?? "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchDataImg();

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
    <div className="max-w-[1250px] w-full m-auto flex flex-col justify-center items-center text-center text-secondaryTextColor my-20">
      <div className="max-w-[1000px] w-full flex flex-col justify-center items-center text-center text-secondaryTextColor font-mono-serif gap-6 max-400:gap-3">
        <h2 className="font-semibold text-[40px] italic  max-600:text-[32px] max-400:text-[26px]">
          {data.conference_rooms_title}
        </h2>
        <p className="font-light text-[17px] max-600:text-[15px] max-400:text-[13px]">
          {data.conference_rooms_section_description}
        </p>
        <p className="text-[17px] font-light  max-600:text-[15px] max-400:text-[13px]">
          {data.conference_rooms_section_little_description}
        </p>
      </div>

      <div className=" my-20 flex flex-col gap-14 justify-center items-center">
        <Image
          priority={true}
          src={`https://pabellona-admin.s3.us-east-1.amazonaws.com/${data.conferenceRoomsImageUrl}`}
          alt="meetingImg"
          width={1420}
          height={877}
        />
      </div>

      <div className="max-w-[1300px] w-full mb-20 p-7 max-750:p-2 flex flex-col justify-center items-center">
        <div className=" flex gap-10 items-center justify-center text-center m-auto max-w-[950px] w-full max-550:flex-col mb-8 max-550:gap-4">
          <p className="max-w-[250px] w-full font-light text-xl max-800:text-lg max-550:max-w-[300px]">
            {data.meeting_room_iliauri}
          </p>
          <p className="max-w-[250px] w-full font-light text-xl max-800:text-lg max-550:max-w-[300px]">
            {data.meeting_room_kamara}
          </p>
          <p className="font-light max-w-[230px] w-full text-xl max-800:text-lg max-550:max-w-[300px]">
            {data.kamara_iliauri}
          </p>
        </div>
        <div className=" flex gap-10 items-center text-center justify-center max-w-[650px] my-4 w-full max-550:flex-col max-500:my-0 max-550:gap-4">
          <p className="font-light text-xl max-w-[250px] w-full max-800:text-lg max-550:max-w-[320px]">
            {data.boardroom_krebuli_room}
          </p>{" "}
          <p className="font-light text-xl max-w-[250px] w-full max-800:text-lg max-550:max-w-[300px]">
            {data.ballroom_alazani_hall}
          </p>
        </div>
      </div>
      <div className=" w-full">
        <div className="w-full grid grid-cols-4 gap-5 max-750:grid-cols-2">
          <Image
            priority={true}
            src={`https://pabellona-admin.s3.us-east-1.amazonaws.com/${imageData?.imageUrl}`}
            alt="img"
            width={500}
            height={420}
            className="min-h-[420px] object-cover max-w-[400px] w-full  max-450:min-h-[300px]  "
          />
          <Image
            priority={true}
            src={`https://pabellona-admin.s3.us-east-1.amazonaws.com/${imageData?.secondImageUrl}`}
            alt="img"
            width={500}
            height={420}
            className="min-h-[420px] object-cover max-w-[400px] w-full max-450:min-h-[300px] "
          />
          <Image
            priority={true}
            src={`https://pabellona-admin.s3.us-east-1.amazonaws.com/${imageData?.thirdImageUrl}`}
            alt="img"
            width={500}
            height={420}
            className="min-h-[420px] object-cover max-w-[400px] w-full max-450:min-h-[300px] "
          />
          <Image
            priority={true}
            src={`https://pabellona-admin.s3.us-east-1.amazonaws.com/${imageData?.fourthImageUrl}`}
            alt="img"
            width={500}
            height={420}
            className="min-h-[420px] object-cover max-w-[400px] w-full max-450:min-h-[300px] "
          />
        </div>
      </div>
      <div></div>
    </div>
  );
}
