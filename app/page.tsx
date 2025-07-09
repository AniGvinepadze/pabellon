import Image from "next/image";
import LanginPage from "./components/Landing/LanginPage";
import Hero from "./components/Home/Hero";
import BookSection from "./components/Home/BookSection";
import PabellonSection from "./components/Home/PabellonSection";
import RoomsSection from "./components/Home/RoomsSection";
import TextSection from "./components/Home/TextSection";
import ContactUsSection from "./components/Home/ContactUsSection";

export default function Home() {
  return (
    //   <div className="max-w-[6000px] w-full m-auto bg-[#EBE5D3] ">
    //  <LanginPage/>

    //   </div>
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
