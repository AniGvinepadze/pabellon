import RoomsBookSection from "@/app/components/Rooms/RoomsBookSection";
import RoomsSection from "@/app/components/Rooms/RoomsSection";
import RoomsToBookSection from "@/app/components/Rooms/RoomsToBookSection";
import React from "react";

export default function page() {
  return (
    <div className="max-w-[1600px] m-auto p-3">
      <div className="mt-20">
        <RoomsSection />
        <RoomsBookSection />
        <RoomsToBookSection />
      </div>
    </div>
  );
}
