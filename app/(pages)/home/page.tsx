import BookSection from "@/app/components/Home/BookSection";
import Hero from "@/app/components/Home/Hero";
import React from "react";

export default function page() {
  return (
    <div className="max-w-[1600px]  w-full m-auto p-3">
      <Hero />
      <div className="max-w-[1600px]  w-full "> 
      <BookSection/>
      </div>
    </div>
  );
}
