import { logoCol, pabellonSvg } from "@/app/assets";
import Image from "next/image";
import React from "react";

export default function PabellonSection() {
  return (
    <div className="w-full max-w-[1300px] m-auto flex flex-col  items-center my-10 p-4 ">
      <div className="max-w-[990px] w-full flex flex-col items-center justify-center text-center gap-7 ">
        <Image
          priority={true}
          src={logoCol}
          alt="logo"
          width={247}
          height={158}
          className="max-500:w-[200px] max-350:w-[170px]"
        />
        <p className="font-normal text-xl max-500:text-lg max-350:text-base">
          Pabellon Hotel, located in the heart of Kakheti, is the place that
          fills each guest with amazing impressions. In addition to its concept
          being rooted in the Chavchavadze mood, it stands out with comfort
          suitable for modern times, high-level service, and a cozy atmosphere.
          With such a synthesis, Pabellon Hotel is an ideal space for both rest
          and inspiration.
        </p>
        <p className="font-normal text-lg max-500:text-lg max-350:text-base">
          To bring the idea to life, the interior is full of elements
          characteristic of Georgian culture and heritage, in order to create an
          authentic and unforgettable atmosphere.
        </p>
      </div>

      <div className="my-20">
        <Image
          priority={true}
          src={pabellonSvg}
          alt="icon"
          width={1540}
          height={928}
          className="max-w-[1600px] w-full"
        />
      </div>
    </div>
  );
}
