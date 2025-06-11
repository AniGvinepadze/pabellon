import { logoCol } from "@/app/assets";
import Image from "next/image";
import React from "react";

export default function PabellonSection() {
  return (
    <div className="w-full flex flex-col  items-center my-10">
      <div className="max-w-[990px] w-full flex flex-col items-center justify-center text-center gap-7" >
        
        <Image src={logoCol} alt="logo" width={247} height={158} />
        <p className="font-normal text-xl">
      
          Located in the heart of Kakheti,Pabellón promises to redefine your
          travel experience with state-of-the-art amenities, exceptional service
          and an atmosphere designed for both relaxation and inspiration.
          Integrating elements of Georgian culture and heritage into the design
          to tell Pabellón's unique story and create a sense of
          authenticity.Whether you're traveling for business, leisure or a
          special occasion, Pabellón offers everything you need to make your
          stay memorable.
        </p>
      </div>
    </div>
  );
}
