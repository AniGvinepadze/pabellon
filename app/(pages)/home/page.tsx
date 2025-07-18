import BookSection from "@/app/components/Home/BookSection";
import ContactUsSection from "@/app/components/Home/ContactUsSection";
import Hero from "@/app/components/Home/Hero";
import PabellonSection from "@/app/components/Home/PabellonSection";
import RoomsSection from "@/app/components/Home/RoomsSection";
import TextSection from "@/app/components/Home/TextSection";
import React from "react";

export default function page() {
  return (
    <div className="max-w-[1600px]  w-full m-auto p-3">
      <Hero />
      <div className="max-w-[1600px]  w-full ">
        <BookSection />
        <PabellonSection />
        <RoomsSection />
        <TextSection />
        <div className="max-w-[1600px]  w-full">
          <ContactUsSection />
        </div>
      </div>
    </div>
  );
}
