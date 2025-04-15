'use client';
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const LandingSectionTwo = () => {
  const [selectedButton, setSelectedButton] = useState("Link Figma");

  const buttons = [
    { name: "Link Figma", image: "/landingImageOne.webp" },
    { name: "Compare design", image: "/landingImageTwo.webp" },
    { name: "Leave feedback", image: "/landingImageThree.webp" }
  ];

  const selectedImage = buttons.find((btn) => btn.name === selectedButton)?.image || "/landingImageOne.webp";

  return (
    <>
      {/* Preload images offscreen or hidden */}
      <div style={{ display: "none" }}>
        {buttons.map((btn) => (
          <Image
            key={btn.image}
            src={btn.image}
            alt=""
            width={800} // or the expected width
            height={600} // or the expected height
            priority={false}
          />
        ))}
      </div>

      <div className="flex lg:flex-row flex-col items-center gap-8 lg:gap-0 justify-between h-full">
        <div className="flex flex-col lg:w-[56.91%] h-full justify-center order-2 lg:order-1">
          <div className="flex flex-row justify-center gap-10">
            <div className="flex sm:gap-10 bg-[#F5F5F5] w-full sm:w-auto p-1 rounded-lg">
              {buttons.map((btn) => (
                <button
                  key={btn.name}
                  className={`sm:w-auto w-1/3 self-start py-2 sm:px-6 font-semibold text-sm rounded-md cursor-pointer ${selectedButton === btn.name ? "bg-bridgeBlue text-white" : "bg-transparent"}`}
                  onClick={() => setSelectedButton(btn.name)}
                >
                  {btn.name}
                </button>
              ))}
            </div>
          </div>

          {/* Active image */}
          <Image
            src={selectedImage}
            alt="icon"
            className="w-full h-full object-cover transition-opacity duration-300 ease-in-out mt-5"
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>

        <div className="flex flex-col w-full lg:w-[37.83%] h-full order-1 lg:order-2">
          <h2 className="text-2xl font-montserrat font-black">
            🔌 How BridgeQA Works
          </h2>

          <p className="leading-6 my-4 font-semibold">
            BridgeQA is a Chrome extension that helps teams instantly compare Figma designs with live websites and track issues directly in their workflow. All the feedback in one place.
          </p>

          <div className="flex text-light flex-col gap-5">
            <div className="relative p-[2px] rounded-lg bg-gradient-to-r from-[#0090FF] via-[#7D00FF] to-[#A600FF]">
              <p className="bg-white rounded-md p-4">
                📌 <span className="font-semibold">Step 1:</span> Open BridgeQA & Select Your Figma Frame
              </p>
            </div>
            <div className="relative p-[2px] rounded-lg bg-gradient-to-r from-[#0090FF] via-[#7D00FF] to-[#A600FF]">
              <p className="bg-white rounded-md p-4">
                📌 <span className="font-semibold">Step 2:</span> Compare with the Live Website
              </p>
            </div>
            <div className="relative p-[2px] rounded-lg bg-gradient-to-r from-[#0090FF] via-[#7D00FF] to-[#A600FF]">
              <p className="bg-white rounded-md p-4">
                📌 <span className="font-semibold">Step 3:</span> Flag Issues, Leave Feedback & Sync
              </p>
            </div>
            <Link href="/how-it-works">
              <button className="py-2 px-6 rounded bg-bridgeBlue font-semibold w-auto text-sm self-start text-white cursor-pointer">
                Find out more about BridgeQA
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingSectionTwo;
