import BarSection from "@/app/components/Services/BarSection";
import FacilitiesSection from "@/app/components/Services/FacilitiesSection";
import MeetingSection from "@/app/components/Services/MeetingSection";
import RestaurantBookSection from "@/app/components/Services/RestaurantBookSection";
import RestaurantSection from "@/app/components/Services/RestaurantSection";
import WellnessSection from "@/app/components/Services/WellnessSection";
import React from "react";

export default function page() {
  return (
    <div className="max-w-[1600px] m-auto p-3">
      <div className="mt-28">
        <RestaurantSection />
        <RestaurantBookSection/>
        <div className="mt-40 max-850:mt-20 max-750:mt-0 max-700:mt-20">
        <BarSection/>
        
        </div>
        <MeetingSection/>
        <WellnessSection/>
        <FacilitiesSection/>
      </div>
    </div>
  );
}
