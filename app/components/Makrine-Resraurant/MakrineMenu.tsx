"use client";
import React, { useEffect, useState } from "react";
import { IMakrine } from "./MakrineSection";
import { axiosInstance } from "@/app/lib/axiosInstance";
import Image from "next/image";
import Link from "next/link";

export default function MakrineMenu() {
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
    <div className="max-w-[1250px] w-full m-auto flex flex-col justify-center items-center text-center text-secondaryTextColor my-20">
      <div className="max-w-[500px] w-full flex flex-col justify-center items-center text-center text-secondaryTextColor font-mono-serif gap-12 max-400:gap-3">
        <Image
          priority={true}
          src={`https://pabellona-admin.s3.us-east-1.amazonaws.com/${restaurantData.menuLogoImageUrl}`}
          alt="menuImageUrl"
          width={520}
          height={307}
          className=" rounded-xl"
        />
        <Link
          href={"/restaurant-menu"}
          className="w-full px-2 py-4 text-base font-medium cursor-pointer hover:scale-110 transition-all ease-in-out duration-300 max-400:text-base text-beige bg-secondaryTextColor rounded-xl"
        >
          See The Menu
        </Link>
      </div>

      {/* <div className="max-w-[1200px] w-full my-20 flex gap-10 justify-between items-center max-1250:flex-col p-3">
        <Image
          priority={true}
          src={`https://pabellona-admin.s3.us-east-1.amazonaws.com/${restaurantData.menuImageUrl}`}
          alt="menuImageUrl"
          width={620}
          height={677}
          className="max-w-[600px] w-full rounded-xl object-contain"
        />
        <Image
          priority={true}
          src={`https://pabellona-admin.s3.us-east-1.amazonaws.com/${restaurantData.menuImageUrlSecondPart}`}
          alt="menuImageUrl"
          width={620}
          height={877}
          className="max-w-[600px] w-full rounded-xl object-contain"
        />
      </div> */}
    </div>
  );
}
