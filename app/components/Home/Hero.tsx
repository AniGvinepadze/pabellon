import React from "react";
import hero from "../../../public/assets/image 3.svg";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full  ">
      <Image
        src={hero}
        alt="hero"
        width={1600}
        height={400}
        className="max-w-[1600px] w-full object-contain "
      />
    </div>
  );
}
