import { blog } from "@/app";
import Image from "next/image";
import React from "react";

export default function BlogSection() {
  return (
    <div className="max-w-[1400px] w-full m-auto flex flex-col justify-center items-center text-center text-secondaryTextColor">
      <div className="max-w-[650px] w-full flex flex-col justify-center items-center text-center text-secondaryTextColor font-mono-serif gap-6 max-400:gap-3">
        <h2 className="font-semibold text-[40px]  max-600:text-[32px] max-400:text-[26px]">
          Last News
        </h2>
      </div>
      <div className="max-w-[1400px] w-full m-auto my-20">
        <div className="w-full grid grid-cols-3 gap-10">
          {blog.map((e) => (
            <div key={e.id} className="p-5 flex flex-col gap-10">
              <Image src={e.img} alt="blogImg" />
              <div>
                <p className="text-xl font-normal my-1">{e.title}</p>
                <p className="text-base font-light">{e.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
