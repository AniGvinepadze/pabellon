import FacilitiesSection from "@/app/components/Services/FacilitiesSection";
import WellnessSection from "@/app/components/Services/WellnessSection";
import OurFacilitiesSection from "@/app/components/Wellness-fitness/OurFacilitiesSection";
import SpaWellnessSection from "@/app/components/Wellness-fitness/SpaWellnessSection";
import React from "react";

export default function page() {
  return (
    <div className="max-w-[1600px] m-auto p-3">
        <div className="my-20">
      <WellnessSection />
      <OurFacilitiesSection/>
      <SpaWellnessSection/>
      </div>
    </div>
  );
}
