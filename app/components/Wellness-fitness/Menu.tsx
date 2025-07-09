"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import menu from "../../../public/assets/menu.png";
import { IWellness } from "./OurFacilitiesSection";
import { axiosInstance } from "@/app/lib/axiosInstance";

export default function Menu() {
  const [data, setData] = useState<IWellness | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const language = localStorage.getItem("language") || "en";
        const response = await axiosInstance.get(
          `/api/spa-wellness?lang=${language}`
        );
        const resData = await response.data;
        if (response.data && response.data.length > 0) {
          setData(response.data[0]);
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
    return <div className="text-center py-10">Loading...</div>;
  }
  if (error) {
    return <div className="text-center py-10 text-red-600">Error: {error}</div>;
  }
  if (!data) {
    return <div className="text-center py-10">No data available.</div>;
  }
  return (
    <div className="max-w-[3600px] w-full m-auto">
      <Image
           src={`https://pabellona-admin.s3.us-east-1.amazonaws.com/${data.menuImgUrl}`}
        alt="menu"
        width={3600}
        height={2000}
        className="object-cover max-w-[3600px] w-full"
      />
    </div>
  );
}
