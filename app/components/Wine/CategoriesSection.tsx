import { wellnessImg } from "@/app/assets";
import Image from "next/image";
import React from "react";

export default function CategoriesSection() {
  return (
    <div className="max-w-[1400px] w-full m-auto flex flex-col justify-center items-center text-center text-secondaryTextColor">
      <div className="max-w-[1050px] w-full flex flex-col justify-center items-center text-center text-secondaryTextColor font-mono-serif gap-6 max-400:gap-3">
        <p className="text-[17px] font-light max-w-[780px] max-600:text-[15px] max-400:text-[13px]">
          Our mission is to craft exceptional wines that embody the rich
          heritage and unique character of Georgia, using the finest grapes and
          traditional methods. Pabellón winery carries the spirit of Georgia,s
          8,000-year-old winemaking culture. Our vineyards are cultivated with
          respect for the land: native grape varieties flourish under the
          Kakhetian sun, nurtured by organic practices. Every bottle tells a
          story of soil, sun, and soul. 
        </p>
      </div>
      <div className="my-20 max-w-[1100px] w-full bg-[#907655] flex flex-col justify-between items-center text-center p-10">

        <h2 className="font-semibold italic text-[40px]">Categories</h2>
        
           </div>
      </div>
    </div>
 
 
  )
}
