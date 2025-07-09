"use client"
import { axiosInstance } from "@/app/lib/axiosInstance";
import React, { useEffect, useState } from "react";
import { Home } from "./PabellonSection";

export default function TextSection() {
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
    <div className="w-full max-w-[1250px] m-auto flex flex-col  items-center my-10 p-4 ">
      <div className="max-w-[990px] w-full flex flex-col items-center justify-center text-center gap-7   max-1050:mt-24 ">
        <p className="font-notmal text-xl">
        {language === "en"
            ? homeData.home_big_description_en
            : homeData.home_big_description_ge}
        </p>
      </div>
    </div>
  );
}
