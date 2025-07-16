"use client";
import { barImg, chefImg } from "@/app/assets";
import { axiosInstance } from "@/app/lib/axiosInstance";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
export interface IContact {
  experience_title: string;
  experience_description: string;
  imageUrl: string;
}
export default function ContactInfo() {
  const [showNewPopup, setShowNewPopup] = useState<boolean>(false);
  const popupRef = useRef<HTMLDivElement | null>(null);
  const [restaurantData, setRestaurantData] = useState<IContact | null>(null);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const language = "en";

  const fetchData = async () => {
    const language = localStorage.getItem("language") || "en";

    try {
      const response = await axiosInstance.get(`/api/contact?lang=${language}`);
      setRestaurantData(response.data);

      if (response.data && response.data.length > 0) {
        setRestaurantData(response.data[0]);
      }
    } catch (err: any) {
      setError(err.message ?? "Unknown error");
    } finally {
      setLoading(false);
    }
  };
    useEffect(() => {
    fetchData();
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setShowNewPopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!restaurantData) {
    return <div>No data available.</div>;
  }


  return (
    <div className="max-w-[1250px] w-full m-auto text-black my-20">
      <div
        className={`transition-all duration-300 ease-in-out ${
          showNewPopup ? "min-h-[700px]" : "min-h-[500px]"
        }`}
      >
        <div className="max-w-[1250px] w-full flex justify-between gap-16 max-800:flex-col-reverse">
          <div className="max-w-[850px] w-full my-10">
            <h2 className="text-[26px] font-medium">CONTACT INFO:</h2>
            <div className="max-w-[850px] w-full my-10">
              <div>
                <label className="mb-6">Name</label>
                <input
                  type="text"
                  className="placeholder-secondaryTextColor bg-beige outline-none font-serif w-full p-2 max-400:text-base cursor-pointer"
                />
                <div className="w-full h-[1px] bg-[#7f7e7e]" />
              </div>
              <div className="max-w-[800px] w-full flex justify-between gap-7 my-9 max-500:flex-col">
                <div className="w-full max-w-[450px]">
                  <label className="mb-6">Email address</label>
                  <input
                    type="text"
                    className="placeholder-secondaryTextColor bg-beige outline-none font-serif p-2 max-400:text-base cursor-pointer"
                  />
                  <div className="w-full h-[1px] bg-[#7f7e7e] max-500:mt-8" />
                </div>
                <div className="w-full max-w-[450px]">
                  <label className="mb-6">Mobile Phone</label>
                  <input
                    type="number"
                    className="placeholder-secondaryTextColor bg-beige outline-none font-serif p-2 max-400:text-base cursor-pointer"
                  />
                  <div className="w-full h-[1px] bg-[#7f7e7e] max-500:mt-8 max-400:mt-4" />
                </div>
              </div>
              <div className="flex flex-col w-full my-10">
                <label className="mb-6">Message</label>
                <input
                  type="text"
                  className="cursor-pointer placeholder-secondaryTextColor bg-beige outline-none font-serif w-full p-2 max-400:text-base min-h-[240px] border border-[#7f7e7e]"
                />
              </div>
              <div className="flex gap-3 my-4">
                <div>
                  <input
                    type="checkbox"
                    className="max-w-[20px] w-full accent-beige max-400:max-w-[17px] cursor-pointer"
                  />
                </div>
                <div className="flex gap-2">
                  <p className="text-xl font-normal max-450:text-lg max-400:text-base">
                    I have read and accept the
                  </p>
                  <Link
                    href={"/privacy-policy"}
                    className="text-xl font-normal max-450:text-lg max-400:text-base underline"
                  >
                    privacy policy.
                  </Link>
                </div>
              </div>
              <div className="my-7">
                <button className="bg-transparent shadow-md shadow-gray-400 flex flex-col justify-center items-center p-1 px-7 text-lg font-bold">
                  SEND
                </button>
              </div>
            </div>
          </div>

          <div className="max-w-[554px] w-full flex flex-col gap-6 items-center justify-center max-800:max-w-[720px] relative">
            <div className="w-full flex flex-col justify-center text-center gap-6 items-center p-6 border-white border shadow-md shadow-gray-500">
              <Image
                priority={true}
                src={`https://pabellona-admin.s3.us-east-1.amazonaws.com/${restaurantData.imageUrl}`}
                alt="img"
                width={528}
                height={528}
              />
              <div className="w-full flex flex-col items-center justify-center p-6 gap-5">
                <p className="italic font-normal text-[40px] custom-font">
                  {restaurantData.experience_title}
                </p>
                <p className="text-base font-normal">
                  {restaurantData.experience_description}
                </p>
                <button
                  className="relative bg-transparent border border-black flex flex-col justify-center items-center px-10 py-1 my-7"
                  onClick={() => setShowNewPopup(true)}
                >
                  More Information
                </button>
                {showNewPopup && (
                  <div
                    ref={popupRef}
                    className={`absolute max-w-[350px] -bottom-32 text-start p-4 shadow-xl flex flex-col bg-beige transition-transform duration-300 ease-in-out transform ${
                      showNewPopup ? "translate-y-0" : "translate-y-5"
                    }`}
                  >
                    <Link
                      href={"/makrine-restaurant"}
                      className="text-base font-medium my-2 cursor-pointer hover:text-lg transition-all ease-in-out duration-300"
                    >
                      Bars & Restaurants
                    </Link>
                    <Link
                      href={"/meetings-events"}
                      className="text-base font-medium my-2 cursor-pointer hover:text-lg transition-all ease-in-out duration-300"
                    >
                      Meetings & Events
                    </Link>
                    <Link
                      href={"/wellness-fitness"}
                      className="text-base font-medium my-2 cursor-pointer hover:text-lg transition-all ease-in-out duration-300"
                    >
                      Spa & Wellness
                    </Link>
                    <Link
                      href={"/kids-entertainment"}
                      className="text-base font-medium my-2 cursor-pointer hover:text-lg transition-all ease-in-out duration-300"
                    >
                      Kids Entertainment
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// import { useState, useEffect, useRef } from "react";
// import { axiosInstance } from "@/app/lib/axiosInstance";
// import Image from "next/image";
// import Link from "next/link";

// export default function ContactInfo() {
//   const [showNewPopup, setShowNewPopup] = useState<boolean>(false);
//   const popupRef = useRef<HTMLDivElement | null>(null);
//   const [restaurantData, setRestaurantData] = useState<any | null>(null);

//   const [name, setName] = useState<string>("");
//   const [email, setEmail] = useState<string>("");
//   const [phone, setPhone] = useState<string>("");
//   const [message, setMessage] = useState<string>("");
//   const [guests, setGuests] = useState<number>(0);
//   const [date, setDate] = useState<string>("");

//   const fetchData = async () => {
//     try {
//       const response = await axiosInstance.get("/api/contact?lang=en");
//       setRestaurantData(response.data);
//     } catch (err) {
//       console.error("Error fetching data:", err);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//     const handleClickOutside = (event: MouseEvent) => {
//       if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
//         setShowNewPopup(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleSubmit = async () => {
//     try {
//       const response = await axiosInstance.post("/contact", {
//         name,
//         email,
//         phone,
//         message,
//         guests,
//         date,
//       });
//       console.log("Email sent successfully", response);
//     } catch (error) {
//       console.error("Error sending email", error);
//     }
//   };

//   if (!restaurantData) return <div>Loading...</div>;

//   return (
//     <div className="max-w-[1250px] w-full m-auto text-black my-20">
//       {/* Rest of the UI here */}

//       <div>
//         <label>Name</label>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="input-class"
//         />
//         <label>Email</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="input-class"
//         />
//         <label>Phone</label>
//         <input
//           type="text"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           className="input-class"
//         />
//         <label>Guests</label>
//         <input
//           type="number"
//           value={guests}
//           onChange={(e) => setGuests(Number(e.target.value))}
//           className="input-class"
//         />
//         <label>Reservation Date</label>
//         <input
//           type="date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//           className="input-class"
//         />
//         <label>Message</label>
//         <textarea
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           className="input-class"
//         />
//         <button onClick={handleSubmit}>SEND</button>
//       </div>
//     </div>
//   );
// }
