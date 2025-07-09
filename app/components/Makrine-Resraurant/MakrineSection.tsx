"use client";
import {
  agroImg,
  logoCol,
  logoCol2,
  makrineImg,
  makrineImg6,
  makrineLogo,
  resImg,
  wellnessImg,
  wellnessImg2,
  wineImg,
} from "@/app/assets";
import { axiosInstance } from "@/app/lib/axiosInstance";
import Image from "next/image";
import React, { useEffect, useState } from "react";
export interface IMakrine {
  makrine_section_little_description: string;
  makrine_section_description: string;
  makrine_restaurant_title: string;
  makrine_restaurant_section_little_description: string;
  makrine_restaurant_section_description: string;
  makrine_restaurant_community_impact: string;
  makrine_restaurant_menu: string;
  restaurant_and_bar_section_title: string;
  restaurant_and_bar_section_description: string;
  lobby_bar_title: string;
  lobby_bar_little_description: string;
  lobby_bar_description: string;
  pool_bar_title: string;
  pool_bar_section_description: string;

  logoImageUrl?: string;
  mainImageUrl?: string;
  makrineRestaurantImageUrl?: string;
  restaurantBarImageUrl: string;
  lobbyImageUrl: string;
  poolImageUrl: string;
}

export default function MakrineSection() {
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
    <div className="max-w-[1250px] w-full m-auto flex flex-col justify-center items-center text-center text-secondaryTextColor">
      <div className="max-w-[850px] w-full flex flex-col justify-center items-center text-center text-secondaryTextColor font-mono-serif gap-6 max-400:gap-3">
        <Image
          priority={true}
          src={makrineLogo}
          alt="logo"
          width={269}
          height={190}
        />
        <h2 className="font-normal text-[30px] italic max-600:text-[22px] max-400:text-[18px] custom-font">
        {restaurantData.makrine_section_little_description}
        </h2>
        <p className="text-[17px] font-light max-w-[780px] max-600:text-[15px] max-400:text-[13px]">
         {restaurantData.makrine_section_description}
        </p>
      </div>
      <div className="my-20">
        <Image
          priority={true}
           src={`https://pabellona-admin.s3.us-east-1.amazonaws.com/${restaurantData.mainImageUrl}`}
          alt="icon"
          width={1440}
          height={890}
          className="max-w-[1600px] w-full "
        />
      </div>
    </div>
  );
}
