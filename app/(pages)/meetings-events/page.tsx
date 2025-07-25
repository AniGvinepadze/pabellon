import ContactUsSection from "@/app/components/Home/ContactUsSection";
import ConferenceRoomsSection from "@/app/components/Meetings-events/ConferenceRoomsSection";
import ConferenceSection from "@/app/components/Meetings-events/ConferenceSection";
import FurtherQuestionSection from "@/app/components/Meetings-events/FurtherQuestionsSection";
import SpacesSection from "@/app/components/Meetings-events/SpacesSection";
import React from "react";

export default function page() {
  return (
    <div className="max-w-[1600px] m-auto p-3">
      <ConferenceSection />
      <SpacesSection />
      <ConferenceRoomsSection />
      <div className="mb-20">
        {" "}
        <ContactUsSection />
      </div>
    </div>
  );
}
