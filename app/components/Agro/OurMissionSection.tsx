import { walnut2 } from "@/app/assets";
import Image from "next/image";
import React from "react";

export default function OurMissionSection() {
  return (
    <div className="max-w-[1400px] w-full m-auto flex flex-col justify-center items-center text-center text-secondaryTextColor">
      <div className="max-w-[1100px] w-full flex  justify-between items-center text-center text-secondaryTextColor font-mono-serif gap-6 max-400:gap-3">
        <div className="max-w-[400px] w-full">
          <h2 className="font-semibold text-[40px] italic  max-600:text-[32px] max-400:text-[26px]">
            Our Mission
          </h2>
          <p className="text-[17px] font-light max-w-[780px] max-600:text-[15px] max-400:text-[13px]">
            Our mission is to cultivate beautiful gardens that provide fresh,
            organic product for our hotel and restaurant, while practicing
            sustainable agriculture. Our farmers know their soil intimately,
            allowing us to bring the purest flavors of each season to your
            plate.{" "}
          </p>
        </div>
        <div className="max-w-[828px] w-full">
          <Image src={walnut2} alt="walnutImg" width={828} height={958} />
        </div>
      </div>
    </div>
  );
}
