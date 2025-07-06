import React from "react";

export default function AboutUsaSection() {
  return (
    <div className="max-w-[1250px] w-full m-auto flex flex-col justify-center items-center text-center text-secondaryTextColor">
      <div className="w-full flex flex-col justify-center items-center text-center text-secondaryTextColor font-mono-serif gap-6 max-400:gap-3">
        <h2 className="font-semibold text-[40px] italic  max-600:text-[32px] max-400:text-[26px]">
          About Us
        </h2>
        <h2 className="custom-font font-normal text-[30px] italic max-600:text-[22px] max-400:text-[18px]">
          Inspired by traditional Georgian archeology, art, literature, history
          and motifs
        </h2>
        <p className="text-[17px] font-light max-w-[780px] max-600:text-[15px] max-400:text-[13px]">
          We promise an escape to a world of warmth, generosity, and playful
          delight, where every detail is designed to spark joy and create
          lasting memories. Our mission is to create a haven of hospitality that
          ignites childlike wonder and unforgettable memories for our guests. 
        </p>
      </div>
      <div className="my-20">
        <video className="max-w-[1600px] w-full" controls autoPlay loop muted>
          <source src="/videos/PABELLON-STORY-NEW-V1-SD.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
