'use client'
import { useState } from "react";

const LandingSectionTwo = () => {
    // State to track the selected button
    const [selectedButton, setSelectedButton] = useState("Link Figma");

    // Button options and corresponding images
    const buttons = [
        { name: "Link Figma", image: "/landingImageOne.png" },
        { name: "Compare with design", image: "/landingImageTwo.png" },
        { name: "Leave feedback", image: "/landingImageThree.png" }
    ];

    // Find the selected image based on the button
    const selectedImage = buttons.find((btn) => btn.name === selectedButton)?.image || "/landingImageOne.png";

    return (
        <div className="flex lg:flex-row flex-col items-center gap-8 lg:gap-0 justify-between h-full">
            <div className="flex flex-col lg:w-[56.91%] h-full justify-center order-2 lg:order-1">
                <div className="flex flex-row justify-center gap-10 w-auto">
                    <div className="flex gap-10 bg-[#F5F5F5] p-1 rounded-lg">
                        {buttons.map((btn) => (
                            <button
                                key={btn.name}
                                className={`w-auto self-start py-2 px-6 font-semibold text-sm rounded-md cursor-pointer ${
                                    selectedButton === btn.name ? "bg-bridgeBlue text-white" : "bg-transparent"
                                }`}
                                onClick={() => setSelectedButton(btn.name)}
                            >
                                {btn.name}
                            </button>
                        ))}
                    </div>
                </div>
                
                {/* Dynamic Image Update */}
                <img src={selectedImage} alt="Selected Visual" className="w-full transition-opacity duration-300 ease-in-out" />
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
                        <p className="bg-white  rounded-md p-4">
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
                    <button className="py-2 px-6 rounded bg-bridgeBlue font-semibold w-auto text-sm self-start text-white cursor-pointer">
                        Find out more about BridgeQA
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LandingSectionTwo;
