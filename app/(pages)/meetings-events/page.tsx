import ConferenceSection from "@/app/components/Meetings-events/ConferenceSection";
import SpacesSection from "@/app/components/Meetings-events/SpacesSection";
import React from "react";

export default function page() {
  return <div className="max-w-[1600px] m-auto p-3">
    <ConferenceSection/>
    <SpacesSection/>
  </div>;
}
