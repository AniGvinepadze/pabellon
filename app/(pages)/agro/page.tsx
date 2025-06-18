import AgroSection from "@/app/components/Agro/AgroSection";
import OurMissionSection from "@/app/components/Agro/OurMissionSection";
import React from "react";

export default function page() {
  return (
    <div className="max-w-[1600px] m-auto p-3">
      <div className="my-20">
        <AgroSection />
        <OurMissionSection />
      </div>
    </div>
  );
}
