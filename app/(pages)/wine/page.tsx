import ContactUsSection from "@/app/components/Home/ContactUsSection";
import FurtherQuestionSection from "@/app/components/Meetings-events/FurtherQuestionsSection";
import WineCategoriesSection from "@/app/components/Wine/WineCategoriesSection";
import WIneSection from "@/app/components/Wine/WIneSection";
import React from "react";

export default function page() {
  return (
    <div className="max-w-[1600px] m-auto p-3">
      <div className="my-20">
        <WIneSection />
        <WineCategoriesSection />
<div className="mb-20">
        {" "}
        <ContactUsSection />
      </div>
      </div>
    </div>
  );
}
