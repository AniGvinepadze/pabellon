"use client";
import { IMakrine } from "@/app/components/Makrine-Resraurant/MakrineSection";
import { axiosInstance } from "@/app/lib/axiosInstance";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function page() {
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
    <div className="max-w-[1200px] w-full my-20 flex flex-col gap-10 justify-center items-center max-1250:flex-col m-auto p-3">
      <Image
        priority={true}
        src={`https://pabellona-admin.s3.us-east-1.amazonaws.com/${restaurantData.menuImageUrl}`}
        alt="menuImageUrl"
        width={1420}
        height={677}
        className="max-w-[1420px] w-full rounded-xl object-contain"
      />
      <Image
        priority={true}
        src={`https://pabellona-admin.s3.us-east-1.amazonaws.com/${restaurantData.menuImageUrlSecondPart}`}
        alt="menuImageUrl"
        width={1420}
        height={877}
        className="max-w-[1420px] w-full rounded-xl object-contain"
      />
    </div>
  );
}
