"use client";
import { iliaLake } from "@/app/assets";
import { useLanguage } from "@/app/LanguageContext";
import { axiosInstance } from "@/app/lib/axiosInstance";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type AboutUsData = {
  aboutus_experience_overview: string;
  // aboutus_experience_overview_ge: string;
  aboutus_facilities_and_services: string;
  // aboutus_facilities_and_services_ge: string;
  aboutus_wine_collections_and_story: string;
  // aboutus_wine_collections_and_story_ge: string;
  aboutus_historical_culture_heritage: string;
  // aboutus_historical_culture_heritage_ge: string;
  aboutus_family_tradition: string;
  // aboutus_family_tradition_ge: string;
  aboutus_farmToTable_experience: string;
  // aboutus_farmToTable_experience_ge: string;
  iliaImageUrl: string;
  artWorkImageUrl: string;
};

export default function AboutUsIliasSection() {
  const { language } = useLanguage();
  const [data, setData] = useState<AboutUsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(
          `/api/aboutUs?lang=${language}`,
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        );

        const data = response.data;
        console.log(data);
        setData(data);
      } catch (err: any) {
        setError(err.message ?? "An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [language]);

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
      <div className=" max-w-[850px] w-full flex flex-col justify-center items-center text-center text-secondaryTextColor font-mono-serif gap-16">
        <div className="flex flex-col gap-6">
          <p className="font-light text-[17px] max-500:text-[15px]">
            {data.aboutus_experience_overview}
          </p>
          <p className="font-light text-[17px] max-500:text-[15px]">
            {data.aboutus_facilities_and_services}
          </p>
          <p className="font-light text-[17px] max-500:text-[15px]">
            {data.aboutus_wine_collections_and_story}
          </p>
        </div>
        <Image
          priority={true}
          src={iliaLake}
          alt="ilialake"
          width={678}
          height={602}
        />
      </div>
      <div className="flex flex-col gap-14 justify-center mt-7 max-450:gap-12">
        <p className="font-light text-[17px] max-500:text-[15px]">
          {data.aboutus_historical_culture_heritage}
        </p>
        <div className="flex justify-center">
          <img
            src={`https://pabellona-admin.s3.us-east-1.amazonaws.com/${data.artWorkImageUrl}`}
            alt="img"
            width={460}
            height={178}
            className=""
          />
        </div>
        <div className="flex flex-col gap-6">
          <p className="font-light text-[17px] max-500:text-[15px]">
            {data.aboutus_family_tradition}
          </p>
          <p className="font-light text-[17px] max-500:text-[15px]">
            {data.aboutus_farmToTable_experience}
          </p>
        </div>
      </div>
    </div>
  );
}
