import ContactUsSection from "@/app/components/Home/ContactUsSection";
import FurtherQuestionSection from "@/app/components/Meetings-events/FurtherQuestionsSection";
import FacilitiesSection from "@/app/components/Services/FacilitiesSection";
import WellnessSection from "@/app/components/Services/WellnessSection";
import OurFacilitiesSection from "@/app/components/Wellness-fitness/OurFacilitiesSection";
import PoolSection from "@/app/components/Wellness-fitness/PoolSection";
import SpaWellnessSection from "@/app/components/Wellness-fitness/SpaWellnessSection";
import React from "react";

export default function page() {
  return (
    <div className="max-w-[1600px] m-auto p-3">
        <div className="my-20">
      <WellnessSection />
      <OurFacilitiesSection/>
      <SpaWellnessSection/>
      <PoolSection/>
  <div className="mb-20">
          {" "}
          <ContactUsSection />
        </div>
      </div>
    </div>
  );
}
