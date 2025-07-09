"use client";
import {
  artWork,
  makrineImg3,
  makrineImg4,
  makrineImg6,
  meetingImg,
  meetingImg1,
  meetingImg3,
  meetingImg4,
} from "@/app/assets";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import React, { useEffect, useState } from "react";
import { meeting } from "@/app";
import ContactUsSection from "../Home/ContactUsSection";
import { IMakrine } from "./MakrineSection";
import { axiosInstance } from "@/app/lib/axiosInstance";

export default function MakrinePoolBarSection() {
  const [restaurantData, setRestaurantData] = useState<IMakrine | null>(null);
  
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const language = "en";
  
    useEffect(() => {
      const fetchData = async () => {
        const language = localStorage.getItem("language") || "en";
  
        try {
          const response = await axiosInstance.get(
            `/api/restaurantbar?lang=${language}`
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
        {restaurantData.pool_bar_title}
        </h2>
        <p className="font-light text-[17px] max-600:text-[15px] max-400:text-[13px]">
        {restaurantData.pool_bar_section_description}
        </p>
      </div>

      <div className=" my-20 flex flex-col gap-14 justify-center items-center">
        <Image
          priority={true}
  src={`https://pabellona-admin.s3.us-east-1.amazonaws.com/${restaurantData.poolImageUrl}`}
          alt="meetingImg"
          width={1420}
          height={877}
        />
      </div>

      <div></div>
    </div>
  );
}
