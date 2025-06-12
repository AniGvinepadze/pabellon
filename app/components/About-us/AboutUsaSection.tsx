import { pabellonSvg2 } from "@/app/assets";
import Image from "next/image";
import React from "react";

export default function AboutUsaSection() {
  return (
    <div className="max-w-[1400px] w-full m-auto flex flex-col justify-center items-center text-center text-secondaryTextColor">
      <div className="w-full flex flex-col justify-center items-center text-center text-secondaryTextColor font-mono-serif gap-6">
        <h2 className="font-semibold text-[40px] italic  ">About Us</h2>
        <h2 className="font-normal text-[30px] italic">
         inspired by traditional Georgian archeology, art, literature, history and motifs // შესაცვლელია
        </h2>
        <p className="text-[17px] font-light max-w-[780px]">
        We promise an escape to a world of warmth, generosity, and playful delight, where every detail is designed to spark joy and create lasting memories. Our mission is to create a haven of hospitality that ignites childlike wonder and unforgettable memories for our guests. 
        </p>
      </div>
      <div className="my-20"><Image src={pabellonSvg2} alt="icon" width={1540} height={940} className="max-w-[1600px] w-full "/></div>
    </div>
  );
}
