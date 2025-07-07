"use client";
import React, { useEffect, useState } from "react";
import { Home } from "./PabellonSection";
import { axiosInstance } from "@/app/lib/axiosInstance";

export default function ContactUsSection() {
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
    <div className="max-w-[980px] w-full m-auto bg-ilialake min-h-[990px] mt-20 flex flex-col items-center justify-center text-center text-secondaryTextColor max-700:bg-center bg-cover  max-1250:mt-0  max-450:mt-0">
      <div className="max-w-[520px] w-full flex flex-col gap-4 max-400:gap-2">
        <h2 className="  font-semibold text-[30px] max-650:text-[25px]">
          {language === "en"
            ? homeData.home_contact_section_title_en
            : homeData.home_contact_section_title_ge}
        </h2>
        <p className="font-light text-base">
          {language === "en"
            ? homeData.home_contact_section_about_team_en
            : homeData.home_contact_section_about_team_ge}
        </p>
        <p className="italic font-normal text-xl custom-font">
          {" "}
          {language === "en"
            ? homeData.home_contact_section_getInTouch_en
            : homeData.home_contact_section_getInTouch_ge}
        </p>
        <div>
          <p className="font-light text-sm">
            Email address : {homeData.home_contact_section_email}
          </p>
          <p className="font-light text-sm">
            Phone : {homeData.home_contact_section_phone}
          </p>
        </div>
      </div>
    </div>
  );
}
