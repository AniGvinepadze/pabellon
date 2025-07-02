import React from "react";
import hero from "../../../public/assets/75-1_final 1.svg";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="max-w-[1250px] w-full m-auto ">
      <Image
        priority={true}
        src={hero}
        alt="hero"
        width={1600}
        height={400}
        className="max-w-[1600px] w-full object-contain "
      />
    </div>
  );
}
