"use client";
import {
  agroImg,
  agroLogo,
  logoCol,
  logoCol2,
  resImg,
  wellnessImg,
  wellnessImg2,
  wineImg,
} from "@/app/assets";
import { axiosInstance } from "@/app/lib/axiosInstance";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type AgroData = {
  agro_section_description: string;
  agro_section_little_description: string;
  our_mission_title: string;
  our_mission_description: string;
};

export default function AgroSection() {
    const [data, setData] = useState<AgroData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
      useEffect(() => {
        const fetchData = async () => {
          try {
            const language = localStorage.getItem("language") || "en";
            const response = await axiosInstance.get(
              `/api/agro?lang=${language}`
            );
            const resData = await response.data;
            console.log(resData,'resDataresDataresDataresData');
            setData(resData);
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
    <div className="max-w-[1400px] w-full m-auto flex flex-col justify-center items-center text-center text-secondaryTextColor">
      <div className="max-w-[750px] w-full flex flex-col justify-center items-center text-center text-secondaryTextColor font-mono-serif gap-6 max-400:gap-3">
        <Image
          priority={true}
          src={agroLogo}
          alt="logo"
          width={269}
          height={190}
        />
        <h2 className="font-normal text-[30px] custom-font italic max-600:text-[22px] max-400:text-[18px]">
          {data.agro_section_little_description}
        </h2>
        <p className="text-[17px] font-light max-w-[780px] max-600:text-[15px] max-400:text-[13px]">
          {data.agro_section_description}
        </p>
      </div>
      <div className="my-20">
        <Image
          priority={true}
          src={agroImg}
          alt="icon"
          width={1440}
          height={890}
          className="max-w-[1600px] w-full "
        />
      </div>
    </div>
  );
}
