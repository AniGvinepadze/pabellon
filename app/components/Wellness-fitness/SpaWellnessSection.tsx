import { wellnessImg1, wellnessImg2, wellnessImg3 } from "@/app/assets";
import Image from "next/image";
import React from "react";

export default function SpaWellnessSection() {
  return (
    <div className="max-w-[1300px] w-full m-auto flex flex-col justify-center items-center text-center text-secondaryTextColor">
      <div className="max-w-[650px] w-full flex flex-col justify-center items-center text-center text-secondaryTextColor font-mono-serif gap-6 max-400:gap-3">
        <h2 className="font-semibold text-[40px] italic  max-600:text-[32px] max-400:text-[26px]">
          Spa / Wellness
        </h2>

        <p className="text-[17px] font-light max-w-[780px] max-600:text-[15px] max-400:text-[13px]">
          Breathe deeply. Let go. Immerse yourself in the Our Spa & Wellness
          offerings are designed to reconnect you with your natural rhythms,
          balancing body, mind and spirit in a setting of pure tranquility.
        </p>
      </div>
      <div className="w-full m-auto flex justify-between gap-6 my-20 max-750:flex-col max-750:mt-72 max-450:mt-56 max-400:mt-36">
        <div className="max-w-[700px] w-full flex flex-col justify-center items-center ">
          <div className="max-w-[470px] w-full max-h-[500px] flex flex-col justify-center items-center text-center max-1200:mt-9 max-750:max-w-[1000px]">
            <Image
              priority={true}
              src={wellnessImg2}
              alt="img"
              width={469}
              height={617}
              className=" max-w-[470px] w-full object-cover max-1200:max-w-[300px] max-850:max-w-[240px] max-750:max-w-[700px] max-750:max-h-[600px] max-450:max-h-[550px]"
            />
            <p className="font-light text-base my-7 max-750:min-h-[300px] max-400:min-h-[230px] max-300:min-h-[190px]">
              Whether you're seeking wellness, fun, or simply a beautiful place
              to pause, our pools offer the perfect balance of comfort, leisure,
              and enjoyment for all ages.
            </p>
          </div>
        </div>
        <div className="max-w-[700px] w-full">
          <Image
            priority={true}
            src={wellnessImg1}
            alt="img"
            width={700}
            height={920}
            className="max-w-[700px] w-full object-cover"
          />
        </div>
      </div>

      <div className="w-full flex justify-between gap-5 my-10  max-750:flex-col-reverse">
        <div className="max-w-[800px] w-full m-auto">
          <Image
            priority={true}
            src={wellnessImg3}
            alt="wellness"
            width={800}
            height={500}
          />
        </div>
        <div className="max-w-[800px] w-full flex flex-col justify-center items-center text-center">
          <div className="max-w-[450px] w-full ">
            <p className="text-2xl max-1000:text-xl max-450:text-lg font-normal custom-font">
              {" "}
              Let ancient worlds and wonder guide an unforgettable adventure
            </p>
            <button className="bg-secondaryTextColor px-8 py-2 border border-secondaryTextColor hover:bg-transparent transition-all ease-in-out duration-300 text-beige hover:text-secondaryTextColor text-[17px] font-normal my-8">
              see the menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
