"use client";
import { barImg } from "@/app/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IRestauramt } from "./RestaurantSection";
import { axiosInstance } from "@/app/lib/axiosInstance";

export default function BarSection() {
  const [restaurantData, setRestaurantData] = useState<IRestauramt | null>(
    null
  );

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const language = "en";

  useEffect(() => {
    const fetchData = async () => {
      const language = localStorage.getItem("language") || "en";

      try {
        const response = await axiosInstance.get(
          `/api/services?lang=${language}`
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
    <div className="w-full m-auto text-secondaryTextColor p-3 ">
      <div className="max-w-[1200px] w-full flex m-auto justify-center gap-10 items-center text-center max-700:flex-col">
        <div className="max-w-[650px] w-full flex justify-center item-center  ">
          <Image
            priority={true}
            src={`https://pabellona-admin.s3.us-east-1.amazonaws.com/${restaurantData.barImageUrl}`}
            alt="barImg"
            width={660}
            height={750}
            className="max-700:max-w-[400px] "
          />
        </div>
        <div className="min-h-[700px] max-w-[700px] w-full flex flex-col items-center justify-center gap-5 p-5 max-700:min-h-[250px] max-400:p-0">
          <h2 className="text-[40px] font-normal max-400:text-[32px]">
  
            {restaurantData.bars_title}
          </h2>
          <p className="text-[17px] font-light max-w-[400px] w-full max-850:text-sm">
            {restaurantData.bars_section_description}
          </p>
        </div>
      </div>
    </div>
  );
}
