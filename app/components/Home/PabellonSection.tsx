"use client";
import { logoCol, pabellonSvg } from "@/app/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { axiosInstance } from "@/app/lib/axiosInstance";
export interface Home {
  home_pabellon_section_description_en: string;
  home_pabellon_section_description_ge: string;
  home_pabellon_section_little_description_en: string;
  home_pabellon_section_little_description_ge: string;
  home_rooms_section_title_en: string;
  home_rooms_section_title_ge: string;
  home_rooms_section_description_en: string;
  home_rooms_section_description_ge: string;
  home_rooms_section_little_description_en: string;
  home_rooms_section_little_description_ge: string;
  home_big_description_en: string;
  home_big_description_ge: string;
  home_contact_section_title_en: string;
  home_contact_section_title_ge: string;
  home_contact_section_getInTouch_en: string;
  home_contact_section_getInTouch_ge: string;
  home_contact_section_about_team_en: string;
  home_contact_section_about_team_ge: string;
  home_contact_section_email: string;
  home_contact_section_phone: string;
  hero_imageUrl: string;
  pabellon_imageUrl: string;
}

const PabellonSection = () => {
  const [homeData, setHomeData] = useState<Home | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const language = "en";
  useEffect(() => {
    const fetchData = async () => {
        const language = localStorage.getItem("language") || "en";

      try {
        const response = await axiosInstance.get(`/api/home?lang=${language}`);
        setHomeData(response.data);
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

  if (!homeData) {
    return <div>No data available.</div>;
  }

  return (
    <div className="w-full max-w-[1250px] m-auto flex flex-col items-center my-10 p-4">
      <div className="max-w-[990px] w-full flex flex-col items-center justify-center text-center gap-7">
        <Image
          priority={true}
          src={logoCol}
          alt="logo"
          width={247}
          height={158}
          className="max-500:w-[200px] max-350:w-[170px]"
        />
        <p className="max-w-[700px] w-full font-normal text-xl max-500:text-lg max-350:text-base custom-font">
          {language === "en"
            ? homeData.home_pabellon_section_little_description_en
            : homeData.home_pabellon_section_little_description_ge}
        </p>
        <p className="font-normal text-lg max-500:text-lg max-350:text-base">
          {language === "en"
            ? homeData.home_pabellon_section_description_en
            : homeData.home_pabellon_section_description_ge}
        </p>
      </div>

      <div className="my-20">
        <Image
          priority={true}
          src={pabellonSvg}
          alt="icon"
          width={1540}
          height={928}
          className="max-w-[1600px] w-full"
        />
      </div>
    </div>
  );
};

export default PabellonSection;
