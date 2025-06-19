
import RoomsBookSection from "@/app/components/Blog/RoomsBookSection";
import RoomsSection from "@/app/components/Rooms/RoomsSection";
import React from "react";

export default function page() {
  return (
    <div className="max-w-[1600px] m-auto p-3">
      <div className="mt-28">
        <RoomsSection/>
        <RoomsBookSection/>
      </div>
    </div>
  );
}
