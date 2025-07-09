"use client";
import { facilities, ourFacilities } from "@/app";
import { resImg } from "@/app/assets";
import { axiosInstance } from "@/app/lib/axiosInstance";
import Image from "next/image";
import React, { useEffect, useState } from "react";
export interface IWellness {
  our_facilities: string;
  our_facilities_spa: string;
  our_facilities_heated_indoor_pool: string;
  our_facilities_outdoor_pool: string;
  our_facilities_gym: string;
  spa_and_wellness_title: string;
  spa_and_wellness_section_little_description: string;
  spa_and_wellness_section_description: string;
  spa_and_wellness_section_about_room: string;
  spa_and_wellness_section_menu: string;
  pool_title: string;
  pool_section_little_description: string;
  pool_section_description: string;
  out_door_pool_section_description: string;
  in_door_pool_section_description: string;
  firstSpaImageUrl: string;
  secondSpaImageUrl: string;
  thirdSpaImageUrl: string;
  firstPoolImageUrl: string;
  secondPoolImageUrl: string;
  thirdPoolImageUrl: string;
  menuImgUrl: string;
}

export default function OurFacilitiesSection() {
  const [data, setData] = useState<IWellness | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // if (!isClient) return;

    const fetchData = async () => {
      try {
        const language = localStorage.getItem("language") || "en";
        const response = await axiosInstance.get(
          `/api/spa-wellness?lang=${language}`
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
    <div className="max-w-[1250px] w-full m-auto flex flex-col justify-center items-center text-center text-secondaryTextColor ">
      <div className="max-w-[1000px] w-full flex m-auto flex-col justify-center items-center text-center text-secondaryTextColor font-mono-serif gap-6 max-400:gap-3">
        <h2 className="font-semibold text-[40px] italic  max-600:text-[32px] max-400:text-[26px]">
          {data.our_facilities}
        </h2>
      </div>
      <div className="my-20 w-full m-auto  max-500:my-10">
        <div className="bg-secondaryTextColor  py-7 px-2 max-850:p-3 grid grid-cols-4 items-center max-w-[1050px] w-full max-850:grid-cols-1 m-auto  max-500:my-1 ">
          <li className="font-light text-lg text-beige max-800:text-base">
            {data.our_facilities_spa}
          </li>
          <li className="font-light text-lg text-beige max-800:text-base">
            {data.our_facilities_heated_indoor_pool}
          </li>

          <li className="font-light text-lg text-beige max-800:text-base">
            {data.our_facilities_outdoor_pool}
          </li>

          <li className="font-light text-lg text-beige max-800:text-base">
            {data.our_facilities_gym}
          </li>
        </div>
      </div>
    </div>
  );
}
