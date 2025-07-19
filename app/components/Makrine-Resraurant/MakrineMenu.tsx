"use client";
import React, { useEffect, useState } from "react";
import { IMakrine } from "./MakrineSection";
import { axiosInstance } from "@/app/lib/axiosInstance";
import Image from "next/image";
import Link from "next/link";

export default function MakrineMenu() {
  
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

    </div>
  );
}
