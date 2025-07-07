"use client";
import React, { useState, useEffect } from "react";

import { axiosInstance } from "@/app/lib/axiosInstance";

type AboutUsData = {
  aboutus_title: string;
  aboutus_section_little_description: string;
  aboutus_section_description: string;
};

export default function AboutUsSection() {
  const [data, setData] = useState<AboutUsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  useEffect(() => {
    // if (!isClient) return;

    const fetchData = async () => {
      try {
        const language = localStorage.getItem("language") || "en";
        const response = await axiosInstance.get(
          `/api/aboutUs?lang=${language}`
        );
        const resData = await response.data;
        console.log(resData);
        setData(resData);
      } catch (err: any) {
        setError(err.message ?? "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // if (!isClient) {
  //   return null;
  // }

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
      <div className="w-full flex flex-col justify-center items-center text-center text-secondaryTextColor font-mono-serif gap-6 max-400:gap-3">
        <h2 className="font-semibold text-[40px] italic  max-600:text-[32px] max-400:text-[26px] ">
          {data.aboutus_title}
        </h2>
        <p className="text-[26px] font-light max-w-[780px] max-600:text-[15px] max-400:text-[13px] custom-font">
          {data.aboutus_section_little_description}
        </p>
        <p className="text-[17px]">{data.aboutus_section_description}</p>
      </div>
      <div className="my-20">
        <video className="max-w-[1600px] w-full" controls autoPlay loop muted>
          <source src="/videos/PABELLON-STORY-NEW-V1-SD.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
