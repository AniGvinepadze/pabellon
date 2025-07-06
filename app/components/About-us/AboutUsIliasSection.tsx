import { iliaLake, inscription } from "@/app/assets";
import Image from "next/image";
import React from "react";

export default function AboutUsIliasSection() {
  return (
    <div className="max-w-[1250px] w-full m-auto flex flex-col justify-center items-center text-center text-secondaryTextColor ">
      <div className=" max-w-[850px] w-full flex flex-col justify-center items-center text-center text-secondaryTextColor font-mono-serif gap-16">
        <div className="flex flex-col gap-6">
          <p className="font-light text-[17px] max-500:text-[15px]">
            At “Pabellón,” Inspired by Georgian hospitality, art, literature,
            and history, you'll discover a world where warmth, generosity, and
            joy-filled adventure await you. Here, every detail is connected to
            history, adding nostalgic notes to your unforgettable memories and
            touching an especially dear past.
          </p>
          <p className="font-light text-[17px] max-500:text-[15px]">
            Modern and elegant rooms with stunning views over the Alazani
            Valley, authentic culinary masterpieces, gastronomic adventures and
            masterclasses, indoor and outdoor pools, spa and fitness, children's
            play areas, conference halls, and personalized service — everything
            is designed for your comfort and for holding events perfectly.
          </p>
          <p className="font-light text-[17px] max-500:text-[15px]">
            And of course — wine! Taste our variety of unique wines, each made
            from grapes grown in Kakheti's vineyards. Every bottle tells a story
            about the traditions of local winemaking.
          </p>
        </div>
        <Image
          priority={true}
          src={iliaLake}
          alt="ilialake"
          width={678}
          height={602}
        />
      </div>
      <div className="flex flex-col gap-14 justify-center mt-7 max-450:gap-12">
        <p className="font-light text-[17px] max-500:text-[15px]">
          In Kvareli, where Ilia Chavchavadze spent his childhood, the
          surroundings create a fitting atmosphere and bring history to life. It
          is precisely under the shade of the magnificent walnut tree that the
          heritage of Georgia is felt, taking us back to Ilia’s era.
        </p>
        <div className="flex justify-center">
          <Image
            priority={true}
            src={inscription}
            alt="ilialake"
            width={460}
            height={178}
          />
        </div>
        <div className="flex flex-col gap-6">
          <p className="font-light text-[17px] max-500:text-[15px]">
            Makrine — the aunt who raised Ilia as her son — always valued
            family, tradition, and the true culture of Georgian hospitality.
            That's why the table created in her memory is a place where you can
            enjoy delicious dishes and create unforgettable memories with your
            loved ones.
          </p>
          <p className="font-light text-[17px] max-500:text-[15px]">
            <p className="font-light text-[17px] max-500:text-[15px]">
              The “farm-to-table” concept highlights the value of each dish and
              the importance of local community involvement. But beyond its
              authentic agricultural roots, this is a truly Georgian tradition —
              a direction where comfort, style, and unforgettable experiences
              come together.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}
