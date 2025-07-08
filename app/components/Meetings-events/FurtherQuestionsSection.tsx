"use client";
import { axiosInstance } from "@/app/lib/axiosInstance";
import React, { useEffect, useState } from "react";

export interface iFurther {
  further_title: string;
  further_about_team: string;
  further_getInTouch: string;
  further_email: string;
  further_phone: string;
  imageUrl?: string;
}
export default function FurtherQuestionSection() {
  const [restaurantData, setRestaurantData] = useState<iFurther | null>(null);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const language = "en";

  useEffect(() => {
    const fetchData = async () => {
      const language = localStorage.getItem("language") || "en";

      try {
        const response = await axiosInstance.get(
          `/api/further?lang=${language}`
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
    <div className="max-w-[600px] w-full m-auto my-20 flex flex-col items-center justify-center text-center text-secondaryTextColor  ">
      <div className="flex flex-col gap-4 max-400:gap-2">
        <h2 className="font-semibold text-[40px] max-450:text-[32px]">
          {restaurantData.further_title}
        </h2>
        <p className="font-light text-base">
          {restaurantData.further_about_team}
        </p>
        <p className="italic font-normal custom-font text-xl">
          {restaurantData.further_getInTouch}
        </p>
        <div>
          <p className="font-light text-sm">
            Email : {restaurantData.further_email}
          </p>
          <p className="font-light text-sm">
            Phone Number: {restaurantData.further_phone}
          </p>
        </div>
      </div>
    </div>
  );
}
