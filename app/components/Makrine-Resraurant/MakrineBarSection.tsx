import { barImg, makrineImg4 } from "@/app/assets";
import Image from "next/image";
import React from "react";

export default function MakrineBarSection() {
  return (
    <div className="w-full m-auto text-secondaryTextColor p-3 ">
      <div className="max-w-[1200px] w-full flex m-auto justify-center gap-10 items-center text-center max-800:flex-col">
        <div className="min-h-[700px] max-w-[700px] w-full flex flex-col items-center justify-center gap-5 p-5 max-800:min-h-[100px] max-400:p-0 ">
          <h2 className="text-[40px] font-normal max-400:text-[32px]">
            Restaurant Bar
          </h2>
          <p className="text-[17px] font-light max-w-[600px] w-full max-850:text-sm">
            {" "}
            Inspired by the rich heritage of Georgian cuisine, every dish is a
            tribute to local ingredients, ancient recipes, and the soulful
            hospitality Georgia is known for - reimagined with a modern touch.
            And a bar - a vibrant extension of the Georgian dining experience,
            where classic toasts meet modern mixology. Here, the rich heritage
            of Georgian wine and traditional infusions are celebrated alongside
            creative drinks crafted with local ingredients and global
            inspiration.{" "}
          </p>
        </div>
        <div className="max-w-[650px] w-full flex justify-center item-center  ">
          <Image
            priority={true}
            src={makrineImg4}
            alt="barImg"
            width={660}
            height={750}
            className="max-700:max-w-[400px] "
          />
        </div>
      </div>
    </div>
  );
}
